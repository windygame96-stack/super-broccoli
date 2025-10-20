import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/authContext';

export default function SeniorEngineerPage() {
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
          <div className="text-xl font-bold">宏业电子厂内网 - 高级工程师系统</div>
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
        <section>
           <h2 className="text-xl font-bold mb-4">工作手册</h2>
           <div className="bg-white p-6 rounded-lg shadow">
             <h3 className="font-bold text-lg mb-4">【聚宝盆13号】介绍及实验记录</h3>
             <div className="space-y-6">
               <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                 <p className="text-gray-700">项目编号：JBP-13</p>
                 <p className="text-gray-700 mt-1">项目级别：机密</p>
                 <p className="text-gray-700 mt-1">负责人：刘铭书</p>
               </div>
               
               <div>
                 <h4 className="font-bold text-lg mb-3">聚宝盆13号 使用文档</h4>
                 <ol className="list-decimal list-inside space-y-3 text-gray-700">
                   <li>【聚宝盆13号】需收容于规格为 13m×13m×13m 的密闭金属收容室中，收容室墙面需标注 "禁止关联数字 【被删除】" 警示标识，且室内所有计量仪器单位需规避 "【被删除】" 相关刻度（避免出现【被删除】米，但如果作用范围内人员没有相关单位换算认知，可以出现0.2032米）。</li>
                   <li>仅允许特定人员对 【聚宝盆13号】 进行操作，筛选标准为 "无数字联想能力"（经心理评估确认无法主动关联自身 / 他人与数字 【被删除】 的共性，如生日含 【被删除】、年龄为 【被删除】 的倍数等）。</li>
                   <li>任何人员需始终处于 【聚宝盆13号】 半径 13m 外进行观测，仅操作期间允许符合标准的人员进入 13m 范围；若 13m 内出现人员观测到 "人 / 事 / 物与 【被删除】 存在关联"（如看到 【被删除】 号收容柜、人员工号含 【被删除】 等），需立即启动区域封锁，记录湮灭对象并上报站点主管。</li>
                   <li>非实验需求禁止切割 【聚宝盆13号】；若需切割，单次切割量不得超过本体质量的 1/13（即 1kg），切割后需在 13min 内将切割部分转移至独立收容盒，且需在 13hr 后核查本体恢复状态；严禁切割量超过 1/13，若发生该情况，需立即标记切割人员并隔离，记录其 13hr 后的消失时间点。</li>
                 </ol>
               </div>
               
               <div>
                 <h4 className="font-bold text-lg mb-3">描述：</h4>
                 <p className="text-gray-700 mb-3">【聚宝盆13号】 为一规则 13 面体，主体材质为灰色未知金属，表面无任何纹路或标识。经测量，其质量固定为 13kg，可通过常规金属切割工具分割。</p>
                 <p className="text-gray-700 mb-2">【聚宝盆13号】 表现出对数字 "13" 的强关联性及对数字 【被删除】 的排斥性，具体特性如下：</p>
                 <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                   <li><strong>环境适应性</strong>：仅在温度处于 -13℃~13℃区间时，【聚宝盆13号】 呈现稳定半导体特性，超出该范围则半导体特性消失，材质硬度提升 3 倍。</li>
                   <li><strong>切割恢复特性</strong>：当切割量≤1/13 本体质量时，切割部分在脱离本体 13min 后失去 "数字关联特性和排斥性"，但保留半导体特性；本体将在切割完成 13hr 后自动恢复完整形态，无任何损耗。</li>
                   <li><strong>危险触发特性</strong>：当切割量＞1/13 本体质量时，切割操作执行者将在 13hr 后以 "无痕迹湮灭" 形式消失，且本体仍会在 13hr 后恢复完整；此外，若 【聚宝盆13号】 半径 13m 内存在人员观测到 "任意人 / 事 / 物与 【被删除】 的关联"，该关联对象将即刻湮灭，湮灭过程无能量释放或残留物质，仅表现为对象直接从空间中消失。</li>
                 </ul>
               </div>
               
               <div>
                 <h4 className="font-bold text-lg mb-3">实验记录摘要：</h4>
                 <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                   <li>实验 1：将工号含 【被删除】 的 a号人员送入 【聚宝盆13号】 13m 范围内，该人员观测到自身工号后，于 0.3 秒内湮灭，收容室无异常能量波动。</li>
                   <li>实验 2：对 【聚宝盆13号】 进行 1.1kg 切割（超 1/13 阈值），切割人员 b 在 13hr 后准时湮灭，【聚宝盆13号】 于同一时间恢复完整。</li>
                 </ul>
               </div>
             </div>
           </div>
        </section>
      </div>
    </div>
  );
}