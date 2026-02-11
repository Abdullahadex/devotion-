import React, { useState } from 'react';
import rodeeyahPhoto from '@/assets/rodeeyah-photo.jpg';

const EVIDENCE = [
  "She's my type of girl — funny, beautiful, outspoken, and has an amazing humour",
  "The way she makes me want to be a better version of myself",
  "She doesn't even realize how wanted she really is",
  "Everything she does — she doesn't do too much, she does just enough",
  "She's the best girl I've ever had the opportunity to meet",
];

const SoftFinish: React.FC = () => {
  const [showEvidence, setShowEvidence] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8 p-4 sm:p-8 fade-in-up">
      {/* Photo with soft glow */}
      <div className="soft-pulse rounded-2xl overflow-hidden max-w-xs sm:max-w-sm">
        <img
          src={rodeeyahPhoto}
          alt="For Rodeeyah"
          className="w-full h-auto rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      {/* The Evidence button */}
      {!showEvidence && (
        <button
          onClick={() => setShowEvidence(true)}
          className="fade-in-up mt-4 px-6 py-3 rounded-full border border-primary/40 text-primary font-mono text-sm 
                     hover:bg-primary/10 hover:border-primary/60 transition-all duration-300
                     terminal-glow"
          style={{ animationDelay: '0.3s' }}
        >
          The Evidence 💚
        </button>
      )}

      {/* Evidence list */}
      {showEvidence && (
        <div className="w-full max-w-md space-y-3 mt-2">
          {EVIDENCE.map((fact, i) => (
            <div
              key={i}
              className="fade-in-up font-mono text-xs sm:text-sm text-muted-foreground border-l-2 border-primary/30 pl-4 py-1"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <span className="text-primary/60 mr-2">#{i + 1}</span>
              {fact}
            </div>
          ))}
          <div
            className="fade-in-up text-center pt-6 font-mono text-xs text-muted-foreground"
            style={{ animationDelay: `${EVIDENCE.length * 0.2 + 0.3}s` }}
          >
            — from someone who is completely, hopelessly cooked 💚
          </div>
        </div>
      )}
    </div>
  );
};

export default SoftFinish;
