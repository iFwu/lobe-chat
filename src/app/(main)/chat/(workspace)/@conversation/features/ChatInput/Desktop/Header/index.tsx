import { memo } from 'react';

import ActionBar from '@/features/ChatInput/ActionBar';

interface HeaderProps {
  expand: boolean;
  setExpand: (expand: boolean) => void;
}

const Header = memo<HeaderProps>(() => <ActionBar />);

export default Header;
