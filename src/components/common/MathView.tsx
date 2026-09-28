import React, { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathViewProps {
  math: string;
  block?: boolean;
  className?: string;
}

export const MathView: React.FC<MathViewProps> = ({ math, block = false, className = '' }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(math, containerRef.current, {
          displayMode: block,
          throwOnError: false,
          output: 'htmlAndMathml'
        });
      } catch {
        containerRef.current.innerText = math;
      }
    }
  }, [math, block]);

  return <span ref={containerRef} className={`${block ? 'block my-1 overflow-x-auto py-1' : 'inline-block mx-0.5'} ${className}`} />;
};

/**
 * TextWithMath helper: automatically parses inline $...$ or \\(...\\) and displays rich text + math
 */
export const FormattedContent: React.FC<{ content: string; className?: string }> = ({ content, className = '' }) => {
  // Split on inline $...$ or display $$...$$
  const parts = content.split(/(\$\$[\s\S]+?\$\$|\$.+?\$)/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const rawMath = part.slice(2, -2);
          return <MathView key={index} math={rawMath} block />;
        } else if (part.startsWith('$') && part.endsWith('$')) {
          const rawMath = part.slice(1, -1);
          return <MathView key={index} math={rawMath} block={false} />;
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};
