import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lightbulb, ArrowRight, Loader2, Brain, Search, AlertTriangle, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from './ui/button';
import { useI18n } from '../../i18n/I18nProvider';

interface TrizSectionProps {
  isExpanded: boolean;
  isDimmed: boolean;
  onExpand: () => void;
  onNextSection: () => void;
}

type Stage = 'input' | 'analysis' | 'contradiction' | 'solution';

export function TrizSection({ isExpanded, isDimmed, onExpand, onNextSection }: TrizSectionProps) {
  const [problem, setProblem] = useState('');
  const [currentStage, setCurrentStage] = useState<Stage>('input');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { t } = useI18n();

  const handleAnalysis = async () => {
    if (!problem.trim()) return;
    
    setIsAnalyzing(true);
    setCurrentStage('analysis');
    
    // Stop at analysis stage, user can navigate manually with Next button
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 1500);
  };

  const handleNext = () => {
    const currentIdx = getStageIndex(currentStage);
    if (currentIdx < stages.length - 1) {
      setCurrentStage(stages[currentIdx + 1].id as Stage);
    }
  };

  const handlePrev = () => {
    const currentIdx = getStageIndex(currentStage);
    if (currentIdx > 0) {
      setCurrentStage(stages[currentIdx - 1].id as Stage);
    }
  };

  const handleReset = () => {
    setCurrentStage('input');
    setProblem('');
    setIsAnalyzing(false);
  };

  const stages = [
    { id: 'input', icon: Lightbulb, label: t('triz.stage.input.label'), color: 'from-blue-500 to-blue-600' },
    { id: 'analysis', icon: Search, label: t('triz.stage.analysis.label'), color: 'from-cyan-500 to-cyan-600' },
    { id: 'contradiction', icon: AlertTriangle, label: t('triz.stage.contradiction.label'), color: 'from-purple-500 to-purple-600' },
    { id: 'solution', icon: Brain, label: t('triz.stage.solution.label'), color: 'from-green-500 to-green-600' },
  ];

  const getStageIndex = (stage: Stage) => stages.findIndex(s => s.id === stage);
  const currentIndex = getStageIndex(currentStage);

  return (
    <motion.section
      className="relative border-b border-gray-200"
      style={{
        background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
      }}
      animate={{
        height: isExpanded ? 'calc(100vh - 4rem)' : isDimmed ? '5vh' : 'calc((100vh - 4rem) / 4)',
        opacity: isDimmed ? 0.3 : 1,
      }}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      onClick={!isExpanded ? onExpand : undefined}
    >
      {/* Grid pattern background */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0F172A 1px, transparent 1px),
            linear-gradient(to bottom, #0F172A 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Close button when expanded */}
      {isExpanded && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={(e) => {
            e.stopPropagation();
            onExpand();
          }}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
        </motion.button>
      )}

      <div 
        className={`relative h-full ${isExpanded ? 'overflow-y-auto' : 'overflow-hidden flex items-center justify-center'} p-4 sm:p-8 md:p-12`}
        onClick={(e) => isExpanded && e.stopPropagation()}
      >
        {!isExpanded && !isDimmed ? (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl mb-2 text-slate-900">{t('triz.title')}</h2>
            <p className="text-sm sm:text-base text-slate-600">{t('triz.cta')}</p>
          </motion.div>
        ) : isDimmed ? (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-base sm:text-xl text-slate-900">{t('triz.title')}</h2>
          </motion.div>
        ) : (
          <motion.div 
            className="w-full max-w-5xl mx-auto pb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-slate-900 text-center">{t('triz.title')}</h2>
            
            {/* Input Area */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200 mb-6 sm:mb-8">
              <label className="block text-slate-700 mb-3 text-sm sm:text-base">{t('triz.input.labelProblem')}</label>
              <textarea
                className="w-full h-24 sm:h-32 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 resize-none transition-colors"
                placeholder={t('triz.input.placeholderProblem')}
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
              />
              <Button
                className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base rounded-xl flex items-center gap-2 w-full sm:w-auto"
                onClick={handleAnalysis}
                disabled={!problem.trim() || isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                    {t('triz.input.buttonAnalyzing')}
                  </>
                ) : (
                  <>
                    {t('triz.input.buttonAnalyze')}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </>
                )}
              </Button>
            </div>

            {/* Progress Tracker */}
            {currentStage !== 'input' && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200 mb-6 sm:mb-8">
                <div className="flex flex-wrap items-center justify-between mb-6 sm:mb-8 gap-2">
                  {stages.map((stage, index) => {
                    const Icon = stage.icon;
                    const isActive = index === currentIndex;
                    const isCompleted = index < currentIndex;
                    
                    return (
                      <div key={stage.id} className="flex items-center flex-1 min-w-0">
                        <motion.div 
                          className={`flex flex-col sm:flex-row items-center gap-2 flex-1 min-w-0 ${
                            isActive ? 'scale-110' : ''
                          }`}
                          animate={{
                            scale: isActive ? 1.05 : 1,
                          }}
                        >
                          <div 
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                              isActive || isCompleted
                                ? `bg-gradient-to-br ${stage.color} shadow-lg`
                                : 'bg-gray-200'
                            }`}
                          >
                            <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isActive || isCompleted ? 'text-white' : 'text-gray-400'}`} />
                          </div>
                          <span className={`text-xs sm:text-sm text-center sm:text-left ${
                            isActive ? 'text-slate-900 font-semibold' : 'text-slate-600'
                          }`}>
                            {stage.label}
                          </span>
                        </motion.div>
                        {index < stages.length - 1 && (
                          <div className="hidden sm:block w-8 md:w-16 h-0.5 mx-2 bg-gray-200 flex-shrink-0">
                            <motion.div
                              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                              initial={{ width: '0%' }}
                              animate={{ width: isCompleted ? '100%' : '0%' }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Analysis Results */}
            <AnimatePresence mode="wait">
              {currentStage !== 'input' && (
                <motion.div
                  key={currentStage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200"
                >
                  {/* Analysis Stage */}
                  {currentStage === 'analysis' && (
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Search className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl text-slate-900 mb-3">{t('triz.stage1.title')}</h3>
                          {isAnalyzing ? (
                            <div className="flex items-center gap-2 text-cyan-600">
                              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                              <span className="text-sm sm:text-base">{t('triz.stage1.aiAnalyzing')}</span>
                            </div>
                          ) : (
                            <>
                              <div className="bg-cyan-50 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
                                <p className="text-sm sm:text-base text-slate-700">{problem}</p>
                              </div>
                              <div className="space-y-3 sm:space-y-4">
                                <div>
                                  <div className="text-sm sm:text-base font-semibold text-slate-900 mb-2">{t('triz.stage1.parametersTitle')}</div>
                                  <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-600">
                                    <li className="flex items-start gap-2">
                                      <span className="text-cyan-500 mt-1 flex-shrink-0">•</span>
                                      <span>{t('triz.stage1.param1')}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-cyan-500 mt-1 flex-shrink-0">•</span>
                                      <span>{t('triz.stage1.param2')}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-cyan-500 mt-1 flex-shrink-0">•</span>
                                      <span>{t('triz.stage1.param3')}</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contradiction Stage */}
                  {currentStage === 'contradiction' && (
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <AlertTriangle className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl text-slate-900 mb-3">{t('triz.stage2.title')}</h3>
                          <div className="bg-purple-50 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
                            <div className="text-sm sm:text-base font-semibold text-purple-900 mb-2">{t('triz.stage2.technicalContradictionLabel')}</div>
                            <p className="text-sm sm:text-base text-slate-700">
                              {t('triz.stage2.technicalContradictionText')}
                            </p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div className="bg-red-50 border border-red-200 p-3 sm:p-4 rounded-lg">
                              <div className="text-sm font-semibold text-red-900 mb-2">{t('triz.stage2.conflictUpTitle')}</div>
                              <p className="text-xs sm:text-sm text-slate-600">{t('triz.stage2.conflictUpText')}</p>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 p-3 sm:p-4 rounded-lg">
                              <div className="text-sm font-semibold text-orange-900 mb-2">{t('triz.stage2.conflictDownTitle')}</div>
                              <p className="text-xs sm:text-sm text-slate-600">{t('triz.stage2.conflictDownText')}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Solution Stage */}
                  {currentStage === 'solution' && (
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Brain className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl text-slate-900 mb-3">{t('triz.stage3.title')}</h3>
                          <div className="bg-green-50 border border-green-200 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
                            <div className="text-sm sm:text-base font-semibold text-green-900 mb-2">{t('triz.stage3.divisionPrincipleLabel')}</div>
                            <p className="text-sm sm:text-base text-slate-700 mb-3 sm:mb-4">
                              {t('triz.stage3.divisionPrincipleText')}
                            </p>
                            <div className="text-sm sm:text-base font-semibold text-green-900 mb-2">{t('triz.stage3.technicalSolutionLabel')}</div>
                            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-slate-600">
                              <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                                <span>{t('triz.stage3.bullet1')}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                                <span>{t('triz.stage3.bullet2')}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                                <span>{t('triz.stage3.bullet3')}</span>
                              </li>
                            </ul>
                          </div>
                          <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 sm:p-4 rounded-lg text-white">
                            <div className="text-sm sm:text-base font-semibold mb-2">{t('triz.stage3.expectedResultLabel')}</div>
                            <p className="text-xs sm:text-sm text-green-50">
                              {t('triz.stage3.expectedResultText')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Controls */}
                  {!isAnalyzing && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-6 border-t border-gray-200"
                    >
                      <Button
                        onClick={handlePrev}
                        disabled={currentIndex === 0 || currentStage === 'input'}
                        className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-white hover:bg-gray-50 text-slate-700 border border-gray-300 rounded-xl flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed transition-colors order-2 sm:order-1"
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                        {t('triz.controls.back')}
                      </Button>

                      <Button
                        onClick={handleReset}
                        className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-white hover:bg-gray-50 text-slate-700 border border-gray-300 rounded-xl flex items-center justify-center gap-2 transition-colors order-1 sm:order-2"
                      >
                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                        {t('triz.controls.reset')}
                      </Button>

                      {currentIndex >= stages.length - 1 ? (
                        <Button
                          onClick={onNextSection}
                          className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl flex items-center justify-center gap-2 transition-colors order-3"
                        >
                          {t('triz.controls.goToStrategic')}
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Button>
                      ) : (
                        <Button
                          onClick={handleNext}
                          disabled={currentIndex >= stages.length - 1}
                          className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white rounded-xl flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed transition-colors order-3"
                        >
                          {t('triz.controls.next')}
                          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Button>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
