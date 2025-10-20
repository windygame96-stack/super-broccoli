import { useNavigate } from 'react-router-dom';

export default function LMSProfile() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* 顶部导航 */}
      <div className="bg-[#3B78E7] text-white p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">天天网</div>
          <button 
            onClick={handleBack}
            className="bg-white text-[#3B78E7] px-4 py-1 rounded hover:bg-gray-100 transition-colors"
          >
            返回上一页
          </button>
        </div>
      </div>
      
      {/* 个人主页内容 */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-6 overflow-hidden">
        {/* 个人信息 */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-6">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20a%20Chinese%20man%20in%20his%2030s%2C%20serious%20expression%2C%20glasses%2C%20laboratory%20coat&sign=a88b5a24163169eed86d9997a34873db" 
              alt="刘铭书" 
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div>
              <h1 className="text-2xl font-bold">刘铭书</h1>
              <p className="text-gray-600 mt-1">宏业电子厂 高级工程师</p>
              <p className="text-gray-600 mt-1">2010年毕业于 PK大电子工程实验班</p>
            </div>
          </div>
          
          {/* 个人简介 */}
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">个人简介</h3>
            <p className="text-gray-700">专注于特殊材料研究与开发，拥有丰富的实验室经验。致力于推动电子材料领域的创新与突破。</p>
          </div>
        </div>
        
        {/* 无动态提示 */}
        <div className="p-12 text-center">
          <div className="mb-6">
            <i className="fa-solid fa-user-circle text-7xl text-gray-300"></i>
          </div>
          <p className="text-gray-500 text-lg">该用户暂无动态</p>
          <p className="text-gray-400 mt-2">可能是一位低调的技术专家</p>
        </div>
        
        {/* 个人成就 */}
        <div className="p-6 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-4">研究领域</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-700">特殊材料</h4>
              <p className="text-gray-700 text-sm mt-1">新型金属材料研究</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-700">半导体</h4>
              <p className="text-gray-700 text-sm mt-1">半导体特性研究</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-purple-700">实验室管理</h4>
              <p className="text-gray-700 text-sm mt-1">特殊物品收容与管理</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}