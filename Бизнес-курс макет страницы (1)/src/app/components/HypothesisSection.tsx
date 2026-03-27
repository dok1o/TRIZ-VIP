import { useState } from 'react';
import { motion } from 'motion/react';
import { Network, Upload, Plus, Sparkles, ArrowRight, X } from 'lucide-react';
import { Button } from './ui/button';

interface HypothesisSectionProps {
  isExpanded: boolean;
  isDimmed: boolean;
  onExpand: () => void;
  onNextSection: () => void;
}

interface Node {
  id: number;
  text: string;
  x: number;
  y: number;
  color: string;
}

export function HypothesisSection({ isExpanded, isDimmed, onExpand, onNextSection }: HypothesisSectionProps) {
  const [nodes, setNodes] = useState<Node[]>([
    { id: 1, text: 'Основная гипотеза', x: 50, y: 30, color: 'from-blue-500 to-blue-600' },
    { id: 2, text: 'Техническое решение', x: 25, y: 60, color: 'from-cyan-500 to-cyan-600' },
    { id: 3, text: 'Рыночная стратегия', x: 75, y: 60, color: 'from-purple-500 to-purple-600' },
  ]);

  const [isGenerating, setIsGenerating] = useState(false);

  const generateHypothesis = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const newNode: Node = {
        id: nodes.length + 1,
        text: 'Новая гипотеза',
        x: 50,
        y: 80,
        color: 'from-green-500 to-green-600',
      };
      setNodes([...nodes, newNode]);
      setIsGenerating(false);
    }, 1500);
  };

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
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Network className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl mb-2 text-slate-900">Соответствие стратегическим целям бизнеса</h2>
            <p className="text-sm sm:text-base text-slate-600">Нажмите для начала работы</p>
          </motion.div>
        ) : isDimmed ? (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-base sm:text-xl text-slate-900">Соответствие стратегическим целям бизнеса</h2>
          </motion.div>
        ) : (
          <motion.div 
            className="w-full max-w-6xl mx-auto pb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-slate-900 text-center">Соответствие стратегическим целям бизнеса</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <Button
                className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-blue-500 text-slate-700 hover:text-blue-600 py-6 rounded-xl flex items-center justify-center gap-2 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Upload className="w-5 h-5" />
                Загрузить изображение
              </Button>

              <Button
                className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white py-6 rounded-xl flex items-center justify-center gap-2"
                onClick={(e) => {
                  e.stopPropagation();
                  generateHypothesis();
                }}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-5 h-5 animate-pulse" />
                    Генерация...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Сгенерировать гипотезу
                  </>
                )}
              </Button>

              <Button
                className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-purple-500 text-slate-700 hover:text-purple-600 py-6 rounded-xl flex items-center justify-center gap-2 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Plus className="w-5 h-5" />
                Добавить узел
              </Button>
            </div>

            {/* Mind Map Canvas */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 relative">
              <svg className="w-full h-[500px]" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                {/* Connections */}
                {nodes.map((node, index) => (
                  index > 0 && (
                    <motion.line
                      key={`line-${node.id}`}
                      x1={nodes[0].x}
                      y1={nodes[0].y}
                      x2={node.x}
                      y2={node.y}
                      stroke="#3B82F6"
                      strokeWidth="0.3"
                      strokeDasharray="1,1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                    />
                  )
                ))}

                {/* Nodes */}
                {nodes.map((node, index) => (
                  <g key={node.id}>
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="0"
                      className="fill-blue-500"
                      initial={{ r: 0 }}
                      animate={{ r: 0.5 }}
                      transition={{ delay: index * 0.2 }}
                    />
                    <motion.foreignObject
                      x={node.x - 8}
                      y={node.y - 3}
                      width="16"
                      height="6"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      <div 
                        className={`bg-gradient-to-br ${node.color} text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap flex items-center justify-center shadow-lg`}
                        style={{ fontSize: '3px' }}
                      >
                        {node.text}
                      </div>
                    </motion.foreignObject>
                  </g>
                ))}
              </svg>

              {/* AI Suggestions */}
              <div className="absolute bottom-4 right-4 max-w-sm">
                <motion.div
                  className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">AI-подсказка</div>
                      <div className="text-sm text-purple-100">
                        Рассмотрите связь между технической реализацией и маркетинговой стратегией для повышения эффективности
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Analysis Results */}
            <motion.div
              className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                <div className="text-sm text-slate-600 mb-1">Всего гипотез</div>
                <div className="text-2xl text-slate-900">{nodes.length}</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                <div className="text-sm text-slate-600 mb-1">Связей</div>
                <div className="text-2xl text-slate-900">{Math.max(0, nodes.length - 1)}</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-200 bg-green-50/50">
                <div className="text-sm text-green-700 mb-1">Приоритет</div>
                <div className="text-2xl text-green-600">Высокий</div>
              </div>
            </motion.div>

            {/* Next Section Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <Button
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-6 rounded-xl flex items-center justify-center gap-2"
                onClick={onNextSection}
              >
                Перейти к результатам финансового моделирования
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}