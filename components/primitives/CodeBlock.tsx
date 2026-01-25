'use client';

import { Highlight, themes } from 'prism-react-renderer';
import { motion } from 'framer-motion';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
}

export function CodeBlock({
  code,
  language = 'typescript',
  className = '',
  showLineNumbers = true,
  highlightLines = [],
}: CodeBlockProps) {
  return (
    <motion.div
      className={`rounded-lg overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
        {({ className: hlClassName, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${hlClassName} p-4 overflow-x-auto text-sm`} style={style}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              const isHighlighted = highlightLines.includes(i + 1);
              return (
                <div
                  key={i}
                  {...lineProps}
                  className={`${lineProps.className} ${isHighlighted ? 'bg-white/10 -mx-4 px-4' : ''}`}
                >
                  {showLineNumbers && (
                    <span className="inline-block w-8 text-white/30 select-none">
                      {i + 1}
                    </span>
                  )}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </motion.div>
  );
}
