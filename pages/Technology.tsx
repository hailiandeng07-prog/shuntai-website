import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Technology: React.FC = () => {
  const [activePart, setActivePart] = useState('controller');

  const techParts = {
    controller: {
      title: '舜泰集成域控制器',
      subTitle: 'VCU-Integrated Domain Controller',
      depth: '100% 软硬件全自研',
      module: '驱动 · 电控 · 转向 · 制动 · 域控',
      power: '高性能工业级边缘计算单元',
      desc: '通过垂直整合底层五大核心模块，舜泰实现了从感知到执行的毫秒级闭环。相较于外购方案，整机协同效率提升 35%，维护成本降低 20%。'
    },
    sensor: {
      title: '多维环境感知阵列',
      subTitle: 'Multi-Modal Perception Array',
      depth: '自研融合算法',
      module: 'LiDAR · Vision · Ultrasonic',
      power: '实时 3D 语义环境建模',
      desc: '集成多线激光雷达与深度相机，通过自研空间对齐算法实现 360° 无盲区覆盖，支持复杂动态库位下的亚厘米级定位与路径规划。'
    },
    drive: {
      title: '自研高性能驱动单元',
      subTitle: 'High-Performance Drive Unit',
      depth: '精密机械与电控集成',
      module: '电机 · 减速器 · 驱动器',
      power: '12.5kW 峰值动力输出',
      desc: '采用永磁同步技术与矢量控制算法，具备高扭矩密度与超低维护成本。全自研驱动器支持动态扭矩实时反馈，适应各种重载启动工况。'
    },
    brake: {
      title: '双冗余电子制动系统',
      subTitle: 'Dual-Redundant Braking System',
      depth: '安全等级 ASIL-D',
      module: '电比例阀 · 压力反馈 · 应急制动',
      power: '毫秒级建压响应',
      desc: '针对无人驾驶安全需求设计的双重备份制动架构。在关键元器件失效时，备份系统可立即接管，确保在最大坡度满载工况下依然能够安全驻车。'
    }
  };

  const currentTech = techParts[activePart as keyof typeof techParts];

  return (
    <div className="animate-in fade-in duration-700 bg-[#0a1118] text-slate-100 selection:bg-[#359EFF]/30 overflow-x-hidden">
      
      {/* 01 R&D System */}
      <section className="relative py-24 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#359EFF]/5 to-transparent pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#359EFF]/10 border border-[#359EFF]/20 text-[#359EFF] text-[10px] font-black uppercase tracking-widest mb-6">
                #1 研发体系
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tighter">
                构建国家级创新平台<br/>驱动具身智能前沿探索
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                舜泰汽车建立了以总部研究院为核心的全球化研发矩阵。作为国家高新技术企业及省级企业研究院，我们致力于攻克工业级无人驾驶的核心底层技术。
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-black text-[#359EFF] mb-2">300+</div>
                  <div className="text-slate-200 font-black text-sm uppercase tracking-widest">核心研发团队规模</div>
                  <div className="text-slate-500 text-xs mt-2 font-medium">涵盖AI算法、硬件工程、液压控制</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#359EFF] mb-2">12个</div>
                  <div className="text-slate-200 font-black text-sm uppercase tracking-widest">国家级/省级实验平台</div>
                  <div className="text-slate-500 text-xs mt-2 font-medium">包含车规级EE可靠性实验室</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-square rounded-[40px] overflow-hidden bg-white/5 backdrop-blur-xl p-2 border border-white/10 shadow-2xl">
                <div 
                  className="w-full h-full rounded-[32px] bg-center bg-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" 
                  style={{ backgroundImage: 'url("/images/hero-background.jpg")' }}
                ></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#0a1118]/80 backdrop-blur-2xl p-8 rounded-3xl border border-[#359EFF]/30 max-w-[260px] shadow-2xl">
                <span className="material-symbols-outlined text-[#359EFF] text-4xl mb-3">verified</span>
                <p className="text-sm font-black text-white leading-relaxed">通过三体系资质认证, "专精特新" 小巨人称号</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Full Stack Self-R&D */}
      <section className="py-24 bg-[#0a1118] relative overflow-hidden">
        {/* Subtle Tech Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#359EFF 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#359EFF]/10 border border-[#359EFF]/20 text-[#359EFF] text-[10px] font-black uppercase tracking-widest mb-6">
              #2 全栈自研
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter mb-4">360° 数字化解构智能叉车</h2>
            <p className="text-[#359EFF] text-xl font-medium opacity-80">点击各核心部件，探索舜泰全栈自研技术细节</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Interactive 3D Mockup Area */}
            <div className="lg:col-span-7 relative group aspect-video lg:aspect-square bg-white/[0.02] rounded-[48px] border border-white/10 overflow-hidden shadow-inner">
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <img 
                  src="/images/smart-forklift.jpg" 
                  className="w-full h-full object-contain opacity-90 drop-shadow-[0_0_50px_rgba(53,158,255,0.2)] transition-transform duration-1000 scale-110" 
                  alt="3D Exploded Smart Forklift" 
                />
                
                {/* Interactive Hotspots */}
                <button
                  onClick={() => setActivePart('sensor')}
                  className={`absolute top-[35%] left-[25%] cursor-pointer z-20 transition-all group/hotspot ${activePart === 'sensor' ? 'scale-125' : 'hover:scale-110'}`}
                >
                  <div className={`size-4 rounded-full bg-[#359EFF] shadow-[0_0_15px_#359EFF] ${activePart === 'sensor' ? 'animate-pulse' : ''}`}></div>
                  <div className={`absolute top-1/2 left-6 whitespace-nowrap text-white text-xs font-black tracking-wide px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 transition-opacity pointer-events-none ${
                    activePart === 'sensor' ? 'opacity-100' : 'opacity-0 group-hover/hotspot:opacity-100'
                  }`}>
                    传感器阵列
                  </div>
                </button>

                <button
                  onClick={() => setActivePart('controller')}
                  className={`absolute top-[45%] left-[60%] cursor-pointer z-20 transition-all group/hotspot ${activePart === 'controller' ? 'scale-125' : 'hover:scale-110'}`}
                >
                  <div className="size-6 rounded-full bg-white shadow-[0_0_25px_#359EFF] ring-4 ring-[#359EFF]/50 animate-ping absolute opacity-40"></div>
                  <div className="size-6 rounded-full bg-white shadow-[0_0_15px_#359EFF] ring-4 ring-[#359EFF] flex items-center justify-center relative">
                    <div className="size-2 rounded-full bg-[#359EFF]"></div>
                  </div>
                  <div className={`absolute top-1/2 right-full mr-4 whitespace-nowrap text-white text-xs font-black tracking-wide px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 transition-opacity pointer-events-none ${
                    activePart === 'controller' ? 'opacity-100' : 'opacity-0 group-hover/hotspot:opacity-100'
                  }`}>
                    域控制器(核心)
                  </div>
                </button>

                <button
                  onClick={() => setActivePart('drive')}
                  className={`absolute top-[65%] left-[35%] cursor-pointer z-20 transition-all group/hotspot ${activePart === 'drive' ? 'scale-125' : 'hover:scale-110'}`}
                >
                  <div className={`size-4 rounded-full bg-[#359EFF] shadow-[0_0_15px_#359EFF] ${activePart === 'drive' ? 'animate-pulse' : ''}`}></div>
                  <div className={`absolute top-1/2 left-6 whitespace-nowrap text-white text-xs font-black tracking-wide px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 transition-opacity pointer-events-none ${
                    activePart === 'drive' ? 'opacity-100' : 'opacity-0 group-hover/hotspot:opacity-100'
                  }`}>
                    驱动单元(自研)
                  </div>
                </button>

                <button
                  onClick={() => setActivePart('brake')}
                  className={`absolute top-[75%] left-[55%] cursor-pointer z-20 transition-all group/hotspot ${activePart === 'brake' ? 'scale-125' : 'hover:scale-110'}`}
                >
                  <div className={`size-4 rounded-full bg-[#359EFF] shadow-[0_0_15px_#359EFF] ${activePart === 'brake' ? 'animate-pulse' : ''}`}></div>
                  <div className={`absolute top-1/2 left-6 whitespace-nowrap text-white text-xs font-black tracking-wide px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 transition-opacity pointer-events-none ${
                    activePart === 'brake' ? 'opacity-100' : 'opacity-0 group-hover/hotspot:opacity-100'
                  }`}>
                    制动系统
                  </div>
                </button>
              </div>

              {/* Bottom Labels */}
              <div className="absolute bottom-8 left-8 flex items-center gap-6 text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">3d_rotation</span> 3D 爆炸视图</div>
                <div className="flex items-center gap-2 border-l border-white/10 pl-6"><span className="material-symbols-outlined text-sm">view_in_ar</span> 全栈技术架构</div>
              </div>
            </div>

            {/* Component Detail Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/[0.03] backdrop-blur-3xl rounded-[40px] p-10 border border-[#359EFF]/20 shadow-2xl min-h-[500px] flex flex-col transition-all duration-300">
                <div className="flex items-center gap-6 mb-10">
                  <div className="size-16 rounded-2xl bg-[#359EFF]/20 flex items-center justify-center text-[#359EFF] shadow-xl transition-all duration-300">
                    <span className="material-symbols-outlined text-4xl">
                      {activePart === 'controller' ? 'developer_board' :
                       activePart === 'sensor' ? 'sensors' :
                       activePart === 'drive' ? 'electric_bolt' :
                       'security'}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white text-2xl font-black tracking-tight transition-all duration-300">{currentTech.title}</h4>
                    <p className="text-[#359EFF]/70 text-[10px] font-bold uppercase tracking-widest mt-1">{currentTech.subTitle}</p>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-medium">自研深度</span>
                    <span className="text-white font-black text-sm">{currentTech.depth}</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-medium">控制模块</span>
                    <span className="text-[#359EFF] font-black text-sm uppercase">{currentTech.module}</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-slate-400 text-sm font-medium">处理算力</span>
                    <span className="text-white font-black text-sm">{currentTech.power}</span>
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed text-sm font-medium mb-10 flex-grow">
                  {currentTech.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="bg-[#359EFF] text-white py-4 rounded-2xl font-black text-sm hover:shadow-[0_15px_40px_rgba(53,158,255,0.3)] transition-all active:scale-95">进入技术白皮书</button>
                  <button className="bg-white/5 text-white border border-white/10 py-4 rounded-2xl font-black text-sm hover:bg-white/10 transition-all active:scale-95">咨询产品方案</button>
                </div>
              </div>

              {/* Stats Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center">
                  <div className="text-[#359EFF] text-4xl font-black mb-2 tracking-tighter">90%+</div>
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">核心零部件自研</div>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center">
                  <div className="text-[#359EFF] text-4xl font-black mb-2 tracking-tighter">IP67</div>
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">全自研防护等级</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 EE Architecture */}
      <section className="py-32 bg-[#0a1118] relative">
        {/* Subtle Architecture Grid */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(53,158,255,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#359EFF]/10 border border-[#359EFF]/20 text-[#359EFF] text-[10px] font-black uppercase tracking-widest mb-6">
                #3 性能架构
              </div>
              <h2 className="text-4xl font-black mb-8 tracking-tighter">商用车规级 EE 架构</h2>
              <p className="text-slate-400 mb-10 leading-relaxed font-medium text-lg">
                基于工业高强度环境设计的电子电气架构，采用分布式控制与中央域控深度耦合。通过 Automotive Ethernet 骨干网，确保了海量传感器数据在高动态作业下的零丢包传输。
              </p>

              <div className="space-y-8">
                <div className="bg-white/[0.03] p-8 rounded-[32px] border border-white/5 shadow-2xl">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-white font-black text-sm uppercase tracking-widest">稳定性对比 (MTBF)</span>
                    <span className="text-[#359EFF] text-sm font-black uppercase tracking-widest">领先 45%</span>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                        <span>舜泰车规架构 (8000h)</span>
                        <span className="text-white">8000h</span>
                      </div>
                      <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-[#359EFF] rounded-full shadow-[0_0_15px_#359EFF]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                        <span>行业标准 (5500h)</span>
                        <span>5500h</span>
                      </div>
                      <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="w-[65%] h-full bg-slate-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-8 rounded-[32px] border border-[#359EFF]/20 bg-[#359EFF]/5 backdrop-blur-md">
                  <div className="size-14 rounded-2xl bg-[#359EFF] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#359EFF]/20">
                    <span className="material-symbols-outlined text-3xl">security</span>
                  </div>
                  <div>
                    <div className="text-white font-black text-lg tracking-tight">双冗余安全机制</div>
                    <p className="text-sm text-slate-400 mt-2 font-medium leading-relaxed">符合 ISO 26262 ASIL-D 功能安全标准，确保工业级作业万无一失。每一条关键指令均有物理层级备份。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative rounded-[48px] overflow-hidden bg-white/[0.02] border border-white/10 group shadow-2xl">
                <div 
                  className="w-full h-[500px] bg-center bg-cover transition-transform duration-[2000ms] group-hover:scale-105 opacity-60" 
                  style={{ backgroundImage: 'url("/images/chassis-platform.jpg")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#359EFF]/20 to-transparent mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative">
                    <div className="size-[320px] border border-[#359EFF]/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute inset-0 size-[260px] m-auto border border-[#359EFF]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-8xl text-[#359EFF] opacity-80 animate-pulse">schema</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Autonomous Simulation */}
      <section className="py-32 bg-white/[0.02] border-t border-white/5 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#359EFF]/10 border border-[#359EFF]/20 text-[#359EFF] text-[10px] font-black uppercase tracking-widest mb-6">
                #4 仿真训练
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">物流环境仿真模拟系统</h2>
            </div>
            <p className="text-slate-400 max-w-md font-medium text-lg leading-relaxed mb-4">
              基于 Unity 引擎深度定制，通过数字孪生技术在虚拟空间中进行数百万小时的极限场景训练，大幅缩短实车部署周期。
            </p>
          </div>

          <div className="relative group rounded-[48px] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1118] via-transparent to-transparent z-10 pointer-events-none"></div>
            <div 
              className="w-full aspect-video bg-center bg-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" 
              style={{ backgroundImage: 'url("/images/logistics-solution.jpg")' }}
            ></div>
            
            {/* Simulation Dashboard Overlays */}
            <div className="absolute top-10 left-10 z-20 space-y-6 pointer-events-none">
              <div className="bg-white/5 backdrop-blur-2xl p-6 rounded-3xl border border-[#359EFF]/40 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="size-3 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-[10px] font-black tracking-[0.3em] text-white/80 uppercase">SIMULATION ACTIVE</span>
                </div>
                <div className="text-3xl font-mono font-black text-white mt-4 tracking-tighter">
                  1,248,500 <span className="text-xs text-slate-400 font-bold ml-1 uppercase">HRS TRAINED</span>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10 inline-flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="size-8 rounded-full border-2 border-[#0a1118] bg-[#359EFF] flex items-center justify-center text-[10px] font-black">AI</div>
                  ))}
                </div>
                <span className="text-[10px] font-black text-slate-300 tracking-widest uppercase">数字孪生同步</span>
              </div>
            </div>

            <div className="absolute bottom-12 right-12 z-20">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white/5 backdrop-blur-2xl px-8 py-4 rounded-2xl text-xs font-black tracking-[0.2em] uppercase border border-white/20 hover:bg-white/10 transition-all text-white active:scale-95 shadow-2xl">
                  数字孪生同步
                </button>
                <button className="bg-[#359EFF] px-8 py-4 rounded-2xl text-xs font-black tracking-[0.2em] uppercase shadow-[0_15px_40px_rgba(53,158,255,0.4)] hover:bg-blue-600 transition-all text-white active:scale-95">
                  启动虚拟仿真
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-[#359EFF] overflow-hidden relative group text-center">
        {/* Carbon Fiber-like Overlay Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none" 
          style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000 100%), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000 100%)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}
        ></div>
        
        <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter leading-none">准备好开启智能搬运的新纪元了吗？</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto min-w-[280px] bg-white text-[#359EFF] py-6 px-12 rounded-[24px] font-black text-xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] hover:scale-105 transition-all active:scale-95 shadow-2xl">
              获取完整技术手册
            </button>
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto min-w-[280px] bg-transparent border-2 border-white/60 text-white py-6 px-12 rounded-[24px] font-black text-xl hover:bg-white/10 transition-all active:scale-95">
                联系技术专家
              </button>
            </Link>
          </div>
          <p className="mt-16 text-[11px] font-black tracking-[0.4em] uppercase opacity-60">
            舜泰汽车 · 具身智能实验室核心成员
          </p>
        </div>
      </section>
    </div>
  );
};

export default Technology;
