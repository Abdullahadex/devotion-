import React, { useMemo } from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';

interface LetterTypingProps {
  onComplete: () => void;
}

const LetterTyping: React.FC<LetterTypingProps> = ({ onComplete }) => {
  const actions = useMemo(() => [
    // Opening hesitation
    { type: 'pause' as const, duration: 800 },
    { type: 'type' as const, text: "I'm sorr", speed: 70 },
    { type: 'pause' as const, duration: 600 },
    { type: 'delete' as const, count: 8, speed: 40 },
    { type: 'pause' as const, duration: 400 },
    { type: 'type' as const, text: "I've been thinking about things lately...", speed: 55 },
    { type: 'newline' as const },
    { type: 'newline' as const },
    { type: 'pause' as const, duration: 1000 },

    // The apology
    { type: 'type' as const, text: "Rodeeyah, I know I messed up. I know I haven't been the best person to you, and I'm truly sorry for that.", speed: 50 },
    { type: 'newline' as const },
    { type: 'newline' as const },
    { type: 'pause' as const, duration: 800 },

    // Rewrite moment
    { type: 'type' as const, text: "You deserve someone who", speed: 55 },
    { type: 'pause' as const, duration: 700 },
    { type: 'delete' as const, count: 22, speed: 35 },
    { type: 'pause' as const, duration: 500 },
    { type: 'type' as const, text: "You are the only girl I love and really care about. That's not something I say lightly.", speed: 50 },
    { type: 'newline' as const },
    { type: 'newline' as const },
    { type: 'pause' as const, duration: 1200 },

    // The promises
    { type: 'type' as const, text: "I want to try to be a better version of myself — not just for you, but because you make me want to be better. You inspire that in me without even trying.", speed: 48 },
    { type: 'newline' as const },
    { type: 'newline' as const },
    { type: 'pause' as const, duration: 1000 },

    // The reassurance
    { type: 'type' as const, text: "I never want you to feel less of yourself for anyone", speed: 50 },
    { type: 'pause' as const, duration: 400 },
    { type: 'type' as const, text: " — especially not because of me.", speed: 55 },
    { type: 'newline' as const },
    { type: 'newline' as const },
    { type: 'pause' as const, duration: 900 },

    // The declaration - with a moment of hesitation
    { type: 'type' as const, text: "You are not unwanted", speed: 55 },
    { type: 'pause' as const, duration: 600 },
    { type: 'type' as const, text: " in any shape or form.", speed: 50 },
    { type: 'newline' as const },
    { type: 'type' as const, text: "You are very much wanted", speed: 50 },
    { type: 'pause' as const, duration: 500 },
    { type: 'type' as const, text: " — at least by me.", speed: 60 },
    { type: 'newline' as const },
    { type: 'newline' as const },
    { type: 'pause' as const, duration: 1200 },

    // The appreciation
    { type: 'type' as const, text: "You're my type of girl — funny, beautiful, outspoken, and you have the most amazing humour. Everything you do", speed: 48 },
    { type: 'pause' as const, duration: 500 },
    { type: 'type' as const, text: " — you don't do too much, you do just enough. And that's what makes you, you.", speed: 50 },
    { type: 'newline' as const },
    { type: 'newline' as const },
    { type: 'pause' as const, duration: 800 },

    { type: 'type' as const, text: "You are the best girl I have ever had the opportunity to meet.", speed: 50 },
    { type: 'newline' as const },
    { type: 'newline' as const },
    { type: 'pause' as const, duration: 1500 },

    // The sign-off
    { type: 'type' as const, text: "I love you so much Rodeeyah.", speed: 60 },
    { type: 'newline' as const },
    { type: 'pause' as const, duration: 800 },
    { type: 'type' as const, text: "More than everything.", speed: 65 },
    { type: 'newline' as const },
    { type: 'newline' as const },
    { type: 'pause' as const, duration: 600 },
    { type: 'type' as const, text: "💚", speed: 200 },
  ], []);

  const { displayText, isTyping } = useTypewriter({
    actions,
    onComplete,
  });

  return (
    <div className="p-4 sm:p-8 font-mono text-sm sm:text-base leading-relaxed whitespace-pre-wrap min-h-[50vh]">
      <span className="terminal-glow">{displayText}</span>
      {isTyping && <span className="cursor-blink terminal-glow">▊</span>}
    </div>
  );
};

export default LetterTyping;
