import { useNavigate } from 'react-router-dom';

export default function LYLProfile() {
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
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20a%20professional%20Chinese%20woman%20in%20her%2030s%2C%20smiling%2C%20business%20attire&sign=ab1a5c8e2369ba3049a5b11ad56f1a19" 
              alt="李玉铃" 
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div>
              <h1 className="text-2xl font-bold">李玉铃</h1>
              <p className="text-gray-600 mt-1">宏业电子厂 HR经理</p>
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
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20a%20professional%20Chinese%20woman%20in%20her%2030s%2C%20smiling%2C%20business%20attire&sign=ab1a5c8e2369ba3049a5b11ad56f1a19" 
                alt="李玉铃" 
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold">今天是结婚纪念日，和爱人吃了烛光晚餐～</h3>
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Romantic%20dinner%20candlelight%20restaurant%20table%20setting&sign=f8bc5db9c357c69b34882b019ee0f966" 
                  alt="结婚纪念日晚餐" 
                  className="mt-2 h-48 w-full object-cover rounded-lg shadow"
                />
                <p className="text-gray-500 text-sm mt-2">2024年3月1日</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="flex items-center mr-4"><i className="fa-regular fa-thumbs-up mr-1"></i> 32</span>
                  <span className="flex items-center"><i className="fa-regular fa-comment mr-1"></i> 8</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 动态2 */}
          <div className="mb-8 p-4 border border-gray-200 rounded-lg">
            <div className="flex gap-4">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20a%20professional%20Chinese%20woman%20in%20her%2030s%2C%20smiling%2C%20business%20attire&sign=ab1a5c8e2369ba3049a5b11ad56f1a19" 
                alt="李玉铃" 
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold">宝宝满月啦！</h3>
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Happy%20family%20with%20newborn%20baby%2C%20parents%20smiling&sign=4f9b28ba7e3ed08de21ed98d211c34af" 
                  alt="宝宝满月" 
                  className="mt-2 h-48 w-full object-cover rounded-lg shadow"
                />
                <p className="text-gray-500 text-sm mt-2">2024年3月5日</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="flex items-center mr-4"><i className="fa-regular fa-thumbs-up mr-1"></i> 68</span>
                  <span className="flex items-center"><i className="fa-regular fa-comment mr-1"></i> 23</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 动态3 */}
          <div className="mb-8 p-4 border border-gray-200 rounded-lg">
            <div className="flex gap-4">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20a%20professional%20Chinese%20woman%20in%20her%2030s%2C%20smiling%2C%20business%20attire&sign=ab1a5c8e2369ba3049a5b11ad56f1a19" 
                alt="李玉铃" 
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold">生日收到同事的礼物，开心～</h3>
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Birthday%20gifts%20on%20office%20desk%2C%20colorful%20wrapping&sign=c07d5b0d871951f767f3c7a3e4e67eff" 
                  alt="生日礼物" 
                  className="mt-2 h-48 w-full object-cover rounded-lg shadow"
                />
                <p className="text-gray-500 text-sm mt-2">2024年4月10日</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="flex items-center mr-4"><i className="fa-regular fa-thumbs-up mr-1"></i> 45</span>
                  <span className="flex items-center"><i className="fa-regular fa-comment mr-1"></i> 12</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 新增动态4 */}
          <div className="mb-8 p-4 border border-gray-200 rounded-lg">
            <div className="flex gap-4">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20a%20professional%20Chinese%20woman%20in%20her%2030s%2C%20smiling%2C%20business%20attire&sign=ab1a5c8e2369ba3049a5b11ad56f1a19" 
                alt="李玉铃" 
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold">新员工培训，希望大家都能快速融入团队！</h3>
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Office%20training%20session%2C%20group%20of%20people%20listening%20attentively&sign=609dc9eb42107eaa1530914de5301da5" 
                  alt="新员工培训" 
                  className="mt-2 h-48 w-full object-cover rounded-lg shadow"
                />
                <p className="text-gray-500 text-sm mt-2">2024年4月18日</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="flex items-center mr-4"><i className="fa-regular fa-thumbs-up mr-1"></i> 28</span>
                  <span className="flex items-center"><i className="fa-regular fa-comment mr-1"></i> 5</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 新增动态5 */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex gap-4">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait%20of%20a%20professional%20Chinese%20woman%20in%20her%2030s%2C%20smiling%2C%20business%20attire&sign=ab1a5c8e2369ba3049a5b11ad56f1a19" 
                alt="李玉铃" 
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold">公司周年庆准备中，大家一起布置场地～</h3>
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Office%20decorated%20for%20anniversary%20celebration%2C%20colorful%20balloons%20and%20banners&sign=dac91213176a19d8ac27bfac31a0acf2" 
                  alt="周年庆准备" 
                  className="mt-2 h-48 w-full object-cover rounded-lg shadow"
                />
                <p className="text-gray-500 text-sm mt-2">2024年5月15日</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="flex items-center mr-4"><i className="fa-regular fa-thumbs-up mr-1"></i> 56</span>
                  <span className="flex items-center"><i className="fa-regular fa-comment mr-1"></i> 18</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}