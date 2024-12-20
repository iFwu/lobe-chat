import { GridShowcase } from '@lobehub/ui';
import { PropsWithChildren } from 'react';
import { Flexbox } from 'react-layout-kit';

import { ORG_NAME } from '@/const/branding';
import { isCustomORG } from '@/const/version';
import Follow from '@/features/Follow';

const COPYRIGHT = `© ${new Date().getFullYear()} ${ORG_NAME}`;

const DesktopLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Flexbox
        align={'center'}
        height={'100%'}
        justify={'space-between'}
        padding={16}
        style={{ position: 'relative', top: '-25%' }}
        width={'100%'}
      >
        <div />
        <GridShowcase
          innerProps={{ gap: 24 }}
          style={{ maxHeight: 'calc(100% - 104px)', maxWidth: 1024 }}
          width={'100%'}
        >
          {children}
        </GridShowcase>
      </Flexbox>
    </>
  );
};

export default DesktopLayout;
