import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/authContext';

export default function ReceptionistPage() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate('/intranet/login');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 顶部导航 */}
      <div className="bg-blue-800 text-white p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">宏业电子厂内网 - 前台系统</div>
          <div className="flex gap-4">
            <button 
              onClick={handleBack}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-1 rounded transition-colors"
            >
              <i className="fa-solid fa-arrow-left mr-1"></i>返回上一页
            </button>
            <button 
              onClick={handleLogout}
              className="bg-white text-blue-800 px-4 py-1 rounded hover:bg-gray-100 transition-colors"
            >
              退出登录
            </button>
          </div>
        </div>
      </div>
      
      {/* 内容区域 */}
      <div className="max-w-5xl mx-auto p-6">
        {/* 工作手册 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">工作手册</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="mb-4">
              <p className="text-gray-700 font-semibold">大门密码提示：</p>
  <p className="text-gray-700 mt-2 bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
    我们厂的幸运数字 ^ (禁忌数字/2) / (禁忌数字/2) * 100
  </p>
            </div>
            
            <div>
              <p className="text-gray-700">
                前台接待工作流程：
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                <li>热情接待来访人员</li>
                <li>登记访客信息</li>
                <li>引导访客到相应部门</li>
                <li>处理日常办公事务</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* 邮件收件箱 */}
        <section>
          <h2 className="text-xl font-bold mb-4">邮件收件箱</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="divide-y divide-gray-200">
              {/* 失物招领记录 */}
              <div className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">失物招领记录</h3>
                  <span className="text-gray-500 text-sm">2024-05-21</span>
                </div>
                <p className="text-gray-700">
                  2024 年 5 月 21 日，收到灰色金属块 1 块，暂存前台抽屉。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}