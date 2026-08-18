import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Languages, Mail, MessageCircle, X } from 'lucide-react';

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

const ACCENT = '#00A1D6';

export default function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('zh');
  const [showWechat, setShowWechat] = useState(false);
  const t = TRANSLATIONS[lang];
  const timeline = [
    ...t.timeline.creative.map((item) => ({ ...item, group: t.tabCreative })),
    ...t.timeline.corporate.map((item) => ({ ...item, group: t.tabCorporate }))
  ];

  return (
    <div className="min-h-screen bg-[#f2f2ef] text-[#111111] selection:bg-[#00A1D6] selection:text-white">
      <header className="sticky top-0 z-40 border-b border-black/20 bg-[#f2f2ef]/95 backdrop-blur-md">
        <div className="mx-auto grid max-w-[1320px] grid-cols-12 items-center px-5 py-4 md:px-8">
          <div className="col-span-7 text-[11px] font-bold uppercase tracking-[0.24em] md:col-span-4">Han Wenbo / Resume</div>
          <div className="col-span-5 flex justify-end md:col-span-8">
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="flex items-center gap-2 border-l border-black/20 pl-4 text-xs font-semibold uppercase tracking-[0.12em] transition hover:text-[#00A1D6]"
            >
              <Languages className="h-4 w-4" />
              {lang === 'en' ? '中文' : 'English'}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1320px] px-5 md:px-8">
        <section className="grid grid-cols-12 border-b border-black py-8 md:min-h-[720px] md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="col-span-12 grid grid-cols-12 md:col-span-8"
          >
            <div className="col-span-12 mb-12 flex items-start justify-between border-t border-black pt-3 md:col-span-11 md:mb-20">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A1D6]">Portfolio / 2026</div>
              <div className="max-w-[260px] text-right text-[11px] font-medium uppercase leading-5 tracking-[0.12em] text-black/55">{t.tags}</div>
            </div>

            <div className="col-span-12 md:col-span-11">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-black/45">{t.greeting}</p>
              <h1 className="max-w-[900px] text-[19vw] font-black leading-[0.8] tracking-[-0.075em] sm:text-[15vw] md:text-[118px] lg:text-[148px]">
                {t.name}
              </h1>

              <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-black/25 pt-4 md:grid-cols-4">
                {t.roles.map((role, index) => (
                  <div key={role} className="border-l border-black/20 pl-3">
                    <div className="mb-1 text-[10px] font-bold text-[#00A1D6]">0{index + 1}</div>
                    <div className="text-sm font-semibold leading-5">{role}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-12 border-t border-black pt-5">
                <p className="col-span-12 max-w-2xl text-lg font-medium leading-8 md:col-span-8 md:text-xl">{t.description}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="col-span-12 mt-10 md:col-span-4 md:mt-0 md:border-l md:border-black md:pl-6"
          >
            <div className="grid h-full grid-rows-[auto_1fr_auto]">
              <div className="flex items-center justify-between border-t border-black py-3 text-[10px] font-bold uppercase tracking-[0.2em]">
                <span>Portrait</span>
                <span style={{ color: ACCENT }}>HW / 01</span>
              </div>
              <img src="/profile.jpg" alt="Han Wenbo" className="min-h-[420px] h-full w-full object-cover object-center" />
              <div className="grid grid-cols-2 border-t border-black py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/55">
                <span>Shanghai / China</span>
                <span className="text-right">Open to work</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="grid grid-cols-12 border-b border-black py-14 md:py-20">
          <div className="col-span-12 mb-10 md:col-span-3 md:mb-0">
            <div className="sticky top-24">
              <div className="text-[11px] font-black uppercase tracking-[0.22em] text-[#00A1D6]">01 / Metrics</div>
              <h2 className="mt-3 max-w-[220px] text-4xl font-black leading-none tracking-[-0.045em] md:text-5xl">{t.dataTitle}</h2>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 md:border-l md:border-black md:pl-6">
            <p className="mb-10 max-w-xl text-sm font-medium leading-6 text-black/55">{t.dataSubtitle}</p>
            <div className="grid grid-cols-2 border-l border-t border-black md:grid-cols-4">
              {t.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="min-h-[220px] border-b border-r border-black p-4 md:min-h-[260px] md:p-5"
                >
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00A1D6]">0{index + 1}</div>
                  <div className="mt-12 break-words text-4xl font-black leading-none tracking-[-0.055em] md:text-5xl">{stat.value}</div>
                  <div className="mt-5 text-sm font-bold">{stat.label}</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-black/45">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-12 border-b border-black py-14 md:py-20">
          <div className="col-span-12 mb-10 md:col-span-3 md:mb-0">
            <div className="sticky top-24">
              <div className="text-[11px] font-black uppercase tracking-[0.22em] text-[#00A1D6]">02 / Experience</div>
              <h2 className="mt-3 max-w-[230px] text-4xl font-black leading-none tracking-[-0.045em] md:text-5xl">{t.journeyTitle}</h2>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 md:border-l md:border-black md:pl-6">
            <p className="mb-8 max-w-xl text-sm font-medium leading-6 text-black/55">{t.journeySubtitle}</p>
            <div className="border-t border-black">
              {timeline.map((item, index) => (
                <motion.article
                  key={`${item.group}-${item.title}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="grid grid-cols-12 border-b border-black py-6 md:py-8"
                >
                  <div className="col-span-3 pr-4 md:col-span-2">
                    <div className="text-base font-black text-[#00A1D6]">{item.year}</div>
                    <div className="mt-2 text-[9px] font-bold uppercase leading-4 tracking-[0.15em] text-black/45">{item.group}</div>
                  </div>
                  <div className="col-span-9 md:col-span-10 md:grid md:grid-cols-10 md:gap-6">
                    <h3 className="text-2xl font-black leading-tight tracking-[-0.025em] md:col-span-4 md:text-3xl">{item.title}</h3>
                    <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-black/60 md:col-span-6 md:mt-0 md:text-base">{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-12 border-b border-black py-14 md:py-20">
          <div className="col-span-12 mb-10 md:col-span-3 md:mb-0">
            <div className="text-[11px] font-black uppercase tracking-[0.22em] text-[#00A1D6]">03 / Skills</div>
            <h2 className="mt-3 max-w-[230px] text-4xl font-black leading-none tracking-[-0.045em] md:text-5xl">{t.skillsTitle}</h2>
          </div>
          <div className="col-span-12 md:col-span-9 md:border-l md:border-black md:pl-6">
            <p className="mb-8 max-w-xl text-sm font-medium leading-6 text-black/55">{t.skillsSubtitle}</p>
            <div className="border-t border-black">
              {t.skillGroups.map((group, groupIndex) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.05 }}
                  className="grid grid-cols-12 border-b border-black py-6"
                >
                  <div className="col-span-12 mb-5 md:col-span-4 md:mb-0">
                    <div className="text-[10px] font-black text-[#00A1D6]">0{groupIndex + 1}</div>
                    <h3 className="mt-1 text-lg font-black">{group.title}</h3>
                  </div>
                  <div className="col-span-12 grid grid-cols-2 gap-x-5 gap-y-4 md:col-span-8 md:grid-cols-3">
                    {group.skills.map((skill, skillIndex) => (
                      <div key={skill} className="border-l border-black/25 pl-3 text-sm font-semibold">
                        <span className="mr-2 text-[9px] text-black/35">{String(skillIndex + 1).padStart(2, '0')}</span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-12 py-14 md:py-20">
          <div className="col-span-12 md:col-span-3">
            <div className="text-[11px] font-black uppercase tracking-[0.22em] text-[#00A1D6]">04 / Contact</div>
          </div>
          <div className="col-span-12 mt-8 md:col-span-9 md:mt-0 md:border-l md:border-black md:pl-6">
            <h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl lg:text-8xl">{t.ctaTitle}</h2>
            <p className="mt-8 max-w-2xl text-base font-medium leading-7 text-black/60 md:text-lg">{t.ctaSubtitle}</p>

            <div className="mt-12 grid border-t border-black md:grid-cols-2">
              <a
                href="mailto:hanwenbo_job@163.com"
                className="group flex min-h-[96px] items-center justify-between border-b border-black pr-4 transition hover:bg-black hover:px-4 hover:text-white md:border-r"
              >
                <span className="flex items-center gap-3 text-sm font-bold"><Mail className="h-4 w-4 text-[#00A1D6]" />hanwenbo_job@163.com</span>
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <button
                onClick={() => setShowWechat(true)}
                className="group flex min-h-[96px] items-center justify-between border-b border-black pr-4 text-left transition hover:bg-black hover:px-4 hover:text-white md:pl-5"
              >
                <span className="flex items-center gap-3 text-sm font-bold"><MessageCircle className="h-4 w-4 text-[#00A1D6]" />{t.wechatBtn}</span>
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        <footer className="grid grid-cols-12 border-t border-black py-5 text-[10px] font-bold uppercase tracking-[0.14em] text-black/45">
          <span className="col-span-8">{t.footer}</span>
          <span className="col-span-4 text-right">Swiss Grid / R-02</span>
        </footer>
      </main>

      <AnimatePresence>
        {showWechat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4"
            onClick={() => setShowWechat(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm border-2 border-black bg-[#f2f2ef] p-6 text-black"
            >
              <button onClick={() => setShowWechat(false)} className="absolute right-4 top-4 transition hover:text-[#00A1D6]">
                <X className="h-5 w-5" />
              </button>
              <div className="text-[10px] font-black uppercase tracking-[0.22em] text-[#00A1D6]">WeChat / Contact</div>
              <h3 className="mt-2 text-3xl font-black tracking-[-0.04em]">Scan to connect</h3>
              <div className="mt-6 border-2 border-black bg-white p-3">
                <img src="/wechat-qr.png" alt="WeChat QR Code" className="aspect-square w-full object-contain" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
