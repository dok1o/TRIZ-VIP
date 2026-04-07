import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, DollarSign, PieChart, Sparkles, TrendingUp, X } from 'lucide-react';
import { Button } from './ui/button';
import { useI18n } from '../../i18n/I18nProvider';
import { financeCaseDefaults } from '../../i18n/trizCaseCopy';
import { TRIZ_CASE_CLEAR, TRIZ_CASE_FILL, type CasePreset, type CaseResult } from '../../ollamaCase';

interface FinanceSectionProps {
  isExpanded: boolean;
  isDimmed: boolean;
  onExpand: () => void;
  onNextSection: () => void;
  casePreset: CasePreset;
}

export function FinanceSection({ isExpanded, isDimmed, onExpand, onNextSection, casePreset }: FinanceSectionProps) {
  const [showForecast, setShowForecast] = useState(false);
  const [financeFromAi, setFinanceFromAi] = useState<string | null>(null);
  const { t, lang } = useI18n();
  const finDefaults = useMemo(() => financeCaseDefaults(t, casePreset), [t, casePreset, lang]);

  useEffect(() => {
    const onFill = (e: Event) => {
      const d = (e as CustomEvent<CaseResult>).detail;
      if (d?.finance?.trim()) setFinanceFromAi(d.finance);
    };
    const onClear = () => setFinanceFromAi(null);
    window.addEventListener(TRIZ_CASE_FILL, onFill as EventListener);
    window.addEventListener(TRIZ_CASE_CLEAR, onClear);
    return () => {
      window.removeEventListener(TRIZ_CASE_FILL, onFill as EventListener);
      window.removeEventListener(TRIZ_CASE_CLEAR, onClear);
    };
  }, []);

  return (
    <motion.section
      className="relative border-b border-gray-200"
      style={{
        background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)',
      }}
      animate={{
        height: isExpanded ? 'calc(100vh - 4rem)' : isDimmed ? '5vh' : 'calc((100vh - 4rem) / 4)',
        opacity: isDimmed ? 0.3 : 1,
      }}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      onClick={!isExpanded ? onExpand : undefined}
    >
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
          <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl mb-2 text-slate-900">{t('finance.title')}</h2>
            <p className="text-sm sm:text-base text-slate-600">{t('finance.cta')}</p>
          </motion.div>
        ) : isDimmed ? (
          <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-base sm:text-xl text-slate-900">{t('finance.title')}</h2>
          </motion.div>
        ) : (
          <motion.div className="w-full max-w-6xl mx-auto pb-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-2 text-slate-900 text-center">
              {t('finance.title')}
            </h2>
            {finDefaults.hint ? (
              <p className="text-center text-sm text-slate-600 mb-6 max-w-3xl mx-auto">{finDefaults.hint}</p>
            ) : (
              <div className="mb-6" />
            )}

            <Button
              className="w-full mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-6 rounded-xl flex items-center justify-center gap-2"
              onClick={() => setShowForecast(true)}
            >
              <Sparkles className="w-5 h-5" />
              {t('finance.button.buildForecast')}
            </Button>

            {showForecast && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center gap-2 text-slate-600 mb-2">
                    <DollarSign className="w-4 h-4" />
                    {t('finance.forecast.revenueLabel')}
                  </div>
                  <div className="text-2xl text-slate-900" id="finance">
                    {financeFromAi ?? finDefaults.revenue}
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center gap-2 text-slate-600 mb-2">
                    <PieChart className="w-4 h-4" />
                    {t('finance.forecast.roiLabel')}
                  </div>
                  <div className="text-2xl text-green-600">{finDefaults.roi}</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center gap-2 text-slate-600 mb-2">
                    <TrendingUp className="w-4 h-4" />
                    {t('finance.forecast.paybackLabel')}
                  </div>
                  <div className="text-2xl text-blue-600">{finDefaults.payback}</div>
                </div>
              </div>
            )}

            <Button
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-6 rounded-xl flex items-center justify-center gap-2"
              onClick={onNextSection}
            >
              {t('finance.controls.goToReport')}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
