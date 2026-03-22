import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { TrizSection } from './components/TrizSection';
import { HypothesisSection } from './components/HypothesisSection';
import { PatentSection } from './components/PatentSection';

function App() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const handleHomeClick = () => {
    setExpandedSection(null);
  };

  const handleNextSection = (currentSection: number) => {
    if (currentSection < 2) {
      setExpandedSection(currentSection + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onHomeClick={handleHomeClick} />
      
      <main className="pt-16 h-[calc(100vh-4rem)] overflow-hidden">
        <TrizSection 
          isExpanded={expandedSection === 0}
          isDimmed={expandedSection !== null && expandedSection !== 0}
          onExpand={() => setExpandedSection(expandedSection === 0 ? null : 0)}
          onNextSection={() => handleNextSection(0)}
        />
        <HypothesisSection 
          isExpanded={expandedSection === 1}
          isDimmed={expandedSection !== null && expandedSection !== 1}
          onExpand={() => setExpandedSection(expandedSection === 1 ? null : 1)}
          onNextSection={() => handleNextSection(1)}
        />
        <PatentSection 
          isExpanded={expandedSection === 2}
          isDimmed={expandedSection !== null && expandedSection !== 2}
          onExpand={() => setExpandedSection(expandedSection === 2 ? null : 2)}
        />
      </main>
    </div>
  );
}

export default App;