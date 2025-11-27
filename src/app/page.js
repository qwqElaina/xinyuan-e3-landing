import Image from "next/image";

// 主页组件
export default function Home() {
  return (
    // <main> 容器：设置最小高度和白色背景
    <main className="min-h-screen bg-white font-sans">
      
      {/* 1. 导航栏 (Navbar) */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="text-2xl font-bold text-red-600">鑫源汽车</div>
        <div className="space-x-8 hidden md:flex text-gray-700 font-semibold">
          <a href="#" className="hover:text-red-600 transition">探索车型</a>
          <a href="#" className="hover:text-red-600 transition">购车支持</a>
          <a href="#" className="hover:text-red-600 transition">新闻中心</a>
        </div>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition shadow-md">
          预约试驾
        </button>
      </nav>

      {/* 2. Hero 首屏大图/主宣传区 - 展示 E3 的核心卖点 */}
      <section className="relative h-[80vh] bg-gray-900 flex items-center justify-center overflow-hidden">
        
        {/* **新增**：汽车图片作为背景 */}
        {/* Next.js 的 Image 组件会自动优化图片性能 */}
        <div className="absolute inset-0 z-0">
          // src/app/page.js
// ...
          <Image
            src="/images/hero-car.png" // **此处已更改为 .png**
            alt="鑫源E3 汽车高清图片"
            fill
            priority
// ...
            style={{ objectFit: 'cover' }} // 确保图片覆盖容器
            className="opacity-70 transition duration-500 ease-in-out hover:opacity-100" // 添加一些透明度，让文字更突出，并添加悬浮效果
          />
        </div>
        
        {/* 标题和按钮 (保持在图片上方) */}
        <div className="text-center z-10 px-4 relative"> {/* 确保文字在图片上方 (z-index) */}
          <h2 className="text-sm font-bold tracking-widest text-red-500 mb-4 uppercase">鑫源 E3 | 安逸，好大方</h2>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            即刻出发，即刻拥有
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            7.5立方超大空间，全新宁德时代动力电池，为您带来高效运输体验。
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-red-600 text-white px-10 py-3 rounded-md hover:bg-red-700 transition duration-300 text-lg font-medium shadow-xl transform hover:scale-105">
              立即预订
            </button>
            <button className="border-2 border-white text-white px-10 py-3 rounded-md hover:bg-white hover:text-gray-900 transition duration-300 text-lg font-medium transform hover:scale-105">
              参数配置
            </button>
          </div>
        </div>
      </section>
      
      {/*... 其余代码不变 ...*/}
      {/* 3. 产品亮点部分 (Features) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">核心优势</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* 亮点卡片 1 */}
          <FeatureCard title="越级空间" description="7.5m³ 内部容积，同级别领先，装载无忧。" icon="🚚" />
           {/* 亮点卡片 2 */}
           <FeatureCard title="超长续航" description="宁德时代动力电池，一次充电，畅行无忧。" icon="🔋" />
           {/* 亮点卡片 3 */}
           <FeatureCard title="智能快充" description="直流快充技术，休息片刻即可快速补能。" icon="🔌" />
        </div>
      </section>

      {/* 4. 底部版权信息 (Footer) */}
      <footer className="bg-gray-900 text-white py-8 mt-10">
        <div className="max-w-7xl mx-auto text-center text-sm opacity-75">
          © 2025 鑫源汽车官网 - 鑫源 E3 | 技术练习项目
        </div>
      </footer>
    </main>
  );
}

// 辅助组件：方便复用亮点卡片
const FeatureCard = ({ title, description, icon }) => (
    <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
        <div className="text-4xl text-red-600 mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);