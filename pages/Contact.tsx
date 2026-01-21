
import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-[#f9fafb]">
      {/* Page Header & Intro */}
      <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#eff6ff] border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-slate-900">联系我们</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            无论您是寻求技术方案、商务合作还是售后支持，我们的专业团队都将为您提供全方位响应。
          </p>
        </div>
      </section>

      {/* Main Content: Form & Info */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Consultation Form */}
            <div id="consultation-form" className="lg:col-span-7 bg-white rounded-[32px] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 scroll-mt-24">
              <h3 className="text-2xl font-black mb-8 text-slate-900">在线咨询</h3>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">姓名</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-[#359EFF] focus:border-transparent outline-none transition-all" 
                      placeholder="请输入您的姓名" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">所属行业</label>
                    <select className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-[#359EFF] focus:border-transparent outline-none transition-all">
                      <option>请选择所属行业</option>
                      <option>汽车制造</option>
                      <option>石油化工</option>
                      <option>电商物流</option>
                      <option>医药食品</option>
                      <option>其他</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">咨询意向</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['产品采购', '方案定制', '商务代理', '其他'].map((intent) => (
                      <label key={intent} className="cursor-pointer group">
                        <input type="radio" name="intent" className="hidden peer" />
                        <div className="text-center py-3.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-500 peer-checked:bg-[#359EFF] peer-checked:text-white peer-checked:border-[#359EFF] group-hover:border-[#359EFF]/50 transition-all">
                          {intent}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">留言详情</label>
                  <textarea 
                    className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-[#359EFF] focus:border-transparent outline-none transition-all resize-none" 
                    placeholder="请简要描述您的需求..." 
                    rows={4}
                  ></textarea>
                </div>

                <button className="w-full bg-[#359EFF] text-white py-5 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-[#359EFF]/30 transition-all active:scale-[0.98]">
                  提交申请
                </button>
              </form>
            </div>

            {/* Right: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-8">
              {/* Hotline Card */}
              <div className="bg-[#359EFF]/5 border border-[#359EFF]/20 rounded-[32px] p-10">
                <div className="flex items-center gap-5 mb-6">
                  <div className="size-14 rounded-2xl bg-[#359EFF] flex items-center justify-center text-white shadow-lg shadow-[#359EFF]/20">
                    <span className="material-symbols-outlined text-3xl">headset_mic</span>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-[#359EFF] tracking-[0.2em] uppercase mb-1">服务热线</h4>
                    <p className="text-3xl font-black text-slate-900 tracking-tighter">400-XXX-XXXX</p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  7×24小时在线，竭诚为您提供咨询及技术支持服务。
                </p>
              </div>

              {/* Address List */}
              <div className="space-y-8 px-4">
                <div className="flex gap-5 group">
                  <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center text-[#359EFF] shrink-0 group-hover:bg-[#359EFF] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-xl">location_on</span>
                  </div>
                  <div>
                    <h5 className="font-black text-slate-900 mb-1">湖州总部基地</h5>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">浙江省湖州市长兴县国家级经济技术开发区舜泰路1号</p>
                  </div>
                </div>
                <div className="flex gap-5 group">
                  <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center text-[#359EFF] shrink-0 group-hover:bg-[#359EFF] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-xl">factory</span>
                  </div>
                  <div>
                    <h5 className="font-black text-slate-900 mb-1">华东制造中心</h5>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">江苏省苏州市相城区智能制造产业园8号楼</p>
                  </div>
                </div>
                <div className="flex gap-5 group">
                  <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center text-[#359EFF] shrink-0 group-hover:bg-[#359EFF] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-xl">hub</span>
                  </div>
                  <div>
                    <h5 className="font-black text-slate-900 mb-1">海外研发中心</h5>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">德国慕尼黑智能机器人研究基地</p>
                  </div>
                </div>
              </div>

              {/* Social Matrix */}
              <div className="pt-10 border-t border-slate-200">
                <h5 className="font-black text-slate-900 mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#359EFF] text-xl">share</span>
                  社交矩阵
                </h5>
                <div className="flex gap-10">
                  <div className="text-center group cursor-pointer">
                    <div className="size-24 bg-white p-2.5 rounded-2xl border border-slate-200 mb-3 group-hover:border-[#359EFF] transition-colors shadow-sm overflow-hidden flex items-center justify-center">
                      <div className="w-full h-full bg-slate-50 rounded-lg flex items-center justify-center">
                         <span className="material-symbols-outlined text-slate-200 text-4xl">qr_code_2</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">官方公众号</span>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="size-24 bg-white p-2.5 rounded-2xl border border-slate-200 mb-3 group-hover:border-[#359EFF] transition-colors shadow-sm overflow-hidden flex items-center justify-center">
                      <div className="w-full h-full bg-slate-50 rounded-lg flex items-center justify-center">
                         <span className="material-symbols-outlined text-slate-200 text-4xl">qr_code_2</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">官方领英</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Tiles */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/contact#consultation-form" className="group flex items-center justify-between p-10 bg-slate-50 rounded-[32px] hover:bg-[#359EFF] transition-all duration-500 shadow-sm border border-slate-100">
              <div className="flex items-center gap-6">
                <div className="size-16 rounded-full bg-white flex items-center justify-center text-[#359EFF] shadow-sm">
                  <span className="material-symbols-outlined text-3xl">description</span>
                </div>
                <div>
                  <h4 className="font-black text-xl text-slate-900 group-hover:text-white transition-colors">获取方案</h4>
                  <p className="text-sm text-slate-500 font-medium group-hover:text-white/80 transition-colors">定制化物流自动化设计</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-300 group-hover:text-white group-hover:translate-x-2 transition-all">arrow_forward</span>
            </Link>
            
            <Link to="/careers" className="group flex items-center justify-between p-10 bg-slate-50 rounded-[32px] hover:bg-[#359EFF] transition-all duration-500 shadow-sm border border-slate-100">
              <div className="flex items-center gap-6">
                <div className="size-16 rounded-full bg-white flex items-center justify-center text-[#359EFF] shadow-sm">
                  <span className="material-symbols-outlined text-3xl">person_add</span>
                </div>
                <div>
                  <h4 className="font-black text-xl text-slate-900 group-hover:text-white transition-colors">加入我们</h4>
                  <p className="text-sm text-slate-500 font-medium group-hover:text-white/80 transition-colors">共建具身智能未来</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-300 group-hover:text-white group-hover:translate-x-2 transition-all">arrow_forward</span>
            </Link>
            
            <button className="group flex items-center justify-between p-10 bg-slate-50 rounded-[32px] hover:bg-[#359EFF] transition-all duration-500 shadow-sm border border-slate-100 text-left">
              <div className="flex items-center gap-6">
                <div className="size-16 rounded-full bg-white flex items-center justify-center text-[#359EFF] shadow-sm">
                  <span className="material-symbols-outlined text-3xl">build</span>
                </div>
                <div>
                  <h4 className="font-black text-xl text-slate-900 group-hover:text-white transition-colors">售后申请</h4>
                  <p className="text-sm text-slate-500 font-medium group-hover:text-white/80 transition-colors">专业维保，快速响应</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-300 group-hover:text-white group-hover:translate-x-2 transition-all">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Geolocation Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">地理位置导航</h2>
              <p className="text-slate-500 font-medium">湖州总部交通指引及周边设施</p>
            </div>
            <button className="flex items-center gap-2 text-[#359EFF] font-black text-sm tracking-widest uppercase group">
              打开第三方地图导航
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">map</span>
            </button>
          </div>

          <div className="relative w-full h-[600px] rounded-[48px] overflow-hidden shadow-2xl border border-slate-100 group">
            {/* Map Placeholder with gray filter as per original style */}
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale-[0.8] contrast-[1.1]" 
              style={{ backgroundImage: 'url("/images/hero-background.jpg")' }}
            ></div>
            
            {/* Overlay Grid/Blue tint */}
            <div className="absolute inset-0 bg-[#359EFF]/5 pointer-events-none"></div>

            {/* Map Pin */}
            <div className="absolute top-[45%] left-[46%] -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 size-12 rounded-full bg-[#359EFF]/30 animate-ping"></div>
                <div className="relative size-12 rounded-full bg-[#359EFF] flex items-center justify-center text-white border-4 border-white shadow-2xl">
                  <span className="material-symbols-outlined text-2xl">home</span>
                </div>
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-56 bg-white p-6 rounded-2xl shadow-2xl opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none border border-slate-50">
                <p className="font-black text-slate-900 mb-1">舜泰总部基地</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">长兴县国家级开发区<br/>核心作业区</p>
              </div>
            </div>

            {/* Map Controls */}
            <div className="absolute bottom-8 left-8 flex flex-col gap-3">
              <button className="size-12 bg-white rounded-xl shadow-xl flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-600">
                <span className="material-symbols-outlined">add</span>
              </button>
              <button className="size-12 bg-white rounded-xl shadow-xl flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-600">
                <span className="material-symbols-outlined">remove</span>
              </button>
            </div>

            {/* Transportation Card */}
            <div className="absolute top-10 right-10 w-80 bg-white/95 backdrop-blur-md p-8 rounded-[32px] border border-white/20 shadow-2xl">
              <h5 className="font-black text-slate-900 mb-6 tracking-tight flex items-center gap-2">
                 <span className="material-symbols-outlined text-[#359EFF]">commute</span>
                 交通指引
              </h5>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="size-10 rounded-xl bg-blue-50 text-[#359EFF] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">directions_car</span>
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-900 mb-0.5">自驾出行</p>
                    <p className="text-[10px] text-slate-400 font-bold tracking-wider uppercase">G25杭宁高速长兴出口即达</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">train</span>
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-900 mb-0.5">高铁站</p>
                    <p className="text-[10px] text-slate-400 font-bold tracking-wider uppercase">长兴站/长兴南站15分钟车程</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
