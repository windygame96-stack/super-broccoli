import { useNavigate } from 'react-router-dom';

export default function CompanyWebsite() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 顶部导航 */}
      <div className="bg-blue-800 text-white p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">宏业电子厂</div>
          <button 
            onClick={handleBack}
            className="bg-white text-blue-800 px-4 py-1 rounded hover:bg-gray-100 transition-colors"
          >
            返回上一页
          </button>
        </div>
      </div>
      
      {/* 网站内容 */}
      <div className="max-w-5xl mx-auto p-6">
        {/* 公司简介 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-blue-800 pb-2 mb-4">公司简介</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700">宏业电子厂创建于2016年，是一家专注于电子设备制造的国有企业。公司拥有先进的生产设备和技术团队，致力于为客户提供高质量的电子产品和服务。</p>
            <p className="text-gray-700 mt-4">公司秉承"诚信、创新、卓越"的企业精神，不断提升产品质量和服务水平，赢得了广大客户的信赖和支持。</p>
          </div>
        </section>
        
        {/* 公司新闻 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-blue-800 pb-2 mb-4">公司新闻</h2>
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-lg">公司周年庆活动通知</h3>
              <p className="text-gray-600 mt-2">2024年5月17日</p>
              <p className="text-gray-700 mt-2">下周公司将举办周年庆活动，欢迎全体员工积极参与。具体活动安排将另行通知。</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-lg">公司获得行业奖项</h3>
              <p className="text-gray-600 mt-2">2024年4月20日</p>
              <p className="text-gray-700 mt-2">我公司在2024年度电子产品质量评比中获得"优秀企业"称号，这是对我们产品质量的肯定。</p>
            </div>
          </div>
        </section>
        
        {/* 人才招聘 */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-blue-800 pb-2 mb-4">人才招聘</h2>
           <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-6">
                <h3 className="font-bold text-lg">工程师</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>电子、计算机相关专业本科及以上学历</li>
                  <li>月薪¥18000起，根据技术能力灵活调整</li>
                  <li>熟悉电路设计与调试，有半导体行业经验者优先</li>
                  <li>具备良好的团队协作精神和创新能力</li>
                  <li>需通过专业技术笔试和面试</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="font-bold text-lg">仓库管理员</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>不卡学历，通过笔试即可</li>
                  <li>月薪¥13000起</li>
                  <li>责任心强，工作认真细致</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="font-bold text-lg">操作员</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>初中及以上学历，无不良记录</li>
                  <li>月薪¥9000-12000，根据绩效调整</li>
                  <li>身体健康，能适应倒班工作</li>
                  <li>有电子厂工作经验者优先</li>
                  <li>入职前需参加操作技能培训并考核合格</li>
                </ul>
              </div>
              <div className="mt-6">
                <p className="font-bold text-gray-700">HR联系方式：李玉铃</p>
                <p className="text-gray-700">Email：lyl003@hytech.com</p>
              </div>
             </div>
        </section>
        
        {/* 内网登录入口 */}
        <section className="mt-12 pt-8 border-t-2 border-blue-800">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">员工内网系统</h2>
            <p className="text-gray-600 mb-6">宏业电子厂内部员工请点击下方按钮登录内网系统</p>
            <button 
              onClick={() => navigate('/intranet/login')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
            >
              内网登录入口
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}