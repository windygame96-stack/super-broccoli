import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/authContext';

export default function HREmployeePage() {
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
          <div className="text-xl font-bold">宏业电子厂内网 - HR管理系统</div>
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
            <div className="mb-4"><h3 className="font-bold">仓库管理员岗位要求：</h3>
              <ul className="list-decimal list-inside mt-2 space-y-1 text-gray-700">
                <li>数学能力越差越好</li>
                <li>生日在 13 日优先</li>
                <li>生日不能在每月 【被删除】 日</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold">工程师岗位要求：</h3>
              <ul className="list-decimal list-inside mt-2 space-y-1 text-gray-700">
                <li>电子工程相关专业背景</li>
                <li>熟悉电路设计和调试</li>
                <li>有团队协作精神</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold">操作员岗位要求：</h3>
              <ul className="list-decimal list-inside mt-2 space-y-1 text-gray-700">
                <li>身体健康，能适应倒班</li>
                <li>工作认真负责</li>
                <li>服从管理安排</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* 邮件发件箱 */}
        <section>
          <h2 className="text-xl font-bold mb-4">邮件发件箱</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="divide-y divide-gray-200">
              {/* 邮件1 */}
              <div className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">offer 通知邮件 1</h3>
                  <span className="text-gray-500 text-sm">2024-01-10</span>
                </div>
                <p className="text-gray-700">
                  恭喜王永贵入职仓库管理员岗位，内网 ID：wyg015，初始密码：hongye1616，入职日期：2024 年 1 月 15 日，入职后请尽快更改初始密码。
                </p>
              </div>
              
              {/* 邮件2 */}
              <div className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">offer 通知邮件 2</h3>
                  <span className="text-gray-500 text-sm">2024-04-20</span>
                </div>
                <p className="text-gray-700">
                  恭喜莫萌萌入职前台岗位，内网 ID：mmm002，初始密码：hongye1616，入职日期：2024 年 4 月 23 日，入职后请尽快更改初始密码。
                </p>
              </div>
              
              {/* 邮件3 */}
              <div className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">群发邮件</h3>
                  <span className="text-gray-500 text-sm">2024-05-15</span>
                </div>
                <p className="text-gray-700">
                  通知：5 月 21 日 16 点，请全体员工到门口广场集合拍摄公司周年庆合照，不得缺席。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}