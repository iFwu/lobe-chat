import { changeLanguage } from 'i18next';

export const switchLang = () => {
  const lang = 'en-US';  // 强制使用英文
  
  changeLanguage(lang);
  document.documentElement.lang = lang;
};
