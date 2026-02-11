import React, { useState, useRef, useEffect, useCallback } from 'react';
import BootSequence from '@/components/BootSequence';
import LetterTyping from '@/components/LetterTyping';
import SoftFinish from '@/components/SoftFinish';

type Phase = 'boot' | 'letter' | 'finish';

const Index: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('boot');
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom as content grows
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new MutationObserver(() => {
      el.scrollTop = el.scrollHeight;
    });
    observer.observe(el, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Scanline overlay for retro feel */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(142 70% 55% / 0.1) 2px, hsl(142 70% 55% / 0.1) 4px)',
        }}
      />

      {/* Terminal window */}
      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-border/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
          </div>
          <span className="text-xs text-muted-foreground ml-2 font-mono">devotion_subroutine.exe</span>
        </div>

        {/* Content area */}
        <div ref={containerRef} className="flex-1 overflow-y-auto">
          {phase === 'boot' && (
            <BootSequence onComplete={() => setPhase('letter')} />
          )}
          {phase === 'letter' && (
            <LetterTyping onComplete={() => setPhase('finish')} />
          )}
          {phase === 'finish' && <SoftFinish />}
        </div>
      </div>
    </div>
  );
};

export default Index;
