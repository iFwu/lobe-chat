'use client';

import { FluentEmoji, Markdown } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Flexbox } from 'react-layout-kit';

import { BRANDING_NAME } from '@/const/branding';
import { isCustomBranding } from '@/const/version';
import { useGreeting } from '@/hooks/useGreeting';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

import AgentsSuggest from './AgentsSuggest';
import QuestionSuggest from './QuestionSuggest';

const useStyles = createStyles(({ css, responsive }) => ({
  container: css`
    align-items: center;
    ${responsive.mobile} {
      align-items: flex-start;
    }
  `,
  desc: css`
    font-size: 14px;
    text-align: center;
    ${responsive.mobile} {
      text-align: start;
    }
  `,
  title: css`
    margin-block: 0.2em 0;
    font-size: 32px;
    font-weight: bolder;
    line-height: 1;
    ${responsive.mobile} {
      font-size: 24px;
    }
  `,
}));

const InboxWelcome = memo(() => {
  const { t } = useTranslation('welcome');
  const { styles } = useStyles();
  const mobile = useServerConfigStore((s) => s.isMobile);
  const greeting = useGreeting();
  const { showWelcomeSuggest, showCreateSession } = useServerConfigStore(featureFlagsSelectors);

  return (
    <Center padding={16} width={'100%'}>
    </Center>
  );
});

export default InboxWelcome;
