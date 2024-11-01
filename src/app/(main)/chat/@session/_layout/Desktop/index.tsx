import { PropsWithChildren } from 'react';

import PanelBody from './PanelBody';

const DesktopLayout = ({ children }: PropsWithChildren) => {
  return <PanelBody>{children}</PanelBody>;
};

export default DesktopLayout;
