'use client';

import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css, token }) => ({
  link: css`
    display: flex;
    align-items: center;
    padding: 16px 24px;
    color: ${token.colorTextDescription};
    font-size: 14px;
    text-decoration: none;
    border-top: 1px solid ${token.colorBorder};
    margin-top: auto;
    background: ${token.colorBgContainer};

    &:hover {
      background: ${token.colorFillTertiary};
    }
  `,
}));

const PetSuppliesLink = () => {
  const { styles } = useStyles();

  return (
    <a
      className={styles.link}
      href="https://www.petco.com/"
      rel="noopener noreferrer"
      target="_blank"
    >
      Pet Supplies, Pet Food, & Pet Products
    </a>
  );
};

export default PetSuppliesLink;
