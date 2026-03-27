// curriculum.js — Lesson content for 起码 QiMa
// Each day returns a structured lesson object with bilingual content.

const days = {

  // ──────────────────────────────────────────────
  // DAY 1 — Hello, Claude!
  // ──────────────────────────────────────────────
  1: {
    day: 1,
    title: { zh: '你好，Claude!', en: 'Hello, Claude!' },
    subtitle: { zh: '认识你的AI编程伙伴', en: 'Meet Your AI Coding Partner' },
    estimatedMinutes: 30,
    xp: 100,
    badge: 'first-launch',
    sections: [
      // ── Section 1: What is Claude Code? ──
      {
        type: 'text',
        content: {
          zh: '欢迎来到起码 QiMa！今天是你学编程的第一天，我们先来认识一个超棒的伙伴——Claude Code。\n\nClaude Code 是一个 AI 编程助手，它住在你的终端（也就是那个黑色的命令行窗口）里。你可以把它想象成一个非常聪明的朋友，随时准备帮你写代码、解释概念、和你一起把想法变成真实的东西。\n\n它不是什么神奇的魔法——它是一个工具，一个让编程变得人人都能上手的工具。不管你是学商科的、学设计的，还是学生物的，Claude Code 都能帮你把脑子里的点子变成看得见、摸得着的软件。\n\n最重要的是：你完全不需要有任何编程基础。真的，零基础就能开始。Claude Code 就是为像你这样的初学者设计的。',
          en: 'Welcome to QiMa! This is day one of learning to code, and we\'re going to meet an amazing partner — Claude Code.\n\nClaude Code is an AI coding assistant that lives in your terminal (that dark command-line window). Think of it as having a brilliant friend who\'s always ready to write code, explain concepts, and build things with you.\n\nIt\'s not magic. It\'s a tool that lets you write code by describing what you want in plain words. Whether you\'re studying business, design, or biology, Claude Code can help you turn the ideas in your head into real, working software.\n\nThe most important thing: you don\'t need ANY programming background to start. Seriously, zero experience required. Claude Code works great even if you\'ve never written a line of code.'
        }
      },
      {
        type: 'concept',
        content: {
          term: 'Claude Code',
          zh: 'Claude Code 是一个 AI 编程助手，运行在你的终端里。你用自然语言（中文或英文都行）告诉它你想要什么，它就帮你写代码、创建文件、解决问题。就像有个 24 小时在线的编程导师。',
          en: 'Claude Code is an AI coding assistant that runs in your terminal. You tell it what you want in plain language (Chinese or English), and it writes code, creates files, and solves problems for you. It\'s like having a 24/7 coding tutor.'
        }
      },
      {
        type: 'concept',
        content: {
          term: 'Terminal (终端)',
          zh: '终端是你和电脑对话的地方。平时你用鼠标点来点去，但在终端里，你通过打字来告诉电脑该做什么。听起来很 geek？其实一点都不难，跟着做就行了。',
          en: 'A terminal is where you talk to your computer using text. Normally you click around with a mouse, but in the terminal, you type commands to tell your computer what to do. Sounds geeky? It\'s actually not hard at all — just follow along.'
        }
      },
      {
        type: 'text',
        content: {
          zh: '打个比方：Claude Code 就像是编程界的"谷歌翻译"。你用中文或英文描述你想要的东西——比如"帮我做一个个人简历网页"——然后 Claude Code 就把你的想法"翻译"成代码。你不需要懂代码的语法，就像你用翻译软件不需要懂外语一样。\n\n当然，随着课程的推进，你会慢慢理解代码在做什么。但现在，你只需要学会怎么和 Claude Code 对话就够了。',
          en: 'Here\'s an analogy: Claude Code is like Google Translate, but for coding. You describe what you want in plain Chinese or English — like "make me a personal resume webpage" — and Claude Code "translates" your idea into code. You don\'t need to understand code syntax, just like you don\'t need to speak a foreign language to use a translation app.\n\nOf course, as the course progresses, you\'ll gradually understand what the code is doing. But for now, all you need to learn is how to talk to Claude Code.'
        }
      },
      {
        type: 'tip',
        content: {
          zh: '你完全不需要会编程就能开始！Claude Code 就是为初学者设计的。放轻松，跟着一步一步来就好。',
          en: 'You don\'t need to know ANY programming to start! Claude Code is designed for beginners. Relax, just follow along step by step.'
        }
      },

      // ── Section 2: Why Learn This? ──
      {
        type: 'text',
        content: {
          zh: '你可能在想："我又不是学计算机的，为什么要学这个？"\n\n先看几个数据：AI 相关的工作需求每年增长超过 500%，越来越多的公司在找"能用 AI 快速做出产品原型"的人。对于留学生来说，掌握 AI 辅助开发简直就是一个超级技能——不管你投什么岗位，简历上写着"我能独立用 AI 构建软件原型"，HR 看了都会眼前一亮。\n\n而且说实话，就业市场越来越卷。光有学历已经不够了，你需要能拿出实打实的作品来证明自己。',
          en: 'You might be thinking: "I\'m not a CS major. Why should I learn this?"\n\nLet\'s look at some numbers: AI-related job demand is growing over 500% year-over-year. More and more companies are looking for people who can rapidly prototype with AI. For international students, knowing AI-assisted development gives you a real edge — no matter what role you\'re applying for, having "I can independently build software prototypes with AI" on your resume makes you stand out immediately.\n\nAnd let\'s be real: the job market is competitive. A degree alone isn\'t enough anymore. You need to show real, tangible work that proves what you can do.'
        }
      },
      {
        type: 'text',
        content: {
          zh: '重要的事情说三遍：你不是在"学编程"，你是在学"造东西"。\n\n在接下来的 14 天里，你会从零开始，一步步做出真实的项目——个人网站、互动工具、数据展示页面……到课程结束的时候，你会有一个完整的作品集，可以直接放到简历里、发给面试官看。\n\n这不是纸上谈兵，这是真刀真枪地做东西。',
          en: 'Let me say this clearly: you\'re NOT learning to be a "programmer." You\'re learning to BUILD things.\n\nOver the next 14 days, you\'ll go from zero to creating real projects — personal websites, interactive tools, data dashboards... By the end of this course, you\'ll have a complete portfolio you can put on your resume and show to interviewers.\n\nThis isn\'t theoretical. This is building real things.'
        }
      },
      {
        type: 'concept',
        content: {
          term: 'AI-Assisted Development (AI辅助开发)',
          zh: 'AI 辅助开发是一种全新的工作方式：你负责想点子、做决策，AI 负责写代码、处理技术细节。这不是取代程序员，而是让每个人都能把想法变成现实。这就是未来的工作模式。',
          en: 'AI-assisted development is a new way of working: you come up with ideas and make decisions, while AI handles the coding and technical details. It\'s not about replacing programmers — it\'s about letting anyone turn ideas into working software. This is how more and more people will work.'
        }
      },
      {
        type: 'tip',
        content: {
          zh: '不管你学的是商科、设计还是生物——能独立做出软件原型，在任何领域都是加分项。这个技能会让你在同龄人中脱颖而出。',
          en: 'Even if you\'re studying business, design, or biology — the ability to build software prototypes makes you stand out in ANY field. Hiring managers notice candidates who can make things.'
        }
      },

      // ── Section 3: Install Claude Code ──
      {
        type: 'text',
        content: {
          zh: '好了，聊了这么多，让我们动手吧！接下来我们要把 Claude Code 安装到你的电脑上。整个过程大概 5-10 分钟，跟着做就行。',
          en: 'Alright, enough talking — let\'s get our hands dirty! We\'re going to install Claude Code on your computer. The whole process takes about 5-10 minutes. Just follow along.'
        }
      },
      {
        type: 'warning',
        content: {
          zh: '你需要一台电脑（Mac、Windows 或 Linux 都可以）。手机是不行的哦——编程需要一个完整的开发环境。如果你只有手机，可以先看完今天的内容，安装部分等借到电脑再做。',
          en: 'You\'ll need a computer (Mac, Windows, or Linux all work). A phone won\'t work for this course — coding requires a full development environment. If you only have a phone right now, you can read through today\'s content first and do the installation when you have access to a computer.'
        }
      },
      {
        type: 'steps',
        content: {
          zh: [
            '打开你的终端。Mac 用户：按 Command+空格 打开 Spotlight，输入 "Terminal"，回车。Windows 用户：在开始菜单搜索 "PowerShell" 或 "cmd"，点击打开。',
            '检查 Node.js 是否已安装：在终端里输入 node --version 然后按回车。如果看到类似 v20.11.0 这样的版本号，说明已经装好了，跳到下一步。',
            '如果提示"command not found"或"不是内部命令"，说明还没装 Node.js。打开浏览器访问 nodejs.org，下载 LTS（长期支持）版本，按提示安装。安装完后关闭终端再重新打开，再试一次 node --version。'
          ],
          en: [
            'Open your terminal. Mac users: press Command+Space to open Spotlight, type "Terminal", and hit Enter. Windows users: search for "PowerShell" or "cmd" in the Start menu and open it.',
            'Check if Node.js is installed: type node --version in the terminal and press Enter. If you see a version number like v20.11.0, you\'re good — skip to the next step.',
            'If you see "command not found" or "is not recognized", Node.js isn\'t installed yet. Open your browser, go to nodejs.org, download the LTS (Long Term Support) version, and follow the installer. After installation, close and reopen your terminal, then try node --version again.'
          ]
        }
      },
      {
        type: 'terminal',
        content: {
          command: 'node --version',
          output: ['v20.11.0']
        }
      },
      {
        type: 'steps',
        content: {
          zh: [
            '在终端中输入以下命令来安装 Claude Code：npm install -g @anthropic-ai/claude-code',
            '等待安装完成。可能需要一两分钟，终端会显示安装进度。耐心等一下就好。',
            '安装完成后，输入 claude --version 来验证是否安装成功。看到版本号就说明搞定了！'
          ],
          en: [
            'Type the following command in your terminal to install Claude Code: npm install -g @anthropic-ai/claude-code',
            'Wait for the installation to complete. It may take a minute or two — the terminal will show progress. Just be patient.',
            'Once done, type claude --version to verify the installation. If you see a version number, you\'re all set!'
          ]
        }
      },
      {
        type: 'terminal',
        content: {
          command: 'npm install -g @anthropic-ai/claude-code',
          output: ['added 1 package in 15s']
        }
      },
      {
        type: 'terminal',
        content: {
          command: 'claude --version',
          output: ['claude-code v1.0.0']
        }
      },
      {
        type: 'tip',
        content: {
          zh: '如果安装过程中出现错误，不要慌！把错误信息截图发到我们的微信群里——大概率已经有人遇到过同样的问题，群里会有人帮你解决的。',
          en: 'If you see an error during installation, don\'t panic! Take a screenshot of the error and share it in our WeChat group — chances are someone has already encountered the same issue, and the group will help you fix it.'
        }
      },

      // ── Section 4: Your First Conversation ──
      {
        type: 'text',
        content: {
          zh: '激动人心的时刻到了！安装完成后，让我们来和 Claude Code 进行第一次对话吧。这就像交了一个新朋友——先打个招呼，然后看看它能做什么。',
          en: 'Here comes the exciting part! Now that Claude Code is installed, let\'s have our first conversation with it. It\'s like meeting a new friend — say hello first, then see what it can do.'
        }
      },
      {
        type: 'steps',
        content: {
          zh: [
            '创建一个新文件夹来放你的第一个项目。在终端输入：mkdir my-first-project',
            '进入这个文件夹。输入：cd my-first-project',
            '启动 Claude Code！输入：claude',
            '打个招呼吧！输入："你好！请用中文介绍一下你自己。"'
          ],
          en: [
            'Create a new folder for your first project. Type in terminal: mkdir my-first-project',
            'Enter the folder. Type: cd my-first-project',
            'Start Claude Code! Type: claude',
            'Say hello! Type: "你好！请用中文介绍一下你自己。"'
          ]
        }
      },
      {
        type: 'terminal',
        content: {
          command: 'mkdir my-first-project && cd my-first-project',
          output: []
        }
      },
      {
        type: 'terminal',
        content: {
          command: 'claude',
          output: [
            '╭──────────────────────╮',
            '│  Welcome to Claude!  │',
            '│  Type your message.  │',
            '╰──────────────────────╯',
            '',
            '> 你好！请用中文介绍一下你自己。',
            '',
            '你好！我是Claude，你的AI编程助手。我可以帮你：',
            '• 写代码和创建网页',
            '• 解释编程概念',
            '• 调试和修复问题',
            '• 把你的想法变成现实的项目',
            '',
            '有什么我可以帮你的吗？'
          ]
        }
      },
      {
        type: 'text',
        content: {
          zh: '太棒了！你刚刚完成了和 AI 的第一次对话！是不是比想象中简单？现在让我们来试试更有意思的——让 Claude Code 帮你创建一个东西。',
          en: 'Amazing! You just had your first conversation with AI! Easier than you expected, right? Now let\'s try something more fun — let\'s ask Claude Code to create something for you.'
        }
      },
      {
        type: 'steps',
        content: {
          zh: [
            '在 Claude Code 中输入："帮我创建一个简单的HTML页面，显示\'你好世界！\'"',
            '观察 Claude Code 为你生成代码并创建文件——它会把整个过程展示给你看。',
            '打开创建的文件！在 Mac 上可以输入 open index.html，Windows 上输入 start index.html——你的第一个网页就出现了！'
          ],
          en: [
            'Type in Claude Code: "帮我创建一个简单的HTML页面，显示\'你好世界！\'"',
            'Watch Claude Code generate code and create files for you — it will show you the entire process.',
            'Open the created file! On Mac type open index.html, on Windows type start index.html — your first webpage appears!'
          ]
        }
      },
      {
        type: 'terminal',
        content: {
          command: '> 帮我创建一个简单的HTML页面，显示"你好世界！"',
          output: [
            'I\'ll create a simple HTML page for you!',
            '',
            '\u{1F4DD} Creating index.html...',
            '',
            '\u2713 Created index.html',
            '',
            'I\'ve created a simple webpage that displays "\u4F60\u597D\u4E16\u754C\uFF01".',
            'Open it in your browser to see the result!'
          ]
        }
      },
      {
        type: 'tip',
        content: {
          zh: '尽情尝试吧！你可以问 Claude Code 任何问题——"HTML是什么意思？""把背景颜色改成蓝色""在页面上加上我的名字"。你玩得越多，学得越快！不用怕犯错，Claude Code 不会嫌你烦的。',
          en: 'Experiment freely! Ask Claude Code anything — "What does HTML mean?", "Change the background color to blue", "Add my name to the page". The more you play around, the faster you learn! Don\'t be afraid of making mistakes — Claude Code will never judge you.'
        }
      },

      // ── Section 5: Quiz ──
      {
        type: 'quiz',
        content: {
          question: {
            zh: 'Claude Code 是什么？',
            en: 'What is Claude Code?'
          },
          options: {
            zh: ['一种编程语言', '一个AI编程助手', '一个网站构建器', '一个电子游戏'],
            en: ['A programming language', 'An AI coding assistant', 'A website builder', 'A video game']
          },
          correctIndex: 1,
          explanation: {
            zh: 'Claude Code 是一个 AI 编程助手，运行在终端里。它不是一种编程语言，也不是网站构建器——它是一个能帮你写任何类型代码的智能助手。',
            en: 'Claude Code is an AI coding assistant that runs in the terminal. It\'s not a programming language or a website builder — it\'s an intelligent assistant that can help you write any type of code.'
          }
        }
      },
      {
        type: 'quiz',
        content: {
          question: {
            zh: '你在哪里运行 Claude Code？',
            en: 'Where do you run Claude Code?'
          },
          options: {
            zh: ['在浏览器里', '在 Microsoft Word 里', '在终端里', '在手机上'],
            en: ['In a web browser', 'In Microsoft Word', 'In the terminal', 'On your phone']
          },
          correctIndex: 2,
          explanation: {
            zh: 'Claude Code 运行在你电脑的终端里。终端就是那个可以输入命令的窗口——Mac 上叫 Terminal，Windows 上可以用 PowerShell。',
            en: 'Claude Code runs in your computer\'s terminal. The terminal is the window where you type commands — on Mac it\'s called Terminal, on Windows you can use PowerShell.'
          }
        }
      },
      {
        type: 'quiz',
        content: {
          question: {
            zh: '使用 Claude Code 需要先会编程吗？',
            en: 'Do you need to know programming to use Claude Code?'
          },
          options: {
            zh: ['需要，高级水平', '需要，基础水平', '不需要，但有基础会更好', '完全不需要'],
            en: ['Yes, advanced level', 'Yes, basic level', 'No, but it helps', 'No, not at all']
          },
          correctIndex: 3,
          explanation: {
            zh: '完全不需要！这门课就是为零基础的人设计的。Claude Code 的厉害之处就在于，你用自然语言描述需求，它来写代码。随着课程推进，你自然会学到编程知识，但起步完全不需要任何基础。',
            en: 'Not at all! This course is designed for complete beginners. The beauty of Claude Code is that you describe what you want in natural language, and it writes the code. You\'ll naturally pick up programming knowledge as the course progresses, but you need zero experience to start.'
          }
        }
      }
    ]
  },

  // ──────────────────────────────────────────────
  // DAY 2 — Your First Real Webpage
  // ──────────────────────────────────────────────
  2: {
    day: 2,
    title: { zh: '你的第一个网页', en: 'Your First Real Webpage' },
    subtitle: { zh: '用HTML搭建内容结构', en: 'Building Structure with HTML' },
    estimatedMinutes: 25,
    xp: 100,
    badge: 'first-page',
    sections: [
      {
        type: 'text',
        content: {
          zh: '昨天你已经成功运行了 Claude Code，今天我们要做点更有意思的——创建一个真正的网页！HTML 是网页的骨架，就像盖房子需要先搭框架一样。别担心，你不需要记住任何代码，Claude Code 会帮你写。',
          en: 'Yesterday you got Claude Code running. Today we\'re going to do something more exciting — create a real webpage! HTML is the skeleton of a webpage, like the frame of a house. Don\'t worry, you don\'t need to memorize any code — Claude Code will write it for you.'
        }
      },
      {
        type: 'concept',
        content: {
          term: 'HTML',
          zh: 'HTML（超文本标记语言）是网页的基础结构语言。每个你看到的网页——从百度到抖音——底层都是 HTML。它用"标签"来定义内容：标题、段落、图片、链接等等。',
          en: 'HTML (HyperText Markup Language) is the foundational language of web pages. Every webpage you see — from Google to TikTok — is built on HTML. It uses "tags" to define content: headings, paragraphs, images, links, and more.'
        }
      },
      {
        type: 'text',
        content: {
          zh: '今天的目标是创建一个"关于我"页面。这会是你作品集的起点。我们会让 Claude Code 帮你搭建页面结构，包括标题、自我介绍、你的技能和兴趣。',
          en: 'Today\'s goal is to create an "About Me" page. This will be the starting point of your portfolio. We\'ll have Claude Code build the page structure, including a heading, self-introduction, your skills, and interests.'
        }
      },
      {
        type: 'steps',
        content: {
          zh: [
            '在终端中进入昨天的项目文件夹：cd my-first-project',
            '启动 Claude Code：claude',
            '输入："帮我创建一个关于我的HTML页面，包括我的名字、一段自我介绍、我的技能列表和联系方式。用中英双语。"',
            '打开生成的 HTML 文件，在浏览器中查看你的页面！'
          ],
          en: [
            'Navigate to yesterday\'s project folder in terminal: cd my-first-project',
            'Start Claude Code: claude',
            'Type: "Create an About Me HTML page with my name, a self-introduction paragraph, a skills list, and contact info. Make it bilingual Chinese/English."',
            'Open the generated HTML file and view your page in the browser!'
          ]
        }
      },
      {
        type: 'terminal',
        content: {
          command: 'claude',
          output: [
            '> 帮我创建一个关于我的HTML页面',
            '',
            '\u{1F4DD} Creating about.html...',
            '',
            '\u2713 Created about.html with your About Me page.',
            'Open it in your browser to see the result!'
          ]
        }
      },
      {
        type: 'concept',
        content: {
          term: 'Tags (标签)',
          zh: 'HTML 标签就像是给内容贴的标签。<h1> 表示大标题，<p> 表示段落，<ul> 表示列表。你不需要背这些，Claude Code 会替你处理。但认识它们有助于你理解网页是怎么组成的。',
          en: 'HTML tags are like labels for content. <h1> means a big heading, <p> means a paragraph, <ul> means a list. You don\'t need to memorize these — Claude Code handles it. But recognizing them helps you understand how pages are built.'
        }
      },
      {
        type: 'tip',
        content: {
          zh: '试着修改 Claude Code 生成的内容！告诉它"把名字改成XXX"或者"加一个爱好列表"。每次修改都能立刻在浏览器里看到效果，这种即时反馈感超棒的。',
          en: 'Try modifying what Claude Code generates! Tell it "change the name to XXX" or "add a hobbies list." Each change shows up immediately in the browser — that instant feedback feels amazing.'
        }
      },
      {
        type: 'quiz',
        content: {
          question: {
            zh: 'HTML 在网页中的作用是什么？',
            en: 'What is the role of HTML in a webpage?'
          },
          options: {
            zh: ['让网页变漂亮', '定义网页的内容结构', '让网页能互动', '处理数据'],
            en: ['Making the page pretty', 'Defining the content structure', 'Making the page interactive', 'Processing data']
          },
          correctIndex: 1,
          explanation: {
            zh: 'HTML 负责定义网页的内容和结构——什么是标题、什么是段落、什么是图片。让网页变漂亮是 CSS 的工作，让网页互动是 JavaScript 的工作。我们后面会学到的！',
            en: 'HTML defines the content and structure of a webpage — what\'s a heading, what\'s a paragraph, what\'s an image. Making it pretty is CSS\'s job, and making it interactive is JavaScript\'s job. We\'ll learn those later!'
          }
        }
      }
    ]
  },

  // ──────────────────────────────────────────────
  // DAY 3 — Make It Beautiful
  // ──────────────────────────────────────────────
  3: {
    day: 3,
    title: { zh: '让它变好看', en: 'Make It Beautiful' },
    subtitle: { zh: '用CSS给网页穿上衣服', en: 'Styling with CSS' },
    estimatedMinutes: 30,
    xp: 100,
    badge: 'style-master',
    sections: [
      {
        type: 'text',
        content: {
          zh: '昨天你创建了一个有内容的网页，但说实话……它看起来有点朴素，对吧？今天我们来给它"穿上衣服"！CSS 就是网页的时装设计师——颜色、字体、布局、间距，全靠它。',
          en: 'Yesterday you created a webpage with content, but let\'s be honest... it looks a bit plain, right? Today we\'re going to dress it up! CSS is the fashion designer of the web — colors, fonts, layout, spacing, it handles all of that.'
        }
      },
      {
        type: 'concept',
        content: {
          term: 'CSS (层叠样式表)',
          zh: 'CSS 控制网页的视觉外观。如果 HTML 是房子的结构，CSS 就是装修——墙面颜色、家具摆放、灯光设计。一个好的 CSS 能让普通页面瞬间变得专业好看。',
          en: 'CSS controls the visual appearance of a webpage. If HTML is the house structure, CSS is the interior design — wall colors, furniture placement, lighting. Good CSS can make an ordinary page look professional instantly.'
        }
      },
      {
        type: 'text',
        content: {
          zh: '今天我们要把昨天的"关于我"页面改造成一个现代、好看的个人主页。你只需要告诉 Claude Code 你想要什么风格，它会帮你搞定一切。',
          en: 'Today we\'re going to transform yesterday\'s "About Me" page into a modern, beautiful personal homepage. Just tell Claude Code what style you want, and it\'ll handle everything.'
        }
      },
      {
        type: 'steps',
        content: {
          zh: [
            '启动 Claude Code，进入项目文件夹',
            '输入："帮我给about.html添加现代风格的CSS样式，使用深色主题，好看的字体，响应式布局"',
            '在浏览器中刷新页面，看看变化！',
            '不满意的话继续调整："把主色调改成蓝色"或"字体再大一点"'
          ],
          en: [
            'Start Claude Code and navigate to your project folder',
            'Type: "Add modern CSS styling to about.html — use a dark theme, nice fonts, responsive layout"',
            'Refresh the page in your browser and see the transformation!',
            'Not happy? Keep tweaking: "Change the primary color to blue" or "Make the font bigger"'
          ]
        }
      },
      {
        type: 'terminal',
        content: {
          command: '> 帮我给about.html添加现代风格的CSS样式',
          output: [
            '\u{1F3A8} Adding CSS styles to about.html...',
            '',
            '\u2713 Updated about.html with modern styling.',
            'Refresh your browser to see the new look!'
          ]
        }
      },
      {
        type: 'concept',
        content: {
          term: 'Responsive Design (响应式设计)',
          zh: '响应式设计让你的网页在手机、平板和电脑上都能好看地显示。不需要做三个版本的页面，CSS 会自动调整布局。现代网页必须是响应式的。',
          en: 'Responsive design makes your webpage look good on phones, tablets, and desktops. You don\'t need three versions of the page — CSS automatically adjusts the layout. Modern web pages must be responsive.'
        }
      },
      {
        type: 'tip',
        content: {
          zh: '设计没有"标准答案"。如果你不确定想要什么风格，可以告诉 Claude Code："参考Apple官网的风格"或者"简约日式风格"——它能理解这些描述并生成相应的设计。',
          en: 'There\'s no "right answer" in design. If you\'re not sure what style you want, tell Claude Code: "Style it like the Apple website" or "minimal Japanese aesthetic" — it can understand these descriptions and generate matching designs.'
        }
      },
      {
        type: 'quiz',
        content: {
          question: {
            zh: 'CSS 在网页中负责什么？',
            en: 'What does CSS handle in a webpage?'
          },
          options: {
            zh: ['页面内容', '视觉样式和布局', '用户交互', '数据存储'],
            en: ['Page content', 'Visual styling and layout', 'User interaction', 'Data storage']
          },
          correctIndex: 1,
          explanation: {
            zh: 'CSS 负责网页的视觉呈现——颜色、字体、间距、布局等。内容是 HTML 的工作，交互是 JavaScript 的工作。',
            en: 'CSS handles the visual presentation of a webpage — colors, fonts, spacing, layout, etc. Content is HTML\'s job, and interaction is JavaScript\'s job.'
          }
        }
      }
    ]
  },

  // ──────────────────────────────────────────────
  // DAY 4 — Prompt Engineering
  // ──────────────────────────────────────────────
  4: {
    day: 4,
    title: { zh: '提示词的艺术', en: 'The Art of Prompting' },
    subtitle: { zh: '学会和AI高效沟通', en: 'Communicating Effectively with AI' },
    estimatedMinutes: 35,
    xp: 100,
    badge: 'prompt-pro',
    sections: [
      {
        type: 'text',
        content: {
          zh: '前三天你已经体验了 Claude Code 的强大，但你有没有发现：有时候它给的结果完全符合你的预期，有时候又差点意思？秘密就在于你怎么"问"。今天我们要学一个关键技能——提示词工程（Prompt Engineering）。',
          en: 'Over the past three days you\'ve experienced Claude Code\'s power, but have you noticed that sometimes the results perfectly match your expectations, and sometimes they miss the mark? The secret is in HOW you ask. Today we\'re learning a critical skill — Prompt Engineering.'
        }
      },
      {
        type: 'concept',
        content: {
          term: 'Prompt Engineering (提示词工程)',
          zh: '提示词工程是和 AI 高效沟通的技巧。就像给人布置任务一样，描述得越清楚，结果越好。好的提示词 = 更好的输出结果。这是使用 AI 工具最重要的技能之一。',
          en: 'Prompt engineering is the skill of communicating effectively with AI. Just like assigning a task to a person — the clearer your description, the better the result. Good prompts = better output. This is one of the most important skills for using AI tools.'
        }
      },
      {
        type: 'text',
        content: {
          zh: '我们来看看好的提示词和差的提示词有什么区别。差的："做个网页"。好的："创建一个餐厅着陆页，包含导航栏、英雄区域配大图、菜单展示、联系表单，使用暖色调，风格参考星巴克官网。" 你看，区别就在于具体程度。',
          en: 'Let\'s see the difference between good and bad prompts. Bad: "Make a webpage." Good: "Create a restaurant landing page with a navbar, hero section with a large image, menu showcase, contact form, warm color palette, styled like the Starbucks website." See? The difference is in specificity.'
        }
      },
      {
        type: 'steps',
        content: {
          zh: [
            '打开 Claude Code，尝试一个模糊的提示词："做一个好看的页面"，看看结果',
            '然后尝试一个详细的提示词："创建一个个人博客首页，包含：顶部导航栏、一篇置顶文章卡片、侧边栏显示文章分类，使用浅色主题，字体用无衬线体，主色调是 #3B82F6"',
            '对比两次的结果，感受提示词质量的差异',
            '练习用STAR框架写提示词：Situation（情境）、Task（任务）、Action（行动）、Result（期望结果）'
          ],
          en: [
            'Open Claude Code and try a vague prompt: "Make a nice page" — see what happens',
            'Then try a detailed prompt: "Create a personal blog homepage with: top navigation bar, one featured article card, sidebar with article categories, light theme, sans-serif font, primary color #3B82F6"',
            'Compare the two results and feel the difference that prompt quality makes',
            'Practice writing prompts using the STAR framework: Situation, Task, Action, Result'
          ]
        }
      },
      {
        type: 'terminal',
        content: {
          command: '> 创建一个个人博客首页，包含导航栏、置顶文章卡片、侧边栏，浅色主题，主色调#3B82F6',
          output: [
            '\u{1F4DD} Creating blog-home.html with detailed layout...',
            '',
            '\u2713 Created blog-home.html',
            '  - Navigation bar with links',
            '  - Featured article card',
            '  - Sidebar with categories',
            '  - Light theme with #3B82F6 accent'
          ]
        }
      },
      {
        type: 'tip',
        content: {
          zh: '写提示词时想象你在给一个很能干但刚入职的实习生布置任务——要说清楚你想要什么、不想要什么、大概什么风格、有没有参考。越具体越好！',
          en: 'When writing prompts, imagine you\'re assigning a task to a very capable but brand new intern — be clear about what you want, what you don\'t want, the general style, and any references. The more specific, the better!'
        }
      },
      {
        type: 'quiz',
        content: {
          question: {
            zh: '下面哪个是更好的提示词？',
            en: 'Which of the following is a better prompt?'
          },
          options: {
            zh: ['"做个网站"', '"帮我做个漂亮网站"', '"创建一个咖啡店网页，包含菜单、地址和营业时间，暖色风格"', '"用HTML和CSS做东西"'],
            en: ['"Make a website"', '"Help me make a pretty website"', '"Create a coffee shop page with menu, address, and hours, warm color scheme"', '"Make something with HTML and CSS"']
          },
          correctIndex: 2,
          explanation: {
            zh: '好的提示词要包含具体的内容需求、风格描述和功能要求。"咖啡店网页，包含菜单、地址和营业时间，暖色风格"就非常清楚地告诉了 AI 你想要什么。',
            en: 'Good prompts include specific content requirements, style descriptions, and feature requests. "Coffee shop page with menu, address, and hours, warm color scheme" clearly tells the AI what you want.'
          }
        }
      }
    ]
  },

  // ──────────────────────────────────────────────
  // DAY 5 — Adding Interactivity
  // ──────────────────────────────────────────────
  5: {
    day: 5,
    title: { zh: '让页面动起来', en: 'Adding Interactivity' },
    subtitle: { zh: '用JavaScript给网页加上互动功能', en: 'Making Pages Interactive with JavaScript' },
    estimatedMinutes: 30,
    xp: 100,
    badge: 'interactive',
    sections: [
      {
        type: 'text',
        content: {
          zh: '到目前为止，你的网页都是"静态"的——打开就是那样，不会对你的操作做出反应。今天我们要加入 JavaScript，让页面能响应用户的点击、输入和操作。这就像给一个木偶注入了灵魂！',
          en: 'So far, your pages have been "static" — they just sit there and don\'t respond to anything you do. Today we\'re adding JavaScript to make pages respond to clicks, inputs, and user actions. It\'s like breathing life into a puppet!'
        }
      },
      {
        type: 'concept',
        content: {
          term: 'JavaScript (JS)',
          zh: 'JavaScript 是网页的"大脑"。HTML 是骨架，CSS 是外观，JavaScript 则让网页能思考和反应。点击按钮弹出对话框、表单验证、动态内容加载——都是 JavaScript 的功劳。',
          en: 'JavaScript is the "brain" of a webpage. HTML is the skeleton, CSS is the appearance, and JavaScript makes pages think and react. Clicking a button to show a dialog, form validation, dynamic content loading — that\'s all JavaScript.'
        }
      },
      {
        type: 'text',
        content: {
          zh: '今天我们要做一个互动小项目：一个有按钮点击效果、暗色/亮色切换、以及简单计数器的页面。听起来复杂？放心，你只需要告诉 Claude Code 你想要什么功能就行。',
          en: 'Today we\'re building an interactive mini-project: a page with button click effects, dark/light mode toggle, and a simple counter. Sounds complex? Relax — just tell Claude Code what features you want.'
        }
      },
      {
        type: 'steps',
        content: {
          zh: [
            '创建新项目文件夹：mkdir interactive-demo && cd interactive-demo',
            '启动 Claude Code，输入："创建一个互动演示页面，包含一个计数器（有加减按钮）、一个暗色/亮色模式切换按钮、以及一个点击会变色的方块"',
            '在浏览器中打开并尝试各种互动功能',
            '让 Claude Code 加一个新功能："再加一个输入框，用户输入名字后点按钮显示个性化问候语"'
          ],
          en: [
            'Create a new project folder: mkdir interactive-demo && cd interactive-demo',
            'Start Claude Code and type: "Create an interactive demo page with a counter (plus/minus buttons), a dark/light mode toggle, and a color-changing square on click"',
            'Open in browser and try all the interactive features',
            'Ask Claude Code to add a feature: "Add an input field where users type their name and click a button to see a personalized greeting"'
          ]
        }
      },
      {
        type: 'terminal',
        content: {
          command: '> 创建一个互动演示页面，包含计数器、暗色/亮色切换、点击变色方块',
          output: [
            '\u{1F3AE} Creating interactive-demo.html...',
            '',
            '\u2713 Created interactive-demo.html',
            '  - Counter with +/- buttons',
            '  - Dark/light mode toggle',
            '  - Color-changing square',
            '  - All interactive features working!'
          ]
        }
      },
      {
        type: 'tip',
        content: {
          zh: '如果互动效果不工作，让 Claude Code 帮你检查："这个页面的按钮点击没有反应，帮我调试一下"。Claude Code 很擅长找出并修复问题！',
          en: 'If an interactive feature doesn\'t work, ask Claude Code to debug: "The button click isn\'t responding on this page, help me debug it." Claude Code is great at finding and fixing issues!'
        }
      },
      {
        type: 'quiz',
        content: {
          question: {
            zh: 'JavaScript 在网页中的作用是什么？',
            en: 'What role does JavaScript play in a webpage?'
          },
          options: {
            zh: ['定义页面结构', '控制视觉样式', '添加互动行为', '存储用户数据'],
            en: ['Defining page structure', 'Controlling visual style', 'Adding interactive behavior', 'Storing user data']
          },
          correctIndex: 2,
          explanation: {
            zh: 'JavaScript 负责网页的互动行为——响应点击、处理输入、动态更新内容。结构是 HTML 的工作，样式是 CSS 的工作。',
            en: 'JavaScript handles interactive behavior — responding to clicks, processing inputs, dynamically updating content. Structure is HTML\'s job, and styling is CSS\'s job.'
          }
        }
      }
    ]
  },

  // ──────────────────────────────────────────────
  // DAY 6 — Portfolio Project
  // ──────────────────────────────────────────────
  6: {
    day: 6,
    title: { zh: '作品集大项目', en: 'Portfolio Project' },
    subtitle: { zh: '整合所学，打造完整作品集', en: 'Putting It All Together' },
    estimatedMinutes: 40,
    xp: 150,
    badge: 'portfolio-ready',
    sections: [
      {
        type: 'text',
        content: {
          zh: '第一周的压轴好戏来了！今天我们要把前五天学到的所有技能——HTML结构、CSS样式、JavaScript互动、提示词技巧——全部整合到一个完整的个人作品集网站里。这将是你能拿去面试的真实项目！',
          en: 'The grand finale of week one! Today we\'re combining everything from the past five days — HTML structure, CSS styling, JavaScript interactivity, prompt engineering — into a complete personal portfolio website. This will be a real project you can bring to interviews!'
        }
      },
      {
        type: 'concept',
        content: {
          term: 'Portfolio (作品集)',
          zh: '作品集是展示你能力和项目经历的个人网站。对于求职者来说，一个好的作品集比简历上的文字描述有说服力一百倍——面试官能直接看到你做了什么。',
          en: 'A portfolio is a personal website showcasing your skills and project experience. For job seekers, a good portfolio is a hundred times more convincing than text on a resume — interviewers can directly see what you\'ve built.'
        }
      },
      {
        type: 'text',
        content: {
          zh: '我们要创建一个多页面的作品集网站，包括首页、关于我、项目展示和联系方式。不用担心，Claude Code 会帮你搞定所有代码。你只需要提供内容和设计方向。',
          en: 'We\'re creating a multi-section portfolio site including a landing page, about me, project showcase, and contact section. Don\'t worry — Claude Code will handle all the code. You just provide the content and design direction.'
        }
      },
      {
        type: 'steps',
        content: {
          zh: [
            '创建作品集项目：mkdir my-portfolio && cd my-portfolio',
            '给 Claude Code 一个详细的提示词，描述你想要的作品集网站结构和风格',
            '逐步完善每个部分：首页英雄区域、自我介绍、项目卡片、联系表单',
            '添加响应式设计确保手机端也好看',
            '在浏览器中全面测试，包括手机视图（F12开发者工具）'
          ],
          en: [
            'Create portfolio project: mkdir my-portfolio && cd my-portfolio',
            'Give Claude Code a detailed prompt describing the structure and style of your portfolio',
            'Refine each section step by step: hero area, about me, project cards, contact form',
            'Add responsive design to make sure it looks great on mobile too',
            'Test thoroughly in the browser, including mobile view (F12 developer tools)'
          ]
        }
      },
      {
        type: 'terminal',
        content: {
          command: '> 帮我创建一个完整的个人作品集网站',
          output: [
            '\u{1F680} Creating complete portfolio site...',
            '',
            '\u2713 Created index.html (main portfolio page)',
            '\u2713 Created style.css (responsive styling)',
            '\u2713 Created script.js (interactions & animations)',
            '',
            'Your portfolio includes:',
            '  - Hero section with your name',
            '  - About Me section',
            '  - Projects showcase grid',
            '  - Contact section',
            '  - Smooth scroll navigation'
          ]
        }
      },
      {
        type: 'tip',
        content: {
          zh: '恭喜完成第一周！你已经从零基础变成了能独立创建完整网站的人。把这个作品集链接分享给朋友看看吧——你值得为自己骄傲！',
          en: 'Congratulations on completing week one! You\'ve gone from zero experience to someone who can independently create a complete website. Share your portfolio link with friends — you should be proud of yourself!'
        }
      },
      {
        type: 'quiz',
        content: {
          question: {
            zh: '一个完整的网页项目通常需要哪三种技术？',
            en: 'What three technologies does a complete web project typically use?'
          },
          options: {
            zh: ['Python, Java, C++', 'HTML, CSS, JavaScript', 'React, Vue, Angular', 'Word, Excel, PowerPoint'],
            en: ['Python, Java, C++', 'HTML, CSS, JavaScript', 'React, Vue, Angular', 'Word, Excel, PowerPoint']
          },
          correctIndex: 1,
          explanation: {
            zh: 'HTML 定义结构，CSS 定义样式，JavaScript 定义行为——这三个是前端开发的基础三件套。你已经全部接触过了！',
            en: 'HTML defines structure, CSS defines style, JavaScript defines behavior — these three are the foundational trio of front-end development. You\'ve already worked with all of them!'
          }
        }
      }
    ]
  },

  // ──────────────────────────────────────────────
  // DAY 7 — Week 1 Review
  // ──────────────────────────────────────────────
  7: {
    day: 7,
    title: { zh: '第一周回顾', en: 'Week 1 Review' },
    subtitle: { zh: '巩固所学，查漏补缺', en: 'Consolidate and Fill the Gaps' },
    estimatedMinutes: 20,
    xp: 75,
    badge: null,
    sections: [
      {
        type: 'text',
        content: {
          zh: '休息也是学习的一部分！今天我们放慢脚步，回顾第一周学到的所有内容。不会有新的知识点，但我们会通过一些有趣的小练习来巩固已学的技能。如果前几天有什么没搞明白的，今天是最好的补课时间。',
          en: 'Rest is part of learning! Today we slow down and review everything from week one. No new concepts — instead, we\'ll reinforce what you\'ve learned through some fun mini-exercises. If anything from the past few days was confusing, today is the perfect time to catch up.'
        }
      },
      {
        type: 'text',
        content: {
          zh: '让我们快速回顾一下这周的旅程：第1天你认识了Claude Code；第2天学了HTML结构；第3天用CSS让页面变好看；第4天掌握了提示词技巧；第5天加入了JavaScript互动；第6天做出了完整作品集。你进步得太快了！',
          en: 'Let\'s quickly recap your journey this week: Day 1 you met Claude Code; Day 2 learned HTML structure; Day 3 made pages beautiful with CSS; Day 4 mastered prompt engineering; Day 5 added JavaScript interactivity; Day 6 built a complete portfolio. You\'ve progressed so fast!'
        }
      },
      {
        type: 'steps',
        content: {
          zh: [
            '打开你的作品集项目，用 Claude Code 做三个小改进',
            '尝试从零开始，不看之前的笔记，让 Claude Code 帮你创建一个新的小项目（比如生日卡片页面）',
            '把你的作品集发到群里，看看大家的反馈！'
          ],
          en: [
            'Open your portfolio project and use Claude Code to make three small improvements',
            'Try starting from scratch — without looking at notes — and have Claude Code help you create a new mini-project (like a birthday card page)',
            'Share your portfolio in the group chat and see everyone\'s feedback!'
          ]
        }
      },
      {
        type: 'terminal',
        content: {
          command: '> 帮我创建一个生日贺卡网页，有动画效果和音乐',
          output: [
            '\u{1F382} Creating birthday card page...',
            '',
            '\u2713 Created birthday-card.html',
            '  - Animated confetti effect',
            '  - Birthday message with typing animation',
            '  - Play/pause music button'
          ]
        }
      },
      {
        type: 'tip',
        content: {
          zh: '如果你觉得前几天某个部分还不太熟，回去重新做一遍对应的练习。重复是学习的最佳方法！下周我们会开始更高级的项目。',
          en: 'If you feel shaky on any part from previous days, go back and redo those exercises. Repetition is the best way to learn! Next week we\'ll start more advanced projects.'
        }
      },
      {
        type: 'quiz',
        content: {
          question: {
            zh: '以下哪个不是我们第一周学到的技术？',
            en: 'Which of the following did we NOT learn in week one?'
          },
          options: {
            zh: ['HTML', 'CSS', 'JavaScript', 'Python'],
            en: ['HTML', 'CSS', 'JavaScript', 'Python']
          },
          correctIndex: 3,
          explanation: {
            zh: '第一周我们学了 HTML（结构）、CSS（样式）和 JavaScript（互动），还有 Claude Code 的使用和提示词技巧。Python 不在本课程范围内，但如果你感兴趣，以后可以用 Claude Code 来学！',
            en: 'In week one we learned HTML (structure), CSS (styling), JavaScript (interactivity), plus Claude Code usage and prompt engineering. Python isn\'t covered in this course, but if you\'re interested, you can use Claude Code to learn it later!'
          }
        }
      }
    ]
  },

  // ──────────────────────────────────────────────
  // DAY 8 — Project Architecture
  // ──────────────────────────────────────────────
  8: {
    day: 8,
    title: { zh: '项目架构思维', en: 'Thinking in Architecture' },
    subtitle: { zh: '学会规划再动手', en: 'Plan Before You Build' },
    estimatedMinutes: 35,
    xp: 100,
    badge: 'architect',
    sections: [
      {
        type: 'text',
        content: {
          zh: '第二周开始了！从今天起我们进入更高级的主题。上周你学会了"怎么做"，这周你要学"怎么想"。在动手写代码之前，先想清楚项目结构，会让你的开发效率翻倍。',
          en: 'Week two begins! From today we\'re diving into more advanced topics. Last week you learned "how to build" — this week you\'ll learn "how to think." Planning your project structure before coding will double your efficiency.'
        }
      },
      {
        type: 'concept',
        content: {
          term: 'Project Architecture (项目架构)',
          zh: '项目架构是指在开始写代码之前，先规划好文件结构、功能模块和数据流向。就像盖楼之前要画蓝图一样——磨刀不误砍柴工。',
          en: 'Project architecture means planning your file structure, feature modules, and data flow before writing code. Like drawing blueprints before building — sharpening the axe doesn\'t delay the woodcutting.'
        }
      },
      {
        type: 'text',
        content: {
          zh: '今天我们要用 Claude Code 来规划一个稍微复杂的项目——一个待办事项应用。我们先让 Claude Code 帮我们分析需要哪些功能、怎么组织文件，然后再开始写代码。',
          en: 'Today we\'ll use Claude Code to plan a slightly more complex project — a to-do list app. We\'ll first have Claude Code help us analyze what features we need and how to organize files, then start coding.'
        }
      },
      {
        type: 'steps',
        content: {
          zh: [
            '先不写代码！让 Claude Code 帮你规划："我想做一个待办事项应用，帮我列出需要的功能和文件结构"',
            '根据规划，让 Claude Code 一步步创建项目骨架',
            '逐个实现功能：添加任务、完成任务、删除任务',
            '添加本地存储功能，让数据在刷新后不丢失'
          ],
          en: [
            'Don\'t code yet! Ask Claude Code to plan: "I want to build a to-do app. Help me list the features needed and file structure"',
            'Based on the plan, have Claude Code create the project skeleton step by step',
            'Implement features one by one: add tasks, complete tasks, delete tasks',
            'Add local storage so data persists after page refresh'
          ]
        }
      },
      {
        type: 'terminal',
        content: {
          command: '> 我想做一个待办事项应用，帮我列出需要的功能和文件结构',
          output: [
            'Here\'s a project plan for your To-Do app:',
            '',
            'Features:',
            '  1. Add new tasks',
            '  2. Mark tasks complete',
            '  3. Delete tasks',
            '  4. Filter (all/active/completed)',
            '  5. Local storage persistence',
            '',
            'File structure:',
            '  todo-app/',
            '    index.html',
            '    style.css',
            '    app.js'
          ]
        }
      },
      {
        type: 'concept',
        content: {
          term: 'Local Storage (本地存储)',
          zh: '本地存储是浏览器提供的一种数据保存方式。数据存在用户自己的电脑上，刷新页面、甚至关闭浏览器后都不会丢失。非常适合保存用户的设置和小量数据。',
          en: 'Local Storage is a way browsers save data. Data is stored on the user\'s own computer and persists even after refreshing or closing the browser. Perfect for saving user preferences and small amounts of data.'
        }
      },
      {
        type: 'tip',
        content: {
          zh: '养成"先规划再动手"的习惯。哪怕只是花两分钟让 Claude Code 帮你列个提纲，也比上来就干要高效得多。专业开发者都是这么做的。',
          en: 'Build the habit of planning before coding. Even spending two minutes having Claude Code outline the plan is far more efficient than diving in blind. This is what professional developers do.'
        }
      },
      {
        type: 'quiz',
        content: {
          question: {
            zh: '开始一个新项目时，应该先做什么？',
            en: 'What should you do first when starting a new project?'
          },
          options: {
            zh: ['直接开始写代码', '先规划功能和文件结构', '先选颜色和字体', '先发朋友圈宣布'],
            en: ['Start coding immediately', 'Plan features and file structure first', 'Choose colors and fonts first', 'Announce it on social media first']
          },
          correctIndex: 1,
          explanation: {
            zh: '先规划再动手！想清楚要做什么功能、怎么组织代码，再开始写。Claude Code 可以帮你做规划，这会让后面的开发过程顺畅很多。',
            en: 'Plan before building! Think through what features you need and how to organize the code before starting. Claude Code can help with planning, which makes the development process much smoother.'
          }
        }
      }
    ]
  },

  // ──────────────────────────────────────────────
  // DAY 9 — Working with Data
  // ──────────────────────────────────────────────
  9: {
    day: 9,
    title: { zh: '玩转数据', en: 'Working with Data' },
    subtitle: { zh: '用数据让项目更有内容', en: 'Making Projects Data-Driven' },
    estimatedMinutes: 35,
    xp: 100,
    badge: 'data-wizard',
    sections: [
      {
        type: 'text',
        content: {
          zh: '今天我们来学一个超实用的技能——处理数据。真实世界的应用都要和数据打交道：天气信息、新闻列表、商品价格……学会让网页展示动态数据，你的项目会立刻变得"高级"起来。',
          en: 'Today we\'re learning a super practical skill — working with data. Real-world apps all deal with data: weather info, news feeds, product prices... Once your pages can display dynamic data, your projects instantly level up.'
        }
      },
      {
        type: 'concept',
        content: {
          term: 'API (应用程序接口)',
          zh: 'API 就像是一个"数据服务窗口"。你向它发一个请求，它返回数据给你。比如天气 API 可以告诉你北京今天的温度，汇率 API 可以告诉你最新的美元兑人民币汇率。',
          en: 'An API is like a "data service counter." You send it a request, and it returns data. For example, a weather API tells you today\'s temperature in Beijing, and an exchange rate API gives you the latest USD to CNY rate.'
        }
      },
      {
        type: 'text',
        content: {
          zh: '今天的项目是做一个实用的数据展示页面。我们会使用免费的公开 API 获取真实数据，然后用好看的方式展示出来。这种技能在工作中特别吃香。',
          en: 'Today\'s project is building a practical data display page. We\'ll use free public APIs to fetch real data and display it beautifully. This skill is highly valued in the workplace.'
        }
      },
      {
        type: 'steps',
        content: {
          zh: [
            '创建新项目：mkdir data-dashboard && cd data-dashboard',
            '让 Claude Code 创建一个数据面板："创建一个数据面板页面，从公开API获取天气数据和名人名言，用卡片布局展示"',
            '添加加载动画和错误处理',
            '试着让 Claude Code 加上数据的自动刷新功能'
          ],
          en: [
            'Create new project: mkdir data-dashboard && cd data-dashboard',
            'Have Claude Code create a dashboard: "Build a data dashboard page that fetches weather data and famous quotes from public APIs, displayed in card layout"',
            'Add loading animations and error handling',
            'Try having Claude Code add auto-refresh for the data'
          ]
        }
      },
      {
        type: 'terminal',
        content: {
          command: '> 创建一个数据面板，从公开API获取数据并展示',
          output: [
            '\u{1F4CA} Creating data dashboard...',
            '',
            '\u2713 Created dashboard.html',
            '  - Weather card with API integration',
            '  - Random quote card',
            '  - Loading states and error handling',
            '  - Auto-refresh every 30 seconds'
          ]
        }
      },
      {
        type: 'tip',
        content: {
          zh: '免费公开 API 有很多！推荐几个好玩的：猫咪图片 API、随机笑话 API、加密货币价格 API。让 Claude Code 帮你找到合适的 API 并集成到项目里。',
          en: 'There are tons of free public APIs! Some fun ones: cat pictures API, random jokes API, cryptocurrency price API. Have Claude Code find suitable APIs and integrate them into your project.'
        }
      },
      {
        type: 'quiz',
        content: {
          question: {
            zh: 'API 的作用是什么？',
            en: 'What does an API do?'
          },
          options: {
            zh: ['让网页变好看', '提供数据接口让程序获取信息', '存储用户密码', '编译代码'],
            en: ['Make pages look good', 'Provide data interfaces for programs to fetch information', 'Store user passwords', 'Compile code']
          },
          correctIndex: 1,
          explanation: {
            zh: 'API 是数据的桥梁——它让你的网页能从外部服务获取数据。通过 API，你的项目可以展示实时天气、最新新闻、汇率等各种动态信息。',
            en: 'An API is a bridge for data — it lets your webpage fetch data from external services. Through APIs, your project can display real-time weather, latest news, exchange rates, and other dynamic information.'
          }
        }
      }
    ]
  },

  // ──────────────────────────────────────────────
  // DAY 10 — Build a Complete App
  // ──────────────────────────────────────────────
  10: {
    day: 10,
    title: { zh: '完整应用实战', en: 'Build a Complete App' },
    subtitle: { zh: '从想法到成品的全流程', en: 'From Idea to Finished Product' },
    estimatedMinutes: 45,
    xp: 150,
    badge: null,
    sections: [
      {
        type: 'text',
        content: {
          zh: '今天是一个大挑战日！我们要从头到尾做一个完整的应用——一个个人记账工具。你会经历真实项目开发的完整流程：需求分析、架构规划、功能开发、样式优化、测试调试。',
          en: 'Today is a big challenge day! We\'re building a complete application from start to finish — a personal expense tracker. You\'ll experience the full development workflow: requirements analysis, architecture planning, feature development, styling, testing, and debugging.'
        }
      },
      {
        type: 'concept',
        content: {
          term: 'Full-Stack Thinking (全栈思维)',
          zh: '全栈思维是指不只关注一个技术点，而是从用户需求出发，考虑整个产品的方方面面：用户体验、数据管理、视觉设计、性能优化。这是产品经理和创业者都需要的能力。',
          en: 'Full-stack thinking means not just focusing on one technology, but starting from user needs and considering every aspect of a product: user experience, data management, visual design, performance. This is a skill that product managers and entrepreneurs need.'
        }
      },
      {
        type: 'text',
        content: {
          zh: '这个记账工具会包含：收支记录、分类管理、数据统计图表、数据导出功能。听起来工程量很大？别担心，我们一步步来，Claude Code 全程帮你。',
          en: 'This expense tracker will include: income/expense recording, category management, data statistics charts, and data export. Sounds like a lot? Don\'t worry — we\'ll take it step by step with Claude Code helping the whole way.'
        }
      },
      {
        type: 'steps',
        content: {
          zh: [
            '先做需求分析：让 Claude Code 帮你列出一个记账工具需要的所有功能',
            '规划项目结构和文件组织',
            '创建基础界面：输入表单、记录列表、统计区域',
            '添加图表功能：用柱状图或饼图展示消费分类',
            '添加数据导出功能，可以下载为 CSV 文件',
            '全面测试并优化用户体验'
          ],
          en: [
            'Start with requirements: have Claude Code list all features an expense tracker needs',
            'Plan project structure and file organization',
            'Create the basic interface: input form, records list, statistics area',
            'Add charts: bar or pie chart showing expense categories',
            'Add data export — downloadable as CSV file',
            'Test thoroughly and optimize user experience'
          ]
        }
      },
      {
        type: 'terminal',
        content: {
          command: '> 帮我从零开始创建一个完整的个人记账工具',
          output: [
            '\u{1F4B0} Creating expense tracker app...',
            '',
            '\u2713 Created index.html (main interface)',
            '\u2713 Created style.css (modern dashboard style)',
            '\u2713 Created app.js (full app logic)',
            '',
            'Features included:',
            '  - Add income/expenses with categories',
            '  - Interactive pie chart',
            '  - Monthly summary',
            '  - CSV export',
            '  - Local storage persistence'
          ]
        }
      },
      {
        type: 'tip',
        content: {
          zh: '做大项目的秘诀是"化大为小"。不要试图一次完成所有功能，先做核心功能（记录收支），确认能用后再加更多功能（图表、导出等）。',
          en: 'The secret to big projects is breaking them down. Don\'t try to build everything at once. Start with the core feature (recording expenses), verify it works, then add more features (charts, export, etc.).'
        }
      },
      {
        type: 'quiz',
        content: {
          question: {
            zh: '开发一个完整应用的正确顺序是什么？',
            en: 'What is the correct order for developing a complete app?'
          },
          options: {
            zh: ['先做样式，再写功能，最后规划', '先规划，再做核心功能，再优化样式', '先发布，再开发，最后测试', '随便写，写到哪算哪'],
            en: ['Style first, then features, then plan', 'Plan first, then core features, then polish', 'Publish first, then develop, then test', 'Just wing it']
          },
          correctIndex: 1,
          explanation: {
            zh: '正确的流程是：先规划需求和结构，然后实现核心功能，最后优化样式和用户体验。这样开发出来的产品质量更高，过程也更顺畅。',
            en: 'The right flow: plan requirements and structure, then implement core features, then polish styling and UX. This leads to higher quality products and a smoother process.'
          }
        }
      }
    ]
  },

  // ──────────────────────────────────────────────
  // DAY 11 — Debugging & Problem Solving
  // ──────────────────────────────────────────────
  11: {
    day: 11,
    title: { zh: '调试与排错', en: 'Debugging & Problem Solving' },
    subtitle: { zh: '像侦探一样找bug', en: 'Finding Bugs Like a Detective' },
    estimatedMinutes: 35,
    xp: 100,
    badge: 'bug-squasher',
    sections: [
      {
        type: 'text',
        content: {
          zh: '代码不工作是正常的！即使是最资深的程序员也天天在调试。今天我们学一个关键技能——怎么用 Claude Code 快速找到并修复问题。这个技能会让你在开发中节省大量时间。',
          en: 'Code not working is normal! Even the most experienced programmers debug every day. Today we\'re learning a critical skill — how to use Claude Code to quickly find and fix issues. This skill will save you tons of time in development.'
        }
      },
      {
        type: 'concept',
        content: {
          term: 'Debugging (调试)',
          zh: '调试就是找出代码中的错误（bug）并修复它们的过程。Bug 这个词来自早期电脑时代——真的有一只虫子飞进了电脑导致故障！现在它泛指任何导致程序不按预期工作的问题。',
          en: 'Debugging is the process of finding and fixing errors (bugs) in code. The term "bug" comes from early computing — an actual insect flew into a computer and caused a malfunction! Now it refers to any problem that causes a program to behave unexpectedly.'
        }
      },
      {
        type: 'text',
        content: {
          zh: '今天我们会故意创建一些有 bug 的代码，然后学习怎么用 Claude Code 和浏览器开发者工具来诊断问题。调试能力是区分"能用 AI 工具"和"真正会用 AI 工具"的关键。',
          en: 'Today we\'ll intentionally create some buggy code, then learn how to use Claude Code and browser developer tools to diagnose problems. Debugging ability is what separates "can use AI tools" from "truly skilled with AI tools."'
        }
      },
      {
        type: 'steps',
        content: {
          zh: [
            '学习打开浏览器开发者工具（F12）查看错误信息',
            '把错误信息复制给 Claude Code："这个页面报了这个错误：[粘贴错误]，帮我修复"',
            '练习描述问题的技巧："按钮点击后应该显示弹窗，但什么都没发生"',
            '学习使用 Claude Code 的代码审查功能来预防 bug'
          ],
          en: [
            'Learn to open browser developer tools (F12) to see error messages',
            'Copy the error to Claude Code: "This page shows this error: [paste error], help me fix it"',
            'Practice describing problems: "The button should show a popup on click, but nothing happens"',
            'Learn to use Claude Code\'s code review feature to prevent bugs'
          ]
        }
      },
      {
        type: 'terminal',
        content: {
          command: '> 这个页面的按钮点击没反应，控制台显示 "Uncaught TypeError: Cannot read properties of null"，帮我修复',
          output: [
            '\u{1F50D} Analyzing the error...',
            '',
            'Found the issue! The script runs before the HTML loads.',
            '',
            '\u{1F527} Fix: Moving <script> tag to end of <body>',
            '',
            '\u2713 Fixed! The button should work now.'
          ]
        }
      },
      {
        type: 'warning',
        content: {
          zh: '调试时最重要的一点：不要随便乱改代码试运气！先理解问题在哪，再有针对性地修复。让 Claude Code 解释错误的原因，而不只是修复它。',
          en: 'The most important debugging rule: don\'t randomly change code hoping it\'ll fix itself! Understand the problem first, then fix it systematically. Ask Claude Code to explain WHY the error happens, not just fix it.'
        }
      },
      {
        type: 'tip',
        content: {
          zh: '遇到 bug 不要沮丧！每个 bug 都是一次学习机会。修过的 bug 越多，你对代码的理解就越深。很多程序员说"调试教会我的比写代码多得多"。',
          en: 'Don\'t get frustrated by bugs! Every bug is a learning opportunity. The more bugs you fix, the deeper your understanding of code. Many programmers say "debugging taught me more than writing code ever did."'
        }
      },
      {
        type: 'quiz',
        content: {
          question: {
            zh: '遇到代码错误时，最好的做法是什么？',
            en: 'What\'s the best approach when you encounter a code error?'
          },
          options: {
            zh: ['删掉所有代码重新写', '随便改改看能不能好', '先读懂错误信息，再有针对性地修复', '放弃这个项目'],
            en: ['Delete all code and start over', 'Randomly change things and hope it works', 'Read the error message first, then fix systematically', 'Give up on the project']
          },
          correctIndex: 2,
          explanation: {
            zh: '先理解错误，再修复！错误信息通常会告诉你问题出在哪里。把错误信息发给 Claude Code，让它帮你分析原因和解决方案。',
            en: 'Understand the error first, then fix! Error messages usually tell you where the problem is. Share the error with Claude Code and let it help you analyze the cause and solution.'
          }
        }
      }
    ]
  },

  // ──────────────────────────────────────────────
  // DAY 12 — Deploy to the Internet
  // ──────────────────────────────────────────────
  12: {
    day: 12,
    title: { zh: '发布到互联网', en: 'Deploy to the Internet' },
    subtitle: { zh: '让全世界看到你的作品', en: 'Share Your Work with the World' },
    estimatedMinutes: 40,
    xp: 150,
    badge: 'shipped-it',
    sections: [
      {
        type: 'text',
        content: {
          zh: '激动人心的一天！到目前为止你的项目都在自己电脑上跑。今天我们要把它发布到互联网上——让任何人通过一个链接就能看到你的作品。这种"把东西真正发布出去"的感觉，真的超级爽！',
          en: 'An exciting day! So far your projects have only run on your own computer. Today we\'re publishing to the internet — anyone with a link can see your work. The feeling of actually shipping something to the world is absolutely amazing!'
        }
      },
      {
        type: 'concept',
        content: {
          term: 'Deployment (部署)',
          zh: '部署是把你本地电脑上的项目发布到互联网服务器上的过程。部署之后，你会得到一个网址（URL），任何人都能通过这个网址访问你的项目。',
          en: 'Deployment is the process of publishing your local project to an internet server. After deployment, you get a URL that anyone can use to access your project.'
        }
      },
      {
        type: 'text',
        content: {
          zh: '我们会使用 Cloudflare Pages 来部署——它免费、快速、简单。你只需要几个命令就能把网站上线。部署完成后，你就有了一个真正的互联网网站！',
          en: 'We\'ll use Cloudflare Pages for deployment — it\'s free, fast, and simple. Just a few commands and your site is live. After deployment, you\'ll have a real internet website!'
        }
      },
      {
        type: 'steps',
        content: {
          zh: [
            '确保你的作品集项目已经准备好，入口文件是 index.html',
            '让 Claude Code 帮你安装部署工具：npm install -g wrangler',
            '登录 Cloudflare：wrangler login',
            '部署你的项目：wrangler pages deploy ./你的项目文件夹',
            '打开 Cloudflare 给你的网址——你的网站上线了！'
          ],
          en: [
            'Make sure your portfolio project is ready with index.html as the entry point',
            'Have Claude Code help install the deployment tool: npm install -g wrangler',
            'Log in to Cloudflare: wrangler login',
            'Deploy your project: wrangler pages deploy ./your-project-folder',
            'Open the URL Cloudflare gives you — your site is live!'
          ]
        }
      },
      {
        type: 'terminal',
        content: {
          command: 'wrangler pages deploy ./my-portfolio',
          output: [
            '\u2728 Uploading files...',
            '\u2713 Uploaded 3 files',
            '',
            '\u2713 Deployment complete!',
            '',
            'Your site is live at:',
            'https://my-portfolio-abc.pages.dev'
          ]
        }
      },
      {
        type: 'tip',
        content: {
          zh: '把你的网站链接加到简历里、LinkedIn 上、微信签名里。当面试官问"你有什么项目经验"时，直接丢一个链接——比说一万句话都有说服力！',
          en: 'Add your website URL to your resume, LinkedIn, and WeChat signature. When an interviewer asks "What project experience do you have?" — just drop a link. It\'s more convincing than a thousand words!'
        }
      },
      {
        type: 'quiz',
        content: {
          question: {
            zh: '部署网站后，你会得到什么？',
            en: 'What do you get after deploying a website?'
          },
          options: {
            zh: ['一个只能自己看的文件', '一个公开的网址URL', '一封确认邮件', '一个手机应用'],
            en: ['A file only you can see', 'A public URL', 'A confirmation email', 'A mobile app']
          },
          correctIndex: 1,
          explanation: {
            zh: '部署完成后你会得到一个公开的 URL（网址），任何人都可以通过这个链接访问你的网站。这就是互联网的魔力！',
            en: 'After deployment you get a public URL — anyone can visit your website through this link. That\'s the magic of the internet!'
          }
        }
      }
    ]
  },

  // ──────────────────────────────────────────────
  // DAY 13 — Power User Tips
  // ──────────────────────────────────────────────
  13: {
    day: 13,
    title: { zh: '高手进阶技巧', en: 'Power User Tips' },
    subtitle: { zh: 'Claude Code的隐藏技能', en: 'Hidden Skills of Claude Code' },
    estimatedMinutes: 35,
    xp: 100,
    badge: 'power-user',
    sections: [
      {
        type: 'text',
        content: {
          zh: '你已经走了很远了！今天我们来解锁一些 Claude Code 的高级用法——这些技巧会让你的效率再上一个台阶。就像游戏里的隐藏技能，知道了这些你会觉得之前都是在"青铜"模式。',
          en: 'You\'ve come a long way! Today we\'re unlocking some advanced Claude Code techniques — these tips will take your efficiency to the next level. Like hidden skills in a game — once you know these, you\'ll feel like you were playing on easy mode before.'
        }
      },
      {
        type: 'concept',
        content: {
          term: 'CLAUDE.md (项目指令文件)',
          zh: 'CLAUDE.md 是一个特殊文件，放在项目根目录下。Claude Code 会自动读取它来了解你的项目偏好、代码风格、技术栈等。相当于给 Claude Code 一份"员工手册"。',
          en: 'CLAUDE.md is a special file placed in your project root. Claude Code automatically reads it to understand your project preferences, code style, tech stack, etc. It\'s like giving Claude Code an "employee handbook."'
        }
      },
      {
        type: 'text',
        content: {
          zh: '今天我们会学习：使用 CLAUDE.md 定制项目规则、多轮对话中保持上下文、让 Claude Code 帮你做代码审查、以及批量处理文件的技巧。',
          en: 'Today we\'ll learn: using CLAUDE.md to set project rules, maintaining context in multi-turn conversations, having Claude Code review your code, and batch file processing techniques.'
        }
      },
      {
        type: 'steps',
        content: {
          zh: [
            '在项目根目录创建 CLAUDE.md 文件，写上你的项目规则和偏好',
            '练习多步骤开发：先让 Claude Code 规划，再逐步实现，最后审查',
            '尝试让 Claude Code 审查之前写的代码："审查这个文件，有什么可以改进的地方吗？"',
            '学习使用 Claude Code 的批量操作："把所有 HTML 文件的标题都加上项目名前缀"'
          ],
          en: [
            'Create a CLAUDE.md file in your project root with your project rules and preferences',
            'Practice multi-step development: have Claude Code plan, then implement step by step, then review',
            'Try having Claude Code review previous code: "Review this file — what can be improved?"',
            'Learn batch operations: "Add a project name prefix to all HTML file titles"'
          ]
        }
      },
      {
        type: 'terminal',
        content: {
          command: '> 审查这个项目的代码，有什么可以改进的地方吗？',
          output: [
            '\u{1F50D} Reviewing your project...',
            '',
            'Suggestions:',
            '  1. Add meta viewport tag for mobile',
            '  2. Optimize image loading with lazy load',
            '  3. Add error handling to API calls',
            '  4. Improve accessibility with ARIA labels',
            '',
            'Want me to implement any of these?'
          ]
        }
      },
      {
        type: 'concept',
        content: {
          term: 'Code Review (代码审查)',
          zh: '代码审查是让别人检查你的代码质量的过程。在团队中，通常由资深开发者来做。但现在你有 Claude Code——它可以帮你审查代码、指出问题、建议改进，让你的代码质量更高。',
          en: 'Code review is having someone else check your code quality. In teams, senior developers usually do this. But now you have Claude Code — it can review your code, point out issues, and suggest improvements to raise your code quality.'
        }
      },
      {
        type: 'tip',
        content: {
          zh: '养成一个好习惯：每次完成一个功能后，让 Claude Code 审查一下。就像写作文找人帮你检查错别字一样，代码审查能帮你发现自己看不到的问题。',
          en: 'Build a good habit: after completing each feature, have Claude Code review it. Just like having someone proofread your essay, code review catches issues you might miss yourself.'
        }
      },
      {
        type: 'quiz',
        content: {
          question: {
            zh: 'CLAUDE.md 文件的作用是什么？',
            en: 'What is the purpose of a CLAUDE.md file?'
          },
          options: {
            zh: ['展示给用户看的说明书', '让Claude Code了解项目规则和偏好', '必须存在才能运行Claude Code', '一种编程语言文件'],
            en: ['A user-facing manual', 'Tell Claude Code about project rules and preferences', 'Required for Claude Code to run', 'A programming language file']
          },
          correctIndex: 1,
          explanation: {
            zh: 'CLAUDE.md 让 Claude Code 了解你的项目规则和偏好，比如使用什么技术栈、代码风格要求等。它不是必须的，但用了之后 Claude Code 的输出会更符合你的需求。',
            en: 'CLAUDE.md tells Claude Code about your project rules and preferences, like tech stack and code style requirements. It\'s not required, but using it makes Claude Code\'s output better aligned with your needs.'
          }
        }
      }
    ]
  },

  // ──────────────────────────────────────────────
  // DAY 14 — Graduation Day
  // ──────────────────────────────────────────────
  14: {
    day: 14,
    title: { zh: '毕业日', en: 'Graduation Day' },
    subtitle: { zh: '回顾旅程，展望未来', en: 'Looking Back and Forward' },
    estimatedMinutes: 30,
    xp: 200,
    badge: 'graduate',
    sections: [
      {
        type: 'text',
        content: {
          zh: '你做到了！14天前你可能连终端是什么都不知道，现在你已经能独立用 AI 创建网站、处理数据、调试问题、部署上线了。这不是一个小小的进步，这是一个巨大的跨越。你应该为自己感到骄傲！',
          en: 'You made it! 14 days ago you might not have even known what a terminal is. Now you can independently create websites, handle data, debug problems, and deploy to the internet with AI. This isn\'t a small step — it\'s a giant leap. You should be proud of yourself!'
        }
      },
      {
        type: 'text',
        content: {
          zh: '让我们回顾一下你掌握的技能：Claude Code 使用、HTML/CSS/JavaScript、提示词工程、项目规划、数据处理、调试排错、网站部署。这些技能组合在一起，让你成为了一个能"把想法变成产品"的人。',
          en: 'Let\'s review the skills you\'ve gained: Claude Code usage, HTML/CSS/JavaScript, prompt engineering, project planning, data handling, debugging, web deployment. Together, these skills make you someone who can "turn ideas into products."'
        }
      },
      {
        type: 'concept',
        content: {
          term: 'Lifelong Learning (终身学习)',
          zh: '技术世界变化很快，但你已经学会了最重要的技能：怎么用 AI 工具来学习和创造。有了这个基础，任何新技术你都能通过 Claude Code 快速上手。学习从未停止，但有了 AI，学习变得前所未有地轻松。',
          en: 'The tech world changes fast, but you\'ve learned the most important skill: how to use AI tools to learn and create. With this foundation, you can quickly pick up any new technology through Claude Code. Learning never stops, but with AI, it\'s never been easier.'
        }
      },
      {
        type: 'steps',
        content: {
          zh: [
            '整理你的作品集，确保所有项目都运行正常',
            '选出你最满意的 2-3 个项目，重点打磨它们',
            '把作品集部署上线，更新简历上的链接',
            '在群里分享你的学习心得和作品——激励后来的学员！',
            '制定你的下一步学习计划：想学什么新技术？想做什么新项目？'
          ],
          en: [
            'Organize your portfolio and make sure all projects work correctly',
            'Pick your 2-3 best projects and polish them thoroughly',
            'Deploy your portfolio and update the link on your resume',
            'Share your experience and work in the group — inspire future students!',
            'Plan your next steps: what new tech to learn? What new projects to build?'
          ]
        }
      },
      {
        type: 'terminal',
        content: {
          command: '> 帮我整理并优化我的作品集网站，加上这两周所有项目的展示',
          output: [
            '\u{1F393} Updating your portfolio with all projects...',
            '',
            '\u2713 Updated portfolio with 6 project cards',
            '\u2713 Added project descriptions and screenshots',
            '\u2713 Optimized for mobile viewing',
            '\u2713 Added "Built with Claude Code" badge',
            '',
            'Your complete portfolio is ready to deploy!'
          ]
        }
      },
      {
        type: 'tip',
        content: {
          zh: '毕业不是结束，而是真正的开始！你现在拥有了最强大的工具（Claude Code）和最重要的技能（AI辅助开发）。去创造吧！遇到问题随时回来找 Claude Code——它永远在这里等你。',
          en: 'Graduation isn\'t the end — it\'s the real beginning! You now have the most powerful tool (Claude Code) and the most important skill (AI-assisted development). Go build things! If you hit a problem, Claude Code is always here for you.'
        }
      },
      {
        type: 'quiz',
        content: {
          question: {
            zh: '完成这门课后，你学到的最核心的能力是什么？',
            en: 'What is the most core ability you\'ve gained from this course?'
          },
          options: {
            zh: ['背诵HTML标签', '用AI工具把想法变成产品', '手写复杂的JavaScript', '成为专业前端工程师'],
            en: ['Memorizing HTML tags', 'Using AI tools to turn ideas into products', 'Writing complex JavaScript by hand', 'Becoming a professional front-end engineer']
          },
          correctIndex: 1,
          explanation: {
            zh: '这门课最核心的能力不是记住代码语法，而是学会用 AI 工具把你的想法变成真实的产品。代码语法可以查，但"能独立把东西做出来"的能力是你最大的竞争力。恭喜毕业！',
            en: 'The core ability from this course isn\'t memorizing code syntax — it\'s using AI tools to turn your ideas into real products. You can look up syntax, but the ability to independently build things is your greatest competitive advantage. Congratulations, graduate!'
          }
        }
      }
    ]
  }
};

/**
 * Returns the lesson object for a given day number.
 * @param {number} day - Day number (1-14)
 * @returns {object|null} Lesson object or null if day not found
 */
export function getCurriculum(day) {
  return days[day] || null;
}

/**
 * Returns an array of all available day numbers.
 * @returns {number[]}
 */
export function getAvailableDays() {
  return Object.keys(days).map(Number).sort((a, b) => a - b);
}

/**
 * Returns a summary of all days (for navigation / overview).
 * @returns {Array<{day, title, subtitle, estimatedMinutes, xp, badge}>}
 */
export function getCurriculumOverview() {
  return getAvailableDays().map(d => {
    const { day, title, subtitle, estimatedMinutes, xp, badge } = days[d];
    return { day, title, subtitle, estimatedMinutes, xp, badge };
  });
}
