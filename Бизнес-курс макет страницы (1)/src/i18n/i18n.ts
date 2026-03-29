export type Lang = "ru" | "en";

export const STORAGE_LANG_KEY = "trizvip_lang";

export const translations: Record<Lang, Record<string, string>> = {
  ru: {
    "navigation.brandTitle": "TRIZ VIP",
    "navigation.brandSubtitle": "Платформа с поддержкой ИИ",
    "navigation.home": "Главная",
    "navigation.features": "Функции",
    "navigation.about": "О проекте",

    "triz.title": "Решение задач ТРИЗ",
    "triz.cta": "Нажмите для начала работы",
    "triz.input.labelProblem": "Опишите проблему",
    "triz.input.placeholderProblem": "Введите описание вашей задачи или проблемы...",
    "triz.input.buttonAnalyze": "Начать анализ",
    "triz.input.buttonAnalyzing": "AI анализирует...",

    "triz.stage.input.label": "Проблема",
    "triz.stage.analysis.label": "Анализ",
    "triz.stage.contradiction.label": "Соответствие стратегическим целям бизнеса",
    "triz.stage.solution.label": "Решение",

    "triz.stage1.title": "Этап 1: Анализ проблемы",
    "triz.stage1.aiAnalyzing": "AI анализирует вашу проблему...",
    "triz.stage1.parametersTitle": "Ключевые параметры:",
    "triz.stage1.param1": "Скорость выполнения операции",
    "triz.stage1.param2": "Точность результата",
    "triz.stage1.param3": "Энергоэффективность системы",

    "triz.stage2.title": "Этап 2: Выявление противоречия",
    "triz.stage2.technicalContradictionLabel": "Техническое противоречие:",
    "triz.stage2.technicalContradictionText":
      "При увеличении скорости снижается точность, а при повышении точности падает скорость выполнения операции.",
    "triz.stage2.conflictUpTitle": "Конфликт ↑",
    "triz.stage2.conflictUpText": "Скорость ↑ → Точность ↓",
    "triz.stage2.conflictDownTitle": "Конфликт ↓",
    "triz.stage2.conflictDownText": "Точность ↑ → Скорость ↓",

    "triz.stage3.title": "Этап 3: Решение на основе ТРИЗ",
    "triz.stage3.divisionPrincipleLabel": "Принцип разделения:",
    "triz.stage3.divisionPrincipleText":
      "Разделить процесс на два независимых модуля: быстрый предварительный анализ и точная финальная обработка.",
    "triz.stage3.technicalSolutionLabel": "Техническое решение:",
    "triz.stage3.bullet1": "Модуль быстрой предварительной оценки (скорость +80%)",
    "triz.stage3.bullet2": "Модуль точной обработки критических параметров (точность 99.5%)",
    "triz.stage3.bullet3": "Адаптивный алгоритм выбора режима работы",
    "triz.stage3.expectedResultLabel": "Ожидаемый результат:",
    "triz.stage3.expectedResultText":
      "Повышение общей производительности на 40% при сохранении высокой точности для критических операций.",

    "triz.controls.back": "Назад",
    "triz.controls.reset": "Начать заново",
    "triz.controls.goToStrategic": "Перейти к стратегическим целям бизнеса",
    "triz.controls.next": "Далее",

    "hypothesis.title": "Соответствие стратегическим целям бизнеса",
    "hypothesis.cta": "Нажмите для начала работы",
    "hypothesis.input.loadImage": "Загрузить изображение",
    "hypothesis.input.buttonGenerate": "Сгенерировать гипотезу",
    "hypothesis.input.buttonGenerating": "Генерация...",
    "hypothesis.input.buttonAddNode": "Добавить узел",

    "hypothesis.node.primary": "Основная гипотеза",
    "hypothesis.node.technicalSolution": "Техническое решение",
    "hypothesis.node.marketStrategy": "Рыночная стратегия",
    "hypothesis.node.new": "Новая гипотеза",

    "hypothesis.aiTipTitle": "AI-подсказка",
    "hypothesis.aiTipText":
      "Рассмотрите связь между технической реализацией и маркетинговой стратегией для повышения эффективности",

    "hypothesis.stats.total": "Всего гипотез",
    "hypothesis.stats.links": "Связей",
    "hypothesis.stats.priority": "Приоритет",
    "hypothesis.stats.priorityValue": "Высокий",

    "hypothesis.controls.nextToFinance": "Перейти к результатам финансового моделирования",

    "finance.title": "Результат финансового моделирования / прогнозирования",
    "finance.cta": "Нажмите для начала работы",
    "finance.button.buildForecast": "Построить прогноз",
    "finance.forecast.revenueLabel": "Выручка (12 мес)",
    "finance.forecast.roiLabel": "ROI",
    "finance.forecast.paybackLabel": "Окупаемость",
    "finance.forecast.paybackValue": "6 мес",
    "finance.controls.goToReport": "Перейти к отчёту",

    "patent.title": "Отчёт / авторское свидетельство / патент",
    "patent.cta": "Нажмите для начала работы",
    "patent.mainTitle": "Отчёт - в форме заявки на авторское свидетельство / патент",
    "patent.generate.generating": "Генерация отчета...",
    "patent.generate.generate": "Сгенерировать отчет",
    "patent.contentTitle": "Отчет в форме заявки на авторское свидетельство / патент",
    "patent.download": "Скачать",
    "patent.section1.title": "1. Название изобретения",
    "patent.section1.text":
      "Адаптивная система динамической оптимизации технических параметров",
    "patent.section2.title": "2. Область техники",
    "patent.section2.text":
      "Изобретение относится к области автоматизированных систем управления и может быть использовано в промышленном производстве для оптимизации технологических процессов.",
    "patent.section3.title": "3. Техническая проблема",
    "patent.section3.text":
      "Существующие системы не позволяют одновременно оптимизировать скорость и точность без потери общей эффективности системы.",
    "patent.section4.title": "4. Технический результат",
    "patent.section4.text":
      "Повышение производительности системы на 40% при сохранении точности 99.5% за счет применения модульной архитектуры и адаптивных алгоритмов.",
    "patent.section5.title": "5. Формула изобретения",
    "patent.section5.text":
      "Система динамической оптимизации, содержащая модуль анализа, модуль принятия решений и исполнительный модуль, отличающаяся тем, что модуль анализа выполнен с возможностью адаптивного изменения параметров в реальном времени на основе обратной связи от исполнительного модуля.",
    "patent.generatedWith": "Сгенерировано с помощью AI TRIZ VIP",
    "patent.controls.reset": "Начать заново",
    "patent.empty.title": "Выберите функцию",
    "patent.empty.subtitle": "Нажмите на кнопку выше для генерации отчета",
  },
  en: {
    "navigation.brandTitle": "TRIZ VIP",
    "navigation.brandSubtitle": "AI-Powered Platform",
    "navigation.home": "Home",
    "navigation.features": "Features",
    "navigation.about": "About",

    "triz.title": "TRIZ Problem Solving",
    "triz.cta": "Click to start",
    "triz.input.labelProblem": "Describe the problem",
    "triz.input.placeholderProblem": "Enter your task or problem description...",
    "triz.input.buttonAnalyze": "Start analysis",
    "triz.input.buttonAnalyzing": "AI is analyzing...",

    "triz.stage.input.label": "Problem",
    "triz.stage.analysis.label": "Analysis",
    "triz.stage.contradiction.label": "Alignment with strategic business goals",
    "triz.stage.solution.label": "Solution",

    "triz.stage1.title": "Step 1: Problem Analysis",
    "triz.stage1.aiAnalyzing": "AI is analyzing your problem...",
    "triz.stage1.parametersTitle": "Key parameters:",
    "triz.stage1.param1": "Operation speed",
    "triz.stage1.param2": "Result accuracy",
    "triz.stage1.param3": "System energy efficiency",

    "triz.stage2.title": "Step 2: Identifying a contradiction",
    "triz.stage2.technicalContradictionLabel": "Technical contradiction:",
    "triz.stage2.technicalContradictionText":
      "When speed increases, accuracy decreases; when accuracy increases, operation speed drops.",
    "triz.stage2.conflictUpTitle": "Conflict ↑",
    "triz.stage2.conflictUpText": "Speed ↑ → Accuracy ↓",
    "triz.stage2.conflictDownTitle": "Conflict ↓",
    "triz.stage2.conflictDownText": "Accuracy ↑ → Speed ↓",

    "triz.stage3.title": "Step 3: TRIZ-based Solution",
    "triz.stage3.divisionPrincipleLabel": "Principle of separation:",
    "triz.stage3.divisionPrincipleText":
      "Split the process into two independent modules: a fast preliminary analysis and an accurate final processing.",
    "triz.stage3.technicalSolutionLabel": "Technical solution:",
    "triz.stage3.bullet1": "Fast preliminary evaluation module (speed +80%)",
    "triz.stage3.bullet2": "Accurate processing module for critical parameters (accuracy 99.5%)",
    "triz.stage3.bullet3": "Adaptive operating mode selection algorithm",
    "triz.stage3.expectedResultLabel": "Expected result:",
    "triz.stage3.expectedResultText":
      "Increase overall performance by 40% while maintaining high accuracy for critical operations.",

    "triz.controls.back": "Back",
    "triz.controls.reset": "Start over",
    "triz.controls.goToStrategic": "Go to strategic business goals",
    "triz.controls.next": "Next",

    "hypothesis.title": "Alignment with strategic business goals",
    "hypothesis.cta": "Click to start",
    "hypothesis.input.loadImage": "Upload image",
    "hypothesis.input.buttonGenerate": "Generate hypothesis",
    "hypothesis.input.buttonGenerating": "Generating...",
    "hypothesis.input.buttonAddNode": "Add node",

    "hypothesis.node.primary": "Primary hypothesis",
    "hypothesis.node.technicalSolution": "Technical solution",
    "hypothesis.node.marketStrategy": "Market strategy",
    "hypothesis.node.new": "New hypothesis",

    "hypothesis.aiTipTitle": "AI hint",
    "hypothesis.aiTipText":
      "Consider the link between technical implementation and the marketing strategy to improve effectiveness",

    "hypothesis.stats.total": "Total hypotheses",
    "hypothesis.stats.links": "Links",
    "hypothesis.stats.priority": "Priority",
    "hypothesis.stats.priorityValue": "High",

    "hypothesis.controls.nextToFinance": "Go to financial modeling results",

    "finance.title": "Financial modeling / forecasting result",
    "finance.cta": "Click to start",
    "finance.button.buildForecast": "Build forecast",
    "finance.forecast.revenueLabel": "Revenue (12 months)",
    "finance.forecast.roiLabel": "ROI",
    "finance.forecast.paybackLabel": "Payback",
    "finance.forecast.paybackValue": "6 months",
    "finance.controls.goToReport": "Go to the report",

    "patent.title": "Report / Copyright certificate / Patent",
    "patent.cta": "Click to start",
    "patent.mainTitle": "Report in the form of an application for a copyright certificate / patent",
    "patent.generate.generating": "Generating report...",
    "patent.generate.generate": "Generate report",
    "patent.contentTitle": "Report in the form of an application for a copyright certificate / patent",
    "patent.download": "Download",
    "patent.section1.title": "1. Name of the invention",
    "patent.section1.text": "An adaptive system for dynamic optimization of technical parameters",
    "patent.section2.title": "2. Field of technology",
    "patent.section2.text":
      "The invention relates to the field of automated control systems and can be used in industrial production to optimize technological processes.",
    "patent.section3.title": "3. Technical problem",
    "patent.section3.text":
      "Existing systems do not allow simultaneously optimizing speed and accuracy without losing the overall system efficiency.",
    "patent.section4.title": "4. Technical result",
    "patent.section4.text":
      "Increasing system productivity by 40% while maintaining accuracy of 99.5% through a modular architecture and adaptive algorithms.",
    "patent.section5.title": "5. Formula of the invention",
    "patent.section5.text":
      "A dynamic optimization system comprising an analysis module, a decision-making module, and an executive module, characterized in that the analysis module is configured to adaptively change parameters in real time based on feedback from the executive module.",
    "patent.generatedWith": "Generated with AI TRIZ VIP",
    "patent.controls.reset": "Start over",
    "patent.empty.title": "Choose a function",
    "patent.empty.subtitle": "Click the button above to generate the report",
  },
};

export function resolveLang(input: string | undefined): Lang | null {
  if (!input) return null;
  const normalized = input.toLowerCase();
  if (normalized.startsWith("en")) return "en";
  if (normalized.startsWith("ru")) return "ru";
  return null;
}

export function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_LANG_KEY) ?? undefined;
    const fromStorage = resolveLang(stored);
    if (fromStorage) return fromStorage;
  } catch {
    // localStorage might be blocked in some environments
  }

  try {
    const fromNavigator = resolveLang(navigator.language);
    if (fromNavigator) return fromNavigator;
  } catch {
    // ignore
  }

  // Default: keep current user experience (Russian UI)
  return "ru";
}

