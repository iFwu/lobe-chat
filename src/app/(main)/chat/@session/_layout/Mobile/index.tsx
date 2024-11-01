import { PropsWithChildren } from 'react';

import MobileContentLayout from '@/components/server/MobileNavLayout';

const MobileLayout = ({ children }: PropsWithChildren) => {
  return (
    <MobileContentLayout>
      {children}
    </MobileContentLayout>
  );
};

export default MobileLayout;
