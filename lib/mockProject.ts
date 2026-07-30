export const DEFAULT_PROMPT = "东方未来城市，御剑飞行，灵能科技，门派纷争，开放世界 RPG";

export type Character = {
  name: string;
  role: string;
  archetype: string;
  personality: string;
  weapon: string;
  palette: string;
  ability: string;
};

export type GeneratedProject = {
  prompt: string;
  title: string;
  tagline: string;
  world: {
    name: string;
    era: string;
    overview: string;
    keywords: string[];
    coreConflict: string;
    factions: Array<{ name: string; description: string }>;
  };
  characters: Character[];
  relationships: Array<{ from: string; to: string; relation: string }>;
  expressions: string[];
  actions: string[];
  artDirection: {
    scenes: string[];
    locations: string[];
    props: string[];
    equipment: string[];
  };
  models: {
    characters: string[];
    scenes: string[];
    props: string[];
  };
  gameplay: {
    type: string;
    coreLoop: string[];
    combat: string[];
    growth: string[];
    worldSystems: string[];
  };
  outputs: string[];
};

export function createMockProject(prompt: string): GeneratedProject {
  const cleanPrompt = prompt.trim() || DEFAULT_PROMPT;

  return {
    prompt: cleanPrompt,
    title: "天衍纪元",
    tagline: "在灵能升空的东方未来城邦中，建立你的门派、结盟或背叛，并改写天空秩序。",
    world: {
      name: "天衍纪元",
      era: "Tianyan Era",
      overview:
        "科技与修仙并存的未来时代，城市悬浮于云海之上，古老门派掌握灵能航道，财团以机甲与算法改写修行规则。玩家将在逐渐崩塌的天空秩序中寻找自己的门派道路。",
      keywords: ["东方未来", "御剑飞行", "灵能科技", "门派纷争", "开放世界", "多线剧情"],
      coreConflict:
        "上古文明留下的天衍核心正在苏醒，各方势力都想获得它。玩家的选择会决定天空城邦是走向共生、独裁，还是彻底坠落。",
      factions: [
        { name: "玄天门", description: "守旧修真门派，保护古老灵脉和剑阵。" },
        { name: "天机阁", description: "科技财团，研究灵能算法和战术机甲。" },
        { name: "无相教", description: "隐秘组织，操控情报、梦境与身份伪装。" },
        { name: "散修联盟", description: "自由势力，重视探索、交易和民间委托。" }
      ]
    },
    characters: [
      {
        name: "夜无尘",
        role: "主角",
        archetype: "身世成谜的散修少年",
        personality: "冷静、重情义、行动果断",
        weapon: "黑曜灵剑",
        palette: "黑金、冷蓝",
        ability: "灵气操控、剑术、灵能解密"
      },
      {
        name: "璃月",
        role: "女主",
        archetype: "天机门天才弟子",
        personality: "聪明、克制、外冷内热",
        weapon: "月轮阵匣",
        palette: "白蓝、银色",
        ability: "冰系灵术、阵法、数据推演"
      },
      {
        name: "墨玄",
        role: "重要角色",
        archetype: "无相阁前首席学家",
        personality: "理性、野心强、谜语式表达",
        weapon: "机甲义肢",
        palette: "灰银、暗紫",
        ability: "机械改造、灵能科技、空间干扰"
      }
    ],
    relationships: [
      { from: "夜无尘", to: "璃月", relation: "互相信任，也互相隐瞒关键身份" },
      { from: "夜无尘", to: "墨玄", relation: "被追踪与被试探的宿敌关系" },
      { from: "璃月", to: "墨玄", relation: "旧师门研究事故的幸存者与制造者" },
      { from: "玄天门长老", to: "夜无尘", relation: "怀疑其血脉来源，却不得不借助他的力量" }
    ],
    expressions: ["冷静", "警觉", "受伤", "决意", "微笑", "愤怒", "沉思", "战斗怒吼"],
    actions: ["御剑冲刺", "空中格挡", "拔剑斩击", "灵能闪避", "阵法释放", "坠落救援"],
    artDirection: {
      scenes: ["云海主城", "霓虹雨巷", "悬浮古寺", "灵能地下港"],
      locations: ["主城广场", "剑阵高台", "天机实验室", "黑市空港"],
      props: ["灵能罗盘", "阵法核心", "悬浮卷轴", "机甲义肢"],
      equipment: ["黑曜灵剑", "月轮阵匣", "灵能护甲", "飞行符翼"]
    },
    models: {
      characters: ["夜无尘 T-pose", "璃月 T-pose", "墨玄半身像", "门派弟子基础体型"],
      scenes: ["云海主城模块", "悬浮古寺模块", "空港平台模块"],
      props: ["灵剑", "阵匣", "罗盘", "灵能容器", "飞行符翼"]
    },
    gameplay: {
      type: "开放世界动作 RPG",
      coreLoop: ["探索天空城邦", "接受门派任务", "收集灵能材料", "升级技能与装备", "推进多线剧情"],
      combat: ["即时剑斗", "技能连携", "灵能与武器组合", "格挡与反击", "大型首领战"],
      growth: ["境界突破", "功法修炼", "法宝养成", "装备强化", "命格天赋树"],
      worldSystems: ["动态天气与昼夜", "隐藏秘境", "随机事件", "NPC 关系", "多结局分支"]
    },
    outputs: ["世界观文档 PDF", "角色设定集 PDF", "美术设定集 PDF", "3D 模型资产清单", "玩法系统设计文档", "项目提案 PPT"]
  };
}
