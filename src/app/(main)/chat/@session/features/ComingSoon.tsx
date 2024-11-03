'use client';

import { PlusCircleOutlined } from '@ant-design/icons';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css, token }) => ({
  comingSoon: css`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 24px;
    color: ${token.colorTextDescription};
    font-size: 16px;
  `,
  icon: css`
    font-size: 18px;
  `,
}));

const ComingSoon = () => {
  const { styles } = useStyles();
  return (
    <div className={styles.comingSoon}>
      <PlusCircleOutlined className={styles.icon} />
      Coming Soon...
    </div>
  );
};

export default ComingSoon;