import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/factory-hall');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      {/* 返回按钮 */}
      <div className="absolute top-4 left-4">
        <button 
          className="p-2 bg-gray-800/70 hover:bg-gray-700 rounded-full transition-colors"
          onClick={handleBack}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">宏业电子厂解谜</h1>
      <p className="text-xl mb-4 text-center max-w-lg">探索宏业电子厂，解开隐藏的秘密</p>
      
      <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl max-w-2xl mb-12 text-gray-300 border border-gray-700 shadow-xl">
        <p className="text-center text-lg leading-relaxed">
          现在是2024年6月17日，你是一个收债人，你来宏业电子厂收债，但这里空无一人，且大门紧锁，需要密码才能逃出，你被困在了这里，通过探索解谜逃出这里吧。
        </p>
      </div>
      
      <button 
        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium transition-colors shadow-lg"
        onClick={startGame}
      >
        开始游戏
      </button>
    </div>
  );
}