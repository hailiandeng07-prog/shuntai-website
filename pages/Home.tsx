
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // 360° 解构交互状态
  const [selectedComponent, setSelectedComponent] = useState(0);

  // 核心组件数据
  const components = [
    {
      id: 0,
      title: '舜泰自研域控制器',
      subtitle: 'VCU-Integrated Domain Controller',
      icon: 'memory',
      position: { top: '40%', right: '35%' },
      specs: [
        { label: '处理性能', value: '280 TOPS 强力集群' },
        { label: '通信协议', value: 'Automotive Ethernet / CAN-FD' },
        { label: '自研优势', value: '软硬一体化深度融合' }
      ],
      description: '集成自研高精控制模块与深度感知神经网络，支持多机协同调度及超快响应。屏蔽重复工况下的"数字幻觉"。',
      stats: [
        { value: '0.1ms', label: '控制响应延迟' },
        { value: 'IP67', label: '防尘防水等级' }
      ]
    },
    {
      id: 1,
      title: '高性能驱动单元',
      subtitle: 'High-Performance Drive Unit',
      icon: 'electric_bolt',
      position: { bottom: '30%', left: '45%' },
      specs: [
        { label: '电机类型', value: 'PMSM 永磁同步电机' },
        { label: '峰值功率', value: '12.5 kW' },
        { label: '控制精度', value: '0.01 deg' }
      ],
      description: '采用永磁同步电机技术，实现高精度位置控制与快速响应。优化的电磁设计确保高效能转换与低噪音运行。',
      stats: [
        { value: '12.5kW', label: '峰值功率' },
        { value: '0.01°', label: '控制精度' }
      ]
    },
    {
      id: 2,
      title: '360° 环境感知系统',
      subtitle: '360° Environmental Perception',
      icon: 'sensors',
      position: { top: '15%', left: '30%' },
      specs: [
        { label: '传感器融合', value: 'LiDAR + Vision + Radar' },
        { label: '盲区范围', value: '< 5cm' },
        { label: '动态避障', value: '支持 2.5m/s 移动避障' }
      ],
      description: '多传感器融合算法，实现全方位环境感知。毫秒级响应确保在繁忙车间内的人员安全与设备稳定运行。',
      stats: [
        { value: '<5cm', label: '盲区范围' },
        { value: '2.5m/s', label: '避障速度' }
      ]
    }
  ];

  const currentComponent = components[selectedComponent];

  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[#020617]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 z-10"></div>
          <img 
            src="/images/hero-background.jpg" 
            className="w-full h-full object-cover opacity-80" 
            alt="Hero Background" 
          />
        </div>
        
        <div className="relative z-20 max-w-[1440px] w-full px-6 flex flex-col items-center text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-white text-[12px] font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            具身智能驱动动态更灵活
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[84px] font-black leading-tight tracking-tight mb-6">
            具身智能物流机器人<br/>
            <span className="text-[#359EFF]">全栈方案提供商</span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-90 font-light tracking-wide">
            以智能叉车为核心，赋能工业物流无人化升级
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full px-10 py-3.5 bg-[#359EFF] text-white rounded-lg font-bold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20">
                立即获取方案
              </button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <button className="w-full px-10 py-3.5 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">
                了解更多
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-[#fcfdfe] border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="size-10 bg-blue-50 rounded-full flex items-center justify-center text-[#359EFF] mb-4">
                <span className="material-symbols-outlined font-bold">verified_user</span>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">国家级专精特新“小巨人”</h3>
              <p className="text-slate-400 text-xs font-medium">行业领先的专业化水平与创新能力</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border-x border-slate-100">
              <div className="size-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-4">
                <span className="material-symbols-outlined font-bold">memory</span>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">90%+ 核心零部件自研</h3>
              <p className="text-slate-400 text-xs font-medium">垂直整合全产业链，保障极致可靠</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="size-10 bg-blue-50 rounded-full flex items-center justify-center text-[#359EFF] mb-4">
                <span className="material-symbols-outlined font-bold">military_tech</span>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">国家高新技术企业</h3>
              <p className="text-slate-400 text-xs font-medium">多项核心授权，深耕具身智能</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="p-10 rounded-2xl border border-slate-100 bg-white hover:shadow-lg transition-all">
              <div className="text-slate-400 text-xs font-medium mb-4">自主研发占比</div>
              <div className="text-4xl font-black text-slate-900 mb-4 flex items-baseline">90% <span className="text-[#359EFF] ml-1 text-2xl font-bold">+</span></div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">核心零部件及控制器系统全自研，确保了软硬件的高度协同与快速迭代。</p>
              <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-[90%] h-full bg-[#359EFF]"></div>
              </div>
            </div>
            <div className="p-10 rounded-2xl border border-slate-100 bg-white hover:shadow-lg transition-all">
              <div className="text-slate-400 text-xs font-medium mb-4">技术储备</div>
              <div className="text-4xl font-black text-slate-900 mb-4 flex items-baseline">400 <span className="text-[#359EFF] ml-1 text-2xl font-bold">+</span></div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">拥有涵盖自动导航、液压精密控制、多机协同等领域的各项核心专利。</p>
              <div className="flex gap-2">
                <div className="w-1/3 h-1 bg-[#359EFF] rounded-full"></div>
                <div className="w-1/3 h-1 bg-slate-100 rounded-full"></div>
                <div className="w-1/3 h-1 bg-slate-100 rounded-full"></div>
              </div>
            </div>
            <div className="p-10 rounded-2xl border border-slate-100 bg-white hover:shadow-lg transition-all">
              <div className="text-slate-400 text-xs font-medium mb-4">全球布局</div>
              <div className="text-4xl font-black text-slate-900 mb-4 flex items-baseline">12 <span className="text-[#359EFF] ml-2 text-xl font-bold tracking-tight">个中心</span></div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">在亚洲、欧洲、北美建立战略性制造与技术服务中心，便利本地化支持。</p>
              <div className="flex gap-4">
                <span className="text-[10px] font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded uppercase">DE</span>
                <span className="text-[10px] font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded uppercase">JP</span>
                <span className="text-[10px] font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded uppercase">CH</span>
                <span className="text-[10px] font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded uppercase">US</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Segments */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">业务板块</h2>
              <p className="text-slate-500 font-medium">专为高强度工业环境设计的机器人硬件与软件集成系统。</p>
            </div>
            <Link to="/products" className="text-[#359EFF] font-bold flex items-center gap-1 group">
              查看产品目录 <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_right_alt</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group border border-slate-100 rounded-2xl p-6 bg-white hover:border-[#359EFF]/30 hover:shadow-xl transition-all">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-8 relative">
                <img 
                  src="/images/smart-forklift.jpg" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" 
                  alt="智能叉车" 
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">核心产品</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">智能叉车</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">核心自研底盘及控制系统全自研，搭载3D LIDAR SLAM技术，实现毫米级定位精度。</p>
              <Link to="/products/v-series">
                <button className="w-full py-3 bg-[#359EFF] text-white rounded-lg font-bold transition-all shadow-md">查看详情</button>
              </Link>
            </div>
            
            <div className="group border border-slate-100 rounded-2xl p-6 bg-white hover:shadow-xl transition-all">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 mb-8 flex items-center justify-center p-8">
                <img 
                  src="/images/logistics-solution.jpg" 
                  className="w-full h-auto object-contain opacity-80" 
                  alt="整体解决方案" 
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">智能物流整体解决方案</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">为现代企业提供端到端自动工作流。可扩展的车队调度软件与WMS系统深厚集成。</p>
              <Link to="/products">
                <button className="w-full py-3 border border-slate-200 text-slate-600 rounded-lg font-bold hover:bg-slate-50 transition-all">探索方案</button>
              </Link>
            </div>

            <div className="group border border-slate-100 rounded-2xl p-6 bg-white hover:shadow-xl transition-all">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 mb-8 flex items-center justify-center p-8">
                <img 
                  src="/images/chassis-platform.jpg" 
                  className="w-full h-auto object-contain opacity-80" 
                  alt="智能底盘平台" 
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">智能底盘平台</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">多模态的移动底盘平台。支持定制化工业移动需求。负载能力最高达20吨，支持全向移动。</p>
              <Link to="/products">
                <button className="w-full py-3 border border-slate-200 text-slate-600 rounded-lg font-bold hover:bg-slate-50 transition-all">规格参数</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 360 Breakdown */}
      <section className="py-24 bg-[#020617] relative overflow-hidden text-white">
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">360° 数字化解构智能叉车</h2>
            <p className="text-blue-400 font-medium opacity-80">点击备核心部件，探索舜泰硬核科技细节</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-square max-w-[500px] mx-auto group">
                <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>
                <img 
                  src="/images/smart-forklift.jpg" 
                  className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(53,158,255,0.3)] relative z-10" 
                  alt="3D Robot Breakdown" 
                />
                {/* 交互式热点 */}
                {components.map((comp, index) => (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedComponent(index)}
                    style={{
                      ...(comp.position.top && { top: comp.position.top }),
                      ...(comp.position.bottom && { bottom: comp.position.bottom }),
                      ...(comp.position.left && { left: comp.position.left }),
                      ...(comp.position.right && { right: comp.position.right }),
                    }}
                    className={`absolute ${index === 0 ? 'w-4 h-4' : index === 1 ? 'w-3 h-3' : 'w-2 h-2'} rounded-full bg-blue-400/50 glow-node z-20 cursor-pointer transition-all duration-300 hover:scale-125 ${
                      selectedComponent === index ? 'animate-pulse bg-blue-400 scale-125' : 'animate-ping'
                    }`}
                    aria-label={`点击查看${comp.title}`}
                  >
                    <span className="sr-only">{comp.title}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-center gap-10 mt-10 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">360</span> 360° 可视化</span>
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">data_object</span> 实时自研展示</span>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl mb-8 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="size-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 transition-all duration-300">
                    <span className="material-symbols-outlined text-2xl">{currentComponent.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold transition-all duration-300">{currentComponent.title}</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{currentComponent.subtitle}</p>
                  </div>
                </div>
                
                <div className="space-y-6 mb-10">
                  {currentComponent.specs.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-4 border-b border-white/5 transition-all duration-300">
                      <span className="text-slate-400 text-sm font-medium">{spec.label}</span>
                      <span className="text-white font-black text-sm uppercase">{spec.value}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-slate-400 text-xs leading-relaxed mb-10 font-medium transition-all duration-300">
                  {currentComponent.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/technology" className="flex-1">
                    <button className="w-full py-3.5 bg-blue-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all">进入电子白皮书</button>
                  </Link>
                  <Link to="/products/v-series" className="flex-1">
                    <button className="w-full py-3.5 border border-white/10 text-white rounded-xl font-bold text-sm hover:bg-white/5 transition-all">查阅产品详情</button>
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {currentComponent.stats.map((stat, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center transition-all duration-300">
                    <div className="text-blue-400 text-2xl font-black mb-1">{stat.value}</div>
                    <div className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* 组件切换指示器 */}
              <div className="flex justify-center gap-2 mt-6">
                {components.map((comp, index) => (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedComponent(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      selectedComponent === index 
                        ? 'w-8 bg-blue-400' 
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`切换到${comp.title}`}
                  >
                    <span className="sr-only">{comp.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-3 tracking-tight">应用案例</h2>
              <p className="text-slate-500 font-medium">为全球领军企业提供高效、安全的工业搬运服务</p>
            </div>
            <Link to="/cases" className="text-[#359EFF] font-bold flex items-center gap-2 group">
              全部案例 <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/cases" className="relative rounded-[32px] overflow-hidden aspect-[4/5] group cursor-pointer shadow-lg">
              <img 
                src="/images/petrochemical-case.jpg" 
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                alt="石油化工案例" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                <span className="text-[#359EFF] text-[10px] font-black tracking-[0.2em] uppercase mb-2">Petrochemical</span>
                <h3 className="text-2xl font-bold text-white tracking-tight">石油化工防爆仓储</h3>
              </div>
            </Link>

            <Link to="/cases" className="relative rounded-[32px] overflow-hidden aspect-[4/5] group cursor-pointer shadow-lg">
              <img 
                src="/images/automotive-case.jpg" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[40%] group-hover:grayscale-0" 
                alt="汽车制造案例" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                <span className="text-[#359EFF] text-[10px] font-black tracking-[0.2em] uppercase mb-2">Automotive</span>
                <h3 className="text-2xl font-bold text-white tracking-tight">汽车整车制造车间</h3>
              </div>
            </Link>

            <Link to="/cases" className="relative rounded-[32px] overflow-hidden aspect-[4/5] group cursor-pointer shadow-lg">
              <img 
                src="/images/cold-chain-case.jpg" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[40%] group-hover:grayscale-0" 
                alt="冷链物流案例" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                <span className="text-[#359EFF] text-[10px] font-black tracking-[0.2em] uppercase mb-2">Cold Chain</span>
                <h3 className="text-2xl font-bold text-white tracking-tight">极寒环境冷链物流</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
