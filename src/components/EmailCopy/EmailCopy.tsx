import { Tooltip, Text } from '@mantine/core';
import { FC, useState } from 'react';
import copy from 'copy-to-clipboard';
import styles from './EmailCopy.module.scss';

type Props = {
  email: string;
  label: string;
};

const EmailCopy: FC<Props> = ({ email, label }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = (text: string) => {
    copy(text);
    setCopied(true);
  };

  return (
    <Tooltip
      label={copied ? 'Copied!' : 'Copy to clipboard'}
      withArrow
      position="bottom"
      color="g-dark.5"
      offset={12}
      transitionProps={{ transition: 'pop', duration: 300 }}
      events={{ hover: true, focus: true, touch: true }}
    >
      <Text
        size="16px"
        fw={500}
        c={'g-dark.9'}
        onClick={() => copyEmail(email)}
        className={styles.copyEmail}
        onMouseLeave={() => setCopied(false)}
      >
        {label}: {email}
      </Text>
    </Tooltip>
  );
};

export default EmailCopy;
