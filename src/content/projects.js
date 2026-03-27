/**
 * 起码 QiMa Showcase Projects
 * Curated project ideas that align with the 14-day curriculum
 */

export const projects = [
  {
    id: 'personal-portfolio',
    title: {
      zh: '个人作品集网站',
      en: 'Personal Portfolio Site'
    },
    description: {
      zh: '用HTML和CSS打造一个展示你技能和项目的个人网站。包含关于我、项目展示和联系方式等板块。',
      en: 'Build a personal website with HTML and CSS to showcase your skills and projects. Includes About Me, project gallery, and contact sections.'
    },
    category: 'portfolio',
    tags: ['HTML', 'CSS', 'Flexbox', 'Responsive'],
    relatedDay: 6,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: '🎨'
  },
  {
    id: 'weather-dashboard',
    title: {
      zh: '天气仪表盘',
      en: 'Weather Dashboard'
    },
    description: {
      zh: '通过调用免费天气API，展示实时天气数据的仪表盘应用。支持城市搜索和多日预报。',
      en: 'A dashboard app that displays real-time weather data from a free API. Supports city search and multi-day forecasts.'
    },
    category: 'data',
    tags: ['JavaScript', 'API', 'JSON', 'Async'],
    relatedDay: 9,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: '🌤️'
  },
  {
    id: 'todo-list',
    title: {
      zh: '待办事项应用',
      en: 'Todo List App'
    },
    description: {
      zh: '一个功能完整的待办事项管理器，支持添加、完成、删除任务，数据保存在浏览器本地存储中。',
      en: 'A fully functional task manager that supports adding, completing, and deleting tasks, with data saved in browser local storage.'
    },
    category: 'tools',
    tags: ['JavaScript', 'DOM', 'LocalStorage', 'CSS'],
    relatedDay: 5,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    icon: '✅'
  },
  {
    id: 'recipe-collection',
    title: {
      zh: '食谱收藏页面',
      en: 'Recipe Collection Page'
    },
    description: {
      zh: '一个精美的食谱展示页面，用卡片布局呈现不同菜品，包含食材清单和烹饪步骤。',
      en: 'A beautifully designed recipe showcase page using card layouts for different dishes, with ingredient lists and cooking steps.'
    },
    category: 'creative',
    tags: ['HTML', 'CSS', 'Grid', 'Responsive'],
    relatedDay: 3,
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    icon: '🍳'
  },
  {
    id: 'expense-tracker',
    title: {
      zh: '支出追踪器',
      en: 'Expense Tracker'
    },
    description: {
      zh: '记录和分类日常开支的应用，自动计算总额和各类别占比，帮助你管理个人财务。',
      en: 'An app that records and categorizes daily expenses, automatically calculates totals and category percentages to help manage personal finances.'
    },
    category: 'data',
    tags: ['JavaScript', 'Array', 'LocalStorage', 'CSS'],
    relatedDay: 10,
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    icon: '💰'
  },
  {
    id: 'study-flashcards',
    title: {
      zh: '学习闪卡应用',
      en: 'Study Flashcards App'
    },
    description: {
      zh: '创建和翻阅双面闪卡的学习工具，支持自定义题目和答案，点击卡片翻转查看。',
      en: 'A study tool for creating and reviewing two-sided flashcards. Supports custom questions and answers with a click-to-flip interaction.'
    },
    category: 'tools',
    tags: ['JavaScript', 'CSS Animation', 'DOM', 'Event'],
    relatedDay: 5,
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    icon: '📚'
  },
  {
    id: 'blog-journal',
    title: {
      zh: '博客/日记网站',
      en: 'Blog / Journal Site'
    },
    description: {
      zh: '一个简洁的博客网站，支持文章列表、文章详情和分类筛选，适合记录学习历程。',
      en: 'A clean blog website with article listing, detail views, and category filtering — perfect for documenting what you learn.'
    },
    category: 'portfolio',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    relatedDay: 6,
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    icon: '✍️'
  },
  {
    id: 'movie-recommendations',
    title: {
      zh: '电影推荐页面',
      en: 'Movie Recommendation Page'
    },
    description: {
      zh: '从电影API获取数据，按评分和类型展示电影推荐，支持搜索和收藏功能。',
      en: 'Fetch data from a movie API to display recommendations by rating and genre, with search and favorites features.'
    },
    category: 'data',
    tags: ['JavaScript', 'API', 'JSON', 'Grid'],
    relatedDay: 9,
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    icon: '🎬'
  },
  {
    id: 'countdown-timer',
    title: {
      zh: '倒计时应用',
      en: 'Countdown Timer App'
    },
    description: {
      zh: '一个可视化的倒计时工具，支持自定义目标日期和名称，带有动态动画效果。',
      en: 'A visual countdown tool with customizable target dates and names, featuring dynamic animation effects.'
    },
    category: 'creative',
    tags: ['JavaScript', 'CSS Animation', 'DOM', 'Date'],
    relatedDay: 5,
    gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    icon: '⏳'
  },
  {
    id: 'job-application-tracker',
    title: {
      zh: '求职申请追踪器',
      en: 'Job Application Tracker'
    },
    description: {
      zh: '管理求职过程的工具，记录每份申请的公司、职位、状态和面试日期，一目了然。',
      en: 'A tool for managing your job search — track each application\'s company, position, status, and interview dates at a glance.'
    },
    category: 'tools',
    tags: ['JavaScript', 'LocalStorage', 'CSS Grid', 'DOM'],
    relatedDay: 10,
    gradient: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
    icon: '💼'
  },
  {
    id: 'habit-tracker',
    title: {
      zh: '习惯打卡器',
      en: 'Habit Tracker'
    },
    description: {
      zh: '每日习惯追踪应用，支持添加习惯、每日打卡、查看连续天数和完成率统计。',
      en: 'A daily habit tracking app — add habits, check them off each day, and view streaks and completion stats.'
    },
    category: 'tools',
    tags: ['JavaScript', 'LocalStorage', 'CSS Grid', 'Date'],
    relatedDay: 7,
    gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    icon: '🎯'
  },
  {
    id: 'quiz-game',
    title: {
      zh: '知识问答小游戏',
      en: 'Quiz Trivia Game'
    },
    description: {
      zh: '一个互动问答游戏，支持多种题目类型、计分系统和结果页面，可自定义题库。',
      en: 'An interactive trivia game with multiple question types, a scoring system, and results page. Customize your own question bank.'
    },
    category: 'creative',
    tags: ['JavaScript', 'DOM', 'CSS Animation', 'Array'],
    relatedDay: 8,
    gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    icon: '🧠'
  }
];
