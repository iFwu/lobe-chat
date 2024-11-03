'use client';

import Image from 'next/image';
import { memo } from 'react';
import { Center } from 'react-layout-kit';

const WelcomeLogo = memo<{ mobile?: boolean }>(({ mobile }) => {
  return mobile ? (
    <Center height={240} width={240}>
      <Image
        alt="logo"
        height={240}
        src="/logo.png"
        width={240}
      />
    </Center>
  ) : (
    <Center
      style={{
        height: `min(600px, 40vw)`,
        marginBottom: '-10%',
        marginTop: '-13%',
        position: 'relative',
        width: `min(600px, 40vw)`,
      }}
    >
      <Image
        alt="logo"
        height={600}
        src="/logo.png"
        style={{
          height: 'min(600px, 40vw)',
          width: 'min(600px, 40vw)',
        }}
        width={600}
      />
    </Center>
  );
});

export default WelcomeLogo;
