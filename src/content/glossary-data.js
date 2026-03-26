/**
 * CodeLaunch Glossary Data
 * Bilingual tech terms for Chinese-speaking learners
 */

export const glossaryTerms = [
  // ==================== BASICS (~15) ====================
  {
    en: 'Terminal',
    zh: '终端',
    pinyin: 'zhong1 duan1',
    definition: {
      zh: '用于输入命令与计算机交互的文本界面',
      en: 'A text-based interface for entering commands to interact with your computer'
    },
    example: 'Open the terminal to run Claude Code / 打开终端来运行Claude Code',
    category: 'basics'
  },
  {
    en: 'Code',
    zh: '代码',
    pinyin: 'dai4 ma3',
    definition: {
      zh: '用编程语言编写的指令，告诉计算机要做什么',
      en: 'Instructions written in a programming language that tell the computer what to do'
    },
    example: 'Claude Code helps you write code faster / Claude Code帮你更快地写代码',
    category: 'basics'
  },
  {
    en: 'File',
    zh: '文件',
    pinyin: 'wen2 jian4',
    definition: {
      zh: '存储在计算机上的数据单元，如文本、图片或代码',
      en: 'A unit of data stored on your computer, such as text, images, or code'
    },
    example: 'Create a new file called index.html / 创建一个叫index.html的新文件',
    category: 'basics'
  },
  {
    en: 'Folder',
    zh: '文件夹',
    pinyin: 'wen2 jian4 jia1',
    definition: {
      zh: '用于组织文件的容器，也叫目录',
      en: 'A container for organizing files, also called a directory'
    },
    example: 'Put all project files in one folder / 把所有项目文件放在一个文件夹里',
    category: 'basics'
  },
  {
    en: 'Command',
    zh: '命令',
    pinyin: 'ming4 ling4',
    definition: {
      zh: '在终端中输入的指令，让计算机执行特定操作',
      en: 'An instruction typed into the terminal to make the computer perform a specific action'
    },
    example: 'Type the command "claude" to start a session / 输入命令"claude"来开始一个会话',
    category: 'basics'
  },
  {
    en: 'Download',
    zh: '下载',
    pinyin: 'xia4 zai4',
    definition: {
      zh: '从互联网将文件复制到你的计算机上',
      en: 'To copy a file from the internet to your computer'
    },
    example: 'Download Node.js before installing Claude Code / 下载Node.js后再安装Claude Code',
    category: 'basics'
  },
  {
    en: 'Install',
    zh: '安装',
    pinyin: 'an1 zhuang1',
    definition: {
      zh: '将软件设置到你的计算机上使其可以使用',
      en: 'To set up software on your computer so it can be used'
    },
    example: 'Install Claude Code with npm / 用npm安装Claude Code',
    category: 'basics'
  },
  {
    en: 'Run',
    zh: '运行',
    pinyin: 'yun4 xing2',
    definition: {
      zh: '执行一段程序或命令',
      en: 'To execute a program or command'
    },
    example: 'Run your website locally to preview changes / 在本地运行你的网站来预览更改',
    category: 'basics'
  },
  {
    en: 'Error',
    zh: '错误',
    pinyin: 'cuo4 wu4',
    definition: {
      zh: '程序中的问题，导致其无法按预期工作',
      en: 'A problem in your program that prevents it from working as expected'
    },
    example: 'Ask Claude Code to help fix the error / 让Claude Code帮你修复这个错误',
    category: 'basics'
  },
  {
    en: 'Bug',
    zh: '缺陷 (Bug)',
    pinyin: 'lou4 dong4',
    definition: {
      zh: '代码中导致意外行为的缺陷',
      en: 'A flaw in code that causes unexpected behavior'
    },
    example: 'Claude Code can help you find and fix bugs / Claude Code能帮你发现和修复漏洞',
    category: 'basics'
  },
  {
    en: 'Version',
    zh: '版本',
    pinyin: 'ban3 ben3',
    definition: {
      zh: '软件在某个时间点的特定状态',
      en: 'A specific state of software at a point in time'
    },
    example: 'Check your Node.js version with "node -v" / 用"node -v"查看你的Node.js版本',
    category: 'basics'
  },
  {
    en: 'Open Source',
    zh: '开源',
    pinyin: 'kai1 yuan2',
    definition: {
      zh: '源代码公开可用，任何人都可以查看和使用',
      en: 'Software whose source code is publicly available for anyone to view and use'
    },
    example: 'Many tools used with Claude Code are open source / 很多与Claude Code配合的工具是开源的',
    category: 'basics'
  },
  {
    en: 'Repository',
    zh: '代码仓库',
    pinyin: 'dai4 ma3 cang1 ku4',
    definition: {
      zh: '存储项目所有文件和版本历史的地方',
      en: 'A storage location for all files and version history of a project'
    },
    example: 'Push your code to a GitHub repository / 把你的代码推送到GitHub代码仓库',
    category: 'basics'
  },
  {
    en: 'IDE',
    zh: '集成开发环境',
    pinyin: 'ji2 cheng2 kai1 fa1 huan2 jing4',
    definition: {
      zh: '集合了代码编辑、调试等功能的软件工具',
      en: 'An integrated development environment that combines code editing, debugging, and other tools'
    },
    example: 'VS Code is a popular IDE that works alongside Claude Code / VS Code是一个流行的IDE，可以和Claude Code配合使用',
    category: 'basics'
  },
  {
    en: 'Compiler',
    zh: '编译器',
    pinyin: 'bian1 yi4 qi4',
    definition: {
      zh: '将人类可读的代码转换成计算机能执行的指令的程序',
      en: 'A program that translates human-readable code into instructions a computer can execute'
    },
    example: 'TypeScript needs a compiler to convert to JavaScript / TypeScript需要编译器来转换为JavaScript',
    category: 'basics'
  },

  // ==================== CLAUDE CODE (~12) ====================
  {
    en: 'Prompt',
    zh: '提示词',
    pinyin: 'ti2 shi4 ci2',
    definition: {
      zh: '你给AI的指令或问题，引导它完成任务',
      en: 'An instruction or question you give to the AI to guide it in completing a task'
    },
    example: 'Write a clear prompt for better results / 写一个清晰的提示词来获得更好的结果',
    category: 'claude-code'
  },
  {
    en: 'AI Assistant',
    zh: 'AI助手',
    pinyin: 'AI zhu4 shou3',
    definition: {
      zh: '能够理解自然语言并帮助完成任务的人工智能程序',
      en: 'An artificial intelligence program that understands natural language and helps complete tasks'
    },
    example: 'Claude Code is your AI assistant for building apps / Claude Code是你构建应用的AI助手',
    category: 'claude-code'
  },
  {
    en: 'Context',
    zh: '上下文',
    pinyin: 'shang4 xia4 wen2',
    definition: {
      zh: 'AI用来理解你请求的背景信息',
      en: 'Background information that AI uses to understand your request'
    },
    example: 'Give Claude Code more context about your project / 给Claude Code更多关于你项目的上下文',
    category: 'claude-code'
  },
  {
    en: 'Token',
    zh: '令牌',
    pinyin: 'ling4 pai2',
    definition: {
      zh: 'AI模型处理文本的基本单位，大约相当于一个词或几个字符',
      en: 'The basic unit AI models use to process text, roughly equivalent to a word or a few characters'
    },
    example: 'Each conversation uses tokens from your plan / 每次对话都会使用你计划中的令牌',
    category: 'claude-code'
  },
  {
    en: 'Model',
    zh: '模型',
    pinyin: 'mo2 xing2',
    definition: {
      zh: '经过训练能够理解和生成文本的AI系统',
      en: 'An AI system trained to understand and generate text'
    },
    example: 'Claude Code uses the Claude model to help you code / Claude Code使用Claude模型帮你编写代码',
    category: 'claude-code'
  },
  {
    en: 'Plan Mode',
    zh: '计划模式',
    pinyin: 'ji4 hua4 mo2 shi4',
    definition: {
      zh: 'Claude Code的一种模式，只做计划和分析而不写代码',
      en: 'A Claude Code mode that only plans and analyzes without writing code'
    },
    example: 'Use Plan Mode to think through your app structure first / 用计划模式先想清楚你的应用结构',
    category: 'claude-code'
  },
  {
    en: 'CLAUDE.md',
    zh: 'CLAUDE.md',
    pinyin: 'CLAUDE.md',
    definition: {
      zh: '项目中的配置文件，告诉Claude Code关于你项目的规则和偏好',
      en: 'A configuration file in your project that tells Claude Code your project rules and preferences'
    },
    example: 'Add coding style rules to your CLAUDE.md file / 把代码风格规则加到你的CLAUDE.md文件中',
    category: 'claude-code'
  },
  {
    en: 'Session',
    zh: '会话',
    pinyin: 'hui4 hua4',
    definition: {
      zh: '你与Claude Code之间一次连续的交互过程',
      en: 'A continuous interaction between you and Claude Code'
    },
    example: 'Start a new session for each project task / 为每个项目任务开始一个新会话',
    category: 'claude-code'
  },
  {
    en: 'MCP',
    zh: '模型上下文协议',
    pinyin: 'mo2 xing2 shang4 xia4 wen2 xie2 yi4',
    definition: {
      zh: '让AI模型与外部工具和数据源连接的标准协议',
      en: 'A standard protocol that connects AI models with external tools and data sources'
    },
    example: 'MCP lets Claude Code connect to databases and APIs / MCP让Claude Code能连接数据库和API',
    category: 'claude-code'
  },
  {
    en: 'Hook',
    zh: '钩子',
    pinyin: 'gou1 zi',
    definition: {
      zh: '在特定事件发生时自动执行的自定义脚本',
      en: 'Custom scripts that run automatically when specific events occur'
    },
    example: 'Set up hooks to auto-format code before commits / 设置钩子在提交前自动格式化代码',
    category: 'claude-code'
  },
  {
    en: 'Permission',
    zh: '权限',
    pinyin: 'quan2 xian4',
    definition: {
      zh: '控制Claude Code能够执行哪些操作的安全设置',
      en: 'Security settings that control what actions Claude Code can perform'
    },
    example: 'Grant permission for Claude Code to edit files / 授权Claude Code编辑文件的权限',
    category: 'claude-code'
  },
  {
    en: 'Conversation',
    zh: '对话',
    pinyin: 'dui4 hua4',
    definition: {
      zh: '你和AI之间来回交流的完整记录',
      en: 'The complete back-and-forth exchange between you and the AI'
    },
    example: 'Review your conversation history to track progress / 查看对话历史来跟踪进度',
    category: 'claude-code'
  },

  // ==================== HTML/CSS (~20) ====================
  {
    en: 'HTML',
    zh: 'HTML',
    pinyin: 'HTML',
    definition: {
      zh: '超文本标记语言，用于创建网页结构的标准语言',
      en: 'HyperText Markup Language, the standard language for creating web page structure'
    },
    example: 'Ask Claude Code to create an HTML page for you / 让Claude Code为你创建一个HTML页面',
    category: 'html-css'
  },
  {
    en: 'CSS',
    zh: 'CSS',
    pinyin: 'CSS',
    definition: {
      zh: '层叠样式表，用于控制网页的外观和布局',
      en: 'Cascading Style Sheets, used to control the appearance and layout of web pages'
    },
    example: 'Use CSS to make your website look beautiful / 用CSS让你的网站变得漂亮',
    category: 'html-css'
  },
  {
    en: 'Tag',
    zh: '标签',
    pinyin: 'biao1 qian1',
    definition: {
      zh: 'HTML中用尖括号包裹的关键词，定义页面元素',
      en: 'Keywords wrapped in angle brackets in HTML that define page elements'
    },
    example: 'The <h1> tag creates a main heading / <h1>标签创建一个主标题',
    category: 'html-css'
  },
  {
    en: 'Element',
    zh: '元素',
    pinyin: 'yuan2 su4',
    definition: {
      zh: 'HTML页面中的一个独立组件，由标签和内容组成',
      en: 'An individual component in an HTML page, consisting of tags and content'
    },
    example: 'Each button is an element on the page / 每个按钮都是页面上的一个元素',
    category: 'html-css'
  },
  {
    en: 'Attribute',
    zh: '属性',
    pinyin: 'shu3 xing4',
    definition: {
      zh: '为HTML元素提供额外信息的名值对',
      en: 'Name-value pairs that provide additional information about an HTML element'
    },
    example: 'Add a "class" attribute to style your element / 添加一个"class"属性来给元素添加样式',
    category: 'html-css'
  },
  {
    en: 'Class',
    zh: '类',
    pinyin: 'lei4',
    definition: {
      zh: '用于标识一组元素的名称，方便统一添加样式',
      en: 'A name used to identify a group of elements for unified styling'
    },
    example: 'Give elements the same class to share styles / 给元素相同的类来共享样式',
    category: 'html-css'
  },
  {
    en: 'ID',
    zh: '标识符',
    pinyin: 'biao1 shi4 fu2',
    definition: {
      zh: '页面中唯一标识某个元素的名称',
      en: 'A unique name that identifies a specific element on the page'
    },
    example: 'Use an ID to target one specific element / 用标识符来定位一个特定的元素',
    category: 'html-css'
  },
  {
    en: 'Div',
    zh: '容器',
    pinyin: 'rong2 qi4',
    definition: {
      zh: 'HTML中用于分组和布局的通用容器元素',
      en: 'A generic container element in HTML used for grouping and layout'
    },
    example: 'Wrap related content in a div / 把相关内容包在一个容器里',
    category: 'html-css'
  },
  {
    en: 'Style',
    zh: '样式',
    pinyin: 'yang4 shi4',
    definition: {
      zh: '定义元素外观的CSS规则，如颜色、大小、位置等',
      en: 'CSS rules that define the appearance of elements, such as color, size, and position'
    },
    example: 'Tell Claude Code what style you want for the page / 告诉Claude Code你想要什么样的页面样式',
    category: 'html-css'
  },
  {
    en: 'Color',
    zh: '颜色',
    pinyin: 'yan2 se4',
    definition: {
      zh: 'CSS中用于设置文本、背景等颜色的属性',
      en: 'A CSS property used to set the color of text, backgrounds, and more'
    },
    example: 'Change the button color to blue with CSS / 用CSS把按钮颜色改成蓝色',
    category: 'html-css'
  },
  {
    en: 'Font',
    zh: '字体',
    pinyin: 'zi4 ti3',
    definition: {
      zh: '文本显示时使用的字型设计',
      en: 'The typeface design used to display text'
    },
    example: 'Choose a clean font for better readability / 选一个清晰的字体来提高可读性',
    category: 'html-css'
  },
  {
    en: 'Margin',
    zh: '外边距',
    pinyin: 'wai4 bian1 ju4',
    definition: {
      zh: '元素外部与其他元素之间的空间',
      en: 'The space outside an element between it and other elements'
    },
    example: 'Add margin to create space between sections / 添加外边距来创建区块之间的空间',
    category: 'html-css'
  },
  {
    en: 'Padding',
    zh: '内边距',
    pinyin: 'nei4 bian1 ju4',
    definition: {
      zh: '元素内部内容与边框之间的空间',
      en: 'The space inside an element between its content and its border'
    },
    example: 'Add padding so text does not touch the edges / 添加内边距让文字不会紧贴边缘',
    category: 'html-css'
  },
  {
    en: 'Flexbox',
    zh: '弹性布局',
    pinyin: 'tan2 xing4 bu4 ju2',
    definition: {
      zh: '一种CSS布局模式，轻松实现元素的灵活排列',
      en: 'A CSS layout mode that makes it easy to arrange elements flexibly'
    },
    example: 'Use flexbox to center items on the page / 用弹性布局让元素在页面上居中',
    category: 'html-css'
  },
  {
    en: 'Grid',
    zh: '网格布局',
    pinyin: 'wang3 ge2 bu4 ju2',
    definition: {
      zh: '一种CSS布局模式，通过行和列来组织内容',
      en: 'A CSS layout mode that organizes content through rows and columns'
    },
    example: 'Use grid layout for your project gallery / 用网格布局来展示你的项目画廊',
    category: 'html-css'
  },
  {
    en: 'Responsive',
    zh: '响应式',
    pinyin: 'xiang3 ying4 shi4',
    definition: {
      zh: '网页能够自动适应不同屏幕大小的设计方式',
      en: 'A design approach where web pages automatically adapt to different screen sizes'
    },
    example: 'Make your site responsive so it works on phones / 让你的网站响应式，这样手机上也能用',
    category: 'html-css'
  },
  {
    en: 'Media Query',
    zh: '媒体查询',
    pinyin: 'mei2 ti3 cha2 xun2',
    definition: {
      zh: 'CSS中根据设备特征（如屏幕宽度）应用不同样式的规则',
      en: 'CSS rules that apply different styles based on device characteristics like screen width'
    },
    example: 'Use a media query to adjust layout for mobile / 用媒体查询来调整移动端的布局',
    category: 'html-css'
  },
  {
    en: 'Selector',
    zh: '选择器',
    pinyin: 'xuan3 ze2 qi4',
    definition: {
      zh: 'CSS中用于指定要添加样式的HTML元素的模式',
      en: 'A pattern in CSS used to specify which HTML elements to style'
    },
    example: 'Use a class selector to style all cards the same way / 用类选择器让所有卡片样式一致',
    category: 'html-css'
  },
  {
    en: 'Property',
    zh: '属性',
    pinyin: 'shu3 xing4',
    definition: {
      zh: 'CSS中定义某个样式特征的名称，如color、font-size',
      en: 'A name in CSS that defines a style characteristic, such as color or font-size'
    },
    example: 'The "display" property controls how elements appear / "display"属性控制元素如何显示',
    category: 'html-css'
  },
  {
    en: 'Value',
    zh: '值',
    pinyin: 'zhi2',
    definition: {
      zh: '赋予CSS属性的具体设定，如"red"、"16px"',
      en: 'The specific setting assigned to a CSS property, such as "red" or "16px"'
    },
    example: 'Set the font-size value to 18px for readability / 把字体大小的值设为18px以提高可读性',
    category: 'html-css'
  },

  // ==================== JAVASCRIPT (~15) ====================
  {
    en: 'JavaScript',
    zh: 'JavaScript',
    pinyin: 'JavaScript',
    definition: {
      zh: '让网页具有交互功能的编程语言',
      en: 'A programming language that adds interactive functionality to web pages'
    },
    example: 'Claude Code writes JavaScript to make your buttons work / Claude Code写JavaScript让你的按钮工作',
    category: 'javascript'
  },
  {
    en: 'Variable',
    zh: '变量',
    pinyin: 'bian4 liang4',
    definition: {
      zh: '用来存储数据值的命名容器',
      en: 'A named container used to store data values'
    },
    example: 'Create a variable to store the user name / 创建一个变量来存储用户名',
    category: 'javascript'
  },
  {
    en: 'Function',
    zh: '函数',
    pinyin: 'han2 shu4',
    definition: {
      zh: '一段可重复使用的代码块，执行特定任务',
      en: 'A reusable block of code that performs a specific task'
    },
    example: 'Write a function to calculate the total price / 写一个函数来计算总价',
    category: 'javascript'
  },
  {
    en: 'Array',
    zh: '数组',
    pinyin: 'shu4 zu3',
    definition: {
      zh: '按顺序存储多个值的列表结构',
      en: 'A list structure that stores multiple values in order'
    },
    example: 'Store your todo items in an array / 把你的待办事项存在一个数组里',
    category: 'javascript'
  },
  {
    en: 'Object',
    zh: '对象',
    pinyin: 'dui4 xiang4',
    definition: {
      zh: '以键值对形式存储相关数据和功能的集合',
      en: 'A collection that stores related data and functions as key-value pairs'
    },
    example: 'Create an object to represent a user profile / 创建一个对象来表示用户资料',
    category: 'javascript'
  },
  {
    en: 'String',
    zh: '字符串',
    pinyin: 'zi4 fu2 chuan4',
    definition: {
      zh: '由字符组成的文本数据类型',
      en: 'A data type consisting of a sequence of characters (text)'
    },
    example: 'The page title is stored as a string / 页面标题以字符串的形式存储',
    category: 'javascript'
  },
  {
    en: 'Number',
    zh: '数字',
    pinyin: 'shu4 zi4',
    definition: {
      zh: '表示数值的数据类型，包括整数和小数',
      en: 'A data type representing numeric values, including integers and decimals'
    },
    example: 'Use a number variable for the item count / 用一个数字变量来记录物品数量',
    category: 'javascript'
  },
  {
    en: 'Boolean',
    zh: '布尔值',
    pinyin: 'bu4 er3 zhi2',
    definition: {
      zh: '只有真(true)或假(false)两种状态的数据类型',
      en: 'A data type with only two possible states: true or false'
    },
    example: 'Use a boolean to track if the task is completed / 用布尔值来跟踪任务是否完成',
    category: 'javascript'
  },
  {
    en: 'Loop',
    zh: '循环',
    pinyin: 'xun2 huan2',
    definition: {
      zh: '重复执行一段代码直到满足特定条件的结构',
      en: 'A structure that repeats a block of code until a specific condition is met'
    },
    example: 'Use a loop to display all items in the list / 用循环来显示列表中的所有项目',
    category: 'javascript'
  },
  {
    en: 'Condition',
    zh: '条件',
    pinyin: 'tiao2 jian4',
    definition: {
      zh: '用于决定代码是否执行的判断语句',
      en: 'A statement used to decide whether code should be executed'
    },
    example: 'Add a condition to check if the password is correct / 添加一个条件来检查密码是否正确',
    category: 'javascript'
  },
  {
    en: 'Event',
    zh: '事件',
    pinyin: 'shi4 jian4',
    definition: {
      zh: '用户或浏览器触发的动作，如点击、滚动、按键',
      en: 'An action triggered by the user or browser, such as a click, scroll, or key press'
    },
    example: 'Listen for a click event on the submit button / 监听提交按钮的点击事件',
    category: 'javascript'
  },
  {
    en: 'DOM',
    zh: 'DOM',
    pinyin: 'DOM',
    definition: {
      zh: '文档对象模型，浏览器用来表示网页结构的编程接口',
      en: 'Document Object Model, the programming interface browsers use to represent page structure'
    },
    example: 'Use the DOM to update text on your page dynamically / 用DOM来动态更新你页面上的文字',
    category: 'javascript'
  },
  {
    en: 'API',
    zh: '接口',
    pinyin: 'jie1 kou3',
    definition: {
      zh: '应用程序编程接口，让不同软件之间互相通信的规则',
      en: 'Application Programming Interface, rules that allow different software to communicate'
    },
    example: 'Fetch weather data from a free API / 从一个免费接口获取天气数据',
    category: 'javascript'
  },
  {
    en: 'JSON',
    zh: 'JSON',
    pinyin: 'JSON',
    definition: {
      zh: '一种轻量级的数据交换格式，易于阅读和编写',
      en: 'A lightweight data exchange format that is easy to read and write'
    },
    example: 'The API returns data in JSON format / 接口以JSON格式返回数据',
    category: 'javascript'
  },
  {
    en: 'Async',
    zh: '异步',
    pinyin: 'yi4 bu4',
    definition: {
      zh: '不需要等待操作完成就能继续执行其他代码的编程方式',
      en: 'A programming approach where code can continue running without waiting for an operation to finish'
    },
    example: 'Use async code to load data without freezing the page / 用异步代码加载数据而不会冻结页面',
    category: 'javascript'
  },

  // ==================== DEPLOYMENT (~10) ====================
  {
    en: 'Deploy',
    zh: '部署',
    pinyin: 'bu4 shu3',
    definition: {
      zh: '将你的网站或应用发布到互联网上供他人访问',
      en: 'To publish your website or app to the internet for others to access'
    },
    example: 'Deploy your site to Cloudflare Pages with one command / 用一条命令把你的网站部署到Cloudflare Pages',
    category: 'deployment'
  },
  {
    en: 'Server',
    zh: '服务器',
    pinyin: 'fu2 wu4 qi4',
    definition: {
      zh: '存储网站文件并将其发送给访问者的计算机',
      en: 'A computer that stores website files and delivers them to visitors'
    },
    example: 'Your site is hosted on a Cloudflare server / 你的网站托管在Cloudflare服务器上',
    category: 'deployment'
  },
  {
    en: 'Domain',
    zh: '域名',
    pinyin: 'yu4 ming2',
    definition: {
      zh: '网站在互联网上的地址名称，如example.com',
      en: 'The address name of a website on the internet, like example.com'
    },
    example: 'Buy a domain name for your portfolio site / 为你的作品集网站购买一个域名',
    category: 'deployment'
  },
  {
    en: 'URL',
    zh: '网址',
    pinyin: 'wang3 zhi3',
    definition: {
      zh: '统一资源定位符，用于在互联网上定位特定网页的地址',
      en: 'Uniform Resource Locator, an address used to locate a specific web page on the internet'
    },
    example: 'Share your project URL with friends / 和朋友分享你的项目网址',
    category: 'deployment'
  },
  {
    en: 'Hosting',
    zh: '托管',
    pinyin: 'tuo1 guan3',
    definition: {
      zh: '提供服务器空间来存储和运行你的网站的服务',
      en: 'A service that provides server space to store and run your website'
    },
    example: 'Cloudflare Pages provides free hosting for static sites / Cloudflare Pages为静态网站提供免费托管',
    category: 'deployment'
  },
  {
    en: 'DNS',
    zh: 'DNS',
    pinyin: 'DNS',
    definition: {
      zh: '域名系统，将域名翻译成IP地址的系统',
      en: 'Domain Name System, a system that translates domain names into IP addresses'
    },
    example: 'Configure DNS to point your domain to Cloudflare / 配置DNS把你的域名指向Cloudflare',
    category: 'deployment'
  },
  {
    en: 'HTTPS',
    zh: '安全协议',
    pinyin: 'an1 quan2 xie2 yi4',
    definition: {
      zh: '加密的网络传输协议，保护用户数据安全',
      en: 'An encrypted web transfer protocol that protects user data'
    },
    example: 'Cloudflare automatically enables HTTPS for your site / Cloudflare自动为你的网站启用安全协议',
    category: 'deployment'
  },
  {
    en: 'CDN',
    zh: '内容分发网络',
    pinyin: 'nei4 rong2 fen1 fa1 wang3 luo4',
    definition: {
      zh: '将网站内容分布在全球多个服务器上以加速访问',
      en: 'A network that distributes website content across global servers for faster access'
    },
    example: 'Cloudflare CDN makes your site load fast worldwide / Cloudflare CDN让你的网站在全球加载更快',
    category: 'deployment'
  },
  {
    en: 'Build',
    zh: '构建',
    pinyin: 'gou4 jian4',
    definition: {
      zh: '将源代码转换成可以部署的最终文件的过程',
      en: 'The process of converting source code into final files ready for deployment'
    },
    example: 'Run the build command before deploying / 部署前运行构建命令',
    category: 'deployment'
  },
  {
    en: 'Production',
    zh: '生产环境',
    pinyin: 'sheng1 chan3 huan2 jing4',
    definition: {
      zh: '网站或应用正式上线、面向真实用户运行的环境',
      en: 'The live environment where your website or app runs for real users'
    },
    example: 'Test everything before pushing to production / 在推到生产环境之前测试所有功能',
    category: 'deployment'
  },

  // ==================== CAREER (~10) ====================
  {
    en: 'Portfolio',
    zh: '作品集',
    pinyin: 'zuo4 pin3 ji2',
    definition: {
      zh: '展示你项目和技能的个人网站或合集',
      en: 'A personal website or collection that showcases your projects and skills'
    },
    example: 'Build a portfolio site to impress employers / 建一个作品集网站来打动雇主',
    category: 'career'
  },
  {
    en: 'Resume',
    zh: '简历',
    pinyin: 'jian3 li4',
    definition: {
      zh: '总结你的教育、经验和技能的文档',
      en: 'A document summarizing your education, experience, and skills'
    },
    example: 'Add your Claude Code projects to your resume / 把你的Claude Code项目加到简历上',
    category: 'career'
  },
  {
    en: 'Interview',
    zh: '面试',
    pinyin: 'mian4 shi4',
    definition: {
      zh: '求职过程中与雇主面对面或远程交流的环节',
      en: 'A meeting with an employer, in person or remote, as part of the job application process'
    },
    example: 'Show your deployed projects during the interview / 面试中展示你已部署的项目',
    category: 'career'
  },
  {
    en: 'Internship',
    zh: '实习',
    pinyin: 'shi2 xi2',
    definition: {
      zh: '为学生或新人提供实际工作经验的短期职位',
      en: 'A short-term position providing practical work experience for students or newcomers'
    },
    example: 'Your portfolio can help you land a tech internship / 你的作品集可以帮你获得一份技术实习',
    category: 'career'
  },
  {
    en: 'Full-stack',
    zh: '全栈',
    pinyin: 'quan2 zhan4',
    definition: {
      zh: '同时掌握前端和后端开发技能的开发方向',
      en: 'A development path that covers both frontend and backend skills'
    },
    example: 'Full-stack developers can build entire applications / 全栈开发者可以构建完整的应用',
    category: 'career'
  },
  {
    en: 'Frontend',
    zh: '前端',
    pinyin: 'qian2 duan1',
    definition: {
      zh: '用户直接看到和交互的网页界面部分',
      en: 'The part of a website that users directly see and interact with'
    },
    example: 'This course focuses on frontend development / 这门课程专注于前端开发',
    category: 'career'
  },
  {
    en: 'Backend',
    zh: '后端',
    pinyin: 'hou4 duan1',
    definition: {
      zh: '网站的服务器端，处理数据和业务逻辑',
      en: 'The server side of a website that handles data and business logic'
    },
    example: 'Backend code runs on the server, not the browser / 后端代码在服务器上运行，而不是浏览器',
    category: 'career'
  },
  {
    en: 'Startup',
    zh: '创业公司',
    pinyin: 'chuang4 ye4 gong1 si1',
    definition: {
      zh: '一家新成立的、快速发展的小型公司',
      en: 'A newly established, fast-growing small company'
    },
    example: 'Many startups look for developers who can build fast with AI / 很多创业公司寻找能用AI快速构建的开发者',
    category: 'career'
  },
  {
    en: 'Remote',
    zh: '远程',
    pinyin: 'yuan3 cheng2',
    definition: {
      zh: '不在办公室、通过网络在任何地点工作的方式',
      en: 'Working from any location via the internet instead of at an office'
    },
    example: 'Remote work lets you code from anywhere / 远程工作让你在任何地方都能写代码',
    category: 'career'
  },
  {
    en: 'Networking',
    zh: '社交网络',
    pinyin: 'she4 jiao1 wang3 luo4',
    definition: {
      zh: '建立专业人际关系以拓展职业机会的活动',
      en: 'Building professional relationships to expand career opportunities'
    },
    example: 'Share your projects online to grow your network / 在网上分享你的项目来拓展人脉',
    category: 'career'
  },

  // ==================== BONUS TERMS ====================
  {
    en: 'Git',
    zh: 'Git',
    pinyin: 'Git',
    definition: {
      zh: '追踪代码变化的版本控制系统',
      en: 'A version control system that tracks changes to your code'
    },
    example: 'Claude Code uses git to manage your project history / Claude Code用git来管理你的项目历史',
    category: 'basics'
  },
  {
    en: 'npm',
    zh: 'npm',
    pinyin: 'npm',
    definition: {
      zh: 'Node.js的包管理器，用来安装和管理软件包',
      en: 'The Node.js package manager, used to install and manage software packages'
    },
    example: 'Install Claude Code globally with npm / 用npm全局安装Claude Code',
    category: 'basics'
  },
  {
    en: 'Callback',
    zh: '回调函数',
    pinyin: 'hui2 diao4 han2 shu4',
    definition: {
      zh: '作为参数传给另一个函数，在合适时机被调用的函数',
      en: 'A function passed as an argument to another function, to be called at the right time'
    },
    example: 'Use a callback to handle the button click / 用回调函数来处理按钮点击',
    category: 'javascript'
  },
  {
    en: 'Template',
    zh: '模板',
    pinyin: 'mu2 ban3',
    definition: {
      zh: '预先设计好的代码框架，可以快速开始新项目',
      en: 'A pre-designed code framework that lets you quickly start a new project'
    },
    example: 'Ask Claude Code to start from a template / 让Claude Code从一个模板开始',
    category: 'html-css'
  },
  {
    en: 'Component',
    zh: '组件',
    pinyin: 'zu3 jian4',
    definition: {
      zh: '可重复使用的独立界面模块',
      en: 'A reusable, self-contained UI module'
    },
    example: 'Build a reusable card component for your projects / 为你的项目构建一个可复用的卡片组件',
    category: 'html-css'
  },
  {
    en: 'Debug',
    zh: '调试',
    pinyin: 'tiao2 shi4',
    definition: {
      zh: '查找并修复代码中错误的过程',
      en: 'The process of finding and fixing errors in code'
    },
    example: 'Ask Claude Code to help debug your page / 让Claude Code帮你调试页面',
    category: 'basics'
  },
  {
    en: 'Framework',
    zh: '框架',
    pinyin: 'kuang4 jia4',
    definition: {
      zh: '提供通用功能和结构的预写代码库',
      en: 'A pre-written code library that provides common functionality and structure'
    },
    example: 'Start simple without a framework, then learn one later / 先不用框架从简单开始，之后再学一个',
    category: 'javascript'
  },
  {
    en: 'Library',
    zh: '库',
    pinyin: 'ku4',
    definition: {
      zh: '别人写好的可复用代码集合，帮你完成常见任务',
      en: 'A collection of reusable code written by others to help you accomplish common tasks'
    },
    example: 'Use a chart library to visualize your data / 用一个图表库来可视化你的数据',
    category: 'javascript'
  },
  {
    en: 'Syntax',
    zh: '语法',
    pinyin: 'yu3 fa3',
    definition: {
      zh: '编程语言中代码必须遵循的书写规则',
      en: 'The writing rules that code must follow in a programming language'
    },
    example: 'A syntax error means something is spelled or typed wrong / 语法错误意味着某些东西拼写或输入错误',
    category: 'basics'
  },
  {
    en: 'Console',
    zh: '控制台',
    pinyin: 'kong4 zhi4 tai2',
    definition: {
      zh: '浏览器中用于查看日志和调试信息的开发者工具',
      en: 'A developer tool in the browser for viewing logs and debug information'
    },
    example: 'Check the console for error messages / 查看控制台中的错误信息',
    category: 'basics'
  },
  {
    en: 'Scope',
    zh: '作用域',
    pinyin: 'zuo4 yong4 yu4',
    definition: {
      zh: '变量在代码中可以被访问的范围',
      en: 'The range within code where a variable can be accessed'
    },
    example: 'Variables inside a function have local scope / 函数内的变量有局部作用域',
    category: 'javascript'
  },
  {
    en: 'Deployment Pipeline',
    zh: '部署流水线',
    pinyin: 'bu4 shu3 liu2 shui3 xian4',
    definition: {
      zh: '自动化的流程，将代码从开发到上线的每个步骤连接起来',
      en: 'An automated workflow that connects each step from development to going live'
    },
    example: 'Cloudflare Pages has a built-in deployment pipeline / Cloudflare Pages有内置的部署流水线',
    category: 'deployment'
  },
  {
    en: 'Static Site',
    zh: '静态网站',
    pinyin: 'jing4 tai4 wang3 zhan4',
    definition: {
      zh: '由固定的HTML、CSS和JavaScript文件组成，不需要服务器端处理的网站',
      en: 'A website made of fixed HTML, CSS, and JavaScript files that requires no server-side processing'
    },
    example: 'Cloudflare Pages is perfect for hosting static sites / Cloudflare Pages非常适合托管静态网站',
    category: 'deployment'
  },
  {
    en: 'Freelance',
    zh: '自由职业',
    pinyin: 'zi4 you2 zhi2 ye4',
    definition: {
      zh: '独立为不同客户提供服务的工作方式',
      en: 'Working independently for different clients rather than one employer'
    },
    example: 'Freelance developers can use Claude Code to deliver projects faster / 自由职业开发者可以用Claude Code更快交付项目',
    category: 'career'
  }
];
