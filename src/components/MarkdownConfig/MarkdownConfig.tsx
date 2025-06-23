import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import styles from './MarkdownConfig.module.scss';
import { FC } from 'react';

type Props = {
  content: string;
  className?: string;
};

const MarkdownConfig: FC<Props> = ({ content, className }) => {
  return (
    <div className={`${styles.markdown} ${className}`}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeRaw]}
        skipHtml={false}
      >
        {content}
      </Markdown>
    </div>
  );
};

export default MarkdownConfig;
