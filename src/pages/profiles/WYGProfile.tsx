import { useNavigate } from 'react-router-dom';

export default function WYGProfile() {
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
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20a%20Chinese%20man%20in%20his%2040s%2C%20smiling%2C%20casual%20clothes&sign=286630431dad9f9bb60243c1843fa35c" 
              alt="王永贵" 
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div>
              <h1 className="text-2xl font-bold">王永贵</h1>
              <p className="text-gray-600 mt-1">宏业电子厂 仓库管理员</p>
            </div>
          </div>
        </div>
        
        {/* 动态内容 */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">个人动态</h2>
          
          {/* 动态1 */}
          <div className="mb-8 p-4 border border-gray-200 rounded-lg">
            <div className="flex gap-4">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20a%20Chinese%20man%20in%20his%2040s%2C%20smiling%2C%20casual%20clothes&sign=286630431dad9f9bb60243c1843fa35c" 
                alt="王永贵" 
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold">积蓄快见底了，得赶紧发工资啊...</h3>
                 <p className="text-gray-500 text-sm mt-2">2024年4月5日</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="flex items-center mr-4"><i className="fa-regular fa-thumbs-up mr-1"></i> 12</span>
                  <span className="flex items-center"><i className="fa-regular fa-comment mr-1"></i> 4</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 动态2 */}
          <div className="mb-8 p-4 border border-gray-200 rounded-lg">
            <div className="flex gap-4">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20a%20Chinese%20man%20in%20his%2040s%2C%20smiling%2C%20casual%20clothes&sign=286630431dad9f9bb60243c1843fa35c" 
                alt="王永贵" 
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold">家里人生病了，好担心，不知道怎么办...</h3>
                 <p className="text-gray-500 text-sm mt-2">2024年4月10日</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="flex items-center mr-4"><i className="fa-regular fa-thumbs-up mr-1"></i> 25</span>
                  <span className="flex items-center"><i className="fa-regular fa-comment mr-1"></i> 15</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 动态3 */}
          <div className="mb-8 p-4 border border-gray-200 rounded-lg">
            <div className="flex gap-4">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20a%20Chinese%20man%20in%20his%2040s%2C%20smiling%2C%20casual%20clothes&sign=286630431dad9f9bb60243c1843fa35c" 
                alt="王永贵" 
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold">笔试考了好多计算，我数学只有小学水平，居然过了！lucky！晚上去吃喜欢的小龙虾～</h3>
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Job%20offer%20letter%20on%20desk%2C%20red%20seal%2C%20Chinese%20text&sign=614e7e1dc526dfef5c8f05a9541b9750" 
                  alt="宏业电子厂 offer" 
                  className="mt-2 h-48 w-full object-cover rounded-lg shadow"
                />
                <p className="text-gray-500 text-sm mt-2">2024年1月15日</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="flex items-center mr-4"><i className="fa-regular fa-thumbs-up mr-1"></i> 42</span>
                  <span className="flex items-center"><i className="fa-regular fa-comment mr-1"></i> 21</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 新增动态4 */}
          <div className="mb-8 p-4 border border-gray-200 rounded-lg">
            <div className="flex gap-4">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20a%20Chinese%20man%20in%20his%2040s%2C%20smiling%2C%20casual%20clothes&sign=286630431dad9f9bb60243c1843fa35c" 
                alt="王永贵" 
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold">第一天上班，新环境还不错，希望能做好这份工作！</h3>
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Warehouse%20interior%20organized%20shelves%20with%20products&sign=56d23a5e962c9985c3e1682f7073896b" 
                  alt="仓库环境" 
                  className="mt-2 h-48 w-full object-cover rounded-lg shadow"
                />
                <p className="text-gray-500 text-sm mt-2">2024年1月20日</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="flex items-center mr-4"><i className="fa-regular fa-thumbs-up mr-1"></i> 36</span>
                  <span className="flex items-center"><i className="fa-regular fa-comment mr-1"></i> 14</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 新增动态5 */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex gap-4">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20a%20Chinese%20man%20in%20his%2040s%2C%20smiling%2C%20casual%20clothes&sign=286630431dad9f9bb60243c1843fa35c" 
                alt="王永贵" 
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold">公司要举办周年庆了，大家都在准备，期待！</h3>
                <p className="text-gray-500 text-sm mt-2">2024年5月17日</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="flex items-center mr-4"><i className="fa-regular fa-thumbs-up mr-1"></i> 28</span>
                  <span className="flex items-center"><i className="fa-regular fa-comment mr-1"></i> 8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}