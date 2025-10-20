import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/contexts/authContext';
import { toast } from 'sonner';

export default function IntranetLogin() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 定义有效的用户名和密码组合
  const validCredentials: Record<string, { password: string; role: string }> = {
    'lyl003': { password: '20240205', role: 'hr' },
    'wyg015': { password: 'xiaolongxia', role: 'warehouse' },
    'lms001': { password: 'PKU2010', role: 'engineer' },
    'mmm002': { password: 'hongye1616', role: 'receptionist' },
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validCredentials[username] && validCredentials[username].password === password) {
      const role = validCredentials[username].role;
      login(username);
      navigate(`/intranet/${role}`);
    } else {
      toast('用户名或密码错误');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      {/* 返回按钮 */}
      <div className="absolute top-4 left-4">
        <button 
          className="p-2 bg-white hover:bg-gray-100 rounded-full transition-colors shadow"
          onClick={handleBack}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">宏业电子厂内网系统</h1>
          <p className="text-gray-600 mt-2">请输入您的账号和密码</p>
        </div>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">用户名</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="请输入用户名"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">密码</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="请输入密码"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            登录
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <button 
            onClick={handleBack}
            className="text-blue-600 hover:underline"
          >
            返回上一页
          </button>
        </div>
      </div>
    </div>
  );
}