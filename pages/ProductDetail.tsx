import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const [viewMode, setViewMode] = useState<'full' | 'exploded'>('full');

  const coreComponents = [
    {
      title: '高性能驱动单元',
      icon: 'electric_bolt',
      specs: [
        { label: '电机类型', value: 'PMSM 永磁同步电机' },
        { label: '峰值功率', value: '12.5 kW' },
        { label: '控制精度', value: '0.01 deg' }
      ]
    },
    {
      title: '舜泰泰坦域控制器',
      icon: 'developer_board',
      specs: [
        { label: 'AI 算力', value: '200 TOPS' },
        { label: '系统架构', value: 'QNX Real-time OS' },
        { label: '防护等级', value: 'IP67' }
      ]
    },
    {
      title: '360° 环境感知系统',
      icon: 'sensors',
      specs: [
        { label: '传感器融合', value: 'LiDAR + Vision + Radar' },
        { label: '盲区范围', value: '< 5cm' },
        { label: '动态避障', value: '支持 2.5m/s 移动避障' }
      ]
    },
    {
      title: '精密液压模组',
      icon: 'settings_input_component',
      specs: [
        { label: '同步精度', value: '±1mm' },
        { label: '响应速度', value: '100ms' },
        { label: '自诊断系统', value: '全流程压力监测' }
      ]
    }
  ];

  const workScenarios = [
    {
      title: '高层货架存取',
      desc: '支持最高4.5米堆高，通过3D感知技术实现高空精准叉取。',
      img: '/images/logistics-solution.jpg'
    },
    {
      title: '人机协作混合区域',
      desc: '多传感器融合算法，毫秒级响应，确保在繁忙车间内的人员安全。',
      img: '/images/petrochemical-case.jpg'
    },
    {
      title: '冷库与极端温控环境',
      desc: '耐受 -25℃ 极寒，特殊润滑与密封件设计，保障稳定运行。',
      img: '/images/cold-chain-case.jpg'
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-[#0a1118] text-white selection:bg-[#359EFF]/30">
      {/* Product Hero Section */}
      <section className="relative min-h-screen pt-12 pb-24 overflow-hidden flex flex-col justify-center">
        {/* Animated Radial Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.2)_0%,transparent_100%)] opacity-50"></div>
        
        <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <nav className="flex items-center gap-2 text-slate-500 text-[11px] font-black tracking-widest uppercase mb-8">
              <Link to="/products" className="hover:text-[#359EFF] transition-colors">产品中心</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span>智能叉车</span>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-slate-200">V系列智能堆高叉车</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">V系列 智能无人堆高叉车</h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl font-medium opacity-80 leading-relaxed">
              搭载舜泰自研具身智能架构，专为窄巷道及高密度仓储设计的工业级搬运机器人。
            </p>
          </div>

          <div className="relative w-full aspect-[21/9] min-h-[550px] rounded-[48px] border border-white/5 bg-[#01050d]/40 overflow-hidden shadow-2xl group/hero">
            {/* View Mode Switcher */}
            <div className="absolute top-10 left-10 z-20 p-1.5 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 flex gap-1 shadow-2xl">
              <button 
                onClick={() => setViewMode('full')} 
                className={`px-8 py-3 rounded-xl text-xs font-black tracking-widest uppercase transition-all ${viewMode === 'full' ? 'bg-[#359EFF] text-white shadow-lg shadow-[#359EFF]/20' : 'text-slate-400 hover:text-white'}`}
              >
                整车视角
              </button>
              <button 
                onClick={() => setViewMode('exploded')} 
                className={`px-8 py-3 rounded-xl text-xs font-black tracking-widest uppercase transition-all ${viewMode === 'exploded' ? 'bg-[#359EFF] text-white shadow-lg shadow-[#359EFF]/20' : 'text-slate-400 hover:text-white'}`}
              >
                解构视角
              </button>
            </div>

            {/* Float Tools */}
            <div className="absolute top-10 right-10 z-20 flex flex-col gap-4">
              <button className="size-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-[#359EFF] transition-all shadow-xl hover:scale-110 active:scale-95">
                <span className="material-symbols-outlined text-xl">zoom_in</span>
              </button>
              <button className="size-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-[#359EFF] transition-all shadow-xl hover:scale-110 active:scale-95">
                <span className="material-symbols-outlined text-xl">share</span>
              </button>
              <button className="size-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-[#359EFF] transition-all shadow-xl hover:scale-110 active:scale-95">
                <span className="material-symbols-outlined text-xl">download</span>
              </button>
            </div>

            {/* Product Rendering */}
            <div className="absolute inset-0 flex items-center justify-center p-20 pointer-events-none">
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src="/images/smart-forklift.jpg" 
                  className={`max-w-[70%] max-h-full object-contain drop-shadow-[0_0_80px_rgba(53,158,255,0.25)] transition-all duration-1000 ease-in-out ${viewMode === 'exploded' ? 'scale-110 blur-[1px] opacity-60 grayscale-[30%]' : 'scale-100'}`} 
                  alt="V-Series Robot" 
                />
              </div>
            </div>

            {/* Hero Stats Footbar */}
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
              <div className="flex gap-24">
                <div>
                  <div className="text-slate-500 text-[10px] font-black tracking-[0.3em] uppercase mb-2">额定载重</div>
                  <div className="text-4xl font-black text-white tracking-tighter">2,000 <span className="text-sm font-bold text-slate-600 ml-1">KG</span></div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px] font-black tracking-[0.3em] uppercase mb-2">最大起升</div>
                  <div className="text-4xl font-black text-white tracking-tighter">4.5 <span className="text-sm font-bold text-slate-600 ml-1">M</span></div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px] font-black tracking-[0.3em] uppercase mb-2">定位精度</div>
                  <div className="text-4xl font-black text-[#359EFF] tracking-tighter">±5 <span className="text-sm font-bold text-slate-600 ml-1">MM</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Deep Dive & Comparison Section */}
      <section className="py-32 bg-[#0a1118] relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Content: Component Breakdown */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#359EFF]/10 border border-[#359EFF]/20 text-[#359EFF] text-[10px] font-black mb-8 uppercase tracking-widest">
                TECHNICAL DEEP DIVE
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter">核心自研部件解析</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coreComponents.map((comp, idx) => (
                  <div key={idx} className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-[#359EFF]/40 hover:bg-white/[0.04] transition-all group">
                    <div className="size-16 rounded-2xl bg-[#359EFF]/10 flex items-center justify-center text-[#359EFF] mb-8 group-hover:bg-[#359EFF] group-hover:text-white transition-all shadow-xl">
                      <span className="material-symbols-outlined text-3xl">{comp.icon}</span>
                    </div>
                    <h3 className="text-2xl font-black mb-6 tracking-tight text-white">{comp.title}</h3>
                    <div className="space-y-4">
                      {comp.specs.map((s, si) => (
                        <div key={si} className="flex justify-between items-center text-sm">
                          <span className="text-slate-500 font-bold">{s.label}</span>
                          <span className="text-white font-black tracking-tight">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar: Advantage Panel */}
            <div className="lg:col-span-4 sticky top-32 h-fit">
              <div className="bg-white/[0.03] backdrop-blur-3xl p-10 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
                <div className="absolute -top-10 -right-10 size-40 bg-[#359EFF]/10 rounded-full blur-[60px]"></div>
                <div className="absolute top-8 right-8 text-white/5 pointer-events-none">
                  <span className="material-symbols-outlined text-[120px] font-light">trending_up</span>
                </div>
                
                <h4 className="text-2xl font-black mb-10 flex items-center gap-3 tracking-tighter">
                  <span className="text-[#359EFF] material-symbols-outlined text-3xl">compare_arrows</span>
                  技术代际优势
                </h4>

                <div className="space-y-10">
                  <div className="pb-8 border-b border-white/5">
                    <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4">部署周期</div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-white font-black text-xl">舜泰方案: 72小时</div>
                        <div className="text-slate-500 text-xs font-bold line-through decoration-slate-600/50">传统方案: 3-4周</div>
                      </div>
                      <div className="text-[#359EFF] font-black text-sm text-right leading-none">降低<br/>80%</div>
                    </div>
                  </div>

                  <div className="pb-8 border-b border-white/5">
                    <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4">作业精度</div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-white font-black text-xl">舜泰方案: ±5mm</div>
                        <div className="text-slate-500 text-xs font-bold line-through decoration-slate-600/50">传统方案: ±30-50mm</div>
                      </div>
                      <div className="text-[#359EFF] font-black text-sm text-right leading-none">提升<br/>10x</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4">综合运维成本</div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-white font-black text-xl">舜泰方案: 极低(全自研)</div>
                        <div className="text-slate-500 text-xs font-bold line-through decoration-slate-600/50">传统方案: 依赖进口备件</div>
                      </div>
                      <div className="text-[#359EFF] font-black text-sm text-right leading-none">节省<br/>45%</div>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-12 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-black text-sm tracking-widest uppercase transition-all border border-white/10 active:scale-[0.98]">
                  获取详细对比报告
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenario Adaptation Section */}
      <section className="py-32 bg-[#0d1620]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">全场景工况适配</h2>
              <p className="text-slate-400 font-medium text-lg leading-relaxed">
                针对复杂工业环境进行深度优化，确保在各种极端条件下依然保持卓越的稳定性与安全性。
              </p>
            </div>
            <div className="flex gap-4">
              <button className="size-14 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-all text-slate-400 hover:text-white">
                <span className="material-symbols-outlined text-2xl">arrow_back</span>
              </button>
              <button className="size-14 rounded-full border border-[#359EFF] bg-[#359EFF]/10 text-[#359EFF] flex items-center justify-center hover:bg-[#359EFF] hover:text-white transition-all shadow-xl shadow-[#359EFF]/10">
                <span className="material-symbols-outlined text-2xl">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workScenarios.map((scen, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-video rounded-[32px] overflow-hidden bg-slate-800 mb-8 relative shadow-2xl border border-white/5">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center z-10">
                    <span className="material-symbols-outlined text-6xl text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-500 font-light">play_circle</span>
                  </div>
                  <img src={scen.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={scen.title} />
                </div>
                <h3 className="text-2xl font-black mb-3 tracking-tight group-hover:text-[#359EFF] transition-colors">{scen.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{scen.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive CTA Section */}
      <section className="py-32 bg-[#359EFF] overflow-hidden relative group text-center">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2"></div>
          <span className="material-symbols-outlined text-[40rem] absolute -right-40 -bottom-60 rotate-12 group-hover:scale-110 transition-transform duration-1000 font-thin">precision_manufacturing</span>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-white">
          <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-none">开启您的工厂物流智能革命</h2>
          <p className="text-white/90 text-xl md:text-2xl max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
            舜泰的技术专家团队随时准备为您提供量身定制的自动化搬运方案，助力企业实现降本增效。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full min-w-[280px] bg-white text-[#359EFF] py-6 px-12 rounded-[24px] font-black text-xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] hover:scale-105 transition-all flex items-center justify-center gap-3 group/btn">
                <span className="material-symbols-outlined text-3xl group-hover/btn:animate-bounce">download</span>
                获取详细规格书
              </button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full min-w-[280px] bg-slate-900 text-white py-6 px-12 rounded-[24px] font-black text-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-2xl">
                <span className="material-symbols-outlined text-3xl">calendar_today</span>
                预约现场演示
              </button>
            </Link>
          </div>
          
          <p className="mt-16 text-[11px] font-black tracking-[0.4em] uppercase opacity-70">
            已有超过 500+ 全球领先制造企业选择舜泰，即刻加入！
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
