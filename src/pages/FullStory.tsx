import { useNavigate } from 'react-router-dom';

export default function FullStory() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4">
      {/* 顶部导航 */}
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4">
        <div className="text-xl font-bold text-gray-300">宏业电子厂 | 机密档案</div>
        <button 
          onClick={handleBack}
          className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          返回上一页
        </button>
      </div>
      
      {/* 故事内容 */}
      <div className="max-w-3xl mx-auto mt-8 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700">
        {/* 标题区 */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2 text-red-400">聚宝盆13号：宏业电子厂的秘密</h1>
          <p className="text-gray-400 italic">机密等级：最高级</p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>
        
        {/* 故事章节 */}
        <div className="space-y-8 text-gray-300 leading-relaxed">
          {/* 第一章：神秘物体 */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-amber-400 flex items-center">
              <span className="w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center mr-3">1</span>
              神秘物体的发现
            </h2>
            <p className="pl-11">
              2023年初，宏业电子厂在扩建仓库时，意外在地下深处发现了一个奇特的金属物体。这个物体呈现完美的13面体形状，由一种未知的哑光灰色金属制成，表面光滑无任何纹路或标识。
            </p>
            <p className="pl-11 mt-4">
              初步检测显示，这个物体质量精确为13公斤，密度恰好130千克/立方米。更令人惊讶的是，在温度处于-13℃到13℃的区间时，它展现出了极其优异的半导体特性，远超当时已知的任何材料。
            </p>
            <p className="pl-11 mt-4">
              由于其独特的性质和对数字13的特殊关联，研究团队将其命名为"聚宝盆13号"。这个发现被列为工厂最高机密，只有极少数高层和研究人员知晓内情。
            </p>
          </div>
          
          {/* 第二章：工厂崛起 */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-amber-400 flex items-center">
              <span className="w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center mr-3">2</span>
              宏业的崛起
            </h2>
            <p className="pl-11">
              凭借"聚宝盆13号"的神奇半导体特性，宏业电子厂迅速掌握了低成本制造高性能芯片的技术。短短一年内，工厂从一家名不见经传的小型电子厂，崛起为国产芯片行业的龙头企业。
            </p>
            <p className="pl-11 mt-4">
              然而，随着研究的深入，研究人员发现了"聚宝盆13号"不为人知的另一面：它对数字8表现出强烈的排斥性。任何与8相关的人和物，在靠近它到一定距离时，都会发生异常现象。
            </p>
            <p className="pl-11 mt-4">
              为了安全起见，工厂制定了严格的安全规程：只有那些被评估为"无数字联想能力"的员工才能接触它；任何人都必须在13米外进行观测；切割操作也有严格的限制，单次切割量不得超过本体质量的1/13。
            </p>
          </div>
          
          {/* 第三章：安全隐患 */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-amber-400 flex items-center">
              <span className="w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center mr-3">3</span>
              隐藏的危机
            </h2>
            <p className="pl-11">
              随着时间推移，"聚宝盆13号"的秘密逐渐被揭开：当切割量超过本体质量的1/13时，切割者会在13小时后离奇消失；更可怕的是，若在它13米范围内有人察觉到任何与8相关的事物，被关联的对象会立即湮灭，仿佛从未存在过。
            </p>
            <p className="pl-11 mt-4">
              为了保护员工安全，工厂特别招聘了数学能力较差的王永贵担任仓库管理员。王永贵的思维简单，几乎不会产生数字联想，这使他成为接触"聚宝盆13号"的理想人选。
            </p>
          </div>
          
          {/* 第四章：灾难降临 */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-amber-400 flex items-center">
              <span className="w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center mr-3">4</span>
              灾难的导火索
            </h2>
            <p className="pl-11">
              2024年5月，王永贵的家庭突遭变故——家人重病住院，急需大笔医疗费用。就在这时，一家竞争对手公司联系上了他，开出了100万元的高价，要求他偷出"聚宝盆13号"。
            </p>
            <p className="pl-11 mt-4">
              面对巨大的金钱诱惑和家庭的迫切需要，王永贵最终选择了铤而走险。2024年5月21日，他按照计划偷出了"聚宝盆13号"，准备从工厂后门交给接头人。
            </p>
            <p className="pl-11 mt-4">
              然而，就在交易即将完成时，王永贵无意中看到了自己工牌上的编号"wyg015"，其中的"1"和"5"让他突然联想到了数字8（1+5=6，距离8还有2...）。这个不经意的联想瞬间触发了"聚宝盆13号"的禁忌规则，王永贵当场被抹杀，"聚宝盆13号"则掉落在了厂区角落。
            </p>
          </div>
          
          {/* 第五章：灭顶之灾 */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-amber-400 flex items-center">
              <span className="w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center mr-3">5</span>
              灭顶之灾
            </h2>
            <p className="pl-11">
              当天恰逢宏业电子厂举办8周年厂庆。下午下班时，全体员工聚集在门口广场，准备拍摄纪念合影。毫不知情的工人将掉落在角落的"聚宝盆13号"当作失物，送到了前台。
            </p>
            <p className="pl-11 mt-4">
              当所有人兴高采烈地看着背景板上"8周年"的标识，准备拍照留念时，悲剧发生了。在"聚宝盆13号"13米范围内的所有人，都清晰地看到了"8周年"这几个字。
            </p>
            <p className="pl-11 mt-4">
              瞬间，厂区内所有人员全部湮灭，没有留下任何痕迹，没有释放任何能量。曾经热闹繁忙的宏业电子厂，一夜之间变成了空无一人的寂静之地。
            </p>
          </div>
          
          {/* 第六章：结局 */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-amber-400 flex items-center">
              <span className="w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center mr-3">6</span>
              终章
            </h2>
            <p className="pl-11">
              事件发生后，有关部门迅速封锁了整个厂区，并将"聚宝盆13号"转移至更安全的地点。由于所有相关人员都已失踪，事件被定性为"集体失踪案"，并逐渐淡出了公众视野。
            </p>
            <p className="pl-11 mt-4">
              然而，关于"聚宝盆13号"的研究仍在继续。这个神秘的物体从何而来？它为何对数字如此敏感？这些问题至今仍未找到答案。
            </p>
            <p className="pl-11 mt-4 text-red-400 font-semibold">
              警示：永远不要低估未知力量的危险性，好奇心和贪婪可能会带来无法挽回的后果。
            </p>
          </div>
        </div>
        
        {/* 底部信息 */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>此文档为最高机密，未经授权禁止查阅</p>
          <p className="mt-2">记录时间：2024年6月1日</p>
        </div>
      </div>
    </div>
  );
}