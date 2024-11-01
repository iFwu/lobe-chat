import isEqual from 'fast-deep-equal';
import { memo } from 'react';

import { useSessionStore } from '@/store/session';
import { sessionSelectors } from '@/store/session/selectors';
import { useUserStore } from '@/store/user';
import { authSelectors } from '@/store/user/selectors';

// import Inbox from './Inbox';
import SessionList from './List';

const DefaultMode = memo(() => {
  const isLogin = useUserStore(authSelectors.isLogin);
  const [useFetchSessions] = useSessionStore((s) => [s.useFetchSessions]);
  useFetchSessions(isLogin);

  const defaultSessions = useSessionStore(sessionSelectors.defaultSessions, isEqual);

  return (
    <>
      {/* <Inbox /> */}
      <SessionList dataSource={defaultSessions || []} />
    </>
  );
});

DefaultMode.displayName = 'SessionDefaultMode';

export default DefaultMode;
