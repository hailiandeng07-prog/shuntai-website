
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState('智能叉车');
  const tabs = ['智能叉车', '物流一体化方案', '场景化服务'];

  const products = [
    {
      series: 'V-1500',
      tag: 'STACKER',
      title: 'V系列 智能托盘堆高车',
      load: '1.5 - 2.0 T',
      height: '4.5 M',
      path: '/products/v-series',
      img: '/images/smart-forklift.jpg'
    },
    {
      series: 'R-2000',
      tag: 'REACH TRUCK',
      title: 'R系列 智能前移式叉车',
      load: '2.0 T',
      height: '11.5 M',
      path: '#',
      img: '/images/logistics-solution.jpg'
    },
    {
      series: 'T-5000',
      tag: 'TRACTOR',
      title: 'T系列 智能牵引机器人',
      load: '5.0 - 20 T',
      height: '2.0 m/s',
      label: '最高行驶速度',
      path: '#',
      img: '/images/chassis-platform.jpg'
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-background-light">
      {/* Sub Navigation */}
      <section className="bg-white border-b border-slate-200 sticky top-20 z-40">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-center space-x-12 h-16">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`h-full px-4 font-bold text-sm transition-all relative ${
                  activeTab === tab 
                    ? 'text-[#359EFF] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#359EFF]' 
                    : 'text-slate-500 hover:text-[#359EFF]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Center */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-black tracking-tight mb-2 text-slate-900">产品中心</h2>
            <div className="h-1 w-12 bg-[#359EFF]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-[#359EFF]/30 transition-all duration-500">
                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                  <img src={p.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={p.title} />
                  <div className="absolute top-4 left-4 bg-[#359EFF]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-widest">
                    {p.tag}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight pr-4">{p.title}</h3>
                    <span className="text-[#359EFF] font-black text-sm shrink-0">{p.series}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <p className="text-[10px] text-slate-400 uppercase font-bold mb-1 tracking-wider">额定载重</p>
                      <p className="text-lg font-black text-slate-900">{p.load}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <p className="text-[10px] text-slate-400 uppercase font-bold mb-1 tracking-wider">{p.label || '最大提升高度'}</p>
                      <p className="text-lg font-black text-slate-900">{p.height}</p>
                    </div>
                  </div>
                  <Link to={p.path}>
                    <button className="w-full py-4 border border-slate-200 text-sm font-black text-slate-600 hover:bg-[#359EFF] hover:text-white hover:border-[#359EFF] transition-all rounded-xl">
                      查看技术详情
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture and Scenarios - Content remains, linked within sections */}

      {/* CTA Section */}
      <section className="bg-[#359EFF] py-24 text-center overflow-hidden relative">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-white">
          <h3 className="text-4xl font-black mb-10 tracking-tighter">准备好开启物流智能化转型了吗？</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <button className="w-full sm:w-auto bg-white text-[#359EFF] px-12 py-5 rounded-2xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105">
                索取产品白皮书
              </button>
            </Link>
            <Link to="/contact">
              <button className="w-full sm:w-auto bg-transparent border-2 border-white/40 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
                预约线下实地考察
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute -right-20 -bottom-20 size-96 bg-white/10 rounded-full blur-[100px]"></div>
      </section>
    </div>
  );
};

export default Products;
