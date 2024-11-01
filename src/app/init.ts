import { configService } from '@/services/config';
import defaultConfig from '@/const/defaultConfig.json';
import { useChatStore } from '@/store/chat';
import { useSessionStore } from '@/store/session';

export const initializeDefaultAgents = async () => {
  const INIT_FLAG = 'LOBE_AGENTS_INITIALIZED';
  const isInitialized = localStorage.getItem(INIT_FLAG);
  
  if (!isInitialized) {
    try {
      // 获取 store 的刷新方法
      const refreshSessions = useSessionStore.getState().refreshSessions;
      const { refreshMessages, refreshTopic } = useChatStore.getState();

      // 导入默认配置
      await configService.importConfigState(defaultConfig as any, {
        onError: (error) => {
          console.error('Import error:', error);
        },
        onStageChange: (stage) => {
          console.log('Import stage:', stage);
        },
        onSuccess: (data, duration) => {
          console.log('Import success:', data, 'duration:', duration);
        },
      });

      // 刷新数据
      await refreshSessions();
      await refreshMessages();
      await refreshTopic();

      // 设置初始化标记
      localStorage.setItem(INIT_FLAG, 'true');
      
      console.log('Default agents imported successfully');
    } catch (error) {
      console.error('Failed to import default agents:', error);
    }
  }
};