
import React, { useState } from 'react';

const News: React.FC = () => {
  const [activeTab, setActiveTab] = useState('全部资讯');
  const tabs = ['全部资讯', '公司要闻', '行业洞察', '项目纪实'];

  const newsItems = [
    {
      tag: '项目纪实',
      date: '2024-05-15',
      title: '舜泰汽车助力某全球500强化工巨头，实现万平米库区全流程自动化搬运',
      desc: '该项目部署了超过50台舜泰V系列智能托盘堆高车，通过车队调度系统Pro实现了与企业WMS系统的无缝对接，作业效率提升了40%以上...',
      img: '/images/smart-forklift.jpg'
    },
    {
      tag: '公司要闻',
      date: '2024-05-02',
      title: '舜泰汽车研发中心获评省级企业研究开发中心，自研实力再获认证',
      desc: '浙江省科技厅正式公示了2024年省级企业研究院及研发中心名单，舜泰汽车智能物流机器人研发中心凭借卓越的专利储备与创新能力位列其中...',
      img: '/images/logistics-solution.jpg'
    },
    {
      tag: '行业洞察',
      date: '2024-04-28',
      title: '深度解析：具身智能如何赋能工业4.0时代的柔性制造？',
      desc: '随着感知算法与端到端控制技术的突破，物流机器人不再只是移动的搬运工，而是具备环境理解与决策能力的具身智能终端...',
      img: '/images/chassis-platform.jpg'
    }
  ];

  const mediaItems = [
    {
      source: '科技日报',
      title: '《科技日报》：舜泰汽车突破工业级高精度定位瓶颈',
      desc: '深度报道舜泰自研3D LiDAR SLAM技术在复杂电磁干扰环境下的稳健性表现...',
      icon: 'newspaper'
    },
    {
      source: '36Kr 创投',
      title: '36Kr：舜泰汽车完成数亿元C轮融资，加速具身智能落地',
      desc: '本轮融资将主要用于全栈自研底层技术的迭代以及全球化市场的进一步扩张...',
      icon: 'cast'
    },
    {
      source: '高工产研',
      title: '高工机器人：2024年智能物流领域最具成长性企业调研报告',
      desc: '舜泰汽车凭借90%以上核心零部件自研率，被评为年度最具技术护城河企业之一...',
      icon: 'analytics'
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Featured News Hero */}
      <section className="relative h-[70vh] min-h-[550px] w-full overflow-hidden flex items-end pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-background.jpg" 
            className="w-full h-full object-cover" 
            alt="Featured News" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1118] via-[#0a1118]/60 to-transparent"></div>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-white w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#359EFF] rounded-sm text-[10px] font-black tracking-widest uppercase mb-6">
            重大动态
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-tight max-w-5xl">
            舜泰汽车入选国家级“专精特新”小巨人企业名单，领航具身智能新赛道
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mb-10">
            近日，工业和信息化部公布了第五批专精特新“小巨人”企业名单，舜泰汽车凭借在智能物流机器人领域的深厚技术积淀与卓越的市场表现成功入选。
          </p>
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 text-white font-black text-sm tracking-widest uppercase group transition-all">
              阅读全文 
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <span className="text-slate-400 text-sm font-bold">2024-05-20</span>
          </div>
        </div>
      </section>

      {/* Main News Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Tab Navigation & Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 mb-16 gap-6">
            <div className="flex gap-10">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-5 text-lg font-black tracking-tight transition-all relative whitespace-nowrap ${
                    activeTab === tab
                      ? 'text-[#359EFF] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#359EFF]'
                      : 'text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 pb-5 md:pb-0">
              <span className="material-symbols-outlined text-slate-400">search</span>
              <input 
                type="text" 
                placeholder="搜索关键词..." 
                className="bg-transparent border-none focus:ring-0 text-sm font-medium w-48 outline-none"
              />
            </div>
          </div>

          {/* News Items */}
          <div className="grid grid-cols-1 gap-16">
            {newsItems.map((item, i) => (
              <div key={i} className="group grid grid-cols-1 lg:grid-cols-12 gap-10 items-start cursor-pointer">
                <div className="lg:col-span-4 aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border border-slate-50">
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                </div>
                <div className="lg:col-span-8 flex flex-col justify-center h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#359EFF] text-[10px] font-black px-2 py-0.5 border border-[#359EFF]/30 rounded uppercase tracking-widest">
                      {item.tag}
                    </span>
                    <span className="text-slate-400 text-sm font-bold">{item.date}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 group-hover:text-[#359EFF] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8 line-clamp-2">
                    {item.desc}
                  </p>
                  <div className="inline-flex items-center text-sm font-black text-slate-900 gap-1 tracking-widest uppercase transition-all group-hover:gap-2">
                    详情内容 <span className="material-symbols-outlined text-base">chevron_right</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-20 flex justify-center">
            <button className="px-12 py-4 border-2 border-slate-100 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-slate-50 transition-all text-slate-900">
              加载更多资讯
            </button>
          </div>
        </div>
      </section>

      {/* Media Center Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">媒体中心</h2>
            <p className="text-slate-500 font-medium">主流科技媒体及行业权威机构的深度观察</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaItems.map((item, i) => (
              <a 
                key={i} 
                href="#" 
                className="group p-10 bg-white rounded-[40px] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                <div className="size-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 mb-8 group-hover:bg-[#359EFF]/10 group-hover:text-[#359EFF] transition-all">
                  <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-6 group-hover:text-[#359EFF] transition-colors leading-tight">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10 line-clamp-3">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between text-[10px] font-black text-slate-400 tracking-widest uppercase pt-6 border-t border-slate-50">
                  <span>{item.source}</span>
                  <span className="material-symbols-outlined text-lg">open_in_new</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
