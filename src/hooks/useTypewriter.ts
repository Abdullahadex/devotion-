import { useState, useEffect, useRef, useCallback } from 'react';

interface TypeAction {
  type: 'type' | 'delete' | 'pause' | 'clear' | 'newline';
  text?: string;
  count?: number;
  duration?: number;
  speed?: number; // ms per char
}

interface UseTypewriterOptions {
  actions: TypeAction[];
  baseSpeed?: number;
  onComplete?: () => void;
  autoStart?: boolean;
}

export function useTypewriter({ actions, baseSpeed = 55, onComplete, autoStart = true }: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const startedRef = useRef(false);
  const cancelRef = useRef(false);

  const sleep = (ms: number) => new Promise<void>(resolve => {
    const id = setTimeout(resolve, ms);
    // Check cancel periodically
    return () => clearTimeout(id);
  });

  const run = useCallback(async () => {
    if (startedRef.current) return;
    startedRef.current = true;
    setIsTyping(true);
    cancelRef.current = false;

    let current = '';

    for (const action of actions) {
      if (cancelRef.current) break;

      switch (action.type) {
        case 'type': {
          const text = action.text || '';
          const speed = action.speed || baseSpeed;
          for (const char of text) {
            if (cancelRef.current) break;
            current += char;
            setDisplayText(current);
            // Add human-like variance
            const variance = speed * (0.5 + Math.random());
            await sleep(variance);
          }
          break;
        }
        case 'delete': {
          const count = action.count || 1;
          const speed = action.speed || 35;
          for (let i = 0; i < count; i++) {
            if (cancelRef.current) break;
            current = current.slice(0, -1);
            setDisplayText(current);
            await sleep(speed);
          }
          break;
        }
        case 'pause': {
          await sleep(action.duration || 500);
          break;
        }
        case 'clear': {
          current = '';
          setDisplayText(current);
          await sleep(action.duration || 300);
          break;
        }
        case 'newline': {
          current += '\n';
          setDisplayText(current);
          await sleep(action.duration || 200);
          break;
        }
      }
    }

    setIsTyping(false);
    setIsComplete(true);
    onComplete?.();
  }, [actions, baseSpeed, onComplete]);

  useEffect(() => {
    if (autoStart) {
      run();
    }
    return () => {
      cancelRef.current = true;
    };
  }, [autoStart, run]);

  return { displayText, isTyping, isComplete, start: run };
}
