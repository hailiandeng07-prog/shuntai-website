
import React, { useState } from 'react';

const Cases: React.FC = () => {
  const [activeTab, setActiveTab] = useState('全部');
  const tabs = ['全部', '石油化工', '智能制造', '冷链物流', '智慧仓储'];

  const cases = [
    { 
      category: '石油化工', 
      title: '某大型石化园区防爆机器人项目', 
      loc: '山东 · 淄博', 
      desc: '在高危、易燃、易爆环境下实现全自主无人搬运，搭载防爆级视觉传感器及自研算法。', 
      img: '/images/petrochemical-case.jpg' 
    },
    { 
      category: '智能制造', 
      title: '汽车总装车间物流数字化升级', 
      loc: '浙江 · 宁波', 
      desc: '通过智能叉车车队实现零部件自动化上线与空箱回收，提升生产节拍稳定性 20%。', 
      img: '/images/automotive-case.jpg' 
    },
    { 
      category: '冷链物流', 
      title: '食品级冷链自动化立体库项目', 
      loc: '江苏 · 南京', 
      desc: '设备经特殊抗冻工艺处理，在 -25°C 环境下全天候作业，解决低温环境人工难题。', 
      img: '/images/cold-chain-case.jpg' 
    },
    { 
      category: '智慧仓储', 
      title: '电商分拣中心全自主调度项目', 
      loc: '广东 · 深圳', 
      desc: '超100台智能设备多机协同调度，实现高峰期每小时 12000 次托盘搬运。', 
      img: '/images/hero-background.jpg' 
    },
  ];

  const filteredCases = activeTab === '全部' ? cases : cases.filter(c => c.category === activeTab);

  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* Page Hero */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#359EFF]/10 text-[#359EFF] text-xs font-black mb-6 uppercase tracking-widest">
              SUCCESS STORIES
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-slate-900 leading-none">行业应用案例</h1>
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
              舜泰汽车赋能全球各行业客户实现物流自动化。从高危化工到极寒冷链，我们的智能叉车正全天候稳定运行，重塑生产力。
            </p>
          </div>
        </div>
      </section>

      {/* Case Grid and Tabs */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex items-center gap-10 border-b border-slate-100 mb-16 overflow-x-auto no-scrollbar pb-0">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-6 font-black text-sm tracking-widest uppercase transition-all relative whitespace-nowrap ${
                  activeTab === tab 
                    ? 'text-[#359EFF] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#359EFF]' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCases.map((c, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-sm border border-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img src={c.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={c.title} />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="flex items-center gap-2 text-[10px] bg-black/40 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/20 font-bold tracking-wider">
                      <span className="material-symbols-outlined text-[14px]">location_on</span> {c.loc}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#359EFF] transition-colors leading-tight">
                  {c.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 line-clamp-2">
                  {c.desc}
                </p>
                <div className="inline-flex items-center text-[#359EFF] font-black text-xs gap-1 group-hover:gap-2 transition-all tracking-widest uppercase">
                  详情案例 <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Analysis Section */}
      <section className="py-24 bg-[#01050d] relative overflow-hidden text-white">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">“降本增效” 量化价值分析</h2>
            <p className="text-[#359EFF] text-xl font-medium tracking-wide">全周期数字化看板，直观体现部署后的显著提升</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* KPI 1 */}
            <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 flex flex-col items-center text-center group hover:bg-white/[0.08] transition-all">
              <div className="size-20 bg-[#359EFF]/10 rounded-3xl flex items-center justify-center text-[#359EFF] mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">bolt</span>
              </div>
              <div className="text-6xl font-black text-white mb-2 tracking-tighter">+45%</div>
              <div className="text-[#359EFF] font-black text-sm tracking-widest uppercase mb-6">作业效率提升</div>
              <div className="h-1.5 w-20 bg-white/10 rounded-full mb-8 overflow-hidden">
                <div className="h-full w-4/5 bg-[#359EFF] shadow-[0_0_10px_#359EFF]"></div>
              </div>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                通过多机调度算法与 SLAM 高精导航，消除无效作业路径，实现 24/7 不间断作业流。
              </p>
            </div>

            {/* KPI 2 */}
            <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 flex flex-col items-center text-center group hover:bg-white/[0.08] transition-all">
              <div className="size-20 bg-[#359EFF]/10 rounded-3xl flex items-center justify-center text-[#359EFF] mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">payments</span>
              </div>
              <div className="text-6xl font-black text-white mb-2 tracking-tighter">-30%</div>
              <div className="text-[#359EFF] font-black text-sm tracking-widest uppercase mb-6">运营成本降低</div>
              <div className="h-1.5 w-20 bg-white/10 rounded-full mb-8 overflow-hidden">
                <div className="h-full w-1/3 bg-[#359EFF] shadow-[0_0_10px_#359EFF]"></div>
              </div>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                显著减少人力开支、能源损耗及设备维护成本。平均投资回收期 (ROI) 缩短至 14-18 个月。
              </p>
            </div>

            {/* KPI 3 */}
            <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 flex flex-col items-center text-center group hover:bg-white/[0.08] transition-all">
              <div className="size-20 bg-[#359EFF]/10 rounded-3xl flex items-center justify-center text-[#359EFF] mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">health_and_safety</span>
              </div>
              <div className="text-6xl font-black text-white mb-2 tracking-tighter">0</div>
              <div className="text-[#359EFF] font-black text-sm tracking-widest uppercase mb-6">作业安全指标 (事故率)</div>
              <div className="h-1.5 w-20 bg-white/10 rounded-full mb-8 overflow-hidden">
                <div className="h-full w-full bg-[#359EFF] shadow-[0_0_10px_#359EFF]"></div>
              </div>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                搭载 360° 避障冗余系统与液压精准缓冲，彻底杜绝人机碰撞事故，保障高价值货物安全。
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 p-12 rounded-3xl border border-white/5 bg-white/5 flex flex-wrap items-center justify-around gap-12 text-center backdrop-blur-sm">
            <div>
              <div className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mb-3">累计运行里程</div>
              <div className="text-3xl font-black text-white">12,000,000+ <span className="text-sm font-bold text-slate-600 ml-1">KM</span></div>
            </div>
            <div className="w-px h-16 bg-white/10 hidden md:block"></div>
            <div>
              <div className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mb-3">平均无故障运行</div>
              <div className="text-3xl font-black text-white">15,000 <span className="text-sm font-bold text-slate-600 ml-1">HRS</span></div>
            </div>
            <div className="w-px h-16 bg-white/10 hidden md:block"></div>
            <div>
              <div className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mb-3">单场最高吞吐量</div>
              <div className="text-3xl font-black text-white">850 <span className="text-sm font-bold text-slate-600 ml-1">Tons/Day</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Voices */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">客户之声</h2>
              <p className="text-slate-500 font-medium">标杆客户的实名评价，是我们品质的最好见证</p>
            </div>
            <div className="flex gap-4">
              <button className="size-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 transition-all shadow-sm">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="size-12 rounded-full border border-[#359EFF] bg-[#359EFF] text-white flex items-center justify-center hover:bg-[#359EFF]/90 transition-all shadow-lg shadow-[#359EFF]/20">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm relative group">
              <span className="material-symbols-outlined absolute top-12 right-12 text-[#359EFF]/10 text-7xl font-light">format_quote</span>
              <div className="flex items-center gap-5 mb-10">
                <div className="size-16 rounded-full bg-slate-100 overflow-hidden ring-4 ring-slate-50">
                  <img src="/images/automotive-case.jpg" className="w-full h-full object-cover" alt="User" />
                </div>
                <div>
                  <div className="font-black text-slate-900 text-lg">王建国</div>
                  <div className="text-slate-500 text-sm font-medium">某全球化工厂 · 物流高级主管</div>
                </div>
              </div>
              <p className="text-slate-600 text-lg font-medium leading-relaxed italic mb-10">
                “在石化园区极端复杂的防爆环境下，舜泰的智能叉车展现了极高的可靠性和精准度。自从上线整套无人化方案后，我们实现了物流作业人员的‘零伤亡’记录，且整体作业时效提升了 40% 以上。”
              </p>
              <div className="flex items-center justify-between pt-10 border-t border-slate-50">
                <div className="flex text-[#359EFF]">
                  {[1,2,3,4,5].map(s => <span key={s} className="material-symbols-outlined">star</span>)}
                </div>
                <div className="text-[10px] font-black text-slate-300 tracking-[0.4em] uppercase">Trusted Partner</div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm relative group">
              <span className="material-symbols-outlined absolute top-12 right-12 text-[#359EFF]/10 text-7xl font-light">format_quote</span>
              <div className="flex items-center gap-5 mb-10">
                <div className="size-16 rounded-full bg-slate-100 overflow-hidden ring-4 ring-slate-50">
                  <img src="/images/team-member.jpg" className="w-full h-full object-cover" alt="User" />
                </div>
                <div>
                  <div className="font-black text-slate-900 text-lg">李明芳</div>
                  <div className="text-slate-500 text-sm font-medium">知名汽车制造集团 · 车间技术负责人</div>
                </div>
              </div>
              <p className="text-slate-600 text-lg font-medium leading-relaxed italic mb-10">
                “舜泰的系统与我们的 MES 和 WMS 深度集成，真正做到了物流与生产的‘同频呼吸’。他们的团队在部署过程中表现得非常专业，仅用一个月就完成了整个车间的调试并正式投产。”
              </p>
              <div className="flex items-center justify-between pt-10 border-t border-slate-50">
                <div className="flex text-[#359EFF]">
                  {[1,2,3,4,5].map(s => <span key={s} className="material-symbols-outlined">star</span>)}
                </div>
                <div className="text-[10px] font-black text-slate-300 tracking-[0.4em] uppercase">Verified Account</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#359EFF] p-20 flex flex-col items-start justify-center text-white relative overflow-hidden group">
          <span className="material-symbols-outlined absolute -right-10 -bottom-10 text-white/10 text-9xl rotate-12 group-hover:scale-110 transition-transform duration-700">group_add</span>
          <div className="relative z-10">
            <h3 className="text-4xl font-black mb-6 tracking-tighter">开启您的智能升级</h3>
            <p className="text-white/80 text-lg font-medium mb-12 max-w-sm">舜泰专家团队为您免费提供现场踏勘及 ROI 评估报告。</p>
            <button className="bg-white text-[#359EFF] px-12 py-5 rounded-2xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105">
              获取定制方案
            </button>
          </div>
        </div>

        <div className="bg-[#020617] p-20 flex flex-col items-start justify-center text-white relative overflow-hidden group">
          <span className="material-symbols-outlined absolute -right-10 -bottom-10 text-white/5 text-9xl rotate-12 group-hover:scale-110 transition-transform duration-700">description</span>
          <div className="relative z-10">
            <h3 className="text-4xl font-black mb-6 tracking-tighter">技术白皮书下载</h3>
            <p className="text-slate-400 text-lg font-medium mb-12 max-w-sm">深入了解舜泰全栈自研硬件及 AI 算法平台，下载 2024 行业白皮书。</p>
            <button className="bg-transparent border-2 border-slate-800 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white/5 transition-all">
              立即下载
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;
