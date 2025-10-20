import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function QianduSearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{title: string, url: string, desc: string}>>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    let results: Array<{title: string, url: string, desc: string}> = [];
    
    switch (searchTerm.toLowerCase()) {
      case '宏业电子厂':
        results = [
          {
            title: '宏业电子厂 - 官方网站',
            url: '/company-website',
            desc: '宏业电子厂创建于2016年，是一家专注于电子设备制造的国有企业。'
          }
        ];
        break;
      case '李玉铃':
        results = [
          {
            title: '李玉铃 - 天天网个人主页',
            url: '/profile/lyl',
            desc: '宏业电子厂HR经理，负责招聘和员工管理。'
          }
        ];
        break;
      case '王永贵':
        results = [
          {
            title: '王永贵 - 天天网个人主页',
            url: '/profile/wyg',
            desc: '宏业电子厂仓库管理员，负责材料管理和配送。'
          }
        ];
        break;
      case '刘铭书':
        results = [
          {
            title: '刘铭书 - 天天网个人主页',
            url: '/profile/lms',
            desc: '宏业电子厂高级工程师，负责技术研发。'
          }
        ];
        break;
      default:
        results = [
          {
            title: '未找到相关结果',
            url: '#',
            desc: '请尝试其他关键词，如：宏业电子厂、李玉铃、王永贵、刘铭书'
          }
        ];
    }
    
    setSearchResults(results);
    setShowResults(true);
  };

  const handleResultClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(url);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* 返回按钮 */}
        <div className="absolute top-4 left-4">
          <button 
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
            onClick={handleBack}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </div>
        
        {/* 模拟2010年代百度风格 */}
        <div className="pt-16 pb-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-4xl font-bold text-blue-600">千</span>
            <span className="text-4xl font-bold text-red-500">度</span>
          </div>
          
          <form onSubmit={handleSearch} className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-4 pr-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="在千度搜索..."
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-6 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
              >
                搜索
              </button>
            </div>
          </form>
        </div>
        
        {/* 搜索结果 */}
        {showResults && (
          <div className="max-w-xl mx-auto mt-8 bg-white p-6 rounded-lg shadow">
            {searchResults.map((result, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <a 
                  href={result.url}
                  onClick={(e) => handleResultClick(result.url, e)}
                  className="text-blue-600 hover:underline"
                >
                  <h3 className="text-xl font-medium">{result.title}</h3>
                </a>
                <p className="text-gray-600 mt-1">{result.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}