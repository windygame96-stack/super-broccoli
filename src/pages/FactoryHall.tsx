import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function FactoryHall() {
  const navigate = useNavigate();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showEscapeSuccess, setShowEscapeSuccess] = useState(false);
  const [passwordAttempts, setPasswordAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleDoorClick = () => {
    if (isLocked) {
      toast('大门已被锁死，请尝试其他方式');
      return;
    }
    setShowPasswordModal(true);
  };

  const handleComputerClick = () => {
    navigate('/qiandu-search');
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const password = passwordInputRef.current?.value;
    
    if (password === '714025') {
      setShowPasswordModal(false);
      setShowEscapeSuccess(true);
    } else {
      const newAttempts = passwordAttempts + 1;
      setPasswordAttempts(newAttempts);
      
      if (newAttempts >= 10) {
        setIsLocked(true);
        setShowPasswordModal(false);
        toast('密码错误次数过多，大门已锁死');
      } else {
        toast(`密码错误，还有 ${10 - newAttempts} 次尝试机会`);
      }
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative min-h-screen bg-gray-800 p-4 overflow-hidden">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJWMThoMnYyem0tNCAwaC0ydi0yaDJ2MnptMC00aC0ydi0yaDJ2MnptMC00aC0yVjEwaDJ2MnptLTQgMGgtMnYtMmgydjJ6bTAtNGgtMnYtMmgydjJ6bTAtNGgtMlY2aDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* 返回按钮 */}
      <div className="absolute top-4 left-4 z-20">
        <button 
          className="p-2 bg-gray-700/80 hover:bg-gray-600 rounded-full transition-colors"
          onClick={handleBack}
        >
          <i className="fa-solid fa-arrow-left text-white"></i>
        </button>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">宏业电子厂大厅</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* 上锁的大门 */}
          <div 
            className={`bg-gray-700 rounded-lg p-6 cursor-pointer transition-all ${isLocked ? 'opacity-50' : 'hover:shadow-lg hover:shadow-red-900/20'}`}
            onClick={handleDoorClick}
          >
            <div className="h-40 bg-gray-600 rounded-lg mb-4 overflow-hidden relative group">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Abandoned%20factory%20door%20locked%20with%20chain%20and%20padlock%2C%20dark%20mysterious%20atmosphere%2C%20dusty%20environment&sign=267c5061a5e3f79353c63cecd745e04e" 
                alt="上锁的大门" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                工厂大门
              </div>
            </div>
            <h3 className="text-xl text-white font-semibold">上锁的大门</h3>
            <p className="text-gray-300 mt-2">需要密码才能打开</p>
          </div>
          
          {/* 前台电脑 */}
          <div 
            className="bg-gray-700 rounded-lg p-6 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-900/20"
            onClick={handleComputerClick}
          >
            <div className="h-40 bg-gray-600 rounded-lg mb-4 overflow-hidden relative group">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Abandoned%20office%20reception%20desk%20with%20computer%20on%20it%2C%20dust%20covered%2C%20mysterious%20lighting%2C%20empty%20factory%20environment&sign=52dcd365e2bc737db5143907468a56ad" 
                alt="前台电脑" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                前台桌面
              </div>
            </div>
            <h3 className="text-xl text-white font-semibold">前台电脑</h3>
            <p className="text-gray-300 mt-2">可以使用搜索引擎</p>
          </div>
        </div>
      </div>
      
      {/* 密码输入弹窗 */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold text-white mb-4">输入大门密码</h2>
            <form onSubmit={handlePasswordSubmit}>
              <input
                ref={passwordInputRef}
                type="password"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请输入6位数字密码"
                maxLength={6}
                autoFocus
              />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg text-white transition-colors"
                  onClick={() => setShowPasswordModal(false)}
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition-colors"
                >
                  确认
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* 脱出成功弹窗 */}
      {showEscapeSuccess && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full text-center">
            <h2 className="text-2xl font-bold text-green-500 mb-4">脱出成功！</h2>
            <p className="text-white mb-6">恭喜你解开了宏业电子厂的秘密！</p>
            <div className="bg-blue-900/30 p-4 rounded-lg mb-6">
              <p className="text-blue-300 mb-2">完整故事链接：</p>
              <a 
                href="/full-story" 
                className="text-blue-400 underline hover:text-blue-300 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/full-story');
                }}
              >
                宏业电子厂的秘密档案
              </a>
            </div>
            <button
              className="px-6 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-white transition-colors"
              onClick={() => setShowEscapeSuccess(false)}
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  );
}