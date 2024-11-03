'use client';

import { memo } from 'react';
import LobeChat from './LobeChat';

export const WelcomeLogo = memo<{ mobile?: boolean }>(({ mobile }) => {
  return <LobeChat mobile={mobile} />;
});
