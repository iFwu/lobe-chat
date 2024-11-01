import MobileContentLayout from '@/components/server/MobileNavLayout';

import { LayoutProps } from '../type';
import PortalModal from './PortalModal';
import TopicModal from './TopicModal';

const Layout = ({ children, topic, conversation, portal }: LayoutProps) => {
  return (
    <>
      <MobileContentLayout style={{ overflowY: 'hidden' }}>
        {conversation}
        {children}
      </MobileContentLayout>
      <TopicModal>{topic}</TopicModal>
      <PortalModal>{portal}</PortalModal>
    </>
  );
};

Layout.displayName = 'MobileConversationLayout';

export default Layout;
