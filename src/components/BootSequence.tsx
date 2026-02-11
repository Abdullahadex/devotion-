import React, { useState, useEffect } from 'react';
import TerminalLine from './TerminalLine';

const BOOT_LINES = [
  { text: 'Booting devotion_subroutine.exe...', delay: 800 },
  { text: 'Loading logs for user: Rodeeyah', delay: 1200 },
  { text: "Analysis: She's funny, beautiful, outspoken... and way out of my league.", delay: 1800 },
  { text: 'Searching for the right words...', delay: 1400 },
  { text: 'Result: Nothing feels enough. But here goes.', delay: 2000 },
];

interface BootSequenceProps {
  onComplete: () => void;
}

const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState(0);

  const onCompleteRef = React.useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (visibleLines >= BOOT_LINES.length) {
      const timer = setTimeout(() => onCompleteRef.current(), 1500);
      return () => clearTimeout(timer);
    }

    const currentDelay = visibleLines === 0 ? 600 : BOOT_LINES[visibleLines - 1]?.delay || 800;
    const timer = setTimeout(() => {
      setVisibleLines(prev => prev + 1);
    }, currentDelay);

    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <div className="p-4 sm:p-8 font-mono text-sm sm:text-base">
      {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
        <div key={i} className="fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
          <TerminalLine text={line.text} />
        </div>
      ))}
      {visibleLines < BOOT_LINES.length && (
        <span className="cursor-blink terminal-glow">▊</span>
      )}
    </div>
  );
};

export default BootSequence;
