
import React, { useState } from 'react';

const Careers: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('研发中心');
  const [expandedJobIndex, setExpandedJobIndex] = useState<number | null>(0);

  const categories = [
    { name: '研发中心', count: 12 },
    { name: '智能制造', count: 8 },
    { name: '职能管理', count: 5 },
    { name: '市场与营销', count: 6 },
  ];

  const expertTeam = [
    {
      role: '首席科学家',
      name: 'Dr. Zhang',
      desc: '清华大学博士，前知名德系车企自动驾驶首席专家。拥有 15 年机器人视觉与多模态感知研究经验，主导研发舜泰自研 3D SLAM 算法。',
      tags: ['清华大学', 'IEEE Fellow'],
      img: '/images/petrochemical-case.jpg'
    },
    {
      role: '底盘工程专家',
      name: 'Liu Ming',
      desc: '哈尔滨工业大学硕士，深耕工业机器人底盘领域 12 年。曾就职于全球头部起重机械公司，擅长重载平台与液压精密控制系统研发。',
      tags: ['哈工大', '工业设计大奖'],
      img: '/images/automotive-case.jpg'
    },
    {
      role: '人工智能架构师',
      name: 'Sarah Wang',
      desc: '卡内基梅隆大学 (CMU) 访问学者。专注于决策规划算法，将强化学习应用于复杂动态环境下的群体机器人调度系统。',
      tags: ['CMU Scholar', 'AI 实验室负责人'],
      img: '/images/cold-chain-case.jpg'
    }
  ];

  const jobs = [
    {
      id: 0,
      title: '感知算法工程师 (SLAM/Lidar)',
      loc: '浙江 · 嘉兴',
      exp: '3-5年经验',
      edu: '硕士及以上',
      pay: '25k - 45k',
      bonus: '14 - 16薪',
      isHot: true,
      category: '研发中心',
      responsibilities: '负责具身智能机器人的感知/控制算法研发、多传感器融合、现场系统调优等。',
      requirements: ['相关专业硕士及以上学历；', '精通C++/Python；', '熟悉ROS或自动驾驶相关架构；', '具有3年以上相关工作经验者优先。']
    },
    {
      id: 1,
      title: '嵌入式软件开发专家 (域控制器)',
      loc: '浙江 · 嘉兴',
      exp: '5-10年经验',
      edu: '本科及以上',
      pay: '30k - 60k',
      bonus: '15 - 18薪 + 期权',
      isHot: false,
      category: '研发中心',
      responsibilities: '主导自研高性能域控制器的底层驱动与中间件开发，确保控制指令毫秒级准时执行。',
      requirements: ['电子工程或计算机相关专业本科及以上；', '精通RTOS或嵌入式Linux开发；', '熟悉CAN/Automotive Ethernet协议。']
    },
    {
      id: 2,
      title: 'ROS 机器人系统开发',
      loc: '浙江 · 嘉兴',
      exp: '1-3年经验',
      edu: '本科',
      pay: '18k - 30k',
      bonus: '13薪',
      isHot: false,
      category: '研发中心',
      responsibilities: '参与机器人整机系统架构设计与中间件优化，保障系统稳定性。',
      requirements: ['精通C++，熟悉ROS/ROS2框架；', '具备工业机器人或搬运设备开发经验。']
    }
  ];

  const filteredJobs = jobs.filter(job => job.category === activeCategory);

  const toggleJob = (index: number) => {
    setExpandedJobIndex(expandedJobIndex === index ? null : index);
  };

  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-background.jpg" 
            className="w-full h-full object-cover" 
            alt="Hero Background" 
          />
          <div className="absolute inset-0 bg-[#0a1118]/70"></div>
        </div>
        
        <div className="max-w-4xl relative z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">制造真正落地的机器人</h1>
          <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
            我们拒绝华而不实的技术堆砌，深耕务实的技术价值观。<br/>
            加入舜泰，将领先的具身智能理论转化为改变物流行业的硬核生产力。
          </p>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">与顶尖头脑同行</h2>
              <p className="text-slate-500 text-lg font-medium">我们的核心团队来自全球顶尖学府及行业领军企业，共同攻克具身智能尖端课题。</p>
            </div>
            <div className="flex gap-4">
              <button className="size-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all text-slate-400">
                <span className="material-symbols-outlined text-xl">chevron_left</span>
              </button>
              <button className="size-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all text-slate-400">
                <span className="material-symbols-outlined text-xl">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertTeam.map((expert, i) => (
              <div key={i} className="relative h-[450px] rounded-[32px] overflow-hidden group shadow-2xl">
                <img src={expert.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={expert.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <span className="text-[#359EFF] font-black text-xs tracking-widest uppercase mb-2">{expert.role}</span>
                  <h3 className="text-2xl font-black mb-4 tracking-tight">{expert.name}</h3>
                  <p className="text-slate-300 text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                    {expert.desc}
                  </p>
                  <div className="flex gap-3">
                    {expert.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Listing Section */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">热招职位</h2>
            <p className="text-slate-500 font-medium">寻找志同道合的你，共同定义智能物流新标准</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Categories Sidebar */}
            <div className="lg:col-span-3 space-y-3">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`w-full text-left px-8 py-5 rounded-2xl font-black text-sm tracking-widest uppercase transition-all flex items-center justify-between ${
                    activeCategory === cat.name
                      ? 'bg-[#359EFF] text-white shadow-xl shadow-[#359EFF]/30 border border-[#359EFF]'
                      : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'
                  }`}
                >
                  {cat.name} ({cat.count})
                  {activeCategory === cat.name && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
                </button>
              ))}
              
              <div className="mt-12 p-8 bg-[#359EFF]/5 rounded-[32px] border border-[#359EFF]/10">
                <h4 className="text-[#359EFF] font-black text-sm tracking-widest uppercase mb-4">未找到匹配职位？</h4>
                <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6">发送简历到人才库，我们将优先为您匹配合适的机会。</p>
                <a href="mailto:hr@shuntai.com" className="inline-flex items-center gap-2 text-[#359EFF] font-black text-xs tracking-widest uppercase group">
                  投递简历 <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">mail</span>
                </a>
              </div>
            </div>

            {/* Job Cards */}
            <div className="lg:col-span-9 space-y-4">
              {filteredJobs.length > 0 ? filteredJobs.map((job, i) => (
                <div key={job.id} className="group overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-sm transition-all hover:border-[#359EFF]/30">
                  <div 
                    onClick={() => toggleJob(i)}
                    className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <h4 className="text-xl font-black text-slate-900 group-hover:text-[#359EFF] transition-colors">{job.title}</h4>
                        {job.isHot && <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-black tracking-widest uppercase rounded">Hot</span>}
                      </div>
                      <div className="flex flex-wrap gap-6 text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
                        <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">location_on</span> {job.loc}</span>
                        <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">work_outline</span> {job.exp}</span>
                        <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">school</span> {job.edu}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-end gap-8">
                      <div className="text-right">
                        <div className="text-2xl font-black text-[#359EFF] tracking-tighter mb-1">{job.pay}</div>
                        <div className="text-[10px] font-black text-slate-400 tracking-widest uppercase">{job.bonus}</div>
                      </div>
                      <span className={`material-symbols-outlined text-slate-300 transition-transform duration-300 ${expandedJobIndex === i ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    </div>
                  </div>
                  
                  {/* Accordion Details */}
                  <div className={`transition-all duration-500 overflow-hidden ${expandedJobIndex === i ? 'max-h-[800px] border-t border-slate-50 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-10 pt-2 space-y-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                          <h5 className="flex items-center gap-2 text-sm font-black text-slate-900 tracking-tight">
                            <span className="size-1.5 rounded-full bg-[#359EFF]"></span>
                            岗位职责
                          </h5>
                          <p className="text-slate-500 text-sm font-medium leading-relaxed">
                            {job.responsibilities}
                          </p>
                        </div>
                        <div className="space-y-4">
                          <h5 className="flex items-center gap-2 text-sm font-black text-slate-900 tracking-tight">
                            <span className="size-1.5 rounded-full bg-[#359EFF]"></span>
                            任职要求
                          </h5>
                          <ul className="text-slate-500 text-sm font-medium leading-relaxed list-disc list-inside space-y-2">
                            {job.requirements.map((req, ri) => <li key={ri}>{req}</li>)}
                          </ul>
                        </div>
                      </div>
                      <div className="flex justify-end pt-6 border-t border-slate-50">
                        <button className="px-12 py-4 bg-[#359EFF] text-white rounded-xl font-black text-sm tracking-[0.2em] uppercase shadow-xl shadow-[#359EFF]/20 hover:scale-[1.02] transition-all">
                          立即申请职位
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="bg-white p-20 rounded-[40px] text-center border border-slate-100">
                   <span className="material-symbols-outlined text-6xl text-slate-200 mb-6">search_off</span>
                   <p className="text-slate-400 font-bold">该部门暂无在招职位，敬请期待。</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / Culture Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-12 leading-tight">在这里，你不仅仅是在工作</h2>
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="size-16 rounded-[24px] bg-[#359EFF]/5 flex items-center justify-center shrink-0 text-[#359EFF] group-hover:bg-[#359EFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-4xl">school</span>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">舜泰学院 & 专家研讨会</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    定期邀请清华、哈工大名师举办技术研讨，支持员工参加国际顶尖 AI 峰会，学费全额报销，助力专业深度进阶。
                  </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="size-16 rounded-[24px] bg-[#359EFF]/5 flex items-center justify-center shrink-0 text-[#359EFF] group-hover:bg-[#359EFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">国家级实训基地</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    拥有占地 5000㎡ 的智能物流实训场，提供最前沿的传感器、雷达及底盘设备，让每一行代码都能在实体机器上实时验证。
                  </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="size-16 rounded-[24px] bg-[#359EFF]/5 flex items-center justify-center shrink-0 text-[#359EFF] group-hover:bg-[#359EFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-4xl">celebration</span>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">极客文化与丰富活动</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    每年一度的“地平线挑战赛”、黑客松，以及丰富的团建活动。我们倡导扁平化管理，尊重每一位极客的创造力。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-[32px] overflow-hidden h-64 shadow-xl">
                <img src="/images/logistics-solution.jpg" className="w-full h-full object-cover" alt="Workshop" />
              </div>
              <div className="rounded-[32px] overflow-hidden h-44 shadow-xl">
                <img src="/images/smart-forklift.jpg" className="w-full h-full object-cover" alt="Testing Field" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="rounded-[32px] overflow-hidden h-44 shadow-xl">
                <img src="/images/chassis-platform.jpg" className="w-full h-full object-cover" alt="Office" />
              </div>
              <div className="rounded-[32px] overflow-hidden h-64 shadow-xl">
                <img src="/images/smart-forklift.jpg" className="w-full h-full object-cover" alt="Seminar" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-[#359EFF] overflow-hidden relative group text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[400px] absolute -right-20 -bottom-40 rotate-12 group-hover:scale-110 transition-transform duration-1000">rocket_launch</span>
        </div>
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-white">
          <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter">准备好加入智能物流革命了吗？</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto min-w-[240px] bg-white text-[#359EFF] py-5 px-12 rounded-2xl font-black text-xl hover:shadow-2xl hover:scale-105 transition-all">
              浏览所有职位
            </button>
            <button className="w-full sm:w-auto min-w-[240px] bg-slate-900/20 backdrop-blur-md border border-white/30 text-white py-5 px-12 rounded-2xl font-black text-xl hover:bg-white/10 transition-all">
              咨询 HR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
