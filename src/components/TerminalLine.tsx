import React from 'react';

interface TerminalLineProps {
  text: string;
  prefix?: string;
  className?: string;
  delay?: number;
}

const TerminalLine: React.FC<TerminalLineProps> = ({ text, prefix = '>', className = '' }) => {
  return (
    <div className={`mb-1 ${className}`}>
      <span className="text-muted-foreground">{prefix} </span>
      <span className="terminal-glow">{text}</span>
    </div>
  );
};

export default TerminalLine;
