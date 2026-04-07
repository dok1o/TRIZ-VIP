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
    "triz.case.presetLabel": "Кейс TRIZ VIP",
    "triz.case.custom": "Свой вариант (только текст)",
    "triz.case.water_cut_oil_fields": "Нефть и газ: обводнённость (KazMunayGas)",
    "triz.case.cubesat_thermal": "Космос: перегрев CubeSat",
    "triz.case.mining_tailings_recovery": "Горное дело: хвосты, извлечение хрома",

    "triz.cases.water_cut_oil_fields.param1": "Обводнённость продукции и закачка нагнетания",
    "triz.cases.water_cut_oil_fields.param2": "Баланс давления пласта и прорывов воды к добыче",
    "triz.cases.water_cut_oil_fields.param3": "Затраты на подготовку/очистку воды и энергоёмкость",
    "triz.cases.water_cut_oil_fields.contradictionText":
      "Нужно нагнетать воду, чтобы держать давление в пласту, но нагнетание усиливает прорыв воды к добывающим скважинам и снижает добычу нефти.",
    "triz.cases.water_cut_oil_fields.conflictUp": "Закачка ↑ для давления → обводнённость продукции ↑",
    "triz.cases.water_cut_oil_fields.conflictDown": "Снижение закачки → давление ↓ → падение отбора нефти",
    "triz.cases.water_cut_oil_fields.divisionText":
      "Разделить функции: профиль закачки нагнетания, профиль отбора и локальное загущение/барьеры так, чтобы поддерживать давление без роста прорыва к продукции.",
    "triz.cases.water_cut_oil_fields.bullet1": "Селективное/профильное закачивание и перераспределение потоков в пласте",
    "triz.cases.water_cut_oil_fields.bullet2": "Разделение фаз на устье, повторное использование воды, полимерные гели в высокопроницаемых зонах",
    "triz.cases.water_cut_oil_fields.bullet3": "Мониторинг прорывов (трейсеры, косвенные признаки) и оперативная коррекция режима",
    "triz.cases.water_cut_oil_fields.emptyResult":
      "Снижение числа «водяных» скважин, окупаемость мероприятий за счёт доп. нефти и экономии на подготовке воды.",

    "triz.cases.cubesat_thermal.param1": "Тепловыделение передатчика и режим работы (duty cycle)",
    "triz.cases.cubesat_thermal.param2": "Площадь и эффективность радиатора при заданной массе",
    "triz.cases.cubesat_thermal.param3": "Термическая инерция и рабочий температурный коридор приборов",
    "triz.cases.cubesat_thermal.contradictionText":
      "Радиатор должен быть большим для отвода тепла, но габарит CubeSat требует минимальной площади и массы.",
    "triz.cases.cubesat_thermal.conflictUp": "Мощность передатчика ↑ → тепловой поток ↑ → риск перегрева ↑",
    "triz.cases.cubesat_thermal.conflictDown": "Увеличение радиатора → масса и моменты ↑, ограничения по раскрытию",
    "triz.cases.cubesat_thermal.divisionText":
      "Разделить временные режимы: пиковая передача короткими пакетами и пассивное/фазовое выравнивание температуры между сеансами.",
    "triz.cases.cubesat_thermal.bullet1": "Тепловые трубки, теплораспределение по каркасу и к поверхности с высоким ε",
    "triz.cases.cubesat_thermal.bullet2": "Материалы фазового перехода (PCM) и буферирование пиков без роста габарита в режиме хранения",
    "triz.cases.cubesat_thermal.bullet3": "Раскладывающиеся радиаторы или вывод тепла через «холодный» торец при сохранении форм-фактора 1U/3U",
    "triz.cases.cubesat_thermal.emptyResult":
      "Стабильный температурный режим при большей средней мощности радиолинии при минимальном приросте массы.",

    "triz.cases.mining_tailings_recovery.param1": "Дисперсность частиц Cr и вязкость пульпы",
    "triz.cases.mining_tailings_recovery.param2": "Потери металла в потоке и содержание в осадке/фильтрате",
    "triz.cases.mining_tailings_recovery.param3": "Экологические нормы слива и стоимость доработки хвостов",
    "triz.cases.mining_tailings_recovery.contradictionText":
      "Частицы должны быть мелкими по природе шлама, но для классической сепарации нужны более крупные агрегаты или иные силовые поля.",
    "triz.cases.mining_tailings_recovery.conflictUp": "Тонкий помол ↑ иногда нужен для открытия зёрен → ухудшение гравитационного отбора",
    "triz.cases.mining_tailings_recovery.conflictDown": "Грубая фракция ↑ для сепаратора → ниже извлечение из мелких частиц",
    "triz.cases.mining_tailings_recovery.divisionText":
      "Разделить потоки: селективная агрегация/флокуляция, разные физические поля (магнит, поверхность) вместо одного «универсального» отсека.",
    "triz.cases.mining_tailings_recovery.bullet1": "Флотация/контрактная селективность для оксидов и тонких частиц",
    "triz.cases.mining_tailings_recovery.bullet2": "Магнитная сепарация высокого градиента, тонкие слои магнитосодержащих минералов",
    "triz.cases.mining_tailings_recovery.bullet3": "Мембранные/наноразмерные барьеры и контроль рециркуляции воды на обогатительной фабрике",
    "triz.cases.mining_tailings_recovery.emptyResult":
      "Рост извлечения хрома из хвостов при снижении экологических рисков и повторном использовании воды.",

    "finance.cases.water_cut_oil_fields.hint":
      "Фокус: CAPEX на профиль закачки, OPEX на подготовку воды и дополнительная нефть к скважине.",
    "finance.cases.water_cut_oil_fields.defaultRevenue": "2,1 млн $",
    "finance.cases.water_cut_oil_fields.defaultRoi": "19%",
    "finance.cases.water_cut_oil_fields.defaultPayback": "14 мес",

    "finance.cases.cubesat_thermal.hint":
      "Фокус: стоимость радиатора/PCM, риск деградации электроники, ценность увеличения длительности сеанса связи.",
    "finance.cases.cubesat_thermal.defaultRevenue": "480 тыс $",
    "finance.cases.cubesat_thermal.defaultRoi": "24%",
    "finance.cases.cubesat_thermal.defaultPayback": "11 мес",

    "finance.cases.mining_tailings_recovery.hint":
      "Фокус: маржа по извлечённому металлу, штрафы/залог экологии, экономия на складировании хвостов.",
    "finance.cases.mining_tailings_recovery.defaultRevenue": "1,35 млн $",
    "finance.cases.mining_tailings_recovery.defaultRoi": "31%",
    "finance.cases.mining_tailings_recovery.defaultPayback": "9 мес",

    "patent.cases.water_cut_oil_fields.emptySubtitle":
      "Отчёт по кейсу добычи: обводнённость, профиль нагнетания, меры по снижению WOR.",
    "patent.cases.water_cut_oil_fields.section1.text":
      "Способ локализации водопроявлений на зрелых месторождениях с селективным закачиванием и контролем профиля нагнетания",
    "patent.cases.water_cut_oil_fields.section2.text":
      "Добыча нефти, поддержание пластового давления, подготовка и повторное использование попутно добываемой и нагнетаемой воды.",
    "patent.cases.water_cut_oil_fields.section3.text":
      "Рост обводнённости при нагнетании и прорывах воды к продуктивным скважинам при фиксированных ограничениях по давлению и водоотливу.",
    "patent.cases.water_cut_oil_fields.section4.text":
      "Снижение коэффициента обводнённости продукции, сокращение затрат на подготовку воды и увеличение отбора нефти.",
    "patent.cases.water_cut_oil_fields.section5.text":
      "Система, включающая модули оценки профиля закачки, дозирования реагентов/гелей в высокопроницаемые каналы и обратной связи по обводнённости продукции.",

    "patent.cases.cubesat_thermal.emptySubtitle":
      "Отчёт по тепловому контуру малых КА: отвод мощности связи в ограниченном объёме.",
    "patent.cases.cubesat_thermal.section1.text":
      "Тепловой контур малых космических аппаратов с распределением пиковых нагрузок передатчика по фазовому буферу",
    "patent.cases.cubesat_thermal.section2.text":
      "Космическая связь, бортовая электроника CubeSat и пассивные/полуактивные теплоотводящие элементы.",
    "patent.cases.cubesat_thermal.section3.text":
      "Рост мощности передатчика в недостаточном для классического радиатора объёме при ограничении массы.",
    "patent.cases.cubesat_thermal.section4.text":
      "Выравнивание температурных пиков, снижение риска перегрева и возможность увеличения средней мощности радиолинии.",
    "patent.cases.cubesat_thermal.section5.text":
      "Бортовой тепловой узел, содержащий элементы распределения тепла, фазовый буфер и интерфейс к радиационно-эффективной поверхности.",

    "patent.cases.mining_tailings_recovery.emptySubtitle":
      "Отчёт по доработке хвостов: извлечение хрома, экология и экономика цикла воды.",
    "patent.cases.mining_tailings_recovery.section1.text":
      "Способ извлечения дисперсных частиц хрома из тонкодисперсных хвостов обогащения",
    "patent.cases.mining_tailings_recovery.section2.text":
      "Обогащение руд, переработка хвостохранилищ, очистка оборотных вод и утилизация отходов.",
    "patent.cases.mining_tailings_recovery.section3.text":
      "Низкая степень извлечения мелких частиц при стандартных сепараторах и требования по качеству сбросов.",
    "patent.cases.mining_tailings_recovery.section4.text":
      "Повышение извлечения хрома и снижение экологической нагрузки при повторном использовании воды.",
    "patent.cases.mining_tailings_recovery.section5.text":
      "Установка, объединяющая этапы селективного обогащения, магнитного/поверхностного разделения и контроль тонких фракций в рециркуляции.",

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
    "triz.case.presetLabel": "TRIZ VIP case",
    "triz.case.custom": "Custom (text only)",
    "triz.case.water_cut_oil_fields": "Oil & gas: water cut (KazMunayGas)",
    "triz.case.cubesat_thermal": "Space: CubeSat overheating",
    "triz.case.mining_tailings_recovery": "Mining: tailings, chromium recovery",

    "triz.cases.water_cut_oil_fields.param1": "Produced water cut and injection volumes",
    "triz.cases.water_cut_oil_fields.param2": "Reservoir pressure support vs water breakthrough to producers",
    "triz.cases.water_cut_oil_fields.param3": "Water treatment OPEX and energy intensity",
    "triz.cases.water_cut_oil_fields.contradictionText":
      "Water must be injected to hold pressure, yet injection drives breakthrough to producing wells and lowers oil output.",
    "triz.cases.water_cut_oil_fields.conflictUp": "Injection ↑ for pressure → produced water ↑",
    "triz.cases.water_cut_oil_fields.conflictDown": "Cutting injection → pressure ↓ → oil rate risk ↓ but recovery risk ↑",
    "triz.cases.water_cut_oil_fields.divisionText":
      "Separate injection conformance from producer drawdown: profile control, local tightening, and phase handling at the wellhead.",
    "triz.cases.water_cut_oil_fields.bullet1": "Selective/profile injection and flow rebalancing in high-perm streaks",
    "triz.cases.water_cut_oil_fields.bullet2": "Rigorous surface separation, water reuse, polymer gels / conformance in thief zones",
    "triz.cases.water_cut_oil_fields.bullet3": "Surveillance (tracers, temperature, rates) with fast operating limits adjustments",
    "triz.cases.water_cut_oil_fields.emptyResult":
      "Fewer watered-off producers; payback via incremental oil and lower water-handling costs.",

    "triz.cases.cubesat_thermal.param1": "Transmitter dissipation and duty cycle",
    "triz.cases.cubesat_thermal.param2": "Radiator area ε and mass budget",
    "triz.cases.cubesat_thermal.param3": "Thermal inertia and payload temperature guard-bands",
    "triz.cases.cubesat_thermal.contradictionText":
      "Radiators must be large for heat rejection yet CubeSat volume demands minimal area and mass.",
    "triz.cases.cubesat_thermal.conflictUp": "TX power ↑ → heat flux ↑ → overheating risk ↑",
    "triz.cases.cubesat_thermal.conflictDown": "Bigger radiator / deployable → mass, stiffness, and deployment complexity ↑",
    "triz.cases.cubesat_thermal.divisionText":
      "Time-separate peaks: short burst links plus passive/phase buffering between passes to average dissipation.",
    "triz.cases.cubesat_thermal.bullet1": "Heat pipes/spreaders routing heat to high-emissivity panels",
    "triz.cases.cubesat_thermal.bullet2": "Phase-change materials to absorb spikes without permanent volume cost in stow",
    "triz.cases.cubesat_thermal.bullet3": "Deployable radiators or cold-sink interfaces while keeping 1U/3U constraints",
    "triz.cases.cubesat_thermal.emptyResult":
      "Stable thermal headroom for higher average RF power with limited mass growth.",

    "triz.cases.mining_tailings_recovery.param1": "Chromium particle size and pulp rheology",
    "triz.cases.mining_tailings_recovery.param2": "Metal losses to tailings stream vs concentrate grade",
    "triz.cases.mining_tailings_recovery.param3": "Discharge limits and cost of tailings re-processing",
    "triz.cases.mining_tailings_recovery.contradictionText":
      "Fines are inherent to slurry yet standard separators prefer coarser/slower-settling solids or different field forces.",
    "triz.cases.mining_tailings_recovery.conflictUp": "Finer liberation ↑ recovery opportunity → worse gravity capture",
    "triz.cases.mining_tailings_recovery.conflictDown": "Coarser feed ↑ for cyclones → misses ultrafine chromite",
    "triz.cases.mining_tailings_recovery.divisionText":
      "Split the stream: selective surface chemistry, high-gradient magnetic paths, and water recycle control instead of one generic sump.",
    "triz.cases.mining_tailings_recovery.bullet1": "Flotation with selective collectors for oxide/hydroxide fines",
    "triz.cases.mining_tailings_recovery.bullet2": "High-gradient magnetic separation and stratified bed capture",
    "triz.cases.mining_tailings_recovery.bullet3": "Membrane polish / nanofiltration loops with closed water balance",
    "triz.cases.mining_tailings_recovery.emptyResult":
      "Higher Cr recovery from wastes with lower environmental liability and water reuse.",

    "finance.cases.water_cut_oil_fields.hint":
      "Focus: conformance CAPEX, water-treatment OPEX, and incremental oil per well.",
    "finance.cases.water_cut_oil_fields.defaultRevenue": "$2.1M",
    "finance.cases.water_cut_oil_fields.defaultRoi": "19%",
    "finance.cases.water_cut_oil_fields.defaultPayback": "14 mo",

    "finance.cases.cubesat_thermal.hint":
      "Focus: thermal hardware cost, reliability derating, and value of longer contact passes.",
    "finance.cases.cubesat_thermal.defaultRevenue": "$480k",
    "finance.cases.cubesat_thermal.defaultRoi": "24%",
    "finance.cases.cubesat_thermal.defaultPayback": "11 mo",

    "finance.cases.mining_tailings_recovery.hint":
      "Focus: metal credit margin, environmental bonds/fines avoided, and tailings storage deferral.",
    "finance.cases.mining_tailings_recovery.defaultRevenue": "$1.35M",
    "finance.cases.mining_tailings_recovery.defaultRoi": "31%",
    "finance.cases.mining_tailings_recovery.defaultPayback": "9 mo",

    "patent.cases.water_cut_oil_fields.emptySubtitle":
      "Oilfield case brief: water cut, injection profile, and WOR reduction levers.",
    "patent.cases.water_cut_oil_fields.section1.text":
      "Method for controlling water breakthrough in mature fields using selective injection profiling",
    "patent.cases.water_cut_oil_fields.section2.text":
      "Oil production, reservoir pressure maintenance, produced/ injected water treatment and recycling.",
    "patent.cases.water_cut_oil_fields.section3.text":
      "Rising water cut as injection supports pressure yet channels water toward producers under fixed cost limits.",
    "patent.cases.water_cut_oil_fields.section4.text":
      "Lower water cut, reduced water-handling costs, and higher oil offtake.",
    "patent.cases.water_cut_oil_fields.section5.text":
      "System with conformance diagnostics modules, targeted gel/polymer placement, and feedback from wellhead water cut.",

    "patent.cases.cubesat_thermal.emptySubtitle":
      "Small-satellite thermal memo: rejecting RF heat in tight volume.",
    "patent.cases.cubesat_thermal.section1.text":
      "Thermal management architecture for CubeSats buffering transmitter peaks with phase-change media",
    "patent.cases.cubesat_thermal.section2.text":
      "Satellite communications, CubeSat avionics, passive and semi-active thermal control.",
    "patent.cases.cubesat_thermal.section3.text":
      "Higher transmitter power in insufficient radiator envelope under strict mass limits.",
    "patent.cases.cubesat_thermal.section4.text":
      "Peak temperature mitigation enabling higher average RF throughput with bounded mass growth.",
    "patent.cases.cubesat_thermal.section5.text":
      "Onboard thermal assembly comprising heat spreading paths, a phase-change buffer, and a radiation-coupled sink interface.",

    "patent.cases.mining_tailings_recovery.emptySubtitle":
      "Tailings valorization brief: chromium fines, water loop, and compliance.",
    "patent.cases.mining_tailings_recovery.section1.text":
      "Process for recovering dispersed chromium particles from fine tailings slurries",
    "patent.cases.mining_tailings_recovery.section2.text":
      "Mineral processing, tailings remediation, water recycling, and waste valorization.",
    "patent.cases.mining_tailings_recovery.section3.text":
      "Poor capture of ultrafines with conventional separators under tightening discharge rules.",
    "patent.cases.mining_tailings_recovery.section4.text":
      "Higher chromium recovery with lower environmental exposure and improved water reuse.",
    "patent.cases.mining_tailings_recovery.section5.text":
      "Plant combining selective upgrading, high-gradient magnetic paths, and fine-fraction monitoring in recycle loops.",

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

