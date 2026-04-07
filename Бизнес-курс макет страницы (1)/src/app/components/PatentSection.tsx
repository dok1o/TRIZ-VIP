import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Sparkles, Loader2, X, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';
import { useI18n } from '../../i18n/I18nProvider';
import { patentEmptySubtitle, patentSectionBody } from '../../i18n/trizCaseCopy';
import type { CasePreset } from '../../ollamaCase';

interface PatentSectionProps {
  isExpanded: boolean;
  isDimmed: boolean;
  onExpand: () => void;
  casePreset: CasePreset;
}

export function PatentSection({ isExpanded, isDimmed, onExpand, casePreset }: PatentSectionProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPatent, setShowPatent] = useState(false);
  const { t } = useI18n();

  const generatePatent = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setShowPatent(true);
      setIsGenerating(false);
    }, 2000);
  };

  const handleReset = () => {
    setShowPatent(false);
    setIsGenerating(false);
  };

  return (
    <motion.section
      className="relative"
      style={{
        background: 'linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%)',
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
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl mb-2 text-slate-900">{t('patent.title')}</h2>
            <p className="text-sm sm:text-base text-slate-600">{t('patent.cta')}</p>
          </motion.div>
        ) : isDimmed ? (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-base sm:text-xl text-slate-900">{t('patent.title')}</h2>
          </motion.div>
        ) : (
          <motion.div 
            className="w-full max-w-6xl mx-auto pb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-slate-900 text-center">{t('patent.mainTitle')}</h2>

            <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-6 sm:py-8 rounded-xl flex flex-col items-center justify-center gap-3 text-sm sm:text-base"
                onClick={(e) => {
                  e.stopPropagation();
                  generatePatent();
                }}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 animate-spin" />
                    <span>{t('patent.generate.generating')}</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8" />
                    <span className="text-base sm:text-lg">{t('patent.generate.generate')}</span>
                  </>
                )}
              </Button>
            </div>

            {/* Content Area */}
            {showPatent ? (
              <>
                <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-8">
                  {/* Patent Document */}
                  {showPatent && (
                    <motion.div
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-white" />
                          </div>
                            <h3 className="text-xl text-slate-900">{t('patent.contentTitle')}</h3>
                        </div>
                        <Button
                          className="bg-white border border-gray-300 hover:border-purple-500 text-slate-700 hover:text-purple-600 px-4 py-2 rounded-lg flex items-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Download className="w-4 h-4" />
                            {t('patent.download')}
                        </Button>
                      </div>

                      <div className="space-y-4 sm:space-y-6 text-sm">
                        <div>
                          <div className="font-semibold text-slate-900 mb-2">{t('patent.section1.title')}</div>
                          <div className="text-slate-600 bg-purple-50 p-3 rounded-lg">
                            {patentSectionBody(t, casePreset, 1)}
                          </div>
                        </div>

                        <div>
                          <div className="font-semibold text-slate-900 mb-2">{t('patent.section2.title')}</div>
                          <div className="text-slate-600 bg-purple-50 p-3 rounded-lg">
                            {patentSectionBody(t, casePreset, 2)}
                          </div>
                        </div>

                        <div>
                          <div className="font-semibold text-slate-900 mb-2">{t('patent.section3.title')}</div>
                          <div className="text-slate-600 bg-purple-50 p-3 rounded-lg">
                            {patentSectionBody(t, casePreset, 3)}
                          </div>
                        </div>

                        <div>
                          <div className="font-semibold text-slate-900 mb-2">{t('patent.section4.title')}</div>
                          <div className="text-slate-600 bg-purple-50 p-3 rounded-lg">
                            {patentSectionBody(t, casePreset, 4)}
                          </div>
                        </div>

                        <div>
                          <div className="font-semibold text-slate-900 mb-2">{t('patent.section5.title')}</div>
                          <div className="text-slate-600 bg-purple-50 p-3 rounded-lg">
                            {patentSectionBody(t, casePreset, 5)}
                          </div>
                        </div>

                        <div className="pt-4 flex items-center gap-2 text-xs text-slate-500">
                          <Sparkles className="w-4 h-4" />
                          <span>{t('patent.generatedWith')}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                </div>

                {/* Reset Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    className="w-full bg-white hover:bg-gray-50 text-slate-700 border-2 border-gray-300 hover:border-purple-500 py-4 sm:py-5 rounded-xl flex items-center justify-center gap-2 transition-colors"
                    onClick={handleReset}
                  >
                    <RotateCcw className="w-5 h-5" />
                    {t('patent.controls.reset')}
                  </Button>
                </motion.div>
              </>
            ) : (
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-200 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 opacity-20">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-slate-900 mb-2">{t('patent.empty.title')}</h3>
                <p className="text-slate-600">{patentEmptySubtitle(t, casePreset)}</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}