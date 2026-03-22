import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Sparkles, Loader2, DollarSign, TrendingUp, PieChart, X, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';

interface PatentSectionProps {
  isExpanded: boolean;
  isDimmed: boolean;
  onExpand: () => void;
}

export function PatentSection({ isExpanded, isDimmed, onExpand }: PatentSectionProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPatent, setShowPatent] = useState(false);
  const [showFinance, setShowFinance] = useState(false);

  const generatePatent = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setShowPatent(true);
      setIsGenerating(false);
    }, 2000);
  };

  const calculateFinance = () => {
    setShowFinance(true);
  };

  const handleReset = () => {
    setShowPatent(false);
    setShowFinance(false);
    setIsGenerating(false);
  };

  return (
    <motion.section
      className="relative"
      style={{
        background: 'linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%)',
      }}
      animate={{
        height: isExpanded ? 'calc(100vh - 4rem)' : isDimmed ? '5vh' : 'calc((100vh - 4rem) / 3)',
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
            <h2 className="text-2xl sm:text-3xl mb-2 text-slate-900">Заявка на патент</h2>
            <p className="text-sm sm:text-base text-slate-600">Нажмите для начала работы</p>
          </motion.div>
        ) : isDimmed ? (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-base sm:text-xl text-slate-900">Заявка на патент</h2>
          </motion.div>
        ) : (
          <motion.div 
            className="w-full max-w-6xl mx-auto pb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-slate-900 text-center">Заявка на патент & Финансы</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
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
                    <span>Генерация патентной заявки...</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8" />
                    <span className="text-base sm:text-lg">Сгенерировать патентную заявку</span>
                  </>
                )}
              </Button>

              <Button
                className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white py-6 sm:py-8 rounded-xl flex flex-col items-center justify-center gap-3 text-sm sm:text-base"
                onClick={(e) => {
                  e.stopPropagation();
                  calculateFinance();
                }}
              >
                <DollarSign className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-base sm:text-lg">Рассчитать финанс��</span>
              </Button>
            </div>

            {/* Content Area */}
            {(showPatent || showFinance) ? (
              <>
                <div className={`grid grid-cols-1 ${showPatent && showFinance ? 'lg:grid-cols-2' : ''} gap-4 sm:gap-6 mb-8`}>
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
                          <h3 className="text-xl text-slate-900">Патентная заявка</h3>
                        </div>
                        <Button
                          className="bg-white border border-gray-300 hover:border-purple-500 text-slate-700 hover:text-purple-600 px-4 py-2 rounded-lg flex items-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Download className="w-4 h-4" />
                          Скачать
                        </Button>
                      </div>

                      <div className="space-y-4 sm:space-y-6 text-sm">
                        <div>
                          <div className="font-semibold text-slate-900 mb-2">1. Название изобретения</div>
                          <div className="text-slate-600 bg-purple-50 p-3 rounded-lg">
                            Адаптивная система динамической оптимизации технических параметров
                          </div>
                        </div>

                        <div>
                          <div className="font-semibold text-slate-900 mb-2">2. Область техники</div>
                          <div className="text-slate-600 bg-purple-50 p-3 rounded-lg">
                            Изобретение относится к области автоматизированных систем управления и может быть использовано в промышленном производстве для оптимизации технологических процессов.
                          </div>
                        </div>

                        <div>
                          <div className="font-semibold text-slate-900 mb-2">3. Техническая проблема</div>
                          <div className="text-slate-600 bg-purple-50 p-3 rounded-lg">
                            Существующие системы не позволяют одновременно оптимизировать скорость и точность без потери общей эффективности системы.
                          </div>
                        </div>

                        <div>
                          <div className="font-semibold text-slate-900 mb-2">4. Технический результат</div>
                          <div className="text-slate-600 bg-purple-50 p-3 rounded-lg">
                            Повышение производительности системы на 40% при сохранении точности 99.5% за счет применения модульной архитектуры и адаптивных алгоритмов.
                          </div>
                        </div>

                        <div>
                          <div className="font-semibold text-slate-900 mb-2">5. Формула изобретения</div>
                          <div className="text-slate-600 bg-purple-50 p-3 rounded-lg">
                            Система динамической оптимизации, содержащая модуль анализа, модуль принятия решений и исполнительный модуль, отличающаяся тем, что модуль анализа выполнен с возможностью адаптивного изменения параметров в реальном времени на основе обратной связи от исполнительного модуля.
                          </div>
                        </div>

                        <div className="pt-4 flex items-center gap-2 text-xs text-slate-500">
                          <Sparkles className="w-4 h-4" />
                          <span>Сгенерировано с помощью AI TRIZ VIP</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Finance Calculation */}
                  {showFinance && (
                    <motion.div
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: showPatent ? 0.2 : 0 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl text-slate-900">Финансовый анализ</h3>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="bg-blue-50 p-4 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-slate-600 text-sm sm:text-base">Затраты на разработку</span>
                            <span className="text-lg sm:text-xl text-slate-900">$45,000</span>
                          </div>
                          <div className="w-full bg-blue-200 h-2 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                              initial={{ width: '0%' }}
                              animate={{ width: '60%' }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                        </div>

                        <div className="bg-cyan-50 p-4 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-slate-600 text-sm sm:text-base">Затраты на внедрение</span>
                            <span className="text-lg sm:text-xl text-slate-900">$30,000</span>
                          </div>
                          <div className="w-full bg-cyan-200 h-2 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600"
                              initial={{ width: '0%' }}
                              animate={{ width: '40%' }}
                              transition={{ duration: 1, delay: 0.7 }}
                            />
                          </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-slate-600 text-sm sm:text-base">Ожидаемая прибыль (год)</span>
                            <span className="text-lg sm:text-xl text-green-600">$150,000</span>
                          </div>
                          <div className="w-full bg-green-200 h-2 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-green-500 to-green-600"
                              initial={{ width: '0%' }}
                              animate={{ width: '100%' }}
                              transition={{ duration: 1, delay: 0.9 }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white border border-gray-200 p-4 rounded-xl text-center">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <TrendingUp className="w-5 h-5 text-green-600" />
                            <span className="text-sm text-slate-600">ROI</span>
                          </div>
                          <div className="text-2xl text-green-600">200%</div>
                        </div>

                        <div className="bg-white border border-gray-200 p-4 rounded-xl text-center">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <PieChart className="w-5 h-5 text-blue-600" />
                            <span className="text-sm text-slate-600">Окупаемость</span>
                          </div>
                          <div className="text-2xl text-blue-600">6 мес</div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-xl text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-5 h-5" />
                          <span className="font-semibold">Рекомендация AI</span>
                        </div>
                        <div className="text-sm text-green-50">
                          Проект экономически целесообразен. Рекомендуется реализация с приоритетом на модульную разработку для снижения рисков.
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
                    Начать заново
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
                <h3 className="text-xl text-slate-900 mb-2">Выберите функцию</h3>
                <p className="text-slate-600">Нажмите на кнопку выше для генерации патентной заявки или расчета финансов</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}