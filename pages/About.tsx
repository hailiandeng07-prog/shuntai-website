
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-[#f9fafb]">
      {/* Brand Story Hero */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#359EFF]/10 border border-[#359EFF]/20 text-[#359EFF] text-xs font-bold mb-6">
              <span className="material-symbols-outlined text-sm">history_edu</span> 品牌故事
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-8 text-slate-900">
              源于热爱，成于创新<br/>
              <span className="text-[#359EFF] italic">让物流更智能、更安全</span>
            </h1>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
              <p>
                舜泰汽车的诞生源于创始人对工业文明演进的深刻思考。在传统物流面临人力瓶颈与安全风险的当下，我们坚信“具身智能”是改写行业格局的核心钥匙。
              </p>
              <p>
                我们的使命不仅是制造一台智能叉车，更是构建一套能够自主感知、决策并协作的智慧物流神经网络。通过全栈自研技术，将每一份重托安全、高效地送达目的地，是舜泰人永恒的追求。
              </p>
            </div>
            <div className="mt-10 flex items-center gap-12">
              <div>
                <div className="text-4xl font-black text-[#359EFF] mb-1">2016</div>
                <div className="text-sm text-slate-400 font-bold uppercase tracking-wider">技术基因萌发</div>
              </div>
              <div className="w-px h-12 bg-slate-100"></div>
              <div>
                <div className="text-4xl font-black text-[#359EFF] mb-1">90%+</div>
                <div className="text-sm text-slate-400 font-bold uppercase tracking-wider">核心部件自研</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl relative">
              <img 
                src="/images/hero-background.jpg" 
                className="w-full h-full object-cover" 
                alt="Brand Origin" 
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-10 rounded-3xl shadow-2xl border border-slate-50 max-w-sm z-20">
              <span className="material-symbols-outlined text-[#359EFF] text-5xl mb-6 opacity-30">format_quote</span>
              <p className="text-slate-700 italic font-bold text-lg leading-relaxed mb-6">
                “智能不是冷冰冰的算法，而是对每一环节作业安全的极致守护。”
              </p>
              <div className="text-sm font-black text-slate-900 tracking-wider">— 舜泰创始人</div>
            </div>
          </div>
        </div>
      </section>

      {/* Development History */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">发展纪实</h2>
            <p className="text-slate-500 font-medium">见证从底盘技术积累到全球领先智能叉车商的跨越</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 hidden lg:block"></div>
            
            <div className="space-y-12">
              {/* 2016 */}
              <div className="relative lg:flex lg:justify-between lg:items-center w-full">
                <div className="lg:w-[45%] text-right hidden lg:block pr-12">
                  <h3 className="text-3xl font-black text-[#359EFF] mb-4">2016</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">品牌初创，深耕特种车辆底盘技术研发，奠定工业移动基础。</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 size-4 rounded-full bg-[#359EFF] border-4 border-white z-10 hidden lg:block shadow-lg"></div>
                <div className="lg:w-[45%] lg:pl-12">
                  <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100">
                    <img src="/images/chassis-platform.jpg" className="w-full h-48 object-cover rounded-2xl" alt="2016" />
                  </div>
                </div>
              </div>

              {/* 2018 */}
              <div className="relative lg:flex lg:justify-between lg:items-center w-full">
                <div className="lg:w-[45%] lg:pr-12 order-2 lg:order-1">
                  <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100">
                    <img src="/images/logistics-solution.jpg" className="w-full h-48 object-cover rounded-2xl" alt="2018" />
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 size-4 rounded-full bg-[#359EFF] border-4 border-white z-10 hidden lg:block shadow-lg"></div>
                <div className="lg:w-[45%] pl-12 order-1 lg:order-2">
                  <h3 className="text-3xl font-black text-[#359EFF] mb-4">2018</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">进军AGV/AMR领域，首款工业级智能移动底盘平台正式下线。</p>
                </div>
              </div>

              {/* 2022-至今 */}
              <div className="relative lg:flex lg:justify-between lg:items-center w-full">
                <div className="lg:w-[45%] text-right hidden lg:block pr-12">
                  <h3 className="text-3xl font-black text-[#359EFF] mb-4">2022-至今</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">湖州总部启用，实现智能叉车全系列量产，加速全球产业化布局。</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 size-4 rounded-full bg-[#359EFF] border-4 border-white z-10 hidden lg:block shadow-lg"></div>
                <div className="lg:w-[45%] lg:pl-12">
                  <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100">
                    <img src="/images/smart-forklift.jpg" className="w-full h-48 object-cover rounded-2xl" alt="2022" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black mb-4 text-slate-900 tracking-tight">全球产业化布局</h2>
              <p className="text-slate-500 font-medium text-lg">以长三角为中心，辐射全球的生产与研发网络</p>
            </div>
            <div className="flex gap-8">
              <div className="flex items-center gap-2"><span className="size-3 rounded-full bg-[#359EFF]"></span> <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">总部 / 研发</span></div>
              <div className="flex items-center gap-2"><span className="size-3 rounded-full bg-slate-400"></span> <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">生产基地</span></div>
            </div>
          </div>
          
          <div className="relative aspect-video w-full bg-slate-100 rounded-[40px] overflow-hidden group shadow-2xl border border-slate-50">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=2000')] bg-center bg-cover opacity-20 grayscale"></div>
            
            {/* Markers */}
            <div className="absolute top-[45%] left-[78%] group/marker cursor-pointer">
              <div className="size-8 bg-[#359EFF]/20 rounded-full flex items-center justify-center animate-pulse">
                <div className="size-4 bg-[#359EFF] rounded-full shadow-[0_0_15px_#359EFF]"></div>
              </div>
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-56 p-6 bg-white rounded-2xl shadow-2xl border border-slate-50 opacity-0 group-hover/marker:opacity-100 transition-all pointer-events-none z-20">
                <div className="font-black text-[#359EFF] mb-2 text-lg">湖州总部</div>
                <div className="text-xs text-slate-500 font-medium">职能：全球管理中心、具身智能核心算法研发、整机总装测试。</div>
              </div>
            </div>

            <div className="absolute top-[38%] left-[76%] group/marker cursor-pointer">
              <div className="size-4 bg-slate-400 rounded-full border-2 border-white shadow-lg"></div>
            </div>

            <div className="absolute top-[46%] left-[74%] group/marker cursor-pointer">
              <div className="size-4 bg-[#359EFF]/60 rounded-full border-2 border-white shadow-lg"></div>
            </div>

            <div className="absolute bottom-8 left-8 text-slate-400 text-[10px] uppercase tracking-[0.4em] font-mono font-bold opacity-60">
              SYSTEM ACTIVE: GLOBAL NETWORK MONITORING...
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#359EFF] group relative py-24 overflow-hidden flex flex-col items-center justify-center text-center">
        <span className="material-symbols-outlined text-white/10 text-[20rem] absolute -right-20 -bottom-20 rotate-12 group-hover:scale-110 transition-transform duration-700 pointer-events-none">groups</span>
        <div className="relative z-10 max-w-2xl px-6">
          <h3 className="text-white text-4xl font-black mb-6 tracking-tighter">与舜泰共筑未来</h3>
          <p className="text-white/80 text-lg mb-12 font-medium">我们正在全球寻找对智能物流充满热忱的创新者。加入我们，共同定义下一个工业文明。</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/careers" className="w-full sm:w-auto">
              <button className="w-full bg-white text-[#359EFF] px-12 py-5 rounded-2xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105">
                查看开放职位
              </button>
            </Link>
            <Link to="/careers" className="w-full sm:w-auto">
              <button className="w-full bg-transparent border-2 border-white/40 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
                了解企业文化
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
