import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageCircle, X, Languages, ArrowUpRight } from 'lucide-react';

const PROFILE_URL = 'https://raw.githubusercontent.com/Zm1883007/Riven-Resume/v2-redesign/public/profile.jpg';
const WECHAT_QR_URL = 'https://raw.githubusercontent.com/Zm1883007/Riven-Resume/v2-redesign/public/wechat-qr.png';

const TRANSLATIONS = {
  en: {
    roles: ["Bilibili Content Creator", "Cross-border Specialist", "Marketing Strategist", "Vibe Coding"],
    tags: "Tourism Management Graduate • CET-6",
    greeting: "Hi, I'm",
    name: "Han Wenbo",
    description: "Bridging the gap between creative content creation and professional corporate strategy. Passionate about data-driven marketing and cross-border business.",
    dataTitle: "The Power of Data",
    dataSubtitle: "Metrics that drive my creative and professional journey.",
    stats: [
      { value: "3.5M+", label: "Total Views", desc: "Viral Content" },
      { value: "22,000+", label: "Community", desc: "0-1 Growth" },
      { value: "CET-6", label: "Bilingual", desc: "Interpretation" },
      { value: "Expert", label: "Global Ops", desc: "e-term Proficient" }
    ],
    journeyTitle: "Career Journey",
    journeySubtitle: "Exploring the intersection of media and management.",
    tabCreative: "Creative / Media",
    tabCorporate: "Corporate / Mgmt",
    timeline: {
      creative: [
        { year: "Present", title: "Bilibili Content Creator", description: "Spearheaded 0-1 community growth, achieving 3.5M+ viral views. Expert in leveraging data analytics to drive content creation and capture traffic trends." },
        { year: "Past", title: "Tour Guide & Itinerary Expert", description: "Crafted unique travel experiences, utilizing strong communication and planning skills to manage diverse groups." }
      ],
      corporate: [
        { year: "Recent", title: "China Post Management Experience", description: "Demonstrated strong field execution by achieving a breakthrough in high-end logistics services through proactive on-site support and client relationship building." },
        { year: "Previous", title: "Xunku Data Ops", description: "Handled data operations, leveraging analytical tools to drive insights and optimize processes." }
      ]
    },
    skillsTitle: "Toolkit & Expertise",
    skillsSubtitle: "A versatile skill set for modern business challenges.",
    skillGroups: [
      { title: "Creative & Media", skills: ["PR", "PS", "Video Editing", "Social Media Growth", "Content Strategy"] },
      { title: "Analytical & Tech", skills: ["Python Scraping", "Excel", "Market Research", "Data Ops"] },
      { title: "Business & Management", skills: ["e-term", "English Interpretation", "Client Relations", "Cross-border Business"] }
    ],
    ctaTitle: "Let's Collaborate",
    ctaSubtitle: "Looking for a dynamic Marketing Trainee or Cross-border Assistant? Let's connect and create something impactful together.",
    wechatBtn: "WeChat ID Available",
    footer: `© ${new Date().getFullYear()} Han Wenbo. All rights reserved.`
  },
  zh: {
    roles: ["B站内容创作者", "跨境业务专员", "基层网点运营", "AI编程"],
    tags: "旅游管理专业 • 英语六级",
    greeting: "你好，我是",
    name: "韩文博",
    description: "连接创意内容制作与专业企业策略。对数据驱动的营销与跨境业务充满热情。",
    dataTitle: "数据驱动力",
    dataSubtitle: "推动我创意与职业旅程的核心数据。",
    stats: [
      { value: "350万+", label: "累计播放量", desc: "现象级传播" },
      { value: "2.2万+", label: "社区粉丝", desc: "0-1 矩阵增长" },
      { value: "CET-6", label: "双语沟通", desc: "即时口译经验" },
      { value: "精通", label: "跨境系统", desc: "熟练操作 e-term" }
    ],
    journeyTitle: "职业旅程",
    journeySubtitle: "探索媒体与管理的交汇点。",
    tabCreative: "创意 / 媒体",
    tabCorporate: "企业 / 管理",
    timeline: {
      creative: [
        { year: "至今", title: "B站内容创作者", description: "主导 0-1 社群增长，达成 350 万+ 现象级传播。擅长通过数据反哺内容创作，精准捕捉流量红利。" },
        { year: "过去", title: "导游与行程规划师", description: "打造独特的旅行体验，运用出色的跨文化沟通与统筹能力，独立管理并制定多元化团队行程。" }
      ],
      corporate: [
        { year: "近期", title: "中国邮政基层运营", description: "具备极强的实地执行力，通过主动驻点服务与专业时效讲解，成功获取农户信任，实现高端物流业务的零突破。" },
        { year: "早期", title: "讯库数据运营", description: "负责底层数据运营，利用分析工具深挖市场洞察，持续优化数据流转效率。" }
      ]
    },
    skillsTitle: "技能与专长",
    skillsSubtitle: "应对现代商业挑战的全面技能组合。",
    skillGroups: [
      { title: "创意与新媒体", skills: ["PR", "PS", "视频剪辑", "社群增长", "内容策略"] },
      { title: "数据与技术", skills: ["Python爬虫", "Excel", "市场调研", "数据运营"] },
      { title: "商业与管理", skills: ["e-term", "英语口译", "客户关系", "跨境业务"] }
    ],
    ctaTitle: "期待合作",
    ctaSubtitle: "正在寻找具备破局能力的营销管培生或跨境业务助理？期待与您建立联系，共同创造商业价值。",
    wechatBtn: "点击此处添加微信",
    footer: `© ${new Date().getFullYear()} 韩文博. 保留所有权利。`
  }
};

export default function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('zh');
  const [showWechat, setShowWechat] = useState(false);
  const t = TRANSLATIONS[lang];
  const timeline = [
    ...t.timeline.creative.map((item) => ({ ...item, group: t.tabCreative })),
    ...t.timeline.corporate.map((item) => ({ ...item, group: t.tabCorporate }))
  ];

  return (
    <div className="min-h-screen bg-[#0b0d10] text-[#f4f5f7] selection:bg-[#00A1D6]/30 selection:text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0d10]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-sm font-semibold tracking-[0.18em] text-white">HAN WENBO</div>
          <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
            <Languages className="h-4 w-4" />
            {lang === 'en' ? '中文' : 'English'}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="grid min-h-[78vh] items-center gap-12 border-b border-white/10 py-16 md:grid-cols-[1.25fr_.75fr] md:py-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#00A1D6]">
              <span className="h-px w-8 bg-[#00A1D6]" />
              {t.tags}
            </div>
            <p className="mb-2 text-lg text-zinc-500">{t.greeting}</p>
            <h1 className="text-6xl font-semibold tracking-[-0.055em] text-white md:text-8xl">{t.name}</h1>
            <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2 text-sm md:text-base">
              {t.roles.map((role, i) => (
                <span key={role} className="flex items-center gap-3 text-zinc-300">
                  {role}{i < t.roles.length - 1 && <span className="text-zinc-700">/</span>}
                </span>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">{t.description}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.08 }} className="justify-self-center md:justify-self-end">
            <div className="relative w-64 md:w-80">
              <div className="absolute -left-4 -top-4 h-16 w-16 border-l border-t border-[#00A1D6]/70" />
              <div className="absolute -bottom-4 -right-4 h-16 w-16 border-b border-r border-white/20" />
              <img src={PROFILE_URL} alt="Han Wenbo" className="aspect-[4/5] w-full object-cover grayscale-[18%]" />
            </div>
          </motion.div>
        </section>

        <section className="border-b border-white/10 py-20 md:py-24">
          <div className="mb-12 grid gap-6 md:grid-cols-[.7fr_1.3fr] md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#00A1D6]">01 / Metrics</p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.dataTitle}</h2>
            </div>
            <p className="max-w-xl text-zinc-500 md:justify-self-end md:text-right">{t.dataSubtitle}</p>
          </div>
          <div className="grid border-y border-white/10 md:grid-cols-4">
            {t.stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="border-b border-white/10 px-0 py-7 md:border-b-0 md:border-r md:px-6 md:last:border-r-0">
                <div className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{stat.value}</div>
                <div className="mt-3 text-sm font-medium text-zinc-300">{stat.label}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-600">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="border-b border-white/10 py-20 md:py-24">
          <div className="mb-14 grid gap-6 md:grid-cols-[.7fr_1.3fr] md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#00A1D6]">02 / Experience</p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.journeyTitle}</h2>
            </div>
            <p className="max-w-xl text-zinc-500 md:justify-self-end md:text-right">{t.journeySubtitle}</p>
          </div>
          <div>
            {timeline.map((item, i) => (
              <motion.article key={`${item.group}-${item.title}`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="grid gap-4 border-t border-white/10 py-8 md:grid-cols-[150px_1fr] md:gap-10">
                <div>
                  <div className="text-sm font-semibold text-[#00A1D6]">{item.year}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.14em] text-zinc-600">{item.group}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white md:text-2xl">{item.title}</h3>
                  <p className="mt-3 max-w-3xl leading-7 text-zinc-400">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="border-b border-white/10 py-20 md:py-24">
          <div className="mb-14 grid gap-6 md:grid-cols-[.7fr_1.3fr] md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#00A1D6]">03 / Skills</p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.skillsTitle}</h2>
            </div>
            <p className="max-w-xl text-zinc-500 md:justify-self-end md:text-right">{t.skillsSubtitle}</p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {t.skillGroups.map((group, i) => (
              <motion.div key={group.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="border-t border-white/15 pt-6">
                <div className="mb-5 text-sm font-semibold text-white">{group.title}</div>
                <div className="flex flex-wrap gap-x-4 gap-y-3">
                  {group.skills.map((skill) => <span key={skill} className="text-sm text-zinc-400">{skill}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 py-20 md:grid-cols-[.8fr_1.2fr] md:py-24">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#00A1D6]">04 / Contact</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">{t.ctaTitle}</h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-zinc-400">{t.ctaSubtitle}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="mailto:hanwenbo_job@163.com" className="group flex items-center justify-between gap-6 border-b border-white/20 py-3 text-white transition hover:border-[#00A1D6] sm:min-w-[280px]">
                <span className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#00A1D6]" />hanwenbo_job@163.com</span>
                <ArrowUpRight className="h-4 w-4 text-zinc-500 transition group-hover:text-[#00A1D6]" />
              </a>
              <button onClick={() => setShowWechat(true)} className="group flex items-center justify-between gap-6 border-b border-white/20 py-3 text-left text-white transition hover:border-[#00A1D6] sm:min-w-[220px]">
                <span className="flex items-center gap-3"><MessageCircle className="h-4 w-4 text-[#00A1D6]" />{t.wechatBtn}</span>
                <ArrowUpRight className="h-4 w-4 text-zinc-500 transition group-hover:text-[#00A1D6]" />
              </button>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/10 py-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <span>{t.footer}</span>
          <span>Han Wenbo | Resume</span>
        </footer>
      </main>

      <AnimatePresence>
        {showWechat && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={() => setShowWechat(false)}>
            <motion.div initial={{ opacity: 0, y: 14, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 14, scale: 0.98 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-sm border border-white/10 bg-[#111318] p-8">
              <button onClick={() => setShowWechat(false)} className="absolute right-4 top-4 text-zinc-500 transition hover:text-white"><X className="h-5 w-5" /></button>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00A1D6]">WeChat</div>
              <h3 className="mt-2 text-2xl font-semibold text-white">Scan to connect</h3>
              <div className="mt-7 bg-white p-4">
                <img src={WECHAT_QR_URL} alt="WeChat QR Code" className="aspect-square w-full object-contain" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
