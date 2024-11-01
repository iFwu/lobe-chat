'use client';

import { memo } from 'react';

import CloudBanner from '@/features/AlertBanner/CloudBanner';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

import { LayoutProps } from './type';

const Layout = memo(({ children }: LayoutProps) => {
  const { showCloudPromotion } = useServerConfigStore(featureFlagsSelectors);

  return (
    <>
      {showCloudPromotion && <CloudBanner mobile />}
      {children}
    </>
  );
});

Layout.displayName = 'MobileMainLayout';

export default Layout;
