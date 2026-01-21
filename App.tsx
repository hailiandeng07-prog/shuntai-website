
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Technology from './pages/Technology';
import Cases from './pages/Cases';
import Careers from './pages/Careers';
import News from './pages/News';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '关于舜泰', path: '/about' },
    { name: '产品与解决方案', path: '/products' },
    { name: '技术与实力', path: '/technology' },
    { name: '应用案例', path: '/cases' },
    { name: '招贤纳士', path: '/careers' },
    { name: '新闻动态', path: '/news' },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-slate-200/60 bg-white/95 backdrop-blur-xl">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 bg-[#359EFF] rounded-lg flex items-center justify-center text-white shadow-md">
            <span className="material-symbols-outlined text-xl">precision_manufacturing</span>
          </div>
          <h1 className="text-xl font-black tracking-tight text-slate-900">舜泰汽车</h1>
        </Link>
        
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[14px] font-medium transition-all py-1 ${
                isActive(link.path) 
                  ? 'text-[#359EFF]' 
                  : 'text-slate-600 hover:text-[#359EFF]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link to="/contact">
            <button className="bg-[#359EFF] text-white px-7 py-2.5 rounded-xl text-sm font-bold hover:bg-[#359EFF]/90 transition-all shadow-lg shadow-[#359EFF]/20 active:scale-95 tracking-wide">
              联系我们
            </button>
          </Link>
          <Link to="/contact#consultation-form" className="text-slate-400 hover:text-[#359EFF] transition-colors flex items-center">
            <span className="material-symbols-outlined text-[32px] font-light">chat</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
    <div className="max-w-[1440px] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="size-8 bg-[#359EFF] rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-xl">precision_manufacturing</span>
            </div>
            <h2 className="text-xl font-black text-slate-900">舜泰汽车</h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-md mb-6">
            通过不断的创新和工程卓越，在具身智能自走自研领域引领世界。我们致力于为工业物流提供更高效、更安全的智能化全栈解决方案。
          </p>
        </div>
        
        <div className="lg:col-span-3">
          <h4 className="font-bold text-slate-900 mb-6">产品中心</h4>
          <ul className="space-y-3 text-sm text-slate-500">
            <li><Link to="/products/v-series" className="hover:text-[#359EFF]">V系列托盘堆高车</Link></li>
            <li><Link to="/products" className="hover:text-[#359EFF]">R系列前移式叉车</Link></li>
            <li><Link to="/products" className="hover:text-[#359EFF]">T系列牵引车</Link></li>
            <li><Link to="/products" className="hover:text-[#359EFF]">车队调度系统 Pro</Link></li>
          </ul>
        </div>
        
        <div className="lg:col-span-3">
          <h4 className="font-bold text-slate-900 mb-6">关于公司</h4>
          <ul className="space-y-3 text-sm text-slate-500">
            <li><Link to="/about" className="hover:text-[#359EFF]">关于舜泰</Link></li>
            <li><Link to="/technology" className="hover:text-[#359EFF]">研发实力</Link></li>
            <li><Link to="/careers" className="hover:text-[#359EFF]">可持续发展</Link></li>
            <li><Link to="/contact" className="hover:text-[#359EFF]">联系我们</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-400">© 2024 浙江舜泰汽车有限公司 版权所有。</p>
        <div className="flex gap-6 text-xs text-slate-400">
          <a href="#" className="hover:text-slate-900">隐私条款</a>
          <a href="#" className="hover:text-slate-900">服务条款</a>
          <a href="#" className="hover:text-slate-900">法律信息</a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/v-series" element={<ProductDetail />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
