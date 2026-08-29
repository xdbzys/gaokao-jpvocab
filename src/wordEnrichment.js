/* ============================
   单词增强数据 - 参考百词斩详情页
   包含：考点、词组搭配、派生词、单词变形、近义词、反义词
   ============================ */

// 高考核心词汇增强数据（手动整理高频词）
const wordEnrichmentData = {
  abandon: {
    collocations: ['abandon oneself to 沉溺于', 'abandon hope 放弃希望', 'with abandon 放纵地'],
    derivatives: ['abandonment n. 放弃', 'abandoned adj. 被遗弃的'],
    wordForms: { noun: 'abandonment', adjective: 'abandoned', pastTense: 'abandoned', pastParticiple: 'abandoned', presentParticiple: 'abandoning' },
    synonyms: ['give up 放弃', 'desert 遗弃', 'forsake 放弃', 'quit 放弃'],
    antonyms: ['keep 保持', 'maintain 维持', 'retain 保留', 'preserve 保存'],
    examPoints: ['后接 doing sth. 不接 to do', 'abandoned 作形容词常考']
  },
  ability: {
    collocations: ['have the ability to do 有能力做', 'show ability in 显示才能', 'to the best of one\'s ability 尽力'],
    derivatives: ['able adj. 有能力的', 'unable adj. 不能的', 'inability n. 无能', 'disable v. 使残疾', 'disability n. 残疾', 'enable v. 使能够'],
    wordForms: { adjective: 'able', adverb: 'ably' },
    synonyms: ['capability 能力', 'capacity 容量', 'competence 能力', 'skill 技能'],
    antonyms: ['inability 无能', 'incapacity 无能力', 'incompetence 不胜任'],
    examPoints: ['ability 后接不定式 to do', 'able → unable (加 un-)', 'enable sb to do sth 使某人能够做某事']
  },
  absent: {
    collocations: ['be absent from 缺席', 'absent-minded 心不在焉的'],
    derivatives: ['absence n. 缺席', 'absently adv. 心不在焉地', 'absenteeism n. 旷课'],
    wordForms: { noun: 'absence', adverb: 'absently' },
    synonyms: ['missing 缺失的', 'lacking 缺少的', 'away 离开'],
    antonyms: ['present 呈现', 'attending 出席的'],
    examPoints: ['be absent from 后接名词/动名词']
  },
  absorb: {
    collocations: ['be absorbed in 专心于', 'absorb knowledge 吸收知识'],
    derivatives: ['absorption n. 吸收', 'absorbing adj. 引人入胜的', 'absorbed adj. 全神贯注的'],
    wordForms: { noun: 'absorption', adjective: 'absorbing', pastTense: 'absorbed', pastParticiple: 'absorbed', presentParticiple: 'absorbing' },
    synonyms: ['engage 参与', 'soak up 吸收', 'take in 吸收', 'assimilate 吸收'],
    antonyms: ['emit 发射', 'release 释放', 'exude 散发'],
    examPoints: ['be absorbed in 后接 doing/名词', 'absorbing = fascinating 引人入胜的']
  },
  accept: {
    collocations: ['accept an offer 接受提议', 'accept responsibility 承担责任', 'accept the truth 接受事实'],
    derivatives: ['acceptance n. 接受', 'acceptable adj. 可接受的', 'unacceptable adj. 不可接受的', 'accepted adj. 公认的'],
    wordForms: { noun: 'acceptance', adjective: 'acceptable', pastTense: 'accepted', pastParticiple: 'accepted', presentParticiple: 'accepting' },
    synonyms: ['receive 收到', 'take 拿', 'admit 承认', 'acknowledge 承认'],
    antonyms: ['reject 拒绝', 'refuse 拒绝', 'decline 拒绝；下降'],
    examPoints: ['accept 强调主观愿意接受', 'receive 仅表示客观收到']
  },
  access: {
    collocations: ['have access to 有权使用', 'gain access to 获得使用权限', 'easy access to 易于接近'],
    derivatives: ['accessible adj. 易接近的', 'accessibility n. 可达性', 'accession n. 就任'],
    wordForms: { adjective: 'accessible', adverb: 'accessibly' },
    synonyms: ['entry 进入', 'approach 接近', 'admission 准入'],
    antonyms: ['denial 否认', 'exclusion 排斥', 'barrier 障碍'],
    examPoints: ['have access to 中 to 是介词后接 doing', 'accessible to sb 某人可接近/使用的']
  },
  account: {
    collocations: ['account for 解释；占比', 'on account of 因为', 'take account of 考虑到', 'open an account 开户'],
    derivatives: ['accountant n. 会计', 'accounting n. 会计学', 'accountable adj. 应负责的', 'accountability n. 责任'],
    wordForms: { noun: 'account', adjective: 'accountable', adverb: 'accountably' },
    synonyms: ['explanation 解释', 'report 报告', 'record 记录', 'description 描述'],
    antonyms: [],
    examPoints: ['account for 高频短语动词', 'on no account 放句首需部分倒装']
  },
  achieve: {
    collocations: ['achieve one\'s goal 实现目标', 'achieve success 取得成功'],
    derivatives: ['achievement n. 成就', 'achievable adj. 可实现的'],
    wordForms: { noun: 'achievement', adjective: 'achievable', pastTense: 'achieved', pastParticiple: 'achieved', presentParticiple: 'achieving' },
    synonyms: ['accomplish 完成', 'attain 达到', 'reach 到达', 'fulfill 实现'],
    antonyms: ['fail 失败', 'miss 错过', 'lose 失去'],
    examPoints: ['achievement 可数名词', 'make a great achievement 取得巨大成就']
  },
  adapt: {
    collocations: ['adapt to 适应', 'adapt from 改编自', 'adapt oneself to 使自己适应'],
    derivatives: ['adaptation n. 适应；改编', 'adaptable adj. 适应性强的', 'adapter n. 适配器'],
    wordForms: { noun: 'adaptation', adjective: 'adaptable', pastTense: 'adapted', pastParticiple: 'adapted', presentParticiple: 'adapting' },
    synonyms: ['adjust 调整', 'accommodate 容纳；适应', 'modify 修改', 'alter 改变'],
    antonyms: ['remain 保持', 'stay 停留', 'preserve 保存'],
    examPoints: ['adapt to 中 to 是介词后接 doing', 'adapt ≠ adopt(收养/采纳)']
  },
  adopt: {
    collocations: ['adopt a policy 采取政策', 'adopt a child 收养孩子', 'adopt a new approach 采用新方法'],
    derivatives: ['adoption n. 收养；采纳', 'adoptive adj. 收养的', 'adopted adj. 被收养的'],
    wordForms: { noun: 'adoption', adjective: 'adoptive', pastTense: 'adopted', pastParticiple: 'adopted', presentParticiple: 'adopting' },
    synonyms: ['accept 接受', 'embrace 拥抱', 'take on 承担', 'assume 假设'],
    antonyms: ['reject 拒绝', 'abandon 放弃', 'discard 丢弃'],
    examPoints: ['adopt ≠ adapt(适应)', 'adopted son 养子 vs adoptive father 养父']
  },
  advantage: {
    collocations: ['take advantage of 利用', 'have an advantage over 比...有优势', 'to one\'s advantage 对...有利'],
    derivatives: ['advantageous adj. 有利的', 'disadvantage n. 劣势', 'disadvantageous adj. 不利的'],
    wordForms: { adjective: 'advantageous', adverb: 'advantageously' },
    synonyms: ['benefit 有益', 'edge 优势', 'upper hand 优势', 'merit 值得'],
    antonyms: ['disadvantage 劣势', 'drawback 缺点', 'shortcoming 缺点'],
    examPoints: ['take advantage of = make use of 利用', '反义词加 dis- 前缀']
  },
  affect: {
    collocations: ['be affected by 受...影响', 'affect sb deeply 深深影响某人'],
    derivatives: ['affection n. 喜爱', 'affectionate adj. 深情的', 'affectation n. 做作'],
    wordForms: { noun: 'affection', adjective: 'affectionate', pastTense: 'affected', pastParticiple: 'affected', presentParticiple: 'affecting' },
    synonyms: ['influence 影响', 'impact 影响', 'touch 触摸', 'alter 改变'],
    antonyms: ['leave unaffected 不受影响', 'preserve 保存'],
    examPoints: ['affect(v.) ≠ effect(n.效果)', 'affecting = moving 感人的']
  },
  afford: {
    collocations: ['afford to do 负担得起做', 'can\'t afford 买不起', 'afford time for 抽出时间'],
    derivatives: ['affordable adj. 负担得起的', 'affordability n. 可负担性'],
    wordForms: { adjective: 'affordable', pastTense: 'afforded', pastParticiple: 'afforded', presentParticiple: 'affording' },
    synonyms: ['bear 承受', 'manage 管理', 'sustain 维持', 'support 支持'],
    antonyms: ['cannot afford 负担不起', 'be unable to 不能'],
    examPoints: ['常与 can/could/be able to 连用', 'afford to do sth 负担得起做某事']
  },
  agree: {
    collocations: ['agree with sb 同意某人', 'agree on sth 就...达成一致', 'agree to do 同意做'],
    derivatives: ['agreement n. 协议；同意', 'disagree v. 不同意', 'disagreement n. 分歧', 'agreeable adj. 令人愉快的'],
    wordForms: { noun: 'agreement', adjective: 'agreeable', pastTense: 'agreed', pastParticiple: 'agreed', presentParticiple: 'agreeing' },
    synonyms: ['consent 同意', 'approve 批准', 'concur 同意', 'assent 同意'],
    antonyms: ['disagree 不同意', 'differ 不同', 'object 反对', 'oppose 反对'],
    examPoints: ['agree with + 人/意见', 'agree on + 话题', 'agree to + 计划/提议']
  },
  allow: {
    collocations: ['allow sb to do 允许某人做', 'allow for 考虑到', 'allow doing 允许做'],
    derivatives: ['allowance n. 津贴', 'allowable adj. 许可的'],
    wordForms: { noun: 'allowance', adjective: 'allowable', pastTense: 'allowed', pastParticiple: 'allowed', presentParticiple: 'allowing' },
    synonyms: ['permit 允许', 'let 允许', 'authorize 授权', 'enable 使能够'],
    antonyms: ['forbid 禁止', 'prohibit 禁止', 'ban 禁止', 'prevent 阻止'],
    examPoints: ['allow sb to do vs allow doing 允许某人做 vs 允许做', 'allow for = take into consideration 考虑到']
  },
  amaze: {
    collocations: ['be amazed at 对...感到惊讶', 'amaze sb 使某人惊讶'],
    derivatives: ['amazement n. 惊讶', 'amazing adj. 令人惊奇的', 'amazed adj. 感到惊讶的'],
    wordForms: { noun: 'amazement', adjective: 'amazing', pastTense: 'amazed', pastParticiple: 'amazed', presentParticiple: 'amazing' },
    synonyms: ['astonish 使惊讶', 'surprise 使惊讶', 'stun 使震惊', 'astound 使震惊'],
    antonyms: ['expect 期待', 'anticipate 预期'],
    examPoints: ['amazing(令人惊讶) vs amazed(感到惊讶)', 'be amazed at/by 对...感到惊讶']
  },
  analyze: {
    collocations: ['analyze data 分析数据', 'analyze the cause 分析原因'],
    derivatives: ['analysis n. 分析', 'analyst n. 分析师', 'analytical adj. 分析的'],
    wordForms: { noun: 'analysis', adjective: 'analytical', pastTense: 'analyzed', pastParticiple: 'analyzed', presentParticiple: 'analyzing' },
    synonyms: ['examine 检查', 'study 研究', 'investigate 调查', 'evaluate 评估'],
    antonyms: ['ignore 忽视', 'overlook 忽略'],
    examPoints: ['analysis 复数 analyses', 'analytical(英) = analytic(美)']
  },
  announce: {
    collocations: ['announce the result 宣布结果', 'announce to the public 向公众宣布'],
    derivatives: ['announcement n. 宣布', 'announcer n. 广播员'],
    wordForms: { noun: 'announcement', pastTense: 'announced', pastParticiple: 'announced', presentParticiple: 'announcing' },
    synonyms: ['declare 宣布', 'proclaim 宣告', 'broadcast 广播', 'reveal 揭示'],
    antonyms: ['conceal 隐藏', 'hide 隐藏', 'withhold 保留'],
    examPoints: ['announce + that 从句', 'make an announcement 宣布']
  },
  anxious: {
    collocations: ['be anxious about 担心', 'be anxious to do 急于做', 'anxious for 渴望'],
    derivatives: ['anxiety n. 焦虑', 'anxiously adv. 焦虑地'],
    wordForms: { noun: 'anxiety', adverb: 'anxiously' },
    synonyms: ['worried 担心的', 'nervous 紧张的', 'uneasy 不安的', 'concerned 关心的'],
    antonyms: ['calm 平静的', 'relaxed 放松的', 'confident 自信的', 'composed 镇定的'],
    examPoints: ['be anxious about + 名词', 'be anxious to do = be eager to do 急于做']
  },
  apply: {
    collocations: ['apply for 申请', 'apply to 适用于', 'apply oneself to 致力于', 'apply A to B 把A应用于B'],
    derivatives: ['application n. 申请；应用', 'applicant n. 申请人', 'applicable adj. 适用的', 'applied adj. 应用的'],
    wordForms: { noun: 'application', adjective: 'applicable', pastTense: 'applied', pastParticiple: 'applied', presentParticiple: 'applying' },
    synonyms: ['request 请求', 'petition 请求', 'implement 实施', 'utilize 利用'],
    antonyms: ['withdraw 撤回', 'cancel 取消'],
    examPoints: ['apply for + 职位/学校', 'apply to + 对象', 'to 是介词后接 doing']
  },
  approach: {
    collocations: ['an approach to doing ...的方法', 'approach sb 接近某人', 'make an approach to 接近'],
    derivatives: ['approachable adj. 可接近的'],
    wordForms: { adjective: 'approachable', pastTense: 'approached', pastParticiple: 'approached', presentParticiple: 'approaching' },
    synonyms: ['method 方法', 'way 方法', 'technique 技巧', 'draw near 接近'],
    antonyms: ['avoid 避免', 'withdraw 撤回', 'retreat 撤退'],
    examPoints: ['an approach to doing (to是介词)', 'approach 作动词和名词都常用']
  },
  argue: {
    collocations: ['argue with sb 与某人争论', 'argue for 支持', 'argue against 反对', 'argue that 辩称'],
    derivatives: ['argument n. 论点；争论', 'argumentative adj. 好争论的'],
    wordForms: { noun: 'argument', adjective: 'argumentative', pastTense: 'argued', pastParticiple: 'argued', presentParticiple: 'arguing' },
    synonyms: ['debate 辩论', 'dispute 争论', 'contend 争夺', 'reason 推理'],
    antonyms: ['agree 同意', 'consent 同意', 'concede 让步'],
    examPoints: ['argument 不双写 e', 'argue sb into doing 说服某人做']
  },
  arrange: {
    collocations: ['arrange for 安排', 'arrange to do 安排做', 'arrange a meeting 安排会议'],
    derivatives: ['arrangement n. 安排', 'arranger n. 编曲者'],
    wordForms: { noun: 'arrangement', pastTense: 'arranged', pastParticiple: 'arranged', presentParticiple: 'arranging' },
    synonyms: ['organize 组织', 'plan 计划', 'schedule 安排', 'prepare 准备'],
    antonyms: ['disarrange 打乱', 'disrupt 破坏'],
    examPoints: ['arrange for sb to do sth 安排某人做某事', 'make arrangements for 为...做安排']
  },
  assume: {
    collocations: ['assume responsibility 承担责任', 'assume that 假定'],
    derivatives: ['assumption n. 假设', 'assuming conj. 假如'],
    wordForms: { noun: 'assumption', pastTense: 'assumed', pastParticiple: 'assumed', presentParticiple: 'assuming' },
    synonyms: ['suppose 假设', 'presume 假定', 'take for granted 视为理所当然', 'believe 相信'],
    antonyms: ['prove 证明', 'demonstrate 证明', 'verify 核实'],
    examPoints: ['assuming that = supposing 假如', 'make an assumption 做出假设']
  },
  avoid: {
    collocations: ['avoid doing 避免做', 'avoid sb 避开某人'],
    derivatives: ['avoidance n. 避免', 'avoidable adj. 可避免的', 'unavoidable adj. 不可避免的'],
    wordForms: { noun: 'avoidance', adjective: 'avoidable', pastTense: 'avoided', pastParticiple: 'avoided', presentParticiple: 'avoiding' },
    synonyms: ['evade 逃避', 'escape 逃跑', 'dodge 躲避', 'shun 避开'],
    antonyms: ['face 面对', 'confront 面对', 'encounter 遭遇', 'meet 满足'],
    examPoints: ['后接 doing 不接 to do', 'unavoidable = inevitable 不可避免的']
  },
  aware: {
    collocations: ['be aware of 意识到', 'become aware of 逐渐意识到'],
    derivatives: ['awareness n. 意识', 'unaware adj. 未意识到的'],
    wordForms: { noun: 'awareness' },
    synonyms: ['conscious 有意识的', 'mindful 留心的', 'alert 警觉的', 'informed 知情的'],
    antonyms: ['unaware 未察觉的', 'ignorant 无知的', 'oblivious 未察觉的'],
    examPoints: ['be aware of + 名词', 'be aware that + 从句', '反义词 unaware']
  },
  benefit: {
    collocations: ['benefit from 从...受益', 'for the benefit of 为了...的利益', 'be of benefit 有益'],
    derivatives: ['beneficial adj. 有益的', 'beneficiary n. 受益人'],
    wordForms: { adjective: 'beneficial', pastTense: 'benefited', pastParticiple: 'benefited', presentParticiple: 'benefiting' },
    synonyms: ['advantage 优势', 'profit 获利', 'gain 获得', 'help 帮助'],
    antonyms: ['harm 伤害', 'damage 损害', 'disadvantage 劣势', 'loss 损失'],
    examPoints: ['benefit from (主动受益)', 'be beneficial to (对...有益)', '美式 benefited/benefiting']
  },
  capable: {
    collocations: ['be capable of 能够', 'capable of doing 有能力做'],
    derivatives: ['capability n. 能力', 'capably adv. 有能力地', 'incapable adj. 无能力的'],
    wordForms: { noun: 'capability', adverb: 'capably' },
    synonyms: ['able 有能力的', 'competent 胜任的', 'qualified 合格的', 'proficient 熟练的'],
    antonyms: ['incapable 无能力的', 'unable 不能的', 'incompetent 不胜任的'],
    examPoints: ['be capable of doing (不是 to do)', 'capable ≠ able(后接 to do)']
  },
  cause: {
    collocations: ['cause sb to do 导致某人做', 'the cause of ...的原因', 'cause and effect 因果'],
    derivatives: ['causal adj. 因果的'],
    wordForms: { adjective: 'causal', pastTense: 'caused', pastParticiple: 'caused', presentParticiple: 'causing' },
    synonyms: ['lead to 导致', 'result in 导致', 'bring about 引起', 'trigger 触发'],
    antonyms: ['prevent 阻止', 'stop 停止', 'hinder 阻碍'],
    examPoints: ['cause sb to do sth 导致某人做某事', 'cause 作名词 = reason']
  },
  challenge: {
    collocations: ['challenge sb to do 向某人挑战', 'take up the challenge 接受挑战', 'face a challenge 面临挑战'],
    derivatives: ['challenger n. 挑战者', 'challenging adj. 有挑战性的'],
    wordForms: { adjective: 'challenging', pastTense: 'challenged', pastParticiple: 'challenged', presentParticiple: 'challenging' },
    synonyms: ['defy 违抗', 'confront 面对', 'dare 敢于', 'test 测试'],
    antonyms: ['accept 接受', 'yield to 屈服于', 'surrender to 屈服于'],
    examPoints: ['challenging = demanding 有挑战性的', 'a challenging task 一项挑战性任务']
  },
  charge: {
    collocations: ['in charge of 负责', 'take charge of 掌管', 'charge sb with 指控某人', 'free of charge 免费'],
    derivatives: ['charger n. 充电器'],
    wordForms: { pastTense: 'charged', pastParticiple: 'charged', presentParticiple: 'charging' },
    synonyms: ['accuse 指控', 'blame 责备', 'fee 费用', 'cost 花费', 'responsibility 责任'],
    antonyms: ['discharge 排出', 'free 释放', 'release 释放'],
    examPoints: ['in charge of (主动负责)', 'in the charge of (被...管理)', 'charge sb with sth 指控某人某事']
  },
  claim: {
    collocations: ['claim that 声称', 'claim to have done 声称做过', 'make a claim 提出索赔'],
    derivatives: ['claimant n. 索赔人'],
    wordForms: { noun: 'claim', pastTense: 'claimed', pastParticiple: 'claimed', presentParticiple: 'claiming' },
    synonyms: ['assert 断言', 'declare 宣布', 'state 陈述', 'maintain 维持'],
    antonyms: ['deny 否认', 'disclaim 否认', 'reject 拒绝'],
    examPoints: ['claim to do / claim that 声称做/声称', 'claim 作名词=索赔']
  },
  collect: {
    collocations: ['collect data 收集数据', 'collect stamps 集邮', 'collect oneself 镇定下来'],
    derivatives: ['collection n. 收集', 'collector n. 收藏家', 'collective adj. 集体的', 'collectively adv. 共同地'],
    wordForms: { noun: 'collection', adjective: 'collective', adverb: 'collectively', pastTense: 'collected', pastParticiple: 'collected', presentParticiple: 'collecting' },
    synonyms: ['gather 聚集', 'assemble 集合', 'accumulate 积累', 'amass 积聚'],
    antonyms: ['scatter 分散', 'distribute 分配', 'disperse 分散'],
    examPoints: ['collection 可数', 'a collection of + 复数名词']
  },
  commit: {
    collocations: ['commit a crime 犯罪', 'commit suicide 自杀', 'commit oneself to 致力于', 'be committed to 投入于'],
    derivatives: ['commitment n. 承诺', 'committed adj. 忠诚的'],
    wordForms: { noun: 'commitment', adjective: 'committed', pastTense: 'committed', pastParticiple: 'committed', presentParticiple: 'committing' },
    synonyms: ['pledge 保证', 'promise 承诺', 'dedicate 致力于', 'devote 奉献'],
    antonyms: ['abandon 放弃', 'withdraw 撤回', 'quit 放弃'],
    examPoints: ['commit a crime/suicide/error 犯罪/自杀/犯错', 'be committed to + doing 致力于做(接动名词)']
  },
  communicate: {
    collocations: ['communicate with 与...交流', 'communicate sth to 把...传达给'],
    derivatives: ['communication n. 交流', 'communicative adj. 健谈的', 'communicator n. 沟通者'],
    wordForms: { noun: 'communication', adjective: 'communicative', pastTense: 'communicated', pastParticiple: 'communicated', presentParticiple: 'communicating' },
    synonyms: ['convey 传达', 'transmit 传输', 'share 分享', 'express 表达'],
    antonyms: ['withhold 保留', 'conceal 隐藏', 'hide 隐藏'],
    examPoints: ['communicate with sb 与某人交流', 'communication 不可数名词']
  },
  compare: {
    collocations: ['compare A with B 把A与B比较', 'compare A to B 把A比作B', 'compared with/to 与...相比', 'beyond compare 无与伦比'],
    derivatives: ['comparison n. 比较', 'comparative adj. 比较的', 'comparable adj. 可比较的'],
    wordForms: { noun: 'comparison', adjective: 'comparable', pastTense: 'compared', pastParticiple: 'compared', presentParticiple: 'comparing' },
    synonyms: ['contrast 对比', 'evaluate 评估', 'assess 评估', 'match 匹配'],
    antonyms: ['distinguish 区分', 'differentiate 区分', 'contrast 对比'],
    examPoints: ['compare with (比较差异)', 'compare to (比喻)', 'compared to/with 作状语']
  },
  compete: {
    collocations: ['compete with/against 与...竞争', 'compete for 争夺', 'compete in 参加比赛'],
    derivatives: ['competition n. 竞争', 'competitor n. 竞争者', 'competitive adj. 有竞争力的', 'competence n. 能力'],
    wordForms: { noun: 'competition', adjective: 'competitive', pastTense: 'competed', pastParticiple: 'competed', presentParticiple: 'competing' },
    synonyms: ['contend 争夺', 'rival 竞争', 'contest 竞争', 'vie 竞争'],
    antonyms: ['cooperate 合作', 'collaborate 合作', 'yield 屈服'],
    examPoints: ['compete against/with sb for sth 与某人竞争某物', 'competition 可数']
  },
  complain: {
    collocations: ['complain about 抱怨', 'complain to sb 向某人投诉', 'complain that 抱怨说'],
    derivatives: ['complaint n. 抱怨', 'complainant n. 投诉人'],
    wordForms: { noun: 'complaint', pastTense: 'complained', pastParticiple: 'complained', presentParticiple: 'complaining' },
    synonyms: ['protest 抗议', 'grumble 抱怨', 'object 反对', 'criticize 批评'],
    antonyms: ['praise 赞扬', 'commend 表扬', 'applaud 鼓掌'],
    examPoints: ['complain to sb about sth 向某人抱怨某事', 'make a complaint 投诉']
  },
  concern: {
    collocations: ['be concerned about 关心', 'as far as...be concerned 就...而言', 'concern oneself with 关心', 'of concern 令人担忧的'],
    derivatives: ['concerned adj. 关心的', 'concerning prep. 关于', 'unconcerned adj. 不关心的'],
    wordForms: { adjective: 'concerned', pastTense: 'concerned', pastParticiple: 'concerned', presentParticiple: 'concerning' },
    synonyms: ['worry 担心', 'involve 涉及', 'relate to 有关', 'affect 影响'],
    antonyms: ['ignore 忽视', 'disregard 无视', 'overlook 忽略'],
    examPoints: ['as far as I\'m concerned 就我而言', 'concerned(前置=有关的, 后置=关切的)']
  },
  conclude: {
    collocations: ['conclude that 得出结论', 'conclude by doing 以...结束', 'to conclude 总之'],
    derivatives: ['conclusion n. 结论', 'conclusive adj. 决定性的'],
    wordForms: { noun: 'conclusion', adjective: 'conclusive', pastTense: 'concluded', pastParticiple: 'concluded', presentParticiple: 'concluding' },
    synonyms: ['finish 完成', 'end 结束', 'decide 决定', 'determine 决定'],
    antonyms: ['begin 开始', 'start 开始', 'commence 开始'],
    examPoints: ['draw/reach a conclusion 得出结论', 'in conclusion 最后']
  },
  condition: {
    collocations: ['on condition that 条件是', 'in good condition 状况良好', 'under...conditions 在...条件下'],
    derivatives: ['conditional adj. 有条件的', 'conditioner n. 护发素'],
    wordForms: { adjective: 'conditional' },
    synonyms: ['state 陈述', 'situation 情况', 'circumstance 情况', 'requirement 要求'],
    antonyms: [],
    examPoints: ['on condition that = provided that 条件是', 'conditions 复数=环境/条件']
  },
  conduct: {
    collocations: ['conduct a survey 进行调查', 'conduct an experiment 做实验', 'conduct oneself 表现'],
    derivatives: ['conductor n. 指挥；导体', 'conduction n. 传导', 'conductive adj. 导电的'],
    wordForms: { noun: 'conduction', adjective: 'conductive', pastTense: 'conducted', pastParticiple: 'conducted', presentParticiple: 'conducting' },
    synonyms: ['carry out 执行', 'perform 执行', 'direct 指导', 'guide 引导', 'behavior 行为'],
    antonyms: ['misconduct 不当行为'],
    examPoints: ['conduct(v.执行) /kənˈdʌkt/', 'conduct(n.行为) /ˈkɒndʌkt/']
  },
  confidence: {
    collocations: ['have confidence in 对...有信心', 'with confidence 自信地', 'lack confidence 缺乏信心'],
    derivatives: ['confident adj. 自信的', 'confidently adv. 自信地', 'confide v. 吐露', 'confidential adj. 机密的'],
    wordForms: { adjective: 'confident', adverb: 'confidently' },
    synonyms: ['assurance 保证', 'certainty 确定', 'trust 信任', 'faith 信任'],
    antonyms: ['doubt 怀疑', 'uncertainty 不确定', 'timidity 胆怯'],
    examPoints: ['be confident of/about 对...有信心', 'have confidence in sb 对某人有信心']
  },
  confirm: {
    collocations: ['confirm that 确认', 'confirm sb in 使某人坚定', 'confirm a booking 确认预订'],
    derivatives: ['confirmation n. 确认', 'confirmed adj. 确认的'],
    wordForms: { noun: 'confirmation', adjective: 'confirmed', pastTense: 'confirmed', pastParticiple: 'confirmed', presentParticiple: 'confirming' },
    synonyms: ['verify 核实', 'validate 验证', 'prove 证明', 'establish 建立'],
    antonyms: ['deny 否认', 'contradict 反驳', 'refute 反驳'],
    examPoints: ['confirm + that 从句', 'confirmation 可数']
  },
  consider: {
    collocations: ['consider doing 考虑做', 'consider...as 把...看作', 'considering that 考虑到'],
    derivatives: ['consideration n. 考虑', 'considerate adj. 体贴的', 'considerable adj. 相当大的', 'considered adj. 深思熟虑的'],
    wordForms: { noun: 'consideration', adjective: 'considerable', pastTense: 'considered', pastParticiple: 'considered', presentParticiple: 'considering' },
    synonyms: ['think about 考虑', 'ponder 思考', 'contemplate 沉思', 'regard 看待'],
    antonyms: ['disregard 无视', 'ignore 忽视', 'overlook 忽略'],
    examPoints: ['后接 doing 不接 to do', 'considerate ≠ considerable(相当大的)']
  },
  contribute: {
    collocations: ['contribute to 贡献；导致', 'contribute A to B 把A贡献给B', 'make a contribution to 对...做出贡献'],
    derivatives: ['contribution n. 贡献', 'contributor n. 贡献者', 'contributory adj. 促成的'],
    wordForms: { noun: 'contribution', adjective: 'contributory', pastTense: 'contributed', pastParticiple: 'contributed', presentParticiple: 'contributing' },
    synonyms: ['donate 捐赠', 'provide 提供', 'add to 增加', 'lead to 导致'],
    antonyms: ['withhold 保留', 'detract 减损', 'subtract 减去'],
    examPoints: ['contribute to = lead to (to是介词)', 'make a contribution to 对...做出贡献']
  },
  convince: {
    collocations: ['convince sb of 使某人确信', 'convince sb to do 说服某人做', 'be convinced that 确信'],
    derivatives: ['convincing adj. 有说服力的', 'conviction n. 信念'],
    wordForms: { noun: 'conviction', adjective: 'convincing', pastTense: 'convinced', pastParticiple: 'convinced', presentParticiple: 'convincing' },
    synonyms: ['persuade 说服', 'assure 保证', 'satisfy 满足', 'prove to 证明'],
    antonyms: ['doubt 怀疑', 'disbelieve 不信', 'dissuade 劝阻'],
    examPoints: ['convince sb of sth 使某人确信某事', 'be convinced that 确信', 'convincing argument 令人信服的论点']
  },
  create: {
    collocations: ['create jobs 创造就业', 'create a good impression 留下好印象', 'create conditions 创造条件'],
    derivatives: ['creation n. 创造', 'creative adj. 有创造力的', 'creativity n. 创造力', 'creator n. 创造者', 'creature n. 生物'],
    wordForms: { noun: 'creation', adjective: 'creative', pastTense: 'created', pastParticiple: 'created', presentParticiple: 'creating' },
    synonyms: ['produce 生产', 'make 制造', 'generate 产生', 'invent 发明', 'establish 建立'],
    antonyms: ['destroy 破坏', 'demolish 拆除', 'ruin 毁坏', 'annihilate 消灭'],
    examPoints: ['creative = innovative 有创造力的', 'creature = living being 生物']
  },
  decide: {
    collocations: ['decide to do 决定做', 'decide on 决定选用', 'decide against 决定不'],
    derivatives: ['decision n. 决定', 'decisive adj. 决定性的', 'decidedly adv. 果断地'],
    wordForms: { noun: 'decision', adjective: 'decisive', adverb: 'decidedly', pastTense: 'decided', pastParticiple: 'decided', presentParticiple: 'deciding' },
    synonyms: ['determine 决定', 'resolve 解决', 'settle 解决', 'conclude 得出结论'],
    antonyms: ['hesitate 犹豫', 'waver 动摇', 'delay 延迟'],
    examPoints: ['decide to do = make a decision to do 决定做', 'decisive = determining 决定性的']
  },
  declare: {
    collocations: ['declare war on 对...宣战', 'declare that 宣布', 'declare oneself 表明立场'],
    derivatives: ['declaration n. 宣布', 'declared adj. 公开宣称的'],
    wordForms: { noun: 'declaration', pastTense: 'declared', pastParticiple: 'declared', presentParticiple: 'declaring' },
    synonyms: ['announce 宣布', 'proclaim 宣告', 'state 陈述', 'assert 断言'],
    antonyms: ['conceal 隐藏', 'hide 隐藏', 'withhold 保留'],
    examPoints: ['declare + that 从句', 'Declaration of Independence 独立宣言']
  },
  decline: {
    collocations: ['decline to do 拒绝做', 'on the decline 在下降', 'a sharp decline 急剧下降'],
    derivatives: [],
    wordForms: { pastTense: 'declined', pastParticiple: 'declined', presentParticiple: 'declining' },
    synonyms: ['decrease 减少', 'drop 下降', 'fall 落下', 'refuse 拒绝', 'reject 拒绝'],
    antonyms: ['increase 增加', 'rise 上升', 'accept 接受', 'improve 改善'],
    examPoints: ['decline to do = refuse to do 拒绝做', 'decline 作名词=下降趋势']
  },
  defend: {
    collocations: ['defend against 防御', 'defend sb from 保护某人免受', 'defend one\'s rights 捍卫权利'],
    derivatives: ['defense n. 防御', 'defensive adj. 防御性的', 'defendant n. 被告', 'defender n. 防御者'],
    wordForms: { noun: 'defense', adjective: 'defensive', pastTense: 'defended', pastParticiple: 'defended', presentParticiple: 'defending' },
    synonyms: ['protect 保护', 'guard 守卫', 'shield 保护', 'safeguard 保护'],
    antonyms: ['attack 攻击', 'assault 袭击', 'invade 入侵'],
    examPoints: ['defend sb from/against 保护某人免受', 'in defense of 保卫']
  },
  deliver: {
    collocations: ['deliver a speech 发表演讲', 'deliver goods 送货', 'deliver a baby 接生'],
    derivatives: ['delivery n. 递送', 'deliveryman n. 送货员'],
    wordForms: { noun: 'delivery', pastTense: 'delivered', pastParticiple: 'delivered', presentParticiple: 'delivering' },
    synonyms: ['convey 传达', 'transport 运输', 'hand over 移交', 'give 给予'],
    antonyms: ['receive 收到', 'collect 收集', 'retain 保留'],
    examPoints: ['deliver a speech/lecture 发表演讲/讲座', 'take delivery of 收货']
  },
  demand: {
    collocations: ['demand to do 要求做', 'in demand 有需求', 'meet the demand 满足需求', 'on demand 一经要求'],
    derivatives: ['demanding adj. 要求高的'],
    wordForms: { adjective: 'demanding', pastTense: 'demanded', pastParticiple: 'demanded', presentParticiple: 'demanding' },
    synonyms: ['require 需要', 'request 请求', 'insist 坚持', 'need 需要'],
    antonyms: ['supply 供应', 'offer 提供', 'grant 授予'],
    examPoints: ['demand + that 从句用虚拟语气(should + do)', 'in demand ≠ on demand 有需求 ≠ 按需(易混)']
  },
  depend: {
    collocations: ['depend on 依赖', 'depend on sb to do 指望某人做', 'it depends 视情况而定'],
    derivatives: ['dependence n. 依赖', 'dependent adj. 依赖的', 'independent adj. 独立的', 'independence n. 独立'],
    wordForms: { noun: 'dependence', adjective: 'dependent' },
    synonyms: ['rely 依赖', 'count on 依靠', 'hinge on 取决于', 'rest on 依靠'],
    antonyms: ['independent 独立的', 'autonomous 自主的', 'self-sufficient 自给自足的'],
    examPoints: ['depend on = rely on 依赖', 'dependent on ≠ independent of 依赖 ≠ 独立']
  },
  describe: {
    collocations: ['describe...as 把...描述为', 'describe in detail 详细描述'],
    derivatives: ['description n. 描述', 'descriptive adj. 描述性的'],
    wordForms: { noun: 'description', adjective: 'descriptive', pastTense: 'described', pastParticiple: 'described', presentParticiple: 'describing' },
    synonyms: ['depict 描绘', 'portray 描绘', 'characterize 描述', 'illustrate 说明'],
    antonyms: [],
    examPoints: ['describe A as B 把A描述为B', 'beyond description 难以描述']
  },
  desire: {
    collocations: ['desire to do 渴望做', 'desire for 渴望', 'at sb\'s desire 应某人要求'],
    derivatives: ['desirable adj. 令人向往的', 'undesirable adj. 不想要的'],
    wordForms: { adjective: 'desirable', pastTense: 'desired', pastParticiple: 'desired', presentParticiple: 'desiring' },
    synonyms: ['want 想要', 'wish 希望', 'long for 渴望', 'crave 渴望'],
    antonyms: ['dislike 不喜欢', 'despise 鄙视', 'reject 拒绝'],
    examPoints: ['desire to do 渴望做', 'desirable ≠ desirous(渴望的)']
  },
  determine: {
    collocations: ['determine to do 决心做', 'be determined to do 下定决心', 'determine on 决定'],
    derivatives: ['determination n. 决心', 'determined adj. 坚决的'],
    wordForms: { noun: 'determination', adjective: 'determined', pastTense: 'determined', pastParticiple: 'determined', presentParticiple: 'determining' },
    synonyms: ['decide 决定', 'resolve 解决', 'establish 建立', 'ascertain 查明'],
    antonyms: ['hesitate 犹豫', 'waver 动摇', 'fluctuate 波动'],
    examPoints: ['determine to do (动作)', 'be determined to do (状态)']
  },
  develop: {
    collocations: ['develop from 从...发展而来', 'develop into 发展成为', 'develop a habit 养成习惯'],
    derivatives: ['development n. 发展', 'developing adj. 发展中的', 'developed adj. 发达的', 'developer n. 开发者'],
    wordForms: { noun: 'development', adjective: 'developed', pastTense: 'developed', pastParticiple: 'developed', presentParticiple: 'developing' },
    synonyms: ['grow 增长', 'expand 扩大', 'evolve 演变', 'progress 进步'],
    antonyms: ['decline 拒绝；下降', 'regress 倒退', 'deteriorate 恶化'],
    examPoints: ['developing country 发展中国家', 'developed country 发达国家']
  },
  devote: {
    collocations: ['devote oneself to 致力于', 'devote...to doing 把...奉献给', 'be devoted to 专心于'],
    derivatives: ['devotion n. 奉献', 'devoted adj. 忠诚的'],
    wordForms: { noun: 'devotion', adjective: 'devoted', pastTense: 'devoted', pastParticiple: 'devoted', presentParticiple: 'devoting' },
    synonyms: ['dedicate 致力于', 'commit 承诺', 'pledge 保证', 'allocate 分配'],
    antonyms: ['neglect 忽视', 'abandon 放弃', 'ignore 忽视'],
    examPoints: ['devote...to doing (to是介词)', 'be devoted to + doing/名词']
  },
  discover: {
    collocations: ['discover that 发现', 'discover sb doing 发现某人在做'],
    derivatives: ['discovery n. 发现', 'discoverer n. 发现者'],
    wordForms: { noun: 'discovery', pastTense: 'discovered', pastParticiple: 'discovered', presentParticiple: 'discovering' },
    synonyms: ['find 找到', 'detect 察觉', 'uncover 揭露', 'reveal 揭示', 'unearth 发掘'],
    antonyms: ['hide 隐藏', 'conceal 隐藏', 'cover 覆盖', 'bury 埋葬'],
    examPoints: ['make a discovery 做出发现', 'discover sb doing sth 发现某人正在做']
  },
  effective: {
    collocations: ['effective measures 有效措施', 'become effective 生效', 'effective in 在...方面有效'],
    derivatives: ['effect n. 效果', 'effectively adv. 有效地', 'effectiveness n. 有效性'],
    wordForms: { noun: 'effect', adverb: 'effectively' },
    synonyms: ['efficient 高效的', 'productive 多产的', 'successful 成功的', 'potent 有效的'],
    antonyms: ['ineffective 无效的', 'useless 无用的', 'futile 徒劳的'],
    examPoints: ['effective(有效果的) ≠ efficient(有效率的)', 'take effect 生效']
  },
  effort: {
    collocations: ['make an effort to do 努力做', 'spare no effort to do 不遗余力', 'with effort 费力地', 'efforts to do 努力做'],
    derivatives: [],
    wordForms: {},
    synonyms: ['attempt 尝试', 'endeavor 努力', 'struggle 挣扎', 'exertion 努力'],
    antonyms: ['ease 减轻', 'laziness 懒惰', 'idleness 懒惰'],
    examPoints: ['make an effort/efforts to do 努力做', 'spare no effort to do 不遗余力做']
  },
  employ: {
    collocations: ['employ sb to do 雇佣某人做', 'be employed in 从事于', 'employ a method 使用方法'],
    derivatives: ['employee n. 雇员', 'employer n. 雇主', 'employment n. 就业', 'unemployment n. 失业', 'unemployed adj. 失业的'],
    wordForms: { noun: 'employment', adjective: 'employed', pastTense: 'employed', pastParticiple: 'employed', presentParticiple: 'employing' },
    synonyms: ['hire 雇佣', 'engage 参与', 'recruit 招募', 'use 使用', 'apply 申请'],
    antonyms: ['fire 解雇', 'dismiss 解雇', 'lay off 解雇', 'unemploy 解雇'],
    examPoints: ['employ = use (使用方法)', 'be employed in doing 从事于']
  },
  encourage: {
    collocations: ['encourage sb to do 鼓励某人做', 'encourage sb in sth 在...方面鼓励'],
    derivatives: ['encouragement n. 鼓励', 'encouraging adj. 令人鼓舞的'],
    wordForms: { noun: 'encouragement', adjective: 'encouraging', pastTense: 'encouraged', pastParticiple: 'encouraged', presentParticiple: 'encouraging' },
    synonyms: ['inspire 激励', 'motivate 激励', 'urge 催促', 'support 支持'],
    antonyms: ['discourage 使气馁', 'deter 阻止', 'dishearten 使灰心'],
    examPoints: ['encourage sb to do (反义: discourage sb from doing)', 'encouraging news 令人鼓舞的消息']
  },
  environment: {
    collocations: ['protect the environment 保护环境', 'in a...environment 在...环境中'],
    derivatives: ['environmental adj. 环境的', 'environmentally adv. 环境方面地', 'environmentalist n. 环保主义者'],
    wordForms: { adjective: 'environmental', adverb: 'environmentally' },
    synonyms: ['surroundings 环境', 'setting 环境', 'habitat 栖息地', 'context 背景'],
    antonyms: [],
    examPoints: ['environmental protection 环境保护', 'environmentally friendly 环保的']
  },
  establish: {
    collocations: ['establish a company 创办公司', 'establish a relationship 建立关系', 'establish oneself as 确立自己为'],
    derivatives: ['establishment n. 建立', 'established adj. 既定的'],
    wordForms: { noun: 'establishment', adjective: 'established', pastTense: 'established', pastParticiple: 'established', presentParticiple: 'establishing' },
    synonyms: ['set up 建立', 'found 建立', 'create 创造', 'institute 建立'],
    antonyms: ['abolish 废除', 'dismantle 拆除', 'destroy 破坏'],
    examPoints: ['establish = set up 建立', 'an established fact 既定事实']
  },
  evaluate: {
    collocations: ['evaluate the effect 评估效果', 'evaluate performance 评估表现'],
    derivatives: ['evaluation n. 评估', 'evaluator n. 评估者'],
    wordForms: { noun: 'evaluation', pastTense: 'evaluated', pastParticiple: 'evaluated', presentParticiple: 'evaluating' },
    synonyms: ['assess 评估', 'appraise 评估', 'judge 判断', 'rate 评估'],
    antonyms: ['guess 猜测', 'speculate 推测', 'ignore 忽视'],
    examPoints: ['evaluate = assess 评估', 'make an evaluation 做出评估']
  },
  evidence: {
    collocations: ['evidence for...的证据', 'in evidence 显而易见', 'provide evidence 提供证据'],
    derivatives: ['evident adj. 明显的', 'evidently adv. 显然地'],
    wordForms: { adjective: 'evident', adverb: 'evidently' },
    synonyms: ['proof 证明', 'indication 指示', 'sign 标志', 'testimony 证词'],
    antonyms: ['concealment 隐藏', 'hiding 隐藏'],
    examPoints: ['evidence 不可数名词', 'evident = obvious 明显的']
  },
  examine: {
    collocations: ['examine carefully 仔细检查', 'examine sb on 考查某人'],
    derivatives: ['examination n. 检查；考试', 'examiner n. 考官', 'examinee n. 考生'],
    wordForms: { noun: 'examination', pastTense: 'examined', pastParticiple: 'examined', presentParticiple: 'examining' },
    synonyms: ['inspect 检查', 'investigate 调查', 'analyze 分析', 'test 测试'],
    antonyms: ['ignore 忽视', 'overlook 忽略', 'neglect 忽视'],
    examPoints: ['examination = exam 考试(缩写)', 'medical examination 体检']
  },
  exist: {
    collocations: ['exist in 存在于', 'exist on 靠...生存', 'come into existence 产生'],
    derivatives: ['existence n. 存在', 'existent adj. 存在的', 'coexistence n. 共存'],
    wordForms: { noun: 'existence', adjective: 'existent' },
    synonyms: ['be 是', 'live 生活', 'survive 幸存', 'occur 发生'],
    antonyms: ['die 死亡', 'disappear 消失', 'vanish 消失', 'cease 停止'],
    examPoints: ['come into existence = come into being 形成', 'in existence 现存的']
  },
  expand: {
    collocations: ['expand into 扩展到', 'expand on 详述'],
    derivatives: ['expansion n. 扩张', 'expansive adj. 广阔的'],
    wordForms: { noun: 'expansion', adjective: 'expansive', pastTense: 'expanded', pastParticiple: 'expanded', presentParticiple: 'expanding' },
    synonyms: ['enlarge 扩大', 'extend 延伸', 'grow 增长', 'broaden 拓宽'],
    antonyms: ['shrink 缩小', 'contract 收缩', 'reduce 减少', 'diminish 减少'],
    examPoints: ['expand ≠ expend(花费)', 'expansion 不可数']
  },
  explain: {
    collocations: ['explain sth to sb 向某人解释', 'explain that 解释说', 'explain oneself 说明意图'],
    derivatives: ['explanation n. 解释', 'explanatory adj. 解释性的'],
    wordForms: { noun: 'explanation', adjective: 'explanatory', pastTense: 'explained', pastParticiple: 'explained', presentParticiple: 'explaining' },
    synonyms: ['clarify 澄清', 'elucidate 阐明', 'illustrate 说明', 'demonstrate 证明'],
    antonyms: ['confuse 混淆', 'obscure 掩盖', 'muddle 混淆'],
    examPoints: ['explain sth to sb (不是 explain sb sth)', 'give an explanation 做出解释']
  },
  explore: {
    collocations: ['explore the possibility 探索可能性', 'explore the world 探索世界'],
    derivatives: ['exploration n. 探索', 'explorer n. 探险家', 'exploratory adj. 探索性的'],
    wordForms: { noun: 'exploration', adjective: 'exploratory', pastTense: 'explored', pastParticiple: 'explored', presentParticiple: 'exploring' },
    synonyms: ['investigate 调查', 'discover 发现', 'examine 检查', 'probe 探究'],
    antonyms: ['ignore 忽视', 'neglect 忽视', 'overlook 忽略'],
    examPoints: ['exploration 不可数', 'space exploration 太空探索']
  },
  expose: {
    collocations: ['be exposed to 暴露于', 'expose sb to 使某人接触', 'expose oneself 暴露自己'],
    derivatives: ['exposure n. 暴露', 'exposed adj. 暴露的'],
    wordForms: { noun: 'exposure', adjective: 'exposed', pastTense: 'exposed', pastParticiple: 'exposed', presentParticiple: 'exposing' },
    synonyms: ['reveal 揭示', 'uncover 揭露', 'disclose 揭露', 'show 展示'],
    antonyms: ['hide 隐藏', 'conceal 隐藏', 'cover 覆盖', 'shield 保护'],
    examPoints: ['be exposed to + 名词', 'exposure to sth 暴露于某物']
  },
  express: {
    collocations: ['express oneself 表达自己', 'express concern 表达关切', 'express one\'s thanks 表达感谢'],
    derivatives: ['expression n. 表达', 'expressive adj. 富有表现力的', 'expressly adv. 明确地'],
    wordForms: { noun: 'expression', adjective: 'expressive', adverb: 'expressly', pastTense: 'expressed', pastParticiple: 'expressed', presentParticiple: 'expressing' },
    synonyms: ['convey 传达', 'communicate 交流', 'state 陈述', 'articulate 表达'],
    antonyms: ['suppress 镇压', 'repress 压抑', 'conceal 隐藏'],
    examPoints: ['expression 可数(表情)不可数(表达)', 'freedom of expression 言论自由']
  },
  fail: {
    collocations: ['fail to do 未能做', 'fail in 在...失败', 'without fail 务必'],
    derivatives: ['failure n. 失败', 'failing n. 缺点'],
    wordForms: { noun: 'failure', pastTense: 'failed', pastParticiple: 'failed', presentParticiple: 'failing' },
    synonyms: ['not succeed 失败', 'fall short 未达到', 'miss 错过'],
    antonyms: ['succeed 成功', 'achieve 实现', 'accomplish 完成'],
    examPoints: ['fail to do = fail in doing 做某事失败', 'failure is the mother of success 失败是成功之母']
  },
  familiar: {
    collocations: ['be familiar with 熟悉', 'be familiar to 为...所熟知'],
    derivatives: ['familiarity n. 熟悉', 'familiarize v. 使熟悉', 'unfamiliar adj. 不熟悉的'],
    wordForms: { noun: 'familiarity', verb: 'familiarize' },
    synonyms: ['acquainted 熟识的', 'known 已知的', 'recognized 公认的', 'common 常见的'],
    antonyms: ['unfamiliar 不熟悉的', 'unknown 未知的', 'strange 陌生的'],
    examPoints: ['be familiar with (人熟悉物)', 'be familiar to (物为人熟知)']
  },
  finance: {
    collocations: ['finance a project 为项目提供资金', 'in finance 在金融领域'],
    derivatives: ['financial adj. 金融的', 'financially adv. 金融地', 'financier n. 金融家'],
    wordForms: { adjective: 'financial', adverb: 'financially' },
    synonyms: ['fund 资助', 'back 后退', 'sponsor 赞助', 'bankroll 资助'],
    antonyms: ['bankrupt 破产的', 'default 违约'],
    examPoints: ['financial crisis 金融危机', 'financially stable 财务稳定的']
  },
  focus: {
    collocations: ['focus on 集中于', 'focus one\'s attention on 集中注意力于', 'bring into focus 使明确'],
    derivatives: [],
    wordForms: { pastTense: 'focused', pastParticiple: 'focused', presentParticiple: 'focusing' },
    synonyms: ['concentrate 集中', 'center 集中', 'fix 修理', 'direct 指导'],
    antonyms: ['distract 分散', 'divert 转移', 'scatter 分散'],
    examPoints: ['focus on = concentrate on 集中于', 'focus 复数 focuses/foci']
  },
  function: {
    collocations: ['function as 起...作用', 'perform a function 发挥功能'],
    derivatives: ['functional adj. 功能的', 'functionally adv. 功能上地', 'malfunction n. 故障'],
    wordForms: { adjective: 'functional', adverb: 'functionally', pastTense: 'functioned', pastParticiple: 'functioned', presentParticiple: 'functioning' },
    synonyms: ['work 工作', 'operate 操作', 'serve 服务', 'role 角色'],
    antonyms: ['malfunction 故障', 'fail 失败', 'break down 崩溃'],
    examPoints: ['function as = serve as 充当', 'functional = working 功能性的']
  },
  generate: {
    collocations: ['generate electricity 发电', 'generate income 创造收入', 'generate interest 引起兴趣'],
    derivatives: ['generation n. 一代', 'generator n. 发电机', 'generative adj. 产生的'],
    wordForms: { noun: 'generation', adjective: 'generative', pastTense: 'generated', pastParticiple: 'generated', presentParticiple: 'generating' },
    synonyms: ['produce 生产', 'create 创造', 'make 制造', 'yield 屈服'],
    antonyms: ['destroy 破坏', 'eliminate 消除', 'consume 消耗'],
    examPoints: ['generate heat/electricity/income 产生热/电/收入', 'the younger generation 年轻一代']
  },
  handle: {
    collocations: ['handle a problem 处理问题', 'handle with care 小心轻放'],
    derivatives: [],
    wordForms: { pastTense: 'handled', pastParticiple: 'handled', presentParticiple: 'handling' },
    synonyms: ['deal with 处理', 'manage 管理', 'tackle 处理', 'address 处理；演说'],
    antonyms: ['ignore 忽视', 'neglect 忽视', 'avoid 避免'],
    examPoints: ['handle = deal with 处理', 'handle with care 小心轻放']
  },
  identify: {
    collocations: ['identify A with B 把A等同于B', 'identify oneself 自我介绍', 'be identified as 被认定为'],
    derivatives: ['identification n. 识别', 'identical adj. 相同的', 'identity n. 身份'],
    wordForms: { noun: 'identification', adjective: 'identical', pastTense: 'identified', pastParticiple: 'identified', presentParticiple: 'identifying' },
    synonyms: ['recognize 认出', 'distinguish 区分', 'spot 发现', 'detect 察觉'],
    antonyms: ['confuse 混淆', 'mistake 弄错', 'misidentify 误认'],
    examPoints: ['identify with sb 认同某人', 'identity card 身份证']
  },
  imagine: {
    collocations: ['imagine doing 想象做', 'imagine that 想象', 'imagine sb doing 想象某人做'],
    derivatives: ['imagination n. 想象力', 'imaginative adj. 富有想象力的', 'imaginary adj. 虚构的', 'imaginable adj. 可想象的'],
    wordForms: { noun: 'imagination', adjective: 'imaginative', pastTense: 'imagined', pastParticiple: 'imagined', presentParticiple: 'imagining' },
    synonyms: ['visualize 想象', 'picture 想象', 'conceive 构想', 'fantasize 幻想'],
    antonyms: ['realize 意识到', 'perceive 察觉', 'experience 经历'],
    examPoints: ['后接 doing 不接 to do', 'imaginative ≠ imaginary(虚构的)']
  },
  improve: {
    collocations: ['improve on/upon 改进', 'improve one\'s English 提高英语', 'improve the situation 改善状况'],
    derivatives: ['improvement n. 改进'],
    wordForms: { noun: 'improvement', pastTense: 'improved', pastParticiple: 'improved', presentParticiple: 'improving' },
    synonyms: ['enhance 增强', 'better 改善', 'upgrade 升级', 'refine 精炼'],
    antonyms: ['worsen 恶化', 'deteriorate 恶化', 'decline 拒绝；下降'],
    examPoints: ['improve on = do better than 改进', 'room for improvement 改进空间']
  },
  include: {
    collocations: ['include sth in 把...包括在', 'including... 包括...', 'included 包括在内的'],
    derivatives: ['inclusion n. 包含', 'inclusive adj. 包含的'],
    wordForms: { noun: 'inclusion', adjective: 'inclusive', pastTense: 'included', pastParticiple: 'included', presentParticiple: 'including' },
    synonyms: ['contain 包含', 'comprise 包含', 'involve 涉及', 'encompass 包含'],
    antonyms: ['exclude 排除', 'omit 省略', 'leave out 遗漏'],
    examPoints: ['including + 名词 (主动)', 'included 放名词后 (被动)']
  },
  influence: {
    collocations: ['have an influence on 对...有影响', 'under the influence of 在...影响下', 'influence sb to do 影响某人做'],
    derivatives: ['influential adj. 有影响力的'],
    wordForms: { adjective: 'influential', pastTense: 'influenced', pastParticiple: 'influenced', presentParticiple: 'influencing' },
    synonyms: ['affect 影响', 'impact 影响', 'shape 塑造', 'persuade 说服'],
    antonyms: ['ignore 忽视', 'neglect 忽视', 'disregard 无视'],
    examPoints: ['have an influence on = have an effect on 对...有影响', 'influential figure 有影响力的人物']
  },
  inform: {
    collocations: ['inform sb of sth 告知某人', 'inform sb that 通知某人', 'keep sb informed 让某人知情'],
    derivatives: ['information n. 信息', 'informative adj. 信息量大的', 'informed adj. 见多识广的'],
    wordForms: { noun: 'information', adjective: 'informative', pastTense: 'informed', pastParticiple: 'informed', presentParticiple: 'informing' },
    synonyms: ['notify 通知', 'tell 告诉', 'advise 建议', 'apprize 告知'],
    antonyms: ['conceal 隐藏', 'hide 隐藏', 'withhold 保留'],
    examPoints: ['inform sb of sth (不是 inform sb sth)', 'information 不可数']
  },
  insist: {
    collocations: ['insist on doing 坚持做', 'insist that 坚持说', 'insist on one\'s opinion 坚持己见'],
    derivatives: ['insistence n. 坚持', 'insistent adj. 坚持的'],
    wordForms: { noun: 'insistence', adjective: 'insistent', pastTense: 'insisted', pastParticiple: 'insisted', presentParticiple: 'insisting' },
    synonyms: ['persist 坚持', 'maintain 维持', 'demand 要求', 'urge 催促'],
    antonyms: ['yield 屈服', 'give in 屈服', 'concede 让步'],
    examPoints: ['insist on doing 坚持做', 'insist that + 虚拟语气(should + do) 表示"坚持要求"']
  },
  intend: {
    collocations: ['intend to do 打算做', 'intend sb for 打算让某人做', 'be intended for 专为...设计'],
    derivatives: ['intention n. 意图', 'intentional adj. 故意的', 'intentionally adv. 故意地'],
    wordForms: { noun: 'intention', adjective: 'intentional', adverb: 'intentionally', pastTense: 'intended', pastParticiple: 'intended', presentParticiple: 'intending' },
    synonyms: ['plan 计划', 'mean 意味着', 'aim 瞄准', 'design 设计'],
    antonyms: ['improvise 即兴', 'happen by chance 偶然发生'],
    examPoints: ['intend to do = mean to do 打算做', 'be intended for = be designed for 专为...设计']
  },
  involve: {
    collocations: ['involve sb in 让某人参与', 'be involved in 参与', 'involve doing 需要做'],
    derivatives: ['involvement n. 参与', 'involved adj. 复杂的；参与的'],
    wordForms: { noun: 'involvement', adjective: 'involved', pastTense: 'involved', pastParticiple: 'involved', presentParticiple: 'involving' },
    synonyms: ['include 包含', 'entail 需要', 'engage 参与', 'implicate 牵连'],
    antonyms: ['exclude 排除', 'eliminate 消除', 'omit 省略'],
    examPoints: ['involve doing (后接 doing)', 'be involved in = participate in 参与']
  },
  justify: {
    collocations: ['justify doing 为...辩护', 'be justified in 有理由做'],
    derivatives: ['justification n. 正当理由', 'justified adj. 有正当理由的'],
    wordForms: { noun: 'justification', adjective: 'justified', pastTense: 'justified', pastParticiple: 'justified', presentParticiple: 'justifying' },
    synonyms: ['defend 保卫', 'vindicate 证明', 'warrant 保证', 'excuse 原谅'],
    antonyms: ['condemn 谴责', 'blame 责备', 'criticize 批评'],
    examPoints: ['justify + doing/名词', 'be justified in doing 做某事是有正当理由的']
  },
  maintain: {
    collocations: ['maintain order 维持秩序', 'maintain contact 保持联系', 'maintain that 坚持'],
    derivatives: ['maintenance n. 维护', 'maintainable adj. 可维护的'],
    wordForms: { noun: 'maintenance', adjective: 'maintainable', pastTense: 'maintained', pastParticiple: 'maintained', presentParticiple: 'maintaining' },
    synonyms: ['keep 保持', 'preserve 保存', 'sustain 维持', 'uphold 维护'],
    antonyms: ['abandon 放弃', 'neglect 忽视', 'discontinue 中断'],
    examPoints: ['maintain = keep up 维持', 'maintenance 不可数']
  },
  observe: {
    collocations: ['observe sb do/doing 观察某人做', 'observe that 注意到', 'observe the rules 遵守规则'],
    derivatives: ['observation n. 观察', 'observer n. 观察者', 'observatory n. 天文台'],
    wordForms: { noun: 'observation', pastTense: 'observed', pastParticiple: 'observed', presentParticiple: 'observing' },
    synonyms: ['notice 注意', 'watch 观看', 'monitor 监控', 'heed 注意'],
    antonyms: ['ignore 忽视', 'overlook 忽略', 'disregard 无视'],
    examPoints: ['observe sb do (全过程)', 'observe sb doing (进行中)']
  },
  obtain: {
    collocations: ['obtain sth from 从...获得', 'obtain a degree 获得学位'],
    derivatives: ['obtainable adj. 可获得的'],
    wordForms: { adjective: 'obtainable', pastTense: 'obtained', pastParticiple: 'obtained', presentParticiple: 'obtaining' },
    synonyms: ['get 得到', 'acquire 获得', 'gain 获得', 'secure 确保'],
    antonyms: ['lose 失去', 'forfeit 丧失', 'give up 放弃'],
    examPoints: ['obtain = acquire 获得', 'formal usage 正式用法']
  },
  occur: {
    collocations: ['occur to sb 突然想到', 'it occurs to sb that 某人想到', 'occur unexpectedly 意外发生'],
    derivatives: ['occurrence n. 发生', 'occurrent adj. 正在发生的'],
    wordForms: { noun: 'occurrence', pastTense: 'occurred', pastParticiple: 'occurred', presentParticiple: 'occurring' },
    synonyms: ['happen 发生', 'take place 发生', 'arise 出现', 'come about 发生'],
    antonyms: ['cease 停止', 'stop 停止', 'fail to happen 未发生'],
    examPoints: ['双写 r: occurred/occurring', 'it occurs to sb that = sb suddenly realizes 某人突然想到']
  },
  offer: {
    collocations: ['offer to do 主动提出做', 'offer sb sth 提供某人某物', 'make an offer 提议'],
    derivatives: ['offering n. 祭品；提供物'],
    wordForms: { noun: 'offer', pastTense: 'offered', pastParticiple: 'offered', presentParticiple: 'offering' },
    synonyms: ['provide 提供', 'give 给予', 'present 呈现', 'propose 提议'],
    antonyms: ['refuse 拒绝', 'reject 拒绝', 'withdraw 撤回'],
    examPoints: ['offer sb sth = offer sth to sb 提供某人某物', 'offer to do (主动提出)']
  },
  oppose: {
    collocations: ['oppose doing 反对做', 'be opposed to 反对', 'as opposed to 与...相对'],
    derivatives: ['opposition n. 反对', 'opposite adj. 对面的', 'opponent n. 对手'],
    wordForms: { noun: 'opposition', adjective: 'opposite', pastTense: 'opposed', pastParticiple: 'opposed', presentParticiple: 'opposing' },
    synonyms: ['resist 抵抗', 'object to 反对', 'fight 战斗', 'combat 对抗'],
    antonyms: ['support 支持', 'favor 支持', 'endorse 认可', 'back 后退'],
    examPoints: ['be opposed to + doing/名词', 'as opposed to = rather than 而不是']
  },
  organize: {
    collocations: ['organize an activity 组织活动', 'organize one\'s thoughts 整理思路'],
    derivatives: ['organization n. 组织', 'organizer n. 组织者', 'organized adj. 有组织的', 'organizational adj. 组织的'],
    wordForms: { noun: 'organization', adjective: 'organized', pastTense: 'organized', pastParticiple: 'organized', presentParticiple: 'organizing' },
    synonyms: ['arrange 安排', 'coordinate 协调', 'plan 计划', 'structure 结构'],
    antonyms: ['disorganize 打乱', 'disrupt 破坏', 'scatter 分散'],
    examPoints: ['organize = arrange 组织', 'disorganized 杂乱无章的']
  },
  perform: {
    collocations: ['perform an operation 做手术', 'perform a play 演出', 'perform well 表现好'],
    derivatives: ['performance n. 表演；表现', 'performer n. 表演者'],
    wordForms: { noun: 'performance', pastTense: 'performed', pastParticiple: 'performed', presentParticiple: 'performing' },
    synonyms: ['carry out 执行', 'execute 执行', 'do 做', 'act 行动'],
    antonyms: ['fail 失败', 'neglect 忽视', 'ignore 忽视'],
    examPoints: ['perform a task/duty 执行任务/职责', 'give a performance 进行表演']
  },
  possess: {
    collocations: ['possess sth 拥有某物', 'be possessed of 具有'],
    derivatives: ['possession n. 拥有', 'possessive adj. 占有欲强的'],
    wordForms: { noun: 'possession', adjective: 'possessive', pastTense: 'possessed', pastParticiple: 'possessed', presentParticiple: 'possessing' },
    synonyms: ['own 拥有', 'have 有', 'hold 持有', 'acquire 获得'],
    antonyms: ['lose 失去', 'forfeit 丧失', 'lack 缺乏'],
    examPoints: ['in possession of (拥有)', 'in the possession of (被拥有)']
  },
  preserve: {
    collocations: ['preserve the environment 保护环境', 'preserve food 保存食物', 'preserve one\'s dignity 保持尊严'],
    derivatives: ['preservation n. 保存', 'preservative n. 防腐剂'],
    wordForms: { noun: 'preservation', pastTense: 'preserved', pastParticiple: 'preserved', presentParticiple: 'preserving' },
    synonyms: ['protect 保护', 'conserve 保存', 'maintain 维持', 'safeguard 保护'],
    antonyms: ['destroy 破坏', 'ruin 毁坏', 'abandon 放弃', 'discard 丢弃'],
    examPoints: ['preserve ≠ reserve(预留)', 'preservation 不可数']
  },
  prevent: {
    collocations: ['prevent sb from doing 阻止某人做', 'prevent disease 预防疾病'],
    derivatives: ['prevention n. 预防', 'preventive adj. 预防性的'],
    wordForms: { noun: 'prevention', adjective: 'preventive', pastTense: 'prevented', pastParticiple: 'prevented', presentParticiple: 'preventing' },
    synonyms: ['stop 停止', 'hinder 阻碍', 'obstruct 阻碍', 'deter 阻止'],
    antonyms: ['allow 允许', 'permit 允许', 'enable 使能够', 'facilitate 促进'],
    examPoints: ['prevent sb from doing = stop sb from doing 阻止某人做', 'prevention is better than cure 预防胜于治疗']
  },
  produce: {
    collocations: ['produce results 产生结果', 'produce evidence 提供证据'],
    derivatives: ['product n. 产品', 'production n. 生产', 'productive adj. 多产的', 'productivity n. 生产力', 'producer n. 生产者'],
    wordForms: { noun: 'product', adjective: 'productive', pastTense: 'produced', pastParticiple: 'produced', presentParticiple: 'producing' },
    synonyms: ['make 制造', 'create 创造', 'generate 产生', 'yield 屈服', 'manufacture 制造'],
    antonyms: ['consume 消耗', 'destroy 破坏', 'waste 浪费'],
    examPoints: ['product(产品) ≠ produce(n.农产品 /v.生产)', 'productive = fruitful 多产的']
  },
  promote: {
    collocations: ['promote development 促进发展', 'be promoted to 被提升为', 'promote a product 推销产品'],
    derivatives: ['promotion n. 促进；晋升', 'promotional adj. 促销的'],
    wordForms: { noun: 'promotion', adjective: 'promotional', pastTense: 'promoted', pastParticiple: 'promoted', presentParticiple: 'promoting' },
    synonyms: ['advance 前进', 'boost 提升', 'further 促进', 'elevate 提升'],
    antonyms: ['demote 降职', 'hinder 阻碍', 'impede 阻碍', 'discourage 使气馁'],
    examPoints: ['promote sb to + 职位', 'get a promotion 获得晋升']
  },
  propose: {
    collocations: ['propose to do 提议做', 'propose doing 建议做', 'propose that 提议', 'propose to sb 向某人求婚'],
    derivatives: ['proposal n. 提议', 'proposition n. 命题'],
    wordForms: { noun: 'proposal', pastTense: 'proposed', pastParticiple: 'proposed', presentParticiple: 'proposing' },
    synonyms: ['suggest 建议', 'recommend 推荐', 'put forward 提出', 'offer 提供'],
    antonyms: ['withdraw 撤回', 'retract 撤回', 'oppose 反对'],
    examPoints: ['propose + that + 虚拟语气(should + do)', 'make a proposal 提出建议']
  },
  prove: {
    collocations: ['prove that 证明', 'prove sb wrong 证明某人错了', 'prove to be 结果是'],
    derivatives: ['proof n. 证据', 'proven adj. 被证实的'],
    wordForms: { noun: 'proof', adjective: 'proven', pastTense: 'proved', pastParticiple: 'proved/proven', presentParticiple: 'proving' },
    synonyms: ['demonstrate 证明', 'confirm 确认', 'verify 核实', 'establish 建立'],
    antonyms: ['disprove 反驳', 'refute 反驳', 'contradict 反驳'],
    examPoints: ['prove to be = turn out to be 结果是', 'proof = evidence 证据']
  },
  provide: {
    collocations: ['provide sb with sth 提供某人某物', 'provide sth for sb 为某人提供', 'provide that 规定'],
    derivatives: ['provider n. 提供者', 'provision n. 供应；条款'],
    wordForms: { noun: 'provision', pastTense: 'provided', pastParticiple: 'provided', presentParticiple: 'providing' },
    synonyms: ['supply 供应', 'furnish 提供', 'give 给予', 'equip 装备'],
    antonyms: ['deprive 剥夺', 'withhold 保留', 'deny 否认'],
    examPoints: ['provide sb with sth = provide sth for sb 提供某人某物', 'provided that = if 如果(条件)']
  },
  realize: {
    collocations: ['realize one\'s dream 实现梦想', 'realize that 意识到', 'come to realize 逐渐意识到'],
    derivatives: ['realization n. 实现', 'realistic adj. 现实的', 'reality n. 现实', 'really adv. 真正地'],
    wordForms: { noun: 'realization', adjective: 'realistic', pastTense: 'realized', pastParticiple: 'realized', presentParticiple: 'realizing' },
    synonyms: ['achieve 实现', 'fulfill 实现', 'accomplish 完成', 'recognize 认出'],
    antonyms: ['fail 失败', 'miss 错过', 'ignore 忽视'],
    examPoints: ['realize(实现) ≠ realize(意识到) 两个意思', 'reality ≠ realty(不动产)']
  },
  recognize: {
    collocations: ['recognize sb as 承认某人为', 'recognize that 认识到'],
    derivatives: ['recognition n. 认出', 'recognizable adj. 可辨认的'],
    wordForms: { noun: 'recognition', adjective: 'recognizable', pastTense: 'recognized', pastParticiple: 'recognized', presentParticiple: 'recognizing' },
    synonyms: ['identify 识别', 'acknowledge 承认', 'admit 承认', 'realize 意识到'],
    antonyms: ['ignore 忽视', 'overlook 忽略', 'deny 否认'],
    examPoints: ['recognize = identify 识别', 'beyond recognition 认不出来']
  },
  reduce: {
    collocations: ['reduce by 减少了', 'reduce to 减少到', 'reduce costs 降低成本'],
    derivatives: ['reduction n. 减少'],
    wordForms: { noun: 'reduction', pastTense: 'reduced', pastParticiple: 'reduced', presentParticiple: 'reducing' },
    synonyms: ['decrease 减少', 'cut 削减', 'lower 降低', 'diminish 减少'],
    antonyms: ['increase 增加', 'raise 提高', 'elevate 提升', 'expand 扩大'],
    examPoints: ['reduce by (减少了多少)', 'reduce to (减少到多少)']
  },
  reflect: {
    collocations: ['reflect on 反思', 'reflect that 反映'],
    derivatives: ['reflection n. 反射；反思', 'reflective adj. 反思的'],
    wordForms: { noun: 'reflection', adjective: 'reflective', pastTense: 'reflected', pastParticiple: 'reflected', presentParticiple: 'reflecting' },
    synonyms: ['mirror 反映', 'show 展示', 'demonstrate 证明', 'consider 考虑'],
    antonyms: ['absorb 吸收', 'ignore 忽视', 'overlook 忽略'],
    examPoints: ['reflect on = think carefully about 反思', 'reflection in the mirror 镜中倒影']
  },
  regulate: {
    collocations: ['regulate the market 规范市场', 'regulate temperature 调节温度'],
    derivatives: ['regulation n. 规定', 'regulator n. 监管机构', 'regulatory adj. 监管的'],
    wordForms: { noun: 'regulation', adjective: 'regulatory', pastTense: 'regulated', pastParticiple: 'regulated', presentParticiple: 'regulating' },
    synonyms: ['control 控制', 'manage 管理', 'govern 统治', 'adjust 调整'],
    antonyms: ['deregulate 放松管制', 'free 释放', 'release 释放'],
    examPoints: ['regulations = rules 规章制度', 'regulatory body 监管机构']
  },
  relate: {
    collocations: ['relate to 与...有关', 'be related to 与...相关', 'relate A to B 把A与B联系起来'],
    derivatives: ['relation n. 关系', 'relationship n. 关系', 'relative n. 亲属 adj. 相对的', 'relatively adv. 相对地'],
    wordForms: { noun: 'relation', adjective: 'relative', adverb: 'relatively', pastTense: 'related', pastParticiple: 'related', presentParticiple: 'relating' },
    synonyms: ['connect 连接', 'link 连接', 'associate 联想', 'correlate 相关'],
    antonyms: ['disconnect 断开', 'separate 分离', 'dissociate 分离'],
    examPoints: ['relate to = be connected with 与...有关', 'in relation to = regarding 关于']
  },
  rely: {
    collocations: ['rely on 依赖', 'rely on sb to do 指望某人做', 'rely on doing 依靠做'],
    derivatives: ['reliance n. 依赖', 'reliable adj. 可靠的', 'reliability n. 可靠性'],
    wordForms: { noun: 'reliance', adjective: 'reliable', pastTense: 'relied', pastParticiple: 'relied', presentParticiple: 'relying' },
    synonyms: ['depend 依赖', 'count on 依靠', 'trust 信任', 'lean on 依靠'],
    antonyms: ['distrust 不信任', 'doubt 怀疑', 'suspect 怀疑'],
    examPoints: ['rely on = depend on 依赖', 'reliable = dependable 可靠的']
  },
  remain: {
    collocations: ['remain silent 保持沉默', 'remain to be done 尚待完成', 'remain in power 继续执政'],
    derivatives: ['remains n. 遗迹', 'remainder n. 剩余物'],
    wordForms: { noun: 'remainder', pastTense: 'remained', pastParticiple: 'remained', presentParticiple: 'remaining' },
    synonyms: ['stay 停留', 'continue 继续', 'persist 坚持', 'endure 忍受'],
    antonyms: ['leave 离开', 'depart 离开', 'change 改变', 'disappear 消失'],
    examPoints: ['remain + adj./n. (系动词)', 'remain to be done (被动)']
  },
  remember: {
    collocations: ['remember to do 记得要做', 'remember doing 记得做过', 'remember sb to sb 代某人问候'],
    derivatives: ['remembrance n. 纪念', 'memorable adj. 值得纪念的'],
    wordForms: { noun: 'remembrance', adjective: 'memorable', pastTense: 'remembered', pastParticiple: 'remembered', presentParticiple: 'remembering' },
    synonyms: ['recall 回忆', 'recollect 回忆', 'reminisce 回忆', 'commemorate 纪念'],
    antonyms: ['forget 忘记', 'overlook 忽略', 'neglect 忽视'],
    examPoints: ['remember to do (未做)', 'remember doing (已做)']
  },
  represent: {
    collocations: ['represent...as 把...描绘为', 'represent sb 代表某人', 'represent itself as 自称'],
    derivatives: ['representation n. 代表', 'representative n. 代表 adj. 典型的'],
    wordForms: { noun: 'representation', adjective: 'representative', pastTense: 'represented', pastParticiple: 'represented', presentParticiple: 'representing' },
    synonyms: ['stand for 代表', 'symbolize 象征', 'act for 代理', 'depict 描绘'],
    antonyms: ['misrepresent 歪曲', 'distort 歪曲'],
    examPoints: ['represent = stand for 代表', 'representative of 典型的']
  },
  require: {
    collocations: ['require sb to do 要求某人做', 'require doing 需要被做', 'require that 要求'],
    derivatives: ['requirement n. 要求', 'required adj. 必修的'],
    wordForms: { noun: 'requirement', adjective: 'required', pastTense: 'required', pastParticiple: 'required', presentParticiple: 'requiring' },
    synonyms: ['need 需要', 'demand 要求', 'ask 询问', 'necessitate 需要'],
    antonyms: ['excuse 原谅', 'exempt 豁免', 'waive 放弃'],
    examPoints: ['require doing = require to be done (被动含义)', 'meet the requirements 满足要求']
  },
  resolve: {
    collocations: ['resolve to do 决心做', 'resolve a problem 解决问题', 'resolve that 决定'],
    derivatives: ['resolution n. 决心；解决', 'resolute adj. 坚决的'],
    wordForms: { noun: 'resolution', adjective: 'resolute', pastTense: 'resolved', pastParticiple: 'resolved', presentParticiple: 'resolving' },
    synonyms: ['decide 决定', 'determine 决定', 'settle 解决', 'solve 解决'],
    antonyms: ['waver 动摇', 'hesitate 犹豫', 'delay 延迟'],
    examPoints: ['resolve a problem = solve a problem 解决问题', 'make a resolution 做出决定']
  },
  respond: {
    collocations: ['respond to 回应', 'respond by doing 以...回应'],
    derivatives: ['response n. 回应', 'responsible adj. 负责的', 'responsibility n. 责任'],
    wordForms: { noun: 'response', adjective: 'responsible', pastTense: 'responded', pastParticiple: 'responded', presentParticiple: 'responding' },
    synonyms: ['reply 回复', 'answer 回答', 'react 反应', 'acknowledge 承认'],
    antonyms: ['ignore 忽视', 'disregard 无视', 'neglect 忽视'],
    examPoints: ['respond to = reply to 回复', 'in response to 作为对...的回应']
  },
  result: {
    collocations: ['result in 导致', 'result from 由...引起', 'as a result 因此', 'as a result of 由于'],
    derivatives: [],
    wordForms: { pastTense: 'resulted', pastParticiple: 'resulted', presentParticiple: 'resulting' },
    synonyms: ['outcome 结果', 'consequence 后果', 'effect 效果', 'conclusion 结论'],
    antonyms: ['cause 导致', 'origin 起源', 'source 来源'],
    examPoints: ['result in (主动导致)', 'result from (被动源于)']
  },
  reveal: {
    collocations: ['reveal that 透露', 'reveal sth to sb 向某人透露', 'reveal oneself 显露'],
    derivatives: ['revelation n. 揭露', 'revealing adj. 揭露性的'],
    wordForms: { noun: 'revelation', adjective: 'revealing', pastTense: 'revealed', pastParticiple: 'revealed', presentParticiple: 'revealing' },
    synonyms: ['disclose 揭露', 'uncover 揭露', 'expose 暴露', 'unveil 揭示'],
    antonyms: ['hide 隐藏', 'conceal 隐藏', 'cover 覆盖', 'mask 掩饰'],
    examPoints: ['reveal = disclose 揭示', 'revelation 不可数']
  },
  satisfy: {
    collocations: ['satisfy one\'s needs 满足需求', 'be satisfied with 对...满意', 'satisfy the conditions 满足条件'],
    derivatives: ['satisfaction n. 满意', 'satisfactory adj. 令人满意的', 'satisfied adj. 满意的', 'unsatisfied adj. 不满意的', 'dissatisfy v. 使不满'],
    wordForms: { noun: 'satisfaction', adjective: 'satisfactory', pastTense: 'satisfied', pastParticiple: 'satisfied', presentParticiple: 'satisfying' },
    synonyms: ['fulfill 实现', 'meet 满足', 'please 取悦', 'content 满足的'],
    antonyms: ['disappoint 使失望', 'dissatisfy 使不满', 'frustrate 挫败'],
    examPoints: ['be satisfied with (人满意)', 'satisfactory (事物令人满意)']
  },
  secure: {
    collocations: ['secure a position 获得职位', 'be secure from 免于', 'secure sth against 保护...免受'],
    derivatives: ['security n. 安全', 'securely adv. 安全地'],
    wordForms: { noun: 'security', adverb: 'securely', pastTense: 'secured', pastParticiple: 'secured', presentParticiple: 'securing' },
    synonyms: ['safe 安全的', 'protected 受保护的', 'obtain 获得', 'guarantee 保证'],
    antonyms: ['insecure 不安全的', 'vulnerable 脆弱的', 'exposed 暴露的'],
    examPoints: ['secure(安全的) → security(名词)', 'feel secure 感到安全']
  },
  seek: {
    collocations: ['seek to do 试图做', 'seek for 寻找', 'seek advice 征求建议', 'seek out 找出'],
    derivatives: ['seeker n. 寻找者'],
    wordForms: { noun: 'seeker', pastTense: 'sought', pastParticiple: 'sought', presentParticiple: 'seeking' },
    synonyms: ['look for 寻找', 'search 搜索', 'pursue 追求', 'try 尝试'],
    antonyms: ['find 找到', 'discover 发现', 'ignore 忽视'],
    examPoints: ['不规则变形: seek-sought-sought', 'seek to do = try to do 试图做']
  },
  solve: {
    collocations: ['solve a problem 解决问题', 'solve a puzzle 解谜'],
    derivatives: ['solution n. 解决方案', 'solvable adj. 可解决的'],
    wordForms: { noun: 'solution', adjective: 'solvable', pastTense: 'solved', pastParticiple: 'solved', presentParticiple: 'solving' },
    synonyms: ['resolve 解决', 'settle 解决', 'work out 解决', 'figure out 弄明白'],
    antonyms: ['create 创造', 'cause 导致', 'complicate 使复杂'],
    examPoints: ['a solution to a problem 问题的解决方法', 'solve ≠ settle(安顿)']
  },
  succeed: {
    collocations: ['succeed in doing 成功做', 'succeed sb as 接替某人', 'succeed to the throne 继承王位'],
    derivatives: ['success n. 成功', 'successful adj. 成功的', 'successfully adv. 成功地', 'successor n. 继承人'],
    wordForms: { noun: 'success', adjective: 'successful', adverb: 'successfully', pastTense: 'succeeded', pastParticiple: 'succeeded', presentParticiple: 'succeeding' },
    synonyms: ['achieve 实现', 'accomplish 完成', 'triumph 胜利', 'follow 跟随'],
    antonyms: ['fail 失败', 'lose 失去', 'precede 先于'],
    examPoints: ['succeed in doing (不是 to do)', 'succeed sb = take over from sb 继任某人']
  },
  suffer: {
    collocations: ['suffer from 患...病；遭受', 'suffer loss 遭受损失', 'suffer pain 忍受痛苦'],
    derivatives: ['suffering n. 痛苦', 'sufferer n. 患病者'],
    wordForms: { noun: 'suffering', pastTense: 'suffered', pastParticiple: 'suffered', presentParticiple: 'suffering' },
    synonyms: ['endure 忍受', 'bear 承受', 'experience 经历', 'undergo 经历'],
    antonyms: ['enjoy 享受', 'benefit 有益', 'thrive 繁荣'],
    examPoints: ['suffer from + 疾病/痛苦', 'suffer = tolerate(忍受)']
  },
  suggest: {
    collocations: ['suggest doing 建议做', 'suggest that 建议', 'suggest sth to sb 向某人建议'],
    derivatives: ['suggestion n. 建议', 'suggestive adj. 暗示的'],
    wordForms: { noun: 'suggestion', adjective: 'suggestive', pastTense: 'suggested', pastParticiple: 'suggested', presentParticiple: 'suggesting' },
    synonyms: ['propose 提议', 'recommend 推荐', 'advise 建议', 'imply 暗示'],
    antonyms: ['demand 要求', 'insist 坚持', 'reject 拒绝'],
    examPoints: ['后接 doing 不接 to do', 'suggest that + 虚拟语气(should + do) 表示"建议"']
  },
  survive: {
    collocations: ['survive sth 幸免于', 'survive on 靠...存活', 'survive sb 比某人活得长'],
    derivatives: ['survival n. 生存', 'survivor n. 幸存者'],
    wordForms: { noun: 'survival', pastTense: 'survived', pastParticiple: 'survived', presentParticiple: 'surviving' },
    synonyms: ['live through 经历', 'endure 忍受', 'outlast 比...持久', 'withstand 经受'],
    antonyms: ['die 死亡', 'perish 消亡', 'succumb 屈服'],
    examPoints: ['survive 是及物动词不加 from', 'survive the earthquake 在地震中幸存']
  },
  tend: {
    collocations: ['tend to do 倾向于做', 'tend towards 倾向于', 'tend sb 照料某人'],
    derivatives: ['tendency n. 倾向', 'tender adj. 温柔的'],
    wordForms: { noun: 'tendency', adjective: 'tender', pastTense: 'tended', pastParticiple: 'tended', presentParticiple: 'tending' },
    synonyms: ['be inclined to 倾向于', 'lean towards 倾向于', 'be likely to 可能', 'care for 照顾'],
    antonyms: ['avoid 避免', 'shun 避开', 'neglect 忽视'],
    examPoints: ['tend to do = be likely to do 倾向于做', 'have a tendency to do 有做某事的倾向']
  },
  transform: {
    collocations: ['transform A into B 把A变成B', 'transform one\'s life 改变生活'],
    derivatives: ['transformation n. 变形', 'transformer n. 变压器'],
    wordForms: { noun: 'transformation', pastTense: 'transformed', pastParticiple: 'transformed', presentParticiple: 'transforming' },
    synonyms: ['change 改变', 'convert 转换', 'alter 改变', 'turn 转动'],
    antonyms: ['preserve 保存', 'maintain 维持', 'keep 保持'],
    examPoints: ['transform A into B 把A变成B', 'transformation 不可数']
  },
  value: {
    collocations: ['value sth at 估价', 'place a high value on 高度重视', 'of great value 很有价值'],
    derivatives: ['valuable adj. 有价值的', 'valueless adj. 无价值的', 'valuation n. 估价', 'invaluable adj. 无价的'],
    wordForms: { adjective: 'valuable', noun: 'valuation', pastTense: 'valued', pastParticiple: 'valued', presentParticiple: 'valuing' },
    synonyms: ['worth 值得', 'prize 珍视', 'treasure 珍视', 'appreciate 欣赏；感激'],
    antonyms: ['disregard 无视', 'devalue 贬值', 'ignore 忽视'],
    examPoints: ['valuable(有价值的) ≠ valued(被重视的)', 'invaluable = priceless 无价的']
  },
  vary: {
    collocations: ['vary from 不同于', 'vary with 随...变化', 'vary in 在...方面不同'],
    derivatives: ['variety n. 多样性', 'various adj. 不同的', 'variation n. 变化', 'variable adj. 可变的 n. 变量'],
    wordForms: { noun: 'variety', adjective: 'various', pastTense: 'varied', pastParticiple: 'varied', presentParticiple: 'varying' },
    synonyms: ['differ 不同', 'change 改变', 'fluctuate 波动', 'diversify 多样化'],
    antonyms: ['remain 保持', 'stay 停留', 'be constant 不变的'],
    examPoints: ['a variety of = various 多种多样的', 'vary from...to... 从...到...不等']
  },
  volunteer: {
    collocations: ['volunteer to do 自愿做', 'volunteer for 自愿参加'],
    derivatives: ['voluntary adj. 自愿的', 'voluntarily adv. 自愿地', 'voluntarism n. 志愿主义'],
    wordForms: { adjective: 'voluntary', adverb: 'voluntarily', pastTense: 'volunteered', pastParticiple: 'volunteered', presentParticiple: 'volunteering' },
    synonyms: ['offer 提供', 'step forward 站出来', 'enlist 征募'],
    antonyms: ['be forced 被迫', 'be drafted 被征召'],
    examPoints: ['volunteer to do 志愿做', 'voluntary work 志愿工作']
  },
  warn: {
    collocations: ['warn sb of sth 警告某人', 'warn sb against doing 警告某人不要', 'warn sb not to do 警告某人不要做'],
    derivatives: ['warning n. 警告'],
    wordForms: { noun: 'warning', pastTense: 'warned', pastParticiple: 'warned', presentParticiple: 'warning' },
    synonyms: ['caution 警告', 'alert 警觉的', 'advise 建议', 'notify 通知'],
    antonyms: ['reassure 使安心', 'encourage 鼓励', 'urge 催促'],
    examPoints: ['warn sb against doing = warn sb not to do 警告某人不要做', 'give a warning 给予警告']
  },
  forget: {
    collocations: ['forget to do 忘记要做', 'forget doing 忘记做过', 'forget about 忘记关于'],
    derivatives: ['forgetful adj. 健忘的', 'forgetfulness n. 健忘', 'unforgettable adj. 难忘的'],
    wordForms: { noun: 'forgetfulness', adjective: 'forgetful', pastTense: 'forgot', pastParticiple: 'forgotten', presentParticiple: 'forgetting' },
    synonyms: ['overlook 忽略', 'neglect 忽视'],
    antonyms: ['remember 记得', 'recall 回想'],
    examPoints: ['forget to do 忘记要做(未做)', 'forget doing 忘记做过(已做)', 'unforgettable = memorable 难忘的']
  },
  stop: {
    collocations: ['stop to do 停下来去做', 'stop doing 停止做某事', 'stop sb from doing 阻止某人做', 'come to a stop 停下来'],
    derivatives: ['stoppage n. 停止', 'nonstop adj. 不停的'],
    wordForms: { noun: 'stop', pastTense: 'stopped', pastParticiple: 'stopped', presentParticiple: 'stopping' },
    synonyms: ['halt 停止', 'cease 停止', 'quit 放弃'],
    antonyms: ['continue 继续', 'proceed 继续', 'start 开始'],
    examPoints: ['stop to do 停下去做另一件事', 'stop doing 停止正在做的事', '双写p再加ed/ing']
  },
  try: {
    collocations: ['try to do 努力做', 'try doing 试做', 'try on 试穿', 'try out 试用', 'have a try 试一试'],
    derivatives: ['trial n. 试验', 'trying adj. 难受的'],
    wordForms: { noun: 'trial', pastTense: 'tried', pastParticiple: 'tried', presentParticiple: 'trying' },
    synonyms: ['attempt 尝试', 'endeavor 努力', 'strive 奋斗'],
    antonyms: ['give up 放弃', 'abandon 放弃'],
    examPoints: ['try to do 努力设法做某事', 'try doing 试着做看效果如何', 'try on 试穿(衣物)']
  },
  mean: {
    collocations: ['mean to do 打算做', 'mean doing 意味着', 'be meant for 为...而设计', 'what do you mean 你什么意思'],
    derivatives: ['meaning n. 意义', 'meaningful adj. 有意义的', 'meaningless adj. 无意义的', 'means n. 手段'],
    wordForms: { noun: 'meaning', adjective: 'meaningful', pastTense: 'meant', pastParticiple: 'meant', presentParticiple: 'meaning' },
    synonyms: ['signify 意味', 'indicate 表明', 'intend 打算'],
    antonyms: ['misunderstand 误解'],
    examPoints: ['mean to do 打算做某事', 'mean doing 意味着做某事', 'by means of 通过...方式', 'by no means 决不(放句首倒装)']
  },
  regret: {
    collocations: ['regret to do 遗憾要做', 'regret doing 后悔做过', 'regret having done 后悔做过', 'to one\'s regret 令人遗憾'],
    derivatives: ['regretful adj. 后悔的', 'regrettable adj. 令人遗憾的'],
    wordForms: { noun: 'regret', adjective: 'regretful', pastTense: 'regretted', pastParticiple: 'regretted', presentParticiple: 'regretting' },
    synonyms: ['repent 后悔', 'rue 懊悔'],
    antonyms: ['be content 满足', 'rejoice 高兴'],
    examPoints: ['regret to do 遗憾地要做(将做)', 'regret doing 后悔做过(已做)', '双写t再加ed/ing', 'regret to say/tell/inform 遗憾地说/告诉/通知']
  },
  remember: {
    collocations: ['remember to do 记得要做', 'remember doing 记得做过', 'remember sb to sb 代某人问候', 'if I remember correctly 如果我没记错'],
    derivatives: ['remembrance n. 纪念', 'memorial n. 纪念碑'],
    wordForms: { noun: 'remembrance', pastTense: 'remembered', pastParticiple: 'remembered', presentParticiple: 'remembering' },
    synonyms: ['recall 回想', 'recollect 回忆', 'memorize 记住'],
    antonyms: ['forget 忘记', 'ignore 忽视'],
    examPoints: ['remember to do 记得要做(未做)', 'remember doing 记得做过(已做)', 'remember to lock the door 记得锁门']
  },
  continue: {
    collocations: ['continue to do 继续做', 'continue doing 继续做', 'to be continued 未完待续', 'continue with 继续某事'],
    derivatives: ['continuity n. 连续性', 'continuous adj. 连续的', 'continual adj. 频繁的'],
    wordForms: { noun: 'continuity', adjective: 'continuous', pastTense: 'continued', pastParticiple: 'continued', presentParticiple: 'continuing' },
    synonyms: ['go on 继续', 'proceed 继续', 'persist 坚持'],
    antonyms: ['stop 停止', 'halt 停止', 'discontinue 中断'],
    examPoints: ['continue to do = continue doing 意义相同', 'continuous vs continual: continuous 不间断的, continual 频繁的(可断)']
  },
  begin: {
    collocations: ['begin to do 开始做', 'begin doing 开始做', 'to begin with 首先', 'begin with 以...开始'],
    derivatives: ['beginning n. 开始', 'beginner n. 初学者'],
    wordForms: { noun: 'beginning', noun2: 'beginner', pastTense: 'began', pastParticiple: 'begun', presentParticiple: 'beginning' },
    synonyms: ['start 开始', 'commence 开始', 'initiate 发起'],
    antonyms: ['end 结束', 'finish 完成', 'conclude 总结'],
    examPoints: ['begin to do = begin doing 通常可互换', 'beginning 双写n再加ing', 'to begin with = first of all 首先']
  },
  start: {
    collocations: ['start to do 开始做', 'start doing 开始做', 'start off 出发', 'start out 出发', 'to start with 首先'],
    derivatives: ['startle v. 惊吓', 'starter n. 起动机'],
    wordForms: { noun: 'start', pastTense: 'started', pastParticiple: 'started', presentParticiple: 'starting' },
    synonyms: ['begin 开始', 'commence 开始', 'initiate 发起'],
    antonyms: ['stop 停止', 'finish 结束', 'end 结束'],
    examPoints: ['start to do = start doing 通常可互换', 'start sb doing 使某人开始做', 'to start with = to begin with 首先']
  },
  like: {
    collocations: ['like to do 喜欢做', 'like doing 喜欢做', 'would like to do 想要做', 'feel like doing 想要做', 'if you like 如果你愿意'],
    derivatives: ['likely adj. 可能的', 'liking n. 喜好', 'dislike v. 不喜欢'],
    wordForms: { noun: 'liking', adjective: 'likely', adverb: 'likely', pastTense: 'liked', pastParticiple: 'liked', presentParticiple: 'liking' },
    synonyms: ['enjoy 享受', 'love 喜爱', 'be fond of 喜欢'],
    antonyms: ['dislike 不喜欢', 'hate 讨厌'],
    examPoints: ['would like to do = want to do 想要做', 'feel like doing = want to do 想要做', 'likely 作副词: sb is likely to do = it is likely that']
  },
  prefer: {
    collocations: ['prefer to do 更喜欢做', 'prefer doing to doing 宁愿...而不', 'prefer to do rather than do 宁愿做而不做', 'have a preference for 偏爱'],
    derivatives: ['preference n. 偏爱', 'preferable adj. 更好的', 'preferably adv. 更好地'],
    wordForms: { noun: 'preference', adjective: 'preferable', pastTense: 'preferred', pastParticiple: 'preferred', presentParticiple: 'preferring' },
    synonyms: ['favor 偏爱', 'choose 选择'],
    antonyms: ['reject 拒绝', 'dislike 不喜欢'],
    examPoints: ['prefer A to B (A/B为名词或动名词)', 'prefer to do rather than do 宁愿做而不做', '双写r再加ed/ing', 'have a preference for sth 偏爱某物']
  },
  need: {
    collocations: ['need to do 需要做', 'need doing 需要被做', 'in need of 需要', 'there is no need to do 没必要做'],
    derivatives: ['needless adj. 不需要的', 'needs n. 需求'],
    wordForms: { noun: 'need', adjective: 'needless', pastTense: 'needed', pastParticiple: 'needed', presentParticiple: 'needing' },
    synonyms: ['require 需要', 'demand 要求', 'lack 缺乏'],
    antonyms: ['supply 供给', 'provide 提供'],
    examPoints: ['need doing = need to be done (被动含义)', 'needn\'t have done 本不必做却做了', 'didn\'t need to do 不需要做(也没做)']
  },
  refuse: {
    collocations: ['refuse to do 拒绝做', 'refuse sb sth 拒绝某人某事', 'refuse sth to sb 拒绝给某人'],
    derivatives: ['refusal n. 拒绝'],
    wordForms: { noun: 'refusal', pastTense: 'refused', pastParticiple: 'refused', presentParticiple: 'refusing' },
    synonyms: ['reject 拒绝', 'decline 婉拒', 'turn down 拒绝'],
    antonyms: ['accept 接受', 'agree 同意'],
    examPoints: ['refuse to do sth 拒绝做某事', 'refuse + 双宾语: refuse sb sth']
  },
  manage: {
    collocations: ['manage to do 设法做到', 'manage on 靠...过活', 'manage without 没有...也应付'],
    derivatives: ['management n. 管理', 'manager n. 经理', 'manageable adj. 可管理的'],
    wordForms: { noun: 'management', noun2: 'manager', adjective: 'manageable', pastTense: 'managed', pastParticiple: 'managed', presentParticiple: 'managing' },
    synonyms: ['succeed in doing 成功做', 'handle 处理', 'cope 应付'],
    antonyms: ['fail 失败'],
    examPoints: ['manage to do = succeed in doing 设法做成', 'manage to do vs try to do: manage 强调成功, try 强调努力']
  },
  mind: {
    collocations: ['mind doing 介意做', 'would you mind doing 你介意...吗', 'change one\'s mind 改变主意', 'make up one\'s mind 下定决心', 'keep in mind 记住'],
    derivatives: ['reminder n. 提醒物', 'minded adj. 有...思想的'],
    wordForms: { noun: 'mind', adjective: 'minded', pastTense: 'minded', pastParticiple: 'minded', presentParticiple: 'minding' },
    synonyms: ['object 反对', 'care 在乎'],
    antonyms: ['be indifferent 无所谓'],
    examPoints: ['mind doing 介意做某事', 'Would you mind my doing? 你介意我做吗', 'make up one\'s mind to do 下决心做', 'bear/keep in mind 记住']
  },
  enjoy: {
    collocations: ['enjoy doing 喜欢做', 'enjoy oneself 玩得开心', 'enjoy good health 身体健康'],
    derivatives: ['enjoyment n. 享受', 'enjoyable adj. 愉快的'],
    wordForms: { noun: 'enjoyment', adjective: 'enjoyable', pastTense: 'enjoyed', pastParticiple: 'enjoyed', presentParticiple: 'enjoying' },
    synonyms: ['like 喜欢', 'appreciate 欣赏', 'relish 享受'],
    antonyms: ['dislike 不喜欢', 'hate 讨厌', 'suffer 受苦'],
    examPoints: ['enjoy 后接 doing 不接 to do', 'enjoy oneself = have a good time 玩得开心', 'enjoyable = pleasant 愉快的']
  },
  finish: {
    collocations: ['finish doing 完成做', 'finish off 完成;吃完', 'finish with 完成;与...分手'],
    derivatives: ['finished adj. 完成的', 'finish n. 结束'],
    wordForms: { noun: 'finish', adjective: 'finished', pastTense: 'finished', pastParticiple: 'finished', presentParticiple: 'finishing' },
    synonyms: ['complete 完成', 'accomplish 完成', 'conclude 结束'],
    antonyms: ['start 开始', 'begin 开始'],
    examPoints: ['finish 后接 doing 不接 to do', 'finish doing sth = complete doing sth 完成做某事']
  },
  avoid: {
    collocations: ['avoid doing 避免做', 'avoid sth 避免某事'],
    derivatives: ['avoidance n. 避免', 'unavoidable adj. 不可避免的'],
    wordForms: { noun: 'avoidance', adjective: 'unavoidable', pastTense: 'avoided', pastParticiple: 'avoided', presentParticiple: 'avoiding' },
    synonyms: ['evade 逃避', 'escape 逃避', 'shun 避开'],
    antonyms: ['face 面对', 'confront 面对', 'encounter 遭遇'],
    examPoints: ['avoid 后接 doing 不接 to do', 'avoid doing = keep from doing 避免做']
  },
  consider: {
    collocations: ['consider doing 考虑做', 'consider sb to be 认为某人是', 'consider...as 把...看作', 'take into consideration 考虑到'],
    derivatives: ['consideration n. 考虑', 'considerate adj. 体贴的', 'considerable adj. 相当大的', 'considering prep. 考虑到'],
    wordForms: { noun: 'consideration', adjective: 'considerate', pastTense: 'considered', pastParticiple: 'considered', presentParticiple: 'considering' },
    synonyms: ['think about 考虑', 'ponder 思考', 'regard as 视为'],
    antonyms: ['ignore 忽视', 'disregard 无视'],
    examPoints: ['consider doing 考虑做(后接doing)', 'considerate vs considerable: considerate 体贴的, considerable 相当大的', 'take sth into consideration 把...考虑在内']
  },
  suggest: {
    collocations: ['suggest doing 建议做', 'suggest that 建议(虚拟语气)', 'suggest sth to sb 向某人建议', 'make a suggestion 提建议'],
    derivatives: ['suggestion n. 建议', 'suggestive adj. 暗示的'],
    wordForms: { noun: 'suggestion', adjective: 'suggestive', pastTense: 'suggested', pastParticiple: 'suggested', presentParticiple: 'suggesting' },
    synonyms: ['propose 提议', 'recommend 推荐', 'advise 建议'],
    antonyms: ['demand 要求', 'insist 坚持'],
    examPoints: ['suggest doing 后接动名词', 'suggest that + 主语 + (should) do 虚拟语气', 'suggestion 后的同位语从句也用虚拟(should) do']
  },
  practice: {
    collocations: ['practice doing 练习做', 'put into practice 付诸实践', 'in practice 实际上', 'common practice 惯例'],
    derivatives: ['practical adj. 实际的', 'practically adv. 几乎;实际上', 'practitioner n. 从业者'],
    wordForms: { noun: 'practice', adjective: 'practical', adverb: 'practically', pastTense: 'practiced', pastParticiple: 'practiced', presentParticiple: 'practicing' },
    synonyms: ['rehearse 排练', 'train 训练', 'drill 操练'],
    antonyms: ['theory 理论'],
    examPoints: ['practice doing 练习做某事(美式practice=英式practise)', 'practical vs practicable: practical 实用的, practicable 可行的', 'put theory into practice 将理论付诸实践']
  },
  permit: {
    collocations: ['permit doing 允许做', 'permit sb to do 允许某人做', 'if time permits 如果时间允许', 'with permission 经许可'],
    derivatives: ['permission n. 许可', 'permissible adj. 容许的'],
    wordForms: { noun: 'permission', adjective: 'permissible', pastTense: 'permitted', pastParticiple: 'permitted', presentParticiple: 'permitting' },
    synonyms: ['allow 允许', 'authorize 授权'],
    antonyms: ['forbid 禁止', 'prohibit 禁止', 'ban 禁止'],
    examPoints: ['permit doing 允许做(动名词)', 'permit sb to do 允许某人做(不定式)', '双写t再加ed/ing', 'weather permitting 天气允许的话(独立主格)']
  },
  forbid: {
    collocations: ['forbid sb to do 禁止某人做', 'forbid doing 禁止做', 'forbidden fruit 禁果'],
    derivatives: ['forbidden adj. 被禁止的'],
    wordForms: { adjective: 'forbidden', pastTense: 'forbade', pastParticiple: 'forbidden', presentParticiple: 'forbidding' },
    synonyms: ['prohibit 禁止', 'ban 禁止', 'ban 禁止'],
    antonyms: ['allow 允许', 'permit 许可', 'authorize 授权'],
    examPoints: ['forbid sb to do 禁止某人做(用to do)', 'forbid doing 禁止做(用doing)', 'forbade/forbad 过去式, forbidden 过去分词']
  },
  advise: {
    collocations: ['advise doing 建议做', 'advise sb to do 建议某人做', 'advise sb against doing 劝某人不要', 'advise that 建议(虚拟语气)'],
    derivatives: ['advice n. 建议(不可数)', 'adviser n. 顾问', 'advisable adj. 明智的'],
    wordForms: { noun: 'advice', noun2: 'adviser', adjective: 'advisable', pastTense: 'advised', pastParticiple: 'advised', presentParticiple: 'advising' },
    synonyms: ['recommend 推荐', 'suggest 建议', 'counsel 劝告'],
    antonyms: ['warn 警告', 'deter 阻止'],
    examPoints: ['advise doing 建议做(动名词)', 'advise sb to do 建议某人做(不定式)', 'advice 是不可数名词: a piece of advice', 'advise that + (should) do 虚拟语气']
  },
  admit: {
    collocations: ['admit doing 承认做', 'admit to doing 承认做', 'admit sb into 准许某人进入', 'admit that 承认'],
    derivatives: ['admission n. 准入;承认', 'admittedly adv. 诚然'],
    wordForms: { noun: 'admission', pastTense: 'admitted', pastParticiple: 'admitted', presentParticiple: 'admitting' },
    synonyms: ['confess 承认', 'acknowledge 承认', 'concede 让步'],
    antonyms: ['deny 否认', 'reject 拒绝'],
    examPoints: ['admit doing 承认做过(后接动名词)', 'admit sb to/into 允许进入', '双写t再加ed/ing', 'admission to 准入(to是介词)']
  },
  deny: {
    collocations: ['deny doing 否认做', 'deny that 否认', 'deny sb sth 拒绝给某人', 'there is no denying that 不可否认'],
    derivatives: ['denial n. 否认'],
    wordForms: { noun: 'denial', pastTense: 'denied', pastParticiple: 'denied', presentParticiple: 'denying' },
    synonyms: ['contradict 反驳', 'dispute 质疑'],
    antonyms: ['admit 承认', 'confess 承认', 'acknowledge 承认'],
    examPoints: ['deny doing 否认做过(后接动名词)', 'deny sb sth 拒绝给某人', 'There is no denying that... 不可否认']
  },
  imagine: {
    collocations: ['imagine doing 想象做', 'imagine sb doing 想象某人做', 'imagine that 想象', 'beyond imagination 超出想象'],
    derivatives: ['imagination n. 想象力', 'imaginative adj. 富有想象力的', 'imaginary adj. 虚构的', 'imaginable adj. 可想象的'],
    wordForms: { noun: 'imagination', adjective: 'imaginative', pastTense: 'imagined', pastParticiple: 'imagined', presentParticiple: 'imagining' },
    synonyms: ['visualize 想象', 'picture 想象', 'envision 设想'],
    antonyms: ['observe 观察', 'witness 目击'],
    examPoints: ['imagine doing 想象做(后接动名词)', 'imaginative vs imaginary vs imaginable: imaginative 有想象力的, imaginary 虚构的, imaginable 可想象的']
  },
  appreciate: {
    collocations: ['appreciate doing 感激做', 'appreciate sb doing 感激某人做', 'I would appreciate it if 我将感激如果', 'appreciate sth 欣赏某物'],
    derivatives: ['appreciation n. 欣赏;感激', 'appreciative adj. 感激的'],
    wordForms: { noun: 'appreciation', adjective: 'appreciative', pastTense: 'appreciated', pastParticiple: 'appreciated', presentParticiple: 'appreciating' },
    synonyms: ['value 珍视', 'treasure 珍惜', 'admire 钦佩'],
    antonyms: ['disregard 无视', 'depreciate 贬值'],
    examPoints: ['appreciate doing 感激做(后接动名词)', 'I would appreciate it if... 我将感激如果(it作形式宾语)', 'appreciate + sth 感激(不接人)']
  },
  risk: {
    collocations: ['risk doing 冒险做', 'at risk 处于危险', 'at the risk of 冒...的危险', 'take a risk 冒险', 'run the risk of doing 冒...的风险'],
    derivatives: ['risky adj. 危险的'],
    wordForms: { noun: 'risk', adjective: 'risky', pastTense: 'risked', pastParticiple: 'risked', presentParticiple: 'risking' },
    synonyms: ['endanger 危及', 'jeopardize 危及', 'hazard 冒险'],
    antonyms: ['protect 保护', 'safeguard 保卫'],
    examPoints: ['risk doing 冒险做(后接动名词)', 'at risk 处境危险', 'run the risk of doing 冒做某事的风险']
  },
  escape: {
    collocations: ['escape doing 逃避做', 'escape from 从...逃跑', 'narrow escape 死里逃生', 'escape one\'s notice 逃过注意'],
    derivatives: ['escapee n. 逃亡者', 'escapism n. 逃避现实'],
    wordForms: { noun: 'escape', noun2: 'escapee', pastTense: 'escaped', pastParticiple: 'escaped', presentParticiple: 'escaping' },
    synonyms: ['flee 逃跑', 'evade 逃避', 'avoid 避免'],
    antonyms: ['face 面对', 'confront 面对', 'encounter 遭遇'],
    examPoints: ['escape doing 逃避做(后接动名词)', 'escape from prison 越狱', 'a narrow escape 九死一生']
  },
  delay: {
    collocations: ['delay doing 推迟做', 'without delay 毫不迟延', 'be delayed by 因...延误'],
    derivatives: ['delay n. 延迟'],
    wordForms: { noun: 'delay', pastTense: 'delayed', pastParticiple: 'delayed', presentParticiple: 'delaying' },
    synonyms: ['postpone 推迟', 'put off 推迟', 'defer 延期'],
    antonyms: ['hasten 催促', 'expedite 加快'],
    examPoints: ['delay doing 推迟做(后接动名词)', 'without delay = immediately 毫不迟延', 'delay = put off = postpone 推迟']
  },
  miss: {
    collocations: ['miss doing 错过做', 'miss the bus 错过公交', 'miss home 想家', 'miss out 错过'],
    derivatives: ['missing adj. 缺失的', 'missingly adv. 缺失地'],
    wordForms: { adjective: 'missing', pastTense: 'missed', pastParticiple: 'missed', presentParticiple: 'missing' },
    synonyms: ['lose 丢失', 'overlook 忽略', 'skip 跳过'],
    antonyms: ['catch 赶上', 'find 找到'],
    examPoints: ['miss doing 错过做(后接动名词)', 'miss the bus/train 错过车', 'missing = lost 失踪的']
  },
  happen: {
    collocations: ['happen to do 碰巧做', 'happen to sb 发生于某人', 'it happens that 碰巧', 'as it happens 碰巧'],
    derivatives: ['happening n. 事件'],
    wordForms: { noun: 'happening', pastTense: 'happened', pastParticiple: 'happened', presentParticiple: 'happening' },
    synonyms: ['occur 发生', 'take place 发生', 'chance 碰巧'],
    antonyms: ['plan 计划', 'arrange 安排'],
    examPoints: ['happen to do 碰巧做(不定式)', 'sth happen to sb 某事发生在某人身上', 'happen 无被动语态', 'It (so) happens that... 碰巧...']
  },
  seem: {
    collocations: ['seem to do 似乎做', 'seem like 看起来像', 'it seems that 似乎', 'there seems to be 似乎有'],
    derivatives: ['seemingly adv. 表面上'],
    wordForms: { adverb: 'seemingly', pastTense: 'seemed', pastParticiple: 'seemed', presentParticiple: 'seeming' },
    synonyms: ['appear 似乎', 'look 看起来'],
    antonyms: ['be 确定'],
    examPoints: ['seem to do 似乎做', 'It seems that... = sb seems to do 似乎...', 'seem 无被动语态和进行时']
  },
  offer: {
    collocations: ['offer to do 主动提出做', 'offer sb sth 提供某人某物', 'offer sth to sb 提供某物给某人', 'make an offer 提出提议'],
    derivatives: ['offering n. 提供物', 'offer n. 提议'],
    wordForms: { noun: 'offer', pastTense: 'offered', pastParticiple: 'offered', presentParticiple: 'offering' },
    synonyms: ['provide 提供', 'supply 供给', 'propose 提议'],
    antonyms: ['refuse 拒绝', 'reject 拒绝', 'withdraw 撤回'],
    examPoints: ['offer to do 主动提出做(不定式)', 'offer sb sth = offer sth to sb 双宾语', 'offer 不接 doing']
  },
  intend: {
    collocations: ['intend to do 打算做', 'intend doing 打算做', 'intend sb for 打算让某人', 'be intended for 专为...设计'],
    derivatives: ['intention n. 意图', 'intentional adj. 故意的', 'intentionally adv. 故意地'],
    wordForms: { noun: 'intention', adjective: 'intentional', adverb: 'intentionally', pastTense: 'intended', pastParticiple: 'intended', presentParticiple: 'intending' },
    synonyms: ['plan 计划', 'mean 打算', 'aim 打算'],
    antonyms: ['abandon 放弃', 'cancel 取消'],
    examPoints: ['intend to do = intend doing 打算做', 'be intended for 为...而设计(被动)', 'with the intention of doing 抱着做...的意图']
  },
  promise: {
    collocations: ['promise to do 承诺做', 'promise sb sth 承诺某人某事', 'promise that 承诺', 'make a promise 做出承诺', 'keep a promise 遵守承诺'],
    derivatives: ['promising adj. 有前途的'],
    wordForms: { noun: 'promise', adjective: 'promising', pastTense: 'promised', pastParticiple: 'promised', presentParticiple: 'promising' },
    synonyms: ['pledge 保证', 'swear 发誓', 'guarantee 保证'],
    antonyms: ['break a promise 违背承诺'],
    examPoints: ['promise to do 承诺做(不定式)', 'promise sb to do 承诺某人去做(to do逻辑主语是主语)', 'promising = hopeful 有前途的']
  },
  pretend: {
    collocations: ['pretend to do 假装做', 'pretend to be doing 假装正在做', 'pretend to have done 假装做过', 'pretend that 假装'],
    derivatives: ['pretence n. 假装'],
    wordForms: { noun: 'pretence', pastTense: 'pretended', pastParticiple: 'pretended', presentParticiple: 'pretending' },
    synonyms: ['feign 假装', 'fake 伪造'],
    antonyms: ['be honest 诚实', 'be genuine 真诚'],
    examPoints: ['pretend to do 假装做', 'pretend to be doing 假装正在做', 'pretend to have done 假装已做过']
  },
  deserve: {
    collocations: ['deserve to do 值得做', 'deserve doing 值得被做', 'deserve sth 应得', 'deserve well of 应受优待'],
    derivatives: ['deserved adj. 应得的', 'deserving adj. 值得的'],
    wordForms: { adjective: 'deserved', pastTense: 'deserved', pastParticiple: 'deserved', presentParticiple: 'deserving' },
    synonyms: ['merit 值得', 'warrant 值得', 'earn 赢得'],
    antonyms: ['be undeserving 不值得'],
    examPoints: ['deserve to do 值得做(主动)', 'deserve doing 值得被(被动含义,如deserve punishing=deserve to be punished)', 'deserving of 值得...的']
  },
  demand: {
    collocations: ['demand to do 要求做', 'demand sth of sb 向某人要求', 'demand that 要求(虚拟语气)', 'in demand 有需求', 'meet the demand 满足需求'],
    derivatives: ['demanding adj. 要求高的'],
    wordForms: { noun: 'demand', adjective: 'demanding', pastTense: 'demanded', pastParticiple: 'demanded', presentParticiple: 'demanding' },
    synonyms: ['require 要求', 'request 请求', 'insist 坚持'],
    antonyms: ['supply 供给', 'offer 提供'],
    examPoints: ['demand to do 要求做(不定式)', 'demand that + (should) do 虚拟语气', 'in demand = sought after 有需求', 'demand sth of sb (不用demand sb sth)']
  },
  hesitate: {
    collocations: ['hesitate to do 犹豫做', 'don\'t hesitate to do 不要犹豫做', 'hesitate about doing 对...犹豫', 'without hesitation 毫不犹豫'],
    derivatives: ['hesitation n. 犹豫', 'hesitant adj. 犹豫的'],
    wordForms: { noun: 'hesitation', adjective: 'hesitant', pastTense: 'hesitated', pastParticiple: 'hesitated', presentParticiple: 'hesitating' },
    synonyms: ['waver 犹豫', 'falter 犹豫'],
    antonyms: ['decide 果断决定', 'resolve 决心'],
    examPoints: ['hesitate to do 犹豫做(不定式)', 'Don\'t hesitate to do 不要犹豫', 'without hesitation 毫不犹豫地']
  },
  determine: {
    collocations: ['determine to do 决心做', 'be determined to do 决心做', 'determine on doing 决定做', 'determine that 决定'],
    derivatives: ['determination n. 决心', 'determined adj. 坚决的'],
    wordForms: { noun: 'determination', adjective: 'determined', pastTense: 'determined', pastParticiple: 'determined', presentParticiple: 'determining' },
    synonyms: ['decide 决定', 'resolve 决心', 'settle 解决'],
    antonyms: ['hesitate 犹豫', 'waver 动摇'],
    examPoints: ['determine to do 决心做(主动,表动作)', 'be determined to do 决心做(状态,表态度)', 'determination to do 做某事的决心']
  },
  expect: {
    collocations: ['expect to do 期望做', 'expect sb to do 期望某人做', 'expect that 期望', 'as expected 正如预期', 'beyond expectation 出乎意料'],
    derivatives: ['expectation n. 期望', 'unexpected adj. 意外的', 'unexpectedly adv. 意外地'],
    wordForms: { noun: 'expectation', adjective: 'unexpected', adverb: 'unexpectedly', pastTense: 'expected', pastParticiple: 'expected', presentParticiple: 'expecting' },
    synonyms: ['anticipate 预期', 'await 等待', 'look forward to 期待'],
    antonyms: ['despair 绝望', 'give up 放弃'],
    examPoints: ['expect to do 期望做', 'expect sb to do 期望某人做', 'as expected = as was expected 如预期般', 'beyond expectation = beyond expectations 出乎意料']
  },
  wish: {
    collocations: ['wish to do 希望做', 'wish sb to do 希望某人做', 'wish + 虚拟语气 但愿', 'wish for 希望得到', 'make a wish 许愿'],
    derivatives: ['wishful adj. 一厢情愿的'],
    wordForms: { noun: 'wish', adjective: 'wishful', pastTense: 'wished', pastParticiple: 'wished', presentParticiple: 'wishing' },
    synonyms: ['desire 渴望', 'long for 渴望', 'yearn for 渴望'],
    antonyms: ['be content 满足'],
    examPoints: ['wish to do 希望做', 'wish sb to do 希望某人做', 'wish + 过去时(与现在相反虚拟)', 'wish + 过去完成时(与过去相反虚拟)', 'wish + could/would(与将来相反虚拟)']
  },
  devote: {
    collocations: ['devote oneself to doing 致力于做', 'devote...to doing 把... devoted to doing', 'be devoted to doing 专心于做', 'devotion to 致力于'],
    derivatives: ['devotion n. 奉献', 'devoted adj. 忠实的'],
    wordForms: { noun: 'devotion', adjective: 'devoted', pastTense: 'devoted', pastParticiple: 'devoted', presentParticiple: 'devoting' },
    synonyms: ['dedicate 奉献', 'commit 致力', 'pledge 保证'],
    antonyms: ['neglect 忽视', 'abandon 放弃'],
    examPoints: ['devote...to doing 中 to 是介词后接动名词', 'devote oneself to = dedicate oneself to 致力于', 'be devoted to doing = be dedicated to doing 专心于']
  },
  look: {
    collocations: ['look forward to doing 期待做', 'look at 看', 'look after 照顾', 'look into 调查', 'look up 查阅', 'look down upon 蔑视', 'look up to 尊敬', 'look for 寻找', 'look out 当心', 'look like 看起来像', 'look over 检查'],
    derivatives: ['lookout n. 守望', 'outlook n. 前景'],
    wordForms: { noun: 'look', pastTense: 'looked', pastParticiple: 'looked', presentParticiple: 'looking' },
    synonyms: ['watch 观看', 'observe 观察', 'view 观看', 'gaze 凝视'],
    antonyms: ['ignore 忽视', 'overlook 忽略'],
    examPoints: ['look forward to doing 中 to 是介词(后接doing)', 'look up 查阅(字典) vs look up to 尊敬', 'look into = investigate 调查', 'look out = watch out 当心']
  },
  get: {
    collocations: ['get down to doing 开始认真做', 'get along with 与...相处', 'get away from 逃离', 'get over 克服', 'get through 通过;完成', 'get rid of 摆脱', 'get used to doing 习惯于做', 'get sb to do 让某人做', 'get sth done 使某事被做'],
    derivatives: ['getter n. 获取者'],
    wordForms: { noun: 'getter', pastTense: 'got', pastParticiple: 'got/gotten', presentParticiple: 'getting' },
    synonyms: ['obtain 获得', 'acquire 获得', 'receive 收到'],
    antonyms: ['give 给', 'lose 失去'],
    examPoints: ['get down to doing 开始认真做(to是介词)', 'get sb to do 使某人做(不用get sb do)', 'get sth done 使某事被做', 'get used to doing = be used to doing 习惯于(used是形容词)']
  },
  make: {
    collocations: ['make sb do 使某人做', 'be made to do 被迫做', 'make it 成功;赶到', 'make up 编造;化妆;组成', 'make sense 有意义', 'make sure 确保', 'make a difference 有影响', 'make fun of 取笑', 'make use of 利用', 'make an effort 努力'],
    derivatives: ['maker n. 制造者', 'makeup n. 化妆品'],
    wordForms: { noun: 'maker', pastTense: 'made', pastParticiple: 'made', presentParticiple: 'making' },
    synonyms: ['create 创造', 'produce 生产', 'construct 建造'],
    antonyms: ['destroy 破坏', 'break 打破'],
    examPoints: ['make sb do 使某人做(省略to)', '被动: be made to do (恢复to)', 'make it 赶到;成功', 'make up for 弥补']
  },
  let: {
    collocations: ['let sb do 让某人做', 'let alone 更不用说', 'let down 使失望', 'let go 放手', 'let out 放出', 'let in 让...进来'],
    derivatives: [],
    wordForms: { pastTense: 'let', pastParticiple: 'let', presentParticiple: 'letting' },
    synonyms: ['allow 允许', 'permit 许可', 'enable 使能够'],
    antonyms: ['forbid 禁止', 'prevent 阻止'],
    examPoints: ['let sb do 让某人做(省略to,不用let sb to do)', 'let alone + do/doing/noun 更不用说', 'let sb down = disappoint sb 使某人失望']
  },
  have: {
    collocations: ['have sb do 让某人做', 'have sth done 使某事被做', 'have sb doing 让某人一直做', 'have to do 不得不做', 'have sth to do 有事要做', 'have difficulty (in) doing 做某事有困难', 'have a good time doing 做某事很开心'],
    derivatives: [],
    wordForms: { pastTense: 'had', pastParticiple: 'had', presentParticiple: 'having' },
    synonyms: ['possess 拥有', 'own 拥有', 'hold 持有'],
    antonyms: ['lack 缺乏'],
    examPoints: ['have sb do 让某人做(省略to)', 'have sth done 使某事被做(别人做)', 'have sb doing 让某人一直做(强调持续)', 'have difficulty (in) doing 做有困难(in可省)', 'have a good time (in) doing 做开心']
  },
  keep: {
    collocations: ['keep doing 一直做', 'keep on doing 继续做', 'keep sb doing 让某人一直做', 'keep sb from doing 阻止某人做', 'keep up with 跟上', 'keep in touch 保持联系', 'keep a diary 写日记'],
    derivatives: ['keeper n. 看守人', 'keeping n. 保管'],
    wordForms: { noun: 'keeper', pastTense: 'kept', pastParticiple: 'kept', presentParticiple: 'keeping' },
    synonyms: ['maintain 保持', 'retain 保留', 'preserve 保存'],
    antonyms: ['abandon 放弃', 'lose 失去'],
    examPoints: ['keep doing 一直做(后接动名词)', 'keep on doing 继续做(强调重复)', 'keep sb from doing = prevent sb from doing 阻止', 'keep up with = catch up with 跟上']
  },
  put: {
    collocations: ['put off doing 推迟做', 'put up with 忍受', 'put aside 储存', 'put away 收好', 'put forward 提出', 'put on 穿上', 'put out 熄灭', 'put down 放下', 'put through 接通'],
    derivatives: [],
    wordForms: { pastTense: 'put', pastParticiple: 'put', presentParticiple: 'putting' },
    synonyms: ['place 放置', 'set 放', 'position 定位'],
    antonyms: ['take 拿', 'remove 移除'],
    examPoints: ['put off doing 推迟做(后接动名词)', 'put up with = tolerate 忍受', 'put forward a proposal 提出建议']
  },
  set: {
    collocations: ['set out to do 出发去做', 'set about doing 开始做', 'set up 建立', 'set off 出发', 'set aside 留出', 'set an example 树立榜样', 'set free 释放'],
    derivatives: ['setting n. 背景;设置', 'settlement n. 解决'],
    wordForms: { noun: 'setting', pastTense: 'set', pastParticiple: 'set', presentParticiple: 'setting' },
    synonyms: ['establish 建立', 'place 放置', 'fix 固定'],
    antonyms: ['demolish 拆除', 'remove 移除'],
    examPoints: ['set out to do 出发去做(不定式)', 'set about doing 开始做(动名词)', 'set out to do vs set about doing: out后接to do, about后接doing', 'set up = establish 建立']
  },
  take: {
    collocations: ['take up doing 开始从事做', 'take to doing 养成...习惯', 'take care of 照顾', 'take part in 参加', 'take place 发生', 'take it easy 别紧张', 'take over 接管', 'take advantage of 利用', 'take pride in 以...为豪', 'take sth for granted 认为理所当然', 'take charge of 负责'],
    derivatives: ['taker n. 接受者', 'takeover n. 接管'],
    wordForms: { noun: 'taker', pastTense: 'took', pastParticiple: 'taken', presentParticiple: 'taking' },
    synonyms: ['grab 抓取', 'seize 夺取', 'receive 收到'],
    antonyms: ['give 给', 'offer 提供'],
    examPoints: ['take up doing 开始从事(后接动名词)', 'take to doing 养成习惯(后接动名词)', 'take place = happen 发生(无被动)', 'take sth for granted 认为理所当然', 'It takes sb time to do 花费某人时间做']
  },
  turn: {
    collocations: ['turn out to be 结果是', 'turn out that 结果是', 'turn down 拒绝;调低', 'turn up 出现;调高', 'turn into 变成', 'turn over 翻转', 'turn to sb for help 求助于', 'in turn 依次', 'in return 作为回报', 'it turns out that 结果是'],
    derivatives: ['turning n. 转弯', 'turnover n. 营业额'],
    wordForms: { noun: 'turn', pastTense: 'turned', pastParticiple: 'turned', presentParticiple: 'turning' },
    synonyms: ['rotate 旋转', 'spin 旋转', 'revolve 旋转'],
    antonyms: ['stay 保持', 'remain 保持'],
    examPoints: ['turn out to be 结果是', 'It turns out that... 结果是...', 'turn down = refuse 拒绝', 'turn up = appear 出现', 'in turn 依次 / in return 作为回报(易混)']
  },
  help: {
    collocations: ['help sb (to) do 帮助某人做', 'help oneself to 请自便', 'can\'t help doing 忍不住做', 'can\'t help but do 不得不做', 'help out 帮忙', 'with the help of 在...帮助下'],
    derivatives: ['helpful adj. 有帮助的', 'helpless adj. 无助的'],
    wordForms: { noun: 'help', adjective: 'helpful', adjective2: 'helpless', pastTense: 'helped', pastParticiple: 'helped', presentParticiple: 'helping' },
    synonyms: ['assist 协助', 'aid 援助', 'support 支持'],
    antonyms: ['hinder 阻碍', 'obstruct 妨碍'],
    examPoints: ['help sb (to) do to可省略', 'can\'t help doing 忍不住做(动名词)', 'can\'t help but do 不得不做(不定式省to)', 'can\'t help but do = cannot but do 不得不做']
  },
  // ===== 高考高频考点补充 =====
  consist: {
    collocations: ['consist of 由...组成', 'consist in 在于', 'consist with 与...一致'],
    derivatives: ['consistent adj. 一致的', 'consistency n. 一致性', 'inconsistent adj. 不一致的'],
    wordForms: { noun: 'consistency', adjective: 'consistent' },
    synonyms: ['comprise 包含', 'compose 组成', 'make up 组成'],
    antonyms: ['differ 不同', 'disagree 不一致'],
    examPoints: ['consist of 由...组成（主动语态，不用被动）', 'consist in 在于（抽象概念）', 'consist with 与...一致', 'be consistent with 与...一致']
  },
  belong: {
    collocations: ['belong to 属于', 'belong to sb 属于某人'],
    derivatives: ['belongings n. 所有物，行李'],
    wordForms: { noun: 'belongings' },
    synonyms: ['pertain 属于', 'appertain 有关'],
    antonyms: [],
    examPoints: ['belong to 无被动语态', 'belong to 不用于进行时', 'belongings 财物/行李（复数）']
  },
  lead: {
    collocations: ['lead to 导致；通向', 'lead sb to do 致使某人做', 'lead a...life 过...的生活', 'in the lead 领先', 'take the lead 带头'],
    derivatives: ['leader n. 领导者', 'leadership n. 领导力', 'leading adj. 主要的'],
    wordForms: { noun: 'leader', adjective: 'leading', pastTense: 'led', pastParticiple: 'led', presentParticiple: 'leading' },
    synonyms: ['guide 引导', 'direct 指引', 'head 带领'],
    antonyms: ['follow 跟随', 'trail 落后'],
    examPoints: ['lead to 后接名词/动名词（to是介词）', 'lead sb to do sth 致使某人做某事', 'lead a happy life 过幸福生活']
  },
  lie: {
    collocations: ['lie in 在于', 'lie on 依赖于', 'lie down 躺下', 'tell a lie 撒谎', 'white lie 善意的谎言'],
    derivatives: ['liar n. 说谎者'],
    wordForms: { noun: 'liar', pastTense: 'lay', pastParticiple: 'lain', presentParticiple: 'lying' },
    synonyms: ['recline 斜倚', 'rest 休息'],
    antonyms: ['tell the truth 说实话'],
    examPoints: ['lie in 在于（高考高频）', 'lie（躺）过去式lay，过去分词lain', 'lie（说谎）过去式lied，过去分词lied', '区分 lie/lay/lie（躺/放置/说谎）']
  },
  deal: {
    collocations: ['deal with 处理；应付', 'a great deal of 大量', 'deal in 经营'],
    derivatives: ['dealer n. 商人', 'dealing n. 交易'],
    wordForms: { noun: 'dealer', pastTense: 'dealt', pastParticiple: 'dealt', presentParticiple: 'dealing' },
    synonyms: ['handle 处理', 'manage 应付', 'tackle 解决'],
    antonyms: [],
    examPoints: ['deal with = handle 处理', 'a great deal of + 不可数名词', 'deal with 常与 how 连用']
  },
  object: {
    collocations: ['object to 反对', 'object to doing 反对做某事', 'take objection to 对...反对'],
    derivatives: ['objection n. 反对', 'objective n. 目标 adj. 客观的', 'objectively adv. 客观地'],
    wordForms: { noun: 'objection', adjective: 'objective', adverb: 'objectively' },
    synonyms: ['oppose 反对', 'disapprove 不赞成'],
    antonyms: ['agree 同意', 'approve 赞成', 'support 支持'],
    examPoints: ['object to 中 to 是介词，后接动名词', 'object to doing = be opposed to doing']
  },
  refer: {
    collocations: ['refer to 指的是；查阅', 'refer to...as 把...称为', 'refer sb to 让某人去咨询'],
    derivatives: ['reference n. 参考；参考书', 'referral n. 转介'],
    wordForms: { noun: 'reference', pastTense: 'referred', pastParticiple: 'referred', presentParticiple: 'referring' },
    synonyms: ['mention 提到', 'cite 引用', 'allude 暗指'],
    antonyms: [],
    examPoints: ['refer to 查阅/参考', 'refer to...as 把...称为', 'with reference to 关于']
  },
  recover: {
    collocations: ['recover from 从...恢复', 'recover oneself 恢复镇定'],
    derivatives: ['recovery n. 恢复', 'recoverable adj. 可恢复的'],
    wordForms: { noun: 'recovery', adjective: 'recoverable', pastTense: 'recovered', pastParticiple: 'recovered', presentParticiple: 'recovering' },
    synonyms: ['regain 恢复', 'recuperate 康复'],
    antonyms: ['lose 失去', 'worsen 恶化'],
    examPoints: ['recover from 从...中恢复', 'recovery from 从...中恢复（名词）']
  },
  concentrate: {
    collocations: ['concentrate on 集中精力于', 'concentrate one\'s mind 集中注意力'],
    derivatives: ['concentration n. 专注；浓度', 'concentrated adj. 集中的；浓缩的'],
    wordForms: { noun: 'concentration', adjective: 'concentrated', pastTense: 'concentrated', pastParticiple: 'concentrated', presentParticiple: 'concentrating' },
    synonyms: ['focus 专注', 'center 集中'],
    antonyms: ['distract 分心', 'wander 走神'],
    examPoints: ['concentrate on = focus on 集中精力于', 'concentration on 专注']
  },
  approve: {
    collocations: ['approve of 赞成', 'approve of doing 赞成做某事'],
    derivatives: ['approval n. 赞成', 'disapprove v. 不赞成', 'disapproval n. 不赞成'],
    wordForms: { noun: 'approval', pastTense: 'approved', pastParticiple: 'approved', presentParticiple: 'approving' },
    synonyms: ['agree 同意', 'favor 赞成', 'endorse 支持'],
    antonyms: ['disapprove 不赞成', 'oppose 反对', 'reject 拒绝'],
    examPoints: ['approve of 赞成（of不可省）', 'approve of doing 赞成做某事', '反义词 disapprove of']
  },
  accuse: {
    collocations: ['accuse sb of 指控某人', 'be accused of 被指控'],
    derivatives: ['accusation n. 指控', 'the accused 被告'],
    wordForms: { noun: 'accusation', pastTense: 'accused', pastParticiple: 'accused', presentParticiple: 'accusing' },
    synonyms: ['charge 指控', 'blame 责备'],
    antonyms: ['defend 辩护', 'acquit 宣判无罪'],
    examPoints: ['accuse sb of sth 指控某人某事', 'be accused of 被指控', 'charge sb with sth（注意介词区别）']
  },
  remind: {
    collocations: ['remind sb of 使某人想起', 'remind sb to do 提醒某人做', 'remind sb that 提醒某人'],
    derivatives: ['reminder n. 提示，提醒物'],
    wordForms: { noun: 'reminder', pastTense: 'reminded', pastParticiple: 'reminded', presentParticiple: 'reminding' },
    synonyms: ['prompt 促使', 'cue 提示'],
    antonyms: ['forget 忘记'],
    examPoints: ['remind sb of sth 使某人想起某事', 'remind sb to do sth 提醒某人做某事', '区分 remind/remember']
  },
  die: {
    collocations: ['die of 死于（内因）', 'die from 死于（外因）', 'die out 灭绝', 'die away 逐渐消失', 'die down 平息'],
    derivatives: ['death n. 死亡', 'dead adj. 死的', 'dying adj. 垂死的', 'deadly adj. 致命的'],
    wordForms: { noun: 'death', adjective: 'dead', presentParticiple: 'dying' },
    synonyms: ['perish 消亡', 'expire 断气'],
    antonyms: ['live 活着', 'survive 存活'],
    examPoints: ['die of 死于（疾病/饥饿等内因）', 'die from 死于（事故/外伤等外因）', 'die out 灭绝（物种）', 'be dying for 渴望']
  },
  succeed: {
    collocations: ['succeed in 成功做成', 'succeed sb as 继任某人', 'succeed to 继承'],
    derivatives: ['success n. 成功', 'successful adj. 成功的', 'successfully adv. 成功地', 'successor n. 继承人'],
    wordForms: { noun: 'success', adjective: 'successful', adverb: 'successfully', pastTense: 'succeeded', pastParticiple: 'succeeded', presentParticiple: 'succeeding' },
    synonyms: ['achieve 成就', 'accomplish 完成'],
    antonyms: ['fail 失败'],
    examPoints: ['succeed in (doing) sth 成功做某事', 'succeed to the throne 继承王位', 'be successful in 在...方面成功']
  },
  care: {
    collocations: ['care for 照顾；喜欢', 'care about 在乎', 'take care of 照顾', 'take care 当心'],
    derivatives: ['careful adj. 仔细的', 'careless adj. 粗心的', 'carefully adv. 仔细地', 'caring adj. 关心的'],
    wordForms: { noun: 'care', adjective: 'careful', adjective2: 'careless', adverb: 'carefully' },
    synonyms: ['mind 介意', 'concern 关心'],
    antonyms: ['ignore 忽视', 'neglect 忽略'],
    examPoints: ['care for 照顾/喜欢', 'care about 在乎/关心', 'take care of = look after 照顾', 'be careful with 小心对待']
  },
  stick: {
    collocations: ['stick to 坚持', 'stick out 突出', 'stick together 团结一致'],
    derivatives: ['sticky adj. 黏的'],
    wordForms: { noun: 'stick', adjective: 'sticky', pastTense: 'stuck', pastParticiple: 'stuck', presentParticiple: 'sticking' },
    synonyms: ['adhere 坚持', 'cling 坚持', 'persist 坚持'],
    antonyms: ['abandon 放弃', 'quit 放弃'],
    examPoints: ['stick to 坚持（to是介词，后接动名词）', 'stick to one\'s plan 坚持计划', 'be stuck in 陷入/卡在']
  },
  engage: {
    collocations: ['engage in 参与', 'be engaged in 忙于', 'engage sb to do 雇佣某人做', 'be engaged to 与...订婚'],
    derivatives: ['engagement n. 订婚；参与', 'engaging adj. 迷人的'],
    wordForms: { noun: 'engagement', adjective: 'engaging', pastTense: 'engaged', pastParticiple: 'engaged', presentParticiple: 'engaging' },
    synonyms: ['participate 参与', 'involve 参与'],
    antonyms: ['disengage 脱离'],
    examPoints: ['be engaged in 忙于（后接动名词）', 'be engaged to sb 与某人订婚', 'engage in = participate in']
  },
  specialize: {
    collocations: ['specialize in 专攻', 'specialize in doing 专门从事'],
    derivatives: ['specialist n. 专家', 'specialty n. 专业', 'specialized adj. 专门的'],
    wordForms: { noun: 'specialist', adjective: 'specialized', pastTense: 'specialized', pastParticiple: 'specialized', presentParticiple: 'specializing' },
    synonyms: ['focus 专注', 'major 主修'],
    antonyms: ['generalize 概括'],
    examPoints: ['specialize in 专攻/专门研究', 'a specialist in 某方面的专家']
  },
  attach: {
    collocations: ['attach to 附属于', 'attach importance to 重视', 'be attached to 依恋'],
    derivatives: ['attachment n. 附件；依恋'],
    wordForms: { noun: 'attachment', pastTense: 'attached', pastParticiple: 'attached', presentParticiple: 'attaching' },
    synonyms: ['connect 连接', 'fasten 系紧'],
    antonyms: ['detach 分离', 'disconnect 断开'],
    examPoints: ['attach importance to 重视（to是介词）', 'be attached to 附属于/依恋', 'attachment 附件']
  },
  suffer: {
    collocations: ['suffer from 遭受', 'suffer pain 忍受痛苦'],
    derivatives: ['suffering n. 痛苦', 'sufferer n. 受苦者'],
    wordForms: { noun: 'suffering', noun2: 'sufferer', pastTense: 'suffered', pastParticiple: 'suffered', presentParticiple: 'suffering' },
    synonyms: ['endure 忍受', 'tolerate 容忍', 'undergo 经历'],
    antonyms: ['enjoy 享受', 'benefit 受益'],
    examPoints: ['suffer from 遭受（疾病/痛苦）', 'suffer 忍受（及物动词）', 'suffering 痛苦/苦难']
  },
  // ===== 高考考点补充（第二批） =====
  base: {
    collocations: ['base...on... 把...建立在...基础上', 'be based on 以...为基础', 'basic adj. 基础的'],
    derivatives: ['basis n. 基础', 'basic adj. 基础的', 'basically adv. 基本上'],
    wordForms: { noun: 'basis', adjective: 'basic', adverb: 'basically', pastTense: 'based', pastParticiple: 'based', presentParticiple: 'basing' },
    synonyms: ['foundation 基础', 'ground 根据'],
    antonyms: [],
    examPoints: ['be based on 以...为基础（被动形式常用）', 'base A on B 把A建立在B基础上', 'base...on...常用被动 be based on', 'on the basis of 根据']
  },
  blame: {
    collocations: ['blame sb for sth 因某事责备某人', 'blame sth on sb 把某事归咎于某人', 'be to blame for 该受责备'],
    derivatives: ['blameless adj. 无过错的'],
    wordForms: { adjective: 'blameless', pastTense: 'blamed', pastParticiple: 'blamed', presentParticiple: 'blaming' },
    synonyms: ['accuse 指责', 'condemn 谴责'],
    antonyms: ['praise 表扬', 'commend 称赞'],
    examPoints: ['be to blame for 该受责备（主动表被动，不用to be blamed）', 'blame sb for sth = blame sth on sb', 'bear/take the blame 承担责任']
  },
  break: {
    collocations: ['break down 出故障；崩溃；分解', 'break out 爆发（战争/火灾）', 'break up 分手；解散', 'break in 闯入；打断', 'break into 闯入', 'break away from 脱离', 'break through 突破'],
    derivatives: ['breakdown n. 故障；崩溃', 'outbreak n. 爆发'],
    wordForms: { noun: 'breakdown', pastTense: 'broke', pastParticiple: 'broken', presentParticiple: 'breaking' },
    synonyms: ['smash 粉碎', 'crack 破裂'],
    antonyms: ['repair 修理', 'fix 修复'],
    examPoints: ['break out 爆发（无被动语态）', 'break down 出故障/分解/崩溃（多种含义高考常考）', 'break into 闯入（后接地点） vs break in 闯入（不接宾语）', 'break up 分手/解散']
  },
  bring: {
    collocations: ['bring about 导致；引起', 'bring up 抚养；呕吐', 'bring out 出版；使显现', 'bring forward 提出', 'bring down 降低；击落', 'bring in 引进；赚得'],
    derivatives: ['upbringing n. 教养'],
    wordForms: { noun: 'upbringing', pastTense: 'brought', pastParticiple: 'brought', presentParticiple: 'bringing' },
    synonyms: ['cause 引起', 'carry 携带'],
    antonyms: ['take 带走', 'remove 移除'],
    examPoints: ['bring about = cause 导致', 'bring up = raise 抚养', 'bring up 抚养 vs grow up 长大（及物vs不及物）', 'bring out 出版/使显现']
  },
  call: {
    collocations: ['call for 需要；要求', 'call on 拜访（人）；号召', 'call at 拜访（地点）', 'call up 回忆；打电话', 'call off 取消', 'call in 召集；来访'],
    derivatives: ['recall v. 回忆'],
    wordForms: { pastTense: 'called', pastParticiple: 'called', presentParticiple: 'calling' },
    synonyms: ['shout 呼喊', 'phone 打电话'],
    antonyms: [],
    examPoints: ['call on sb 拜访某人 vs call at sp 拜访某地', 'call for = require 需要/要求', 'call off = cancel 取消', 'call up 打电话/回忆起']
  },
  carry: {
    collocations: ['carry on 继续；进行', 'carry out 执行；实施', 'carry through 完成；贯彻', 'carry away 搬走；使入迷'],
    derivatives: [],
    wordForms: { pastTense: 'carried', pastParticiple: 'carried', presentParticiple: 'carrying' },
    synonyms: ['transport 运输', 'convey 传达'],
    antonyms: [],
    examPoints: ['carry on doing/with 继续（做）', 'carry out a plan 执行计划', 'carry out experiments 做实验', 'be carried away 被迷住/失去理智']
  },
  come: {
    collocations: ['come about 发生', 'come across 偶遇', 'come out 出版；出现', 'come to 苏醒；共计', 'come up with 提出（主意）', 'come true 实现', 'come into being 形成'],
    derivatives: ['outcome n. 结果', 'income n. 收入'],
    wordForms: { noun: 'outcome', noun2: 'income', pastTense: 'came', pastParticiple: 'come', presentParticiple: 'coming' },
    synonyms: ['arrive 到达', 'approach 接近'],
    antonyms: ['go 去', 'leave 离开'],
    examPoints: ['come about = happen 发生（无被动）', 'come across = run across 偶遇', 'come true 实现（dream comes true，无被动）', 'come up with 提出（主意/方案）', 'come to oneself 苏醒']
  },
  cut: {
    collocations: ['cut down 砍倒；削减', 'cut in 插嘴', 'cut off 切断；中断', 'cut up 切碎', 'cut across 抄近路', 'cut short 打断；缩短'],
    derivatives: ['shortcut n. 捷径'],
    wordForms: { noun: 'shortcut', pastTense: 'cut', pastParticiple: 'cut', presentParticiple: 'cutting' },
    synonyms: ['slice 切片', 'chop 砍'],
    antonyms: ['join 连接', 'connect 连接'],
    examPoints: ['cut down on 减少（消费/用量）', 'cut in 插嘴（不及物） vs cut in on 插嘴（接宾语）', 'cut off 切断（水电供应等）', 'cut short 缩短/打断']
  },
  distinguish: {
    collocations: ['distinguish A from B 区分A和B', 'distinguish between A and B 区分A和B', 'be distinguished for 因...出名'],
    derivatives: ['distinction n. 区别', 'distinctive adj. 独特的', 'distinctly adv. 清楚地'],
    wordForms: { noun: 'distinction', adjective: 'distinctive', adverb: 'distinctly', pastTense: 'distinguished', pastParticiple: 'distinguished', presentParticiple: 'distinguishing' },
    synonyms: ['differentiate 区分', 'discern 辨别'],
    antonyms: ['confuse 混淆', 'mix 混合'],
    examPoints: ['distinguish A from B = tell A from B 区分', 'distinguish between A and B 区分两者', 'distinguished 著名的/杰出的']
  },
  equip: {
    collocations: ['equip sb with sth 用...装备某人', 'be equipped with 配备有'],
    derivatives: ['equipment n. 装备（不可数名词）', 'equipped adj. 装备好的'],
    wordForms: { noun: 'equipment', adjective: 'equipped', pastTense: 'equipped', pastParticiple: 'equipped', presentParticiple: 'equipping' },
    synonyms: ['furnish 配备', 'provide 提供'],
    antonyms: [],
    examPoints: ['equipment 装备（不可数名词，不用equipments）', 'equip sb with sth 用...装备某人', 'be equipped with 配备有...']
  },
  fall: {
    collocations: ['fall behind 落后', 'fall in love with 爱上', 'fall asleep 入睡', 'fall ill 生病', 'fall apart 崩溃；散架', 'fall for 迷恋；上当'],
    derivatives: ['waterfall n. 瀑布', 'nightfall n. 黄昏'],
    wordForms: { noun: 'waterfall', pastTense: 'fell', pastParticiple: 'fallen', presentParticiple: 'falling' },
    synonyms: ['drop 落下', 'descend 下降'],
    antonyms: ['rise 升起', 'climb 攀升'],
    examPoints: ['fall behind 落后（不用被动）', 'fall in love with 爱上（不用被动）', 'fall asleep 入睡', 'fall ill 生病', '区分 fall（落下）过去式fell vs fell（砍倒）']
  },
  give: {
    collocations: ['give away 赠送；泄露', 'give in 屈服；让步', 'give off 发出（气味/光/热）', 'give out 分发；耗尽', 'give up 放弃', 'give rise to 引起'],
    derivatives: ['forgive v. 原谅'],
    wordForms: { pastTense: 'gave', pastParticiple: 'given', presentParticiple: 'giving' },
    synonyms: ['provide 提供', 'offer 给予'],
    antonyms: ['take 拿走', 'receive 接收'],
    examPoints: ['give in 屈服（不及物） vs give in to 屈服于（接宾语）', 'give up doing 放弃做（后接动名词）', 'give off 发出（气味/光等） vs give out 分发/耗尽', 'give away 泄露/赠送']
  },
  go: {
    collocations: ['go ahead 前进；开始', 'go through 经历；通过', 'go over 复习；检查', 'go about 着手做', 'go by 流逝', 'go wrong 出错', 'go out 熄灭'],
    derivatives: ['ongoing adj. 进行中的', 'undergo v. 经历'],
    wordForms: { noun: 'ongoing', pastTense: 'went', pastParticiple: 'gone', presentParticiple: 'going' },
    synonyms: ['proceed 前进', 'travel 旅行'],
    antonyms: ['come 来', 'stop 停止'],
    examPoints: ['go through 经历/穿过', 'go over = review 复习', 'go ahead 开始/前进', 'go out 熄灭（不用被动）', 'go wrong 出毛病']
  },
  hand: {
    collocations: ['hand down 传下来', 'hand in 上交', 'hand out 分发', 'hand over 移交', 'on the one hand...on the other hand 一方面...另一方面'],
    derivatives: ['handful n. 一把；少数', 'handy adj. 方便的'],
    wordForms: { noun: 'handful', adjective: 'handy', pastTense: 'handed', pastParticiple: 'handed', presentParticiple: 'handing' },
    synonyms: ['pass 传递', 'give 给'],
    antonyms: ['receive 接收'],
    examPoints: ['hand in 上交（作业等）', 'hand out = distribute 分发', 'hand down 流传下来', 'on the one hand... on the other hand 一方面...另一方面']
  },
  hold: {
    collocations: ['hold back 阻止；抑制', 'hold on 等一等；坚持', 'hold out 坚持；伸出', 'hold up 举起；耽搁', 'hold one\'s breath 屏住呼吸'],
    derivatives: ['holder n. 持有者', 'uphold v. 维护'],
    wordForms: { noun: 'holder', pastTense: 'held', pastParticiple: 'held', presentParticiple: 'holding' },
    synonyms: ['grasp 抓住', 'keep 保持'],
    antonyms: ['release 释放', 'let go 放手'],
    examPoints: ['hold on 等一等/坚持（电话用语）', 'hold back 阻止/抑制', 'hold up 耽搁/举起', 'hold one\'s breath 屏住呼吸']
  },
  pay: {
    collocations: ['pay for 为...付款', 'pay back 偿还', 'pay off 还清；取得成功', 'pay attention to 注意', 'pay a visit to 拜访'],
    derivatives: ['payment n. 付款', 'repay v. 偿还'],
    wordForms: { noun: 'payment', pastTense: 'paid', pastParticiple: 'paid', presentParticiple: 'paying' },
    synonyms: ['settle 结算', 'compensate 补偿'],
    antonyms: [],
    examPoints: ['pay attention to doing 注意做（to是介词）', 'pay off 还清债务/取得成功', 'pay for sth 为...付出代价/付款', 'pay a visit to = visit 拜访']
  },
  pick: {
    collocations: ['pick up 捡起；学会；接（人）', 'pick out 挑选出', 'pick at 少量吃'],
    derivatives: [],
    wordForms: { pastTense: 'picked', pastParticiple: 'picked', presentParticiple: 'picking' },
    synonyms: ['choose 选择', 'select 挑选'],
    antonyms: [],
    examPoints: ['pick up 捡起/接人/学会（一词多义高考高频）', 'pick out = select 挑选', 'pick up a language 学会语言（无被动）']
  },
  run: {
    collocations: ['run after 追赶', 'run away 逃跑', 'run out of 用完', 'run over 辗过；溢出', 'run into 偶遇；撞上', 'in the long run 从长远来看'],
    derivatives: ['runner n. 跑步者', 'running n. 跑步'],
    wordForms: { noun: 'runner', pastTense: 'ran', pastParticiple: 'run', presentParticiple: 'running' },
    synonyms: ['sprint 冲刺', 'dash 猛冲'],
    antonyms: ['walk 走', 'stand 站'],
    examPoints: ['run out of 用完（及物，后接宾语） vs run out 用完（不及物，不接宾语）', 'run into = come across 偶遇/撞上', 'in the long run 从长远来看']
  },
  send: {
    collocations: ['send for 派人去请', 'send out 发出；发送', 'send up 发射', 'send off 寄出；送行'],
    derivatives: ['sender n. 寄件人'],
    wordForms: { noun: 'sender', pastTense: 'sent', pastParticiple: 'sent', presentParticiple: 'sending' },
    synonyms: ['dispatch 派遣', 'deliver 递送'],
    antonyms: ['receive 接收', 'keep 保留'],
    examPoints: ['send for sb 派人去请某人（不用send to call）', 'send out 发出/散发', 'send up 发射（火箭等）']
  },
  stand: {
    collocations: ['stand for 代表；容忍', 'stand out 突出；显眼', 'stand by 支持；袖手旁观', 'stand up for 维护；为...辩护', 'as it stands 照目前情况'],
    derivatives: ['understanding n. 理解', 'outstanding adj. 杰出的'],
    wordForms: { noun: 'understanding', adjective: 'outstanding', pastTense: 'stood', pastParticiple: 'stood', presentParticiple: 'standing' },
    synonyms: ['endure 忍受', 'represent 代表'],
    antonyms: ['sit 坐', 'yield 屈服'],
    examPoints: ['stand for 代表（缩写含义）', 'stand out = be noticeable 突出', 'stand by 袖手旁观/支持', 'can\'t stand doing 无法忍受做']
  },
  think: {
    collocations: ['think about 考虑', 'think of 想起；认为', 'think over 仔细考虑', 'think highly of 高度评价', 'think twice 三思'],
    derivatives: ['thought n. 思想', 'thoughtful adj. 深思的', 'thinking n. 思考'],
    wordForms: { noun: 'thought', adjective: 'thoughtful', pastTense: 'thought', pastParticiple: 'thought', presentParticiple: 'thinking' },
    synonyms: ['consider 考虑', 'believe 认为'],
    antonyms: ['forget 忘记', 'ignore 忽视'],
    examPoints: ['think about doing 考虑做', 'think of 想起/认为（What do you think of...?）', 'think over 仔细考虑（代词放中间 think it over）', 'think highly/well of 高度评价']
  },
  wear: {
    collocations: ['wear out 穿破；使疲惫', 'wear away 磨损', 'wear off 逐渐消失', 'be worn out 筋疲力尽'],
    derivatives: ['worn adj. 磨损的', 'wearable adj. 可穿戴的'],
    wordForms: { adjective: 'worn', pastTense: 'wore', pastParticiple: 'worn', presentParticiple: 'wearing' },
    synonyms: ['put on 穿上', 'dress 穿衣'],
    antonyms: ['take off 脱下'],
    examPoints: ['wear 穿着（状态） vs put on 穿上（动作） vs dress 给...穿衣', 'wear out 穿破/使疲惫（被动 be worn out 筋疲力尽）', 'wear off 逐渐消退（药效/感觉等）']
  },
  addict: {
    collocations: ['be addicted to doing 沉迷于做', 'addict oneself to 沉迷于'],
    derivatives: ['addiction n. 上瘾', 'addictive adj. 使人上瘾的'],
    wordForms: { noun: 'addiction', adjective: 'addictive', adjective2: 'addicted', pastTense: 'addicted', pastParticiple: 'addicted', presentParticiple: 'addicting' },
    synonyms: ['indulge 沉溺', 'hook 迷上'],
    antonyms: ['quit 戒除'],
    examPoints: ['be addicted to doing 沉迷于做（to是介词，后接动名词）', 'addiction to sth 对...上瘾', 'addictive 使人上瘾的（主动含义） vs addicted 上瘾的（被动含义）']
  },
  face: {
    collocations: ['be faced with 面对', 'face up to 勇敢面对', 'face to face 面对面', 'in the face of 面对', 'save face 保全面子', 'lose face 丢脸'],
    derivatives: ['facial adj. 面部的', 'surface n. 表面'],
    wordForms: { noun: 'surface', adjective: 'facial', pastTense: 'faced', pastParticiple: 'faced', presentParticiple: 'facing' },
    synonyms: ['confront 面对', 'encounter 遭遇'],
    antonyms: ['avoid 回避', 'evade 逃避'],
    examPoints: ['be faced with 面对（被动形式） vs face 面对（主动形式）', 'face up to 勇敢面对（to是介词）', 'in the face of 面对（困难/危险）', 'face to face 面对面']
  },
  fill: {
    collocations: ['fill with 充满', 'be filled with 装满了', 'fill in 填写（表格）', 'fill out 填写（表格）', 'fill up 填满'],
    derivatives: ['filling n. 馅料', 'fulfill v. 履行'],
    wordForms: { noun: 'filling', pastTense: 'filled', pastParticiple: 'filled', presentParticiple: 'filling' },
    synonyms: ['pack 填充', 'stuff 塞满'],
    antonyms: ['empty 清空', 'drain 排空'],
    examPoints: ['be filled with = be full of 装满了', 'fill in/out a form 填写表格', 'fill in 填写（英式） vs fill out 填写（美式）', 'fill up 填满']
  },
  impress: {
    collocations: ['impress sb with sth 用...给某人留下印象', 'be impressed by/with 对...印象深刻', 'leave a deep impression on 给...留下深刻印象'],
    derivatives: ['impression n. 印象', 'impressive adj. 令人印象深刻的'],
    wordForms: { noun: 'impression', adjective: 'impressive', adjective2: 'impressed', pastTense: 'impressed', pastParticiple: 'impressed', presentParticiple: 'impressing' },
    synonyms: ['amaze 使惊奇', 'move 打动'],
    antonyms: ['disappoint 使失望'],
    examPoints: ['impress sb with sth 给某人留下印象', 'be impressed by/with 对...印象深刻', 'leave/make an impression on sb 给某人留下印象', 'impressive 令人印象深刻的（主动） vs impressed 感到印象深刻的（被动）']
  },
  prepare: {
    collocations: ['prepare for 为...做准备', 'be prepared for 为...做好了准备', 'prepare sb for sth 使某人为...做准备', 'in preparation for 为...做准备'],
    derivatives: ['preparation n. 准备', 'prepared adj. 准备好的'],
    wordForms: { noun: 'preparation', adjective: 'prepared', pastTense: 'prepared', pastParticiple: 'prepared', presentParticiple: 'preparing' },
    synonyms: ['arrange 安排', 'plan 计划'],
    antonyms: [],
    examPoints: ['prepare for sth 为...做准备（动作） vs be prepared for sth 做好了准备（状态）', 'prepare to do 准备做', 'in preparation for 为...做准备', 'make preparations for 为...做准备']
  },
  recommend: {
    collocations: ['recommend doing 建议做', 'recommend sb to do 建议某人做', 'recommend that (should) do 建议做（虚拟语气）'],
    derivatives: ['recommendation n. 推荐'],
    wordForms: { noun: 'recommendation', pastTense: 'recommended', pastParticiple: 'recommended', presentParticiple: 'recommending' },
    synonyms: ['suggest 建议', 'advise 劝告'],
    antonyms: ['discourage 劝阻'],
    examPoints: ['recommend doing 建议做（后接动名词）', 'recommend that + (should) do 虚拟语气（should可省）', 'recommend sb to do 建议某人做', 'recommendation 推荐（名词）']
  },
  range: {
    collocations: ['range from...to... 范围从...到...', 'a wide range of 各种各样的', 'in/within range 在范围内', 'out of range 在范围外'],
    derivatives: ['arrange v. 安排', 'arrangement n. 安排'],
    wordForms: { pastTense: 'ranged', pastParticiple: 'ranged', presentParticiple: 'ranging' },
    synonyms: ['vary 变化', 'extend 延伸'],
    antonyms: [],
    examPoints: ['range from A to B 范围从A到B', 'a wide range of + 复数名词 各种各样的', 'range 做动词：range from...to.../range between...and...']
  },
  rob: {
    collocations: ['rob sb of sth 抢劫某人某物', 'rob a bank 抢银行'],
    derivatives: ['robber n. 强盗', 'robbery n. 抢劫'],
    wordForms: { noun: 'robber', noun2: 'robbery', pastTense: 'robbed', pastParticiple: 'robbed', presentParticiple: 'robbing' },
    synonyms: ['steal 偷', 'loot 掠夺'],
    antonyms: ['return 归还'],
    examPoints: ['rob sb of sth 抢某人某物（搭配of）', '区分 rob sb of sth vs steal sth from sb', 'robber 强盗 vs thief 小偷']
  },
  search: {
    collocations: ['search for 搜寻', 'search sb 搜身', 'in search of 寻找', 'in one\'s search for 在寻找...的过程中'],
    derivatives: ['research n./v. 研究', 'researcher n. 研究者'],
    wordForms: { noun: 'research', noun2: 'researcher', pastTense: 'searched', pastParticiple: 'searched', presentParticiple: 'searching' },
    synonyms: ['seek 寻找', 'hunt 搜寻'],
    antonyms: ['find 找到', 'discover 发现'],
    examPoints: ['search for sb/sth 搜寻（强调寻找的过程）', 'search sb 搜某人的身（强调搜查动作）', 'in search of 寻找（介词短语）', 'search through 搜遍']
  },
  suspect: {
    collocations: ['suspect sb of sth 怀疑某人做某事', 'suspect sb to be 怀疑某人是', 'suspect that 怀疑'],
    derivatives: ['suspicion n. 怀疑', 'suspicious adj. 可疑的'],
    wordForms: { noun: 'suspicion', adjective: 'suspicious', pastTense: 'suspected', pastParticiple: 'suspected', presentParticiple: 'suspecting' },
    synonyms: ['doubt 怀疑', 'mistrust 不信任'],
    antonyms: ['trust 信任', 'believe 相信'],
    examPoints: ['suspect sb of (doing) sth 怀疑某人做某事', 'suspect that... 怀疑...', 'be suspicious of 对...起疑心', '区分 suspect（怀疑是真的） vs doubt（怀疑不是真的）']
  },
  date: {
    collocations: ['date back to 追溯到', 'date from 始于', 'out of date 过时', 'up to date 最新的', 'to date 至今'],
    derivatives: ['update v. 更新', 'outdated adj. 过时的'],
    wordForms: { noun: 'update', adjective: 'outdated', pastTense: 'dated', pastParticiple: 'dated', presentParticiple: 'dating' },
    synonyms: ['origin 起源', 'era 时代'],
    antonyms: [],
    examPoints: ['date back to = date from 追溯到/始于（无被动，常用一般现在时）', 'out of date 过时的 vs up to date 最新的', 'to date 至今（常与完成时连用）']
  },
  deserve: {
    collocations: ['deserve to do 值得做', 'deserve doing 值得做（主动表被动）', 'deserving adj. 值得的'],
    derivatives: ['deserved adj. 应得的'],
    wordForms: { adjective: 'deserved', pastTense: 'deserved', pastParticiple: 'deserved', presentParticiple: 'deserving' },
    synonyms: ['merit 值得', 'warrant 值得'],
    antonyms: [],
    examPoints: ['deserve to do 值得做（不定式）', 'deserve doing 值得被做（主动表被动，如 deserve praising = deserve to be praised）', 'deserve attention/consideration 值得关注/考虑']
  },
  mind: {
    collocations: ['mind doing 介意做', 'would you mind doing 你介意做...吗', 'make up one\'s mind 下定决心', 'change one\'s mind 改变主意', 'keep in mind 记住', 'bear in mind 牢记'],
    derivatives: ['remind v. 提醒'],
    wordForms: { noun: 'reminder', pastTense: 'minded', pastParticiple: 'minded', presentParticiple: 'minding' },
    synonyms: ['care 在意', 'object 反对'],
    antonyms: [],
    examPoints: ['mind doing 介意做（后接动名词）', 'Would you mind my doing...? 你介意我做...吗？', 'make up one\'s mind to do 下定决心做', 'keep/bear in mind 记住']
  },
  risk: {
    collocations: ['risk doing 冒险做', 'at the risk of 冒...的风险', 'take a risk 冒险', 'run the risk of 冒...的风险'],
    derivatives: ['risky adj. 危险的'],
    wordForms: { adjective: 'risky', pastTense: 'risked', pastParticiple: 'risked', presentParticiple: 'risking' },
    synonyms: ['endanger 危及', 'hazard 冒险'],
    antonyms: ['protect 保护', 'safeguard 保障'],
    examPoints: ['risk doing 冒险做（后接动名词）', 'at the risk of 冒...风险', 'take/run a risk 冒险', 'risky 危险的/冒险的']
  },
  admit: {
    collocations: ['admit doing 承认做了', 'admit to doing 承认做了', 'be admitted to/into 被...录取', 'admit sb into 允许某人进入'],
    derivatives: ['admission n. 承认；入场费', 'admittedly adv. 诚然'],
    wordForms: { noun: 'admission', adverb: 'admittedly', pastTense: 'admitted', pastParticiple: 'admitted', presentParticiple: 'admitting' },
    synonyms: ['confess 坦白', 'acknowledge 承认'],
    antonyms: ['deny 否认', 'reject 拒绝'],
    examPoints: ['admit doing 承认做了（后接动名词）', 'be admitted to/into 被...录取', 'admit sb into 允许进入', 'admission 承认/入场费/录取']
  },
  appreciate: {
    collocations: ['appreciate doing 感激做', 'appreciate sb doing 感激某人做', 'I would appreciate it if... 如果...我将不胜感激'],
    derivatives: ['appreciation n. 感激', 'appreciative adj. 感激的'],
    wordForms: { noun: 'appreciation', adjective: 'appreciative', pastTense: 'appreciated', pastParticiple: 'appreciated', presentParticiple: 'appreciating' },
    synonyms: ['value 珍视', 'treasure 珍惜'],
    antonyms: ['depreciate 贬值', 'despise 鄙视'],
    examPoints: ['appreciate doing 感激做（后接动名词）', 'I would appreciate it if... 如果...我将不胜感激（it是形式宾语）', 'appreciate sb\'s doing 感激某人做', 'appreciation 感激/欣赏']
  },
  consider: {
    collocations: ['consider doing 考虑做', 'consider...as... 把...看作', 'considering prep. 考虑到', 'take...into consideration 把...考虑在内'],
    derivatives: ['consideration n. 考虑', 'considerate adj. 体贴的', 'considerable adj. 相当大的'],
    wordForms: { noun: 'consideration', adjective: 'considerate', adjective2: 'considerable', pastTense: 'considered', pastParticiple: 'considered', presentParticiple: 'considering' },
    synonyms: ['think 考虑', 'contemplate 沉思'],
    antonyms: ['ignore 忽视', 'disregard 不顾'],
    examPoints: ['consider doing 考虑做（后接动名词，不接不定式）', 'considerate 体贴的 vs considerable 相当大的（易混）', 'take...into consideration 把...考虑在内', 'considering that 考虑到（连词）']
  },
  delay: {
    collocations: ['delay doing 推迟做', 'without delay 毫不迟疑', 'be delayed by 因...耽搁'],
    derivatives: [],
    wordForms: { noun: 'delay', pastTense: 'delayed', pastParticiple: 'delayed', presentParticiple: 'delaying' },
    synonyms: ['postpone 推迟', 'put off 推迟'],
    antonyms: ['hurry 赶紧', 'expedite 加速'],
    examPoints: ['delay doing 推迟做（后接动名词）', 'without delay = immediately 立刻', 'delay = put off = postpone（都接doing）']
  },
  escape: {
    collocations: ['escape from 从...逃跑', 'escape doing 逃避做', 'escape one\'s notice 逃过某人注意', 'narrow escape 险些遇难'],
    derivatives: ['escapee n. 逃亡者'],
    wordForms: { noun: 'escapee', pastTense: 'escaped', pastParticiple: 'escaped', presentParticiple: 'escaping' },
    synonyms: ['flee 逃跑', 'evade 逃避'],
    antonyms: ['capture 捕获', 'catch 抓住'],
    examPoints: ['escape doing 逃避做（后接动名词）', 'escape from prison 越狱', 'a narrow escape 九死一生', 'escape one\'s memory/notice 被某人忘记/没注意到']
  },
  finish: {
    collocations: ['finish doing 完成做', 'finish off 吃光；完成', 'finish up with 以...结束'],
    derivatives: ['finished adj. 完成的'],
    wordForms: { adjective: 'finished', pastTense: 'finished', pastParticiple: 'finished', presentParticiple: 'finishing' },
    synonyms: ['complete 完成', 'accomplish 完成'],
    antonyms: ['start 开始', 'begin 开始'],
    examPoints: ['finish doing 完成做（后接动名词，不接不定式）', 'finish off 吃完/做完', 'finish reading/writing 完成读/写']
  },
  imagine: {
    collocations: ['imagine doing 想象做', 'imagine sb doing 想象某人做', 'imagine sb to be 想象某人是', 'beyond imagination 超乎想象'],
    derivatives: ['imagination n. 想象力', 'imaginative adj. 富有想象力的', 'imaginary adj. 虚构的'],
    wordForms: { noun: 'imagination', adjective: 'imaginative', adjective2: 'imaginary', pastTense: 'imagined', pastParticiple: 'imagined', presentParticiple: 'imagining' },
    synonyms: ['visualize 想象', 'conceive 设想'],
    antonyms: ['realize 意识到'],
    examPoints: ['imagine doing 想象做（后接动名词）', 'imagine sb doing 想象某人做', 'imaginative 富有想象力的 vs imaginary 虚构的 vs imaginable 可想象的（易混）', 'beyond imagination 超乎想象']
  },
  practice: {
    collocations: ['practice doing 练习做', 'put into practice 付诸实践', 'in practice 实际上', 'common practice 惯例'],
    derivatives: ['practical adj. 实践的', 'practically adv. 实际上'],
    wordForms: { noun: 'practice', adjective: 'practical', adverb: 'practically', pastTense: 'practiced', pastParticiple: 'practiced', presentParticiple: 'practicing' },
    synonyms: ['train 训练', 'drill 操练'],
    antonyms: [],
    examPoints: ['practice doing 练习做（后接动名词，美式拼写practise）', 'put...into practice 把...付诸实践', 'practical 实用的/实际的 vs practicable 可行的', 'in practice 实际上/在实践中']
  },
  enjoy: {
    collocations: ['enjoy doing 喜欢做', 'enjoy oneself 玩得开心', 'enjoy good health 身体健康'],
    derivatives: ['enjoyment n. 享受', 'enjoyable adj. 令人愉快的'],
    wordForms: { noun: 'enjoyment', adjective: 'enjoyable', pastTense: 'enjoyed', pastParticiple: 'enjoyed', presentParticiple: 'enjoying' },
    synonyms: ['like 喜欢', 'relish 享受'],
    antonyms: ['dislike 不喜欢', 'hate 讨厌'],
    examPoints: ['enjoy doing 喜欢做（后接动名词，不接不定式）', 'enjoy oneself = have a good time 玩得开心', 'enjoyable 令人愉快的', 'enjoy good health 享受健康']
  },
  forbid: {
    collocations: ['forbid sb to do 禁止某人做', 'forbid doing 禁止做', 'forbidden city 紫禁城'],
    derivatives: ['forbidden adj. 被禁止的'],
    wordForms: { adjective: 'forbidden', pastTense: 'forbade', pastParticiple: 'forbidden', presentParticiple: 'forbidding' },
    synonyms: ['prohibit 禁止', 'ban 禁止'],
    antonyms: ['allow 允许', 'permit 许可'],
    examPoints: ['forbid sb to do 禁止某人做（用不定式，不用forbid sb doing）', 'forbid doing 禁止做（后接动名词）', 'forbid - forbade - forbidden（过去式/过去分词变形）', 'Forbidden City 紫禁城']
  },
  permit: {
    collocations: ['permit doing 允许做', 'permit sb to do 允许某人做', 'weather permitting 天气允许的话'],
    derivatives: ['permission n. 允许', 'permissible adj. 许可的'],
    wordForms: { noun: 'permission', adjective: 'permissible', pastTense: 'permitted', pastParticiple: 'permitted', presentParticiple: 'permitting' },
    synonyms: ['allow 允许', 'authorize 批准'],
    antonyms: ['forbid 禁止', 'prohibit 禁止'],
    examPoints: ['permit doing 允许做（后接动名词）', 'permit sb to do 允许某人做（后接不定式）', 'permission n. 允许（不可数名词）', 'weather permitting 天气允许的话（独立主格）']
  },
  suggest: {
    collocations: ['suggest doing 建议做', 'suggest that (should) do 建议做（虚拟语气）', 'suggest that (陈述语气) 暗示', 'suggestion n. 建议'],
    derivatives: ['suggestion n. 建议', 'suggestive adj. 暗示的'],
    wordForms: { noun: 'suggestion', adjective: 'suggestive', pastTense: 'suggested', pastParticiple: 'suggested', presentParticiple: 'suggesting' },
    synonyms: ['propose 建议', 'recommend 推荐'],
    antonyms: [],
    examPoints: ['suggest doing 建议做（后接动名词）', 'suggest that + (should) do 虚拟语气（表建议）', 'suggest that + 陈述语气（表暗示/表明）', 'a suggestion that + (should) do 同位语从句用虚拟语气']
  },
  worth: {
    collocations: ['be worth doing 值得做', 'be worthy of 值得', 'be worthy to be done 值得被做', 'worthwhile adj. 值得的'],
    derivatives: ['worthy adj. 值得的', 'worthwhile adj. 值得的'],
    wordForms: { adjective: 'worthy', adjective2: 'worthwhile' },
    synonyms: ['deserving 值得的', 'meriting 值得的'],
    antonyms: ['worthless 无价值的'],
    examPoints: ['be worth doing 值得做（主动表被动，不用being done）', 'be worth + 价格 值...钱', 'be worthy of being done / be worthy to be done 值得被做', 'It is worthwhile to do/doing 值得做', '区分 worth/worthy/worthwhile（高考高频易混）']
  },
  used: {
    collocations: ['used to do 过去常常做', 'be used to doing 习惯于做', 'be used to do 被用来做', 'get used to doing 逐渐习惯做'],
    derivatives: ['useful adj. 有用的', 'useless adj. 无用的'],
    wordForms: { adjective: 'useful', adjective2: 'useless', pastTense: 'used', pastParticiple: 'used', presentParticiple: 'using' },
    synonyms: ['accustomed 习惯的', 'familiar 熟悉的'],
    antonyms: ['unused 未使用的'],
    examPoints: ['used to do 过去常常做（过去时，现在不做了）', 'be used to doing 习惯于做（to是介词，接动名词）', 'be used to do 被用来做（被动语态，接不定式）', '区分 used to do / be used to doing / be used to do（高考高频）']
  },
  suppose: {
    collocations: ['be supposed to do 应该做', 'suppose that 假设', 'supposing that 假设'],
    derivatives: ['supposition n. 假设'],
    wordForms: { noun: 'supposition', pastTense: 'supposed', pastParticiple: 'supposed', presentParticiple: 'supposing' },
    synonyms: ['assume 假设', 'presume 假定'],
    antonyms: ['know 确知', 'prove 证明'],
    examPoints: ['be supposed to do 应该做（= should）', 'suppose/supposing (that) 假设（引导条件状语从句）', 'be not supposed to do 不应当做']
  },
  ensure: {
    collocations: ['ensure that 确保', 'ensure sb sth 向某人保证', 'ensure against 防止'],
    derivatives: ['insurance n. 保险', 'assurance n. 保证'],
    wordForms: { noun: 'insurance', pastTense: 'ensured', pastParticiple: 'ensured', presentParticiple: 'ensuring' },
    synonyms: ['guarantee 保证', 'assure 确保'],
    antonyms: ['endanger 危及'],
    examPoints: ['ensure that... 确保...（后接从句）', 'ensure sb sth 向某人保证某事', '区分 ensure/assure/insure（ensure确保, assure向...保证, insure投保）']
  },
  cure: {
    collocations: ['cure sb of sth 治愈某人的...', 'a cure for ...的治疗方法'],
    derivatives: ['curable adj. 可治愈的'],
    wordForms: { adjective: 'curable', pastTense: 'cured', pastParticiple: 'cured', presentParticiple: 'curing' },
    synonyms: ['heal 治愈', 'treat 治疗'],
    antonyms: ['infect 感染', 'disease 疾病'],
    examPoints: ['cure sb of sth 治愈某人的病（搭配of）', '区分 cure（治愈）vs treat（治疗，不接of）vs heal（痊愈）', 'a cure for cancer 癌症的治疗方法']
  },
  inform: {
    collocations: ['inform sb of sth 通知某人某事', 'inform sb that 通知某人', 'keep sb informed 随时通知某人'],
    derivatives: ['information n. 信息（不可数）', 'informative adj. 信息量大的'],
    wordForms: { noun: 'information', adjective: 'informative', adjective2: 'informed', pastTense: 'informed', pastParticiple: 'informed', presentParticiple: 'informing' },
    synonyms: ['notify 通知', 'advise 告知'],
    antonyms: ['hide 隐藏', 'conceal 隐瞒'],
    examPoints: ['inform sb of sth 通知某人某事（搭配of，不用inform sb sth）', 'keep sb informed of 随时告知某人', 'information 信息（不可数名词，不用informations）', 'well-informed 消息灵通的']
  },
  accuse: {
    collocations: ['accuse sb of (doing) sth 指控某人做某事', 'be accused of 被指控'],
    derivatives: ['accusation n. 指控', 'the accused 被告'],
    wordForms: { noun: 'accusation', pastTense: 'accused', pastParticiple: 'accused', presentParticiple: 'accusing' },
    synonyms: ['charge 指控', 'blame 责备'],
    antonyms: ['defend 辩护', 'praise 表扬'],
    examPoints: ['accuse sb of sth 指控某人（搭配of）', '区分 accuse sb of sth vs charge sb with sth（搭配不同）', 'the accused 被告（复数含义）']
  },
  remind: {
    collocations: ['remind sb of sth 使某人想起某事', 'remind sb to do 提醒某人做', 'remind sb that 提醒某人'],
    derivatives: ['reminder n. 提示物'],
    wordForms: { noun: 'reminder', pastTense: 'reminded', pastParticiple: 'reminded', presentParticiple: 'reminding' },
    synonyms: ['prompt 提示', 'recall 回忆'],
    antonyms: ['forget 忘记'],
    examPoints: ['remind sb of sth 使某人想起（搭配of）', 'remind sb to do 提醒某人做（接不定式）', '区分 remind sb of sth vs warn sb of sth（提醒 vs 警告）']
  },
  convince: {
    collocations: ['convince sb of sth 使某人确信', 'convince sb to do 说服某人做', 'be convinced that 确信'],
    derivatives: ['convincing adj. 有说服力的', 'conviction n. 信念'],
    wordForms: { noun: 'conviction', adjective: 'convincing', adjective2: 'convinced', pastTense: 'convinced', pastParticiple: 'convinced', presentParticiple: 'convincing' },
    synonyms: ['persuade 说服', 'assure 保证'],
    antonyms: ['doubt 怀疑'],
    examPoints: ['convince sb of sth 使某人确信（搭配of）', 'be convinced that/of 确信', 'convincing 有说服力的（主动） vs convinced 确信的（被动）', '区分 convince（使确信）vs persuade（说服做某事）']
  },
  rid: {
    collocations: ['rid sb of sth 使某人摆脱', 'get rid of 摆脱；去除', 'be rid of 摆脱'],
    derivatives: ['riddance n. 摆脱'],
    wordForms: { pastTense: 'rid', pastParticiple: 'rid', presentParticiple: 'ridding' },
    synonyms: ['free 解放', 'clear 清除'],
    antonyms: ['keep 保留', 'retain 保持'],
    examPoints: ['get rid of 摆脱/去除（高考高频短语）', 'rid sb of sth 使某人摆脱（搭配of）', 'be rid of 摆脱了...的']
  },
  beautiful: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'more beautiful', superlative: 'most beautiful' },
    synonyms: ['pretty 漂亮的', 'lovely 可爱的', 'gorgeous 华丽的', 'attractive 迷人的', 'handsome 英俊的'],
    antonyms: ['ugly 丑陋的', 'plain 朴素的'],
    examPoints: []
  },
  big: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'bigger', superlative: 'biggest' },
    synonyms: ['large 大的', 'huge 巨大的', 'enormous 庞大的', 'massive 大量的', 'vast 广阔的'],
    antonyms: ['small 小的', 'tiny 微小的', 'little 小的'],
    examPoints: []
  },
  small: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'smaller', superlative: 'smallest' },
    synonyms: ['little 小的', 'tiny 微小的', 'minor 较小的', 'slight 轻微的', 'petite 娇小的'],
    antonyms: ['big 大的', 'large 大的', 'huge 巨大的'],
    examPoints: []
  },
  good: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'better', superlative: 'best' },
    synonyms: ['fine 好的', 'excellent 优秀的', 'great 伟大的', 'wonderful 极好的', 'superb 极好的'],
    antonyms: ['bad 坏的', 'poor 差的', 'terrible 糟糕的'],
    examPoints: []
  },
  bad: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'worse', superlative: 'worst' },
    synonyms: ['poor 差的', 'terrible 糟糕的', 'awful 极坏的', 'horrible 可怕的', 'dreadful 糟透的'],
    antonyms: ['good 好的', 'fine 好的', 'excellent 优秀的'],
    examPoints: []
  },
  happy: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'happier', superlative: 'happiest' },
    synonyms: ['glad 高兴的', 'joyful 快乐的', 'cheerful 愉快的', 'delighted 高兴的', 'pleased 满意的'],
    antonyms: ['sad 悲伤的', 'unhappy 不快乐的', 'miserable 悲惨的'],
    examPoints: []
  },
  sad: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'sadder', superlative: 'saddest' },
    synonyms: ['unhappy 不快乐的', 'sorrowful 悲伤的', 'depressed 沮丧的', 'gloomy 忧郁的', 'miserable 悲惨的'],
    antonyms: ['happy 快乐的', 'joyful 快乐的', 'cheerful 愉快的'],
    examPoints: []
  },
  important: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'more important', superlative: 'most important' },
    synonyms: ['significant 重要的', 'crucial 关键的', 'vital 至关重要的', 'essential 必要的', 'key 关键的'],
    antonyms: ['unimportant 不重要的', 'trivial 琐碎的', 'insignificant 无关紧要的'],
    examPoints: []
  },
  difficult: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hard 困难的', 'tough 艰难的', 'challenging 有挑战性的', 'complex 复杂的', 'complicated 复杂的'],
    antonyms: ['easy 容易的', 'simple 简单的', 'effortless 不费力的'],
    examPoints: []
  },
  easy: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'easier', superlative: 'easiest' },
    synonyms: ['simple 简单的', 'effortless 不费力的', 'straightforward 直截了当的', 'manageable 易处理的'],
    antonyms: ['difficult 困难的', 'hard 困难的', 'complex 复杂的'],
    examPoints: []
  },
  fast: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'faster', superlative: 'fastest' },
    synonyms: ['quick 快的', 'rapid 迅速的', 'swift 敏捷的', 'speedy 快速的', 'brisk 轻快的'],
    antonyms: ['slow 慢的', 'sluggish 缓慢的'],
    examPoints: []
  },
  slow: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'slower', superlative: 'slowest' },
    synonyms: ['sluggish 缓慢的', 'leisurely 从容的', 'unhurried 不慌不忙的', 'gradual 渐进的'],
    antonyms: ['fast 快的', 'quick 快的', 'rapid 迅速的'],
    examPoints: []
  },
  strong: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'stronger', superlative: 'strongest' },
    synonyms: ['powerful 强大的', 'sturdy 坚固的', 'robust 强健的', 'tough 坚韧的', 'mighty 强有力的'],
    antonyms: ['weak 弱的', 'feeble 虚弱的', 'fragile 脆弱的'],
    examPoints: []
  },
  weak: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'weaker', superlative: 'weakest' },
    synonyms: ['feeble 虚弱的', 'frail 脆弱的', 'fragile 脆弱的', 'faint 微弱的'],
    antonyms: ['strong 强壮的', 'powerful 强大的', 'robust 强健的'],
    examPoints: []
  },
  rich: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'richer', superlative: 'richest' },
    synonyms: ['wealthy 富有的', 'affluent 富裕的', 'prosperous 繁荣的', 'well-off 富裕的'],
    antonyms: ['poor 贫穷的', 'needy 贫困的', 'destitute 赤贫的'],
    examPoints: []
  },
  poor: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'poorer', superlative: 'poorest' },
    synonyms: ['needy 贫困的', 'destitute 赤贫的', 'impoverished 贫困的', 'penniless 身无分文的'],
    antonyms: ['rich 富有的', 'wealthy 富有的', 'affluent 富裕的'],
    examPoints: []
  },
  old: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'older/elder', superlative: 'oldest/eldest' },
    synonyms: ['aged 年老的', 'elderly 年长的', 'ancient 古老的', 'outdated 过时的', 'vintage 老式的'],
    antonyms: ['new 新的', 'young 年轻的', 'modern 现代的'],
    examPoints: []
  },
  new: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fresh 新鲜的', 'novel 新奇的', 'modern 现代的', 'latest 最新的', 'recent 最近的'],
    antonyms: ['old 旧的', 'ancient 古老的', 'outdated 过时的'],
    examPoints: []
  },
  young: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'younger', superlative: 'youngest' },
    synonyms: ['youthful 年轻的', 'immature 未成熟的', 'juvenile 少年的', 'adolescent 青春期的'],
    antonyms: ['old 年老的', 'elderly 年长的', 'mature 成熟的'],
    examPoints: []
  },
  hot: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'hotter', superlative: 'hottest' },
    synonyms: ['warm 温暖的', 'burning 炽热的', 'scorching 灼热的', 'boiling 沸腾的', 'fiery 火热的'],
    antonyms: ['cold 冷的', 'cool 凉爽的', 'freezing 冰冻的'],
    examPoints: []
  },
  cold: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'colder', superlative: 'coldest' },
    synonyms: ['chilly 寒冷的', 'freezing 冰冻的', 'frigid 寒冷的', 'icy 冰冷的', 'frosty 严寒的'],
    antonyms: ['hot 热的', 'warm 温暖的', 'boiling 炽热的'],
    examPoints: []
  },
  warm: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'warmer', superlative: 'warmest' },
    synonyms: ['mild 温和的', 'tepid 微温的', 'balmy 温和的', 'cozy 舒适的'],
    antonyms: ['cold 冷的', 'cool 凉的', 'freezing 冰冻的'],
    examPoints: []
  },
  cool: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'cooler', superlative: 'coolest' },
    synonyms: ['refreshing 清爽的', 'mild 温和的', 'breezy 微风的', 'calm 冷静的'],
    antonyms: ['hot 热的', 'warm 温暖的'],
    examPoints: []
  },
  clean: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'cleaner', superlative: 'cleanest' },
    synonyms: ['tidy 整洁的', 'neat 整洁的', 'spotless 一尘不染的', 'pure 纯净的', 'immaculate 洁净的'],
    antonyms: ['dirty 脏的', 'messy 凌乱的', 'untidy 不整洁的'],
    examPoints: []
  },
  dirty: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['messy 凌乱的', 'filthy 肮脏的', 'grimy 污秽的', 'stained 有污渍的'],
    antonyms: ['clean 干净的', 'tidy 整洁的', 'spotless 一尘不染的'],
    examPoints: []
  },
  safe: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'safer', superlative: 'safest' },
    synonyms: ['secure 安全的', 'protected 受保护的', 'guarded 有守卫的', 'sheltered 受庇护的'],
    antonyms: ['dangerous 危险的', 'risky 有风险的', 'unsafe 不安全的'],
    examPoints: []
  },
  dangerous: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'more dangerous', superlative: 'most dangerous' },
    synonyms: ['risky 危险的', 'hazardous 危险的', 'perilous 危险的', 'unsafe 不安全的', 'threatening 威胁的'],
    antonyms: ['safe 安全的', 'secure 安全的', 'harmless 无害的'],
    examPoints: []
  },
  simple: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'simpler', superlative: 'simplest' },
    synonyms: ['easy 简单的', 'plain 朴素的', 'straightforward 直截了当的', 'uncomplicated 不复杂的'],
    antonyms: ['complex 复杂的', 'complicated 复杂的', 'intricate 错综复杂的'],
    examPoints: []
  },
  complex: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['complicated 复杂的', 'intricate 错综复杂的', 'sophisticated 复杂的', 'elaborate 精细的'],
    antonyms: ['simple 简单的', 'straightforward 直截了当的', 'basic 基本的'],
    examPoints: []
  },
  clear: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'clearer', superlative: 'clearest' },
    synonyms: ['obvious 明显的', 'evident 明显的', 'apparent 显然的', 'transparent 透明的', 'lucid 清晰的'],
    antonyms: ['unclear 不清楚的', 'obscure 模糊的', 'ambiguous 模棱两可的'],
    examPoints: []
  },
  dark: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'darker', superlative: 'darkest' },
    synonyms: ['dim 昏暗的', 'gloomy 阴暗的', 'shadowy 有阴影的', 'obscure 昏暗的'],
    antonyms: ['bright 明亮的', 'light 明亮的', 'vivid 鲜艳的'],
    examPoints: []
  },
  bright: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'brighter', superlative: 'brightest' },
    synonyms: ['brilliant 明亮的', 'radiant 辐射的', 'luminous 发光的', 'vivid 鲜艳的', 'dazzling 耀眼的'],
    antonyms: ['dark 黑暗的', 'dim 昏暗的', 'gloomy 阴暗的'],
    examPoints: []
  },
  deep: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'deeper', superlative: 'deepest' },
    synonyms: ['profound 深刻的', 'bottomless 极深的', 'unfathomable 深不可测的'],
    antonyms: ['shallow 浅的', 'superficial 肤浅的'],
    examPoints: []
  },
  full: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['filled 满的', 'complete 完整的', 'whole 整个的', 'abundant 丰富的'],
    antonyms: ['empty 空的', 'vacant 空的', 'void 空的'],
    examPoints: []
  },
  empty: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['vacant 空的', 'void 空的', 'hollow 空心的', 'bare 光秃的'],
    antonyms: ['full 满的', 'filled 充满的', 'occupied 占用的'],
    examPoints: []
  },
  hard: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'harder', superlative: 'hardest' },
    synonyms: ['solid 坚固的', 'firm 坚硬的', 'rigid 坚硬的', 'tough 坚韧的', 'stiff 僵硬的'],
    antonyms: ['soft 柔软的', 'tender 嫩的', 'flexible 柔韧的'],
    examPoints: []
  },
  soft: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tender 嫩的', 'gentle 温和的', 'mild 温和的', 'delicate 精致的', 'flexible 柔韧的'],
    antonyms: ['hard 硬的', 'rigid 坚硬的', 'stiff 僵硬的'],
    examPoints: []
  },
  heavy: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'heavier', superlative: 'heaviest' },
    synonyms: ['weighty 沉重的', 'bulky 笨重的', 'massive 大量的', 'burdensome 繁重的'],
    antonyms: ['light 轻的', 'weightless 无重量的'],
    examPoints: []
  },
  light: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['brightness 亮度', 'glow 光辉', 'gleam 微光', 'shine 光泽', 'radiance 光辉'],
    antonyms: ['darkness 黑暗', 'shadow 阴影', 'gloom 幽暗'],
    examPoints: []
  },
  high: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'higher', superlative: 'highest' },
    synonyms: ['tall 高的', 'elevated 升高的', 'lofty 高耸的', 'towering 高耸的'],
    antonyms: ['low 低的', 'beneath 在下方'],
    examPoints: []
  },
  low: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'lower', superlative: 'lowest' },
    synonyms: ['short 矮的', 'beneath 低于', 'inferior 低等的'],
    antonyms: ['high 高的', 'tall 高的', 'elevated 升高的'],
    examPoints: []
  },
  loud: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['noisy 吵闹的', 'deafening 震耳欲聋的', 'thunderous 雷鸣般的'],
    antonyms: ['quiet 安静的', 'silent 寂静的', 'soft 轻柔的'],
    examPoints: []
  },
  quiet: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'quieter', superlative: 'quietest' },
    synonyms: ['silent 寂静的', 'peaceful 宁静的', 'calm 平静的', 'tranquil 安静的', 'still 静止的'],
    antonyms: ['loud 大声的', 'noisy 吵闹的', 'boisterous 喧闹的'],
    examPoints: []
  },
  narrow: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'narrower', superlative: 'narrowest' },
    synonyms: ['tight 紧的', 'constricted 狭窄的', 'slender 纤细的', 'limited 有限的'],
    antonyms: ['wide 宽的', 'broad 宽阔的', 'spacious 宽敞的'],
    examPoints: []
  },
  wide: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'wider', superlative: 'widest' },
    synonyms: ['broad 宽阔的', 'spacious 宽敞的', 'expansive 广阔的', 'extensive 广泛的'],
    antonyms: ['narrow 窄的', 'tight 紧的', 'restricted 受限的'],
    examPoints: []
  },
  sharp: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['keen 锋利的', 'pointed 尖的', 'acute 敏锐的', 'razor-sharp 极锋利的'],
    antonyms: ['dull 钝的', 'blunt 钝的', 'rounded 圆的'],
    examPoints: []
  },
  dull: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['blunt 钝的', 'boring 无聊的', 'uninteresting 乏味的', 'tedious 单调的', 'monotonous 单调的'],
    antonyms: ['sharp 锋利的', 'interesting 有趣的', 'exciting 令人兴奋的'],
    examPoints: []
  },
  smooth: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['even 平坦的', 'flat 平的', 'glossy 光滑的', 'polished 抛光的', 'sleek 平滑的'],
    antonyms: ['rough 粗糙的', 'bumpy 颠簸的', 'coarse 粗糙的'],
    examPoints: []
  },
  rough: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['coarse 粗糙的', 'bumpy 颠簸的', 'uneven 不平的', 'jagged 参差不齐的'],
    antonyms: ['smooth 光滑的', 'even 平坦的', 'polished 抛光的'],
    examPoints: []
  },
  thick: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['dense 密集的', 'heavy 厚的', 'solid 实心的', 'chunky 粗大的'],
    antonyms: ['thin 薄的', 'slender 纤细的', 'slim 苗条的'],
    examPoints: []
  },
  thin: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'thinner', superlative: 'thinnest' },
    synonyms: ['slim 苗条的', 'slender 纤细的', 'slight 纤弱的', 'lean 瘦的'],
    antonyms: ['thick 厚的', 'fat 胖的', 'plump 丰满的'],
    examPoints: []
  },
  fresh: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['new 新的', 'novel 新奇的', 'crisp 脆的', 'recent 最近的'],
    antonyms: ['stale 不新鲜的', 'old 旧的', 'withered 枯萎的'],
    examPoints: []
  },
  healthy: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'healthier', superlative: 'healthiest' },
    synonyms: ['fit 健康的', 'well 健康的', 'robust 强健的', 'sound 健全的', 'vigorous 精力充沛的'],
    antonyms: ['sick 生病的', 'ill 生病的', 'unhealthy 不健康的', 'weak 虚弱的'],
    examPoints: []
  },
  sick: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ill 生病的', 'unwell 不舒服的', 'ailing 生病的', 'poorly 不舒服的'],
    antonyms: ['healthy 健康的', 'well 健康的', 'fit 健康的'],
    examPoints: []
  },
  alive: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['living 活着的', 'breathing 呼吸的', 'animate 有生命的'],
    antonyms: ['dead 死的', 'lifeless 无生命的', 'deceased 已故的'],
    examPoints: []
  },
  dead: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['deceased 已故的', 'gone 离去的', 'lifeless 无生命的', 'extinct 灭绝的'],
    antonyms: ['alive 活着的', 'living 活着的', 'animate 有生命的'],
    examPoints: []
  },
  famous: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'more famous', superlative: 'most famous' },
    synonyms: ['renowned 著名的', 'well-known 众所周知的', 'celebrated 著名的', 'noted 著名的', 'distinguished 杰出的'],
    antonyms: ['unknown 不知名的', 'obscure 默默无闻的', 'anonymous 匿名的'],
    examPoints: []
  },
  common: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'more common', superlative: 'most common' },
    synonyms: ['ordinary 普通的', 'usual 通常的', 'regular 规则的', 'normal 正常的', 'widespread 普遍的'],
    antonyms: ['rare 稀有的', 'unusual 不寻常的', 'exceptional 例外的'],
    examPoints: []
  },
  rare: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['scarce 稀有的', 'uncommon 不寻常的', 'unusual 不寻常的', 'infrequent 少见的', 'precious 珍贵的'],
    antonyms: ['common 普通的', 'ordinary 平常的', 'frequent 频繁的'],
    examPoints: []
  },
  usual: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['normal 正常的', 'regular 规则的', 'customary 习惯的', 'routine 例行的', 'ordinary 普通的'],
    antonyms: ['unusual 不寻常的', 'rare 稀有的', 'exceptional 例外的'],
    examPoints: []
  },
  strange: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['odd 奇怪的', 'peculiar 古怪的', 'weird 怪异的', 'bizarre 奇异的', 'unfamiliar 不熟悉的'],
    antonyms: ['familiar 熟悉的', 'normal 正常的', 'ordinary 普通的'],
    examPoints: []
  },
  similar: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['alike 相似的', 'comparable 可比较的', 'analogous 类似的', 'resembling 相似的'],
    antonyms: ['different 不同的', 'dissimilar 不同的', 'unlike 不同的'],
    examPoints: []
  },
  different: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['distinct 不同的', 'unlike 不同的', 'dissimilar 不同的', 'various 各种的', 'diverse 多样的'],
    antonyms: ['same 相同的', 'similar 相似的', 'identical 完全相同的'],
    examPoints: []
  },
  same: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['identical 完全相同的', 'equal 相等的', 'equivalent 等价的', 'alike 相同的'],
    antonyms: ['different 不同的', 'dissimilar 不同的', 'unlike 不同的'],
    examPoints: []
  },
  equal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['equivalent 等价的', 'identical 相同的', 'even 均等的', 'balanced 平衡的'],
    antonyms: ['unequal 不等的', 'different 不同的', 'biased 有偏见的'],
    examPoints: []
  },
  fair: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['just 公正的', 'impartial 公正的', 'objective 客观的', 'unbiased 无偏见的', 'reasonable 合理的'],
    antonyms: ['unfair 不公平的', 'biased 有偏见的', 'partial 偏袒的'],
    examPoints: []
  },
  true: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['real 真实的', 'genuine 真正的', 'authentic 真实的', 'factual 事实的', 'accurate 准确的'],
    antonyms: ['false 假的', 'fake 假的', 'untrue 不真实的', 'fictional 虚构的'],
    examPoints: []
  },
  false: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fake 假的', 'untrue 不真实的', 'fictional 虚构的', 'deceptive 欺骗性的', 'artificial 人造的'],
    antonyms: ['true 真的', 'real 真实的', 'genuine 真正的'],
    examPoints: []
  },
  real: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['genuine 真正的', 'authentic 真实的', 'true 真实的', 'actual 实际的', 'concrete 具体的'],
    antonyms: ['fake 假的', 'artificial 人造的', 'imaginary 虚构的'],
    examPoints: []
  },
  certain: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sure 确信的', 'confident 确信的', 'positive 确定的', 'definite 明确的', 'convinced 确信的'],
    antonyms: ['uncertain 不确定的', 'doubtful 怀疑的', 'unsure 不确定的'],
    examPoints: []
  },
  obvious: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['evident 明显的', 'apparent 显然的', 'clear 清楚的', 'plain 明白的', 'noticeable 显而易见的'],
    antonyms: ['obscure 模糊的', 'hidden 隐藏的', 'unclear 不清楚的'],
    examPoints: []
  },
  public: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['open 公开的', 'general 普遍的', 'common 共同的', 'widespread 广泛的'],
    antonyms: ['private 私人的', 'personal 个人的', 'secret 秘密的'],
    examPoints: []
  },
  private: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['personal 个人的', 'confidential 机密的', 'secret 秘密的', 'intimate 私密的'],
    antonyms: ['public 公开的', 'general 普遍的', 'open 公开的'],
    examPoints: []
  },
  open: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['accessible 可进入的', 'available 可用的', 'unlocked 未锁的', 'exposed 暴露的'],
    antonyms: ['closed 关闭的', 'shut 关上的', 'sealed 封闭的'],
    examPoints: []
  },
  free: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['liberated 解放的', 'independent 独立的', 'unrestricted 不受限制的', 'available 可用的'],
    antonyms: ['restricted 受限制的', 'bound 束缚的', 'captive 被俘的'],
    examPoints: []
  },
  busy: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'busier', superlative: 'busiest' },
    synonyms: ['occupied 忙的', 'engaged 忙的', 'active 活跃的', 'involved 参与的'],
    antonyms: ['free 空闲的', 'idle 闲置的', 'available 有空的'],
    examPoints: []
  },
  lazy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['idle 懒散的', 'sluggish 懒散的', 'indolent 懒惰的', 'inactive 不活跃的'],
    antonyms: ['diligent 勤奋的', 'hardworking 勤劳的', 'industrious 勤勉的'],
    examPoints: []
  },
  active: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['energetic 精力充沛的', 'dynamic 有活力的', 'lively 活泼的', 'vigorous 精力充沛的', 'busy 忙碌的'],
    antonyms: ['inactive 不活跃的', 'passive 被动的', 'idle 闲置的'],
    examPoints: []
  },
  brave: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['courageous 勇敢的', 'bold 大胆的', 'fearless 无畏的', 'daring 大胆的', 'heroic 英雄的'],
    antonyms: ['cowardly 怯懦的', 'timid 胆小的', 'fearful 害怕的'],
    examPoints: []
  },
  honest: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['truthful 诚实的', 'sincere 真诚的', 'genuine 真正的', 'frank 坦白的', 'candid 坦率的'],
    antonyms: ['dishonest 不诚实的', 'deceitful 欺骗的', 'lying 说谎的'],
    examPoints: []
  },
  kind: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gentle 温和的', 'friendly 友好的', 'generous 慷慨的', 'benevolent 仁慈的', 'compassionate 有同情心的'],
    antonyms: ['cruel 残忍的', 'unkind 不友善的', 'harsh 严厉的', 'mean 刻薄的'],
    examPoints: []
  },
  cruel: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['harsh 严厉的', 'brutal 残忍的', 'savage 野蛮的', 'vicious 恶毒的', 'merciless 无情的'],
    antonyms: ['kind 善良的', 'gentle 温和的', 'merciful 仁慈的'],
    examPoints: []
  },
  polite: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['courteous 有礼貌的', 'respectful 恭敬的', 'mannerly 有教养的', 'civil 文明的'],
    antonyms: ['rude 粗鲁的', 'impolite 不礼貌的', 'discourteous 失礼的'],
    examPoints: []
  },
  rude: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['impolite 不礼貌的', 'discourteous 失礼的', 'offensive 冒犯的', 'insulting 侮辱性的'],
    antonyms: ['polite 有礼貌的', 'courteous 有礼貌的', 'respectful 恭敬的'],
    examPoints: []
  },
  generous: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['charitable 慈善的', 'benevolent 仁慈的', 'magnanimous 宽宏大量的', 'liberal 慷慨的'],
    antonyms: ['selfish 自私的', 'stingy 吝啬的', 'greedy 贪婪的'],
    examPoints: []
  },
  selfish: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['greedy 贪婪的', 'egoistic 利己的', 'self-centered 以自我为中心的'],
    antonyms: ['generous 慷慨的', 'selfless 无私的', 'altruistic 利他的'],
    examPoints: []
  },
  patient: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tolerant 容忍的', 'forbearing 忍耐的', 'enduring 忍耐的', 'composed 镇静的'],
    antonyms: ['impatient 不耐烦的', 'restless 焦躁的', 'intolerant 不容忍的'],
    examPoints: []
  },
  calm: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['peaceful 宁静的', 'tranquil 安静的', 'serene 宁静的', 'composed 镇静的', 'placid 平静的'],
    antonyms: ['nervous 紧张的', 'anxious 焦虑的', 'agitated 焦躁的'],
    examPoints: []
  },
  nervous: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['anxious 焦虑的', 'tense 紧张的', 'uneasy 不安的', 'jittery 紧张的', 'agitated 焦躁的'],
    antonyms: ['calm 平静的', 'relaxed 放松的', 'composed 镇静的'],
    examPoints: []
  },
  proud: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['arrogant 傲慢的', 'haughty 傲慢的', 'conceited 自负的', 'vain 虚荣的'],
    antonyms: ['humble 谦虚的', 'modest 谦逊的', 'meek 温顺的'],
    examPoints: []
  },
  humble: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['modest 谦逊的', 'meek 温顺的', 'unassuming 谦逊的', 'submissive 顺从的'],
    antonyms: ['proud 骄傲的', 'arrogant 傲慢的', 'conceited 自负的'],
    examPoints: []
  },
  modest: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['humble 谦虚的', 'unassuming 谦逊的', 'reserved 矜持的', 'unpretentious 不炫耀的'],
    antonyms: ['boastful 爱吹嘘的', 'arrogant 傲慢的', 'vain 虚荣的'],
    examPoints: []
  },
  confident: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sure 确信的', 'certain 确定的', 'assured 确信的', 'self-assured 自信的', 'positive 确定的'],
    antonyms: ['unsure 不确定的', 'doubtful 怀疑的', 'insecure 不安全的'],
    examPoints: []
  },
  shy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['timid 胆小的', 'bashful 害羞的', 'reserved 矜持的', 'introverted 内向的'],
    antonyms: ['bold 大胆的', 'outgoing 外向的', 'confident 自信的'],
    examPoints: []
  },
  clever: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['smart 聪明的', 'intelligent 聪明的', 'bright 聪明的', 'sharp 敏锐的', 'brilliant 才华横溢的'],
    antonyms: ['stupid 愚蠢的', 'foolish 愚蠢的', 'dull 迟钝的'],
    examPoints: []
  },
  stupid: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['foolish 愚蠢的', 'dumb 傻的', 'ignorant 无知的', 'dense 迟钝的', 'brainless 无脑的'],
    antonyms: ['clever 聪明的', 'smart 聪明的', 'intelligent 智能的'],
    examPoints: []
  },
  wise: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sage 睿智的', 'sensible 明智的', 'prudent 谨慎的', 'insightful 有洞察力的', 'judicious 明智的'],
    antonyms: ['foolish 愚蠢的', 'unwise 不明智的', 'imprudent 轻率的'],
    examPoints: []
  },
  foolish: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['silly 傻的', 'stupid 愚蠢的', 'unwise 不明智的', 'absurd 荒谬的', 'ridiculous 可笑的'],
    antonyms: ['wise 明智的', 'sensible 明智的', 'prudent 谨慎的'],
    examPoints: []
  },
  smart: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['clever 聪明的', 'intelligent 聪明的', 'bright 聪颖的', 'sharp 敏锐的', 'quick-witted 机智的'],
    antonyms: ['stupid 愚蠢的', 'dull 迟钝的', 'slow 迟钝的'],
    examPoints: []
  },
  diligent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hardworking 勤劳的', 'industrious 勤勉的', 'assiduous 刻苦的', 'persistent 坚持的'],
    antonyms: ['lazy 懒惰的', 'idle 懒散的', 'slack 懈怠的'],
    examPoints: []
  },
  careful: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'more careful', superlative: 'most careful' },
    synonyms: ['cautious 谨慎的', 'attentive 注意的', 'watchful 警惕的', 'meticulous 一丝不苟的', 'thorough 细致的'],
    antonyms: ['careless 粗心的', 'reckless 鲁莽的', 'negligent 疏忽的'],
    examPoints: []
  },
  careless: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['reckless 鲁莽的', 'negligent 疏忽的', 'thoughtless 欠考虑的', 'inattentive 不注意的'],
    antonyms: ['careful 仔细的', 'cautious 谨慎的', 'attentive 注意的'],
    examPoints: []
  },
  serious: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['solemn 庄严的', 'grave 严肃的', 'earnest 认真的', 'sober 严肃的', 'somber 严肃的'],
    antonyms: ['funny 搞笑的', 'frivolous 轻浮的', 'playful 顽皮的'],
    examPoints: []
  },
  funny: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'funnier', superlative: 'funniest' },
    synonyms: ['amusing 有趣的', 'humorous 幽默的', 'comical 滑稽的', 'hilarious 极好笑的', 'entertaining 有趣的'],
    antonyms: ['serious 严肃的', 'somber 严肃的', 'dull 乏味的'],
    examPoints: []
  },
  interesting: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fascinating 迷人的', 'engaging 吸引人的', 'intriguing 有趣的', 'compelling 引人入胜的', 'captivating 迷人的'],
    antonyms: ['boring 无聊的', 'dull 乏味的', 'uninteresting 乏味的'],
    examPoints: []
  },
  boring: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['dull 乏味的', 'tedious 单调的', 'monotonous 单调的', 'tiresome 令人厌倦的', 'uninteresting 乏味的'],
    antonyms: ['interesting 有趣的', 'exciting 令人兴奋的', 'fascinating 迷人的'],
    examPoints: []
  },
  exciting: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['thrilling 惊险的', 'stimulating 刺激的', 'exhilarating 令人振奋的', 'electrifying 令人激动的'],
    antonyms: ['boring 无聊的', 'dull 乏味的', 'calm 平静的'],
    examPoints: []
  },
  surprising: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unexpected 出乎意料的', 'astonishing 令人惊讶的', 'shocking 令人震惊的', 'startling 令人吃惊的'],
    antonyms: ['expected 预期的', 'predictable 可预测的', 'ordinary 平常的'],
    examPoints: []
  },
  disappointing: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unsatisfying 不令人满意的', 'letdown 令人失望的', 'frustrating 令人沮丧的'],
    antonyms: ['satisfying 令人满意的', 'fulfilling 令人满足的', 'rewarding 有回报的'],
    examPoints: []
  },
  frightening: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['terrifying 可怕的', 'scary 吓人的', 'alarming 令人恐慌的', 'horrifying 令人恐惧的', 'intimidating 令人畏惧的'],
    antonyms: ['calming 令人平静的', 'comforting 令人安慰的', 'reassuring 令人安心的'],
    examPoints: []
  },
  encouraging: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['inspiring 鼓舞人心的', 'motivating 激励的', 'uplifting 令人振奋的', 'supportive 支持的'],
    antonyms: ['discouraging 令人沮丧的', 'demoralizing 令人泄气的', 'disheartening 令人灰心的'],
    examPoints: []
  },
  confusing: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['puzzling 令人困惑的', 'bewildering 令人迷惑的', 'baffling 令人困惑的', 'perplexing 令人费解的'],
    antonyms: ['clear 清楚的', 'understandable 可理解的', 'straightforward 明确的'],
    examPoints: []
  },
  embarrassing: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['awkward 尴尬的', 'humiliating 丢脸的', 'uncomfortable 不自在的', 'shameful 羞耻的'],
    antonyms: ['comfortable 舒适的', 'pleasant 愉快的', 'flattering 奉承的'],
    examPoints: []
  },
  annoying: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['irritating 恼人的', 'bothersome 麻烦的', 'troublesome 令人烦恼的', ' vexing 令人恼火的'],
    antonyms: ['pleasant 令人愉快的', 'soothing 令人舒缓的', 'delightful 令人愉快的'],
    examPoints: []
  },
  tiring: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['exhausting 令人筋疲力尽的', 'fatiguing 令人疲劳的', 'wearying 令人疲倦的', 'draining 消耗的'],
    antonyms: ['refreshing 令人清爽的', 'energizing 令人精力充沛的', 'relaxing 令人放松的'],
    examPoints: []
  },
  relaxing: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['soothing 舒缓的', 'calming 令人平静的', 'restful 宁静的', 'tranquil 安宁的', 'comforting 令人安慰的'],
    antonyms: ['stressful 有压力的', 'tiring 疲劳的', 'tense 紧张的'],
    examPoints: []
  },
  satisfying: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fulfilling 令人满足的', 'gratifying 令人满足的', 'rewarding 有回报的', 'pleasing 令人愉快的'],
    antonyms: ['disappointing 令人失望的', 'unsatisfying 不满意的', 'frustrating 令人沮丧的'],
    examPoints: []
  },
  attractive: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['appealing 有吸引力的', 'charming 迷人的', 'captivating 迷人的', 'alluring 诱人的', 'gorgeous 极美的'],
    antonyms: ['unattractive 无吸引力的', 'plain 朴素的', 'repulsive 令人反感的'],
    examPoints: []
  },
  ugly: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hideous 丑陋的', 'unattractive 无吸引力的', 'unsightly 难看的', 'repulsive 令人反感的', 'disgusting 令人恶心的'],
    antonyms: ['beautiful 美丽的', 'attractive 迷人的', 'pretty 漂亮的'],
    examPoints: []
  },
  elegant: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['graceful 优雅的', 'refined 精致的', 'sophisticated 高雅的', 'tasteful 有品味的', 'stylish 时髦的'],
    antonyms: ['clumsy 笨拙的', 'awkward 尴尬的', 'inelegant 不雅的'],
    examPoints: []
  },
  awkward: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['clumsy 笨拙的', 'ungainly 笨重的', 'graceless 不优雅的', 'inept 无能的', 'bumbling 笨手笨脚的'],
    antonyms: ['graceful 优雅的', 'elegant 优雅的', 'adept 熟练的'],
    examPoints: []
  },
  clumsy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['awkward 笨拙的', 'ungainly 笨拙的', 'maladroit 不灵巧的', 'inept 笨拙的'],
    antonyms: ['graceful 优雅的', 'agile 敏捷的', 'nimble 灵活的'],
    examPoints: []
  },
  see: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['look 看', 'observe 观察', 'view 观看', 'witness 目击', 'notice 注意到'],
    antonyms: ['ignore 忽视', 'miss 错过'],
    examPoints: []
  },
  watch: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['observe 观察', 'view 观看', 'monitor 监控', 'surveil 监视', 'follow 关注'],
    antonyms: ['ignore 忽视', 'neglect 忽略'],
    examPoints: []
  },
  listen: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hear 听', 'attend 注意', 'heed 留意', 'eavesdrop 偷听'],
    antonyms: ['ignore 忽视', 'disregard 不理会'],
    examPoints: []
  },
  say: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['speak 说', 'tell 告诉', 'state 陈述', 'express 表达', 'remark 评论', 'utter 说出'],
    antonyms: [],
    examPoints: []
  },
  tell: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['say 说', 'inform 通知', 'notify 告知', 'reveal 透露', 'disclose 揭露', 'confess 坦白'],
    antonyms: ['conceal 隐藏', 'hide 隐藏'],
    examPoints: []
  },
  speak: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['talk 谈话', 'say 说', 'converse 交谈', 'communicate 交流', 'articulate 清晰表达'],
    antonyms: ['listen 听', 'hear 听'],
    examPoints: []
  },
  talk: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['speak 说', 'chat 聊天', 'converse 交谈', 'discuss 讨论', 'communicate 交流', 'gossip 闲聊'],
    antonyms: ['listen 听', 'silence 沉默'],
    examPoints: []
  },
  walk: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['stroll 散步', 'wander 漫步', 'step 走', 'pace 踱步', 'hike 徒步'],
    antonyms: ['run 跑', 'sprint 冲刺'],
    examPoints: []
  },
  eat: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['consume 消耗', 'devour 吞食', 'dine 进餐', 'feast 宴饮', 'munch 用力嚼'],
    antonyms: ['starve 挨饿', 'fast 禁食'],
    examPoints: []
  },
  drink: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sip 啜饮', 'gulp 大口喝', 'swallow 吞咽', 'consume 饮用'],
    antonyms: [],
    examPoints: []
  },
  write: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['record 记录', 'note 记下', 'document 记录', 'inscribe 题写', 'draft 起草'],
    antonyms: ['erase 擦除', 'delete 删除'],
    examPoints: []
  },
  read: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['peruse 细读', 'scan 浏览', 'skim 略读', 'study 研究', 'review 复习'],
    antonyms: [],
    examPoints: []
  },
  buy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['purchase 购买', 'acquire 获得', 'obtain 获得', 'procure 采购'],
    antonyms: ['sell 卖', 'vend 出售'],
    examPoints: []
  },
  sell: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['vend 出售', 'trade 交易', 'market 销售', 'retail 零售', 'auction 拍卖'],
    antonyms: ['buy 买', 'purchase 购买'],
    examPoints: []
  },
  cost: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['price 定价', 'charge 收费', 'expense 花费', 'amount 金额'],
    antonyms: ['earn 赚取', 'save 节省'],
    examPoints: []
  },
  spend: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['expend 花费', 'use 使用', 'consume 消耗', 'waste 浪费', 'squander 挥霍'],
    antonyms: ['save 节省', 'earn 赚取', 'hoard 囤积'],
    examPoints: []
  },
  save: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['preserve 保存', 'conserve 保护', 'protect 保护', 'rescue 拯救', 'hoard 储蓄'],
    antonyms: ['waste 浪费', 'spend 花费', 'squander 挥霍'],
    examPoints: []
  },
  waste: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['squander 挥霍', 'dissipate 浪费', 'fritter 浪费', 'misuse 滥用'],
    antonyms: ['save 节省', 'conserve 节约', 'preserve 保存'],
    examPoints: []
  },
  earn: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gain 获得', 'acquire 获得', 'obtain 获得', 'make 赚取', 'win 赢得'],
    antonyms: ['spend 花费', 'waste 浪费', 'lose 失去'],
    examPoints: []
  },
  receive: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['get 获得', 'accept 接受', 'obtain 获得', 'acquire 获得', 'collect 收集'],
    antonyms: ['give 给', 'send 发送', 'offer 提供'],
    examPoints: []
  },
  borrow: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['lend 借出', 'loan 借贷', 'rent 租借', 'lease 租赁'],
    antonyms: ['return 归还', 'repay 偿还'],
    examPoints: []
  },
  lend: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['loan 借贷', 'lease 出租', 'rent 出租', 'advance 预付'],
    antonyms: ['borrow 借入', 'return 归还'],
    examPoints: []
  },
  own: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['possess 拥有', 'have 有', 'hold 持有', 'retain 保留', 'occupy 占有'],
    antonyms: ['lose 失去', 'release 放弃', 'surrender 交出'],
    examPoints: []
  },
  build: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['construct 建造', 'erect 竖立', 'assemble 组装', 'fabricate 制造', 'raise 建起'],
    antonyms: ['destroy 摧毁', 'demolish 拆除', 'ruin 毁坏'],
    examPoints: []
  },
  destroy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ruin 毁坏', 'demolish 拆除', 'wreck 破坏', 'smash 粉碎', 'annihilate 歼灭', 'devastate 毁灭'],
    antonyms: ['build 建造', 'construct 建造', 'create 创造'],
    examPoints: []
  },
  fix: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['repair 修理', 'mend 修补', 'restore 恢复', 'correct 纠正', 'adjust 调整'],
    antonyms: ['break 打破', 'damage 损坏', 'destroy 摧毁'],
    examPoints: []
  },
  repair: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fix 修理', 'mend 修补', 'restore 恢复', 'rebuild 重建', 'refurbish 翻新'],
    antonyms: ['break 打破', 'damage 损坏', 'destroy 摧毁'],
    examPoints: []
  },
  end: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['finish 终结', 'conclusion 结论', 'termination 终止', 'close 结束', 'completion 完成'],
    antonyms: ['beginning 开始', 'start 开端', 'origin 起源'],
    examPoints: []
  },
  complete: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['finish 完成', 'accomplish 完成', 'fulfill 实现', 'conclude 完成', 'perfect 使完美'],
    antonyms: ['begin 开始', 'start 开始', 'incomplete 不完整的'],
    examPoints: []
  },
  increase: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['grow 增长', 'expand 扩大', 'raise 提高', 'boost 提升', 'enhance 增强', 'multiply 增加'],
    antonyms: ['decrease 减少', 'reduce 减少', 'diminish 缩减', 'shrink 收缩'],
    examPoints: []
  },
  decrease: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['reduce 减少', 'diminish 缩减', 'decline 下降', 'drop 下降', 'shrink 收缩', 'lessen 减少'],
    antonyms: ['increase 增加', 'grow 增长', 'expand 扩大'],
    examPoints: []
  },
  grow: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['increase 增加', 'expand 扩大', 'develop 发展', 'mature 成熟', 'flourish 繁荣'],
    antonyms: ['shrink 收缩', 'decrease 减少', 'decline 下降'],
    examPoints: []
  },
  assist: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['help 帮助', 'aid 援助', 'support 支持', 'back 支持', 'facilitate 协助'],
    antonyms: ['hinder 阻碍', 'obstruct 妨碍'],
    examPoints: []
  },
  support: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['back 支持', 'uphold 维护', 'defend 捍卫', 'promote 促进', 'endorse 背书', 'sustain 维持'],
    antonyms: ['oppose 反对', 'resist 抵制', 'undermine 破坏'],
    examPoints: []
  },
  teach: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['instruct 指导', 'educate 教育', 'train 训练', 'coach 辅导', 'tutor 辅导', 'guide 引导'],
    antonyms: ['learn 学习', 'study 学习'],
    examPoints: []
  },
  learn: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['study 学习', 'acquire 获得', 'master 掌握', 'absorb 吸收', 'memorize 记忆'],
    antonyms: ['teach 教', 'forget 忘记'],
    examPoints: []
  },
  study: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['learn 学习', 'examine 研究', 'investigate 调查', 'research 研究', 'analyze 分析'],
    antonyms: ['ignore 忽视', 'neglect 忽略'],
    examPoints: []
  },
  understand: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['comprehend 理解', 'grasp 领会', 'perceive 察觉', 'realize 意识到', 'recognize 认出'],
    antonyms: ['misunderstand 误解', 'confuse 困惑'],
    examPoints: []
  },
  know: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['understand 理解', 'comprehend 理解', 'realize 意识到', 'recognize 认出', 'perceive 察觉'],
    antonyms: ['forget 忘记', 'ignore 忽视'],
    examPoints: []
  },
  believe: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['trust 信任', 'suppose 假设', 'assume 假定', 'consider 认为', 'accept 接受'],
    antonyms: ['doubt 怀疑', 'disbelieve 不信', 'question 质疑'],
    examPoints: []
  },
  choose: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['select 选择', 'pick 挑选', 'elect 选举', 'opt 选择', 'prefer 更喜欢'],
    antonyms: ['reject 拒绝', 'decline 婉拒'],
    examPoints: []
  },
  select: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['choose 选择', 'pick 挑选', 'elect 选举', 'opt 选择'],
    antonyms: ['reject 拒绝', 'discard 丢弃'],
    examPoints: []
  },
  want: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['desire 渴望', 'wish 希望', 'need 需要', 'crave 渴望', 'long 渴望', 'require 需要'],
    antonyms: ['reject 拒绝', 'decline 婉拒', 'refuse 拒绝'],
    examPoints: []
  },
  hope: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['expectation 期望', 'anticipation 期待', 'optimism 乐观', 'aspiration 渴望'],
    antonyms: ['despair 绝望', 'hopelessness 无望'],
    examPoints: []
  },
  love: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['affection 喜爱', 'devotion 奉献', 'fondness 钟爱', 'attachment 依恋', 'passion 热情'],
    antonyms: ['hate 憎恨', 'hatred 仇恨', 'animosity 敌意'],
    examPoints: []
  },
  hate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hatred 仇恨', 'dislike 厌恶', 'animosity 敌意', 'enmity 敌意', 'hostility 敌意'],
    antonyms: ['love 爱', 'affection 喜爱', 'fondness 钟爱'],
    examPoints: []
  },
  dislike: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hate 讨厌', 'detest 厌恶', 'scorn 鄙视', 'abhor 憎恶', 'resent 怨恨'],
    antonyms: ['like 喜欢', 'love 爱', 'enjoy 享受'],
    examPoints: []
  },
  attempt: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['try 尝试', 'endeavor 努力', 'seek 寻求', 'undertake 承担'],
    antonyms: ['abandon 放弃', 'quit 放弃'],
    examPoints: []
  },
  work: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['job 工作', 'labor 劳动', 'task 任务', 'employment 工作', 'duty 职责', 'effort 努力'],
    antonyms: ['rest 休息', 'leisure 休闲'],
    examPoints: []
  },
  change: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['alteration 改变', 'modification 修改', 'variation 变化', 'transformation 转变', 'shift 转变'],
    antonyms: ['stability 稳定', 'consistency 一致'],
    examPoints: []
  },
  use: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['utilize 利用', 'employ 使用', 'apply 应用', 'exploit 利用', 'exercise 运用'],
    antonyms: ['waste 浪费', 'discard 丢弃'],
    examPoints: []
  },
  show: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['display 展示', 'exhibit 展览', 'reveal 揭示', 'demonstrate 演示', 'present 呈现', 'uncover 揭露'],
    antonyms: ['hide 隐藏', 'conceal 隐瞒', 'cover 掩盖'],
    examPoints: []
  },
  hide: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['conceal 隐藏', 'cover 掩盖', 'mask 遮掩', 'disguise 伪装', 'obscure 遮蔽'],
    antonyms: ['show 展示', 'reveal 揭示', 'display 展示', 'expose 暴露'],
    examPoints: []
  },
  ask: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['inquire 询问', 'question 质问', 'request 请求', 'demand 要求', 'beg 乞求', 'plead 恳求'],
    antonyms: ['answer 回答', 'reply 回复', 'respond 回应'],
    examPoints: []
  },
  answer: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['reply 回复', 'response 回应', 'solution 解决方案', 'reaction 反应'],
    antonyms: ['question 问题', 'inquiry 询问'],
    examPoints: []
  },
  reject: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['refuse 拒绝', 'decline 婉拒', 'deny 否认', 'dismiss 驳回', 'veto 否决'],
    antonyms: ['accept 接受', 'approve 批准', 'agree 同意'],
    examPoints: []
  },
  force: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['compel 强迫', 'oblige 迫使', 'coerce 胁迫', 'require 要求', 'press 催促'],
    antonyms: ['allow 允许', 'persuade 说服', 'encourage 鼓励'],
    examPoints: []
  },
  discourage: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['deter 阻止', 'dishearten 使灰心', 'deject 使沮丧', 'demoralize 使泄气'],
    antonyms: ['encourage 鼓励', 'inspire 鼓舞', 'motivate 激励'],
    examPoints: []
  },
  surprise: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['astonishment 惊讶', 'amazement 惊奇', 'wonder 惊异', 'shock 震惊'],
    antonyms: ['expectation 预期', 'anticipation 期待'],
    examPoints: []
  },
  frighten: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['scare 恐吓', 'terrify 使恐惧', 'alarm 使恐慌', 'panic 使惊慌', 'intimidate 恐吓'],
    antonyms: ['calm 使平静', 'comfort 安慰', 'reassure 使安心'],
    examPoints: []
  },
  scare: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['frighten 恐吓', 'terrify 使恐惧', 'alarm 使恐慌', 'startle 使惊吓', 'panic 使惊慌'],
    antonyms: ['comfort 安慰', 'calm 使平静', 'soothe 安抚'],
    examPoints: []
  },
  persuade: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['convince 说服', 'induce 诱导', 'urge 催促', 'influence 影响', 'coax 劝诱'],
    antonyms: ['dissuade 劝阻', 'discourage 劝阻'],
    examPoints: []
  },
  worry: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['concern 关心', 'bother 打扰', 'trouble 烦恼', 'disturb 打扰', 'upset 使不安'],
    antonyms: ['comfort 安慰', 'reassure 使安心', 'calm 使平静'],
    examPoints: []
  },
  bother: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['annoy 烦扰', 'trouble 麻烦', 'disturb 打扰', 'irritate 激怒', 'vex 使恼火'],
    antonyms: ['comfort 安慰', 'soothe 安抚', 'ignore 忽视'],
    examPoints: []
  },
  protect: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['defend 保卫', 'guard 守卫', 'shield 保护', 'shelter 庇护', 'safeguard 保护'],
    antonyms: ['attack 攻击', 'expose 暴露', 'endanger 危及'],
    examPoints: []
  },
  attack: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['assault 袭击', 'invade 入侵', 'strike 打击', 'raid 突袭', 'assail 攻击'],
    antonyms: ['defend 防守', 'protect 保护', 'retreat 撤退'],
    examPoints: []
  },
  fight: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['battle 战斗', 'struggle 挣扎', 'combat 战斗', 'contend 争夺', 'wage 作战'],
    antonyms: ['surrender 投降', 'yield 屈服', 'retreat 撤退'],
    examPoints: []
  },
  win: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['succeed 成功', 'triumph 获胜', 'prevail 获胜', 'conquer 征服', 'overcome 克服'],
    antonyms: ['lose 输', 'fail 失败', 'surrender 投降'],
    examPoints: []
  },
  lose: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fail 失败', 'forfeit 丧失', 'misplace 放错', 'surrender 放弃'],
    antonyms: ['win 赢', 'find 找到', 'gain 获得'],
    examPoints: []
  },
  beat: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['defeat 击败', 'overcome 战胜', 'conquer 征服', 'crush 压碎', 'vanquish 征服'],
    antonyms: ['lose 输', 'surrender 投降', 'yield 屈服'],
    examPoints: []
  },
  defeat: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['beat 击败', 'conquer 征服', 'overcome 战胜', 'vanquish 征服', 'rout 击溃'],
    antonyms: ['surrender 投降', 'yield 屈服', 'submit 屈服'],
    examPoints: []
  },
  live: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['exist 存在', 'survive 幸存', 'dwell 居住', 'reside 居住', 'inhabit 栖息'],
    antonyms: ['die 死亡', 'perish 毁灭'],
    examPoints: []
  },
  kill: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['murder 谋杀', 'slay 杀害', 'execute 处决', 'slaughter 屠杀', 'assassinate 暗杀'],
    antonyms: ['save 救', 'spare 饶恕', 'protect 保护'],
    examPoints: []
  },
  travel: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['journey 旅行', 'voyage 航行', 'tour 旅游', 'explore 探索', 'roam 漫游', 'trek 徒步'],
    antonyms: ['stay 停留', 'remain 留下'],
    examPoints: []
  },
  arrive: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['reach 到达', 'come 来', 'land 着陆', 'get to 到达'],
    antonyms: ['depart 离开', 'leave 离开', 'go 去'],
    examPoints: []
  },
  leave: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['depart 离开', 'go 去', 'exit 退出', 'abandon 离弃', 'quit 离开', 'withdraw 撤退'],
    antonyms: ['arrive 到达', 'come 来', 'stay 停留', 'remain 留下'],
    examPoints: []
  },
  move: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['shift 移动', 'transfer 转移', 'relocate 搬迁', 'budge 移动', 'displace 移置'],
    antonyms: ['stay 停留', 'remain 保持', 'stop 停止'],
    examPoints: []
  },
  appear: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['emerge 出现', 'show up 出现', 'materialize 显现', 'arise 出现'],
    antonyms: ['disappear 消失', 'vanish 消失', 'fade 褪去'],
    examPoints: []
  },
  disappear: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['vanish 消失', 'fade 消失', 'evaporate 消散', 'dissolve 溶解', 'depart 离开'],
    antonyms: ['appear 出现', 'emerge 出现', 'materialize 显现'],
    examPoints: []
  },
  problem: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['issue 问题', 'trouble 麻烦', 'difficulty 困难', 'challenge 挑战', 'obstacle 障碍'],
    antonyms: ['solution 解决方案'],
    examPoints: []
  },
  question: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['inquiry 询问', 'query 疑问', 'issue 问题', 'matter 事情', 'doubt 疑问'],
    antonyms: ['answer 答案', 'reply 回答', 'response 回应'],
    examPoints: []
  },
  reason: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['cause 原因', 'motive 动机', 'basis 基础', 'rationale 理由', 'justification 理由'],
    antonyms: ['result 结果', 'effect 效果'],
    examPoints: []
  },
  goal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['aim 目标', 'purpose 目的', 'target 目标', 'objective 目标', 'ambition 雄心', 'intent 意图'],
    antonyms: [],
    examPoints: []
  },
  aim: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['goal 目标', 'purpose 目的', 'target 目标', 'objective 目标', 'intention 意图'],
    antonyms: [],
    examPoints: []
  },
  purpose: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['aim 目的', 'goal 目标', 'intention 意图', 'motive 动机', 'objective 目标'],
    antonyms: [],
    examPoints: []
  },
  method: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['way 方法', 'means 手段', 'approach 方法', 'technique 技巧', 'procedure 程序', 'process 过程'],
    antonyms: [],
    examPoints: []
  },
  idea: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['thought 想法', 'concept 概念', 'notion 观念', 'view 观点', 'opinion 意见', 'plan 计划'],
    antonyms: [],
    examPoints: []
  },
  opinion: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['view 观点', 'belief 信念', 'judgment 判断', 'thought 想法', 'perspective 看法'],
    antonyms: ['fact 事实', 'truth 真相'],
    examPoints: []
  },
  plan: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['scheme 计划', 'strategy 策略', 'design 设计', 'blueprint 蓝图', 'proposal 提议'],
    antonyms: [],
    examPoints: []
  },
  difference: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['distinction 区别', 'contrast 对比', 'variation 差异', 'divergence 分歧', 'discrepancy 差异'],
    antonyms: ['similarity 相似', 'resemblance 相似'],
    examPoints: []
  },
  success: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['achievement 成就', 'accomplishment 成就', 'triumph 胜利', 'victory 胜利', 'prosperity 繁荣'],
    antonyms: ['failure 失败', 'defeat 失败', 'loss 损失'],
    examPoints: []
  },
  failure: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['defeat 失败', 'loss 损失', 'setback 挫折', 'collapse 崩溃', 'breakdown 故障'],
    antonyms: ['success 成功', 'achievement 成就', 'triumph 胜利'],
    examPoints: []
  },
  danger: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['risk 风险', 'threat 威胁', 'hazard 危险', 'peril 危险', 'jeopardy 危险'],
    antonyms: ['safety 安全', 'security 安全', 'protection 保护'],
    examPoints: []
  },
  safety: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['security 安全', 'protection 保护', 'shelter 庇护', 'refuge 避难'],
    antonyms: ['danger 危险', 'risk 风险', 'threat 威胁'],
    examPoints: []
  },
  knowledge: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['wisdom 智慧', 'understanding 理解', 'learning 学问', 'insight 洞察力', 'information 知识'],
    antonyms: ['ignorance 无知', 'foolishness 愚蠢'],
    examPoints: []
  },
  wisdom: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['insight 洞察力', 'intelligence 智力', 'knowledge 知识', 'sagacity 睿智', 'prudence 谨慎'],
    antonyms: ['foolishness 愚蠢', 'ignorance 无知'],
    examPoints: []
  },
  information: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['data 数据', 'facts 事实', 'details 细节', 'intelligence 情报', 'news 新闻'],
    antonyms: [],
    examPoints: []
  },
  story: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tale 故事', 'narrative 叙事', 'account 描述', 'report 报告', 'anecdote 轶事'],
    antonyms: [],
    examPoints: []
  },
  speech: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['talk 谈话', 'lecture 演讲', 'address 演说', 'presentation 演示', 'discourse 论述'],
    antonyms: ['silence 沉默'],
    examPoints: []
  },
  discussion: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['conversation 对话', 'dialogue 对话', 'debate 辩论', 'talk 谈话', 'exchange 交流'],
    antonyms: [],
    examPoints: []
  },
  argument: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['debate 辩论', 'dispute 争论', 'quarrel 争吵', 'disagreement 分歧', 'contention 争论'],
    antonyms: ['agreement 同意', 'harmony 和谐'],
    examPoints: []
  },
  mistake: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['error 错误', 'fault 过错', 'blunder 大错', 'slip 疏忽', 'oversight 失察'],
    antonyms: ['accuracy 准确', 'correctness 正确'],
    examPoints: []
  },
  error: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['mistake 错误', 'fault 过错', 'blunder 大错', 'slip 失误', 'lapse 差错'],
    antonyms: ['accuracy 准确', 'correctness 正确'],
    examPoints: []
  },
  truth: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fact 事实', 'reality 现实', 'certainty 确实'],
    antonyms: ['lie 谎言', 'falsehood 虚假'],
    examPoints: []
  },
  secret: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['mystery 秘密', 'puzzle 谜', 'enigma 谜团', 'riddle 谜语', 'mystery 谜'],
    antonyms: ['public 公开', 'common knowledge 常识'],
    examPoints: []
  },
  rule: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['law 法律', 'regulation 规则', 'principle 原则', 'guideline 指导方针', 'norm 规范'],
    antonyms: [],
    examPoints: []
  },
  habit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['custom 习惯', 'practice 惯例', 'routine 常规', 'tendency 倾向'],
    antonyms: [],
    examPoints: []
  },
  way: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['path 路径', 'road 道路', 'route 路线', 'method 方法', 'manner 方式'],
    antonyms: [],
    examPoints: []
  },
  road: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['way 道路', 'path 路径', 'route 路线', 'street 街道', 'highway 公路', 'track 轨道'],
    antonyms: [],
    examPoints: []
  },
  door: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gate 大门', 'entrance 入口', 'entry 入口', 'portal 门', 'threshold 门槛'],
    antonyms: ['exit 出口'],
    examPoints: []
  },
  room: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['space 空间', 'area 区域', 'chamber 房间', 'place 地方', 'chamber 室'],
    antonyms: [],
    examPoints: []
  },
  house: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['home 家', 'dwelling 住所', 'residence 住宅', 'shelter 庇护所', 'accommodation 住处'],
    antonyms: [],
    examPoints: []
  },
  home: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['house 房子', 'residence 住宅', 'dwelling 住所', 'habitat 栖息地', 'abode 居所'],
    antonyms: [],
    examPoints: []
  },
  building: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['structure 结构', 'construction 建筑', 'edifice 大厦', 'premises 房屋'],
    antonyms: [],
    examPoints: []
  },
  tool: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['instrument 工具', 'device 设备', 'implement 器具', 'apparatus 器械', 'utensil 用具'],
    antonyms: [],
    examPoints: []
  },
  machine: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['device 设备', 'engine 引擎', 'motor 马达', 'mechanism 机制', 'apparatus 装置'],
    antonyms: [],
    examPoints: []
  },
  vehicle: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['car 汽车', 'automobile 汽车', 'truck 卡车', 'transport 运输工具'],
    antonyms: [],
    examPoints: []
  },
  journey: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['trip 旅行', 'voyage 航行', 'expedition 探险', 'tour 旅游', 'excursion 远足'],
    antonyms: [],
    examPoints: []
  },
  price: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['cost 成本', 'fee 费用', 'charge 收费', 'expense 开支', 'rate 费率'],
    antonyms: [],
    examPoints: []
  },
  money: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['cash 现金', 'currency 货币', 'funds 资金', 'capital 资本', 'wealth 财富'],
    antonyms: [],
    examPoints: []
  },
  job: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['work 工作', 'career 职业', 'profession 职业', 'occupation 职业', 'employment 就业', 'position 职位'],
    antonyms: ['unemployment 失业', 'leisure 休闲'],
    examPoints: []
  },
  business: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['enterprise 企业', 'company 公司', 'firm 公司', 'corporation 公司', 'trade 贸易', 'commerce 商业'],
    antonyms: [],
    examPoints: []
  },
  company: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['firm 公司', 'corporation 公司', 'business 企业', 'enterprise 企业', 'group 集团'],
    antonyms: [],
    examPoints: []
  },
  market: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['trade 贸易', 'commerce 商业', 'exchange 交换', 'bazaar 集市', 'shop 商店'],
    antonyms: [],
    examPoints: []
  },
  product: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['goods 商品', 'merchandise 货物', 'commodity 商品', 'item 物品', 'article 物品'],
    antonyms: [],
    examPoints: []
  },
  food: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['meal 餐', 'nourishment 营养', 'sustenance 食物', 'provision 供应', 'diet 饮食'],
    antonyms: [],
    examPoints: []
  },
  clothing: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['clothes 衣服', 'attire 服装', 'dress 服装', 'garment 衣物', 'outfit 全套服装', 'apparel 服饰'],
    antonyms: [],
    examPoints: []
  },
  weather: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['climate 气候', 'condition 状况', 'atmosphere 大气', 'environment 环境'],
    antonyms: [],
    examPoints: []
  },
  time: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['period 时期', 'era 时代', 'epoch 时代', 'age 年代', 'duration 持续'],
    antonyms: [],
    examPoints: []
  },
  beginning: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['start 开始', 'origin 起源', 'source 来源', 'commencement 开始', 'outset 开端'],
    antonyms: ['end 结束', 'finish 终结', 'conclusion 结论'],
    examPoints: []
  },
  middle: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['center 中心', 'heart 心', 'core 核心', 'midst 中间', 'hub 中心'],
    antonyms: ['edge 边缘', 'border 边界'],
    examPoints: []
  },
  part: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['portion 部分', 'section 部分', 'segment 段', 'fraction 分数', 'share 份额', 'piece 片'],
    antonyms: ['whole 整体', 'entirety 全部'],
    examPoints: []
  },
  group: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['team 团队', 'crowd 人群', 'band 乐队', 'gang 团伙', 'squad 小队', 'cluster 群'],
    antonyms: ['individual 个人'],
    examPoints: []
  },
  crowd: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['mob 人群', 'throng 人群', 'mass 大众', 'swarm 群', 'herd 人群', 'flock 群'],
    antonyms: ['individual 个人'],
    examPoints: []
  },
  people: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['persons 人们', 'individuals 个人', 'folk 人们', 'public 公众', 'population 人口'],
    antonyms: [],
    examPoints: []
  },
  friend: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['companion 同伴', 'mate 伙伴', 'buddy 好友', 'pal 朋友', 'ally 盟友', 'confidant 知己'],
    antonyms: ['enemy 敌人', 'foe 仇敌', 'rival 对手'],
    examPoints: []
  },
  enemy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['foe 敌人', 'opponent 对手', 'rival 竞争者', 'adversary 对手', 'antagonist 对抗者'],
    antonyms: ['friend 朋友', 'ally 盟友', 'ally 同盟'],
    examPoints: []
  },
  leader: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['chief 首领', 'head 领导', 'boss 老板', 'director 主管', 'commander 指挥官', 'guide 向导'],
    antonyms: ['follower 追随者', 'subordinate 下属'],
    examPoints: []
  },
  child: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['kid 孩子', 'youngster 年轻人', 'youth 青年', 'offspring 后代'],
    antonyms: ['parent 父母', 'adult 成年人'],
    examPoints: []
  },
  adult: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['grown-up 成年人', 'person 人', 'individual 个体', 'mature person 成年人'],
    antonyms: ['child 儿童', 'minor 未成年人'],
    examPoints: []
  },
  teacher: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['instructor 指导者', 'educator 教育者', 'tutor 导师', 'coach 教练', 'mentor 良师'],
    antonyms: ['student 学生', 'pupil 学生'],
    examPoints: []
  },
  student: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pupil 学生', 'learner 学习者', 'scholar 学者', 'undergraduate 大学生'],
    antonyms: ['teacher 老师', 'instructor 指导者'],
    examPoints: []
  },
  book: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['volume 卷', 'publication 出版物', 'tome 大部头书', 'manual 手册'],
    antonyms: [],
    examPoints: []
  },
  school: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['college 学院', 'university 大学', 'institute 学院', 'academy 专科院校', 'institution 机构'],
    antonyms: [],
    examPoints: []
  },
  class: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['lesson 课程', 'course 课程', 'lecture 讲座', 'session 会议', 'period 课时'],
    antonyms: [],
    examPoints: []
  },
  test: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['exam 考试', 'examination 考试', 'quiz 测验', 'assessment 评估', 'evaluation 评价'],
    antonyms: [],
    examPoints: []
  },
  art: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['craft 手艺', 'skill 技能', 'technique 技术', 'artwork 艺术品'],
    antonyms: [],
    examPoints: []
  },
  science: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['knowledge 知识', 'learning 学问', 'scholarship 学术', 'discipline 学科'],
    antonyms: [],
    examPoints: []
  },
  sport: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['game 比赛', 'match 比赛', 'contest 竞赛', 'competition 竞争', 'tournament 锦标赛'],
    antonyms: [],
    examPoints: []
  },
  music: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['song 歌曲', 'melody 旋律', 'tune 曲调', 'composition 乐曲', 'harmony 和声'],
    antonyms: [],
    examPoints: []
  },
  nature: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['environment 环境', 'surroundings 周围', 'ecology 生态', 'habitat 栖息地', 'wilderness 荒野'],
    antonyms: [],
    examPoints: []
  },
  animal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['creature 生物', 'beast 野兽', 'wildlife 野生动物', 'species 物种'],
    antonyms: ['plant 植物'],
    examPoints: []
  },
  plant: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['vegetation 植被', 'flora 植物', 'shrub 灌木', 'herb 草本'],
    antonyms: ['animal 动物'],
    examPoints: []
  },
  water: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['liquid 液体', 'fluid 液体', 'moisture 水分'],
    antonyms: [],
    examPoints: []
  },
  fire: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['flame 火焰', 'blaze 烈火', 'inferno 大火', 'conflagration 大火灾'],
    antonyms: [],
    examPoints: []
  },
  earth: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ground 地面', 'soil 土壤', 'land 陆地', 'terrain 地形', 'dirt 泥土'],
    antonyms: [],
    examPoints: []
  },
  air: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['atmosphere 大气', 'sky 天空', 'breeze 微风', 'wind 风'],
    antonyms: [],
    examPoints: []
  },
  darkness: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['shadow 阴影', 'shade 阴凉', 'gloom 幽暗', 'obscurity 黑暗'],
    antonyms: ['light 光亮', 'brightness 明亮'],
    examPoints: []
  },
  sound: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['noise 噪音', 'voice 声音', 'tone 音调', 'echo 回声', 'din 喧闹'],
    antonyms: ['silence 寂静'],
    examPoints: []
  },
  smell: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['scent 气味', 'odor 气味', 'aroma 香味', 'fragrance 芬芳', 'perfume 香水'],
    antonyms: [],
    examPoints: []
  },
  taste: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['flavor 味道', 'savor 滋味', 'relish 享受', 'palate 味觉'],
    antonyms: [],
    examPoints: []
  },
  feeling: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['emotion 情感', 'sensation 感觉', 'sentiment 感情', 'passion 激情', 'mood 心情'],
    antonyms: [],
    examPoints: []
  },
  happiness: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['joy 快乐', 'delight 高兴', 'pleasure 愉快', 'gladness 喜悦', 'cheer 欢欣'],
    antonyms: ['sadness 悲伤', 'sorrow 悲痛', 'grief 哀伤'],
    examPoints: []
  },
  sadness: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sorrow 悲痛', 'grief 哀伤', 'melancholy 忧郁', 'depression 抑郁', 'despair 绝望'],
    antonyms: ['happiness 快乐', 'joy 喜悦', 'delight 高兴'],
    examPoints: []
  },
  anger: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['rage 愤怒', 'fury 狂怒', 'wrath 暴怒', 'indignation 愤慨', 'irritation 愤怒'],
    antonyms: ['calmness 平静', 'patience 耐心'],
    examPoints: []
  },
  fear: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['dread 恐惧', 'terror 恐怖', 'horror 恐惧', 'panic 惊慌', 'alarm 警报', 'fright 惊吓'],
    antonyms: ['courage 勇气', 'bravery 勇敢', 'confidence 自信'],
    examPoints: []
  },
  despair: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hopelessness 绝望', 'discouragement 沮丧', 'despondency 消沉', 'depression 抑郁'],
    antonyms: ['hope 希望', 'optimism 乐观'],
    examPoints: []
  },
  courage: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bravery 勇敢', 'valor 英勇', 'boldness 大胆', 'fearlessness 无畏', 'nerve 胆量'],
    antonyms: ['cowardice 懦弱', 'timidity 胆怯', 'fear 恐惧'],
    examPoints: []
  },
  pride: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['dignity 尊严', 'self-respect 自尊', 'ego 自我', 'arrogance 傲慢'],
    antonyms: ['humility 谦虚', 'modesty 谦逊'],
    examPoints: []
  },
  shame: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['embarrassment 尴尬', 'humiliation 羞辱', 'disgrace 耻辱', 'guilt 内疚'],
    antonyms: ['pride 骄傲', 'honor 荣誉'],
    examPoints: []
  },
  patience: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tolerance 容忍', 'forbearance 忍耐', 'endurance 忍耐', 'composure 镇静'],
    antonyms: ['impatience 不耐烦', 'irritability 易怒'],
    examPoints: []
  },
  kindness: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['generosity 慷慨', 'goodwill 善意', 'benevolence 仁慈', 'compassion 同情', 'mercy 仁慈'],
    antonyms: ['cruelty 残忍', 'unkindness 不友善'],
    examPoints: []
  },
  cruelty: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unkindness 不友善', 'malice 恶意', 'spite 怨恨', 'brutality 残忍', 'savagery 野蛮'],
    antonyms: ['kindness 善良', 'mercy 仁慈', 'compassion 同情'],
    examPoints: []
  },
  honesty: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['integrity 正直', 'truthfulness 诚实', 'sincerity 真诚', 'frankness 坦率'],
    antonyms: ['dishonesty 不诚实', 'deceit 欺骗', 'corruption 腐败'],
    examPoints: []
  },
  beauty: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['attractiveness 魅力', 'charm 魅力', 'elegance 优雅', 'grace 优雅'],
    antonyms: ['ugliness 丑陋'],
    examPoints: []
  },
  memory: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['recollection 回忆', 'remembrance 记忆', 'recall 回想', 'retention 记忆力'],
    antonyms: ['forgetfulness 健忘'],
    examPoints: []
  },
  heart: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['core 核心', 'center 中心', 'soul 灵魂', 'spirit 精神'],
    antonyms: [],
    examPoints: []
  },
  voice: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sound 声音', 'speech 说话声', 'tone 音调', 'utterance 发声'],
    antonyms: ['silence 沉默'],
    examPoints: []
  },
  power: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['strength 力量', 'force 力量', 'authority 权力', 'might 威力', 'influence 影响'],
    antonyms: ['weakness 虚弱', 'powerlessness 无力'],
    examPoints: []
  },
  strength: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['power 力量', 'might 威力', 'force 力量', 'vigor 精力', 'robustness 强健'],
    antonyms: ['weakness 虚弱', 'fragility 脆弱'],
    examPoints: []
  },
  weakness: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['feebleness 虚弱', 'frailty 脆弱', 'fragility 脆弱', 'debility 衰弱'],
    antonyms: ['strength 力量', 'power 力量', 'vigor 精力'],
    examPoints: []
  },
  wealth: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['riches 财富', 'fortune 财产', 'prosperity 繁荣', 'abundance 富足', 'assets 资产'],
    antonyms: ['poverty 贫困', 'destitution 赤贫'],
    examPoints: []
  },
  poverty: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['destitution 赤贫', 'need 贫困', 'deprivation 匮乏', 'penury 贫困'],
    antonyms: ['wealth 财富', 'riches 财富', 'abundance 富足'],
    examPoints: []
  },
  peace: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tranquility 宁静', 'calmness 平静', 'harmony 和谐', 'serenity 宁静', 'stillness 静止'],
    antonyms: ['war 战争', 'conflict 冲突', 'violence 暴力'],
    examPoints: []
  },
  war: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['battle 战斗', 'conflict 冲突', 'warfare 战争', 'combat 战斗', 'hostility 敌对'],
    antonyms: ['peace 和平', 'harmony 和谐'],
    examPoints: []
  },
  life: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['existence 存在', 'being 生命', 'survival 生存', 'vitality 活力'],
    antonyms: ['death 死亡'],
    examPoints: []
  },
  death: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['demise 死亡', 'passing 去世', 'end 结束', 'extinction 灭绝'],
    antonyms: ['life 生命', 'birth 出生'],
    examPoints: []
  },
  world: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['earth 地球', 'globe 全球', 'planet 行星', 'universe 宇宙'],
    antonyms: [],
    examPoints: []
  },
  society: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['community 社区', 'public 公众', 'people 人们', 'civilization 文明'],
    antonyms: [],
    examPoints: []
  },
  culture: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['civilization 文明', 'tradition 传统', 'heritage 遗产', 'customs 习俗'],
    antonyms: [],
    examPoints: []
  },
  education: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['schooling 学校教育', 'learning 学习', 'instruction 教学', 'teaching 教导', 'training 培训'],
    antonyms: ['ignorance 无知'],
    examPoints: []
  },
  language: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['speech 语言', 'tongue 语言', 'dialect 方言', 'communication 交流'],
    antonyms: [],
    examPoints: []
  },
  law: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['rule 规则', 'regulation 法规', 'statute 法令', 'legislation 立法', 'decree 法令'],
    antonyms: [],
    examPoints: []
  },
  freedom: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['liberty 自由', 'independence 独立', 'autonomy 自治', 'liberation 解放'],
    antonyms: ['slavery 奴役', 'captivity 囚禁', 'oppression 压迫'],
    examPoints: []
  },
  experience: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['knowledge 知识', 'skill 技能', 'expertise 专长', 'practice 实践'],
    antonyms: ['inexperience 缺乏经验'],
    examPoints: []
  },
  opportunity: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['chance 机会', 'occasion 时机', 'opening 空缺', 'prospect 前景'],
    antonyms: [],
    examPoints: []
  },
  disadvantage: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['drawback 缺点', 'downside 缺点', 'flaw 瑕疵', 'handicap 障碍', 'liability 负担'],
    antonyms: ['advantage 优势', 'benefit 益处'],
    examPoints: []
  },
  damage: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['harm 伤害', 'injury 损害', 'ruin 毁坏', 'destruction 破坏', 'impairment 损伤'],
    antonyms: ['repair 修复', 'improvement 改善'],
    examPoints: []
  },
  harm: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['damage 损害', 'injury 伤害', 'hurt 伤害', 'destruction 破坏', 'detriment 损害'],
    antonyms: ['benefit 益处', 'protection 保护', 'help 帮助'],
    examPoints: []
  },
  progress: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['advancement 进步', 'development 发展', 'improvement 改善', 'growth 增长', 'headway 进展'],
    antonyms: ['decline 衰退', 'regression 退化'],
    examPoints: []
  },
  development: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['growth 增长', 'progress 进步', 'evolution 演变', 'expansion 扩张', 'advancement 发展'],
    antonyms: ['decline 衰退', 'regression 倒退'],
    examPoints: []
  },
  effect: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['result 结果', 'outcome 结果', 'consequence 后果', 'impact 影响', 'influence 影响'],
    antonyms: ['cause 原因'],
    examPoints: []
  },
  trouble: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['problem 问题', 'difficulty 困难', 'issue 问题', 'bother 麻烦', 'hardship 艰难'],
    antonyms: ['ease 轻松', 'comfort 舒适'],
    examPoints: []
  },
  difficulty: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['problem 问题', 'trouble 麻烦', 'hardship 艰难', 'challenge 挑战', 'obstacle 障碍'],
    antonyms: ['ease 容易', 'simplicity 简单'],
    examPoints: []
  },
  choice: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['option 选择', 'alternative 选择', 'selection 选择', 'preference 偏好', 'pick 选择'],
    antonyms: [],
    examPoints: []
  },
  decision: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['choice 选择', 'resolution 决议', 'verdict 裁决', 'conclusion 结论', 'judgment 判断'],
    antonyms: [],
    examPoints: []
  },
  duty: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['responsibility 责任', 'obligation 义务', 'task 任务', 'function 职能', 'mission 使命'],
    antonyms: [],
    examPoints: []
  },
  task: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['job 工作', 'duty 职责', 'assignment 任务', 'chore 杂务', 'mission 任务'],
    antonyms: [],
    examPoints: []
  },
  event: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['occurrence 事件', 'incident 事件', 'happening 事件', 'affair 事情', 'episode 事件'],
    antonyms: [],
    examPoints: []
  },
  moment: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['instant 瞬间', 'second 秒', 'minute 分钟', 'point 时刻', 'jiffy 瞬间'],
    antonyms: [],
    examPoints: []
  },
  period: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['time 时期', 'phase 阶段', 'stage 阶段', 'era 时代', 'span 跨度', 'term 期间'],
    antonyms: [],
    examPoints: []
  },
  season: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['time 时期', 'period 时期', 'phase 阶段'],
    antonyms: [],
    examPoints: []
  },
  area: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['region 区域', 'zone 地带', 'district 区域', 'territory 领土', 'zone 区域'],
    antonyms: [],
    examPoints: []
  },
  place: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['location 位置', 'spot 地点', 'site 地点', 'position 位置', 'venue 场地'],
    antonyms: [],
    examPoints: []
  },
  country: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['nation 国家', 'state 国家', 'land 国土', 'territory 领土', 'homeland 祖国'],
    antonyms: [],
    examPoints: []
  },
  nation: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['country 国家', 'state 国家', 'people 民族', 'homeland 祖国'],
    antonyms: [],
    examPoints: []
  },
  city: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['town 城镇', 'metropolis 大都市', 'municipality 市', 'urban area 市区'],
    antonyms: ['countryside 乡村'],
    examPoints: []
  },
  village: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hamlet 小村', 'settlement 村落', 'community 村庄'],
    antonyms: ['city 城市'],
    examPoints: []
  },
  family: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['household 家庭', 'clan 家族', 'kin 亲属', 'relatives 亲戚', 'lineage 家系'],
    antonyms: [],
    examPoints: []
  },
  parent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['guardian 监护人', 'caregiver 照顾者', 'father/mother 父母'],
    antonyms: ['child 孩子'],
    examPoints: []
  },
  amount: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['quantity 数量', 'volume 体积', 'sum 总数', 'total 总计', 'measure 量'],
    antonyms: [],
    examPoints: []
  },
  number: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['figure 数字', 'count 计数', 'total 总数', 'amount 数量', 'quantity 数量'],
    antonyms: [],
    examPoints: []
  },
  quality: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['standard 标准', 'grade 等级', 'level 水平', 'caliber 水准', 'excellence 优秀'],
    antonyms: [],
    examPoints: []
  },
  quantity: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['amount 数量', 'volume 量', 'number 数量', 'measure 量', 'sum 总数'],
    antonyms: [],
    examPoints: []
  },
  form: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['shape 形状', 'format 格式', 'structure 结构', 'pattern 模式', 'type 类型'],
    antonyms: [],
    examPoints: []
  },
  shape: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['form 形状', 'figure 图形', 'outline 轮廓', 'contour 轮廓', 'appearance 外观'],
    antonyms: [],
    examPoints: []
  },
  size: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['dimension 尺寸', 'scale 规模', 'proportion 比例', 'extent 程度', 'magnitude 大小'],
    antonyms: [],
    examPoints: []
  },
  color: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hue 色调', 'shade 色度', 'tint 色彩', 'tone 色调', 'pigment 颜料'],
    antonyms: [],
    examPoints: []
  },
  manner: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['way 方式', 'method 方法', 'style 风格', 'fashion 方式', 'approach 方法'],
    antonyms: [],
    examPoints: []
  },
  style: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fashion 风格', 'manner 方式', 'mode 方式', 'trend 潮流', 'design 设计'],
    antonyms: [],
    examPoints: []
  },
  fashion: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['style 风格', 'trend 潮流', 'vogue 流行', 'mode 方式', 'craze 热潮'],
    antonyms: [],
    examPoints: []
  },
  custom: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tradition 传统', 'practice 惯例', 'convention 惯例', 'habit 习惯', 'ritual 仪式'],
    antonyms: [],
    examPoints: []
  },
  tradition: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['custom 习俗', 'heritage 遗产', 'convention 惯例', 'practice 惯例'],
    antonyms: [],
    examPoints: []
  },
  view: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['opinion 观点', 'perspective 看法', 'viewpoint 观点', 'outlook 观点', 'standpoint 立场'],
    antonyms: [],
    examPoints: []
  },
  thought: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['idea 想法', 'concept 概念', 'notion 观念', 'reflection 思考', 'belief 信念'],
    antonyms: [],
    examPoints: []
  },
  belief: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['faith 信仰', 'conviction 信念', 'trust 信任', 'confidence 信心', 'opinion 观点'],
    antonyms: ['doubt 怀疑', 'disbelief 不信'],
    examPoints: []
  },
  doubt: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['uncertainty 不确定', 'skepticism 怀疑', 'suspicion 怀疑', 'distrust 不信任'],
    antonyms: ['certainty 确定', 'confidence 信心', 'belief 信念'],
    examPoints: []
  },
  matter: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['issue 问题', 'affair 事情', 'business 事务', 'concern 关注', 'subject 主题'],
    antonyms: [],
    examPoints: []
  },
  subject: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['topic 话题', 'theme 主题', 'matter 事情', 'issue 问题', 'field 领域'],
    antonyms: [],
    examPoints: []
  },
  topic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['subject 主题', 'theme 主题', 'issue 问题', 'matter 事情', 'point 要点'],
    antonyms: [],
    examPoints: []
  },
  theme: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['subject 主题', 'topic 主题', 'motif 主题', 'idea 主旨', 'concept 概念'],
    antonyms: [],
    examPoints: []
  },
  point: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['idea 要点', 'argument 论点', 'matter 要点', 'issue 问题', 'aspect 方面'],
    antonyms: [],
    examPoints: []
  },
  source: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['origin 起源', 'root 根源', 'beginning 开端', 'cause 原因', 'foundation 基础'],
    antonyms: ['result 结果', 'outcome 结果'],
    examPoints: []
  },
  origin: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['source 来源', 'root 根源', 'beginning 起源', 'start 开始', 'foundation 基础'],
    antonyms: [],
    examPoints: []
  },
  foundation: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['base 基础', 'basis 基础', 'ground 地基', 'root 根基', 'support 支撑'],
    antonyms: [],
    examPoints: []
  },
  center: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['middle 中间', 'heart 中心', 'core 核心', 'hub 中心', 'focal point 焦点'],
    antonyms: ['edge 边缘', 'periphery 外围'],
    examPoints: []
  },
  edge: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['border 边界', 'brim 边缘', 'margin 边缘', 'verge 边缘', 'boundary 边界'],
    antonyms: ['center 中心', 'middle 中间'],
    examPoints: []
  },
  border: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['boundary 边界', 'frontier 边境', 'edge 边缘', 'limit 界限', 'margin 边缘'],
    antonyms: [],
    examPoints: []
  },
  surface: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['exterior 外表', 'face 表面', 'outside 外面', 'skin 表皮', 'covering 覆盖物'],
    antonyms: ['interior 内部', 'inside 里面'],
    examPoints: []
  },
  inside: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['interior 内部', 'inner 内部', 'within 内部'],
    antonyms: ['outside 外部', 'exterior 外部'],
    examPoints: []
  },
  outside: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['exterior 外部', 'outer 外部', 'surface 表面'],
    antonyms: ['inside 内部', 'interior 内部'],
    examPoints: []
  },
  top: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['peak 顶峰', 'summit 顶点', 'apex 顶点', 'crest 顶部', 'zenith 天顶'],
    antonyms: ['bottom 底部', 'base 基部'],
    examPoints: []
  },
  bottom: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['base 底部', 'floor 底部', 'lowest part 最低部分', 'foot 底部'],
    antonyms: ['top 顶部', 'peak 顶峰'],
    examPoints: []
  },
  side: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['edge 边缘', 'flank 侧面', 'aspect 方面', 'face 侧面'],
    antonyms: [],
    examPoints: []
  },
  front: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['forepart 前部', 'face 正面', 'forehead 前额', 'van 前卫'],
    antonyms: ['back 后面', 'rear 后部'],
    examPoints: []
  },
  back: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['rear 后部', 'behind 后面', 'posterior 后部'],
    antonyms: ['front 前面', 'forepart 前部'],
    examPoints: []
  },
  direction: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['way 方向', 'course 方向', 'route 路线', 'path 路径', 'bearing 方位'],
    antonyms: [],
    examPoints: []
  },
  distance: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['length 距离', 'extent 范围', 'span 跨度', 'gap 间距', 'space 间距'],
    antonyms: [],
    examPoints: []
  },
  speed: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['velocity 速度', 'pace 步速', 'rate 速率', 'rapidity 迅速', 'swiftness 敏捷'],
    antonyms: [],
    examPoints: []
  },
  level: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['degree 程度', 'standard 标准', 'grade 等级', 'stage 阶段', 'rank 排名'],
    antonyms: [],
    examPoints: []
  },
  degree: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['extent 程度', 'level 水平', 'measure 程度', 'amount 数量', 'stage 阶段'],
    antonyms: [],
    examPoints: []
  },
  standard: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['criterion 标准', 'benchmark 基准', 'norm 规范', 'measure 标准', 'level 水平'],
    antonyms: [],
    examPoints: []
  },

  able: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['capable 有能力的', 'competent 能胜任的', 'skilled 熟练的', 'proficient 精通的'],
    antonyms: ['unable 不能的', 'incapable 无能力的', 'incompetent 不胜任的'],
    examPoints: []
  },
  abnormal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unusual 不正常的', 'irregular 不规则的', 'peculiar 异常的', 'anomalous 反常的'],
    antonyms: ['normal 正常的', 'regular 规则的', 'typical 典型的'],
    examPoints: []
  },
  aboard: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['onboard 在船上', 'on board 在船或飞机上'],
    antonyms: ['ashore 在岸上'],
    examPoints: []
  },
  abolish: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['cancel 取消', 'eliminate 消除', 'eradicate 根除', 'annul 废除'],
    antonyms: ['establish 建立', 'create 创立', 'institute 设立'],
    examPoints: []
  },
  absolute: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['complete 完全的', 'total 全部的', 'entire 完整的', 'utter 绝对的'],
    antonyms: ['partial 部分的', 'relative 相对的', 'limited 有限的'],
    examPoints: []
  },
  abstract: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['theoretical 理论的', 'conceptual 概念的', 'general 概括的'],
    antonyms: ['concrete 具体的', 'specific 具体的', 'actual 实际的'],
    examPoints: []
  },
  absurd: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ridiculous 荒谬的', 'foolish 愚蠢的', 'preposterous 荒唐的', 'nonsensical 无意义的'],
    antonyms: ['reasonable 合理的', 'rational 理性的', 'sensible 明智的'],
    examPoints: []
  },
  abundant: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['plentiful 丰富的', 'ample 充足的', 'copious 大量的', 'rich 丰富的'],
    antonyms: ['scarce 稀少的', 'insufficient 不足的', 'lacking 缺乏的'],
    examPoints: []
  },
  abuse: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['misuse 滥用', 'mistreat 虐待', 'exploit 剥削', 'maltreat 虐待'],
    antonyms: ['protect 保护', 'respect 尊重', 'care 关心'],
    examPoints: []
  },
  academic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['scholarly 学术的', 'educational 教育的', 'intellectual 智力的', 'learned 有学问的'],
    antonyms: ['practical 实践的', 'nonacademic 非学术的'],
    examPoints: []
  },
  accelerate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['speed up 加速', 'hasten 催促', 'quicken 加快', 'expedite 加速'],
    antonyms: ['decelerate 减速', 'slow down 放慢', 'delay 延迟'],
    examPoints: []
  },
  acceptable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['satisfactory 令人满意的', 'adequate 充分的', 'tolerable 可容忍的', 'passable 过得去的'],
    antonyms: ['unacceptable 不可接受的', 'unsatisfactory 不满意的', 'inadequate 不充分的'],
    examPoints: []
  },
  accessible: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['reachable 可到达的', 'obtainable 可获得的', 'approachable 易接近的', 'available 可用的'],
    antonyms: ['inaccessible 难接近的', 'unreachable 不可达的', 'unobtainable 不可得的'],
    examPoints: []
  },
  accident: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['mishap 不幸事故', 'collision 碰撞', 'crash 坠毁', 'incident 事件'],
    antonyms: ['plan 计划', 'intention 意图'],
    examPoints: []
  },
  accommodation: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['lodging 住宿', 'housing 住房', 'shelter 住所', 'quarters 住处'],
    antonyms: ['eviction 驱逐', 'displacement 迁移'],
    examPoints: []
  },
  accompany: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['escort 护送', 'attend 陪同', 'guide 引导', 'go with 伴随'],
    antonyms: ['leave 离开', 'abandon 抛弃', 'desert 遗弃'],
    examPoints: []
  },
  accomplish: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['achieve 达到', 'complete 完成', 'fulfill 实现', 'finish 完成'],
    antonyms: ['fail 失败', 'abandon 放弃', 'neglect 忽视'],
    examPoints: []
  },
  accumulate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gather 收集', 'amass 积聚', 'collect 收集', 'hoard 囤积'],
    antonyms: ['disperse 分散', 'scatter 散开', 'dissipate 消散'],
    examPoints: []
  },
  accurate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['precise 精确的', 'exact 准确的', 'correct 正确的', 'faultless 无误的'],
    antonyms: ['inaccurate 不准确的', 'imprecise 不精确的', 'incorrect 不正确的'],
    examPoints: []
  },
  accustomed: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['used 习惯的', 'habitual 习惯性的', 'familiar 熟悉的', 'adapted 适应的'],
    antonyms: ['unaccustomed 不习惯的', 'unfamiliar 不熟悉的', 'new 新的'],
    examPoints: []
  },
  achievement: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['accomplishment 成就', 'success 成功', 'feat 功绩', 'attainment 达到'],
    antonyms: ['failure 失败', 'defeat 失败'],
    examPoints: []
  },
  acknowledge: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['admit 承认', 'recognize 认可', 'confess 承认', 'concede 让步'],
    antonyms: ['deny 否认', 'reject 拒绝', 'disclaim 否认'],
    examPoints: []
  },
  acquaintance: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['contact 接触', 'associate 熟人', 'familiar 熟人', 'connection 联系'],
    antonyms: ['stranger 陌生人', 'foreigner 陌生人'],
    examPoints: []
  },
  acquire: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['obtain 获得', 'gain 获得', 'secure 获得', 'procure 取得'],
    antonyms: ['lose 失去', 'give up 放弃', 'relinquish 放弃'],
    examPoints: []
  },
  act: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['perform 表演', 'behave 表现', 'do 做', 'execute 执行'],
    antonyms: ['refrain 克制', 'desist 停止', 'wait 等待'],
    examPoints: []
  },
  action: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['deed 行为', 'act 行动', 'activity 活动', 'movement 运动'],
    antonyms: ['inaction 不作为', 'idleness 懒惰', 'rest 休息'],
    examPoints: []
  },
  activity: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pursuit 追求', 'endeavor 努力', 'occupation 活动', 'bustle 忙碌'],
    antonyms: ['inactivity 不活跃', 'idleness 懒惰', 'rest 休息'],
    examPoints: []
  },
  actual: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['real 真实的', 'genuine 真正的', 'true 真的', 'factual 事实的'],
    antonyms: ['imaginary 想象的', 'fictional 虚构的', 'apparent 表面的'],
    examPoints: []
  },
  acute: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sharp 锋利的', 'intense 强烈的', 'severe 严重的', 'keen 敏锐的'],
    antonyms: ['dull 钝的', 'mild 温和的', 'chronic 慢性的'],
    examPoints: []
  },
  add: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['increase 增加', 'augment 增加', 'supplement 补充', 'append 附加'],
    antonyms: ['subtract 减去', 'remove 移除', 'decrease 减少'],
    examPoints: []
  },
  addition: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['supplement 补充', 'increase 增加', 'extension 扩展', 'appendage 附加物'],
    antonyms: ['subtraction 减去', 'reduction 减少', 'decrease 减少'],
    examPoints: []
  },
  address: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['speech 演讲', 'lecture 演讲', 'tackle 处理', 'deal with 处理'],
    antonyms: ['ignore 忽视', 'avoid 回避'],
    examPoints: []
  },
  adequate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sufficient 充足的', 'enough 足够的', 'ample 充分的', 'satisfactory 令人满意的'],
    antonyms: ['inadequate 不足的', 'insufficient 不足的', 'deficient 缺乏的'],
    examPoints: []
  },
  adjust: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['adapt 适应', 'modify 修改', 'regulate 调节', 'alter 改变'],
    antonyms: ['disturb 扰乱', 'disarrange 弄乱'],
    examPoints: []
  },
  administration: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['management 管理', 'governance 治理', 'control 控制', 'direction 指导'],
    antonyms: ['mismanagement 管理不善', 'disorder 混乱'],
    examPoints: []
  },
  admire: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['respect 尊敬', 'esteem 尊重', 'appreciate 赏识', 'revere 崇敬'],
    antonyms: ['despise 鄙视', 'scorn 蔑视', 'detest 厌恶'],
    examPoints: []
  },
  admission: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['entry 进入', 'acceptance 接纳', 'confession 承认', 'acknowledgment 承认'],
    antonyms: ['denial 否认', 'rejection 拒绝', 'exclusion 排斥'],
    examPoints: []
  },
  advance: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['progress 进步', 'proceed 前进', 'move forward 前进', 'promote 促进'],
    antonyms: ['retreat 撤退', 'recede 后退', 'withdraw 撤退'],
    examPoints: []
  },
  adventure: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['exploit 冒险', 'escapade 冒险行为', 'venture 冒险', 'undertaking 事业'],
    antonyms: ['routine 常规', 'safety 安全'],
    examPoints: []
  },
  advocate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['support 支持', 'promote 提倡', 'back 支持', 'champion 拥护'],
    antonyms: ['oppose 反对', 'resist 抵抗', 'hinder 阻碍'],
    examPoints: []
  },
  affair: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['matter 事情', 'business 事务', 'event 事件', 'concern 关切的事'],
    antonyms: ['triviality 琐事'],
    examPoints: []
  },
  affection: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['love 爱', 'fondness 喜爱', 'attachment 依恋', 'tenderness 温情'],
    antonyms: ['dislike 厌恶', 'hatred 仇恨', 'aversion 反感'],
    examPoints: []
  },
  afraid: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fearful 害怕的', 'frightened 害怕的', 'scared 恐惧的', 'terrified 恐惧的'],
    antonyms: ['brave 勇敢的', 'fearless 无畏的', 'bold 大胆的'],
    examPoints: []
  },
  age: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['era 时代', 'period 时期', 'epoch 纪元', 'generation 代'],
    antonyms: ['youth 青春'],
    examPoints: []
  },
  agency: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bureau 局', 'office 办事处', 'organization 机构', 'department 部门'],
    antonyms: ['individual 个人'],
    examPoints: []
  },
  agent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['representative 代表', 'delegate 代表', 'deputy 代理人', 'intermediary 中间人'],
    antonyms: ['principal 委托人', 'client 客户'],
    examPoints: []
  },
  aggressive: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hostile 敌对的', 'belligerent 好战的', 'combative 好斗的', 'militant 激进的'],
    antonyms: ['peaceful 和平的', 'friendly 友好的', 'gentle 温和的'],
    examPoints: []
  },
  agreement: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['accord 协议', 'consensus 共识', 'pact 契约', 'contract 合同'],
    antonyms: ['disagreement 分歧', 'discord 不和', 'conflict 冲突'],
    examPoints: []
  },
  agriculture: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['farming 农业', 'cultivation 耕作', 'husbandry 畜牧'],
    antonyms: ['industry 工业'],
    examPoints: []
  },
  aid: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['help 帮助', 'assist 协助', 'support 支持', 'relieve 救济'],
    antonyms: ['hinder 阻碍', 'obstruct 妨碍', 'harm 伤害'],
    examPoints: []
  },
  aircraft: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['plane 飞机', 'airplane 飞机', 'vehicle 飞行器'],
    antonyms: ['groundcraft 地面交通工具'],
    examPoints: []
  },
  alarm: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fright 惊吓', 'panic 恐慌', 'alert 警报', 'warning 警告'],
    antonyms: ['calm 平静', 'reassurance 安心', 'comfort 安慰'],
    examPoints: []
  },
  alcohol: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['liquor 烈酒', 'spirits 烈酒', 'intoxicant 酒精饮料'],
    antonyms: ['soft drink 软饮料'],
    examPoints: []
  },
  alike: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['similar 相似的', 'identical 相同的', 'comparable 可比较的', 'resembling 相似的'],
    antonyms: ['different 不同的', 'unlike 不同的', 'dissimilar 不相似的'],
    examPoints: []
  },
  allergic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sensitive 过敏的', 'reactive 反应的'],
    antonyms: ['immune 免疫的', 'resistant 有抵抗力的'],
    examPoints: []
  },
  allocate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['assign 分配', 'distribute 分配', 'allot 分配', 'apportion 分摊'],
    antonyms: ['withhold 扣留', 'retain 保留'],
    examPoints: []
  },
  alone: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['solitary 孤独的', 'lone 孤独的', 'single 单独的', 'isolated 孤立的'],
    antonyms: ['accompanied 有人陪伴的', 'together 一起', 'surrounded 被围绕的'],
    examPoints: []
  },
  alternative: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['option 选择', 'choice 选择', 'substitute 替代', 'replacement 替代'],
    antonyms: ['standard 标准的', 'conventional 传统的'],
    examPoints: []
  },
  altitude: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['height 高度', 'elevation 海拔', 'stature 身高'],
    antonyms: ['depth 深度'],
    examPoints: []
  },
  amateur: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['novice 新手', 'beginner 初学者', 'nonprofessional 非专业的'],
    antonyms: ['professional 专业的', 'expert 专家'],
    examPoints: []
  },
  amazing: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['astonishing 惊人的', 'surprising 令人惊讶的', 'astounding 令人震惊的', 'marvelous 奇妙的'],
    antonyms: ['ordinary 普通的', 'unremarkable 平凡的', 'commonplace 平凡的'],
    examPoints: []
  },
  ambition: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['aspiration 抱负', 'drive 动力', 'goal 目标', 'desire 渴望'],
    antonyms: ['apathy 冷漠', 'indifference 漠不关心', 'contentment 满足'],
    examPoints: []
  },
  ambulance: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['emergency vehicle 急救车', 'rescue vehicle 救护车'],
    antonyms: ['hearse 灵车'],
    examPoints: []
  },
  among: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['between 在...之间', 'amidst 在...之中', 'surrounded by 在...之中'],
    antonyms: ['outside 在...外', 'beyond 超出'],
    examPoints: []
  },
  ample: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['plentiful 丰富的', 'abundant 丰富的', 'sufficient 充足的', 'generous 慷慨的'],
    antonyms: ['scarce 稀少的', 'insufficient 不足的', 'meager 贫乏的'],
    examPoints: []
  },
  amuse: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['entertain 娱乐', 'divert 使消遣', 'delight 使高兴'],
    antonyms: ['bore 使厌烦', 'depress 使沮丧'],
    examPoints: []
  },
  analysis: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['examination 检查', 'study 研究', 'investigation 调查', 'breakdown 分析'],
    antonyms: ['synthesis 综合', 'summary 概括'],
    examPoints: []
  },
  ancestor: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['forefather 祖先', 'predecessor 前辈', 'progenitor 先祖'],
    antonyms: ['descendant 后代', 'offspring 后裔'],
    examPoints: []
  },
  ancient: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['old 古老的', 'antique 古老的', 'archaic 古代的', 'aged 年老的'],
    antonyms: ['modern 现代的', 'new 新的', 'recent 最近的'],
    examPoints: []
  },
  angle: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['corner 角', 'perspective 角度', 'viewpoint 观点', 'standpoint 立场'],
    antonyms: ['straight 直线'],
    examPoints: []
  },
  angry: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'angrier', superlative: 'angriest' },
    synonyms: ['furious 愤怒的', 'irritated 恼怒的', 'enraged 暴怒的', 'mad 生气的'],
    antonyms: ['calm 平静的', 'peaceful 和平的', 'content 满足的'],
    examPoints: []
  },
  anniversary: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['commemoration 纪念', 'jubilee 周年纪念'],
    antonyms: ['beginning 开始'],
    examPoints: []
  },
  annoy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['irritate 激怒', 'bother 烦扰', 'disturb 打扰', 'vex 使烦恼'],
    antonyms: ['please 使高兴', 'soothe 安抚', 'comfort 安慰'],
    examPoints: []
  },
  annual: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['yearly 每年的', 'yearlong 全年的'],
    antonyms: ['occasional 偶尔的', 'irregular 不规则的'],
    examPoints: []
  },
  anticipate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['expect 期待', 'foresee 预见', 'predict 预测', 'await 等待'],
    antonyms: ['doubt 怀疑', 'despair 绝望'],
    examPoints: []
  },
  anxiety: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['worry 担忧', 'concern 关切', 'unease 不安', 'apprehension 忧虑'],
    antonyms: ['calm 平静', 'tranquility 宁静', 'composure 镇定'],
    examPoints: []
  },
  apart: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['separate 分开的', 'aside 在一旁', 'distant 遥远的'],
    antonyms: ['together 一起', 'joined 连接的', 'united 联合的'],
    examPoints: []
  },
  apologize: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['express regret 道歉', 'make amends 赔偿', 'concede 承认错误'],
    antonyms: ['demand 要求', 'insist 坚持'],
    examPoints: []
  },
  apparent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['obvious 明显的', 'evident 明显的', 'clear 清楚的', 'visible 可见的'],
    antonyms: ['hidden 隐藏的', 'obscure 模糊的', 'unclear 不清楚的'],
    examPoints: []
  },
  appeal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['request 请求', 'plea 恳求', 'petition 请愿', 'attract 吸引'],
    antonyms: ['repel 排斥', 'reject 拒绝'],
    examPoints: []
  },
  appearance: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['look 外表', 'aspect 外观', 'outward 外貌', 'form 形式'],
    antonyms: ['disappearance 消失', 'reality 现实'],
    examPoints: []
  },
  appetite: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hunger 饥饿', 'craving 渴望', 'desire 欲望', 'yearning 渴望'],
    antonyms: ['satiety 饱足', 'aversion 厌恶', 'disgust 厌恶'],
    examPoints: []
  },
  applaud: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['clap 鼓掌', 'cheer 欢呼', 'acclaim 称赞', 'praise 赞扬'],
    antonyms: ['boo 嘘声', 'criticize 批评', 'condemn 谴责'],
    examPoints: []
  },
  applicant: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['candidate 候选人', 'seeker 求职者', 'aspirant 有抱负者'],
    antonyms: ['employer 雇主', 'selector 选拔者'],
    examPoints: []
  },
  application: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['request 申请', 'appeal 申请', 'use 应用', 'utilization 运用'],
    antonyms: ['rejection 拒绝'],
    examPoints: []
  },
  appoint: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['assign 指派', 'designate 指定', 'name 任命', 'nominate 提名'],
    antonyms: ['dismiss 解雇', 'remove 免职', 'fire 解雇'],
    examPoints: []
  },
  appropriate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['suitable 合适的', 'fitting 适当的', 'proper 恰当的', 'apt 恰当的'],
    antonyms: ['inappropriate 不适当的', 'unsuitable 不合适的', 'improper 不恰当的'],
    examPoints: []
  },
  approximate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['near 接近的', 'close 近似的', 'rough 大约的'],
    antonyms: ['exact 精确的', 'precise 准确的'],
    examPoints: []
  },
  arbitrary: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['random 随意的', 'capricious 任性的', 'whimsical 反复无常的', 'dictatorial 专横的'],
    antonyms: ['rational 理性的', 'reasonable 合理的', 'systematic 系统的'],
    examPoints: []
  },
  architect: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['designer 设计师', 'builder 建造者', 'planner 规划者'],
    antonyms: ['demolisher 拆除者'],
    examPoints: []
  },
  arise: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['emerge 出现', 'appear 出现', 'occur 发生', 'originate 起源'],
    antonyms: ['disappear 消失', 'vanish 消失', 'subside 平息'],
    examPoints: []
  },
  arrest: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['detain 拘留', 'capture 捕获', 'seize 抓住', 'apprehend 逮捕'],
    antonyms: ['release 释放', 'free 释放', 'liberate 解放'],
    examPoints: []
  },
  article: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['item 物品', 'piece 一篇', 'essay 文章', 'report 报道'],
    antonyms: ['whole 整体'],
    examPoints: []
  },
  artificial: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['synthetic 合成的', 'man-made 人造的', 'fake 假的', 'simulated 模拟的'],
    antonyms: ['natural 自然的', 'genuine 真正的', 'real 真实的'],
    examPoints: []
  },
  ashamed: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['embarrassed 尴尬的', 'humiliated 羞辱的', 'guilty 内疚的'],
    antonyms: ['proud 骄傲的', 'unashamed 不知羞耻的'],
    examPoints: []
  },
  aspect: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['facet 方面', 'feature 特征', 'side 面', 'angle 角度'],
    antonyms: ['whole 整体'],
    examPoints: []
  },
  assemble: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gather 集合', 'collect 收集', 'congregate 聚集', 'convene 召集'],
    antonyms: ['disperse 分散', 'scatter 散开', 'dissolve 解散'],
    examPoints: []
  },
  assess: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['evaluate 评估', 'appraise 估价', 'judge 评判', 'estimate 估计'],
    antonyms: ['guess 猜测', 'ignore 忽视'],
    examPoints: []
  },
  assign: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['allocate 分配', 'designate 指定', 'appoint 指派', 'allot 分配'],
    antonyms: ['revoke 撤销', 'recall 召回'],
    examPoints: []
  },
  associate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['connect 联系', 'link 连接', 'relate 关联', 'ally 结盟'],
    antonyms: ['separate 分开', 'dissociate 分离', 'disconnect 断开'],
    examPoints: []
  },
  assure: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['guarantee 保证', 'confirm 确认', 'ensure 确保', 'promise 承诺'],
    antonyms: ['doubt 怀疑', 'question 质疑'],
    examPoints: []
  },
  astonish: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['amaze 使惊讶', 'surprise 使惊奇', 'astound 使震惊', 'dumbfound 使惊呆'],
    antonyms: ['expect 预料', 'anticipate 预期'],
    examPoints: []
  },
  atmosphere: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['air 空气', 'ambiance 氛围', 'mood 气氛', 'environment 环境'],
    antonyms: ['vacuum 真空'],
    examPoints: []
  },
  attain: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['achieve 达到', 'accomplish 完成', 'reach 到达', 'obtain 获得'],
    antonyms: ['fail 失败', 'lose 失去', 'miss 错过'],
    examPoints: []
  },
  attend: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['participate 参加', 'join 加入', 'present 出席', 'go to 参加'],
    antonyms: ['miss 错过', 'skip 跳过', 'absent 缺席'],
    examPoints: []
  },
  attract: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['draw 吸引', 'lure 引诱', 'entice 诱惑', 'captivate 迷住'],
    antonyms: ['repel 排斥', 'repulse 击退', 'disgust 使厌恶'],
    examPoints: []
  },
  attribute: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ascribe 归因于', 'credit 归功于', 'assign 归属'],
    antonyms: ['deny 否认', 'dissociate 分离'],
    examPoints: []
  },
  authority: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['power 权力', 'control 控制', 'command 指挥', 'dominion 统治'],
    antonyms: ['subordination 从属', 'obedience 服从'],
    examPoints: []
  },
  automatic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['spontaneous 自发的', 'involuntary 不随意的', 'mechanical 机械的', 'instinctive 本能的'],
    antonyms: ['manual 手动的', 'deliberate 故意的', 'voluntary 自愿的'],
    examPoints: []
  },
  available: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['accessible 可获得的', 'obtainable 可得到的', 'ready 准备好的', 'at hand 手边的'],
    antonyms: ['unavailable 不可用的', 'inaccessible 不可获得的', 'absent 缺席的'],
    examPoints: []
  },
  average: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ordinary 普通的', 'mean 平均的', 'median 中位数', 'typical 典型的'],
    antonyms: ['exceptional 异常的', 'extraordinary 非凡的', 'extreme 极端的'],
    examPoints: []
  },
  awake: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['conscious 清醒的', 'alert 警觉的', 'wakeful 醒着的', 'vigilant 警惕的'],
    antonyms: ['asleep 睡着的', 'unconscious 无意识的', 'sleeping 睡着的'],
    examPoints: []
  },
  award: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['prize 奖品', 'reward 奖赏', 'honor 荣誉', 'medal 奖章'],
    antonyms: ['penalty 惩罚', 'punishment 惩罚', 'fine 罚款'],
    examPoints: []
  },
  awful: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['terrible 可怕的', 'dreadful 可怕的', 'horrible 可怕的', 'appalling 骇人的'],
    antonyms: ['wonderful 极好的', 'pleasant 令人愉快的', 'delightful 令人快乐的'],
    examPoints: []
  },
  badly: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['poorly 糟糕地', 'inadequately 不充分地', 'incorrectly 错误地', 'faultily 有缺陷地'],
    antonyms: ['well 好地', 'properly 适当地', 'correctly 正确地'],
    examPoints: []
  },
  balance: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['equilibrium 平衡', 'stability 稳定', 'symmetry 对称', 'parity 均等'],
    antonyms: ['imbalance 不平衡', 'instability 不稳定'],
    examPoints: []
  },
  ban: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['prohibit 禁止', 'forbid 禁止', 'outlaw 宣布非法', 'block 阻止'],
    antonyms: ['allow 允许', 'permit 许可', 'approve 批准'],
    examPoints: []
  },
  basic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fundamental 基本的', 'essential 必要的', 'primary 首要的', 'elementary 基础的'],
    antonyms: ['advanced 高级的', 'complex 复杂的', 'secondary 次要的'],
    examPoints: []
  },
  battle: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fight 战斗', 'combat 搏斗', 'struggle 斗争', 'conflict 冲突'],
    antonyms: ['peace 和平', 'truce 休战', 'harmony 和谐'],
    examPoints: []
  },
  behalf: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['interest 利益', 'representation 代表', 'benefit 利益'],
    antonyms: ['detriment 损害'],
    examPoints: []
  },
  behave: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['act 行为', 'conduct 举止', 'perform 表现', 'comport 举止'],
    antonyms: ['misbehave 行为不端'],
    examPoints: []
  },
  beneficial: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['helpful 有益的', 'advantageous 有利的', 'profitable 有益的', 'favorable 有利的'],
    antonyms: ['harmful 有害的', 'detrimental 有害的', 'disadvantageous 不利的'],
    examPoints: []
  },
  betray: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['deceive 欺骗', 'double-cross 出卖', 'abandon 背弃', 'expose 背叛'],
    antonyms: ['protect 保护', 'support 支持', 'defend 捍卫'],
    examPoints: []
  },
  bid: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['offer 出价', 'propose 提议', 'tender 投标', 'propose 提议'],
    antonyms: ['withdraw 撤回', 'reject 拒绝'],
    examPoints: []
  },
  bind: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tie 绑', 'fasten 系紧', 'secure 固定', 'attach 缚'],
    antonyms: ['loosen 放松', 'untie 解开', 'release 释放'],
    examPoints: []
  },
  blank: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['empty 空白的', 'vacant 空的', 'void 空的', 'bare 光秃的'],
    antonyms: ['full 满的', 'filled 填满的', 'complete 完整的'],
    examPoints: []
  },
  bleed: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hemorrhage 大出血', 'flow 流出', 'leak 渗漏'],
    antonyms: ['clot 凝固', 'stop 停止'],
    examPoints: []
  },
  bless: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['consecrate 奉为神圣', 'sanctify 使神圣', 'favor 赐福', 'approve 赞同'],
    antonyms: ['curse 诅咒', 'damn 诅咒', 'condemn 谴责'],
    examPoints: []
  },
  block: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['obstruct 阻塞', 'hinder 阻碍', 'impede 阻止', 'bar 拦住'],
    antonyms: ['clear 清除', 'unblock 疏通', 'free 释放'],
    examPoints: []
  },
  bloom: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['flower 开花', 'blossom 盛开', 'flourish 繁茂', 'thrive 茁壮成长'],
    antonyms: ['wither 枯萎', 'fade 凋谢', 'wilt 枯萎'],
    examPoints: []
  },
  boast: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['brag 吹嘘', 'show off 炫耀', 'swagger 吹牛', 'exaggerate 夸大'],
    antonyms: ['belittle 贬低', 'minimize 轻描淡写', 'understate 谦虚'],
    examPoints: []
  },
  bond: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tie 联系', 'link 连接', 'connection 纽带', 'attachment 依附'],
    antonyms: ['separation 分离', 'break 断裂'],
    examPoints: []
  },
  bonus: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['reward 奖励', 'extra 额外津贴', 'premium 奖金', 'dividend 红利'],
    antonyms: ['penalty 罚款', 'deduction 扣除'],
    examPoints: []
  },
  boom: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['thrive 繁荣', 'flourish 兴旺', 'expand 扩张', 'prosper 繁荣'],
    antonyms: ['decline 衰退', 'slump 萧条', 'bust 破产'],
    examPoints: []
  },
  boost: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['increase 增加', 'raise 提升', 'elevate 提高', 'promote 促进'],
    antonyms: ['decrease 减少', 'lower 降低', 'diminish 减少'],
    examPoints: []
  },
  bounce: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['rebound 弹回', 'spring 弹跳', 'leap 跳跃', 'recoil 反弹'],
    antonyms: ['fall 落下', 'sink 下沉'],
    examPoints: []
  },
  bound: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tied 绑着的', 'confined 受限的', 'obliged 有义务的', 'destined 注定的'],
    antonyms: ['free 自由的', 'unbound 未绑的', 'loose 松的'],
    examPoints: []
  },
  brake: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['stop 停止', 'decelerate 减速', 'halt 停住'],
    antonyms: ['accelerate 加速', 'start 启动'],
    examPoints: []
  },
  brand: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['trademark 商标', 'label 标签', 'make 牌子', 'mark 标记'],
    antonyms: ['generic 通用的'],
    examPoints: []
  },
  breach: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['violation 违反', 'break 破坏', 'infraction 违背', 'gap 裂口'],
    antonyms: ['observance 遵守', 'compliance 顺从'],
    examPoints: []
  },
  breed: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['raise 饲养', 'rear 培育', 'produce 繁殖', 'generate 产生'],
    antonyms: ['destroy 毁灭', 'extinguish 灭绝'],
    examPoints: []
  },
  brief: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['short 简短的', 'concise 简明的', 'succinct 简洁的', 'curt 简略的'],
    antonyms: ['long 长的', 'lengthy 冗长的', 'extended 延伸的'],
    examPoints: []
  },
  brilliant: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bright 明亮的', 'radiant 光芒四射的', 'dazzling 耀眼的', 'intelligent 聪颖的'],
    antonyms: ['dull 暗淡的', 'dim 昏暗的', 'stupid 愚蠢的'],
    examPoints: []
  },
  broadcast: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['transmit 播送', 'air 播出', 'announce 宣布', 'disseminate 传播'],
    antonyms: ['receive 接收', 'suppress 压制'],
    examPoints: []
  },
  brood: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ponder 沉思', 'worry 担忧', 'fret 烦躁', 'dwell 细想'],
    antonyms: ['forget 忘记', 'dismiss 不再想'],
    examPoints: []
  },
  budget: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['plan 计划', 'allocation 分配', 'estimate 估算', 'financial plan 财务计划'],
    antonyms: ['overspending 超支'],
    examPoints: []
  },
  burden: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['load 负担', 'weight 重担', 'encumbrance 累赘', 'onus 责任'],
    antonyms: ['relief 解脱', 'ease 轻松', 'benefit 利益'],
    examPoints: []
  },
  burst: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['explode 爆炸', 'break 破裂', 'erupt 喷发', 'rupture 断裂'],
    antonyms: ['close 关闭', 'mend 修补', 'heal 愈合'],
    examPoints: []
  },
  cabin: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['cottage 小屋', 'hut 茅舍', 'shack 简陋小屋', 'bungalow 平房'],
    antonyms: ['mansion 豪宅', 'palace 宫殿'],
    examPoints: []
  },
  cabinet: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['cupboard 橱柜', 'closet 壁橱', 'wardrobe 衣柜', 'console 控制台'],
    antonyms: ['open shelf 开放式架子'],
    examPoints: []
  },
  calculate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['compute 计算', 'reckon 估算', 'figure 算出', 'determine 确定'],
    antonyms: ['guess 猜测', 'estimate 估计'],
    examPoints: []
  },
  campaign: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['crusade 运动', 'drive 运动', 'movement 运动', 'operation 行动'],
    antonyms: ['inaction 不作为', 'idleness 懒散'],
    examPoints: []
  },
  cancel: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['abolish 废除', 'revoke 撤销', 'annul 取消', 'call off 取消'],
    antonyms: ['confirm 确认', 'authorize 授权', 'schedule 安排'],
    examPoints: []
  },
  candidate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['applicant 申请人', 'nominee 被提名人', 'aspirant 有抱负者', 'contender 竞争者'],
    antonyms: ['incumbent 现任者', 'voter 选民'],
    examPoints: []
  },
  capacity: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ability 能力', 'capability 能力', 'volume 容量', 'potential 潜力'],
    antonyms: ['incapacity 无能力', 'limitation 局限'],
    examPoints: []
  },
  capture: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['seize 抓取', 'catch 捕捉', 'arrest 逮捕', 'grab 夺取'],
    antonyms: ['release 释放', 'free 释放', 'let go 放走'],
    examPoints: []
  },
  career: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['profession 职业', 'occupation 职业', 'vocation 职业', 'livelihood 生计'],
    antonyms: ['hobby 爱好', 'pastime 消遣'],
    examPoints: []
  },
  casual: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['informal 非正式的', 'relaxed 随意的', 'unplanned 无计划的', 'occasional 偶然的'],
    antonyms: ['formal 正式的', 'planned 计划的', 'serious 严肃的'],
    examPoints: []
  },
  cease: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['stop 停止', 'halt 停住', 'end 结束', 'discontinue 中止'],
    antonyms: ['continue 继续', 'start 开始', 'begin 开始'],
    examPoints: []
  },
  celebrate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['commemorate 纪念', 'observe 庆祝', 'honor 致敬', 'rejoice 欢庆'],
    antonyms: ['mourn 哀悼', 'grieve 悲伤'],
    examPoints: []
  },
  cement: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['glue 胶合', 'bond 粘合', 'solidify 巩固', 'fasten 固定'],
    antonyms: ['loosen 松开', 'separate 分离'],
    examPoints: []
  },
  ceremony: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ritual 仪式', 'rite 典礼', 'observance 仪式', 'celebration 庆典'],
    antonyms: ['informality 非正式'],
    examPoints: []
  },
  certificate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['document 文件', 'license 执照', 'credential 证书', 'diploma 文凭'],
    antonyms: ['revocation 撤销'],
    examPoints: []
  },
  channel: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['passage 通道', 'conduit 管道', 'route 路线', 'strait 海峡'],
    antonyms: ['blockade 封锁'],
    examPoints: []
  },
  character: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['nature 性格', 'personality 个性', 'trait 特征', 'quality 品质'],
    antonyms: ['anonymity 匿名'],
    examPoints: []
  },
  charm: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['attract 吸引', 'captivate 迷住', 'enchant 使着迷', 'fascinate 使着迷'],
    antonyms: ['repel 排斥', 'disgust 使厌恶'],
    examPoints: []
  },
  chase: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pursue 追逐', 'follow 追随', 'hunt 狩猎', 'track 追踪'],
    antonyms: ['flee 逃跑', 'evade 逃避', 'avoid 避开'],
    examPoints: []
  },
  cheap: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['inexpensive 便宜的', 'affordable 负担得起的', 'low-priced 低价的', 'economical 经济的'],
    antonyms: ['expensive 昂贵的', 'costly 昂贵的', 'priceless 无价的'],
    examPoints: []
  },
  cheat: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['deceive 欺骗', 'trick 哄骗', 'defraud 诈取', 'swindle 诈骗'],
    antonyms: ['honest 诚实的', 'fair 公平的'],
    examPoints: []
  },
  check: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['inspect 检查', 'examine 检查', 'verify 核实', 'control 控制'],
    antonyms: ['neglect 忽视', 'ignore 忽略'],
    examPoints: []
  },
  cheerful: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['happy 快乐的', 'joyful 高兴的', 'merry 愉快的', 'upbeat 乐观的'],
    antonyms: ['gloomy 阴郁的', 'sad 悲伤的', 'depressed 沮丧的'],
    examPoints: []
  },
  chief: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['primary 首要的', 'principal 主要的', 'main 主要的', 'leading 领先的'],
    antonyms: ['secondary 次要的', 'minor 次要的', 'subordinate 从属的'],
    examPoints: []
  },
  circle: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ring 环', 'loop 圈', 'round 圆形', 'orbit 轨道'],
    antonyms: ['line 直线'],
    examPoints: []
  },
  circumstance: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['situation 情况', 'condition 条件', 'event 事件', 'fact 事实'],
    antonyms: ['plan 计划'],
    examPoints: []
  },
  clarify: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['explain 解释', 'elucidate 阐明', 'illuminate 说明', 'clear up 澄清'],
    antonyms: ['confuse 使困惑', 'obscure 模糊', 'muddle 搞乱'],
    examPoints: []
  },
  classic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['traditional 传统的', 'timeless 经典的', 'standard 标准的', 'model 典范的'],
    antonyms: ['modern 现代的', 'innovative 创新的', 'novel 新颖的'],
    examPoints: []
  },
  classify: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['categorize 分类', 'sort 分类', 'arrange 整理', 'group 分组'],
    antonyms: ['disorganize 打乱', 'jumble 混杂'],
    examPoints: []
  },
  climate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['weather 天气', 'conditions 气候条件', 'atmosphere 氛围'],
    antonyms: ['weather change 天气变化'],
    examPoints: []
  },
  climb: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ascend 攀登', 'scale 攀爬', 'mount 登上', 'rise 上升'],
    antonyms: ['descend 下降', 'drop 下降', 'fall 落下'],
    examPoints: []
  },
  close: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'closer', superlative: 'closest' },
    synonyms: ['shut 关闭', 'seal 封闭', 'lock 锁上', 'secure 关紧'],
    antonyms: ['open 打开', 'unlock 开锁', 'unseal 启封'],
    examPoints: []
  },
  cloth: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fabric 织物', 'material 布料', 'textile 纺织品', 'weave 编织物'],
    antonyms: ['leather 皮革'],
    examPoints: []
  },
  clue: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hint 线索', 'lead 线索', 'signal 信号', 'indication 指示'],
    antonyms: ['mystery 谜', 'puzzle 谜题'],
    examPoints: []
  },
  cluster: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['group 群', 'bunch 束', 'cluster 簇', 'gather 聚集'],
    antonyms: ['scatter 分散', 'disperse 散开'],
    examPoints: []
  },
  coach: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['train 训练', 'guide 指导', 'instruct 指导', 'mentor 导师'],
    antonyms: ['student 学生', 'beginner 初学者'],
    examPoints: []
  },
  coalition: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['alliance 联盟', 'union 联合', 'partnership 伙伴关系', 'federation 联邦'],
    antonyms: ['division 分裂', 'split 分裂'],
    examPoints: []
  },
  coarse: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['rough 粗糙的', 'crude 粗糙的', 'harsh 粗糙的', 'uneven 不平整的'],
    antonyms: ['smooth 光滑的', 'fine 细腻的', 'refined 精致的'],
    examPoints: []
  },
  collide: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['crash 碰撞', 'smash 猛撞', 'bump 撞击', 'clash 冲突'],
    antonyms: ['avoid 避开', 'miss 错过'],
    examPoints: []
  },
  combat: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fight 战斗', 'battle 战役', 'struggle 斗争', 'conflict 冲突'],
    antonyms: ['peace 和平', 'truce 休战'],
    examPoints: []
  },
  combine: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['merge 合并', 'unite 联合', 'join 加入', 'blend 融合'],
    antonyms: ['separate 分开', 'divide 分割', 'split 分裂'],
    examPoints: []
  },
  comfort: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['console 安慰', 'soothe 安抚', 'relieve 缓解', 'ease 减轻'],
    antonyms: ['distress 使痛苦', 'torment 折磨', 'agitate 使不安'],
    examPoints: []
  },
  command: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['order 命令', 'direct 指挥', 'instruct 指示', 'govern 统治'],
    antonyms: ['obey 服从', 'submit 屈从', 'comply 遵从'],
    examPoints: []
  },
  commemorate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['celebrate 庆祝', 'honor 致敬', 'remember 纪念', 'memorialize 纪念'],
    antonyms: ['forget 忘记', 'ignore 忽视'],
    examPoints: []
  },
  comment: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['remark 评论', 'observe 评述', 'note 注释', 'state 陈述'],
    antonyms: ['silence 沉默', 'withhold 保留'],
    examPoints: []
  },
  compact: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['condensed 压缩的', 'compressed 紧凑的', 'concise 简明的', 'dense 密集的'],
    antonyms: ['loose 松散的', 'spread 分散的', 'expanded 扩展的'],
    examPoints: []
  },
  compose: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['write 写作', 'create 创作', 'form 构成', 'make 组成'],
    antonyms: ['destroy 毁坏', 'dismantle 拆除'],
    examPoints: []
  },
  compound: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['combine 混合', 'mixture 混合物', 'composite 合成物', 'blend 混合'],
    antonyms: ['separate 分开', 'divide 分割'],
    examPoints: []
  },
  conceive: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['imagine 想象', 'think 构思', 'devise 设计', 'invent 发明'],
    antonyms: ['misunderstand 误解', 'disbelieve 不信'],
    examPoints: []
  },
  condemn: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['censure 谴责', 'denounce 谴责', 'criticize 批评', 'convict 定罪'],
    antonyms: ['praise 赞扬', 'approve 赞同', 'acquit 宣告无罪'],
    examPoints: []
  },
  confess: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['admit 承认', 'acknowledge 供认', 'concede 让步', 'own up 坦白'],
    antonyms: ['deny 否认', 'conceal 隐藏', 'disclaim 否认'],
    examPoints: []
  },
  conflict: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['clash 冲突', 'dispute 争端', 'struggle 斗争', 'fight 战斗'],
    antonyms: ['harmony 和谐', 'peace 和平', 'agreement 一致'],
    examPoints: []
  },
  confront: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['face 面对', 'encounter 遭遇', 'challenge 挑战', 'oppose 反对'],
    antonyms: ['avoid 避开', 'evade 逃避', 'retreat 撤退'],
    examPoints: []
  },
  confuse: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bewilder 使迷惑', 'perplex 使困惑', 'baffle 使迷惑', 'muddle 搞乱'],
    antonyms: ['clarify 澄清', 'explain 解释', 'enlighten 启发'],
    examPoints: []
  },
  connect: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['join 连接', 'link 连接', 'attach 连接', 'unite 联合'],
    antonyms: ['disconnect 断开', 'separate 分开', 'detach 分离'],
    examPoints: []
  },
  conscious: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['aware 意识到的', 'alert 警觉的', 'awake 清醒的', 'mindful 留意的'],
    antonyms: ['unconscious 无意识的', 'asleep 睡着的', 'unaware 未意识到的'],
    examPoints: []
  },
  consensus: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['agreement 一致', 'accord 共识', 'unanimity 一致同意', 'harmony 和谐'],
    antonyms: ['disagreement 分歧', 'discord 不和', 'conflict 冲突'],
    examPoints: []
  },
  consequence: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['result 结果', 'outcome 后果', 'effect 影响', 'aftermath 后果'],
    antonyms: ['cause 原因', 'origin 起源'],
    examPoints: []
  },
  conservative: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['traditional 传统的', 'cautious 谨慎的', 'moderate 适度的', 'conventional 保守的'],
    antonyms: ['liberal 自由的', 'radical 激进的', 'progressive 进步的'],
    examPoints: []
  },
  constant: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['steady 稳定的', 'unchanging 不变的', 'continuous 持续的', 'faithful 忠实的'],
    antonyms: ['variable 可变的', 'occasional 偶尔的', 'intermittent 间歇的'],
    examPoints: []
  },
  construct: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['build 建造', 'erect 建立', 'assemble 组装', 'create 创建'],
    antonyms: ['demolish 拆除', 'destroy 破坏', 'dismantle 拆卸'],
    examPoints: []
  },
  consult: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['advise 咨询', 'discuss 商议', 'confer 商量', 'seek advice 请教'],
    antonyms: ['ignore 忽视', 'decide alone 独自决定'],
    examPoints: []
  },
  consume: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['use 使用', 'eat 吃', 'devour 吞食', 'expend 消耗'],
    antonyms: ['produce 生产', 'create 创造', 'save 节省'],
    examPoints: []
  },
  contact: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['reach 联系', 'connect 连接', 'touch 接触', 'communicate 沟通'],
    antonyms: ['avoid 避开', 'isolate 隔离'],
    examPoints: []
  },
  contain: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hold 容纳', 'include 包含', 'comprise 组成', 'enclose 围住'],
    antonyms: ['exclude 排除', 'omit 省略', 'release 释放'],
    examPoints: []
  },
  contempt: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['scorn 蔑视', 'disdain 鄙视', 'disregard 蔑视', 'mockery 嘲笑'],
    antonyms: ['respect 尊重', 'esteem 尊敬', 'admiration 钦佩'],
    examPoints: []
  },
  contest: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['competition 竞赛', 'match 比赛', 'struggle 争夺', 'dispute 争辩'],
    antonyms: ['yield 让步', 'surrender 投降'],
    examPoints: []
  },
  context: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['background 背景', 'setting 环境', 'circumstance 背景', 'situation 情境'],
    antonyms: ['isolation 孤立'],
    examPoints: []
  },
  continual: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['constant 不断的', 'repeated 反复的', 'frequent 频繁的', 'unceasing 不停的'],
    antonyms: ['occasional 偶尔的', 'intermittent 间歇的', 'rare 稀少的'],
    examPoints: []
  },
  contract: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['agreement 协议', 'pact 契约', 'compact 合同', 'shrink 收缩'],
    antonyms: ['expand 扩张', 'stretch 拉伸', 'dissolve 解除'],
    examPoints: []
  },
  contradict: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['oppose 反驳', 'deny 否认', 'dispute 反驳', 'refute 驳斥'],
    antonyms: ['confirm 确认', 'agree 同意', 'support 支持'],
    examPoints: []
  },
  contrast: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['compare 对比', 'differ 差异', 'distinguish 区别', 'oppose 对照'],
    antonyms: ['resemble 相似', 'match 匹配', 'resemble 类似'],
    examPoints: []
  },
  controversial: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['debatable 有争议的', 'disputed 有争议的', 'contentious 引起争议的', 'arguable 可争辩的'],
    antonyms: ['uncontroversial 无争议的', 'settled 已定的', 'agreed 一致的'],
    examPoints: []
  },
  convention: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['custom 惯例', 'tradition 传统', 'practice 惯例', 'assembly 大会'],
    antonyms: ['innovation 创新', 'novelty 新奇'],
    examPoints: []
  },
  convert: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['change 改变', 'transform 转变', 'alter 转换', 'adapt 改编'],
    antonyms: ['maintain 保持', 'preserve 保留'],
    examPoints: []
  },
  cooperate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['collaborate 合作', 'unite 联合', 'assist 协助', 'work together 共同工作'],
    antonyms: ['compete 竞争', 'oppose 反对', 'resist 抵抗'],
    examPoints: []
  },
  cope: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['manage 应对', 'handle 处理', 'deal with 应付', 'endure 忍受'],
    antonyms: ['surrender 投降', 'yield 屈服'],
    examPoints: []
  },
  correct: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['right 正确的', 'accurate 准确的', 'exact 确切的', 'proper 恰当的'],
    antonyms: ['incorrect 不正确的', 'wrong 错误的', 'faulty 有缺陷的'],
    examPoints: []
  },
  correspond: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['match 匹配', 'agree 一致', 'communicate 通信', 'equate 等同'],
    antonyms: ['differ 不同', 'clash 冲突'],
    examPoints: []
  },
  count: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tally 计数', 'calculate 计算', 'number 计数', 'include 包括'],
    antonyms: ['estimate 估计', 'guess 猜测', 'exclude 排除'],
    examPoints: []
  },
  course: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['route 路线', 'path 路径', 'direction 方向', 'process 过程'],
    antonyms: ['detour 绕道'],
    examPoints: []
  },
  court: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tribunal 法庭', 'trial 审判', 'yard 院子', 'courtyard 庭院'],
    antonyms: ['freedom 自由'],
    examPoints: []
  },
  cover: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['conceal 掩盖', 'hide 遮盖', 'protect 保护', 'include 包含'],
    antonyms: ['expose 暴露', 'reveal 揭示', 'uncover 揭开'],
    examPoints: []
  },
  credit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['acknowledge 归功', 'trust 信任', 'recognition 认可', 'loan 信贷'],
    antonyms: ['debit 借记', 'blame 归咎', 'discredit 败坏名誉'],
    examPoints: []
  },
  crime: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['offense 犯罪', 'felony 重罪', 'misdeed 不法行为', 'violation 违法'],
    antonyms: ['innocence 无辜', 'virtue 美德'],
    examPoints: []
  },
  crisis: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['emergency 危机', 'catastrophe 灾难', 'turning point 转折点', 'crunch 危机'],
    antonyms: ['stability 稳定', 'calm 平静'],
    examPoints: []
  },
  criterion: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['standard 标准', 'measure 标准', 'benchmark 基准', 'principle 准则'],
    antonyms: ['arbitrariness 随意性'],
    examPoints: []
  },
  critical: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['crucial 关键的', 'vital 至关重要的', 'essential 必要的', 'urgent 紧迫的'],
    antonyms: ['trivial 琐碎的', 'insignificant 无关紧要的', 'minor 次要的'],
    examPoints: []
  },
  crucial: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['critical 关键的', 'vital 至关重要的', 'essential 必不可少的', 'decisive 决定性的'],
    antonyms: ['trivial 琐碎的', 'insignificant 无关紧要的', 'minor 次要的'],
    examPoints: []
  },
  curious: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['inquisitive 好奇的', 'interested 感兴趣的', 'prying 爱打听的', 'inquisitive 好问的'],
    antonyms: ['indifferent 漠不关心的', 'uninterested 不感兴趣的', 'unconcerned 不关心的'],
    examPoints: []
  },
  current: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['present 当前的', 'contemporary 当代的', 'ongoing 进行中的', 'prevailing 流行的'],
    antonyms: ['past 过去的', 'obsolete 过时的', 'outdated 陈旧的'],
    examPoints: []
  },
  damp: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['moist 潮湿的', 'wet 湿的', 'humid 湿润的', 'clammy 黏湿的'],
    antonyms: ['dry 干燥的', 'arid 干旱的'],
    examPoints: []
  },
  dare: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['venture 敢于', 'risk 冒险', 'challenge 挑战', 'brave 勇敢面对'],
    antonyms: ['avoid 避开', 'retreat 退缩'],
    examPoints: []
  },
  data: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['information 信息', 'facts 事实', 'statistics 统计数据', 'records 记录'],
    antonyms: ['fiction 虚构'],
    examPoints: []
  },
  debate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['discuss 讨论', 'argue 争论', 'dispute 辩论', 'deliberate 审议'],
    antonyms: ['agree 同意', 'consent 赞同'],
    examPoints: []
  },
  decade: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ten years 十年', 'period 时期', 'era 时代'],
    antonyms: ['year 年', 'moment 瞬间'],
    examPoints: []
  },
  decay: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['rot 腐烂', 'decompose 分解', 'deteriorate 恶化', 'decline 衰退'],
    antonyms: ['grow 生长', 'flourish 繁荣', 'thrive 茁壮成长'],
    examPoints: []
  },
  deceive: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['trick 欺骗', 'fool 愚弄', 'mislead 误导', 'cheat 欺骗'],
    antonyms: ['inform 告知', 'enlighten 启发', 'guide 指引'],
    examPoints: []
  },
  decorate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['adorn 装饰', 'ornament 点缀', 'embellish 美化', 'beautify 美化'],
    antonyms: ['strip 剥去', 'deface 损毁外观'],
    examPoints: []
  },
  defect: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['flaw 缺陷', 'fault 缺点', 'blemish 瑕疵', 'shortcoming 缺点'],
    antonyms: ['merit 优点', 'perfection 完美', 'virtue 美德'],
    examPoints: []
  },
  define: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['explain 解释', 'describe 描述', 'determine 确定', 'specify 明确'],
    antonyms: ['confuse 使困惑', 'obscure 模糊'],
    examPoints: []
  },
  defy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['resist 抵抗', 'oppose 反对', 'challenge 挑战', 'disobey 违抗'],
    antonyms: ['obey 服从', 'submit 屈从', 'yield 让步'],
    examPoints: []
  },
  delete: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['remove 删除', 'erase 擦除', 'cancel 取消', 'eliminate 消除'],
    antonyms: ['add 添加', 'insert 插入', 'include 包括'],
    examPoints: []
  },
  delicate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fragile 脆弱的', 'fine 精致的', 'subtle 微妙的', 'sensitive 敏感的'],
    antonyms: ['sturdy 坚固的', 'robust 强健的', 'coarse 粗糙的'],
    examPoints: []
  },
  demonstrate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['show 展示', 'prove 证明', 'illustrate 说明', 'exhibit 展示'],
    antonyms: ['conceal 隐藏', 'hide 隐藏'],
    examPoints: []
  },
  depart: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['leave 离开', 'go 去', 'exit 离去', 'withdraw 撤离'],
    antonyms: ['arrive 到达', 'come 来', 'remain 停留'],
    examPoints: []
  },
  deposit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['store 储存', 'place 放置', 'lay down 存放', 'save 储蓄'],
    antonyms: ['withdraw 提取', 'remove 移除'],
    examPoints: []
  },
  depress: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sadden 使悲伤', 'discourage 使气馁', 'deject 使沮丧', 'lower 降低'],
    antonyms: ['encourage 鼓励', 'cheer 使振奋', 'inspire 激励'],
    examPoints: []
  },
  derive: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['obtain 获得', 'gain 获得', 'acquire 取得', 'originate 源于'],
    antonyms: ['lose 失去', 'surrender 放弃'],
    examPoints: []
  },
  descend: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['drop 下降', 'fall 落下', 'decline 下降', 'go down 下去'],
    antonyms: ['ascend 上升', 'climb 攀登', 'rise 升起'],
    examPoints: []
  },
  desert: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['abandon 抛弃', 'forsake 遗弃', 'leave 离开', 'quit 放弃'],
    antonyms: ['stay 停留', 'remain 留下', 'support 支持'],
    examPoints: []
  },
  design: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['plan 设计', 'create 设计', 'devise 构思', 'draft 起草'],
    antonyms: ['improvise 即兴', 'destroy 毁坏'],
    examPoints: []
  },
  desperate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hopeless 绝望的', 'frantic 疯狂的', 'dire 极端的', 'urgent 紧急的'],
    antonyms: ['hopeful 充满希望的', 'optimistic 乐观的', 'calm 平静的'],
    examPoints: []
  },
  despite: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['although 尽管', 'in spite of 尽管', 'notwithstanding 尽管'],
    antonyms: ['because 因为', 'due to 由于'],
    examPoints: []
  },
  detect: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['discover 发现', 'notice 注意到', 'observe 观察', 'spot 发现'],
    antonyms: ['overlook 忽略', 'miss 错过', 'ignore 忽视'],
    examPoints: []
  },
  device: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tool 工具', 'instrument 仪器', 'gadget 装置', 'mechanism 机制'],
    antonyms: ['natural object 自然物'],
    examPoints: []
  },
  dialect: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['accent 口音', 'language 方言', 'vernacular 土话', 'patois 方言'],
    antonyms: ['standard language 标准语'],
    examPoints: []
  },
  differ: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['vary 不同', 'contrast 差异', 'diverge 分歧', 'disagree 不同意'],
    antonyms: ['match 匹配', 'agree 一致', 'resemble 相似'],
    examPoints: []
  },
  digest: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['absorb 吸收', 'assimilate 同化', 'comprehend 理解', 'process 消化'],
    antonyms: ['reject 拒绝', 'expel 排出'],
    examPoints: []
  },
  dignity: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['honor 尊严', 'self-respect 自尊', 'nobility 高贵', 'prestige 威望'],
    antonyms: ['humiliation 羞辱', 'disgrace 耻辱'],
    examPoints: []
  },
  dilemma: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['predicament 困境', 'quandary 窘境', 'impasse 僵局', 'difficulty 困难'],
    antonyms: ['solution 解决方案', 'resolution 解决'],
    examPoints: []
  },
  diminish: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['decrease 减少', 'reduce 缩减', 'lessen 减少', 'shrink 缩小'],
    antonyms: ['increase 增加', 'enlarge 扩大', 'expand 扩张'],
    examPoints: []
  },
  dip: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['submerge 浸入', 'plunge 投入', 'immerse 浸没', 'lower 降低'],
    antonyms: ['raise 升起', 'lift 举起'],
    examPoints: []
  },
  direct: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['guide 指引', 'lead 引导', 'conduct 指挥', 'manage 管理'],
    antonyms: ['follow 跟随', 'obey 服从', 'mislead 误导'],
    examPoints: []
  },
  disagree: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['differ 不同意', 'dispute 争辩', 'object 反对', 'oppose 反对'],
    antonyms: ['agree 同意', 'consent 赞同', 'concur 一致'],
    examPoints: []
  },
  disappoint: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['frustrate 使沮丧', 'dismay 使失望', 'let down 辜负', 'dishearten 使灰心'],
    antonyms: ['satisfy 使满意', 'please 使高兴', 'delight 使快乐'],
    examPoints: []
  },
  disaster: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['catastrophe 灾难', 'calamity 灾祸', 'tragedy 悲剧', 'devastation 毁灭'],
    antonyms: ['blessing 祝福', 'triumph 胜利', 'success 成功'],
    examPoints: []
  },
  discard: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['dispose 丢弃', 'reject 抛弃', 'abandon 放弃', 'throw away 扔掉'],
    antonyms: ['keep 保留', 'retain 保持', 'save 保存'],
    examPoints: []
  },
  discipline: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['train 训练', 'control 控制', 'regulate 约束', 'order 秩序'],
    antonyms: ['chaos 混乱', 'disorder 无序'],
    examPoints: []
  },
  disclose: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['reveal 揭露', 'uncover 揭开', 'expose 暴露', 'divulge 泄露'],
    antonyms: ['conceal 隐藏', 'hide 隐藏', 'cover 掩盖'],
    examPoints: []
  },
  discount: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['reduction 折扣', 'deduction 扣除', 'allowance 折让', 'cut 削减'],
    antonyms: ['premium 溢价', 'surcharge 附加费'],
    examPoints: []
  },
  discuss: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['debate 讨论', 'confer 商议', 'talk over 商量', 'examine 审议'],
    antonyms: ['ignore 忽视', 'avoid 回避'],
    examPoints: []
  },
  disease: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['illness 疾病', 'sickness 病', 'ailment 病痛', 'disorder 疾病'],
    antonyms: ['health 健康', 'wellness 健康'],
    examPoints: []
  },
  disorder: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['chaos 混乱', 'confusion 混乱', 'turmoil 动荡', 'mess 混乱'],
    antonyms: ['order 秩序', 'harmony 和谐', 'organization 有序'],
    examPoints: []
  },
  display: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['show 展示', 'exhibit 展览', 'demonstrate 展示', 'reveal 展现'],
    antonyms: ['conceal 隐藏', 'hide 隐藏', 'cover 掩盖'],
    examPoints: []
  },
  dispose: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['discard 丢弃', 'get rid of 处理掉', 'arrange 安排', 'eliminate 消除'],
    antonyms: ['keep 保留', 'retain 保持', 'acquire 获得'],
    examPoints: []
  },
  dispute: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['argue 争论', 'debate 辩论', 'contest 争辩', 'conflict 冲突'],
    antonyms: ['agree 同意', 'consent 赞同', 'concede 让步'],
    examPoints: []
  },
  dissolve: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['melt 融化', 'disperse 消散', 'dissipate 消散', 'break up 分解'],
    antonyms: ['solidify 凝固', 'freeze 冻结', 'form 形成'],
    examPoints: []
  },
  distinct: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['clear 清晰的', 'definite 明确的', 'different 不同的', 'separate 分开的'],
    antonyms: ['vague 模糊的', 'indistinct 不清晰的', 'similar 相似的'],
    examPoints: []
  },
  distort: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['twist 扭曲', 'deform 变形', 'misrepresent 歪曲', 'warp 使变形'],
    antonyms: ['straighten 弄直', 'correct 纠正', 'represent 准确表达'],
    examPoints: []
  },
  distract: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['divert 转移', 'confuse 使分心', 'disturb 打扰', 'sidetrack 使偏离'],
    antonyms: ['focus 集中', 'concentrate 专心', 'attract 吸引'],
    examPoints: []
  },
  distribute: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['share 分发', 'dispense 分配', 'allocate 分配', 'spread 分散'],
    antonyms: ['collect 收集', 'gather 聚集', 'hoard 囤积'],
    examPoints: []
  },
  disturb: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['interrupt 打扰', 'bother 烦扰', 'upset 使不安', 'agitate 使烦躁'],
    antonyms: ['calm 使平静', 'soothe 安抚', 'settle 安顿'],
    examPoints: []
  },
  diverse: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['varied 多样的', 'different 不同的', 'various 各种各样的', 'distinct 不同的'],
    antonyms: ['similar 相似的', 'identical 相同的', 'uniform 统一的'],
    examPoints: []
  },
  divide: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['separate 分开', 'split 分裂', 'partition 划分', 'segment 分割'],
    antonyms: ['unite 联合', 'combine 合并', 'join 加入'],
    examPoints: []
  },
  doctrine: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['principle 原则', 'belief 信条', 'teaching 教义', 'creed 信条'],
    antonyms: ['heresy 异端'],
    examPoints: []
  },
  domestic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['household 家庭的', 'internal 国内的', 'native 本国的', 'family 家庭的'],
    antonyms: ['foreign 外国的', 'international 国际的', 'wild 野生的'],
    examPoints: []
  },
  dominant: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['prevailing 占主导的', 'principal 主要的', 'predominant 占优势的', 'superior 占优的'],
    antonyms: ['subordinate 从属的', 'inferior 劣势的', 'weak 弱的'],
    examPoints: []
  },
  dominate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['control 控制', 'rule 统治', 'govern 治理', 'command 指挥'],
    antonyms: ['submit 屈从', 'obey 服从', 'yield 让步'],
    examPoints: []
  },
  donate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['give 捐赠', 'contribute 贡献', 'bestow 赠予', 'present 赠送'],
    antonyms: ['take 取走', 'receive 接收', 'keep 保留'],
    examPoints: []
  },
  draft: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sketch 草图', 'outline 提纲', 'prepare 起草', 'plan 计划'],
    antonyms: ['finalize 定稿', 'complete 完成'],
    examPoints: []
  },
  drain: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['empty 排空', 'deplete 耗尽', 'exhaust 耗尽', 'withdraw 抽走'],
    antonyms: ['fill 填满', 'replenish 补充', 'supply 供给'],
    examPoints: []
  },
  drama: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['play 戏剧', 'theater 戏剧', 'performance 表演', 'spectacle 场面'],
    antonyms: ['comedy 喜剧'],
    examPoints: []
  },
  dramatic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['theatrical 戏剧性的', 'striking 引人注目的', 'vivid 生动的', 'intense 强烈的'],
    antonyms: ['subtle 微妙的', 'mild 温和的', 'dull 平淡的'],
    examPoints: []
  },
  draw: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sketch 绘制', 'pull 拉', 'drag 拖', 'attract 吸引'],
    antonyms: ['push 推', 'repel 排斥'],
    examPoints: []
  },
  drawback: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['disadvantage 缺点', 'flaw 缺陷', 'hindrance 障碍', 'shortcoming 缺点'],
    antonyms: ['advantage 优势', 'benefit 益处', 'strength 优点'],
    examPoints: []
  },
  dream: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fantasy 幻想', 'vision 愿景', 'illusion 幻觉', 'aspiration 渴望'],
    antonyms: ['reality 现实', 'fact 事实'],
    examPoints: []
  },
  drift: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['float 漂浮', 'wander 漂泊', 'stray 偏离', 'roam 漫游'],
    antonyms: ['stay 停留', 'remain 保持', 'anchor 锚定'],
    examPoints: []
  },
  drop: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fall 落下', 'decline 下降', 'plunge 骤降', 'decrease 减少'],
    antonyms: ['rise 上升', 'increase 增加', 'climb 攀升'],
    examPoints: []
  },
  drown: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['submerge 淹没', 'immerse 浸没', 'flood 淹没', 'overwhelm 淹没'],
    antonyms: ['float 漂浮', 'surface 浮出水面'],
    examPoints: []
  },
  drug: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['medicine 药物', 'medication 药物', 'pharmaceutical 药剂', 'remedy 药物'],
    antonyms: ['poison 毒药'],
    examPoints: []
  },
  due: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['owed 应付的', 'payable 应付的', 'expected 预期的', 'proper 适当的'],
    antonyms: ['undue 不当的', 'unexpected 意外的'],
    examPoints: []
  },
  eager: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['keen 渴望的', 'enthusiastic 热切的', 'anxious 渴望的', 'avid 热切的'],
    antonyms: ['indifferent 漠不关心的', 'uninterested 不感兴趣的', 'reluctant 不情愿的'],
    examPoints: []
  },
  ease: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['comfort 舒适', 'relief 缓解', 'ease 轻松', 'facilitate 使容易'],
    antonyms: ['difficulty 困难', 'hardship 艰难', 'discomfort 不适'],
    examPoints: []
  },
  economy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['thrift 节约', 'saving 节省', 'finance 经济', 'management 管理'],
    antonyms: ['extravagance 奢侈', 'waste 浪费'],
    examPoints: []
  },
  edit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['revise 修订', 'modify 修改', 'correct 校正', 'amend 修正'],
    antonyms: ['corrupt 破坏', 'spoil 损坏'],
    examPoints: []
  },
  efficient: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['effective 有效的', 'productive 高效的', 'competent 有能力的', 'capable 有能力的'],
    antonyms: ['inefficient 低效的', 'incompetent 无能的', 'wasteful 浪费的'],
    examPoints: []
  },
  elaborate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['detailed 详细的', 'complex 复杂的', 'intricate 精细的', 'thorough 详尽的'],
    antonyms: ['simple 简单的', 'brief 简短的', 'plain 朴素的'],
    examPoints: []
  },
  elect: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['choose 选择', 'select 挑选', 'vote 选举', 'appoint 任命'],
    antonyms: ['reject 拒绝', 'dismiss 解雇'],
    examPoints: []
  },
  element: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['component 组成部分', 'factor 要素', 'ingredient 成分', 'part 部分'],
    antonyms: ['whole 整体', 'total 总体'],
    examPoints: []
  },
  elevate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['raise 提升', 'lift 举起', 'promote 提升', 'exalt 提高'],
    antonyms: ['lower 降低', 'depress 压低', 'demote 降级'],
    examPoints: []
  },
  eliminate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['remove 消除', 'eradicate 根除', 'exclude 排除', 'abolish 废除'],
    antonyms: ['include 包括', 'add 添加', 'retain 保持'],
    examPoints: []
  },
  embarrass: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['humiliate 使尴尬', 'shame 使羞愧', 'disconcert 使难堪', 'fluster 使慌张'],
    antonyms: ['comfort 安慰', 'reassure 使安心'],
    examPoints: []
  },
  emerge: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['appear 出现', 'arise 产生', 'surface 浮现', 'come out 出来'],
    antonyms: ['disappear 消失', 'vanish 消失', 'submerge 沉没'],
    examPoints: []
  },
  emotion: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['feeling 情感', 'sentiment 情绪', 'passion 激情', 'sensation 感觉'],
    antonyms: ['apathy 冷漠', 'indifference 漠然'],
    examPoints: []
  },
  emphasis: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['stress 强调', 'importance 重要性', 'accent 着重', 'priority 优先'],
    antonyms: ['neglect 忽视', 'triviality 琐碎'],
    examPoints: []
  },
  enable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['empower 使能够', 'allow 允许', 'facilitate 促进', 'permit 许可'],
    antonyms: ['prevent 阻止', 'disable 使无能', 'hinder 阻碍'],
    examPoints: []
  },
  encounter: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['meet 遇到', 'face 面对', 'confront 遭遇', 'experience 经历'],
    antonyms: ['avoid 避开', 'evade 逃避'],
    examPoints: []
  },
  endure: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bear 忍受', 'tolerate 容忍', 'withstand 承受', 'suffer 忍受'],
    antonyms: ['surrender 投降', 'yield 屈服', 'quit 放弃'],
    examPoints: []
  },
  energy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['vitality 活力', 'power 能量', 'strength 力量', ' vigor 精力'],
    antonyms: ['lethargy 无精打采', 'weakness 虚弱', 'exhaustion 疲惫'],
    examPoints: []
  },
  enforce: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['implement 实施', 'execute 执行', 'compel 强迫', 'impose 强加'],
    antonyms: ['ignore 忽视', 'neglect 忽略', 'waive 放弃'],
    examPoints: []
  },
  enhance: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['improve 改善', 'boost 提升', 'strengthen 加强', 'augment 增加'],
    antonyms: ['diminish 减少', 'weaken 削弱', 'degrade 降低'],
    examPoints: []
  },
  enlarge: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['expand 扩大', 'increase 增加', 'magnify 放大', 'amplify 扩大'],
    antonyms: ['shrink 缩小', 'reduce 减少', 'diminish 缩减'],
    examPoints: []
  },
  enormous: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['huge 巨大的', 'immense 巨大的', 'vast 广大的', 'massive 庞大的'],
    antonyms: ['tiny 微小的', 'small 小的', 'minute 微小的'],
    examPoints: []
  },
  enter: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['go in 进入', 'join 加入', 'penetrate 穿入', 'access 进入'],
    antonyms: ['exit 退出', 'leave 离开', 'depart 离去'],
    examPoints: []
  },
  entertain: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['amuse 娱乐', 'divert 使消遣', 'host 招待', 'delight 使高兴'],
    antonyms: ['bore 使厌烦', 'depress 使沮丧'],
    examPoints: []
  },
  enthusiasm: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['passion 热情', 'zeal 热忱', 'eagerness 渴望', 'fervor 热烈'],
    antonyms: ['apathy 冷漠', 'indifference 漠不关心', 'boredom 厌倦'],
    examPoints: []
  },
  entire: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['whole 整个的', 'complete 完整的', 'total 全部的', 'full 充分的'],
    antonyms: ['partial 部分的', 'incomplete 不完整的', 'fractional 部分的'],
    examPoints: []
  },
  entry: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['entrance 入口', 'access 进入', 'admission 准入', 'admittance 进入'],
    antonyms: ['exit 出口', 'departure 离开'],
    examPoints: []
  },
  erase: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['remove 擦除', 'delete 删除', 'eliminate 消除', 'efface 抹去'],
    antonyms: ['add 添加', 'create 创建', 'insert 插入'],
    examPoints: []
  },
  erect: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['build 建造', 'construct 建造', 'raise 竖立', 'establish 建立'],
    antonyms: ['demolish 拆除', 'destroy 毁坏', 'raze 夷平'],
    examPoints: []
  },
  essential: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['crucial 至关重要的', 'vital 必不可少的', 'necessary 必要的', 'fundamental 基本的'],
    antonyms: ['trivial 琐碎的', 'nonessential 非必要的', 'incidental 附带的'],
    examPoints: []
  },
  estimate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['assess 评估', 'evaluate 评价', 'reckon 估算', 'approximate 估计'],
    antonyms: ['calculate 计算', 'verify 核实', 'measure 测量'],
    examPoints: []
  },
  eventually: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ultimately 最终', 'finally 最后', 'in the end 最终', 'at last 终于'],
    antonyms: ['initially 起初', 'immediately 立即'],
    examPoints: []
  },
  evident: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['obvious 明显的', 'apparent 显然的', 'clear 清楚的', 'manifest 明白的'],
    antonyms: ['obscure 模糊的', 'hidden 隐藏的', 'doubtful 可疑的'],
    examPoints: []
  },
  evil: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['wicked 邪恶的', 'sinful 有罪的', 'vicious 恶毒的', 'malicious 恶意的'],
    antonyms: ['good 善良的', 'virtuous 有道德的', 'righteous 正义的'],
    examPoints: []
  },
  evolve: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['develop 发展', 'progress 进步', 'advance 推进', 'unfold 展开'],
    antonyms: ['degenerate 退化', 'regress 倒退', 'decline 衰退'],
    examPoints: []
  },
  exact: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['precise 精确的', 'accurate 准确的', 'correct 正确的', 'strict 严格的'],
    antonyms: ['approximate 大约的', 'inexact 不精确的', 'rough 粗略的'],
    examPoints: []
  },
  exceed: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['surpass 超过', 'overtake 超越', 'excel 胜过', 'go beyond 超出'],
    antonyms: ['fall short 达不到', 'fail 失败', 'lag 落后'],
    examPoints: []
  },
  except: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['excluding 除...外', 'but 除了', 'apart from 除了', 'save 除了'],
    antonyms: ['including 包括', 'including 包含'],
    examPoints: []
  },
  excess: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['surplus 过剩', 'extra 额外的', 'superfluous 多余的', 'overabundance 过多'],
    antonyms: ['deficiency 不足', 'shortage 短缺', 'lack 缺乏'],
    examPoints: []
  },
  exchange: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['trade 交易', 'swap 交换', 'barter 物物交换', 'substitute 替换'],
    antonyms: ['keep 保留', 'retain 保持'],
    examPoints: []
  },
  excite: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['stimulate 激发', 'arouse 引起', 'thrill 使激动', 'agitate 使激动'],
    antonyms: ['calm 使平静', 'soothe 安抚', 'bore 使厌烦'],
    examPoints: []
  },
  exclaim: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['shout 呼喊', 'cry out 大叫', 'declare 宣称', 'proclaim 宣告'],
    antonyms: ['whisper 低语', 'murmur 嘀咕'],
    examPoints: []
  },
  exclude: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['omit 省略', 'bar 排除', 'ban 禁止', 'eliminate 排除'],
    antonyms: ['include 包括', 'admit 接纳', 'incorporate 纳入'],
    examPoints: []
  },
  excuse: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pardon 原谅', 'forgive 宽恕', 'justify 为...辩解', 'overlook 宽恕'],
    antonyms: ['blame 责备', 'condemn 谴责', 'accuse 指控'],
    examPoints: []
  },
  execute: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['carry out 执行', 'perform 执行', 'implement 实施', 'complete 完成'],
    antonyms: ['neglect 忽视', 'abort 中止', 'cancel 取消'],
    examPoints: []
  },
  exhaust: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['drain 耗尽', 'deplete 耗尽', 'tire 使疲惫', 'fatigue 使疲劳'],
    antonyms: ['refresh 使恢复', 'rejuvenate 使恢复活力', 'energize 使精力充沛'],
    examPoints: []
  },
  exhibit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['display 展示', 'show 展示', 'demonstrate 展示', 'present 展示'],
    antonyms: ['conceal 隐藏', 'hide 隐藏'],
    examPoints: []
  },
  experiment: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['test 实验', 'trial 试验', 'attempt 尝试', 'investigation 调查'],
    antonyms: ['certainty 确定'],
    examPoints: []
  },
  expert: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['specialist 专家', 'professional 专业人士', 'authority 权威', 'master 大师'],
    antonyms: ['novice 新手', 'amateur 业余者', 'beginner 初学者'],
    examPoints: []
  },
  explode: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['burst 爆炸', 'erupt 喷发', 'detonate 引爆', 'blow up 爆炸'],
    antonyms: ['implode 内爆', 'calm 平静'],
    examPoints: []
  },
  exploit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['utilize 利用', 'abuse 滥用', 'harness 开发', 'manipulate 操纵'],
    antonyms: ['neglect 忽视', 'waste 浪费'],
    examPoints: []
  },
  export: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ship out 出口', 'send abroad 输出', 'sell overseas 外销'],
    antonyms: ['import 进口'],
    examPoints: []
  },
  extend: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['lengthen 延长', 'stretch 延伸', 'expand 扩展', 'prolong 延长'],
    antonyms: ['shorten 缩短', 'contract 收缩', 'reduce 减少'],
    examPoints: []
  },
  extent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['degree 程度', 'range 范围', 'scope 范围', 'magnitude 规模'],
    antonyms: ['limitation 局限'],
    examPoints: []
  },
  external: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['outer 外部的', 'outside 外面的', 'exterior 外部的', 'surface 表面的'],
    antonyms: ['internal 内部的', 'inner 内部的', 'interior 内部的'],
    examPoints: []
  },
  extra: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['additional 额外的', 'supplementary 补充的', 'spare 多余的', 'excess 额外的'],
    antonyms: ['basic 基本的', 'essential 必需的', 'standard 标准的'],
    examPoints: []
  },
  extreme: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['excessive 过度的', 'intense 极端的', 'radical 激进的', 'drastic 极端的'],
    antonyms: ['moderate 适度的', 'mild 温和的', 'reasonable 合理的'],
    examPoints: []
  },
  fabricate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['invent 捏造', 'make up 编造', 'construct 制造', 'forge 伪造'],
    antonyms: ['destroy 毁坏', 'dismantle 拆除'],
    examPoints: []
  },
  facility: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['equipment 设施', 'amenity 设施', 'installation 设备', 'convenience 便利设施'],
    antonyms: ['inconvenience 不便'],
    examPoints: []
  },
  factor: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['element 因素', 'cause 原因', 'component 组成部分', 'aspect 方面'],
    antonyms: ['result 结果'],
    examPoints: []
  },
  faculty: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ability 能力', 'talent 才能', 'staff 教职员', 'skill 技能'],
    antonyms: ['inability 无能'],
    examPoints: []
  },
  fade: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['dim 变暗', 'wither 枯萎', 'decline 衰退', 'pale 变淡'],
    antonyms: ['brighten 变亮', 'grow 生长', 'revive 恢复'],
    examPoints: []
  },
  faint: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['weak 虚弱的', 'dizzy 头晕的', 'dim 微弱的', 'pale 苍白的'],
    antonyms: ['strong 强壮的', 'vigorous 精力充沛的', 'robust 强健的'],
    examPoints: []
  },
  faith: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['belief 信仰', 'trust 信任', 'confidence 信心', 'conviction 确信'],
    antonyms: ['doubt 怀疑', 'skepticism 怀疑', 'disbelief 不信'],
    examPoints: []
  },
  faithful: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['loyal 忠诚的', 'devoted 忠实的', 'trustworthy 可靠的', 'constant 坚定的'],
    antonyms: ['unfaithful 不忠的', 'disloyal 不忠诚的', 'treacherous 背叛的'],
    examPoints: []
  },
  fake: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['counterfeit 伪造的', 'false 假的', 'artificial 人造的', 'sham 虚假的'],
    antonyms: ['genuine 真正的', 'real 真实的', 'authentic 真实的'],
    examPoints: []
  },
  fancy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['imagine 想象', 'desire 渴望', 'fancy 华丽的', 'elaborate 精致的'],
    antonyms: ['plain 朴素的', 'simple 简单的'],
    examPoints: []
  },
  fantastic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['wonderful 极好的', 'marvelous 奇妙的', 'incredible 难以置信的', 'extraordinary 非凡的'],
    antonyms: ['ordinary 普通的', 'terrible 糟糕的', 'awful 极差的'],
    examPoints: []
  },
  far: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['distant 遥远的', 'remote 偏远的', 'removed 遥远的', 'faraway 遥远的'],
    antonyms: ['near 近的', 'close 接近的', 'adjacent 邻近的'],
    examPoints: []
  },
  fare: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['price 票价', 'charge 费用', 'fee 费用', 'toll 通行费'],
    antonyms: ['free 免费'],
    examPoints: []
  },
  fasten: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['secure 固定', 'attach 系紧', 'tie 绑', 'bind 缚'],
    antonyms: ['loosen 放松', 'unfasten 解开', 'release 释放'],
    examPoints: []
  },
  fatal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['deadly 致命的', 'lethal 致命的', 'mortal 致命的', 'destructive 毁灭性的'],
    antonyms: ['harmless 无害的', 'safe 安全的', 'benign 良性的'],
    examPoints: []
  },
  fate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['destiny 命运', 'doom 宿命', 'fortune 运气', 'lot 命运'],
    antonyms: ['choice 选择', 'freedom 自由'],
    examPoints: []
  },
  fault: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['error 错误', 'mistake 过失', 'defect 缺陷', 'blame 过错'],
    antonyms: ['merit 优点', 'virtue 美德', 'perfection 完美'],
    examPoints: []
  },
  favor: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['support 支持', 'approve 赞同', 'prefer 偏爱', 'benefit 恩惠'],
    antonyms: ['oppose 反对', 'disapprove 不赞成', 'reject 拒绝'],
    examPoints: []
  },
  feasible: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['possible 可行的', 'practical 可行的', 'viable 可行的', 'achievable 可实现的'],
    antonyms: ['impossible 不可能的', 'unfeasible 不可行的', 'impractical 不切实际的'],
    examPoints: []
  },
  feature: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['characteristic 特征', 'aspect 方面', 'trait 特点', 'quality 特质'],
    antonyms: ['whole 整体'],
    examPoints: []
  },
  federal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['national 国家的', 'central 中央的', 'union 联邦的'],
    antonyms: ['local 地方的', 'state 州的'],
    examPoints: []
  },
  fee: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['charge 费用', 'cost 费用', 'payment 付款', 'toll 通行费'],
    antonyms: ['free 免费', 'waiver 豁免'],
    examPoints: []
  },
  feeble: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['weak 虚弱的', 'frail 衰弱的', 'frail 脆弱的', 'faint 微弱的'],
    antonyms: ['strong 强壮的', 'robust 强健的', 'powerful 强大的'],
    examPoints: []
  },
  feed: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['nourish 滋养', 'sustain 供给', 'nurture 养育', 'provide food 供养'],
    antonyms: ['starve 使挨饿', 'deprive 剥夺'],
    examPoints: []
  },
  fellow: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['companion 同伴', 'associate 同事', 'comrade 伙伴', 'peer 同辈'],
    antonyms: ['stranger 陌生人', 'enemy 敌人'],
    examPoints: []
  },
  female: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['woman 女人', 'feminine 女性的', 'lady 女士'],
    antonyms: ['male 男性', 'masculine 男性的'],
    examPoints: []
  },
  fertile: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['productive 多产的', 'rich 肥沃的', 'prolific 多产的', 'fruitful 富有成效的'],
    antonyms: ['barren 贫瘠的', 'sterile 不毛的', 'infertile 不育的'],
    examPoints: []
  },
  fierce: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['savage 凶猛的', 'ferocious 凶残的', 'violent 猛烈的', 'intense 强烈的'],
    antonyms: ['gentle 温和的', 'mild 温柔的', 'calm 平静的'],
    examPoints: []
  },
  figure: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['number 数字', 'shape 外形', 'calculate 计算', 'statistic 统计数字'],
    antonyms: ['estimate 估计'],
    examPoints: []
  },
  file: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['document 文件', 'record 记录', 'register 登记', 'store 存储'],
    antonyms: ['discard 丢弃', 'delete 删除'],
    examPoints: []
  },
  fine: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['penalty 罚款', 'excellent 优秀的', 'delicate 精细的', 'refined 精致的'],
    antonyms: ['coarse 粗糙的', 'crude 粗糙的', 'reward 奖励'],
    examPoints: []
  },
  firm: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['solid 坚固的', 'steady 稳固的', 'company 公司', 'resolute 坚定的'],
    antonyms: ['soft 柔软的', 'weak 软弱的', 'yielding 易弯的'],
    examPoints: []
  },
  flag: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['banner 旗帜', 'standard 旗', 'colors 旗帜', 'ensign 军旗'],
    antonyms: ['lower 降下'],
    examPoints: []
  },
  flame: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fire 火焰', 'blaze 烈火', 'glow 火光', 'inferno 大火'],
    antonyms: ['extinguish 熄灭', 'douse 浇灭'],
    examPoints: []
  },
  flash: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gleam 闪光', 'glint 闪烁', 'sparkle 闪耀', 'flare 闪耀'],
    antonyms: ['dim 变暗', 'fade 褪色'],
    examPoints: []
  },
  flat: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['level 平的', 'even 平坦的', 'smooth 平滑的', 'horizontal 水平的'],
    antonyms: ['bumpy 颠簸的', 'uneven 不平的', 'hilly 多山的'],
    examPoints: []
  },
  flee: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['escape 逃跑', 'run away 逃离', 'retreat 撤退', 'evade 逃避'],
    antonyms: ['confront 面对', 'face 面对', 'remain 留下'],
    examPoints: []
  },
  flexible: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['adaptable 灵活的', 'pliable 可弯曲的', 'elastic 弹性的', 'versatile 多用途的'],
    antonyms: ['rigid 僵硬的', 'inflexible 不灵活的', 'stiff 僵硬的'],
    examPoints: []
  },
  flight: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['flying 飞行', 'escape 逃跑', 'journey 旅程', 'aviation 航空'],
    antonyms: ['landing 降落', 'stay 停留'],
    examPoints: []
  },
  float: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['drift 漂浮', 'buoy 漂浮', 'sail 航行', 'hover 悬浮'],
    antonyms: ['sink 下沉', 'submerge 沉没'],
    examPoints: []
  },
  flood: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['inundate 淹没', 'overflow 泛滥', 'deluge 洪水', 'swamp 淹没'],
    antonyms: ['drain 排水', 'dry 使干燥'],
    examPoints: []
  },
  flourish: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['thrive 繁荣', 'prosper 兴旺', 'bloom 盛开', 'succeed 成功'],
    antonyms: ['decline 衰退', 'wither 枯萎', 'fail 失败'],
    examPoints: []
  },
  flow: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['stream 流动', 'pour 倾注', 'run 流淌', 'gush 涌出'],
    antonyms: ['stop 停止', 'stagnate 停滞'],
    examPoints: []
  },
  fluent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['smooth 流畅的', 'eloquent 雄辩的', 'articulate 表达清晰的', 'glib 流利的'],
    antonyms: ['halting 结结巴巴的', 'stumbling 磕磕绊绊的'],
    examPoints: []
  },
  fold: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bend 折叠', 'crease 折', 'double 折叠', 'roll up 卷起'],
    antonyms: ['unfold 展开', 'open 打开', 'flatten 弄平'],
    examPoints: []
  },
  follow: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pursue 追随', 'chase 追逐', 'obey 遵从', 'track 跟踪'],
    antonyms: ['lead 带领', 'guide 引导', 'precede 先于'],
    examPoints: []
  },
  forecast: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['predict 预测', 'foresee 预见', 'project 预计', 'anticipate 预期'],
    antonyms: ['recall 回忆', 'retrospect 回顾'],
    examPoints: []
  },
  foreign: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['external 外来的', 'alien 外国的', 'unfamiliar 陌生的', 'exotic 外来的'],
    antonyms: ['domestic 国内的', 'native 本国的', 'familiar 熟悉的'],
    examPoints: []
  },
  forge: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['create 锻造', 'fabricate 伪造', 'make 制造', 'form 形成'],
    antonyms: ['destroy 毁坏', 'break 破坏'],
    examPoints: []
  },
  formal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['official 正式的', 'ceremonious 仪式的', 'proper 正规的', 'structured 正式的'],
    antonyms: ['informal 非正式的', 'casual 随意的', 'relaxed 随意的'],
    examPoints: []
  },
  former: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['previous 先前的', 'past 过去的', 'preceding 在前的', 'earlier 早先的'],
    antonyms: ['latter 后者的', 'current 当前的', 'following 以下的'],
    examPoints: []
  },
  fortunate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['lucky 幸运的', 'blessed 受祝福的', 'favored 受青睐的', 'auspicious 吉利的'],
    antonyms: ['unfortunate 不幸的', 'unlucky 不幸的', 'cursed 被诅咒的'],
    examPoints: []
  },
  fragment: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['piece 碎片', 'portion 片段', 'scrap 碎屑', 'segment 片段'],
    antonyms: ['whole 整体', 'entirety 全部'],
    examPoints: []
  },
  frame: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['structure 框架', 'skeleton 骨架', 'framework 框架', 'construct 构筑'],
    antonyms: ['destroy 毁坏', 'dismantle 拆除'],
    examPoints: []
  },
  fraud: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['deception 欺诈', 'trickery 诡计', 'cheating 欺骗', 'swindle 诈骗'],
    antonyms: ['honesty 诚实', 'integrity 正直'],
    examPoints: []
  },
  frequent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['regular 频繁的', 'constant 不断的', 'recurring 反复出现的', 'common 常见的'],
    antonyms: ['rare 稀少的', 'occasional 偶尔的', 'infrequent 不常见的'],
    examPoints: []
  },
  fright: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fear 恐惧', 'terror 恐怖', 'panic 惊恐', 'dread 畏惧'],
    antonyms: ['calm 平静', 'composure 镇定', 'courage 勇气'],
    examPoints: []
  },
  frontier: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['border 边境', 'boundary 边界', 'edge 边缘', 'limit 边疆'],
    antonyms: ['interior 内地', 'center 中心'],
    examPoints: []
  },
  frustrate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['thwart 阻挠', 'defeat 挫败', 'hinder 阻碍', 'disappoint 使沮丧'],
    antonyms: ['facilitate 促进', 'help 帮助', 'encourage 鼓励'],
    examPoints: []
  },
  fuel: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['energize 供能', 'power 驱动', 'stimulate 刺激', 'sustain 维持'],
    antonyms: ['deplete 耗尽', 'drain 耗尽'],
    examPoints: []
  },
  fulfill: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['complete 完成', 'accomplish 实现', 'achieve 达到', 'satisfy 满足'],
    antonyms: ['fail 失败', 'neglect 忽视', 'break 违背'],
    examPoints: []
  },
  fundamental: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['basic 基本的', 'essential 基本的', 'primary 首要的', 'core 核心的'],
    antonyms: ['secondary 次要的', 'peripheral 外围的', 'incidental 附带的'],
    examPoints: []
  },
  funeral: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['burial 葬礼', 'interment 埋葬', 'memorial 追悼会', 'service 丧礼'],
    antonyms: ['birth 出生'],
    examPoints: []
  },
  furnish: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['supply 供给', 'provide 提供', 'equip 装备', 'outfit 配备'],
    antonyms: ['strip 剥夺', 'remove 移除'],
    examPoints: []
  },
  further: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['advance 推进', 'promote 促进', 'additional 进一步的', 'farther 更远的'],
    antonyms: ['hinder 阻碍', 'impede 阻止'],
    examPoints: []
  },
  futile: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['useless 无用的', 'vain 徒劳的', 'pointless 无意义的', 'ineffective 无效的'],
    antonyms: ['effective 有效的', 'fruitful 有成效的', 'useful 有用的'],
    examPoints: []
  },
  gain: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['acquire 获得', 'obtain 获得', 'earn 赚取', 'achieve 达到'],
    antonyms: ['lose 失去', 'forfeit 丧失', 'surrender 放弃'],
    examPoints: []
  },
  gamble: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bet 打赌', 'risk 冒险', 'wager 押注', 'speculate 投机'],
    antonyms: ['save 储蓄', 'invest safely 稳健投资'],
    examPoints: []
  },
  gap: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['opening 缺口', 'space 空隙', 'interval 间隔', 'crevice 裂缝'],
    antonyms: ['closure 关闭', 'connection 连接'],
    examPoints: []
  },
  gather: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['collect 收集', 'assemble 集合', 'accumulate 积累', 'congregate 聚集'],
    antonyms: ['scatter 分散', 'disperse 散开', 'distribute 分发'],
    examPoints: []
  },
  gaze: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['stare 凝视', 'look 看', 'glare 注视', 'peer 凝视'],
    antonyms: ['glance 瞥', 'look away 移开视线'],
    examPoints: []
  },
  gear: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['equipment 装备', 'apparatus 装置', 'mechanism 机制', 'tools 工具'],
    antonyms: ['disrobe 脱去'],
    examPoints: []
  },
  gender: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sex 性别', 'identity 性别认同'],
    antonyms: ['neuter 中性'],
    examPoints: []
  },
  general: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['universal 普遍的', 'broad 广泛的', 'overall 总体的', 'widespread 普遍的'],
    antonyms: ['specific 具体的', 'particular 特定的', 'special 特殊的'],
    examPoints: []
  },
  genius: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['brilliance 才华', 'talent 天赋', 'prodigy 天才', 'mastermind 奇才'],
    antonyms: ['fool 蠢人', 'mediocrity 平庸'],
    examPoints: []
  },
  gentle: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'gentler', superlative: 'gentlest' },
    synonyms: ['mild 温和的', 'soft 柔和的', 'tender 温柔的', 'calm 平和的'],
    antonyms: ['harsh 严厉的', 'rough 粗暴的', 'violent 暴力的'],
    examPoints: []
  },
  genuine: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['authentic 真正的', 'real 真实的', 'true 真的', 'sincere 真诚的'],
    antonyms: ['fake 假的', 'false 虚假的', 'artificial 人造的'],
    examPoints: []
  },
  gesture: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['signal 手势', 'motion 动作', 'sign 表示', 'movement 手势'],
    antonyms: ['speech 言语'],
    examPoints: []
  },
  giant: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['huge 巨大的', 'enormous 庞大的', 'massive 巨大的', 'colossal 庞大的'],
    antonyms: ['tiny 微小的', 'small 小的', 'diminutive 小巧的'],
    examPoints: []
  },
  gift: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['present 礼物', 'talent 天赋', 'donation 赠品', 'endowment 天赋'],
    antonyms: ['penalty 惩罚'],
    examPoints: []
  },
  glance: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['peek 瞥见', 'glimpse 一瞥', 'look quickly 快速看', 'skim 浏览'],
    antonyms: ['stare 凝视', 'gaze 注视'],
    examPoints: []
  },
  glimpse: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['glance 一瞥', 'peek 瞥见', 'brief look 粗略一看', 'sighting 瞥见'],
    antonyms: ['stare 长时间注视', 'study 仔细观察'],
    examPoints: []
  },
  global: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['worldwide 全球的', 'universal 全球的', 'international 国际的', 'comprehensive 全面的'],
    antonyms: ['local 地方的', 'regional 区域的', 'national 国内的'],
    examPoints: []
  },
  glorious: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['magnificent 壮丽的', 'splendid 辉煌的', 'illustrious 著名的', 'majestic 宏伟的'],
    antonyms: ['inglorious 不光彩的', 'shameful 可耻的', 'humble 卑微的'],
    examPoints: []
  },
  govern: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['rule 统治', 'control 控制', 'direct 管理', 'administer 治理'],
    antonyms: ['obey 服从', 'follow 跟随', 'rebel 反叛'],
    examPoints: []
  },
  grace: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['elegance 优雅', 'beauty 美', 'charm 魅力', 'poise 优雅'],
    antonyms: ['awkwardness 笨拙', 'clumsiness 笨拙'],
    examPoints: []
  },
  gradual: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['progressive 渐进的', 'slow 缓慢的', 'steady 稳步的', 'step-by-step 逐步的'],
    antonyms: ['sudden 突然的', 'abrupt 突然的', 'instant 瞬间的'],
    examPoints: []
  },
  grant: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['give 给予', 'award 授予', 'bestow 赐予', 'permit 许可'],
    antonyms: ['deny 拒绝', 'withhold 扣留', 'revoke 撤销'],
    examPoints: []
  },
  grateful: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['thankful 感激的', 'appreciative 感谢的', 'indebted 感恩的', 'obliged 感谢的'],
    antonyms: ['ungrateful 忘恩负义的', 'unappreciative 不感激的'],
    examPoints: []
  },
  gravity: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['weight 重量', 'seriousness 严重性', 'importance 重要性', 'solemnity 庄严'],
    antonyms: ['lightness 轻盈', 'triviality 琐碎'],
    examPoints: []
  },
  greedy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['avaricious 贪婪的', 'covetous 贪婪的', 'insatiable 贪得无厌的', 'selfish 自私的'],
    antonyms: ['generous 慷慨的', 'selfless 无私的', 'content 满足的'],
    examPoints: []
  },
  grip: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['grasp 抓住', 'clutch 紧握', 'hold 握住', 'seize 抓取'],
    antonyms: ['release 释放', 'let go 放开', 'drop 掉落'],
    examPoints: []
  },
  guarantee: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['warrant 保证', 'ensure 确保', 'pledge 保证', 'secure 保障'],
    antonyms: ['endanger 危及', 'risk 冒险'],
    examPoints: []
  },
  guard: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['protect 保护', 'defend 保卫', 'watch 看守', 'shield 防护'],
    antonyms: ['attack 攻击', 'assault 袭击', 'neglect 忽视'],
    examPoints: []
  },
  guess: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['estimate 估计', 'surmise 推测', 'conjecture 猜测', 'speculate 推断'],
    antonyms: ['know 知道', 'verify 证实', 'prove 证明'],
    examPoints: []
  },
  guidance: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['direction 指导', 'leadership 领导', 'instruction 指引', 'counsel 建议'],
    antonyms: ['misguidance 误导'],
    examPoints: []
  },
  guilty: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['culpable 有罪的', 'blameworthy 应受责备的', 'remorseful 悔恨的', 'liable 有责任的'],
    antonyms: ['innocent 无辜的', 'guiltless 无罪的', 'blameless 无可责备的'],
    examPoints: []
  },
  halt: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['stop 停止', 'cease 停止', 'pause 暂停', 'arrest 阻止'],
    antonyms: ['continue 继续', 'proceed 继续', 'start 开始'],
    examPoints: []
  },
  handsome: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['attractive 有吸引力的', 'good-looking 好看的', 'striking 出众的', 'dashing 英俊的'],
    antonyms: ['ugly 丑陋的', 'unattractive 无吸引力的', 'plain 相貌平平的'],
    examPoints: []
  },
  harvest: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['crop 收成', 'yield 产量', 'gather 收获', 'reap 收割'],
    antonyms: ['plant 种植', 'sow 播种'],
    examPoints: []
  },
  haste: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['speed 速度', 'hurry 匆忙', 'rush 赶快', 'swiftness 迅速'],
    antonyms: ['deliberation 从容', 'slowness 缓慢', 'caution 谨慎'],
    examPoints: []
  },
  haunt: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['linger 萦绕', 'pursue 追随', 'torment 折磨', 'frequent 常去'],
    antonyms: ['leave 离开', 'avoid 避开'],
    examPoints: []
  },
  heal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['cure 治愈', 'recover 恢复', 'mend 痊愈', 'restore 恢复'],
    antonyms: ['injure 伤害', 'wound 使受伤', 'harm 伤害'],
    examPoints: []
  },
  health: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['wellness 健康', 'fitness 健壮', 'vitality 活力', 'soundness 健康'],
    antonyms: ['illness 疾病', 'sickness 病', 'disease 疾病'],
    examPoints: []
  },
  heap: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pile 堆', 'stack 垛', 'mound 土堆', 'mass 大量'],
    antonyms: ['scatter 分散', 'spread 散开'],
    examPoints: []
  },
  height: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['altitude 高度', 'elevation 海拔', 'stature 身高', 'peak 顶点'],
    antonyms: ['depth 深度', 'lowness 低矮'],
    examPoints: []
  },
  hence: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['therefore 因此', 'thus 因此', 'consequently 所以', 'as a result 结果'],
    antonyms: ['because 因为'],
    examPoints: []
  },
  heritage: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['inheritance 遗产', 'legacy 遗产', 'tradition 传统', 'birthright 与生俱来的权利'],
    antonyms: ['novelty 新奇'],
    examPoints: []
  },
  highlight: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['emphasize 强调', 'stress 着重', 'spotlight 突出', 'accentuate 突出'],
    antonyms: ['downplay 淡化', 'minimize 最小化', 'ignore 忽视'],
    examPoints: []
  },
  hint: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['suggest 暗示', 'imply 暗示', 'insinuate 暗指', 'clue 线索'],
    antonyms: ['state 明言', 'declare 宣布'],
    examPoints: []
  },
  hire: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['employ 雇用', 'engage 聘用', 'recruit 招募', 'appoint 任命'],
    antonyms: ['fire 解雇', 'dismiss 解雇', 'discharge 解雇'],
    examPoints: []
  },
  historic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['significant 有历史意义的', 'memorable 值得纪念的', 'notable 著名的', 'momentous 重大的'],
    antonyms: ['unremarkable 平凡的', 'ordinary 普通的'],
    examPoints: []
  },
  hit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['strike 击打', 'smash 猛击', 'collide 碰撞', 'impact 撞击'],
    antonyms: ['miss 错过', 'avoid 避开'],
    examPoints: []
  },
  hollow: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['empty 空的', 'void 空洞的', 'vacant 空的', 'cavity 中空的'],
    antonyms: ['solid 实心的', 'full 满的', 'dense 密实的'],
    examPoints: []
  },
  holy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sacred 神圣的', 'divine 神圣的', 'pious 虔诚的', 'blessed 受祝福的'],
    antonyms: ['profane 亵渎的', 'secular 世俗的', 'unholy 不神圣的'],
    examPoints: []
  },
  honor: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['respect 尊敬', 'esteem 尊重', 'dignity 尊严', 'glory 荣誉'],
    antonyms: ['dishonor 耻辱', 'disgrace 羞辱', 'shame 羞耻'],
    examPoints: []
  },
  hook: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['catch 钩住', 'attach 挂住', 'fasten 扣住', 'snare 诱捕'],
    antonyms: ['release 释放', 'unhook 解开'],
    examPoints: []
  },
  horizon: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['skyline 天际线', 'view 视野', 'perspective 视角', 'outlook 前景'],
    antonyms: ['foreground 前景'],
    examPoints: []
  },
  horror: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['terror 恐怖', 'fright 惊恐', 'dread 恐惧', 'nightmare 噩梦'],
    antonyms: ['delight 高兴', 'comfort 安慰', 'calm 平静'],
    examPoints: []
  },
  host: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['entertain 招待', 'preside 主持', 'conduct 主持', 'present 主持'],
    antonyms: ['guest 客人'],
    examPoints: []
  },
  hostile: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unfriendly 不友好的', 'antagonistic 敌对的', 'aggressive 有敌意的', 'belligerent 好战的'],
    antonyms: ['friendly 友好的', 'hospitable 好客的', 'welcoming 热情的'],
    examPoints: []
  },
  humor: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['wit 幽默', 'comedy 喜剧', 'amusement 逗趣', 'fun 乐趣'],
    antonyms: ['seriousness 严肃', 'solemnity 庄严'],
    examPoints: []
  },
  hungry: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['starving 饥饿的', 'famished 极饿的', 'ravenous 贪婪饥饿的', 'empty 空腹的'],
    antonyms: ['full 饱的', 'satisfied 满足的', 'stuffed 吃饱的'],
    examPoints: []
  },
  hunt: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pursue 追猎', 'chase 追逐', 'track 追踪', 'search 搜索'],
    antonyms: ['evade 逃避', 'flee 逃跑'],
    examPoints: []
  },
  hurry: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['rush 匆忙', 'hasten 赶快', 'speed 加速', 'dash 冲'],
    antonyms: ['delay 延迟', 'dawdle 磨蹭', 'linger 逗留'],
    examPoints: []
  },
  hurt: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['injure 伤害', 'harm 损害', 'wound 使受伤', 'pain 使痛苦'],
    antonyms: ['heal 治愈', 'comfort 安慰', 'soothe 安抚'],
    examPoints: []
  },
  ideal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['perfect 完美的', 'model 理想的', 'excellent 优秀的', 'supreme 至高的'],
    antonyms: ['realistic 现实的', 'flawed 有缺陷的', 'imperfect 不完美的'],
    examPoints: []
  },
  identical: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['same 相同的', 'matching 匹配的', 'alike 相同的', 'duplicate 完全相同的'],
    antonyms: ['different 不同的', 'dissimilar 不相似的', 'distinct 不同的'],
    examPoints: []
  },
  idle: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['inactive 不活跃的', 'lazy 懒惰的', 'unoccupied 空闲的', 'unemployed 失业的'],
    antonyms: ['active 活跃的', 'busy 忙碌的', 'employed 有工作的'],
    examPoints: []
  },
  ignorant: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unaware 不知道的', 'uneducated 未受教育的', 'uninformed 不知情的', 'oblivious 无知的'],
    antonyms: ['knowledgeable 博学的', 'informed 知情的', 'educated 受过教育的'],
    examPoints: []
  },
  illustrate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['demonstrate 说明', 'explain 解释', 'depict 描绘', 'exemplify 举例说明'],
    antonyms: ['obscure 模糊', 'confuse 使困惑'],
    examPoints: []
  },
  image: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['picture 图像', 'likeness 相似物', 'portrait 肖像', 'representation 表现'],
    antonyms: ['reality 现实'],
    examPoints: []
  },
  imitate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['copy 模仿', 'mimic 模拟', 'duplicate 仿制', 'replicate 复制'],
    antonyms: ['originate 创始', 'create 创新'],
    examPoints: []
  },
  immense: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['huge 巨大的', 'vast 广大的', 'enormous 庞大的', 'massive 巨大的'],
    antonyms: ['tiny 微小的', 'small 小的', 'minute 微小的'],
    examPoints: []
  },
  impact: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['effect 影响', 'influence 影响', 'consequence 后果', 'collision 碰撞'],
    antonyms: ['irrelevance 无关'],
    examPoints: []
  },
  impair: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['damage 损害', 'weaken 削弱', 'harm 伤害', 'deteriorate 使恶化'],
    antonyms: ['improve 改善', 'strengthen 加强', 'enhance 增强'],
    examPoints: []
  },
  implement: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['execute 执行', 'carry out 实施', 'enforce 推行', 'tool 工具'],
    antonyms: ['neglect 忽视', 'cancel 取消'],
    examPoints: []
  },
  imply: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['suggest 暗示', 'hint 暗示', 'insinuate 暗指', 'intimate 暗示'],
    antonyms: ['state 明言', 'declare 宣布', 'express 表达'],
    examPoints: []
  },
  import: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bring in 进口', 'introduce 引进', 'receive 接收'],
    antonyms: ['export 出口'],
    examPoints: []
  },
  impose: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['force 强加', 'inflict 施加', 'levy 征收', 'enforce 强制执行'],
    antonyms: ['lift 解除', 'remove 移除', 'waive 放弃'],
    examPoints: []
  },
  impulse: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['urge 冲动', 'drive 驱动力', 'instinct 本能', 'compulsion 强迫'],
    antonyms: ['deliberation 审慎', 'restraint 克制'],
    examPoints: []
  },
  incidence: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['occurrence 发生', 'frequency 发生率', 'rate 比率', 'prevalence 普遍'],
    antonyms: ['rarity 罕见'],
    examPoints: []
  },
  incline: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['lean 倾斜', 'tend 倾向', 'slope 倾斜', 'dispose 使倾向于'],
    antonyms: ['decline 拒绝', 'resist 抵抗'],
    examPoints: []
  },
  incredible: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unbelievable 难以置信的', 'amazing 惊人的', 'extraordinary 非凡的', 'remarkable 了不起的'],
    antonyms: ['believable 可信的', 'ordinary 普通的', 'commonplace 平凡的'],
    examPoints: []
  },
  independent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['self-reliant 自主的', 'autonomous 自治的', 'free 自由的', 'sovereign 独立的'],
    antonyms: ['dependent 依赖的', 'subordinate 从属的', 'controlled 受控的'],
    examPoints: []
  },
  indicate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['show 表明', 'point out 指出', 'reveal 揭示', 'signify 表示'],
    antonyms: ['conceal 隐藏', 'hide 隐藏'],
    examPoints: []
  },
  individual: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['single 单独的', 'personal 个人的', 'distinct 独特的', 'separate 单独的'],
    antonyms: ['collective 集体的', 'group 群体的', 'general 普遍的'],
    examPoints: []
  },
  induce: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['persuade 劝说', 'cause 引起', 'bring about 导致', 'prompt 促使'],
    antonyms: ['prevent 阻止', 'discourage 阻拦'],
    examPoints: []
  },
  indulge: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pamper 纵容', 'gratify 满足', 'satisfy 使满足', 'spoil 溺爱'],
    antonyms: ['deny 拒绝', 'restrain 克制', 'deprive 剥夺'],
    examPoints: []
  },
  industry: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['business 工业', 'manufacturing 制造业', 'trade 贸易', 'commerce 商业'],
    antonyms: ['agriculture 农业'],
    examPoints: []
  },
  inevitable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unavoidable 不可避免的', 'inescapable 不可避免的', 'certain 必然的', 'fated 注定的'],
    antonyms: ['avoidable 可避免的', 'preventable 可预防的', 'optional 可选择的'],
    examPoints: []
  },
  infect: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['contaminate 污染', 'taint 感染', 'poison 使中毒', 'corrupt 腐蚀'],
    antonyms: ['cure 治愈', 'clean 清洁', 'purify 净化'],
    examPoints: []
  },
  infer: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['deduce 推断', 'conclude 得出结论', 'derive 推出', 'gather 推断'],
    antonyms: ['state 明言', 'declare 宣布'],
    examPoints: []
  },
  inherent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['intrinsic 内在的', 'innate 天生的', 'essential 固有的', 'natural 自然的'],
    antonyms: ['acquired 后天的', 'external 外部的', 'extrinsic 外在的'],
    examPoints: []
  },
  inherit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['receive 继承', 'acquire 获得', 'succeed 继承', 'obtain 获得'],
    antonyms: ['bequeath 遗赠', 'give 给予'],
    examPoints: []
  },
  initial: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['first 最初的', 'beginning 开始的', 'original 原始的', 'primary 首要的'],
    antonyms: ['final 最终的', 'last 最后的', 'subsequent 随后的'],
    examPoints: []
  },
  initiate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['begin 开始', 'start 开始', 'commence 发起', 'launch 启动'],
    antonyms: ['end 结束', 'terminate 终止', 'conclude 终止'],
    examPoints: []
  },
  inject: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['insert 注入', 'introduce 引入', 'infuse 注入', 'instill 灌输'],
    antonyms: ['extract 提取', 'remove 移除'],
    examPoints: []
  },
  injure: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['harm 伤害', 'damage 损害', 'hurt 伤害', 'wound 使受伤'],
    antonyms: ['heal 治愈', 'protect 保护', 'cure 治疗'],
    examPoints: []
  },
  inner: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['internal 内部的', 'interior 内部的', 'inside 里面的', 'inward 向内的'],
    antonyms: ['outer 外部的', 'external 外部的', 'exterior 外部的'],
    examPoints: []
  },
  innocent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['guiltless 无罪的', 'blameless 无辜的', 'pure 纯洁的', 'sinless 无罪的'],
    antonyms: ['guilty 有罪的', 'culpable 应受谴责的', 'corrupt 腐败的'],
    examPoints: []
  },
  input: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['contribution 贡献', 'data 输入数据', 'information 信息', 'feedback 反馈'],
    antonyms: ['output 输出', 'result 结果'],
    examPoints: []
  },
  inquire: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ask 询问', 'question 打听', 'investigate 调查', 'probe 探究'],
    antonyms: ['answer 回答', 'respond 回应'],
    examPoints: []
  },
  insane: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['mad 疯的', 'crazy 疯狂的', 'deranged 精神错乱的', 'lunatic 疯癫的'],
    antonyms: ['sane 理智的', 'rational 理性的', 'lucid 清醒的'],
    examPoints: []
  },
  insert: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['place 插入', 'put in 放入', 'inject 注入', 'introduce 引入'],
    antonyms: ['remove 移除', 'extract 提取', 'delete 删除'],
    examPoints: []
  },
  inspect: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['examine 检查', 'scrutinize 审查', 'investigate 调查', 'review 审查'],
    antonyms: ['ignore 忽视', 'overlook 忽略'],
    examPoints: []
  },
  inspire: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['motivate 激励', 'encourage 鼓舞', 'stimulate 激发', 'influence 启发'],
    antonyms: ['discourage 使气馁', 'deter 阻止', 'depress 使沮丧'],
    examPoints: []
  },
  install: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['set up 安装', 'establish 安装', 'mount 安装', 'place 放置'],
    antonyms: ['remove 移除', 'uninstall 卸载', 'dismantle 拆除'],
    examPoints: []
  },
  instance: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['example 例子', 'case 事例', 'illustration 例证', 'occurrence 实例'],
    antonyms: ['generalization 概括'],
    examPoints: []
  },
  instinct: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['intuition 直觉', 'impulse 本能冲动', 'nature 天性', 'innate ability 天赋能力'],
    antonyms: ['reason 理性', 'deliberation 审慎'],
    examPoints: []
  },
  institute: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['establish 设立', 'found 建立', 'organization 机构', 'create 创立'],
    antonyms: ['abolish 废除', 'dissolve 解散'],
    examPoints: []
  },
  insult: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['offend 冒犯', 'affront 侮辱', 'slight 轻蔑', 'abuse 辱骂'],
    antonyms: ['compliment 赞美', 'praise 赞扬', 'honor 尊敬'],
    examPoints: []
  },
  insure: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['protect 保障', 'guarantee 保证', 'secure 确保', 'cover 承保'],
    antonyms: ['risk 冒险', 'endanger 危及'],
    examPoints: []
  },
  intact: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['whole 完好的', 'undamaged 未受损的', 'complete 完整的', 'unbroken 未破损的'],
    antonyms: ['broken 破损的', 'damaged 受损的', 'destroyed 被毁的'],
    examPoints: []
  },
  integrate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['combine 整合', 'unite 联合', 'merge 合并', 'incorporate 纳入'],
    antonyms: ['separate 分开', 'divide 分割', 'isolate 孤立'],
    examPoints: []
  },
  intense: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['strong 强烈的', 'extreme 极度的', 'fierce 猛烈的', 'violent 猛烈的'],
    antonyms: ['mild 温和的', 'gentle 温和的', 'moderate 适度的'],
    examPoints: []
  },
  intimate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['close 亲密的', 'familiar 熟悉的', 'private 私人的', 'personal 个人的'],
    antonyms: ['distant 疏远的', 'formal 正式的', 'public 公开的'],
    examPoints: []
  },
  intrigue: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fascinate 引起兴趣', 'captivate 迷住', 'attract 吸引', 'plot 密谋'],
    antonyms: ['bore 使厌烦', 'repel 使反感'],
    examPoints: []
  },
  invade: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['attack 入侵', 'assault 袭击', 'occupy 占领', 'intrude 侵入'],
    antonyms: ['retreat 撤退', 'withdraw 撤退', 'defend 防守'],
    examPoints: []
  },
  invest: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['finance 投资', 'fund 资助', 'commit 投入', 'endow 赋予'],
    antonyms: ['divest 撤资', 'withdraw 撤回'],
    examPoints: []
  },
  investigate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['examine 调查', 'explore 探究', 'probe 调查', 'research 研究'],
    antonyms: ['ignore 忽视', 'overlook 忽略'],
    examPoints: []
  },
  irrational: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unreasonable 不合理的', 'illogical 不合逻辑的', 'absurd 荒谬的', 'senseless 无理的'],
    antonyms: ['rational 理性的', 'logical 合逻辑的', 'reasonable 合理的'],
    examPoints: []
  },
  isolate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['separate 隔离', 'seclude 隔绝', 'quarantine 隔离', 'detach 分离'],
    antonyms: ['unite 联合', 'connect 连接', 'integrate 整合'],
    examPoints: []
  },
  issue: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['topic 问题', 'matter 议题', 'subject 主题', 'publish 发行'],
    antonyms: ['solution 解决方案'],
    examPoints: []
  },
  joint: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['shared 共同的', 'combined 联合的', 'collective 集体的', 'mutual 相互的'],
    antonyms: ['separate 分开的', 'individual 个人的', 'sole 单独的'],
    examPoints: []
  },
  judge: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['evaluate 评判', 'assess 评估', 'determine 裁定', 'arbitrate 仲裁'],
    antonyms: ['guess 猜测', 'ignore 忽视'],
    examPoints: []
  },
  junior: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['younger 年少的', 'subordinate 下级的', 'inferior 职位较低的', 'minor 未成年的'],
    antonyms: ['senior 年长的', 'superior 上级的', 'superior 职位较高的'],
    examPoints: []
  },
  keen: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['eager 渴望的', 'enthusiastic 热切的', 'sharp 敏锐的', 'intense 强烈的'],
    antonyms: ['indifferent 漠不关心的', 'apathetic 冷漠的', 'dull 迟钝的'],
    examPoints: []
  },
  key: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['crucial 关键的', 'essential 重要的', 'vital 至关重要的', 'fundamental 核心的'],
    antonyms: ['trivial 琐碎的', 'minor 次要的', 'insignificant 不重要的'],
    examPoints: []
  },
  kingdom: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['realm 王国', 'domain 领域', 'domain 领土', 'empire 帝国'],
    antonyms: ['republic 共和国'],
    examPoints: []
  },
  kneel: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bow 跪下', 'genuflect 屈膝', 'stoop 弯腰'],
    antonyms: ['stand 站立', 'rise 起立'],
    examPoints: []
  },
  knife: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['blade 刀片', 'dagger 匕首', 'cutter 刀具', 'scalpel 手术刀'],
    antonyms: ['spoon 勺子'],
    examPoints: []
  },
  knock: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tap 敲', 'strike 撞击', 'bang 猛敲', 'rap 叩击'],
    antonyms: ['silence 安静', 'listen 倾听'],
    examPoints: []
  },
  label: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tag 标签', 'mark 标记', 'sticker 贴标', 'designation 标识'],
    antonyms: ['unmark 未标记'],
    examPoints: []
  },
  labor: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['work 劳动', 'toil 辛苦工作', 'effort 努力', 'exertion 劳作'],
    antonyms: ['rest 休息', 'leisure 休闲', 'idleness 闲散'],
    examPoints: []
  },
  lack: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['deficiency 缺乏', 'shortage 短缺', 'want 需要', 'absence 缺少'],
    antonyms: ['abundance 丰富', 'surplus 过剩', 'plenty 充足'],
    examPoints: []
  },
  landscape: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['scenery 风景', 'terrain 地形', 'countryside 乡村', 'vista 景色'],
    antonyms: ['cityscape 城市景观'],
    examPoints: []
  },
  large: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'larger', superlative: 'largest' },
    synonyms: ['big 大的', 'huge 巨大的', 'massive 庞大的', 'enormous 巨大的'],
    antonyms: ['small 小的', 'tiny 微小的', 'minute 极小的'],
    examPoints: []
  },
  late: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'later', superlative: 'latest' },
    synonyms: ['tardy 迟的', 'delayed 延迟的', 'behind 滞后的', 'overdue 迟到的'],
    antonyms: ['early 早的', 'prompt 及时的', 'punctual 准时的'],
    examPoints: []
  },
  latter: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['last 最后的', 'final 最终的', 'second 后者的', 'closing 末尾的'],
    antonyms: ['former 前者的', 'first 第一的', 'initial 最初的'],
    examPoints: []
  },
  launch: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['start 发射', 'initiate 启动', 'begin 开始', 'commence 发起'],
    antonyms: ['end 结束', 'terminate 终止', 'halt 停止'],
    examPoints: []
  },
  lavish: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['luxurious 奢华的', 'extravagant 奢侈的', 'generous 慷慨的', 'abundant 丰富的'],
    antonyms: ['frugal 节俭的', 'modest 适度的', 'meager 贫乏的'],
    examPoints: []
  },
  lawful: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['legal 合法的', 'legitimate 合法的', 'valid 有效的', 'authorized 授权的'],
    antonyms: ['illegal 非法的', 'unlawful 不合法的', 'illicit 违法的'],
    examPoints: []
  },
  lay: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['place 放置', 'put 放', 'set 摆放', 'deposit 放下'],
    antonyms: ['lift 举起', 'remove 移除', 'pick up 拿起'],
    examPoints: []
  },
  lean: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['slant 倾斜', 'tilt 倾斜', 'incline 倾斜', 'bend 弯曲'],
    antonyms: ['straighten 挺直', 'stand erect 站直'],
    examPoints: []
  },
  leap: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['jump 跳', 'spring 弹跳', 'bound 跳跃', 'vault 跃过'],
    antonyms: ['fall 落下', 'drop 下降'],
    examPoints: []
  },
  lease: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['rent 租赁', 'charter 包租', 'hire 租用', 'let 出租'],
    antonyms: ['own 拥有', 'buy 购买'],
    examPoints: []
  },
  legal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['lawful 合法的', 'legitimate 合法的', 'valid 有效的', 'authorized 授权的'],
    antonyms: ['illegal 非法的', 'unlawful 不合法的', 'illicit 违法的'],
    examPoints: []
  },
  leisure: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['free time 空闲', 'relaxation 放松', 'recreation 娱乐', 'ease 休闲'],
    antonyms: ['work 工作', 'labor 劳动', 'duty 职责'],
    examPoints: []
  },
  length: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['extent 长度', 'distance 距离', 'span 跨度', 'measure 尺寸'],
    antonyms: ['shortness 短', 'brevity 简短'],
    examPoints: []
  },
  less: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fewer 较少的', 'reduced 减少的', 'smaller 更小的', 'minor 更少的'],
    antonyms: ['more 更多的', 'greater 更大的'],
    examPoints: []
  },
  liable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['responsible 有责任的', 'accountable 应负责的', 'answerable 应负责任的', 'subject 易受...的'],
    antonyms: ['exempt 豁免的', 'immune 免疫的'],
    examPoints: []
  },
  liberal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['progressive 进步的', 'open-minded 开明的', 'generous 慷慨的', 'tolerant 宽容的'],
    antonyms: ['conservative 保守的', 'restrictive 限制性的', 'narrow-minded 狭隘的'],
    examPoints: []
  },
  liberty: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['freedom 自由', 'independence 独立', 'autonomy 自主权', 'emancipation 解放'],
    antonyms: ['captivity 囚禁', 'slavery 奴役', 'restriction 限制'],
    examPoints: []
  },
  license: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['permit 许可证', 'authorization 授权', 'certificate 证书', 'consent 同意'],
    antonyms: ['prohibition 禁止', 'ban 禁令'],
    examPoints: []
  },
  limit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['restrict 限制', 'confine 限定', 'bound 限制', 'cap 上限'],
    antonyms: ['expand 扩大', 'extend 延伸', 'unlimited 无限制的'],
    examPoints: []
  },
  line: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['row 行', 'queue 队列', 'lineup 排列', 'boundary 界线'],
    antonyms: ['scatter 分散'],
    examPoints: []
  },
  link: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['connect 连接', 'join 连接', 'attach 连接', 'associate 关联'],
    antonyms: ['disconnect 断开', 'separate 分开', 'detach 分离'],
    examPoints: []
  },
  liquid: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fluid 液体', 'solution 溶液', 'melt 融化的', 'flowing 流动的'],
    antonyms: ['solid 固体', 'gas 气体'],
    examPoints: []
  },
  list: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['catalog 目录', 'register 登记表', 'inventory 清单', 'record 记录'],
    antonyms: ['delete 删除'],
    examPoints: []
  },
  literary: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bookish 书卷气的', 'scholarly 学术的', 'educated 有文化的', 'learned 博学的'],
    antonyms: ['illiterate 不识字的', 'uneducated 未受教育的'],
    examPoints: []
  },
  load: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['burden 负载', 'cargo 货物', 'freight 货运', 'weight 重物'],
    antonyms: ['unload 卸货', 'empty 排空'],
    examPoints: []
  },
  local: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['regional 地方的', 'community 社区的', 'nearby 附近的', 'domestic 本地的'],
    antonyms: ['national 全国的', 'international 国际的', 'global 全球的'],
    examPoints: []
  },
  locate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['find 找到', 'discover 发现', 'situate 位于', 'place 定位'],
    antonyms: ['lose 丢失', 'misplace 放错'],
    examPoints: []
  },
  lodge: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['stay 住宿', 'reside 居住', 'accommodate 提供住宿', 'board 寄宿'],
    antonyms: ['depart 离开', 'evict 逐出'],
    examPoints: []
  },
  logic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['reasoning 推理', 'rationale 逻辑', 'sense 理性', 'deduction 演绎'],
    antonyms: ['irrationality 非理性', 'fallacy 谬误'],
    examPoints: []
  },
  lonely: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['solitary 孤独的', 'isolated 孤立的', 'lonesome 寂寞的', 'desolate 荒凉的'],
    antonyms: ['accompanied 有人陪伴的', 'crowded 拥挤的', 'sociable 好交际的'],
    examPoints: []
  },
  loose: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['slack 松的', 'free 自由的', 'unfastened 未系紧的', 'relaxed 松弛的'],
    antonyms: ['tight 紧的', 'secure 固定的', 'bound 绑着的'],
    examPoints: []
  },
  loyal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['faithful 忠诚的', 'devoted 忠实的', 'true 忠实的', 'steadfast 坚定的'],
    antonyms: ['disloyal 不忠诚的', 'treacherous 背叛的', 'unfaithful 不忠的'],
    examPoints: []
  },
  luxury: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['extravagance 奢华', 'opulence 富裕', 'lavishness 奢侈', 'indulgence 放纵'],
    antonyms: ['poverty 贫穷', 'necessity 必需品', 'frugality 节俭'],
    examPoints: []
  },
  magnificent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['splendid 壮丽的', 'grand 宏伟的', 'majestic 壮观的', 'glorious 辉煌的'],
    antonyms: ['ordinary 普通的', 'modest 朴素的', 'plain 平凡的'],
    examPoints: []
  },
  major: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['main 主要的', 'principal 首要的', 'chief 主要的', 'primary 主要的'],
    antonyms: ['minor 次要的', 'secondary 次要的', 'insignificant 不重要的'],
    examPoints: []
  },
  male: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['masculine 男性的', 'man 男人', 'manly 有男子气概的'],
    antonyms: ['female 女性', 'feminine 女性的'],
    examPoints: []
  },
  mandate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['order 命令', 'decree 颁布', 'directive 指令', 'requirement 要求'],
    antonyms: ['suggestion 建议', 'option 选择'],
    examPoints: []
  },
  manifest: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['clear 明显的', 'evident 显然的', 'obvious 明白的', 'apparent 显然的'],
    antonyms: ['hidden 隐藏的', 'obscure 模糊的', 'concealed 隐蔽的'],
    examPoints: []
  },
  manual: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['handbook 手册', 'guide 指南', 'hand-done 手工的', 'physical 体力的'],
    antonyms: ['automatic 自动的', 'mechanized 机械化的'],
    examPoints: []
  },
  margin: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['edge 边缘', 'border 边界', 'border 余地', 'allowance 余量'],
    antonyms: ['center 中心', 'core 核心'],
    examPoints: []
  },
  mark: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sign 标记', 'indication 标志', 'symbol 符号', 'stain 痕迹'],
    antonyms: ['erase 擦除', 'remove 移除'],
    examPoints: []
  },
  mass: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bulk 大量', 'volume 体积', 'heap 堆', 'multitude 大量'],
    antonyms: ['bit 少量', 'trace 微量'],
    examPoints: []
  },
  master: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['expert 专家', 'professional 专业人士', 'commander 掌控者', 'authority 权威'],
    antonyms: ['novice 新手', 'amateur 业余者', 'beginner 初学者'],
    examPoints: []
  },
  match: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pair 配对', 'correspond 匹配', 'equal 匹敌', 'suit 适合'],
    antonyms: ['differ 不同', 'clash 冲突', 'mismatch 不匹配'],
    examPoints: []
  },
  material: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['substance 物质', 'matter 物质', 'fabric 材料', 'stuff 原料'],
    antonyms: ['immaterial 非物质的', 'spiritual 精神的'],
    examPoints: []
  },
  mature: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ripe 成熟的', 'developed 发育成熟的', 'grown 长成的', 'adult 成年的'],
    antonyms: ['immature 未成熟的', 'childish 幼稚的', 'green 未成熟的'],
    examPoints: []
  },
  maximum: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['highest 最高的', 'greatest 最大的', 'peak 峰值', 'utmost 最大的'],
    antonyms: ['minimum 最小的', 'lowest 最低的', 'least 最少的'],
    examPoints: []
  },
  means: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['method 手段', 'way 方式', 'resource 资源', 'instrument 工具'],
    antonyms: ['end 目的'],
    examPoints: []
  },
  measure: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['assess 测量', 'gauge 计量', 'calculate 衡量', 'evaluate 评估'],
    antonyms: ['estimate 估计', 'guess 猜测'],
    examPoints: []
  },
  medicine: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['drug 药物', 'remedy 药物', 'medication 药剂', 'treatment 治疗'],
    antonyms: ['poison 毒药', 'disease 疾病'],
    examPoints: []
  },
  medium: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['middle 中间的', 'intermediate 中间的', 'average 中等的', 'moderate 适中的'],
    antonyms: ['extreme 极端的', 'maximum 最大的', 'minimum 最小的'],
    examPoints: []
  },
  meet: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['encounter 遇见', 'gather 聚会', 'assemble 集合', 'satisfy 满足'],
    antonyms: ['avoid 避开', 'miss 错过', 'part 分离'],
    examPoints: []
  },
  melt: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['dissolve 融化', 'thaw 解冻', 'liquefy 液化', 'fuse 熔化'],
    antonyms: ['freeze 冻结', 'solidify 凝固', 'harden 变硬'],
    examPoints: []
  },
  member: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['participant 成员', 'associate 成员', 'part 组成部分', 'constituent 成员'],
    antonyms: ['outsider 局外人', 'nonmember 非成员'],
    examPoints: []
  },
  memorial: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['monument 纪念碑', 'tribute 纪念', 'commemoration 纪念物', 'reminder 纪念物'],
    antonyms: ['destruction 毁坏'],
    examPoints: []
  },
  mental: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['intellectual 智力的', 'psychological 心理的', 'cognitive 认知的', 'brain 头脑的'],
    antonyms: ['physical 身体的', 'bodily 肉体的'],
    examPoints: []
  },
  mention: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['refer to 提及', 'cite 引述', 'state 陈述', 'note 提到'],
    antonyms: ['omit 省略', 'ignore 忽视', 'conceal 隐藏'],
    examPoints: []
  },
  merchant: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['trader 商人', 'dealer 经销商', 'seller 卖家', 'retailer 零售商'],
    antonyms: ['buyer 买家', 'consumer 消费者'],
    examPoints: []
  },
  mere: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['only 仅仅的', 'simple 纯粹的', 'bare 仅仅的', 'just 只不过的'],
    antonyms: ['significant 重要的', 'considerable 相当大的'],
    examPoints: []
  },
  merge: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['combine 合并', 'unite 联合', 'blend 融合', 'amalgamate 合并'],
    antonyms: ['separate 分开', 'divide 分割', 'split 分裂'],
    examPoints: []
  },
  merit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['worth 价值', 'value 优点', 'excellence 优秀', 'virtue 优点'],
    antonyms: ['fault 缺点', 'demerit 缺点', 'defect 缺陷'],
    examPoints: []
  },
  mighty: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['powerful 强大的', 'strong 强壮的', 'forceful 有力的', 'potent 强有力的'],
    antonyms: ['weak 弱的', 'feeble 虚弱的', 'powerless 无力的'],
    examPoints: []
  },
  mild: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gentle 温和的', 'soft 柔和的', 'moderate 适度的', 'calm 平和的'],
    antonyms: ['harsh 严厉的', 'severe 严重的', 'extreme 极端的'],
    examPoints: []
  },
  military: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['armed 武装的', 'army 军队的', 'defense 国防的', 'combat 战斗的'],
    antonyms: ['civilian 平民的', 'civil 民用的'],
    examPoints: []
  },
  minimum: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['lowest 最低的', 'least 最少的', 'smallest 最小的', 'slightest 最少的'],
    antonyms: ['maximum 最大的', 'highest 最高的', 'greatest 最大的'],
    examPoints: []
  },
  minor: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['lesser 较小的', 'smaller 较小的', 'secondary 次要的', 'insignificant 不重要的'],
    antonyms: ['major 主要的', 'important 重要的', 'significant 重要的'],
    examPoints: []
  },
  minute: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tiny 微小的', 'small 小的', 'microscopic 微小的', 'diminutive 极小的'],
    antonyms: ['huge 巨大的', 'enormous 庞大的', 'massive 大量的'],
    examPoints: []
  },
  mirror: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['reflect 反映', 'echo 映照', 'imitate 模仿', 'copy 复制'],
    antonyms: ['distort 扭曲'],
    examPoints: []
  },
  miserable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['wretched 悲惨的', 'unhappy 不幸的', 'sad 悲伤的', 'pitiful 可怜的'],
    antonyms: ['happy 快乐的', 'joyful 高兴的', 'content 满足的'],
    examPoints: []
  },
  model: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['example 模范', 'pattern 模式', 'prototype 原型', 'standard 标准'],
    antonyms: ['copy 副本'],
    examPoints: []
  },
  moderate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['mild 适度的', 'temperate 适度的', 'reasonable 适中的', 'restrained 有节制的'],
    antonyms: ['extreme 极端的', 'excessive 过度的', 'radical 激进的'],
    examPoints: []
  },
  modern: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'more modern', superlative: 'most modern' },
    synonyms: ['contemporary 现代的', 'current 当前的', 'up-to-date 最新的', 'new 新的'],
    antonyms: ['ancient 古老的', 'old 旧的', 'obsolete 过时的'],
    examPoints: []
  },
  monitor: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['observe 监控', 'watch 监视', 'track 跟踪', 'oversee 监督'],
    antonyms: ['ignore 忽视', 'neglect 忽略'],
    examPoints: []
  },
  monopoly: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['control 垄断', 'domination 支配', 'exclusive right 专营权', 'possession 占有'],
    antonyms: ['competition 竞争', 'free market 自由市场'],
    examPoints: []
  },
  mood: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['temper 心情', 'state of mind 心境', 'spirit 情绪', 'disposition 心境'],
    antonyms: ['composure 镇定'],
    examPoints: []
  },
  moral: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ethical 道德的', 'righteous 正义的', 'virtuous 有道德的', 'principled 有原则的'],
    antonyms: ['immoral 不道德的', 'wicked 邪恶的', 'corrupt 腐败的'],
    examPoints: []
  },
  motion: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['movement 运动', 'action 动作', 'gesture 手势', 'activity 活动'],
    antonyms: ['stillness 静止', 'rest 休息', 'immobility 不动'],
    examPoints: []
  },
  motive: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['reason 动机', 'incentive 激励', 'purpose 目的', 'drive 驱动力'],
    antonyms: ['coincidence 巧合'],
    examPoints: []
  },
  mount: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['climb 攀登', 'ascend 登上', 'increase 增加', 'grow 增长'],
    antonyms: ['descend 下降', 'dismount 下马', 'decrease 减少'],
    examPoints: []
  },
  mourn: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['grieve 哀悼', 'lament 哀叹', 'sorrow 悲伤', 'weep 哀泣'],
    antonyms: ['rejoice 欢庆', 'celebrate 庆祝'],
    examPoints: []
  },
  mutual: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['shared 共同的', 'common 共同的', 'joint 联合的', 'reciprocal 相互的'],
    antonyms: ['one-sided 单方面的', 'individual 个人的'],
    examPoints: []
  },
  naked: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bare 裸露的', 'undressed 裸体的', 'exposed 暴露的', 'unclothed 未穿衣的'],
    antonyms: ['clothed 穿衣的', 'dressed 穿着衣服的', 'covered 覆盖的'],
    examPoints: []
  },
  native: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['indigenous 本土的', 'original 原始的', 'local 当地的', 'born 天生的'],
    antonyms: ['foreign 外国的', 'alien 外来的', 'imported 进口的'],
    examPoints: []
  },
  natural: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['innate 天然的', 'instinctive 本能的', 'normal 正常的', 'organic 有机的'],
    antonyms: ['artificial 人造的', 'synthetic 合成的', 'unnatural 不自然的'],
    examPoints: []
  },
  near: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['close 近的', 'nearby 附近的', 'adjacent 邻近的', 'approaching 接近的'],
    antonyms: ['far 远的', 'distant 遥远的', 'remote 偏远的'],
    examPoints: []
  },
  neat: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tidy 整洁的', 'orderly 有序的', 'clean 干净的', 'organized 有条理的'],
    antonyms: ['messy 凌乱的', 'untidy 不整洁的', 'disorderly 杂乱的'],
    examPoints: []
  },
  necessary: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['essential 必要的', 'required 必需的', 'vital 必不可少的', 'indispensable 不可或缺的'],
    antonyms: ['unnecessary 不必要的', 'optional 可选的', 'superfluous 多余的'],
    examPoints: []
  },
  negative: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['adverse 不利的', 'unfavorable 不良的', 'pessimistic 消极的', 'contrary 相反的'],
    antonyms: ['positive 积极的', 'favorable 有利的', 'optimistic 乐观的'],
    examPoints: []
  },
  neglect: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ignore 忽视', 'disregard 不顾', 'omit 疏忽', 'overlook 忽略'],
    antonyms: ['attend 照料', 'care 关心', 'notice 注意到'],
    examPoints: []
  },
  negotiate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bargain 谈判', 'discuss 协商', 'arrange 商定', 'compromise 妥协'],
    antonyms: ['demand 强求', 'dictate 独断'],
    examPoints: []
  },
  neighbor: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['resident 邻居', 'next-door 隔壁的', 'adjoining 毗邻的', 'nearby 附近的'],
    antonyms: ['stranger 陌生人'],
    examPoints: []
  },
  neutral: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['impartial 中立的', 'unbiased 无偏见的', 'objective 客观的', 'detached 超然的'],
    antonyms: ['biased 有偏见的', 'partial 偏袒的', 'prejudiced 有成见的'],
    examPoints: []
  },
  noble: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['honorable 高尚的', 'dignified 尊贵的', 'virtuous 崇高的', 'grand 高贵的'],
    antonyms: ['ignoble 卑鄙的', 'base 低贱的', 'humble 卑微的'],
    examPoints: []
  },
  nominal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['minimal 名义上的', 'token 象征性的', 'insignificant 微不足道的', 'titular 名义上的'],
    antonyms: ['substantial 实质性的', 'actual 实际的', 'real 真正的'],
    examPoints: []
  },
  normal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['regular 正常的', 'standard 标准的', 'typical 典型的', 'ordinary 普通的'],
    antonyms: ['abnormal 不正常的', 'unusual 不寻常的', 'irregular 不规则的'],
    examPoints: []
  },
  notable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['remarkable 显著的', 'prominent 著名的', 'noteworthy 值得注意的', 'distinguished 杰出的'],
    antonyms: ['ordinary 普通的', 'insignificant 不重要的', 'unknown 不知名的'],
    examPoints: []
  },
  notice: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['observe 注意到', 'perceive 察觉', 'detect 发觉', 'spot 认出'],
    antonyms: ['overlook 忽略', 'ignore 忽视', 'miss 错过'],
    examPoints: []
  },
  notion: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['idea 概念', 'concept 观念', 'thought 想法', 'belief 信念'],
    antonyms: ['fact 事实', 'reality 现实'],
    examPoints: []
  },
  novel: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['new 新奇的', 'fresh 新颖的', 'original 独创的', 'innovative 创新的'],
    antonyms: ['old 旧的', 'familiar 熟悉的', 'traditional 传统的'],
    examPoints: []
  },
  numerous: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['many 许多的', 'abundant 大量的', 'plentiful 丰富的', 'countless 无数的'],
    antonyms: ['few 少数的', 'rare 稀少的', 'scarce 稀缺的'],
    examPoints: []
  },
  obey: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['comply 遵从', 'follow 服从', 'observe 遵守', 'submit 顺从'],
    antonyms: ['disobey 不服从', 'defy 违抗', 'resist 抵抗'],
    examPoints: []
  },
  obscure: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unclear 模糊的', 'vague 含糊的', 'dim 昏暗的', 'ambiguous 暧昧的'],
    antonyms: ['clear 清楚的', 'obvious 明显的', 'evident 明白的'],
    examPoints: []
  },
  obstacle: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['barrier 障碍', 'hindrance 阻碍', 'impediment 障碍', 'block 障碍物'],
    antonyms: ['help 帮助', 'assistance 协助', 'advantage 优势'],
    examPoints: []
  },
  occasion: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['event 场合', 'opportunity 时机', 'time 时候', 'instance 时刻'],
    antonyms: ['routine 常规'],
    examPoints: []
  },
  occupy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['inhabit 占据', 'reside 居住', 'fill 填满', 'engage 占用'],
    antonyms: ['vacate 腾出', 'leave 离开', 'empty 倒空'],
    examPoints: []
  },
  odd: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['strange 奇怪的', 'peculiar 古怪的', 'unusual 不寻常的', 'weird 奇特的'],
    antonyms: ['normal 正常的', 'ordinary 普通的', 'typical 典型的'],
    examPoints: []
  },
  official: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['authorized 官方的', 'formal 正式的', 'approved 正式的', 'authorized 法定的'],
    antonyms: ['unofficial 非官方的', 'informal 非正式的'],
    examPoints: []
  },
  ongoing: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['continuing 持续的', 'current 当前的', 'active 进行中的', 'continual 不断的'],
    antonyms: ['completed 已完成的', 'finished 结束的', 'terminated 终止的'],
    examPoints: []
  },
  opposite: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['contrary 相反的', 'opposing 对立的', 'reverse 反向的', 'antithetical 对立的'],
    antonyms: ['similar 相似的', 'same 相同的', 'identical 一致的'],
    examPoints: []
  },
  optimistic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hopeful 乐观的', 'positive 积极的', 'upbeat 乐天的', 'sanguine 乐观的'],
    antonyms: ['pessimistic 悲观的', 'negative 消极的', 'cynical 愤世嫉俗的'],
    examPoints: []
  },
  option: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['choice 选择', 'alternative 替代', 'selection 挑选', 'possibility 可能性'],
    antonyms: ['obligation 义务', 'requirement 要求'],
    examPoints: []
  },
  ordinary: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['normal 普通的', 'common 常见的', 'usual 平常的', 'average 一般的'],
    antonyms: ['extraordinary 非凡的', 'unusual 不寻常的', 'exceptional 异常的'],
    examPoints: []
  },
  outcome: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['result 结果', 'consequence 后果', 'effect 影响', 'conclusion 结论'],
    antonyms: ['cause 原因', 'origin 起源', 'beginning 开始'],
    examPoints: []
  },
  outdoor: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['outside 户外的', 'open-air 露天的', 'external 外部的', 'exterior 室外的'],
    antonyms: ['indoor 室内的', 'inside 内部的'],
    examPoints: []
  },
  outer: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['external 外部的', 'outside 外面的', 'exterior 外部的', 'surface 表面的'],
    antonyms: ['inner 内部的', 'internal 内部的', 'interior 内部的'],
    examPoints: []
  },
  outlet: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['exit 出口', 'vent 排气口', 'channel 渠道', 'opening 出口'],
    antonyms: ['inlet 入口', 'entrance 入口'],
    examPoints: []
  },
  outline: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sketch 提纲', 'summary 概述', 'draft 草案', 'framework 框架'],
    antonyms: ['detail 细节', 'full text 全文'],
    examPoints: []
  },
  outlook: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['perspective 观点', 'viewpoint 视角', 'prospect 前景', 'attitude 态度'],
    antonyms: ['retrospect 回顾'],
    examPoints: []
  },
  output: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['production 产出', 'yield 产量', 'result 结果', 'product 产品'],
    antonyms: ['input 输入', 'intake 摄入'],
    examPoints: []
  },
  outstanding: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['excellent 杰出的', 'remarkable 卓越的', 'exceptional 出众的', 'prominent 著名的'],
    antonyms: ['ordinary 普通的', 'mediocre 平庸的', 'average 一般的'],
    examPoints: []
  },
  overcome: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['defeat 战胜', 'conquer 征服', 'surmount 克服', 'overwhelm 压倒'],
    antonyms: ['succumb 屈服', 'yield 屈服', 'surrender 投降'],
    examPoints: []
  },
  overlook: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ignore 忽视', 'neglect 忽略', 'miss 错过', 'disregard 不顾'],
    antonyms: ['notice 注意到', 'observe 观察', 'attend 留意'],
    examPoints: []
  },
  overseas: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['abroad 海外的', 'foreign 外国的', 'international 国际的', 'across the sea 越洋的'],
    antonyms: ['domestic 国内的', 'local 本地的'],
    examPoints: []
  },
  overwhelm: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['overpower 压倒', 'defeat 击败', 'engulf 吞没', 'crush 粉碎'],
    antonyms: ['yield 让步', 'submit 屈服'],
    examPoints: []
  },
  pain: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ache 疼痛', 'suffering 痛苦', 'discomfort 不适', 'agony 剧痛'],
    antonyms: ['pleasure 快乐', 'comfort 舒适', 'relief 缓解'],
    examPoints: []
  },
  pale: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['white 苍白的', 'colorless 无血色的', 'faint 暗淡的', 'ashen 灰白的'],
    antonyms: ['flushed 红润的', 'rosy 玫瑰色的', 'colorful 有颜色的'],
    examPoints: []
  },
  panic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fear 恐慌', 'alarm 惊恐', 'fright 恐惧', 'terror 恐怖'],
    antonyms: ['calm 平静', 'composure 镇定', 'confidence 自信'],
    examPoints: []
  },
  parallel: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['similar 平行的', 'corresponding 对应的', 'analogous 类似的', 'matching 匹配的'],
    antonyms: ['diverging 分歧的', 'perpendicular 垂直的', 'intersecting 交叉的'],
    examPoints: []
  },
  pardon: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['forgive 原谅', 'excuse 宽恕', 'absolve 赦免', 'acquit 宣告无罪'],
    antonyms: ['condemn 谴责', 'punish 惩罚', 'blame 责备'],
    examPoints: []
  },
  partial: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['incomplete 不完全的', 'biased 偏袒的', 'fractional 部分的', 'halfway 一半的'],
    antonyms: ['complete 完整的', 'total 全部的', 'impartial 公正的'],
    examPoints: []
  },
  participate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['join 参与', 'engage 参加', 'share 分享', 'take part 参与'],
    antonyms: ['withdraw 退出', 'observe 观察', 'boycott 抵制'],
    examPoints: []
  },
  particular: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['specific 特定的', 'special 特殊的', 'distinctive 独特的', 'precise 精确的'],
    antonyms: ['general 普遍的', 'broad 广泛的', 'vague 模糊的'],
    examPoints: []
  },
  partner: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['associate 合伙人', 'colleague 同事', 'companion 同伴', 'ally 盟友'],
    antonyms: ['rival 竞争者', 'opponent 对手', 'enemy 敌人'],
    examPoints: []
  },
  passage: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['passage 通道', 'corridor 走廊', 'excerpt 摘录', 'transit 通过'],
    antonyms: ['blockade 封锁'],
    examPoints: []
  },
  passion: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['emotion 激情', 'fervor 热忱', 'ardor 热情', 'zeal 热忱'],
    antonyms: ['apathy 冷漠', 'indifference 漠然', 'calmness 平静'],
    examPoints: []
  },
  passive: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['inactive 被动的', 'submissive 顺从的', 'lethargic 消极的', 'compliant 顺从的'],
    antonyms: ['active 主动的', 'dynamic 动态的', 'assertive 积极的'],
    examPoints: []
  },
  past: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['previous 过去的', 'former 先前的', 'bygone 往昔的', 'preceding 在前的'],
    antonyms: ['present 当前的', 'future 未来的', 'current 现在的'],
    examPoints: []
  },
  pat: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tap 轻拍', 'stroke 抚摸', 'caress 抚摸', 'slap 轻拍'],
    antonyms: ['strike 重击'],
    examPoints: []
  },
  patent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['license 专利', 'copyright 版权', 'exclusive right 专有权', 'obvious 显然的'],
    antonyms: ['hidden 隐藏的'],
    examPoints: []
  },
  path: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['route 路径', 'track 轨道', 'way 道路', 'trail 小径'],
    antonyms: ['obstacle 障碍'],
    examPoints: []
  },
  pattern: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['design 图案', 'model 模式', 'template 模板', 'arrangement 排列'],
    antonyms: ['randomness 随机性', 'chaos 混乱'],
    examPoints: []
  },
  pause: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['stop 暂停', 'halt 停顿', 'break 间歇', 'hesitate 犹豫'],
    antonyms: ['continue 继续', 'proceed 继续', 'resume 恢复'],
    examPoints: []
  },
  peak: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['summit 顶峰', 'top 顶点', 'apex 顶点', 'zenith 顶点'],
    antonyms: ['bottom 底部', 'base 底部', 'trough 低谷'],
    examPoints: []
  },
  peculiar: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['strange 奇怪的', 'odd 古怪的', 'unusual 不寻常的', 'distinctive 特有的'],
    antonyms: ['normal 正常的', 'ordinary 普通的', 'common 常见的'],
    examPoints: []
  },
  penalty: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['punishment 惩罚', 'fine 罚款', 'sanction 制裁', 'forfeiture 没收'],
    antonyms: ['reward 奖励', 'prize 奖赏', 'benefit 利益'],
    examPoints: []
  },
  pending: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['awaiting 待定的', 'unresolved 未解决的', 'imminent 即将发生的', 'suspended 悬而未决的'],
    antonyms: ['resolved 已解决的', 'completed 已完成的', 'decided 已决定的'],
    examPoints: []
  },
  perfect: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['flawless 完美的', 'ideal 理想的', 'complete 完整的', 'excellent 优秀的'],
    antonyms: ['imperfect 不完美的', 'flawed 有缺陷的', 'defective 有缺点的'],
    examPoints: []
  },
  perhaps: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['maybe 也许', 'possibly 可能', 'probably 大概', 'potentially 有可能'],
    antonyms: ['certainly 一定', 'definitely 肯定', 'impossibly 不可能'],
    examPoints: []
  },
  permanent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['lasting 永久的', 'enduring 持久的', 'perpetual 永恒的', 'stable 稳定的'],
    antonyms: ['temporary 临时的', 'transient 短暂的', 'fleeting 转瞬即逝的'],
    examPoints: []
  },
  persist: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['continue 坚持', 'endure 持续', 'persevere 坚持不懈', 'maintain 保持'],
    antonyms: ['quit 放弃', 'yield 让步', 'stop 停止'],
    examPoints: []
  },
  person: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['individual 个人', 'human 人', 'being 个体', 'individual 人物'],
    antonyms: ['group 群体'],
    examPoints: []
  },
  perspective: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['viewpoint 视角', 'outlook 观点', 'standpoint 立场', 'angle 角度'],
    antonyms: ['blindness 盲目'],
    examPoints: []
  },
  phase: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['stage 阶段', 'period 时期', 'step 步骤', 'point 阶段'],
    antonyms: ['completion 完成'],
    examPoints: []
  },
  phenomenon: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['occurrence 现象', 'event 事件', 'fact 事实', 'marvel 奇观'],
    antonyms: ['fiction 虚构'],
    examPoints: []
  },
  physical: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bodily 身体的', 'material 物质的', 'corporeal 肉体的', 'tangible 有形的'],
    antonyms: ['mental 精神的', 'spiritual 精神的', 'immaterial 非物质的'],
    examPoints: []
  },
  pierce: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['penetrate 穿透', 'puncture 刺穿', 'stab 刺', 'pierce 刺破'],
    antonyms: ['seal 密封', 'block 堵塞'],
    examPoints: []
  },
  pile: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['stack 堆', 'heap 垛', 'mass 一堆', 'accumulation 堆积'],
    antonyms: ['scatter 分散', 'spread 散开'],
    examPoints: []
  },
  pilot: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['guide 引航', 'navigate 驾驶', 'steer 操纵', 'flyer 飞行员'],
    antonyms: ['passenger 乘客'],
    examPoints: []
  },
  pitch: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['throw 投掷', 'toss 抛', 'fling 扔', 'heave 用力投'],
    antonyms: ['catch 接住'],
    examPoints: []
  },
  pity: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['compassion 同情', 'sympathy 怜悯', 'mercy 怜悯', 'sorrow 悲伤'],
    antonyms: ['cruelty 残忍', 'indifference 漠不关心'],
    examPoints: []
  },
  plain: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['simple 朴素的', 'clear 清楚的', 'ordinary 平凡的', 'straightforward 直率的'],
    antonyms: ['elaborate 精致的', 'fancy 华丽的', 'complex 复杂的'],
    examPoints: []
  },
  plastic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['synthetic 合成的', 'flexible 可塑的', 'moldable 可塑的', 'polymer 聚合物'],
    antonyms: ['natural 天然的', 'rigid 僵硬的'],
    examPoints: []
  },
  plead: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['beg 恳求', 'implore 哀求', 'entreat 请求', 'appeal 恳求'],
    antonyms: ['demand 要求', 'command 命令'],
    examPoints: []
  },
  pleasant: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['agreeable 令人愉快的', 'enjoyable 愉快的', 'delightful 令人快乐的', 'pleasing 令人愉快的'],
    antonyms: ['unpleasant 令人不快的', 'disagreeable 令人不快的', 'annoying 烦人的'],
    examPoints: []
  },
  please: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['satisfy 使满意', 'delight 使高兴', 'gratify 使满足', 'content 使满足'],
    antonyms: ['displease 使不快', 'offend 冒犯', 'irritate 激怒'],
    examPoints: []
  },
  pledge: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['promise 保证', 'vow 发誓', 'oath 誓言', 'commitment 承诺'],
    antonyms: ['break 违背', 'retract 收回'],
    examPoints: []
  },
  plentiful: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['abundant 丰富的', 'ample 充足的', 'copious 大量的', 'bountiful 丰裕的'],
    antonyms: ['scarce 稀少的', 'insufficient 不足的', 'meager 贫乏的'],
    examPoints: []
  },
  plot: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['scheme 阴谋', 'conspiracy 密谋', 'plan 计划', 'storyline 情节'],
    antonyms: ['spontaneity 自发性'],
    examPoints: []
  },
  plunge: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['dive 投入', 'dip 浸入', 'submerge 潜入', 'fall 骤降'],
    antonyms: ['rise 上升', 'emerge 浮出'],
    examPoints: []
  },
  plus: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['additional 额外的', 'extra 附加的', 'added 增加的', 'positive 正的'],
    antonyms: ['minus 减', 'negative 负的'],
    examPoints: []
  },
  poison: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['toxin 毒物', 'venom 毒液', 'contaminate 污染', 'infect 毒害'],
    antonyms: ['cure 治愈', 'antidote 解毒剂'],
    examPoints: []
  },
  policy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['strategy 政策', 'plan 方针', 'principle 原则', 'guideline 指导方针'],
    antonyms: ['spontaneity 随意性'],
    examPoints: []
  },
  popular: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'more popular', superlative: 'most popular' },
    synonyms: ['widely-liked 受欢迎的', 'common 普遍的', 'favored 受青睐的', 'trendy 流行的'],
    antonyms: ['unpopular 不受欢迎的', 'obscure 不知名的', 'rare 稀少的'],
    examPoints: []
  },
  portion: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['part 部分', 'share 份额', 'segment 片段', 'fraction 一部分'],
    antonyms: ['whole 整体', 'total 全部'],
    examPoints: []
  },
  portray: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['depict 描绘', 'describe 描写', 'represent 表现', 'illustrate 描绘'],
    antonyms: ['distort 扭曲', 'misrepresent 歪曲'],
    examPoints: []
  },
  pose: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['present 造成', 'assume 假装', 'position 摆姿势', 'raise 提出'],
    antonyms: ['solve 解决', 'answer 回答'],
    examPoints: []
  },
  possible: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['feasible 可能的', 'achievable 可实现的', 'potential 潜在的', 'viable 可行的'],
    antonyms: ['impossible 不可能的', 'unfeasible 不可行的'],
    examPoints: []
  },
  post: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['position 岗位', 'mail 邮寄', 'station 驻地', 'place 安置'],
    antonyms: ['remove 移除', 'dismiss 撤职'],
    examPoints: []
  },
  potential: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['possible 潜在的', 'latent 潜在的', 'prospective 预期的', 'capability 潜力'],
    antonyms: ['actual 实际的', 'realized 已实现的'],
    examPoints: []
  },
  pour: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['flow 倾注', 'stream 流出', 'gush 涌出', 'discharge 倒出'],
    antonyms: ['trickle 滴流', 'drip 滴落'],
    examPoints: []
  },
  practical: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['useful 实用的', 'functional 实际的', 'pragmatic 务实的', 'realistic 现实的'],
    antonyms: ['impractical 不切实际的', 'theoretical 理论的', 'idealistic 理想主义的'],
    examPoints: []
  },
  praise: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['commend 表扬', 'compliment 赞美', 'acclaim 称赞', 'extol 颂扬'],
    antonyms: ['criticize 批评', 'condemn 谴责', 'blame 责备'],
    examPoints: []
  },
  pray: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['entreat 祈求', 'plead 恳求', 'appeal 祈求', 'petition 祈祷'],
    antonyms: ['demand 要求', 'command 命令'],
    examPoints: []
  },
  precise: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['exact 精确的', 'accurate 准确的', 'specific 确切的', 'definite 明确的'],
    antonyms: ['vague 模糊的', 'approximate 大约的', 'imprecise 不精确的'],
    examPoints: []
  },
  predict: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['forecast 预测', 'foresee 预见', 'anticipate 预期', 'prophesy 预言'],
    antonyms: ['recall 回忆', 'retrospect 回顾'],
    examPoints: []
  },
  pregnant: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['expecting 怀孕的', 'with child 怀孕的', 'carrying 怀有身孕的', 'fruitful 结果实的'],
    antonyms: ['barren 不育的', 'infertile 不孕的'],
    examPoints: []
  },
  present: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['current 当前的', 'gift 礼物', 'introduce 介绍', 'offer 呈现'],
    antonyms: ['absent 缺席的', 'past 过去的', 'future 未来的'],
    examPoints: []
  },
  press: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['push 按', 'compress 压缩', 'squeeze 挤压', 'urge 催促'],
    antonyms: ['release 释放', 'pull 拉', 'relax 放松'],
    examPoints: []
  },
  pretty: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['attractive 漂亮的', 'lovely 可爱的', 'beautiful 美丽的', 'charming 迷人的'],
    antonyms: ['ugly 丑陋的', 'plain 相貌平平的'],
    examPoints: []
  },
  previous: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['prior 先前的', 'preceding 在前的', 'former 前者的', 'earlier 早先的'],
    antonyms: ['subsequent 随后的', 'following 以下的', 'current 当前的'],
    examPoints: []
  },
  primary: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['main 主要的', 'principal 首要的', 'chief 主要的', 'fundamental 基本的'],
    antonyms: ['secondary 次要的', 'minor 次要的', 'subordinate 从属的'],
    examPoints: []
  },
  prime: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['chief 首要的', 'primary 主要的', 'peak 最佳的', 'crucial 关键的'],
    antonyms: ['secondary 次要的', 'inferior 劣质的'],
    examPoints: []
  },
  principal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['main 主要的', 'chief 首要的', 'primary 主要的', 'head 负责人'],
    antonyms: ['secondary 次要的', 'subordinate 从属的', 'minor 次要的'],
    examPoints: []
  },
  principle: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['rule 原则', 'law 法则', 'standard 标准', 'doctrine 信条'],
    antonyms: ['exception 例外'],
    examPoints: []
  },
  prior: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['previous 先前的', 'earlier 早先的', 'preceding 在前的', 'beforehand 事先的'],
    antonyms: ['subsequent 随后的', 'later 较晚的', 'following 之后的'],
    examPoints: []
  },
  prize: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['award 奖品', 'reward 奖赏', 'trophy 奖杯', 'honor 荣誉'],
    antonyms: ['penalty 惩罚', 'fine 罚款'],
    examPoints: []
  },
  probable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['likely 可能的', 'possible 有可能的', 'plausible 有道理的', 'presumable 可推测的'],
    antonyms: ['improbable 不大可能的', 'unlikely 不太可能的', 'certain 必然的'],
    examPoints: []
  },
  procedure: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['process 程序', 'method 方法', 'system 程序', 'routine 例行程序'],
    antonyms: ['spontaneity 随意性'],
    examPoints: []
  },
  proceed: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['continue 继续', 'advance 前进', 'progress 推进', 'go forward 前进'],
    antonyms: ['halt 停止', 'stop 停止', 'retreat 撤退'],
    examPoints: []
  },
  process: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['procedure 过程', 'method 方法', 'operation 操作', 'treat 处理'],
    antonyms: ['result 结果', 'outcome 结果'],
    examPoints: []
  },
  profession: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['occupation 职业', 'career 职业', 'vocation 职业', 'field 领域'],
    antonyms: ['hobby 爱好', 'pastime 消遣'],
    examPoints: []
  },
  profit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gain 利润', 'benefit 收益', 'return 回报', 'earnings 收入'],
    antonyms: ['loss 亏损', 'deficit 赤字', 'expense 支出'],
    examPoints: []
  },
  profound: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['deep 深刻的', 'intense 深远的', 'far-reaching 深远的', 'thorough 深入的'],
    antonyms: ['superficial 肤浅的', 'shallow 浅薄的', 'trivial 琐碎的'],
    examPoints: []
  },
  prohibit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['forbid 禁止', 'ban 取缔', 'outlaw 宣布非法', 'prevent 阻止'],
    antonyms: ['allow 允许', 'permit 许可', 'authorize 授权'],
    examPoints: []
  },
  project: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['plan 计划', 'undertake 项目', 'scheme 方案', 'predict 预测'],
    antonyms: ['complete 完成', 'abandon 放弃'],
    examPoints: []
  },
  prompt: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['quick 迅速的', 'immediate 立即的', 'swift 敏捷的', 'timely 及时的'],
    antonyms: ['slow 缓慢的', 'delayed 延迟的', 'tardy 迟缓的'],
    examPoints: []
  },
  proper: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['appropriate 适当的', 'suitable 合适的', 'correct 正确的', 'fitting 恰当的'],
    antonyms: ['improper 不适当的', 'unsuitable 不合适的', 'inappropriate 不恰当的'],
    examPoints: []
  },
  property: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['asset 财产', 'possession 所有物', 'estate 地产', 'belongings 财物'],
    antonyms: ['debt 债务'],
    examPoints: []
  },
  proportion: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ratio 比例', 'percentage 百分比', 'share 份额', 'balance 均衡'],
    antonyms: ['disproportion 不成比例'],
    examPoints: []
  },
  protest: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['object 抗议', 'oppose 反对', 'complain 抗议', 'demonstrate 示威'],
    antonyms: ['agree 同意', 'consent 赞同', 'approve 赞成'],
    examPoints: []
  },
  provoke: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['incite 激起', 'provoke 挑衅', 'stimulate 刺激', 'trigger 引发'],
    antonyms: ['calm 使平静', 'soothe 安抚', 'pacify 平息'],
    examPoints: []
  },
  publish: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['print 出版', 'release 发行', 'issue 发布', 'distribute 分发'],
    antonyms: ['withhold 扣留', 'suppress 压制', 'conceal 隐藏'],
    examPoints: []
  },
  pure: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['clean 纯净的', 'uncontaminated 未受污染的', 'clear 纯粹的', 'absolute 纯粹的'],
    antonyms: ['impure 不纯的', 'mixed 混合的', 'contaminated 受污染的'],
    examPoints: []
  },
  pursue: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['chase 追逐', 'follow 追求', 'seek 追求', 'track 追踪'],
    antonyms: ['flee 逃跑', 'abandon 放弃', 'evade 逃避'],
    examPoints: []
  },
  push: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['shove 推', 'thrust 猛推', 'propel 推动', 'press 按'],
    antonyms: ['pull 拉', 'drag 拖', 'draw 拉'],
    examPoints: []
  },
  qualify: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['certify 使合格', 'authorize 授权', 'entitle 使有资格', 'prepare 使具备资格'],
    antonyms: ['disqualify 使不合格', 'disbar 取消资格'],
    examPoints: []
  },
  quarter: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fourth 四分之一', 'section 区域', 'district 地区', 'portion 部分'],
    antonyms: ['whole 整体'],
    examPoints: []
  },
  query: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['question 查询', 'inquire 询问', 'ask 问', 'probe 探究'],
    antonyms: ['answer 回答', 'reply 回复'],
    examPoints: []
  },
  quit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['stop 放弃', 'resign 辞职', 'abandon 放弃', 'cease 停止'],
    antonyms: ['continue 继续', 'persist 坚持', 'start 开始'],
    examPoints: []
  },
  quote: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['cite 引用', 'reference 引述', 'repeat 复述', 'extract 摘录'],
    antonyms: ['paraphrase 改述'],
    examPoints: []
  },
  race: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['compete 比赛', 'contest 竞赛', 'nation 种族', 'rush 疾行'],
    antonyms: ['stroll 漫步', 'walk 步行'],
    examPoints: []
  },
  radical: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['extreme 激进的', 'drastic 激烈的', 'fundamental 根本的', 'revolutionary 革命的'],
    antonyms: ['moderate 适度的', 'conservative 保守的', 'gradual 渐进的'],
    examPoints: []
  },
  rage: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fury 狂怒', 'wrath 愤怒', 'anger 暴怒', 'tantrum 大发雷霆'],
    antonyms: ['calm 平静', 'composure 镇定', 'tranquility 宁静'],
    examPoints: []
  },
  raise: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['lift 举起', 'elevate 提升', 'increase 增加', 'boost 提高'],
    antonyms: ['lower 降低', 'decrease 减少', 'drop 下降'],
    examPoints: []
  },
  random: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['chance 随机的', 'arbitrary 任意的', 'haphazard 偶然的', 'unplanned 无计划的'],
    antonyms: ['planned 计划的', 'systematic 系统的', 'deliberate 故意的'],
    examPoints: []
  },
  rank: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['grade 等级', 'position 地位', 'status 地位', 'class 级别'],
    antonyms: ['equality 平等'],
    examPoints: []
  },
  rapid: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fast 快速的', 'quick 迅速的', 'swift 敏捷的', 'speedy 快的'],
    antonyms: ['slow 缓慢的', 'gradual 渐进的', 'leisurely 从容的'],
    examPoints: []
  },
  rate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['speed 速度', 'pace 步速', 'ratio 比率', 'grade 评级'],
    antonyms: ['stagnation 停滞'],
    examPoints: []
  },
  rather: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['instead 宁愿', 'preferably 宁可', 'somewhat 相当', 'quite 颇'],
    antonyms: ['exactly 恰好'],
    examPoints: []
  },
  raw: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unprocessed 生的', 'crude 未加工的', 'natural 天然的', 'rough 粗糙的'],
    antonyms: ['cooked 煮熟的', 'refined 精制的', 'processed 加工过的'],
    examPoints: []
  },
  reach: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['arrive 到达', 'attain 达到', 'achieve 实现', 'extend 延伸'],
    antonyms: ['fail 失败', 'miss 错过', 'fall short 未达到'],
    examPoints: []
  },
  react: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['respond 反应', 'reply 回应', 'act 行动', 'behave 反应'],
    antonyms: ['ignore 忽视', 'disregard 不理会'],
    examPoints: []
  },
  ready: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['prepared 准备好的', 'set 就绪的', 'available 可用的', 'willing 愿意的'],
    antonyms: ['unprepared 未准备的', 'reluctant 不情愿的', 'hesitant 犹豫的'],
    examPoints: []
  },
  realm: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['kingdom 领域', 'domain 领域', 'sphere 范围', 'territory 领土'],
    antonyms: ['outside 外部'],
    examPoints: []
  },
  rebel: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['revolt 反叛', 'mutiny 叛变', 'uprise 起义', 'defy 反抗'],
    antonyms: ['obey 服从', 'submit 屈从', 'comply 遵从'],
    examPoints: []
  },
  recall: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['remember 回忆', 'recollect 回想', 'retrieval 召回', 'retrieve 找回'],
    antonyms: ['forget 忘记', 'ignore 忽视'],
    examPoints: []
  },
  recent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['new 最近的', 'fresh 新的', 'current 当前的', 'late 近来的'],
    antonyms: ['old 旧的', 'ancient 古老的', 'dated 过时的'],
    examPoints: []
  },
  record: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['document 记录', 'register 登记', 'log 记录', 'note 记下'],
    antonyms: ['erase 擦除', 'delete 删除'],
    examPoints: []
  },
  reform: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['improve 改革', 'correct 纠正', 'amend 修正', 'revise 修订'],
    antonyms: ['corrupt 腐蚀', 'worsen 恶化'],
    examPoints: []
  },
  regard: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['consider 认为', 'view 看待', 'respect 尊重', 'concern 关于'],
    antonyms: ['disregard 不顾', 'ignore 忽视'],
    examPoints: []
  },
  region: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['area 区域', 'territory 领土', 'district 地区', 'zone 地带'],
    antonyms: ['whole 整体'],
    examPoints: []
  },
  register: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['record 登记', 'enroll 注册', 'log 记录', 'list 列入'],
    antonyms: ['deregister 注销', 'erase 擦除'],
    examPoints: []
  },
  regular: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['normal 正常的', 'standard 标准的', 'consistent 一致的', 'routine 常规的'],
    antonyms: ['irregular 不规则的', 'occasional 偶尔的', 'random 随机的'],
    examPoints: []
  },
  relax: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unwind 放松', 'rest 休息', 'ease 减轻', 'calm 使平静'],
    antonyms: ['tense 使紧张', 'stress 使紧张', 'agitate 使烦躁'],
    examPoints: []
  },
  release: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['free 释放', 'liberate 解放', 'discharge 释放', 'let go 放开'],
    antonyms: ['capture 捕获', 'detain 拘留', 'hold 保持'],
    examPoints: []
  },
  relevant: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pertinent 相关的', 'related 有关的', 'applicable 适用的', 'appropriate 相关的'],
    antonyms: ['irrelevant 不相关的', 'unrelated 无关的', 'inapplicable 不适用的'],
    examPoints: []
  },
  relief: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['comfort 缓解', 'alleviation 减轻', 'ease 宽慰', 'release 解脱'],
    antonyms: ['distress 痛苦', 'burden 负担', 'agony 苦恼'],
    examPoints: []
  },
  relieve: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ease 减轻', 'alleviate 缓解', 'comfort 安慰', 'soothe 安抚'],
    antonyms: ['aggravate 加重', 'worsen 恶化', 'intensify 加剧'],
    examPoints: []
  },
  remark: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['comment 评论', 'observe 评述', 'state 陈述', 'note 注意到'],
    antonyms: ['silence 沉默'],
    examPoints: []
  },
  remote: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['distant 遥远的', 'far 远的', 'isolated 偏远的', 'secluded 隔绝的'],
    antonyms: ['near 近的', 'close 接近的', 'nearby 附近的'],
    examPoints: []
  },
  remove: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['delete 移除', 'eliminate 消除', 'extract 提取', 'take away 拿走'],
    antonyms: ['add 添加', 'insert 插入', 'include 包括'],
    examPoints: []
  },
  renew: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['refresh 更新', 'restore 恢复', 'revive 复苏', 'rejuvenate 使恢复活力'],
    antonyms: ['exhaust 耗尽', 'deplete 消耗'],
    examPoints: []
  },
  repeat: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['reiterate 重复', 'restate 重述', 'echo 回声', 'duplicate 复制'],
    antonyms: ['change 改变', 'vary 变化'],
    examPoints: []
  },
  replace: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['substitute 替换', 'exchange 交换', 'displace 取代', 'supplant 代替'],
    antonyms: ['keep 保留', 'retain 保持', 'maintain 维持'],
    examPoints: []
  },
  reply: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['respond 回复', 'answer 回答', 'retort 反驳', 'react 回应'],
    antonyms: ['question 提问', 'ask 询问'],
    examPoints: []
  },
  report: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['describe 报道', 'narrate 叙述', 'record 记录', 'account 陈述'],
    antonyms: ['conceal 隐藏', 'suppress 压制'],
    examPoints: []
  },
  rescue: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['save 救援', 'deliver 拯救', 'free 解救', 'liberate 解放'],
    antonyms: ['endanger 危及', 'abandon 抛弃'],
    examPoints: []
  },
  research: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['investigate 研究', 'study 研究', 'explore 探索', 'examine 考察'],
    antonyms: ['ignore 忽视', 'guess 猜测'],
    examPoints: []
  },
  resemble: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['look like 相似', 'mirror 类似', 'parallel 类比', 'approximate 接近'],
    antonyms: ['differ 不同', 'contrast 对比'],
    examPoints: []
  },
  reserve: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['book 预订', 'retain 保留', 'save 储备', 'set aside 留出'],
    antonyms: ['cancel 取消', 'release 释放', 'use 使用'],
    examPoints: []
  },
  resign: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['quit 辞职', 'step down 退位', 'abdicate 退位', 'relinquish 放弃'],
    antonyms: ['retain 留任', 'continue 继续', 'accept 接受'],
    examPoints: []
  },
  resist: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['oppose 抵抗', 'withstand 抵御', 'fight 对抗', 'defy 违抗'],
    antonyms: ['submit 屈服', 'yield 让步', 'surrender 投降'],
    examPoints: []
  },
  resource: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['asset 资源', 'supply 供应', 'reserve 储备', 'fund 资金'],
    antonyms: ['deficiency 缺乏'],
    examPoints: []
  },
  restore: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['repair 修复', 'renew 恢复', 'rehabilitate 康复', 'revive 复原'],
    antonyms: ['destroy 毁坏', 'damage 损坏', 'demolish 拆除'],
    examPoints: []
  },
  restrict: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['limit 限制', 'confine 约束', 'constrain 限定', 'restrain 抑制'],
    antonyms: ['free 释放', 'liberate 解放', 'expand 扩大'],
    examPoints: []
  },
  retain: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['keep 保留', 'maintain 保持', 'preserve 维持', 'hold 持有'],
    antonyms: ['lose 失去', 'release 释放', 'discard 丢弃'],
    examPoints: []
  },
  retire: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['withdraw 退休', 'resign 退职', 'step down 退位', 'depart 离开'],
    antonyms: ['continue 继续', 'remain 留任'],
    examPoints: []
  },
  revenge: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['vengeance 复仇', 'retaliation 报复', 'reprisal 报复', 'payback 报复'],
    antonyms: ['forgiveness 宽恕', 'pardon 原谅'],
    examPoints: []
  },
  review: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['examine 审查', 'evaluate 评估', 'assess 回顾', 'inspect 检查'],
    antonyms: ['ignore 忽视', 'neglect 忽略'],
    examPoints: []
  },
  revise: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['amend 修订', 'modify 修改', 'alter 更改', 'correct 校正'],
    antonyms: ['maintain 保持', 'preserve 保留'],
    examPoints: []
  },
  revive: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['resurrect 复苏', 'restore 恢复', 'rejuvenate 使复苏', 'renew 使复兴'],
    antonyms: ['kill 杀死', 'destroy 毁灭', 'extinguish 熄灭'],
    examPoints: []
  },
  revolution: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['uprising 革命', 'rebellion 叛乱', 'revolt 起义', 'overturn 变革'],
    antonyms: ['stability 稳定', 'status quo 现状'],
    examPoints: []
  },
  reward: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['prize 奖励', 'award 奖赏', 'compensation 报酬', 'bonus 奖金'],
    antonyms: ['penalty 惩罚', 'punishment 处罚', 'fine 罚款'],
    examPoints: []
  },
  ridicule: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['mock 嘲笑', 'deride 嘲弄', 'scoff 嘲讽', 'scorn 嘲弄'],
    antonyms: ['praise 赞扬', 'compliment 赞美', 'respect 尊重'],
    examPoints: []
  },
  rigid: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['stiff 僵硬的', 'inflexible 不灵活的', 'strict 严格的', 'firm 坚硬的'],
    antonyms: ['flexible 灵活的', 'pliable 柔韧的', 'elastic 有弹性的'],
    examPoints: []
  },
  rise: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ascend 上升', 'increase 增加', 'climb 攀升', 'soar 飙升'],
    antonyms: ['fall 下降', 'descend 下降', 'drop 下跌'],
    examPoints: []
  },
  rival: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['competitor 竞争者', 'opponent 对手', 'challenger 挑战者', 'adversary 敌手'],
    antonyms: ['ally 盟友', 'partner 合伙人', 'supporter 支持者'],
    examPoints: []
  },
  roar: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bellow 吼叫', 'howl 咆哮', 'growl 低吼', 'shout 大吼'],
    antonyms: ['whisper 低语', 'murmur 嘀咕'],
    examPoints: []
  },
  role: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['part 角色', 'function 作用', 'position 职位', 'duty 职责'],
    antonyms: ['irrelevance 无关'],
    examPoints: []
  },
  ruin: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['destroy 毁灭', 'wreck 破坏', 'demolish 拆毁', 'devastate 毁坏'],
    antonyms: ['build 建造', 'restore 恢复', 'preserve 保护'],
    examPoints: []
  },
  sacred: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['holy 神圣的', 'divine 神的', 'consecrated 奉为神圣的', 'blessed 受祝福的'],
    antonyms: ['profane 世俗的', 'secular 世俗的'],
    examPoints: []
  },
  sacrifice: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['forfeit 牺牲', 'surrender 放弃', 'renounce 抛弃', 'offer 奉献'],
    antonyms: ['keep 保留', 'retain 保持'],
    examPoints: []
  },
  sake: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['purpose 缘故', 'benefit 利益', 'interest 利益', 'reason 原因'],
    antonyms: ['disregard 无关'],
    examPoints: []
  },
  salary: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['wage 薪水', 'pay 报酬', 'income 收入', 'remuneration 酬金', 'earnings 收入'],
    antonyms: ['expense 支出'],
    examPoints: []
  },
  sample: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['specimen 样品', 'example 样本', 'model 模范', 'illustration 实例'],
    antonyms: ['whole 全部'],
    examPoints: []
  },
  satisfaction: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['contentment 满足', 'gratification 满意', 'fulfillment 满足', 'pleasure 愉快'],
    antonyms: ['dissatisfaction 不满', 'discontent 不满'],
    examPoints: []
  },
  scale: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['range 范围', 'extent 程度', 'scope 规模', 'proportion 比例'],
    antonyms: ['individual 个体'],
    examPoints: []
  },
  scene: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sight 景象', 'view 景色', 'setting 场景', 'spectacle 壮观场面', 'landscape 风景'],
    antonyms: ['backstage 后台'],
    examPoints: []
  },
  schedule: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['timetable 时刻表', 'agenda 议程', 'program 程序', 'plan 计划'],
    antonyms: ['spontaneity 自发'],
    examPoints: []
  },
  scheme: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['plan 计划', 'plot 阴谋', 'strategy 策略', 'design 方案', 'arrangement 安排'],
    antonyms: ['improvisation 即兴'],
    examPoints: []
  },
  scholarship: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['grant 奖学金', 'fellowship 研究金', 'bursary 助学金', 'stipend 薪金'],
    antonyms: ['debt 债务'],
    examPoints: []
  },
  scope: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['range 范围', 'extent 程度', 'reach 涉及范围', 'compass 范围'],
    antonyms: ['limitation 局限'],
    examPoints: []
  },
  score: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tally 得分', 'record 记录', 'grade 成绩', 'point 分数'],
    antonyms: ['failure 失败'],
    examPoints: []
  },
  scratch: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['scrape 刮', 'rub 擦', 'graze 擦伤', 'mark 划痕'],
    antonyms: ['smooth 使光滑'],
    examPoints: []
  },
  scream: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['shriek 尖叫', 'yell 大叫', 'howl 嚎叫', 'screech 尖叫'],
    antonyms: ['whisper 低语', 'murmur 低声说'],
    examPoints: []
  },
  seal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['close 密封', 'secure 封牢', 'fasten 封紧', 'stamp 盖章'],
    antonyms: ['open 打开', 'unseal 拆封'],
    examPoints: []
  },
  seat: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['chair 座椅', 'place 位子', 'bench 长凳', 'position 位置'],
    antonyms: ['standing 站立'],
    examPoints: []
  },
  second: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['moment 片刻', 'instant 瞬间', 'flash 一刹那', 'tick 一秒'],
    antonyms: ['eternity 永恒'],
    examPoints: []
  },
  senior: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['elder 年长的', 'older 年长的', 'superior 上级的', 'veteran 资深的'],
    antonyms: ['junior 年少的', 'inferior 下级的'],
    examPoints: []
  },
  sense: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['feel 感觉', 'perceive 察觉', 'detect 探测', 'comprehend 理解'],
    antonyms: ['ignore 忽视', 'misunderstand 误解'],
    examPoints: []
  },
  sensitive: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['responsive 敏感的', 'receptive 易感受的', 'perceptive 敏锐的', 'delicate 微妙的'],
    antonyms: ['insensitive 迟钝的', 'indifferent 冷漠的'],
    examPoints: []
  },
  separate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['divide 分开', 'part 分离', 'detach 分离', 'sever 切断', 'isolate 隔离'],
    antonyms: ['unite 联合', 'join 结合', 'merge 合并'],
    examPoints: []
  },
  service: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['assistance 服务', 'help 帮助', 'aid 援助', 'maintenance 维护'],
    antonyms: ['harm 伤害'],
    examPoints: []
  },
  settle: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['resolve 解决', 'decide 决定', 'establish 安顿', 'colonize 殖民', 'calm 平息'],
    antonyms: ['unsettle 使不安', 'disturb 扰乱'],
    examPoints: []
  },
  severe: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['strict 严厉的', 'harsh 严酷的', 'stern 严厉的', 'rigorous 严格的', 'grave 严重的'],
    antonyms: ['mild 温和的', 'gentle 温和的', 'lenient 宽大的'],
    examPoints: []
  },
  shadow: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['shade 阴影', 'darkness 黑暗', 'gloom 阴暗', 'silhouette 影子'],
    antonyms: ['light 光亮', 'brightness 明亮'],
    examPoints: []
  },
  shake: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tremble 颤抖', 'shiver 发抖', 'quiver 颤动', 'vibrate 震动', 'shudder 战栗'],
    antonyms: ['steady 稳定', 'still 静止'],
    examPoints: []
  },
  share: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['divide 分享', 'distribute 分配', 'apportion 分摊', 'partake 分享'],
    antonyms: ['keep 保留', 'hoard 囤积'],
    examPoints: []
  },
  shed: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['drop 脱落', 'cast 脱去', 'discard 丢弃', 'lose 失去', 'molt 蜕皮'],
    antonyms: ['keep 保持', 'retain 保留'],
    examPoints: []
  },
  shelter: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['refuge 避难所', 'haven 避风港', 'asylum 庇护', 'protection 保护', 'retreat 隐蔽处'],
    antonyms: ['exposure 暴露'],
    examPoints: []
  },
  shift: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['move 移动', 'transfer 转移', 'switch 转换', 'relocate 重新安置', 'alter 改变'],
    antonyms: ['stay 停留', 'remain 保持'],
    examPoints: []
  },
  shine: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gleam 闪烁', 'glow 发光', 'radiate 放射', 'glisten 闪耀', 'sparkle 闪闪发光'],
    antonyms: ['dull 变暗', 'fade 褪色'],
    examPoints: []
  },
  shock: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['startle 震惊', 'appall 使惊骇', 'stun 使震惊', 'horrify 使恐惧', 'dismay 使沮丧'],
    antonyms: ['calm 使平静', 'reassure 使安心'],
    examPoints: []
  },
  shore: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['coast 海岸', 'beach 海滩', 'bank 岸', 'waterfront 滨水区'],
    antonyms: ['inland 内陆'],
    examPoints: []
  },
  short: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'shorter', superlative: 'shortest' },
    synonyms: ['brief 简短的', 'concise 简明的', 'terse 简短的', 'curt 简短的'],
    antonyms: ['long 长的', 'tall 高的', 'extended 延长的'],
    examPoints: []
  },
  shrink: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['contract 收缩', 'decrease 减少', 'dwindle 缩小', 'recede 后退', 'wither 枯萎'],
    antonyms: ['expand 膨胀', 'grow 增长', 'increase 增加'],
    examPoints: []
  },
  shut: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['close 关闭', 'seal 封闭', 'lock 锁上', 'slam 砰地关上'],
    antonyms: ['open 打开', 'unfold 展开'],
    examPoints: []
  },
  sigh: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['breathe 叹息', 'gasp 喘息', 'moan 叹气'],
    antonyms: ['cheer 欢呼'],
    examPoints: []
  },
  sight: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['vision 视力', 'view 视野', 'gaze 凝视', 'observation 观察'],
    antonyms: ['blindness 盲'],
    examPoints: []
  },
  sign: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['mark 标记', 'signal 信号', 'indication 迹象', 'token 标志', 'symbol 象征'],
    antonyms: ['concealment 隐藏'],
    examPoints: []
  },
  signal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sign 信号', 'indication 指示', 'gesture 手势', 'cue 暗示'],
    antonyms: ['silence 沉默'],
    examPoints: []
  },
  silent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['quiet 安静的', 'mute 沉默的', 'speechless 无言的', 'still 静止的'],
    antonyms: ['loud 大声的', 'noisy 嘈杂的', 'vocal 发声的'],
    examPoints: []
  },
  silly: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['foolish 愚蠢的', 'absurd 荒谬的', 'ridiculous 可笑的', 'senseless 无意义的'],
    antonyms: ['sensible 明智的', 'wise 聪明的'],
    examPoints: []
  },
  since: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['because 因为', 'as 由于', 'seeing that 既然', 'considering 考虑到'],
    antonyms: ['although 尽管'],
    examPoints: []
  },
  sincere: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['genuine 真诚的', 'earnest 诚挚的', 'honest 诚实的', 'heartfelt 衷心的'],
    antonyms: ['insincere 不真诚的', 'fake 虚假的'],
    examPoints: []
  },
  sink: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['submerge 沉没', 'descend 下降', 'drop 下落', 'plunge 投入'],
    antonyms: ['float 漂浮', 'rise 升起'],
    examPoints: []
  },
  situation: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['circumstance 情况', 'condition 状况', 'state 状态', 'position 处境'],
    antonyms: ['anomaly 异常'],
    examPoints: []
  },
  skill: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ability 能力', 'proficiency 熟练', 'expertise 专长', 'talent 才能', 'craft 技艺'],
    antonyms: ['incompetence 无能'],
    examPoints: []
  },
  skip: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['omit 省略', 'miss 错过', 'bypass 绕过', 'overlook 忽略', 'leap 跳过'],
    antonyms: ['include 包括', 'attend 参加'],
    examPoints: []
  },
  sleep: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['slumber 睡眠', 'doze 打盹', 'nap 小睡', 'snooze 打瞌睡', 'hibernate 冬眠'],
    antonyms: ['wake 醒来', 'awaken 唤醒'],
    examPoints: []
  },
  slide: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['slip 滑动', 'glide 滑行', 'skid 打滑', 'slither 滑行'],
    antonyms: ['stick 粘住', 'grip 抓牢'],
    examPoints: []
  },
  slight: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['minor 轻微的', 'small 小的', 'trivial 琐碎的', 'negligible 微不足道的'],
    antonyms: ['significant 显著的', 'considerable 相当大的'],
    examPoints: []
  },
  slip: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['slide 滑倒', 'glide 滑行', 'skid 打滑', 'lose balance 失去平衡'],
    antonyms: ['grip 抓紧', 'stand 站稳'],
    examPoints: []
  },
  smash: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['shatter 粉碎', 'break 打破', 'crash 撞碎', 'crush 压碎', 'fragment 碎裂'],
    antonyms: ['fix 修理', 'mend 修补'],
    examPoints: []
  },
  smile: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['grin 微笑', 'beam 喜笑颜开', 'smirk 假笑', 'laugh 笑'],
    antonyms: ['frown 皱眉', 'scowl 怒视'],
    examPoints: []
  },
  'so-called': {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['supposed 所谓的', 'alleged 声称的', 'purported 号称的'],
    antonyms: ['real 真正的', 'genuine 真实的'],
    examPoints: []
  },
  social: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['communal 社会的', 'public 公共的', 'community 社区的', 'sociable 好交际的'],
    antonyms: ['private 私人的', 'solitary 孤独的'],
    examPoints: []
  },
  sole: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['only 唯一的', 'single 单一的', 'exclusive 独有的', 'lone 孤独的'],
    antonyms: ['multiple 多个的', 'various 各种各样的'],
    examPoints: []
  },
  solid: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['firm 坚固的', 'hard 坚硬的', 'stable 稳固的', 'substantial 坚实的'],
    antonyms: ['liquid 液态的', 'soft 软的', 'fluid 流动的'],
    examPoints: []
  },
  sophisticated: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['advanced 先进的', 'complex 复杂的', 'refined 精致的', 'cultured 有教养的'],
    antonyms: ['simple 简单的', 'naive 天真的'],
    examPoints: []
  },
  sort: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['kind 种类', 'type 类型', 'variety 品种', 'category 类别', 'classify 分类'],
    antonyms: ['mix 混合'],
    examPoints: []
  },
  space: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['room 空间', 'area 区域', 'extent 范围', 'void 真空', 'distance 距离'],
    antonyms: ['crowd 拥挤'],
    examPoints: []
  },
  special: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['exceptional 特别的', 'distinctive 独特的', 'unique 独特的', 'extraordinary 非凡的'],
    antonyms: ['ordinary 普通的', 'common 普通的', 'general 一般的'],
    examPoints: []
  },
  specific: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['particular 特定的', 'precise 精确的', 'exact 确切的', 'definite 明确的'],
    antonyms: ['general 一般的', 'vague 模糊的'],
    examPoints: []
  },
  spectacular: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['striking 惊人的', 'impressive 令人印象深刻的', 'magnificent 壮观的', 'breathtaking 惊险的'],
    antonyms: ['ordinary 平凡的', 'unimpressive 平淡的'],
    examPoints: []
  },
  spill: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pour 溢出', 'overflow 溢出', 'shed 流出', 'scatter 洒出'],
    antonyms: ['contain 容纳', 'collect 收集'],
    examPoints: []
  },
  spin: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['rotate 旋转', 'turn 转动', 'twirl 旋转', 'revolve 旋转', 'whirl 回旋'],
    antonyms: ['stop 停止', 'still 静止'],
    examPoints: []
  },
  spirit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['soul 灵魂', 'ghost 幽灵', 'essence 精神', 'mood 情绪', 'vitality 活力'],
    antonyms: ['body 身体', 'matter 物质'],
    examPoints: []
  },
  split: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['divide 分裂', 'separate 分开', 'cleave 劈开', 'rupture 破裂', 'fracture 折断'],
    antonyms: ['unite 联合', 'join 结合', 'merge 合并'],
    examPoints: []
  },
  spoil: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ruin 毁坏', 'damage 损坏', 'destroy 破坏', 'corrupt 腐败', 'indulge 溺爱'],
    antonyms: ['improve 改善', 'preserve 保护'],
    examPoints: []
  },
  sponsor: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['back 支持', 'finance 资助', 'fund 赞助', 'patronize 赞助', 'support 支持'],
    antonyms: ['oppose 反对'],
    examPoints: []
  },
  spread: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['extend 扩展', 'expand 扩大', 'diffuse 散布', 'disperse 传播', 'circulate 流传'],
    antonyms: ['gather 聚集', 'collect 收集', 'shrink 收缩'],
    examPoints: []
  },
  stable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['steady 稳定的', 'firm 稳固的', 'secure 牢固的', 'balanced 平衡的'],
    antonyms: ['unstable 不稳定的', 'shaky 摇晃的', 'volatile 易变的'],
    examPoints: []
  },
  staff: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['personnel 员工', 'crew 工作人员', 'team 团队', 'workforce 劳动力'],
    antonyms: ['management 管理层'],
    examPoints: []
  },
  stage: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['phase 阶段', 'period 时期', 'step 步骤', 'platform 舞台', 'arena 舞台'],
    antonyms: ['conclusion 结束'],
    examPoints: []
  },
  stain: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['mark 污点', 'spot 污渍', 'blemish 瑕疵', 'discolor 使变色'],
    antonyms: ['clean 清洁', 'purify 净化'],
    examPoints: []
  },
  stake: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['share 股份', 'interest 利益', 'bet 赌注', 'wager 押注', 'risk 风险'],
    antonyms: ['security 保障'],
    examPoints: []
  },
  stale: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['old 陈旧的', 'musty 发霉的', 'stale 不新鲜的', 'flat 走味的'],
    antonyms: ['fresh 新鲜的', 'new 新的'],
    examPoints: []
  },
  stare: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gaze 凝视', 'glare 怒视', 'gape 目瞪口呆地看', 'look 注视'],
    antonyms: ['glance 瞥见', 'ignore 忽视'],
    examPoints: []
  },
  state: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['condition 状态', 'situation 状况', 'circumstance 情况', 'status 地位'],
    antonyms: ['transition 过渡'],
    examPoints: []
  },
  status: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['position 地位', 'rank 等级', 'standing 身份', 'condition 状况'],
    antonyms: ['insignificance 无足轻重'],
    examPoints: []
  },
  steady: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['stable 稳定的', 'firm 稳固的', 'constant 不变的', 'unwavering 坚定的'],
    antonyms: ['unstable 不稳定的', 'shaky 摇晃的', 'variable 多变的'],
    examPoints: []
  },
  steal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['thieve 偷窃', 'pilfer 小偷小摸', 'purloin 偷取', 'snatch 抢夺', 'rob 盗窃'],
    antonyms: ['return 归还', 'give 给予'],
    examPoints: []
  },
  steam: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['vapor 蒸汽', 'mist 雾气', 'fog 雾'],
    antonyms: ['liquid 液体', 'solid 固体'],
    examPoints: []
  },
  steel: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['metal 金属', 'iron 铁', 'alloy 合金'],
    antonyms: ['soft material 软材料'],
    examPoints: []
  },
  steep: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['precipitous 陡峭的', 'abrupt 陡的', 'sheer 陡峭的', 'high 陡高的'],
    antonyms: ['flat 平坦的', 'gentle 平缓的'],
    examPoints: []
  },
  steer: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['guide 引导', 'direct 引导', 'pilot 驾驶', 'navigate 航行', 'control 控制'],
    antonyms: ['follow 跟随'],
    examPoints: []
  },
  stem: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['arise 起源', 'originate 发源', 'derive 派生', 'emanate 发出'],
    antonyms: ['end 结束'],
    examPoints: []
  },
  step: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pace 步伐', 'stride 大步', 'footstep 脚步', 'stage 阶段', 'measure 措施'],
    antonyms: ['halt 停止'],
    examPoints: []
  },
  stiff: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['rigid 僵硬的', 'inflexible 不灵活的', 'firm 坚硬的', 'hard 硬的'],
    antonyms: ['flexible 灵活的', 'pliable 柔韧的', 'soft 柔软的'],
    examPoints: []
  },
  stimulate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['excite 刺激', 'arouse 激发', 'inspire 鼓舞', 'spur 激励', 'invigorate 使精力充沛'],
    antonyms: ['depress 抑制', 'discourage 使沮丧', 'dull 使迟钝'],
    examPoints: []
  },
  sting: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['prick 刺', 'pierce 刺穿', 'wound 伤害', 'bite 叮咬'],
    antonyms: ['soothe 抚慰'],
    examPoints: []
  },
  stir: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['agitate 搅动', 'mix 搅拌', 'rouse 唤起', 'awaken 唤醒', 'disturb 扰动'],
    antonyms: ['settle 平静', 'still 使静止'],
    examPoints: []
  },
  stock: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['supply 供应', 'inventory 库存', 'reserve 储备', 'store 储存', 'shares 股票'],
    antonyms: ['shortage 短缺'],
    examPoints: []
  },
  stone: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['rock 岩石', 'pebble 鹅卵石', 'boulder 巨石', 'cobble 圆石'],
    antonyms: ['soft material 软材料'],
    examPoints: []
  },
  store: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['shop 商店', 'shop 商铺', 'stock 储存', 'hoard 囤积', 'preserve 保存'],
    antonyms: ['spend 花费', 'waste 浪费'],
    examPoints: []
  },
  storm: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tempest 暴风雨', 'gale 大风', 'hurricane 飓风', 'squall 飑', 'blizzard 暴风雪'],
    antonyms: ['calm 平静', 'clear 晴朗'],
    examPoints: []
  },
  strategy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['plan 策略', 'tactic 战术', 'scheme 方案', 'approach 方法', 'maneuver 策略'],
    antonyms: ['improvisation 即兴'],
    examPoints: []
  },
  stress: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['emphasis 强调', 'pressure 压力', 'tension 紧张', 'strain 压力', 'importance 重要性'],
    antonyms: ['relaxation 放松', 'calm 平静'],
    examPoints: []
  },
  stretch: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['extend 延伸', 'elongate 拉长', 'expand 扩展', 'reach 伸展', 'lengthen 延长'],
    antonyms: ['contract 收缩', 'shrink 缩小', 'shorten 缩短'],
    examPoints: []
  },
  strict: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['rigorous 严格的', 'severe 严厉的', 'stern 严厉的', 'stringent 严格的', 'rigid 严格的'],
    antonyms: ['lenient 宽大的', 'lax 松懈的', 'flexible 灵活的'],
    examPoints: []
  },
  strike: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hit 打击', 'smack 拍击', 'pound 猛击', 'beat 敲打', 'assail 攻击'],
    antonyms: ['miss 未击中'],
    examPoints: []
  },
  strip: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['remove 剥去', 'deprive 剥夺', 'undress 脱衣', 'peel 剥皮', 'divest 剥夺'],
    antonyms: ['clothe 穿衣', 'cover 覆盖'],
    examPoints: []
  },
  struggle: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fight 斗争', 'contend 奋斗', 'strive 努力', 'wrestle 搏斗', 'battle 战斗'],
    antonyms: ['surrender 投降', 'yield 屈服'],
    examPoints: []
  },
  submit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['yield 屈服', 'surrender 投降', 'comply 顺从', 'present 提交', 'propose 提出'],
    antonyms: ['resist 抵抗', 'rebel 反叛', 'defy 违抗'],
    examPoints: []
  },
  subscribe: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pledge 认捐', 'contribute 捐助', 'agree 同意', 'enroll 订阅'],
    antonyms: ['unsubscribe 退订'],
    examPoints: []
  },
  subsequent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['following 随后的', 'later 后来的', 'ensuing 接着的', 'succeeding 随后的'],
    antonyms: ['previous 先前的', 'prior 在先的'],
    examPoints: []
  },
  substance: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['matter 物质', 'material 材料', 'essence 本质', 'content 内容', 'stuff 东西'],
    antonyms: ['nothing 虚无'],
    examPoints: []
  },
  subtle: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['delicate 微妙的', 'fine 细微的', 'slight 轻微的', 'elusive 难以捉摸的'],
    antonyms: ['obvious 明显的', 'blunt 直率的'],
    examPoints: []
  },
  sufficient: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['enough 足够的', 'adequate 充足的', 'ample 充分的', 'satisfactory 令人满意的'],
    antonyms: ['insufficient 不足的', 'inadequate 不充分的'],
    examPoints: []
  },
  suit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fit 适合', 'match 相配', 'become 适宜', 'accommodate 适应', 'please 使满意'],
    antonyms: ['clash 冲突', 'disagree 不一致'],
    examPoints: []
  },
  summary: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['abstract 摘要', 'digest 概要', 'outline 提纲', 'recap 总结', 'brief 简报'],
    antonyms: ['detail 细节', 'expansion 扩展'],
    examPoints: []
  },
  summit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['peak 顶峰', 'top 顶部', 'apex 顶点', 'zenith 顶点', 'pinnacle 巅峰'],
    antonyms: ['bottom 底部', 'base 基础'],
    examPoints: []
  },
  superior: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['better 更好的', 'greater 更大的', 'higher 较高的', 'senior 上级的'],
    antonyms: ['inferior 下级的', 'lower 较低的'],
    examPoints: []
  },
  suppress: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['repress 镇压', 'quell 平息', 'subdue 征服', 'crush 压制', 'stifle 扼杀'],
    antonyms: ['encourage 鼓励', 'promote 促进'],
    examPoints: []
  },
  sure: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['certain 确定的', 'confident 自信的', 'positive 确信的', 'definite 肯定的'],
    antonyms: ['unsure 不确定的', 'doubtful 怀疑的', 'uncertain 不确定的'],
    examPoints: []
  },
  surplus: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['excess 过剩', 'surplus 剩余', 'remainder 剩余', 'overplus 过剩', 'superfluity 多余'],
    antonyms: ['deficit 赤字', 'shortage 短缺'],
    examPoints: []
  },
  surround: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['encircle 环绕', 'enclose 围住', 'encompass 包围', 'ring 环绕', 'beset 围绕'],
    antonyms: ['release 释放', 'free 释放'],
    examPoints: []
  },
  survey: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['inspect 调查', 'examine 检查', 'review 审查', 'assess 评估', 'poll 民意调查'],
    antonyms: ['ignore 忽视'],
    examPoints: []
  },
  suspend: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hang 悬挂', 'postpone 暂停', 'delay 延迟', 'pause 中止', 'interrupt 中断'],
    antonyms: ['continue 继续', 'resume 恢复'],
    examPoints: []
  },
  sustain: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['maintain 维持', 'support 支撑', 'uphold 支持', 'endure 忍受', 'prolong 延长'],
    antonyms: ['drop 放弃', 'end 结束'],
    examPoints: []
  },
  swallow: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gulp 吞咽', 'consume 吞下', 'devour 狼吞虎咽', 'ingest 摄入'],
    antonyms: ['spit 吐出', 'regurgitate 呕出'],
    examPoints: []
  },
  sway: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['swing 摇摆', 'rock 摇动', 'totter 摇晃', 'oscillate 摆动', 'fluctuate 波动'],
    antonyms: ['steady 稳定', 'still 静止'],
    examPoints: []
  },
  swear: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['vow 发誓', 'pledge 保证', 'promise 承诺', 'affirm 断言', 'curse 诅咒'],
    antonyms: ['deny 否认'],
    examPoints: []
  },
  sweep: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['clean 打扫', 'brush 刷', 'clear 清除', 'scan 扫视', 'glide 掠过'],
    antonyms: ['dirty 弄脏'],
    examPoints: []
  },
  sweet: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sugary 甜的', 'syrupy 糖浆般的', 'honeyed 甜如蜜的', 'pleasant 令人愉快的'],
    antonyms: ['sour 酸的', 'bitter 苦的'],
    examPoints: []
  },
  swift: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['quick 迅速的', 'fast 快的', 'rapid 敏捷的', 'speedy 快速的', 'hasty 匆忙的'],
    antonyms: ['slow 慢的', 'sluggish 缓慢的'],
    examPoints: []
  },
  swing: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sway 摇摆', 'rock 摇动', 'oscillate 摆动', 'dangle 悬荡', 'fluctuate 波动'],
    antonyms: ['steady 稳定', 'still 静止'],
    examPoints: []
  },
  switch: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['change 改变', 'shift 转换', 'swap 交换', 'exchange 交换', 'substitute 替换'],
    antonyms: ['maintain 保持', 'continue 继续'],
    examPoints: []
  },
  symbol: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sign 符号', 'mark 标志', 'token 象征', 'emblem 象征', 'representation 代表'],
    antonyms: ['reality 现实'],
    examPoints: []
  },
  sympathy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pity 同情', 'compassion 怜悯', 'empathy 共鸣', 'condolence 慰问'],
    antonyms: ['cruelty 残忍', 'indifference 冷漠'],
    examPoints: []
  },
  symptom: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sign 症状', 'indication 迹象', 'manifestation 表现', 'evidence 征兆'],
    antonyms: ['health 健康'],
    examPoints: []
  },
  system: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['structure 系统', 'framework 框架', 'organization 组织', 'method 方法', 'network 网络'],
    antonyms: ['chaos 混乱', 'disorder 无序'],
    examPoints: []
  },
  talent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gift 天赋', 'ability 才能', 'aptitude 天资', 'flair 才华', 'genius 天才'],
    antonyms: ['incompetence 无能', 'ineptitude 愚笨'],
    examPoints: []
  },
  tame: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['domesticate 驯服', 'train 训练', 'subdue 征服', 'gentle 使温顺'],
    antonyms: ['wild 野生的', 'untamed 未驯服的'],
    examPoints: []
  },
  target: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['goal 目标', 'aim 目的', 'objective 目标', 'mark 靶子', 'mark 目标'],
    antonyms: ['aimlessness 无目的'],
    examPoints: []
  },
  tax: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['levy 征税', 'duty 税', 'toll 通行税', 'burden 负担', 'assessment 课税'],
    antonyms: ['exemption 免税'],
    examPoints: []
  },
  tear: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['rip 撕裂', 'rend 撕碎', 'shred 撕碎', 'lacerate 割裂', 'split 撕开'],
    antonyms: ['mend 修补', 'sew 缝合'],
    examPoints: []
  },
  technique: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['method 技术', 'skill 技巧', 'procedure 程序', 'approach 方法', 'craft 手艺'],
    antonyms: ['amateurism 业余'],
    examPoints: []
  },
  technology: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['science 科学', 'engineering 工程学', 'innovation 创新', 'machinery 机械设备'],
    antonyms: ['primitiveness 原始'],
    examPoints: []
  },
  temper: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['mood 情绪', 'disposition 性情', 'temperament 气质', 'attitude 态度'],
    antonyms: ['composure 镇静'],
    examPoints: []
  },
  temporary: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['transient 短暂的', 'brief 短暂的', 'short-lived 短暂的', 'ephemeral 瞬息的', 'provisional 临时的'],
    antonyms: ['permanent 永久的', 'lasting 持久的'],
    examPoints: []
  },
  tempt: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['entice 诱惑', 'lure 引诱', 'seduce 勾引', 'allure 吸引', 'invite 招致'],
    antonyms: ['deter 阻止', 'discourage 使气馁'],
    examPoints: []
  },
  tendency: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['inclination 倾向', 'trend 趋势', 'disposition 倾向', 'propensity 癖好', 'leaning 倾向'],
    antonyms: ['aversion 厌恶'],
    examPoints: []
  },
  tender: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gentle 温柔的', 'soft 柔软的', 'mild 温和的', 'delicate 娇嫩的', 'affectionate 深情的'],
    antonyms: ['harsh 粗暴的', 'tough 坚硬的', 'cruel 残忍的'],
    examPoints: []
  },
  term: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['word 词语', 'expression 术语', 'phrase 短语', 'period 期限', 'condition 条件'],
    antonyms: ['perpetuity 永久'],
    examPoints: []
  },
  terrible: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['dreadful 可怕的', 'awful 糟糕的', 'horrible 恐怖的', 'frightful 可怕的', 'appalling 骇人的'],
    antonyms: ['wonderful 极好的', 'pleasant 令人愉快的'],
    examPoints: []
  },
  territory: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['region 领土', 'domain 领地', 'area 区域', 'land 土地', 'province 省份'],
    antonyms: ['international 国际的'],
    examPoints: []
  },
  terror: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fear 恐惧', 'dread 畏惧', 'fright 惊恐', 'horror 恐怖', 'panic 恐慌'],
    antonyms: ['calm 平静', 'courage 勇气'],
    examPoints: []
  },
  testify: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bear witness 作证', 'affirm 证实', 'declare 声明', 'attest 证明', 'confirm 确认'],
    antonyms: ['deny 否认', 'contradict 反驳'],
    examPoints: []
  },
  theory: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hypothesis 假说', 'idea 理论', 'concept 概念', 'proposition 命题', 'assumption 假设'],
    antonyms: ['fact 事实', 'practice 实践'],
    examPoints: []
  },
  therapy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['treatment 治疗', 'remedy 疗法', 'healing 治愈', 'cure 疗法'],
    antonyms: ['disease 疾病'],
    examPoints: []
  },
  thirst: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['craving 渴望', 'desire 渴望', 'yearning 渴望', 'hankering 渴望'],
    antonyms: ['satisfaction 满足'],
    examPoints: []
  },
  thorough: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['complete 彻底的', 'comprehensive 全面的', 'exhaustive 详尽的', 'meticulous 一丝不苟的', 'detailed 详细的'],
    antonyms: ['superficial 肤浅的', 'partial 部分的'],
    examPoints: []
  },
  threat: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['menace 威胁', 'danger 危险', 'hazard 危害', 'warning 警告', 'intimidation 恐吓'],
    antonyms: ['safety 安全', 'protection 保护'],
    examPoints: []
  },
  thrive: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['flourish 繁荣', 'prosper 兴旺', 'succeed 成功', 'boom 繁荣', 'grow 成长'],
    antonyms: ['fail 失败', 'decline 衰落', 'wither 枯萎'],
    examPoints: []
  },
  throat: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gullet 咽喉', 'windpipe 气管', 'pharynx 咽'],
    antonyms: ['stomach 胃'],
    examPoints: []
  },
  throw: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['cast 投掷', 'fling 抛', 'hurl 猛投', 'toss 抛', 'pitch 投掷'],
    antonyms: ['catch 接住', 'hold 拿住'],
    examPoints: []
  },
  thunder: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['boom 隆隆声', 'roar 轰鸣', 'rumble 隆隆声'],
    antonyms: ['silence 寂静'],
    examPoints: []
  },
  tide: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['current 潮流', 'flow 潮汐', 'tendency 趋势', 'wave 浪潮'],
    antonyms: ['ebb 退潮'],
    examPoints: []
  },
  tidy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['neat 整洁的', 'orderly 有序的', 'organized 有条理的', 'trim 整齐的'],
    antonyms: ['messy 凌乱的', 'untidy 不整洁的'],
    examPoints: []
  },
  tie: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bind 系', 'fasten 绑', 'attach 系上', 'secure 固定', 'knot 打结'],
    antonyms: ['untie 解开', 'loosen 松开'],
    examPoints: []
  },
  tight: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['firm 紧的', 'secure 牢固的', 'taut 拉紧的', 'snug 紧贴的', 'compact 紧凑的'],
    antonyms: ['loose 松的', 'slack 松弛的'],
    examPoints: []
  },
  tip: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['point 尖端', 'end 末端', 'peak 顶端', 'gratuity 小费', 'hint 提示'],
    antonyms: ['base 底部', 'foundation 基础'],
    examPoints: []
  },
  tired: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['exhausted 疲惫的', 'fatigued 疲劳的', 'weary 厌倦的', 'drained 精疲力竭的'],
    antonyms: ['energetic 精力充沛的', 'refreshed 精神焕发的'],
    examPoints: []
  },
  title: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['name 名称', 'heading 标题', 'label 标签', 'designation 称号', 'entitlement 权利'],
    antonyms: ['anonymity 匿名'],
    examPoints: []
  },
  toast: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['roast 烤', 'warm 加热', 'celebrate 庆祝', 'drink to 为...干杯'],
    antonyms: ['cool 冷却'],
    examPoints: []
  },
  tolerance: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['forbearance 宽容', 'patience 忍耐', 'endurance 忍受', 'acceptance 接受'],
    antonyms: ['intolerance 不宽容'],
    examPoints: []
  },
  tolerate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['endure 忍受', 'bear 忍受', 'stand 忍受', 'permit 允许', 'allow 容许'],
    antonyms: ['reject 拒绝', 'forbid 禁止'],
    examPoints: []
  },
  tone: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pitch 音调', 'sound 声音', 'note 音符', 'mood 气氛', 'quality 品质'],
    antonyms: ['monotone 单调'],
    examPoints: []
  },
  torture: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['torment 折磨', 'agonize 使痛苦', 'persecute 迫害', 'abuse 虐待'],
    antonyms: ['comfort 安慰', 'relieve 缓解'],
    examPoints: []
  },
  total: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['entire 全部的', 'complete 完整的', 'whole 整个的', 'full 充满的', 'aggregate 总计的'],
    antonyms: ['partial 部分的', 'incomplete 不完整的'],
    examPoints: []
  },
  touch: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['feel 触摸', 'contact 接触', 'stroke 抚摸', 'handle 触碰', 'palpate 触诊'],
    antonyms: ['avoid 避开', 'release 释放'],
    examPoints: []
  },
  tough: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hard 坚硬的', 'strong 坚强的', 'sturdy 坚固的', 'resilient 有韧性的', 'difficult 困难的'],
    antonyms: ['weak 弱的', 'fragile 脆弱的', 'easy 容易的'],
    examPoints: []
  },
  tour: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['trip 旅行', 'journey 旅程', 'excursion 远足', 'voyage 航行', 'expedition 探险'],
    antonyms: ['stay 停留'],
    examPoints: []
  },
  trace: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['track 追踪', 'follow 跟踪', 'trail 追踪', 'detect 探测', 'uncover 发现'],
    antonyms: ['lose 失去踪迹'],
    examPoints: []
  },
  track: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['trail 踪迹', 'path 小径', 'route 路线', 'course 路程', 'follow 追踪'],
    antonyms: ['lose 迷失'],
    examPoints: []
  },
  trade: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['commerce 商业', 'business 生意', 'exchange 交换', 'bargain 交易', 'barter 以物易物'],
    antonyms: ['gift 赠送'],
    examPoints: []
  },
  tragic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sad 悲惨的', 'disastrous 灾难性的', 'devastating 毁灭性的', 'heartbreaking 令人心碎的', 'calamitous 多灾多难的'],
    antonyms: ['comic 喜剧的', 'happy 快乐的'],
    examPoints: []
  },
  trail: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['path 小径', 'track 踪迹', 'route 路线', 'footstep 脚印', 'scent 气味'],
    antonyms: ['clearing 空地'],
    examPoints: []
  },
  train: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['educate 教育', 'teach 教', 'instruct 指导', 'drill 训练', 'prepare 准备'],
    antonyms: ['neglect 忽视'],
    examPoints: []
  },
  transfer: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['move 转移', 'shift 移动', 'relocate 重新安置', 'convey 运送', 'hand over 移交'],
    antonyms: ['keep 保留', 'retain 保持'],
    examPoints: []
  },
  translate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['render 翻译', 'interpret 口译', 'convert 转换', 'decode 解码', 'transcribe 转录'],
    antonyms: ['misinterpret 误译'],
    examPoints: []
  },
  transport: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['convey 运输', 'carry 运送', 'transfer 转运', 'ship 装运', 'transmit 传送'],
    antonyms: ['hold 留住'],
    examPoints: []
  },
  trap: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['snare 陷阱', 'ensnare 诱捕', 'entrap 使陷入', 'ambush 埋伏', 'trick 欺骗'],
    antonyms: ['release 释放', 'free 释放'],
    examPoints: []
  },
  treasure: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['value 珍视', 'cherish 珍爱', 'prize 珍藏', 'esteem 珍重', 'hoard 囤积'],
    antonyms: ['discard 丢弃', 'neglect 忽视'],
    examPoints: []
  },
  treat: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['handle 对待', 'deal with 处理', 'manage 管理', 'care for 照顾', 'heal 医治'],
    antonyms: ['neglect 忽视', 'ignore 忽略'],
    examPoints: []
  },
  trend: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tendency 趋势', 'direction 方向', 'movement 动向', 'drift 倾向', 'current 潮流'],
    antonyms: ['stagnation 停滞'],
    examPoints: []
  },
  trial: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['test 试验', 'experiment 实验', 'hearing 审判', 'attempt 尝试', 'ordeal 考验'],
    antonyms: ['certainty 确定'],
    examPoints: []
  },
  tribute: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['praise 赞颂', 'homage 敬意', 'acknowledgment 致谢', 'commendation 表彰'],
    antonyms: ['insult 侮辱'],
    examPoints: []
  },
  trick: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['deceive 欺骗', 'cheat 欺骗', 'fool 愚弄', 'dupe 蒙骗', 'con 诈骗'],
    antonyms: ['assist 帮助', 'inform 告知'],
    examPoints: []
  },
  trigger: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['cause 引起', 'initiate 触发', 'provoke 激起', 'set off 引发', 'stimulate 刺激'],
    antonyms: ['prevent 阻止', 'halt 停止'],
    examPoints: []
  },
  triumph: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['victory 胜利', 'success 成功', 'conquest 征服', 'achievement 成就'],
    antonyms: ['defeat 失败', 'loss 损失'],
    examPoints: []
  },
  troop: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['soldier 士兵', 'army 军队', 'unit 部队', 'squadron 中队', 'platoon 排'],
    antonyms: ['civilian 平民'],
    examPoints: []
  },
  trust: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['believe 信任', 'rely 信赖', 'depend 依靠', 'confide 信赖', 'entrust 委托'],
    antonyms: ['doubt 怀疑', 'mistrust 不信任'],
    examPoints: []
  },
  tuition: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fee 学费', 'charge 费用', 'payment 付款', 'instruction 教学'],
    antonyms: ['scholarship 奖学金'],
    examPoints: []
  },
  tunnel: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['passage 通道', 'subway 地下通道', 'underpass 地下通道', 'burrow 洞穴'],
    antonyms: ['bridge 桥梁'],
    examPoints: []
  },
  twist: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['turn 扭转', 'bend 弯曲', 'rotate 旋转', 'coil 盘绕', 'wring 拧'],
    antonyms: ['straighten 弄直', 'untwist 解开'],
    examPoints: []
  },
  ultimate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['final 最终的', 'last 最后的', 'eventual 最终的', 'terminal 末端的', 'supreme 最高的'],
    antonyms: ['initial 最初的', 'first 第一的'],
    examPoints: []
  },
  undergo: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['experience 经历', 'endure 忍受', 'suffer 遭受', 'encounter 遭遇', 'go through 经历'],
    antonyms: ['avoid 避免'],
    examPoints: []
  },
  undertake: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['assume 承担', 'take on 承担', 'begin 开始', 'engage 从事', 'embark 着手'],
    antonyms: ['abandon 放弃', 'decline 拒绝'],
    examPoints: []
  },
  unfair: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unjust 不公正的', 'biased 有偏见的', 'partial 偏袒的', 'inequitable 不公平的'],
    antonyms: ['fair 公平的', 'just 公正的', 'impartial 公正的'],
    examPoints: []
  },
  unique: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['one of a kind 独一无二的', 'distinctive 独特的', 'unusual 独特的', 'exclusive 独有的', 'unmatched 无与伦比的'],
    antonyms: ['common 普通的', 'ordinary 平凡的'],
    examPoints: []
  },
  unite: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['join 联合', 'combine 结合', 'merge 合并', 'unify 统一', 'fuse 融合'],
    antonyms: ['divide 分开', 'separate 分离', 'split 分裂'],
    examPoints: []
  },
  universal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['global 全球的', 'worldwide 全世界的', 'general 普遍的', 'comprehensive 全面的', 'omnipresent 无所不在的'],
    antonyms: ['local 局部的', 'particular 特定的'],
    examPoints: []
  },
  unknown: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unfamiliar 陌生的', 'obscure 默默无闻的', 'anonymous 匿名的', 'nameless 无名的'],
    antonyms: ['known 已知的', 'familiar 熟悉的'],
    examPoints: []
  },
  unusual: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['uncommon 不寻常的', 'rare 罕见的', 'exceptional 异常的', 'extraordinary 非凡的', 'peculiar 特殊的'],
    antonyms: ['usual 通常的', 'common 普通的', 'ordinary 平凡的'],
    examPoints: []
  },
  update: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['modernize 更新', 'revise 修订', 'refresh 刷新', 'renew 更新', 'amend 修正'],
    antonyms: ['outdate 过时'],
    examPoints: []
  },
  upgrade: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['improve 提升', 'enhance 增强', 'elevate 提高', 'advance 推进', 'promote 提升'],
    antonyms: ['downgrade 降级', 'deteriorate 恶化'],
    examPoints: []
  },
  uphold: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['support 支持', 'maintain 维持', 'defend 捍卫', 'sustain 支撑', 'advocate 拥护'],
    antonyms: ['oppose 反对', 'violate 违反'],
    examPoints: []
  },
  urge: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['press 催促', 'push 推动', 'encourage 鼓励', 'exhort 力劝', 'impel 驱使'],
    antonyms: ['deter 阻止', 'discourage 使气馁'],
    examPoints: []
  },
  urgent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pressing 紧急的', 'critical 紧要的', 'imperative 迫切的', 'crucial 关键的', 'vital 至关重要的'],
    antonyms: ['trivial 琐碎的', 'unimportant 不重要的'],
    examPoints: []
  },
  vacant: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['empty 空的', 'unoccupied 闲置的', 'void 空的', 'blank 空白的', 'deserted 荒废的'],
    antonyms: ['occupied 占用的', 'full 充满的'],
    examPoints: []
  },
  vague: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unclear 模糊的', 'ambiguous 模棱两可的', 'obscure 晦涩的', 'indefinite 不明确的', 'hazy 朦胧的'],
    antonyms: ['clear 清晰的', 'definite 明确的', 'precise 精确的'],
    examPoints: []
  },
  valid: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['legitimate 合法的', 'legal 合法的', 'sound 合理的', 'authentic 真实的', 'genuine 真正的'],
    antonyms: ['invalid 无效的', 'void 无效的'],
    examPoints: []
  },
  valuable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['precious 宝贵的', 'worthwhile 有价值的', 'costly 昂贵的', 'invaluable 无价的', 'priceless 极贵的'],
    antonyms: ['worthless 无价值的', 'cheap 廉价的'],
    examPoints: []
  },
  vanish: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['disappear 消失', 'fade 消退', 'evaporate 蒸发', 'dissolve 消散', 'perish 消亡'],
    antonyms: ['appear 出现', 'emerge 浮现'],
    examPoints: []
  },
  variable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['changeable 多变的', 'fluctuating 波动的', 'unstable 不稳定的', 'inconstant 反复无常的'],
    antonyms: ['constant 不变的', 'stable 稳定的'],
    examPoints: []
  },
  variety: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['diversity 多样性', 'assortment 各种各样', 'range 范围', 'selection 选择', 'mixture 混合'],
    antonyms: ['uniformity 一致性'],
    examPoints: []
  },
  various: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['different 不同的', 'diverse 多种多样的', 'several 几个的', 'distinct 不同的', 'manifold 多种多样的'],
    antonyms: ['uniform 统一的', 'single 单一的'],
    examPoints: []
  },
  vast: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['huge 巨大的', 'immense 广大的', 'enormous 庞大的', 'massive 大规模的', 'extensive 广阔的'],
    antonyms: ['tiny 微小的', 'small 小的'],
    examPoints: []
  },
  venture: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['undertake 冒险', 'risk 冒险', 'dare 敢于', 'gamble 赌博', 'adventure 探险'],
    antonyms: ['avoid 避免', 'decline 谢绝'],
    examPoints: []
  },
  verify: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['confirm 证实', 'validate 验证', 'authenticate 鉴别', 'substantiate 证实', 'corroborate 确证'],
    antonyms: ['contradict 反驳', 'dispute 质疑'],
    examPoints: []
  },
  version: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['edition 版本', 'translation 译本', 'rendering 译文', 'adaptation 改编', 'interpretation 解释'],
    antonyms: ['original 原版'],
    examPoints: []
  },
  veto: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['reject 否决', 'forbid 禁止', 'prohibit 禁止', 'block 阻止', 'overrule 否决'],
    antonyms: ['approve 批准', 'allow 允许'],
    examPoints: []
  },
  victim: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['casualty 受害者', 'sufferer 受难者', 'prey 牺牲品', 'sacrifice 牺牲者'],
    antonyms: ['perpetrator 行凶者'],
    examPoints: []
  },
  victory: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['triumph 胜利', 'success 成功', 'conquest 征服', 'win 获胜'],
    antonyms: ['defeat 失败', 'loss 失败'],
    examPoints: []
  },
  violate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['break 违反', 'infringe 侵犯', 'breach 违背', 'contravene 触犯', 'disobey 不遵守'],
    antonyms: ['obey 遵守', 'comply 遵从'],
    examPoints: []
  },
  virtue: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['goodness 美德', 'morality 道德', 'integrity 正直', 'excellence 优秀', 'righteousness 正义'],
    antonyms: ['vice 恶习', 'wickedness 邪恶'],
    examPoints: []
  },
  visible: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['perceptible 可见的', 'observable 看得见的', 'apparent 明显的', 'evident 显然的', 'conspicuous 显眼的'],
    antonyms: ['invisible 看不见的', 'hidden 隐藏的'],
    examPoints: []
  },
  vision: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sight 视力', 'eyesight 视觉', 'foresight 远见', 'dream 梦想', 'view 视野'],
    antonyms: ['blindness 盲'],
    examPoints: []
  },
  visit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['call on 拜访', 'see 探望', 'call 拜访', 'attend 出席'],
    antonyms: ['avoid 回避'],
    examPoints: []
  },
  vital: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['essential 至关重要的', 'crucial 关键的', 'indispensable 不可缺少的', 'critical 关键的', 'necessary 必需的'],
    antonyms: ['trivial 琐碎的', 'unimportant 不重要的'],
    examPoints: []
  },
  vivid: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bright 鲜艳的', 'brilliant 鲜明的', 'intense 强烈的', 'lively 生动的', 'graphic 形象的'],
    antonyms: ['dull 暗淡的', 'pale 苍白的'],
    examPoints: []
  },
  vocal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['oral 口头的', 'spoken 口头的', 'verbal 言语的', 'voiced 发声的'],
    antonyms: ['silent 沉默的', 'mute 无声的'],
    examPoints: []
  },
  voluntary: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['willing 自愿的', 'intentional 故意的', 'deliberate 蓄意的', 'spontaneous 自发的'],
    antonyms: ['compulsory 强制的', 'mandatory 强制的'],
    examPoints: []
  },
  vote: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ballot 投票', 'poll 投票', 'election 选举', 'decision 决定'],
    antonyms: ['abstain 弃权'],
    examPoints: []
  },
  wage: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['salary 工资', 'pay 薪水', 'income 收入', 'remuneration 报酬', 'stipend 薪金'],
    antonyms: ['expense 支出'],
    examPoints: []
  },
  wait: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['await 等待', 'linger 逗留', 'stay 停留', 'expect 期待'],
    antonyms: ['proceed 继续', 'hurry 赶紧'],
    examPoints: []
  },
  wander: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['roam 漫游', 'ramble 漫步', 'stroll 闲逛', 'drift 漂泊', 'stray 流浪'],
    antonyms: ['settle 安顿', 'stay 停留'],
    examPoints: []
  },
  wave: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gesture 手势', 'signal 信号', 'flutter 飘动', 'ripple 起伏', 'billow 翻腾'],
    antonyms: ['stillness 静止'],
    examPoints: []
  },
  weapon: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['arm 武器', 'instrument 工具', 'implement 器具', 'tool 工具'],
    antonyms: ['defense 防御'],
    examPoints: []
  },
  weigh: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['measure 称量', 'assess 评估', 'evaluate 评价', 'consider 考虑', 'balance 权衡'],
    antonyms: ['ignore 忽视'],
    examPoints: []
  },
  welcome: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['greet 欢迎', 'receive 接待', 'welcome 欢迎', 'embrace 拥抱', 'accept 接受'],
    antonyms: ['reject 拒绝', 'shun 避开'],
    examPoints: []
  },
  welfare: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['wellbeing 福利', 'health 健康', 'prosperity 繁荣', 'comfort 舒适', 'benefit 利益'],
    antonyms: ['misery 苦难'],
    examPoints: []
  },
  well: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['good 好', 'fine 好', 'satisfactory 令人满意的', 'healthy 健康的', 'prosperous 兴旺的'],
    antonyms: ['bad 坏的', 'ill 生病的', 'poor 差的'],
    examPoints: []
  },
  western: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['occidental 西方的', 'westbound 西行的', 'westerly 向西的'],
    antonyms: ['eastern 东方的', 'oriental 东方的'],
    examPoints: []
  },
  wheel: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['rim 轮辋', 'circle 圆圈', 'disk 圆盘', 'roller 滚轮'],
    antonyms: ['axle 车轴'],
    examPoints: []
  },
  while: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['during 当...时', 'whilst 当...时', 'as 当...时', 'time 一段时间'],
    antonyms: ['instantly 立即'],
    examPoints: []
  },
  whisper: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['murmur 低语', 'mutter 嘀咕', 'sigh 叹息', 'breath 低声说'],
    antonyms: ['shout 大喊', 'scream 尖叫'],
    examPoints: []
  },
  whole: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['entire 全部的', 'complete 完整的', 'total 总的', 'full 充满的', 'intact 完好无损的'],
    antonyms: ['partial 部分的', 'incomplete 不完整的'],
    examPoints: []
  },
  wicked: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['evil 邪恶的', 'wicked 邪恶的', 'bad 坏的', 'immoral 不道德的', 'malicious 恶意的'],
    antonyms: ['good 好的', 'virtuous 善良的'],
    examPoints: []
  },
  wild: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['untamed 野生的', 'feral 野生的', 'savage 野蛮的', 'uncultivated 未经栽培的'],
    antonyms: ['tame 驯服的', 'domesticated 驯化的'],
    examPoints: []
  },
  will: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['determination 决心', 'resolve 决心', 'intention 意图', 'desire 意愿', 'volition 意志'],
    antonyms: ['hesitation 犹豫'],
    examPoints: []
  },
  wind: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['breeze 微风', 'gale 大风', 'gust 阵风', 'current 气流', 'draft 穿堂风'],
    antonyms: ['calm 平静'],
    examPoints: []
  },
  wipe: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['clean 擦', 'rub 摩擦', 'erase 擦除', 'swab 擦拭', 'dab 轻擦'],
    antonyms: ['dirty 弄脏'],
    examPoints: []
  },
  wire: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['cable 电缆', 'cord 绳索', 'line 线', 'filament 细丝', 'cable 线缆'],
    antonyms: ['wireless 无线'],
    examPoints: []
  },
  witness: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['observe 目击', 'see 看见', 'behold 目睹', 'spectator 旁观者', 'observer 目击者'],
    antonyms: ['ignore 忽视', 'miss 错过'],
    examPoints: []
  },
  wonder: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['marvel 惊叹', 'astonish 惊奇', 'admire 赞叹', 'ponder 想知道', 'curiosity 好奇'],
    antonyms: ['disregard 漠视'],
    examPoints: []
  },
  wood: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['timber 木材', 'lumber 木料', 'forest 森林', 'log 原木'],
    antonyms: ['metal 金属'],
    examPoints: []
  },
  worse: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['inferior 较差的', 'poorer 更差的', 'less desirable 更不理想的'],
    antonyms: ['better 更好的'],
    examPoints: []
  },
  wound: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['injure 伤害', 'hurt 受伤', 'damage 损害', 'lacerate 割伤', 'scar 创伤'],
    antonyms: ['heal 治愈', 'cure 治愈'],
    examPoints: []
  },
  wrap: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['enclose 包裹', 'cover 覆盖', 'envelop 包住', 'bind 缠绕', 'swathe 裹'],
    antonyms: ['unwrap 打开', 'unfold 展开'],
    examPoints: []
  },
  wreck: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['destroy 破坏', 'ruin 毁坏', 'demolish 拆毁', 'smash 粉碎', 'wreckage 残骸'],
    antonyms: ['build 建造', 'repair 修理'],
    examPoints: []
  },
  yearn: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['long 渴望', 'desire 渴望', 'crave 渴求', 'pine 渴望', 'hanker 渴望'],
    antonyms: ['despise 厌恶', 'scorn 鄙视'],
    examPoints: []
  },
  yield: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['produce 生产', 'generate 产生', 'surrender 屈服', 'submit 投降', 'give way 让步'],
    antonyms: ['resist 抵抗', 'withhold 扣留'],
    examPoints: []
  },
  zone: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['area 区域', 'region 地区', 'district 区域', 'sector 扇区', 'territory 领域'],
    antonyms: ['whole 整体'],
    examPoints: []
  },

  abortion: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['termination 终止', 'miscarriage 流产', 'termination of pregnancy 终止妊娠'],
    antonyms: ['birth 出生', 'continuation 继续'],
    examPoints: []
  },
  abrupt: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sudden 突然的', 'unexpected 出乎意料的', 'hasty 仓促的', 'steep 陡峭的'],
    antonyms: ['gradual 渐进的', 'smooth 平稳的', 'expected 预期的'],
    examPoints: []
  },
  absence: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['lack 缺乏', 'missing 缺失', 'nonexistence 不存在', 'shortage 短缺'],
    antonyms: ['presence 出席', 'attendance 到场', 'abundance 充足'],
    examPoints: []
  },
  accuracy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['precision 精确', 'exactness 准确', 'correctness 正确性', 'exactitude 精密'],
    antonyms: ['inaccuracy 不准确', 'error 错误', 'imprecision 不精确'],
    examPoints: []
  },
  ache: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pain 疼痛', 'hurt 疼痛', 'soreness 酸痛', 'discomfort 不适'],
    antonyms: ['relief 缓解', 'comfort 舒适', 'ease 轻松'],
    examPoints: []
  },
  acid: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sour 酸的', 'sharp 尖锐的', 'tart 酸涩的', 'biting 刺激的'],
    antonyms: ['sweet 甜的', 'alkaline 碱性的', 'mild 温和的'],
    examPoints: []
  },
  acquisition: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gain 获得', 'attainment 取得', 'procurement 采购', 'obtainment 获得'],
    antonyms: ['loss 损失', 'forfeiture 丧失', 'surrender 放弃'],
    examPoints: []
  },
  adaptation: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['adjustment 调整', 'modification 修改', 'alteration 改变', 'accommodation 适应'],
    antonyms: ['rigidity 僵化', 'inflexibility 不变', 'stagnation 停滞'],
    examPoints: []
  },
  addicted: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['dependent 依赖的', 'hooked 上瘾的', 'devoted 沉迷的', 'obsessed 痴迷的'],
    antonyms: ['independent 独立的', 'free 自由的', 'unattached 未上瘾的'],
    examPoints: []
  },
  adjustment: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['modification 修改', 'alteration 改变', 'adaptation 适应', 'correction 校正'],
    antonyms: ['stagnation 停滞', 'rigidity 僵化', 'permanence 永恒'],
    examPoints: []
  },
  admirable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['excellent 优秀的', 'worthy 值得尊敬的', 'commendable 值得赞美的', 'praiseworthy 值得称赞的'],
    antonyms: ['contemptible 卑劣的', 'despicable 可鄙的', 'unworthy 不值得的'],
    examPoints: []
  },
  adolescence: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['youth 青年时期', 'teens 青少年时期', 'puberty 青春期', 'young adulthood 青年期'],
    antonyms: ['adulthood 成年', 'maturity 成熟', 'old age 老年'],
    examPoints: []
  },
  adolescent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['youth 青年', 'teenager 青少年', 'juvenile 少年', 'minor 未成年人'],
    antonyms: ['adult 成年人', 'grown-up 成年人', 'elder 长者'],
    examPoints: []
  },
  adore: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['love 热爱', 'worship 崇拜', 'cherish 珍爱', 'idolize 偶像崇拜'],
    antonyms: ['hate 憎恨', 'despise 鄙视', 'detest 厌恶'],
    examPoints: []
  },
  advertise: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['promote 推广', 'publicize 宣传', 'announce 宣布', 'market 营销'],
    antonyms: ['hide 隐藏', 'conceal 隐瞒', 'suppress 压制'],
    examPoints: []
  },
  advice: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['counsel 劝告', 'guidance 指导', 'recommendation 建议', 'suggestion 建议'],
    antonyms: ['misinformation 误导', 'misdirection 错误指引', 'deception 欺骗'],
    examPoints: []
  },
  aggression: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['attack 攻击', 'hostility 敌意', 'assault 袭击', 'invasion 侵犯'],
    antonyms: ['peace 和平', 'friendliness 友好', 'cooperation 合作'],
    examPoints: []
  },
  ambiguous: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unclear 不清楚的', 'vague 模糊的', 'uncertain 不确定的', 'equivocal 含糊的'],
    antonyms: ['clear 清楚的', 'definite 明确的', 'explicit 明确的'],
    examPoints: []
  },
  amusement: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['entertainment 娱乐', 'fun 乐趣', 'enjoyment 享受', 'recreation 消遣'],
    antonyms: ['boredom 无聊', 'sadness 悲伤', 'tedium 单调'],
    examPoints: []
  },
  analyse: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['examine 检查', 'study 研究', 'investigate 调查', 'evaluate 评估'],
    antonyms: ['ignore 忽视', 'overlook 忽略', 'neglect 忽略'],
    examPoints: []
  },
  announcement: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['declaration 宣告', 'statement 声明', 'proclamation 公告', 'notice 通知'],
    antonyms: ['silence 沉默', 'secrecy 保密', 'concealment 隐瞒'],
    examPoints: []
  },
  apology: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['regret 遗憾', 'excuse 借口', 'confession 认错', 'reparation 道歉'],
    antonyms: ['defiance 蔑视', 'insistence 坚持', 'accusation 指责'],
    examPoints: []
  },
  appointment: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['meeting 会面', 'arrangement 安排', 'engagement 约会', 'rendezvous 约会'],
    antonyms: ['cancellation 取消', 'dismissal 解约', 'breach 违约'],
    examPoints: []
  },
  appreciation: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gratitude 感激', 'recognition 认可', 'acknowledgment 感谢', 'admiration 赞赏'],
    antonyms: ['ingratitude 忘恩负义', 'contempt 轻视', 'criticism 批评'],
    examPoints: []
  },
  approximately: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['about 大约', 'roughly 大约', 'nearly 几乎', 'around 大约'],
    antonyms: ['exactly 确切地', 'precisely 精确地', 'accurately 准确地'],
    examPoints: []
  },
  arrangement: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['organization 组织', 'plan 计划', 'order 秩序', 'layout 布局'],
    antonyms: ['disorder 混乱', 'confusion 混乱', 'chaos 混乱'],
    examPoints: []
  },
  arrival: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['appearance 出现', 'coming 到来', 'entrance 进入', 'approach 靠近'],
    antonyms: ['departure 离开', 'exit 离开', 'leaving 离去'],
    examPoints: []
  },
  asleep: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sleeping 睡着的', 'slumbering 安睡的', 'dormant 休眠的', 'napping 小睡的'],
    antonyms: ['awake 醒着的', 'alert 警觉的', 'conscious 有意识的'],
    examPoints: []
  },
  assessment: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['evaluation 评估', 'appraisal 估价', 'judgment 判断', 'estimation 估计'],
    antonyms: ['guesswork 猜测', 'ignorance 无知', 'negligence 疏忽'],
    examPoints: []
  },
  assignment: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['task 任务', 'duty 职责', 'mission 使命', 'undertaking 任务'],
    antonyms: ['leisure 休闲', 'idleness 闲散', 'vacation 假期'],
    examPoints: []
  },
  assistance: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['help 帮助', 'aid 援助', 'support 支持', 'relief 救助'],
    antonyms: ['hindrance 阻碍', 'obstruction 妨碍', 'interference 干扰'],
    examPoints: []
  },
  association: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['organization 组织', 'connection 联系', 'alliance 联盟', 'society 团体'],
    antonyms: ['separation 分离', 'dissociation 脱离', 'isolation 孤立'],
    examPoints: []
  },
  assumption: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['presumption 假定', 'supposition 假设', 'conjecture 推测', 'hypothesis 假说'],
    antonyms: ['fact 事实', 'proof 证据', 'certainty 确定性'],
    examPoints: []
  },
  athletic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fit 健壮的', 'strong 强壮的', 'sporty 运动的', 'robust 强健的'],
    antonyms: ['weak 虚弱的', 'unfit 不健壮的', 'frail 脆弱的'],
    examPoints: []
  },
  attention: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['focus 专注', 'concentration 集中', 'awareness 注意', 'notice 留意'],
    antonyms: ['distraction 分心', 'inattention 不注意', 'neglect 忽视'],
    examPoints: []
  },
  attitude: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['posture 姿态', 'stance 立场', 'viewpoint 观点', 'disposition 态度'],
    antonyms: ['indifference 冷漠', 'apathy 漠然', 'unconcern 漠不关心'],
    examPoints: []
  },
  attraction: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['appeal 吸引力', 'draw 吸引', 'charm 魅力', 'fascination 迷恋'],
    antonyms: ['repulsion 反感', 'disgust 厌恶', 'aversion 厌恶'],
    examPoints: []
  },
  authentic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['genuine 真正的', 'real 真实的', 'true 真的', 'legitimate 正当的'],
    antonyms: ['fake 假的', 'false 虚假的', 'counterfeit 伪造的'],
    examPoints: []
  },
  autonomous: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['independent 独立的', 'self-governing 自治的', 'sovereign 主权的', 'free 自由的'],
    antonyms: ['dependent 依赖的', 'controlled 受控的', 'subordinate 从属的'],
    examPoints: []
  },
  autumn: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fall 秋天', 'harvest time 收获季节', 'autumntime 秋季'],
    antonyms: ['spring 春天', 'summer 夏天'],
    examPoints: []
  },
  awesome: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['amazing 令人惊叹的', 'wonderful 极好的', 'magnificent 壮丽的', 'impressive 令人印象深刻的'],
    antonyms: ['awful 糟糕的', 'terrible 可怕的', 'ordinary 平凡的'],
    examPoints: []
  },
  backward: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['behind 落后的', 'retrograde 倒退的', 'behindhand 落后的', 'reversed 倒退的'],
    antonyms: ['forward 向前的', 'advanced 先进的', 'progressive 进步的'],
    examPoints: []
  },
  bare: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['naked 裸露的', 'uncovered 未覆盖的', 'exposed 暴露的', 'bald 光秃的'],
    antonyms: ['clothed 穿衣的', 'covered 覆盖的', 'dressed 穿着衣服的'],
    examPoints: []
  },
  bargain: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['deal 交易', 'negotiate 谈判', 'haggle 讨价还价', 'trade 交易'],
    antonyms: ['cheat 欺骗', 'overcharge 索价过高', 'swindle 诈骗'],
    examPoints: []
  },
  barrier: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['obstacle 障碍', 'block 阻塞', 'hindrance 阻碍', 'obstruction 障碍物'],
    antonyms: ['aid 帮助', 'help 帮助', 'assistance 援助'],
    examPoints: []
  },
  bathe: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['wash 洗', 'clean 清洁', 'soak 浸泡', 'swim 游泳'],
    antonyms: ['dirty 弄脏', 'soil 弄脏', 'stain 弄污'],
    examPoints: []
  },
  become: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['grow 变成', 'turn into 变成', 'develop into 发展成', 'evolve into 演变成'],
    antonyms: ['remain 保持', 'stay 保持', 'continue 继续'],
    examPoints: []
  },
  behaviour: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['conduct 行为', 'manner 举止', 'action 行动', 'demeanor 举止'],
    antonyms: ['misbehavior 不良行为', 'misconduct 不端行为', 'impropriety 不当行为'],
    examPoints: []
  },
  beneath: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['under 在...下', 'below 在下方', 'underneath 在底下', 'lower than 低于'],
    antonyms: ['above 在...上方', 'over 在...之上', 'atop 在顶上'],
    examPoints: []
  },
  birth: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['beginning 开始', 'origin 起源', 'creation 创造', 'emergence 出现'],
    antonyms: ['death 死亡', 'end 结束', 'demise 逝去'],
    examPoints: []
  },
  bite: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['chew 咀嚼', 'nip 咬', 'gnaw 咬', 'munch 用力嚼'],
    antonyms: ['spit out 吐出', 'release 释放', 'let go 放开'],
    examPoints: []
  },
  bitter: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sour 酸的', 'harsh 苦涩的', 'acrid 辛辣的', 'tart 酸涩的'],
    antonyms: ['sweet 甜的', 'mild 温和的', 'pleasant 愉快的'],
    examPoints: []
  },
  blind: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sightless 失明的', 'unaware 未察觉的', 'ignorant 无知的', 'unseeing 看不见的'],
    antonyms: ['seeing 看得见的', 'aware 察觉的', 'sighted 有视力的'],
    examPoints: []
  },
  boil: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['simmer 炖', 'heat 加热', 'bubble 沸腾', 'seethe 沸腾'],
    antonyms: ['freeze 结冰', 'cool 冷却', 'chill 冷冻'],
    examPoints: []
  },
  bored: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tired 厌倦的', 'uninterested 不感兴趣的', 'weary 厌倦的', 'listless 无精打采的'],
    antonyms: ['interested 感兴趣的', 'excited 兴奋的', 'entertained 愉快的'],
    examPoints: []
  },
  boundary: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['border 边界', 'limit 限制', 'frontier 边境', 'edge 边缘'],
    antonyms: ['center 中心', 'interior 内部', 'middle 中间'],
    examPoints: []
  },
  boycott: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['avoid 避免', 'shun 避开', 'reject 拒绝', 'abstain 弃权'],
    antonyms: ['support 支持', 'patronize 惠顾', 'endorse 认可'],
    examPoints: []
  },
  bravery: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['courage 勇气', 'valor 英勇', 'boldness 大胆', 'fearlessness 无畏'],
    antonyms: ['cowardice 怯懦', 'fear 恐惧', 'timidity 胆怯'],
    examPoints: []
  },
  breathe: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['respire 呼吸', 'inhale 吸气', 'exhale 呼气', 'gasp 喘息'],
    antonyms: ['suffocate 窒息', 'choke 窒息', 'smother 闷死'],
    examPoints: []
  },
  breathless: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gasping 喘气的', 'panting 气喘吁吁的', 'winded 喘不过气的', 'exhausted 精疲力竭的'],
    antonyms: ['calm 平静的', 'relaxed 放松的', 'composed 镇定的'],
    examPoints: []
  },
  broad: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['wide 宽的', 'extensive 广泛的', 'spacious 宽敞的', 'vast 辽阔的'],
    antonyms: ['narrow 狭窄的', 'limited 有限的', 'restricted 受限的'],
    examPoints: []
  },
  broken: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['shattered 破碎的', 'damaged 损坏的', 'fractured 断裂的', 'ruined 毁坏的'],
    antonyms: ['intact 完好的', 'whole 完整的', 'undamaged 未损坏的'],
    examPoints: []
  },
  bureaucratic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['administrative 行政的', 'rigid 僵化的', 'official 官方的', 'red-tape 繁文缛节的'],
    antonyms: ['flexible 灵活的', 'simple 简单的', 'informal 非正式的'],
    examPoints: []
  },
  burn: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ignite 点燃', 'scorch 烧焦', 'flame 燃烧', 'consume 烧毁'],
    antonyms: ['extinguish 熄灭', 'cool 冷却', 'quench 熄灭'],
    examPoints: []
  },
  bury: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['inter 埋葬', 'conceal 隐藏', 'hide 隐藏', 'entomb 埋葬'],
    antonyms: ['unearth 挖出', 'reveal 揭露', 'expose 暴露'],
    examPoints: []
  },
  capital: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['wealth 财富', 'funds 资金', 'principal 本金', 'assets 资产'],
    antonyms: ['debt 债务', 'liability 负债', 'deficit 赤字'],
    examPoints: []
  },
  carve: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sculpt 雕刻', 'cut 切', 'chisel 凿', 'shape 塑造'],
    antonyms: ['assemble 组装', 'build 建造', 'construct 构造'],
    examPoints: []
  },
  cast: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['throw 投掷', 'fling 抛', 'toss 抛', 'hurl 猛投'],
    antonyms: ['catch 接住', 'keep 保留', 'hold 拿住'],
    examPoints: []
  },
  catastrophe: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['disaster 灾难', 'calamity 灾祸', 'tragedy 悲剧', 'devastation 毁灭'],
    antonyms: ['blessing 祝福', 'miracle 奇迹', 'fortune 幸运'],
    examPoints: []
  },
  catch: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['capture 捕获', 'grab 抓住', 'seize 抓住', 'nab 拿住'],
    antonyms: ['release 释放', 'free 释放', 'let go 放开'],
    examPoints: []
  },
  cater: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['provide 提供', 'serve 服务', 'supply 供应', 'accommodate 供应'],
    antonyms: ['deny 拒绝', 'refuse 拒绝', 'withhold 扣留'],
    examPoints: []
  },
  caution: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['care 小心', 'warning 警告', 'prudence 谨慎', 'heed 注意'],
    antonyms: ['recklessness 鲁莽', 'carelessness 粗心', 'rashness 轻率'],
    examPoints: []
  },
  cautious: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['careful 小心的', 'wary 谨慎的', 'prudent 谨慎的', 'guarded 戒备的'],
    antonyms: ['careless 粗心的', 'reckless 鲁莽的', 'rash 轻率的'],
    examPoints: []
  },
  celebration: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['festivity 庆祝', 'party 聚会', 'rejoicing 欢庆', 'commemoration 纪念'],
    antonyms: ['mourning 哀悼', 'sorrow 悲伤', 'grief 悲痛'],
    examPoints: []
  },
  central: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['middle 中间的', 'core 核心的', 'principal 主要的', 'focal 焦点的'],
    antonyms: ['peripheral 外围的', 'outer 外部的', 'marginal 边缘的'],
    examPoints: []
  },
  centre: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['middle 中间', 'heart 心脏', 'core 核心', 'hub 中心'],
    antonyms: ['edge 边缘', 'periphery 外围', 'boundary 边界'],
    examPoints: []
  },
  challenging: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['difficult 困难的', 'demanding 要求高的', 'tough 艰难的', 'arduous 艰巨的'],
    antonyms: ['easy 容易的', 'simple 简单的', 'effortless 不费力的'],
    examPoints: []
  },
  chance: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['opportunity 机会', 'possibility 可能性', 'prospect 前景', 'opening 时机'],
    antonyms: ['certainty 必然', 'impossibility 不可能', 'plan 计划'],
    examPoints: []
  },
  changeable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['variable 多变的', 'unstable 不稳定的', 'unpredictable 不可预测的', 'fickle 易变的'],
    antonyms: ['constant 不变的', 'stable 稳定的', 'steady 稳定的'],
    examPoints: []
  },
  chaos: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['disorder 混乱', 'confusion 混乱', 'turmoil 动荡', 'mayhem 大混乱'],
    antonyms: ['order 秩序', 'calm 平静', 'harmony 和谐'],
    examPoints: []
  },
  characteristic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['feature 特征', 'trait 特点', 'quality 品质', 'attribute 属性'],
    antonyms: ['abnormality 异常', 'anomaly 反常', 'irregularity 不规则'],
    examPoints: []
  },
  chat: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['talk 谈话', 'converse 交谈', 'gossip 闲聊', 'chatter 喋喋不休'],
    antonyms: ['silence 沉默', 'quiet 安静', 'stillness 寂静'],
    examPoints: []
  },
  cheer: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['encourage 鼓励', 'applaud 鼓掌', 'support 支持', 'comfort 安慰'],
    antonyms: ['discourage 使气馁', 'boo 喝倒彩', 'dismay 使沮丧'],
    examPoints: []
  },
  childhood: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['youth 青年时期', 'early years 早年', 'infancy 婴儿期', 'boyhood 少年时代'],
    antonyms: ['adulthood 成年', 'maturity 成熟', 'old age 老年'],
    examPoints: []
  },
  choke: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['suffocate 窒息', 'strangle 勒死', 'smother 闷死', 'gag 窒息'],
    antonyms: ['breathe 呼吸', 'relieve 缓解', 'free 释放'],
    examPoints: []
  },
  civilization: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['culture 文化', 'society 社会', 'advancement 进步', 'progress 进步'],
    antonyms: ['barbarism 野蛮', 'savagery 野蛮', 'primitivism 原始'],
    examPoints: []
  },
  clap: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['applaud 鼓掌', 'cheer 欢呼', 'acclaim 喝彩', 'praise 赞美'],
    antonyms: ['boo 喝倒彩', 'hiss 嘘声', 'jeer 嘲笑'],
    examPoints: []
  },
  cloudy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['overcast 阴天的', 'gloomy 阴沉的', 'murky 阴暗的', 'hazy 朦胧的'],
    antonyms: ['clear 晴朗的', 'sunny 晴天的', 'bright 明亮的'],
    examPoints: []
  },
  comedy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['humor 幽默', 'fun 乐趣', 'amusement 娱乐', 'farce 闹剧'],
    antonyms: ['tragedy 悲剧', 'seriousness 严肃', 'drama 戏剧'],
    examPoints: []
  },
  comfortable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['cozy 舒适的', 'relaxed 放松的', 'snug 舒适的', 'restful 惬意的'],
    antonyms: ['uncomfortable 不舒服的', 'uneasy 不安的', 'miserable 痛苦的'],
    examPoints: []
  },
  comic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['funny 滑稽的', 'humorous 幽默的', 'amusing 有趣的', 'hilarious 搞笑的'],
    antonyms: ['serious 严肃的', 'tragic 悲剧的', 'somber 忧郁的'],
    examPoints: []
  },
  commerce: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['trade 贸易', 'business 商业', 'exchange 交换', 'dealing 交易'],
    antonyms: ['isolation 孤立', 'seclusion 隐居', 'stagnation 停滞'],
    examPoints: []
  },
  commercial: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['profit-making 盈利的', 'business 商业的', 'mercantile 商业的', 'marketable 可销售的'],
    antonyms: ['noncommercial 非商业的', 'unprofitable 无利可图的', 'charitable 慈善的'],
    examPoints: []
  },
  communication: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['exchange 交流', 'contact 联系', 'correspondence 通信', 'dialogue 对话'],
    antonyms: ['silence 沉默', 'isolation 孤立', 'secrecy 保密'],
    examPoints: []
  },
  community: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['society 社会', 'group 群体', 'public 公众', 'population 人口'],
    antonyms: ['individual 个人', 'isolation 孤立', 'solitude 独处'],
    examPoints: []
  },
  comparison: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['contrast 对比', 'similarity 相似', 'likeness 类似', 'analogy 类比'],
    antonyms: ['difference 差异', 'contrast 差异', 'distinction 区别'],
    examPoints: []
  },
  competitive: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ambitious 有抱负的', 'aggressive 有进取心的', 'rivalrous 竞争的', 'cutthroat 激烈竞争的'],
    antonyms: ['cooperative 合作的', 'passive 被动的', 'indifferent 冷漠的'],
    examPoints: []
  },
  complaint: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['grievance 不满', 'protest 抗议', 'objection 异议', 'gripe 牢骚'],
    antonyms: ['praise 赞美', 'approval 赞成', 'commendation 表扬'],
    examPoints: []
  },
  complicated: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['complex 复杂的', 'intricate 错综的', 'confusing 令人困惑的', 'involved 复杂的'],
    antonyms: ['simple 简单的', 'easy 容易的', 'clear 清楚的'],
    examPoints: []
  },
  composition: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['makeup 构成', 'structure 结构', 'arrangement 安排', 'formation 形成'],
    antonyms: ['destruction 破坏', 'disorder 混乱', 'dismemberment 分裂'],
    examPoints: []
  },
  comprehension: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['understanding 理解', 'grasp 领会', 'perception 认知', 'apprehension 理解'],
    antonyms: ['misunderstanding 误解', 'confusion 困惑', 'ignorance 无知'],
    examPoints: []
  },
  concept: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['idea 概念', 'notion 观念', 'conception 概念', 'thought 思想'],
    antonyms: ['reality 现实', 'fact 事实', 'actuality 实际'],
    examPoints: []
  },
  conclusion: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['end 结束', 'decision 决定', 'resolution 决议', 'termination 终止'],
    antonyms: ['beginning 开始', 'start 开始', 'opening 开端'],
    examPoints: []
  },
  concrete: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['specific 具体的', 'solid 固体的', 'definite 明确的', 'tangible 有形的'],
    antonyms: ['abstract 抽象的', 'vague 模糊的', 'theoretical 理论的'],
    examPoints: []
  },
  confused: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bewildered 困惑的', 'mixed up 混淆的', 'perplexed 迷惑的', 'puzzled 困惑的'],
    antonyms: ['clear 清楚的', 'certain 确定的', 'composed 镇定的'],
    examPoints: []
  },
  congratulate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['commend 表扬', 'praise 赞美', 'compliment 恭维', 'felicitate 祝贺'],
    antonyms: ['commiserate 怜悯', 'criticize 批评', 'condole 哀悼'],
    examPoints: []
  },
  connection: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['link 联系', 'tie 纽带', 'bond 纽带', 'relation 关系'],
    antonyms: ['separation 分离', 'disconnection 断开', 'isolation 孤立'],
    examPoints: []
  },
  conquer: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['defeat 击败', 'overcome 克服', 'subdue 征服', 'vanquish 战胜'],
    antonyms: ['surrender 投降', 'yield 屈服', 'submit 顺从'],
    examPoints: []
  },
  considerable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['substantial 大量的', 'significant 重要的', 'large 大的', 'plentiful 丰富的'],
    antonyms: ['small 小的', 'minor 次要的', 'insignificant 微不足道的'],
    examPoints: []
  },
  construction: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['building 建筑', 'creation 创造', 'formation 形成', 'erection 建立'],
    antonyms: ['destruction 毁坏', 'demolition 拆除', 'ruin 毁灭'],
    examPoints: []
  },
  contemporary: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['modern 现代的', 'current 当前的', 'present 目前的', 'existing 现存的'],
    antonyms: ['ancient 古老的', 'old 旧的', 'outdated 过时的'],
    examPoints: []
  },
  content: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['satisfied 满意的', 'happy 快乐的', 'pleased 高兴的', 'fulfilled 满足的'],
    antonyms: ['dissatisfied 不满的', 'unhappy 不快乐的', 'discontented 不满的'],
    examPoints: []
  },
  contradiction: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['conflict 冲突', 'denial 否认', 'inconsistency 矛盾', 'opposition 对立'],
    antonyms: ['agreement 一致', 'consistency 一致', 'harmony 和谐'],
    examPoints: []
  },
  contrary: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['opposite 相反的', 'conflicting 冲突的', 'opposed 反对的', 'reverse 相反的'],
    antonyms: ['similar 相似的', 'agreeing 一致的', 'consistent 一致的'],
    examPoints: []
  },
  contribution: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['donation 捐赠', 'addition 增加', 'gift 礼物', 'offering 奉献'],
    antonyms: ['withdrawal 收回', 'deduction 扣除', 'subtraction 减少'],
    examPoints: []
  },
  controversy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['dispute 争论', 'argument 争论', 'debate 辩论', 'conflict 冲突'],
    antonyms: ['agreement 一致', 'harmony 和谐', 'consensus 共识'],
    examPoints: []
  },
  convenient: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['handy 方便的', 'suitable 合适的', 'fitting 适合的', 'useful 有用的'],
    antonyms: ['inconvenient 不便的', 'awkward 别扭的', 'unsuitable 不合适的'],
    examPoints: []
  },
  conventional: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['traditional 传统的', 'ordinary 普通的', 'standard 标准的', 'customary 习惯的'],
    antonyms: ['unconventional 非常规的', 'novel 新奇的', 'original 独创的'],
    examPoints: []
  },
  conversation: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['dialogue 对话', 'talk 谈话', 'chat 闲谈', 'discussion 讨论'],
    antonyms: ['silence 沉默', 'monologue 独白', 'quiet 安静'],
    examPoints: []
  },
  corruption: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['bribery 贿赂', 'decay 腐败', 'dishonesty 不诚实', 'depravity 堕落'],
    antonyms: ['honesty 诚实', 'integrity 正直', 'virtue 美德'],
    examPoints: []
  },
  coward: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['weakling 怯懦者', 'recreant 懦夫', 'craven 懦夫', 'poltroon 懦夫'],
    antonyms: ['hero 英雄', 'brave person 勇者', 'warrior 勇士'],
    examPoints: []
  },
  crash: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['smash 猛撞', 'collide 碰撞', 'shatter 破碎', 'plunge 坠落'],
    antonyms: ['land safely 安全着陆', 'stop 停止', 'avoid 避开'],
    examPoints: []
  },
  crawl: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['creep 爬行', 'slither 蜿蜒', 'climb 爬', 'inch 缓慢移动'],
    antonyms: ['run 跑', 'rush 冲', 'sprint 冲刺'],
    examPoints: []
  },
  crazy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['mad 疯狂的', 'insane 精神失常的', 'wild 狂野的', 'absurd 荒唐的'],
    antonyms: ['sane 理智的', 'rational 理性的', 'calm 平静的'],
    examPoints: []
  },
  creative: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['imaginative 富有想象力的', 'inventive 有创造力的', 'original 独创的', 'innovative 创新的'],
    antonyms: ['uncreative 缺乏创意的', 'dull 乏味的', 'imitative 模仿的'],
    examPoints: []
  },
  creed: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['belief 信仰', 'faith 信念', 'doctrine 教义', 'principle 信条'],
    antonyms: ['doubt 怀疑', 'skepticism 怀疑论', 'unbelief 不信'],
    examPoints: []
  },
  criticism: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['disapproval 不满', 'review 评论', 'judgment 评判', 'censure 指责'],
    antonyms: ['praise 赞美', 'approval 赞成', 'commendation 表扬'],
    examPoints: []
  },
  criticize: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['condemn 谴责', 'judge 评判', 'censure 指责', 'find fault 挑剔'],
    antonyms: ['praise 赞美', 'commend 表扬', 'approve 赞成'],
    examPoints: []
  },
  cross: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['traverse 横穿', 'span 跨越', 'intersect 交叉', 'pass through 穿过'],
    antonyms: ['avoid 避开', 'bypass 绕过', 'stay 停留'],
    examPoints: []
  },
  crowded: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['packed 拥挤的', 'congested 拥堵的', 'jam-packed 挤满的', 'teeming 挤满的'],
    antonyms: ['empty 空的', 'sparse 稀少的', 'vacant 空的'],
    examPoints: []
  },
  crush: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['smash 压碎', 'suppress 镇压', 'squash 压扁', 'defeat 击败'],
    antonyms: ['release 释放', 'free 释放', 'lift 举起'],
    examPoints: []
  },
  curiosity: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['interest 兴趣', 'inquisitiveness 好奇', 'curiousness 好奇心', 'eagerness 渴望'],
    antonyms: ['indifference 冷漠', 'apathy 漠然', 'unconcern 漠不关心'],
    examPoints: []
  },
  curse: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['swear 诅咒', 'damn 诅咒', 'condemn 谴责', 'execrate 咒骂'],
    antonyms: ['bless 祝福', 'praise 赞美', 'consecrate 使神圣'],
    examPoints: []
  },
  cycle: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['circle 循环', 'rotate 循环', 'recur 重现', 'period 周期'],
    antonyms: ['standstill 停滞', 'halt 停止', 'break 中断'],
    examPoints: []
  },
  daily: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['everyday 每天的', 'day-to-day 日常的', 'routine 例行的', 'quotidian 每日的'],
    antonyms: ['occasional 偶尔的', 'rare 稀少的', 'infrequent 罕见的'],
    examPoints: []
  },
  deeply: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['profoundly 深刻地', 'intensely 强烈地', 'thoroughly 彻底地', 'acutely 深深地'],
    antonyms: ['superficially 肤浅地', 'slightly 稍微', 'barely 几乎不'],
    examPoints: []
  },
  definite: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['certain 确定的', 'clear 清楚的', 'precise 精确的', 'explicit 明确的'],
    antonyms: ['vague 模糊的', 'uncertain 不确定的', 'ambiguous 含糊的'],
    examPoints: []
  },
  delicious: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tasty 美味的', 'appetizing 开胃的', 'flavorful 可口的', 'scrumptious 极美味的'],
    antonyms: ['tasteless 无味的', 'disgusting 令人恶心的', 'bland 乏味的'],
    examPoints: []
  },
  democracy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['self-rule 自治', 'equality 平等', 'freedom 自由', 'self-government 自治'],
    antonyms: ['dictatorship 独裁', 'autocracy 专制', 'tyranny 暴政'],
    examPoints: []
  },
  democratic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['egalitarian 平等的', 'popular 大众的', 'representative 代议的', 'equal 平等的'],
    antonyms: ['authoritarian 专制的', 'dictatorial 独裁的', 'autocratic 专制的'],
    examPoints: []
  },
  dense: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['thick 浓密的', 'compact 紧密的', 'crowded 拥挤的', 'heavy 沉重的'],
    antonyms: ['thin 稀薄的', 'sparse 稀疏的', 'light 轻的'],
    examPoints: []
  },
  departure: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['exit 离开', 'leaving 离去', 'withdrawal 撤离', 'going 离开'],
    antonyms: ['arrival 到达', 'coming 到来', 'entrance 进入'],
    examPoints: []
  },
  destruction: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ruin 毁灭', 'devastation 破坏', 'demolition 拆毁', 'havoc 浩劫'],
    antonyms: ['construction 建设', 'creation 创造', 'preservation 保存'],
    examPoints: []
  },
  discovery: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['finding 发现', 'detection 发现', 'uncovering 揭示', 'revelation 揭露'],
    antonyms: ['concealment 隐瞒', 'loss 丢失', 'ignorance 无知'],
    examPoints: []
  },
  distant: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['far 遥远的', 'remote 偏远的', 'removed 遥远的', 'faraway 遥远的'],
    antonyms: ['near 近的', 'close 接近的', 'adjacent 邻近的'],
    examPoints: []
  },
  distinction: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['difference 差别', 'contrast 差异', 'differentiation 区别', 'honor 荣誉'],
    antonyms: ['similarity 相似', 'sameness 相同', 'confusion 混淆'],
    examPoints: []
  },
  division: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['separation 分离', 'split 分裂', 'partition 划分', 'schism 分裂'],
    antonyms: ['unity 统一', 'union 联合', 'combination 合并'],
    examPoints: []
  },
  divorce: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['separate 分离', 'part 分开', 'dissolve 解除', 'split 分裂'],
    antonyms: ['marriage 婚姻', 'union 结合', 'reconciliation 和解'],
    examPoints: []
  },
  document: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['record 记录', 'file 文件', 'paper 文件', 'certificate 证书'],
    antonyms: ['destroy 销毁', 'erase 抹去'],
    examPoints: []
  },
  drag: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pull 拉', 'draw 拖', 'haul 拖运', 'tow 拖曳'],
    antonyms: ['push 推', 'release 释放', 'let go 放开'],
    examPoints: []
  },
  drive: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['steer 驾驶', 'operate 操作', 'propel 推动', 'motivate 驱使'],
    antonyms: ['stop 停止', 'halt 停住', 'park 停放'],
    examPoints: []
  },
  dry: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['arid 干旱的', 'parched 干透的', 'dehydrated 脱水的', 'barren 贫瘠的'],
    antonyms: ['wet 湿的', 'moist 潮湿的', 'damp 湿润的'],
    examPoints: []
  },
  dynamic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['energetic 精力充沛的', 'active 活跃的', 'vigorous 有活力的', 'lively 活泼的'],
    antonyms: ['static 静态的', 'inactive 不活跃的', 'sluggish 迟缓的'],
    examPoints: []
  },
  earnest: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sincere 真诚的', 'serious 认真的', 'serious 严肃的', 'zealous 热忱的'],
    antonyms: ['frivolous 轻浮的', 'insincere 不真诚的', 'casual 随便的'],
    examPoints: []
  },
  economic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['financial 经济的', 'fiscal 财政的', 'monetary 货币的', 'commercial 商业的'],
    antonyms: ['uneconomic 不经济的', 'wasteful 浪费的'],
    examPoints: []
  },
  election: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['vote 选举', 'ballot 投票', 'polling 投票', 'selection 选拔'],
    antonyms: ['appointment 任命', 'selection 任命', 'succession 继任'],
    examPoints: []
  },
  embrace: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hug 拥抱', 'accept 接受', 'adopt 采纳', 'clasp 紧抱'],
    antonyms: ['reject 拒绝', 'release 释放', 'shun 避开'],
    examPoints: []
  },
  emergency: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['crisis 危机', 'urgency 紧急', 'crunch 危机关头', 'extremity 紧急关头'],
    antonyms: ['routine 例行', 'normalcy 正常', 'calm 平静'],
    examPoints: []
  },
  emotional: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['passionate 多情的', 'sentimental 多愁善感的', 'expressive 富有感情的', 'moved 受感动的'],
    antonyms: ['unemotional 不动感情的', 'cold 冷漠的', 'rational 理性的'],
    examPoints: []
  },
  emphasize: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['stress 强调', 'highlight 突出', 'underline 强调', 'accentuate 着重'],
    antonyms: ['downplay 贬低', 'minimize 最小化', 'ignore 忽视'],
    examPoints: []
  },
  employment: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['work 工作', 'job 职业', 'occupation 职业', 'labor 劳动'],
    antonyms: ['unemployment 失业', 'idleness 闲散', 'leisure 休闲'],
    examPoints: []
  },
  endless: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['infinite 无尽的', 'eternal 永恒的', 'perpetual 永久的', 'limitless 无限的'],
    antonyms: ['finite 有限的', 'limited 有限的', 'brief 短暂的'],
    examPoints: []
  },
  enrich: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['enhance 丰富', 'improve 改善', 'fortify 加强', 'better 改善'],
    antonyms: ['deplete 耗尽', 'impoverish 使贫困', 'deprive 剥夺'],
    examPoints: []
  },
  entirely: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['completely 完全地', 'wholly 全部地', 'fully 充分地', 'totally 完全地'],
    antonyms: ['partially 部分地', 'partly 部分地', 'slightly 稍微'],
    examPoints: []
  },
  equality: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fairness 公平', 'parity 平等', 'equivalence 等同', 'balance 平衡'],
    antonyms: ['inequality 不平等', 'disparity 差距', 'bias 偏见'],
    examPoints: []
  },
  exactly: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['precisely 精确地', 'accurately 准确地', 'just 正好', 'perfectly 完全地'],
    antonyms: ['roughly 大约', 'approximately 大约', 'inaccurately 不准确地'],
    examPoints: []
  },
  excellent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['outstanding 杰出的', 'superb 极好的', 'superior 优秀的', 'exceptional 卓越的'],
    antonyms: ['poor 差的', 'inferior 劣等的', 'mediocre 平庸的'],
    examPoints: []
  },
  excessive: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['extreme 过分的', 'immoderate 过度的', 'inordinate 过度的', 'undue 过度的'],
    antonyms: ['moderate 适度的', 'reasonable 合理的', 'adequate 适量的'],
    examPoints: []
  },
  excitement: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['thrill 激动', 'enthusiasm 热情', 'agitation 激动', 'fervor 热烈'],
    antonyms: ['calm 平静', 'boredom 无聊', 'apathy 漠然'],
    examPoints: []
  },
  exercise: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['workout 锻炼', 'activity 活动', 'practice 练习', 'train 训练'],
    antonyms: ['idleness 闲散', 'rest 休息', 'inactivity 不活动'],
    examPoints: []
  },
  existence: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['being 存在', 'life 生命', 'reality 现实', 'presence 存在'],
    antonyms: ['nonexistence 不存在', 'death 死亡', 'nothing 虚无'],
    examPoints: []
  },
  expansion: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['growth 增长', 'enlargement 扩大', 'extension 扩展', 'increase 增加'],
    antonyms: ['contraction 收缩', 'reduction 减少', 'shrinkage 萎缩'],
    examPoints: []
  },
  expectation: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['anticipation 期待', 'hope 希望', 'prospect 预期', 'assumption 预料'],
    antonyms: ['despair 绝望', 'disappointment 失望', 'surprise 意外'],
    examPoints: []
  },
  expense: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['cost 花费', 'expenditure 开支', 'outlay 支出', 'charge 费用'],
    antonyms: ['income 收入', 'savings 储蓄', 'profit 利润'],
    examPoints: []
  },
  expensive: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'more expensive', superlative: 'most expensive' },
    synonyms: ['costly 昂贵的', 'pricey 昂贵的', 'dear 贵的', 'high-priced 高价的'],
    antonyms: ['cheap 便宜的', 'inexpensive 廉价的', 'affordable 负担得起的'],
    examPoints: []
  },
  explanation: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['interpretation 解释', 'account 说明', 'clarification 澄清', 'description 描述'],
    antonyms: ['confusion 困惑', 'mystery 谜', 'silence 沉默'],
    examPoints: []
  },
  expression: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['phrase 表达', 'statement 表述', 'look 神情', 'utterance 话语'],
    antonyms: ['silence 沉默', 'suppression 压制'],
    examPoints: []
  },
  extension: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['expansion 扩展', 'addition 附加', 'prolongation 延长', 'stretch 延伸'],
    antonyms: ['reduction 减少', 'shortening 缩短', 'contraction 收缩'],
    examPoints: []
  },
  extraordinary: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['remarkable 非凡的', 'exceptional 卓越的', 'unusual 不寻常的', 'outstanding 杰出的'],
    antonyms: ['ordinary 普通的', 'common 平常的', 'typical 典型的'],
    examPoints: []
  },
  extremely: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['very 非常', 'exceedingly 极其', 'exceptionally 格外', 'immensely 极大地'],
    antonyms: ['slightly 稍微', 'moderately 适度地', 'barely 几乎不'],
    examPoints: []
  },
  fantasy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['imagination 幻想', 'fantasy 幻想', 'dream 梦想', 'illusion 幻觉'],
    antonyms: ['reality 现实', 'fact 事实', 'truth 真相'],
    examPoints: []
  },
  farewell: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['goodbye 再见', 'parting 告别', 'adieu 告别', 'leave-taking 告别'],
    antonyms: ['welcome 欢迎', 'greeting 问候', 'meeting 相见'],
    examPoints: []
  },
  fashionable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['stylish 时髦的', 'trendy 时髦的', 'chic 时髦的', 'in vogue 流行的'],
    antonyms: ['unfashionable 不时髦的', 'outdated 过时的', 'old-fashioned 老式的'],
    examPoints: []
  },
  favorite: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['preferred 最喜欢的', 'beloved 钟爱的', 'chosen 选中的', 'favourite 偏爱的'],
    antonyms: ['least liked 最不喜欢的', 'disliked 厌恶的'],
    examPoints: []
  },
  fearful: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['afraid 害怕的', 'frightened 害怕的', 'terrified 恐惧的', 'anxious 焦虑的'],
    antonyms: ['fearless 无畏的', 'brave 勇敢的', 'bold 大胆的'],
    examPoints: []
  },
  feedback: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['response 回应', 'reaction 反应', 'comment 意见', 'review 评价'],
    antonyms: ['silence 沉默', 'ignorance 无知'],
    examPoints: []
  },
  final: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['last 最后的', 'ultimate 最终的', 'concluding 结尾的', 'terminal 末端的'],
    antonyms: ['first 第一的', 'initial 最初的', 'beginning 开始的'],
    examPoints: []
  },
  financial: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['monetary 货币的', 'fiscal 财政的', 'economic 经济的', 'pecuniary 金钱的'],
    antonyms: ['nonfinancial 非财务的', 'nonmonetary 非货币的', 'impecunious 无钱的'],
    examPoints: []
  },
  fit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['suitable 合适的', 'healthy 健康的', 'adapted 适合的', 'proper 恰当的'],
    antonyms: ['unfit 不合适的', 'unsuitable 不适合的', 'unhealthy 不健康的'],
    examPoints: []
  },
  fond: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['affectionate 深情的', 'loving 喜爱的', 'devoted 喜爱的', 'attached 依恋的'],
    antonyms: ['averse 厌恶的', 'indifferent 冷漠的', 'disliking 厌恶的'],
    examPoints: []
  },
  forgive: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['pardon 原谅', 'excuse 宽恕', 'absolve 赦免', 'acquit 宣告无罪'],
    antonyms: ['blame 责备', 'punish 惩罚', 'condemn 谴责'],
    examPoints: []
  },
  fortune: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['luck 运气', 'wealth 财富', 'destiny 命运', 'chance 机遇'],
    antonyms: ['misfortune 不幸', 'poverty 贫穷', 'bad luck 厄运'],
    examPoints: []
  },
  forward: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ahead 向前', 'onward 向前', 'advance 前进', 'onward 前进的'],
    antonyms: ['backward 向后', 'behind 落后', 'reverse 倒退'],
    examPoints: []
  },
  freeze: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['chill 冷冻', 'solidify 凝固', 'harden 变硬', 'refrigerate 冷藏'],
    antonyms: ['melt 融化', 'thaw 解冻', 'boil 沸腾'],
    examPoints: []
  },
  frown: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['scowl 皱眉', 'glare 怒视', 'grimace 做鬼脸', 'pout 撅嘴'],
    antonyms: ['smile 微笑', 'grin 咧嘴笑'],
    examPoints: []
  },
  generally: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['usually 通常', 'commonly 一般地', 'broadly 广义地', 'ordinarily 惯常地'],
    antonyms: ['rarely 罕见地', 'seldom 很少', 'specifically 特定地'],
    examPoints: []
  },
  glory: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fame 名望', 'honor 荣誉', 'renown 声誉', 'splendor 辉煌'],
    antonyms: ['disgrace 耻辱', 'shame 羞耻', 'oblivion 默默无闻'],
    examPoints: []
  },
  glue: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['paste 粘贴', 'stick 粘', 'adhere 粘附', 'cement 粘合'],
    antonyms: ['separate 分开', 'detach 分离', 'unstick 揭开'],
    examPoints: []
  },
  grab: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['seize 抓住', 'snatch 夺取', 'grasp 抓紧', 'capture 捕获'],
    antonyms: ['release 释放', 'let go 放开', 'drop 掉落'],
    examPoints: []
  },
  graceful: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['elegant 优雅的', 'poised 从容的', 'fluid 流畅的', 'refined 优美的'],
    antonyms: ['awkward 笨拙的', 'clumsy 笨拙的', 'graceless 不优雅的'],
    examPoints: []
  },
  greet: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['welcome 欢迎', 'salute 致意', 'address 打招呼', 'acknowledge 致意'],
    antonyms: ['ignore 忽视', 'shun 避开', 'disregard 漠视'],
    examPoints: []
  },
  grief: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sorrow 悲伤', 'mourning 哀悼', 'anguish 痛苦', 'sadness 悲哀'],
    antonyms: ['joy 喜悦', 'happiness 幸福', 'delight 快乐'],
    examPoints: []
  },
  gross: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['total 总的', 'whole 全部的', 'coarse 粗糙的', 'vulgar 粗俗的'],
    antonyms: ['net 净的', 'refined 精致的', 'subtle 微妙的'],
    examPoints: []
  },
  growth: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['increase 增长', 'development 发展', 'expansion 扩张', 'progress 进步'],
    antonyms: ['decline 衰退', 'shrinkage 萎缩', 'stagnation 停滞'],
    examPoints: []
  },
  guide: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['lead 引导', 'direct 指引', 'steer 带领', 'conduct 引导'],
    antonyms: ['follow 跟随', 'misguide 误导', 'mislead 误导'],
    examPoints: []
  },
  golden: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['gold 金色的', 'valuable 珍贵的', 'precious 宝贵的', 'excellent 极好的'],
    antonyms: ['worthless 无价值的', 'inferior 劣等的'],
    examPoints: []
  },
  hang: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['suspend 悬挂', 'dangle 吊', 'droop 下垂', 'pend 悬垂'],
    antonyms: ['release 释放', 'let go 放开', 'stand 直立'],
    examPoints: []
  },
  hardly: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['barely 几乎不', 'scarcely 几乎不', 'rarely 很少', 'just 仅'],
    antonyms: ['easily 容易地', 'frequently 频繁地', 'abundantly 充足地'],
    examPoints: []
  },
  hardship: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['difficulty 困难', 'adversity 逆境', 'suffering 苦难', 'trouble 麻烦'],
    antonyms: ['comfort 舒适', 'ease 安逸', 'prosperity 繁荣'],
    examPoints: []
  },
  hatred: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['loathing 厌恶', 'animosity 仇恨', 'hostility 敌意', 'detestation 憎恨'],
    antonyms: ['love 热爱', 'affection 喜爱', 'fondness 钟爱'],
    examPoints: []
  },
  helpful: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['useful 有用的', 'beneficial 有益的', 'supportive 支持的', 'cooperative 合作的'],
    antonyms: ['unhelpful 无益的', 'harmful 有害的', 'useless 无用的'],
    examPoints: []
  },
  hero: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['champion 英雄', 'savior 救星', 'idol 偶像', 'warrior 勇士'],
    antonyms: ['coward 懦夫', 'villain 恶棍', 'coward 怯懦者'],
    examPoints: []
  },
  heroic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['brave 勇敢的', 'courageous 勇敢的', 'valiant 英勇的', 'gallant 英勇的'],
    antonyms: ['cowardly 怯懦的', 'timid 胆怯的', 'craven 懦弱的'],
    examPoints: []
  },
  highly: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['very 非常', 'extremely 极其', 'greatly 大大地', 'exceedingly 极其'],
    antonyms: ['barely 几乎不', 'slightly 稍微', 'hardly 几乎不'],
    examPoints: []
  },
  historical: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['past 过去的', 'chronological 历史的', 'traditional 传统的', 'documented 有记载的'],
    antonyms: ['modern 现代的', 'contemporary 当代的', 'fictional 虚构的'],
    examPoints: []
  },
  hopeful: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['optimistic 乐观的', 'sanguine 乐观的', 'encouraged 受鼓舞的', 'expectant 期待的'],
    antonyms: ['hopeless 绝望的', 'pessimistic 悲观的', 'despairing 绝望的'],
    examPoints: []
  },
  huge: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['enormous 巨大的', 'immense 极大的', 'gigantic 巨大的', 'vast 辽阔的'],
    antonyms: ['tiny 微小的', 'small 小的', 'minute 微小的'],
    examPoints: []
  },
  identity: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['identification 身份', 'self 自我', 'individuality 个性', 'character 特征'],
    antonyms: ['anonymity 匿名', 'confusion 混淆'],
    examPoints: []
  },
  ignore: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['disregard 漠视', 'overlook 忽略', 'neglect 忽视', 'disregard 不顾'],
    antonyms: ['notice 注意', 'heed 留意', 'acknowledge 理会'],
    examPoints: []
  },
  illegal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unlawful 非法的', 'illicit 违法的', 'unauthorized 未经授权的', 'prohibited 被禁止的'],
    antonyms: ['legal 合法的', 'lawful 合法的', 'permitted 许可的'],
    examPoints: []
  },
  imitation: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['copy 复制品', 'replica 仿制品', 'fake 仿造', 'counterfeit 伪造'],
    antonyms: ['original 原创的', 'genuine 真正的', 'authentic 真实的'],
    examPoints: []
  },
  immediate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['instant 即时的', 'prompt 迅速的', 'direct 直接的', 'swift 立即的'],
    antonyms: ['delayed 延迟的', 'gradual 渐进的', 'remote 遥远的'],
    examPoints: []
  },
  implication: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['consequence 后果', 'suggestion 暗示', 'significance 含义', 'ramification 影响'],
    antonyms: ['explicit statement 明确陈述', 'declaration 宣言', 'assertion 断言'],
    examPoints: []
  },
  importance: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['significance 重要性', 'value 价值', 'weight 分量', 'consequence 重要'],
    antonyms: ['unimportance 不重要', 'triviality 琐碎', 'insignificance 无足轻重'],
    examPoints: []
  },
  impossible: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unfeasible 不可行的', 'unattainable 无法实现的', 'unachievable 不能实现的', 'hopeless 无望的'],
    antonyms: ['possible 可能的', 'feasible 可行的', 'achievable 可实现的'],
    examPoints: []
  },
  improvement: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['enhancement 改善', 'progress 进步', 'advancement 进展', 'betterment 改进'],
    antonyms: ['decline 衰退', 'deterioration 恶化', 'regression 倒退'],
    examPoints: []
  },
  incident: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['event 事件', 'occurrence 发生的事', 'episode 插曲', 'happening 事件'],
    antonyms: ['nothing 无', 'routine 例行'],
    examPoints: []
  },
  ingredient: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['component 成分', 'element 要素', 'part 部分', 'constituent 组成部分'],
    antonyms: ['whole 整体', 'product 成品'],
    examPoints: []
  },
  injury: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['harm 伤害', 'wound 伤口', 'damage 损害', 'trauma 创伤'],
    antonyms: ['health 健康', 'recovery 康复', 'healing 痊愈'],
    examPoints: []
  },
  instant: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['immediate 即刻的', 'moment 瞬间', 'flash 一刹那', 'second 片刻'],
    antonyms: ['eternity 永恒', 'delay 延迟', 'gradual 渐进'],
    examPoints: []
  },
  instruct: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['teach 教授', 'direct 指导', 'guide 引导', 'educate 教育'],
    antonyms: ['mislead 误导', 'confuse 使困惑'],
    examPoints: []
  },
  intelligence: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['intellect 智力', 'understanding 理解力', 'wisdom 智慧', 'reason 理性'],
    antonyms: ['stupidity 愚蠢', 'ignorance 无知', 'foolishness 愚蠢'],
    examPoints: []
  },
  intelligent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['smart 聪明的', 'clever 聪颖的', 'bright 聪明的', 'sharp 机敏的'],
    antonyms: ['stupid 愚蠢的', 'foolish 傻的', 'dull 迟钝的'],
    examPoints: []
  },
  intention: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['aim 意图', 'purpose 目的', 'goal 目标', 'plan 计划'],
    antonyms: ['accident 意外', 'chance 偶然', 'impulse 冲动'],
    examPoints: []
  },
  interest: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['curiosity 兴趣', 'fascination 着迷', 'concern 关心', 'attention 关注'],
    antonyms: ['indifference 冷漠', 'apathy 漠然', 'boredom 无聊'],
    examPoints: []
  },
  interfere: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['meddle 干涉', 'intervene 介入', 'intrude 侵扰', 'obstruct 妨碍'],
    antonyms: ['assist 协助', 'help 帮助', 'cooperate 合作'],
    examPoints: []
  },
  internal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['inner 内部的', 'interior 内部的', 'inside 里面的', 'domestic 国内的'],
    antonyms: ['external 外部的', 'outer 外部的', 'exterior 外部的'],
    examPoints: []
  },
  interpret: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['explain 解释', 'translate 翻译', 'clarify 澄清', 'decipher 解读'],
    antonyms: ['confuse 使困惑', 'obfuscate 搞乱'],
    examPoints: []
  },
  interrupt: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['interfere 打断', 'disturb 打扰', 'disrupt 扰乱', 'hinder 阻碍'],
    antonyms: ['continue 继续', 'allow 允许', 'listen 倾听'],
    examPoints: []
  },
  intrude: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['interfere 干涉', 'invade 侵入', 'trespass 闯入', 'meddle 干预'],
    antonyms: ['avoid 避免', 'respect 尊重', 'withdraw 退出'],
    examPoints: []
  },
  invent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['create 发明', 'originate 创始', 'devise 设计', 'discover 发明'],
    antonyms: ['copy 复制', 'imitate 模仿', 'destroy 毁坏'],
    examPoints: []
  },
  invite: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ask 邀请', 'summon 召唤', 'request 邀请', 'welcome 欢迎'],
    antonyms: ['reject 拒绝', 'exclude 排除', 'ban 禁止'],
    examPoints: []
  },
  irony: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sarcasm 讽刺', 'satire 讽刺', 'mockery 嘲弄', 'paradox 反讽'],
    antonyms: ['sincerity 真诚', 'earnestness 诚挚'],
    examPoints: []
  },
  jealous: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['envious 嫉妒的', 'covetous 垂涎的', 'resentful 怨恨的', 'suspicious 多疑的'],
    antonyms: ['content 知足的', 'trusting 信任的', 'generous 慷慨的'],
    examPoints: []
  },
  joy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['happiness 快乐', 'delight 喜悦', 'pleasure 愉快', 'gladness 欢欣'],
    antonyms: ['sorrow 悲伤', 'sadness 悲哀', 'grief 悲痛'],
    examPoints: []
  },
  judgment: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['decision 判断', 'verdict 裁决', 'opinion 意见', 'assessment 评判'],
    antonyms: ['indecision 优柔寡断', 'doubt 怀疑'],
    examPoints: []
  },
  just: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fair 公正的', 'righteous 正义的', 'equitable 公平的', 'impartial 公正的'],
    antonyms: ['unfair 不公平的', 'unjust 不公正的', 'biased 有偏见的'],
    examPoints: []
  },
  justice: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fairness 公正', 'righteousness 正义', 'equity 公平', 'impartiality 公正'],
    antonyms: ['injustice 不公正', 'unfairness 不公平', 'bias 偏见'],
    examPoints: []
  },
  juvenile: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['young 年少的', 'immature 未成熟的', 'youthful 青年的', 'adolescent 青少年的'],
    antonyms: ['adult 成年的', 'mature 成熟的', 'elderly 年老的'],
    examPoints: []
  },
  king: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['monarch 君主', 'ruler 统治者', 'sovereign 君主', 'emperor 皇帝'],
    antonyms: ['subject 臣民', 'commoner 平民'],
    examPoints: []
  },
  labour: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['work 劳动', 'toil 辛劳', 'effort 努力', 'exertion 劳作'],
    antonyms: ['rest 休息', 'leisure 休闲', 'idleness 闲散'],
    examPoints: []
  },
  last: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['final 最后的', 'ultimate 最终的', 'concluding 最后的', 'previous 上一个的'],
    antonyms: ['first 第一的', 'initial 最初的', 'beginning 开始的'],
    examPoints: []
  },
  laugh: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['chuckle 轻笑', 'giggle 咯咯笑', 'guffaw 哈哈大笑', 'snicker 窃笑'],
    antonyms: ['cry 哭', 'weep 哭泣', 'frown 皱眉'],
    examPoints: []
  },
  leadership: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['guidance 引导', 'direction 指导', 'command 指挥', 'authority 权威'],
    antonyms: ['subordination 从属', 'followership 追随'],
    examPoints: []
  },
  leak: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['drip 滴漏', 'seep 渗漏', 'escape 泄漏', 'disclose 泄露'],
    antonyms: ['seal 密封', 'contain 容纳', 'conceal 隐瞒'],
    examPoints: []
  },
  limited: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['restricted 有限的', 'confined 受限的', 'bounded 有界限的', 'narrow 狭窄的'],
    antonyms: ['unlimited 无限的', 'boundless 无边的', 'infinite 无限的'],
    examPoints: []
  },
  lively: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['energetic 活泼的', 'animated 有生气的', 'spirited 活跃的', 'vivacious 活泼的'],
    antonyms: ['dull 乏味的', 'lifeless 死气沉沉的', 'sluggish 迟缓的'],
    examPoints: []
  },
  long: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'longer', superlative: 'longest' },
    synonyms: ['extended 长的', 'lengthy 漫长的', 'prolonged 长久的', 'drawn-out 拖长的'],
    antonyms: ['short 短的', 'brief 简短的', 'brief 短暂的'],
    examPoints: []
  },
  loss: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['defeat 损失', 'deprivation 丧失', 'forfeiture 失去', 'damage 损失'],
    antonyms: ['gain 获得', 'profit 利润', 'victory 胜利'],
    examPoints: []
  },
  lost: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['missing 丢失的', 'misplaced 遗失的', 'confused 迷茫的', 'astray 迷途的'],
    antonyms: ['found 找到的', 'located 找到的', 'oriented 辨明方向的'],
    examPoints: []
  },
  mad: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['crazy 疯狂的', 'insane 精神失常的', 'angry 愤怒的', 'furious 狂怒的'],
    antonyms: ['sane 理智的', 'calm 平静的', 'rational 理性的'],
    examPoints: []
  },
  meaning: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sense 意义', 'significance 含义', 'definition 定义', 'intent 意图'],
    antonyms: ['meaninglessness 无意义', 'nonsense 胡说'],
    examPoints: []
  },
  mercy: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['compassion 怜悯', 'pity 同情', 'forgiveness 宽恕', 'leniency 宽大'],
    antonyms: ['cruelty 残忍', 'vengeance 复仇', 'harshness 严酷'],
    examPoints: []
  },
  merry: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['cheerful 快乐的', 'jolly 欢乐的', 'joyful 高兴的', 'festive 欢庆的'],
    antonyms: ['sad 悲伤的', 'gloomy 阴郁的', 'somber 忧郁的'],
    examPoints: []
  },
  mess: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['disorder 混乱', 'chaos 杂乱', 'confusion 混乱', 'jumble 杂乱'],
    antonyms: ['order 秩序', 'tidiness 整洁', 'organization 有条理'],
    examPoints: []
  },
  minority: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['smaller part 少数', 'fraction 小部分', 'subset 子集'],
    antonyms: ['majority 多数', 'bulk 大部分'],
    examPoints: []
  },
  misunderstand: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['misinterpret 误解', 'misconstrue 曲解', 'mistake 弄错', 'confuse 误解'],
    antonyms: ['understand 理解', 'comprehend 领会', 'grasp 领悟'],
    examPoints: []
  },
  motivate: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['inspire 激励', 'encourage 鼓励', 'stimulate 激发', 'drive 驱使'],
    antonyms: ['discourage 使气馁', 'deter 阻止', 'depress 使沮丧'],
    examPoints: []
  },
  mystery: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['enigma 谜', 'puzzle 谜团', 'secret 秘密', 'riddle 谜'],
    antonyms: ['solution 答案', 'explanation 解释', 'clarity 清楚'],
    examPoints: []
  },
  noisy: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'noisier', superlative: 'noisiest' },
    synonyms: ['loud 吵闹的', 'boisterous 喧闹的', 'clamorous 喧哗的', 'tumultuous 喧嚣的'],
    antonyms: ['quiet 安静的', 'silent 寂静的', 'peaceful 宁静的'],
    examPoints: []
  },
  nuclear: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['atomic 原子的', 'core 核心的', 'central 中心的'],
    antonyms: ['conventional 常规的', 'traditional 传统的'],
    examPoints: []
  },
  objection: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['protest 抗议', 'opposition 反对', 'disapproval 不赞成', 'complaint 异议'],
    antonyms: ['agreement 同意', 'approval 赞成', 'consent 赞同'],
    examPoints: []
  },
  objective: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['goal 目标', 'aim 目的', 'target 目标', 'purpose 目的'],
    antonyms: ['aimlessness 无目标', 'subjectivity 主观'],
    examPoints: []
  },
  often: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['frequently 频繁地', 'regularly 定期地', 'repeatedly 反复地', 'commonly 通常'],
    antonyms: ['rarely 很少', 'seldom 不常', 'never 从不'],
    examPoints: []
  },
  opponent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['adversary 对手', 'rival 竞争者', 'enemy 敌人', 'competitor 竞争者'],
    antonyms: ['ally 盟友', 'supporter 支持者', 'friend 朋友'],
    examPoints: []
  },
  opposition: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['resistance 反抗', 'objection 反对', 'conflict 冲突', 'hostility 敌对'],
    antonyms: ['support 支持', 'agreement 一致', 'cooperation 合作'],
    examPoints: []
  },
  organic: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['natural 自然的', 'living 有生命的', 'biological 生物的'],
    antonyms: ['synthetic 合成的', 'artificial 人造的', 'inorganic 无机的'],
    examPoints: []
  },
  original: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['first 最初的', 'initial 原始的', 'primary 原本的', 'creative 独创的'],
    antonyms: ['copy 复制品', 'imitation 仿造', 'derived 派生的'],
    examPoints: []
  },
  owe: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['be indebted 欠', 'be bound 应付', 'be obligated 负有义务'],
    antonyms: ['settle 偿清', 'repay 偿还'],
    examPoints: []
  },
  painful: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['aching 疼痛的', 'sore 酸痛的', 'agonizing 痛苦的', 'hurtful 引起疼痛的'],
    antonyms: ['painless 无痛的', 'comfortable 舒适的', 'soothing 抚慰的'],
    examPoints: []
  },
  peaceful: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['calm 平静的', 'tranquil 宁静的', 'serene 安详的', 'quiet 安静的'],
    antonyms: ['violent 暴力的', 'turbulent 动荡的', 'noisy 吵闹的'],
    examPoints: []
  },
  performance: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['execution 执行', 'show 表演', 'achievement 表现', 'accomplishment 成就'],
    antonyms: ['failure 失败', 'neglect 疏忽'],
    examPoints: []
  },
  personal: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['individual 个人的', 'private 私人的', 'own 自己的', 'intimate 亲密的'],
    antonyms: ['public 公共的', 'general 普遍的', 'impersonal 非个人的'],
    examPoints: []
  },
  pleased: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['happy 高兴的', 'satisfied 满意的', 'delighted 高兴的', 'content 满足的'],
    antonyms: ['displeased 不快的', 'dissatisfied 不满的', 'unhappy 不快乐的'],
    examPoints: []
  },
  pleasure: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['delight 快乐', 'enjoyment 享受', 'joy 喜悦', 'satisfaction 满足'],
    antonyms: ['pain 痛苦', 'displeasure 不快', 'sorrow 悲伤'],
    examPoints: []
  },
  plenty: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['abundance 充足', 'profusion 丰富', 'copiousness 大量', 'surplus 过剩'],
    antonyms: ['scarcity 稀缺', 'shortage 短缺', 'lack 缺乏'],
    examPoints: []
  },
  positive: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['optimistic 乐观的', 'constructive 建设性的', 'confident 自信的', 'favorable 有利的'],
    antonyms: ['negative 消极的', 'pessimistic 悲观的', 'unfavorable 不利的'],
    examPoints: []
  },
  possession: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ownership 所有权', 'property 财产', 'holding 占有', 'custody 保管'],
    antonyms: ['loss 丧失', 'deprivation 剥夺'],
    examPoints: []
  },
  powerful: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['strong 强大的', 'mighty 强有力的', 'potent 有力的', 'forceful 强有力的'],
    antonyms: ['weak 弱的', 'feeble 虚弱的', 'powerless 无力的'],
    examPoints: []
  },
  pressure: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['stress 压力', 'tension 紧张', 'force 压力', 'burden 重担'],
    antonyms: ['relief 缓解', 'ease 轻松', 'relaxation 放松'],
    examPoints: []
  },
  priority: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['precedence 优先', 'preference 优先权', 'urgency 紧急', 'primacy 首要'],
    antonyms: ['inferiority 次要', 'subordination 从属'],
    examPoints: []
  },
  probably: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['likely 可能地', 'presumably 大概', 'perhaps 或许', 'in all likelihood 很可能'],
    antonyms: ['impossibly 不可能地', 'unlikely 不太可能地'],
    examPoints: []
  },
  pull: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['drag 拉', 'draw 拖', 'tug 用力拉', 'haul 拖运'],
    antonyms: ['push 推', 'release 释放', 'let go 放开'],
    examPoints: []
  },
  punish: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['penalize 惩罚', 'discipline 惩处', 'chastise 惩戒', 'castigate 严惩'],
    antonyms: ['reward 奖励', 'pardon 原谅', 'forgive 宽恕'],
    examPoints: []
  },
  punishment: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['penalty 惩罚', 'retribution 报应', 'discipline 惩处', 'sanction 制裁'],
    antonyms: ['reward 奖励', 'pardon 原谅', 'forgiveness 宽恕'],
    examPoints: []
  },
  puzzle: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['mystery 谜', 'baffle 困惑', 'confuse 使迷惑', 'perplex 使困惑'],
    antonyms: ['clarify 澄清', 'explain 解释', 'solve 解决'],
    examPoints: []
  },
  qualification: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['credential 资格', 'requirement 要求', 'skill 技能', 'competence 能力'],
    antonyms: ['disqualification 取消资格', 'incompetence 不胜任'],
    examPoints: []
  },
  quick: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fast 快的', 'rapid 迅速的', 'swift 迅速的', 'speedy 快速的'],
    antonyms: ['slow 缓慢的', 'sluggish 迟缓的', 'gradual 渐进的'],
    examPoints: []
  },
  racial: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['ethnic 种族的', 'tribal 部落的', 'national 民族的'],
    antonyms: ['integrated 融合的', 'universal 普遍的'],
    examPoints: []
  },
  reaction: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['response 回应', 'reply 回应', 'feedback 反馈', 'counteraction 反作用'],
    antonyms: ['inaction 无行动', 'indifference 冷漠'],
    examPoints: []
  },
  reality: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['truth 真相', 'fact 事实', 'actuality 实际', 'existence 存在'],
    antonyms: ['fantasy 幻想', 'illusion 幻觉', 'dream 梦想'],
    examPoints: []
  },
  reasonable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['rational 理性的', 'sensible 明智的', 'fair 公平的', 'logical 合理的'],
    antonyms: ['unreasonable 不合理的', 'irrational 不理性的', 'absurd 荒谬的'],
    examPoints: []
  },
  recognition: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['acknowledgment 承认', 'appreciation 认可', 'identification 识别', 'acceptance 接受'],
    antonyms: ['denial 否认', 'rejection 拒绝'],
    examPoints: []
  },
  recovery: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['recuperation 恢复', 'healing 痊愈', 'restoration 恢复', 'improvement 改善'],
    antonyms: ['decline 衰退', 'relapse 复发', 'worsening 恶化'],
    examPoints: []
  },
  reduction: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['decrease 减少', 'decline 下降', 'diminution 减少', 'cutback 削减'],
    antonyms: ['increase 增加', 'growth 增长', 'expansion 扩张'],
    examPoints: []
  },
  relation: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['connection 关系', 'association 关联', 'link 联系', 'tie 纽带'],
    antonyms: ['separation 分离', 'disconnection 断开'],
    examPoints: []
  },
  relationship: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['connection 关系', 'bond 纽带', 'association 关联', 'tie 联系'],
    antonyms: ['estrangement 疏远', 'separation 分离'],
    examPoints: []
  },
  relative: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['comparative 相对的', 'related 相关的', 'proportional 成比例的', 'corresponding 相应的'],
    antonyms: ['absolute 绝对的', 'independent 独立的'],
    examPoints: []
  },
  remarkable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['extraordinary 非凡的', 'notable 显著的', 'outstanding 杰出的', 'exceptional 卓越的'],
    antonyms: ['ordinary 普通的', 'unremarkable 平凡的', 'common 平常的'],
    examPoints: []
  },
  requirement: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['need 需要', 'demand 要求', 'prerequisite 先决条件', 'necessity 必需品'],
    antonyms: ['option 选择', 'luxury 奢侈'],
    examPoints: []
  },
  resistance: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['opposition 反抗', 'defiance 违抗', 'opposition 抵制', 'rebellion 反叛'],
    antonyms: ['submission 顺从', 'cooperation 合作', 'surrender 投降'],
    examPoints: []
  },
  respect: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['esteem 尊重', 'honor 尊敬', 'admire 钦佩', 'regard 敬重'],
    antonyms: ['disrespect 不敬', 'despise 鄙视', 'scorn 蔑视'],
    examPoints: []
  },
  response: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['reply 回应', 'answer 回答', 'reaction 反应', 'rejoinder 回复'],
    antonyms: ['silence 沉默', 'inaction 无行动'],
    examPoints: []
  },
  responsible: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['accountable 负责任的', 'liable 有责任的', 'answerable 应负责任的', 'trustworthy 可靠的'],
    antonyms: ['irresponsible 不负责任的', 'unaccountable 不负责任的'],
    examPoints: []
  },
  return: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['go back 返回', 'come back 回来', 'revert 恢复', 'repay 归还'],
    antonyms: ['depart 离开', 'leave 离开', 'go 离去'],
    examPoints: []
  },
  right: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['correct 正确的', 'accurate 准确的', 'just 公正的', 'proper 适当的'],
    antonyms: ['wrong 错误的', 'incorrect 不正确的', 'unjust 不公正的'],
    examPoints: []
  },
  rush: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['hurry 匆忙', 'dash 冲', 'race 飞奔', 'hasten 赶快'],
    antonyms: ['dawdle 慢吞吞', 'linger 逗留', 'delay 延迟'],
    examPoints: []
  },
  scatter: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['disperse 分散', 'spread 散布', 'strew 撒', 'diffuse 扩散'],
    antonyms: ['gather 聚集', 'collect 收集', 'assemble 集合'],
    examPoints: []
  },
  security: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['safety 安全', 'protection 保护', 'defense 防卫', 'assurance 保障'],
    antonyms: ['danger 危险', 'risk 风险', 'vulnerability 脆弱'],
    examPoints: []
  },
  segment: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['section 部分', 'portion 部分', 'part 部分', 'division 分段'],
    antonyms: ['whole 整体', 'totality 全部', 'entirety 完整'],
    examPoints: []
  },
  seize: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['grab 抓住', 'grasp 抓紧', 'snatch 夺取', 'capture 捕获'],
    antonyms: ['release 释放', 'let go 放开', 'surrender 放弃'],
    examPoints: []
  },
  selection: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['choice 选择', 'option 选项', 'variety 精选', 'pick 挑选'],
    antonyms: ['rejection 拒绝', 'whole 整体'],
    examPoints: []
  },
  serve: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['assist 协助', 'help 帮助', 'attend 侍候', 'aid 援助'],
    antonyms: ['hinder 阻碍', 'obstruct 妨碍', 'harm 伤害'],
    examPoints: []
  },
  settlement: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['agreement 协议', 'resolution 解决', 'colony 定居点', 'payment 结算'],
    antonyms: ['disagreement 分歧', 'dispute 争执'],
    examPoints: []
  },
  shade: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['shadow 阴影', 'darkness 阴暗', 'shelter 遮蔽', 'dimness 昏暗'],
    antonyms: ['light 光亮', 'brightness 明亮', 'sunshine 阳光'],
    examPoints: []
  },
  shallow: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['superficial 肤浅的', 'depthless 浅的', 'simple 简单的', 'slight 轻微的'],
    antonyms: ['deep 深的', 'profound 深刻的'],
    examPoints: []
  },
  shoot: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fire 开火', 'discharge 发射', 'blast 射击', 'launch 发射'],
    antonyms: ['catch 接住', 'receive 接收'],
    examPoints: []
  },
  shout: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['yell 大喊', 'cry 喊叫', 'scream 尖叫', 'bellow 吼叫'],
    antonyms: ['whisper 低语', 'murmur 低语', 'silence 沉默'],
    examPoints: []
  },
  silence: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['quiet 安静', 'stillness 寂静', 'hush 寂静', 'muteness 缄默'],
    antonyms: ['noise 噪音', 'sound 声音', 'clamor 喧闹'],
    examPoints: []
  },
  sing: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['chant 吟唱', 'hum 哼唱', 'carol 欢唱', 'chorus 合唱'],
    antonyms: ['silence 沉默', 'be quiet 安静'],
    examPoints: []
  },
  sit: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['rest 坐下', 'perch 栖息', 'settle 安坐', 'seat 就座'],
    antonyms: ['stand 站立', 'rise 起立', 'walk 行走'],
    examPoints: []
  },
  solution: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['answer 答案', 'resolution 解决', 'remedy 解决办法', 'fix 解决'],
    antonyms: ['problem 问题', 'puzzle 难题'],
    examPoints: []
  },
  soon: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['shortly 很快', 'quickly 迅速地', 'presently 不久', 'before long 不久'],
    antonyms: ['late 迟', 'later 后来', 'eventually 最终'],
    examPoints: []
  },
  sore: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['painful 疼痛的', 'tender 触痛的', 'aching 隐痛的', 'inflamed 发炎的'],
    antonyms: ['comfortable 舒适的', 'painless 无痛的'],
    examPoints: []
  },
  sorrow: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['grief 悲伤', 'sadness 悲哀', 'mourning 哀悼', 'anguish 痛苦'],
    antonyms: ['joy 喜悦', 'happiness 幸福', 'delight 快乐'],
    examPoints: []
  },
  soul: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['spirit 灵魂', 'essence 本质', 'psyche 心灵', 'inner self 内在自我'],
    antonyms: ['body 身体', 'flesh 肉体'],
    examPoints: []
  },
  sour: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['tart 酸的', 'acid 酸的', 'acidic 酸性的', 'bitter 酸苦的'],
    antonyms: ['sweet 甜的', 'ripe 成熟的'],
    examPoints: []
  },
  spare: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['extra 多余的', 'additional 额外的', 'reserve 备用的', 'surplus 剩余的'],
    antonyms: ['necessary 必需的', 'essential 必不可少的'],
    examPoints: []
  },
  spiritual: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sacred 神圣的', 'religious 宗教的', 'holy 神圣的', 'divine 神圣的'],
    antonyms: ['physical 物质的', 'material 物质的', 'worldly 世俗的'],
    examPoints: []
  },
  statement: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['declaration 声明', 'announcement 宣告', 'assertion 断言', 'remark 陈述'],
    antonyms: ['silence 沉默', 'retraction 撤回'],
    examPoints: []
  },
  stay: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['remain 停留', 'wait 等待', 'linger 逗留', 'reside 居住'],
    antonyms: ['leave 离开', 'depart 离去', 'go 走'],
    examPoints: []
  },
  still: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['motionless 静止的', 'quiet 安静的', 'calm 平静的', 'silent 无声的'],
    antonyms: ['moving 移动的', 'active 活跃的', 'noisy 吵闹的'],
    examPoints: []
  },
  straight: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['direct 直接的', 'level 笔直的', 'upright 笔直的', 'linear 直线的'],
    antonyms: ['crooked 弯曲的', 'curved 弯曲的', 'bent 弯的'],
    examPoints: []
  },
  strengthen: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['reinforce 加强', 'fortify 加固', 'toughen 使坚强', 'boost 增强'],
    antonyms: ['weaken 削弱', 'diminish 减少', 'debilitate 使衰弱'],
    examPoints: []
  },
  substantial: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['considerable 大量的', 'significant 重大的', 'sizable 大的', 'ample 充足的'],
    antonyms: ['minor 次要的', 'insignificant 微不足道的', 'trivial 琐碎的'],
    examPoints: []
  },
  substitute: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['replace 替换', 'exchange 交换', 'stand in 代替', 'deputize 代理'],
    antonyms: ['keep 保留', 'original 原物'],
    examPoints: []
  },
  successful: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['thriving 成功的', 'prosperous 繁荣的', 'flourishing 兴旺的', 'victorious 胜利的'],
    antonyms: ['unsuccessful 不成功的', 'failing 失败的', 'defeated 失败的'],
    examPoints: []
  },
  sudden: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['abrupt 突然的', 'unexpected 出乎意料的', 'swift 迅速的', 'instant 瞬间的'],
    antonyms: ['gradual 渐进的', 'expected 预期的', 'slow 缓慢的'],
    examPoints: []
  },
  suddenly: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unexpectedly 意外地', 'abruptly 突然地', 'swiftly 迅速地', 'instantly 立即'],
    antonyms: ['gradually 渐渐地', 'slowly 缓慢地', 'expectedly 如期地'],
    examPoints: []
  },
  suggestion: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['proposal 提议', 'recommendation 建议', 'idea 主意', 'hint 暗示'],
    antonyms: ['demand 要求', 'command 命令'],
    examPoints: []
  },
  suitable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fit 合适的', 'appropriate 适当的', 'proper 恰当的', 'fitting 适合的'],
    antonyms: ['unsuitable 不合适的', 'inappropriate 不适当的', 'unfit 不适宜的'],
    examPoints: []
  },
  super: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['excellent 极好的', 'wonderful 极好的', 'marvelous 奇妙的', 'great 极好的'],
    antonyms: ['poor 差的', 'terrible 糟糕的', 'awful 极坏的'],
    examPoints: []
  },
  supply: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['provide 提供', 'furnish 供应', 'equip 装备', 'stock 供货'],
    antonyms: ['demand 需求', 'deplete 耗尽', 'withhold 扣留'],
    examPoints: []
  },
  tense: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['nervous 紧张的', 'anxious 焦虑的', 'taut 拉紧的', 'strained 紧绷的'],
    antonyms: ['relaxed 放松的', 'calm 平静的', 'loose 松弛的'],
    examPoints: []
  },
  thirsty: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['parched 口渴的', 'dry 干渴的', 'dehydrated 脱水的', 'yearning 渴望的'],
    antonyms: ['satisfied 满足的', 'quenched 解渴的'],
    examPoints: []
  },
  threaten: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['menace 威胁', 'intimidate 恐吓', 'endanger 危及', 'frighten 恐吓'],
    antonyms: ['protect 保护', 'reassure 使安心', 'comfort 安慰'],
    examPoints: []
  },
  thrill: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['excite 使激动', 'electrify 使兴奋', 'stimulate 刺激', 'exhilarate 使振奋'],
    antonyms: ['bore 使厌烦', 'calm 使平静'],
    examPoints: []
  },
  tiny: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['minute 微小的', 'minuscule 极小的', 'microscopic 微观的', 'wee 极小的'],
    antonyms: ['huge 巨大的', 'enormous 庞大的', 'gigantic 巨大的'],
    examPoints: []
  },
  traditional: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['customary 传统的', 'conventional 传统的', 'classic 古典的', 'old-fashioned 老式的'],
    antonyms: ['modern 现代的', 'innovative 创新的', 'novel 新奇的'],
    examPoints: []
  },
  treatment: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['therapy 治疗', 'care 照料', 'handling 处理', 'remedy 治疗'],
    antonyms: ['neglect 忽略', 'harm 伤害'],
    examPoints: []
  },
  tremble: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['shiver 发抖', 'shudder 战栗', 'quake 震颤', 'quiver 颤动'],
    antonyms: ['steady 稳固', 'calm 平静', 'still 静止'],
    examPoints: []
  },
  typical: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['normal 正常的', 'usual 通常的', 'standard 标准的', 'representative 典型的'],
    antonyms: ['atypical 非典型的', 'unusual 不寻常的', 'exceptional 异常的'],
    examPoints: []
  },
  unable: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['incapable 不能的', 'powerless 无能为力的', 'unfit 不能胜任的', 'helpless 无助的'],
    antonyms: ['able 能够的', 'capable 有能力的', 'competent 能胜任的'],
    examPoints: []
  },
  understanding: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['comprehension 理解', 'grasp 领会', 'insight 洞察', 'knowledge 认识'],
    antonyms: ['misunderstanding 误解', 'ignorance 无知', 'confusion 困惑'],
    examPoints: []
  },
  unemployment: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['joblessness 失业', 'idleness 闲散', 'redundancy 裁员', 'layoff 解雇'],
    antonyms: ['employment 就业', 'work 工作', 'occupation 职业'],
    examPoints: []
  },
  unexpected: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['unforeseen 未预见的', 'surprising 意外的', 'sudden 突然的', 'unanticipated 出乎意料的'],
    antonyms: ['expected 预期的', 'anticipated 预料中的', 'planned 计划的'],
    examPoints: []
  },
  unfortunately: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['sadly 不幸地', 'regrettably 遗憾地', 'unluckily 不幸地', 'alas 唉'],
    antonyms: ['fortunately 幸运地', 'luckily 幸运地', 'happily 幸好'],
    examPoints: []
  },
  uniform: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['consistent 一致的', 'unchanging 不变的', 'identical 相同的', 'constant 恒定的'],
    antonyms: ['varied 多样的', 'diverse 不同的', 'uneven 不均匀的'],
    examPoints: []
  },
  union: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['alliance 联盟', 'merger 合并', 'coalition 联合', 'association 联合'],
    antonyms: ['division 分裂', 'separation 分离', 'split 分裂'],
    examPoints: []
  },
  united: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['joined 联合的', 'combined 合并的', 'merged 合并的', 'unified 统一的'],
    antonyms: ['divided 分裂的', 'separated 分离的', 'split 分裂的'],
    examPoints: []
  },
  unlikely: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['improbable 不大可能的', 'doubtful 不太可能的', 'implausible 难以置信的', 'remote 可能性小的'],
    antonyms: ['likely 可能的', 'probable 很可能的', 'certain 确定的'],
    examPoints: []
  },
  upper: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['higher 较高的', 'top 顶部的', 'superior 上面的', 'topmost 最高的'],
    antonyms: ['lower 较低的', 'bottom 底部的', 'inferior 下面的'],
    examPoints: []
  },
  upset: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['distressed 苦恼的', 'disturbed 不安的', 'agitated 烦躁的', 'troubled 烦乱的'],
    antonyms: ['calm 平静的', 'composed 镇定的', 'cheerful 愉快的'],
    examPoints: []
  },
  urban: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['city 城市的', 'metropolitan 大都市的', 'municipal 市政的', 'town 城镇的'],
    antonyms: ['rural 乡村的', 'country 乡下的', 'suburban 郊区的'],
    examPoints: []
  },
  useful: {
    collocations: [],
    derivatives: [],
    wordForms: { comparative: 'more useful', superlative: 'most useful' },
    synonyms: ['helpful 有用的', 'beneficial 有益的', 'practical 实用的', 'valuable 有价值的'],
    antonyms: ['useless 无用的', 'worthless 无价值的', 'unhelpful 无帮助的'],
    examPoints: []
  },
  useless: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['worthless 无用的', 'ineffective 无效的', 'futile 徒劳的', 'pointless 无意义的'],
    antonyms: ['useful 有用的', 'effective 有效的', 'valuable 有价值的'],
    examPoints: []
  },
  usually: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['normally 通常', 'generally 一般地', 'ordinarily 惯常地', 'customarily 习惯地'],
    antonyms: ['rarely 罕见地', 'seldom 很少', 'unusually 异常地'],
    examPoints: []
  },
  vain: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['conceited 自负的', 'arrogant 傲慢的', 'futile 徒劳的', 'narcissistic 自恋的'],
    antonyms: ['humble 谦虚的', 'modest 谦逊的', 'effective 有效的'],
    examPoints: []
  },
  variation: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['change 变化', 'difference 差异', 'fluctuation 波动', 'alteration 改变'],
    antonyms: ['uniformity 一致', 'constancy 恒定', 'sameness 相同'],
    examPoints: []
  },
  very: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['extremely 非常', 'exceedingly 极其', 'exceptionally 格外', 'immensely 极大地'],
    antonyms: ['slightly 稍微', 'barely 几乎不', 'somewhat 有点'],
    examPoints: []
  },
  violence: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['force 暴力', 'brutality 残暴', 'fierceness 凶猛', 'aggression 侵略'],
    antonyms: ['peace 和平', 'calm 平静', 'gentleness 温和'],
    examPoints: []
  },
  violent: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['fierce 凶猛的', 'brutal 残暴的', 'savage 野蛮的', 'forceful 暴力的'],
    antonyms: ['gentle 温和的', 'peaceful 和平的', 'calm 平静的'],
    examPoints: []
  },
  virtual: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['almost 几乎的', 'effectively 实际的', 'simulated 模拟的', 'practical 实质上的'],
    antonyms: ['actual 实际的', 'real 真实的', 'physical 物理的'],
    examPoints: []
  },
  wake: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['awaken 醒来', 'rouse 唤醒', 'arouse 唤起', 'stir 唤醒'],
    antonyms: ['sleep 睡觉', 'slumber 安睡', 'doze 打盹'],
    examPoints: []
  },
  warning: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['caution 警告', 'alert 警报', 'notice 通知', 'omen 预兆'],
    antonyms: ['reassurance 安慰', 'encouragement 鼓励'],
    examPoints: []
  },
  wash: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['clean 清洗', 'scrub 擦洗', 'launder 洗涤', 'rinse 冲洗'],
    antonyms: ['dirty 弄脏', 'soil 弄污'],
    examPoints: []
  },
  wet: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['damp 潮湿的', 'moist 湿润的', 'soaked 湿透的', 'humid 湿的'],
    antonyms: ['dry 干的', 'arid 干旱的', 'parched 干透的'],
    examPoints: []
  },
  widely: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['broadly 广泛地', 'extensively 广泛地', 'far and wide 四处', 'widely 普遍地'],
    antonyms: ['narrowly 狭隘地', 'rarely 罕见地'],
    examPoints: []
  },
  wonderful: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['marvelous 奇妙的', 'fantastic 极好的', 'superb 极好的', 'splendid 极好的'],
    antonyms: ['terrible 糟糕的', 'awful 极坏的', 'ordinary 平凡的'],
    examPoints: []
  },
  worried: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['anxious 焦虑的', 'concerned 担忧的', 'troubled 不安的', 'uneasy 焦虑的'],
    antonyms: ['calm 平静的', 'relaxed 放松的', 'unconcerned 不担忧的'],
    examPoints: []
  },
  wrong: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['incorrect 错误的', 'false 错误的', 'mistaken 错的', 'untrue 不真实的'],
    antonyms: ['right 正确的', 'correct 正确的', 'true 真实的'],
    examPoints: []
  },
  yell: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['shout 喊叫', 'scream 尖叫', 'cry 喊叫', 'bellow 吼叫'],
    antonyms: ['whisper 低语', 'murmur 低语', 'silence 沉默'],
    examPoints: []
  },
  youth: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['young people 青年', 'adolescence 青春期', 'early years 早年', 'vitality 活力'],
    antonyms: ['old age 老年', 'adulthood 成年', 'maturity 成熟'],
    examPoints: []
  },
  zero: {
    collocations: [],
    derivatives: [],
    wordForms: {},
    synonyms: ['nil 零', 'nothing 无', 'none 没有', 'naught 零'],
    antonyms: ['infinity 无穷', 'all 全部', 'everything 一切'],
    examPoints: []
  },

};

// 常见词根中文释义表（用于算法生成派生词时补充中文）
const baseWordMeanings = {
  act: '行动', adapt: '适应', adjust: '调整', admit: '承认', adopt: '采纳',
  advance: '前进', affect: '影响', agree: '同意', allow: '允许', amaze: '惊讶',
  analyze: '分析', announce: '宣布', apply: '申请', approach: '接近', argue: '争论',
  arrange: '安排', assess: '评估', assign: '分配', assist: '协助', assume: '假设',
  attach: '附上', attempt: '尝试', attract: '吸引', avoid: '避免', aware: '意识到的',
  balance: '平衡', behave: '表现', believe: '相信', belong: '属于', benefit: '受益',
  calculate: '计算', cancel: '取消', capture: '捕获', celebrate: '庆祝', challenge: '挑战',
  change: '改变', charge: '收费', choose: '选择', circulate: '循环', classify: '分类',
  collect: '收集', combine: '结合', comfort: '安慰', command: '命令', communicate: '交流',
  compare: '比较', compete: '竞争', complain: '抱怨', complete: '完成', compose: '组成',
  concern: '关心', conclude: '得出结论', conduct: '进行', confess: '坦白', confirm: '确认',
  confront: '面对', connect: '连接', consider: '考虑', consist: '组成', construct: '建造',
  consume: '消耗', contain: '包含', contest: '竞争', continue: '继续', contribute: '贡献',
  control: '控制', converse: '交谈', convince: '说服', correct: '纠正', create: '创造',
  cultivate: '培养', decide: '决定', declare: '宣布', decline: '下降', decorate: '装饰',
  decrease: '减少', defend: '保卫', define: '定义', delay: '延迟', deliver: '递送',
  demand: '要求', demonstrate: '证明', depend: '依赖', describe: '描述', deserve: '应得',
  design: '设计', desire: '渴望', destroy: '破坏', determine: '决定', develop: '发展',
  devote: '奉献', differ: '不同', direct: '指导', disappear: '消失', disappoint: '使失望',
  discover: '发现', discuss: '讨论', display: '展示', distinguish: '区分', distribute: '分配',
  disturb: '打扰', divide: '划分', dominate: '支配', doubt: '怀疑', earn: '赚取',
  educate: '教育', effect: '效果', elect: '选举', emerge: '出现', employ: '雇用',
  encourage: '鼓励', endure: '忍受', engage: '参与', enjoy: '享受', ensure: '确保',
  enter: '进入', entertain: '娱乐', equip: '装备', establish: '建立', estimate: '估计',
  evaluate: '评估', examine: '检查', exceed: '超过', exchange: '交换', exist: '存在',
  expand: '扩展', expect: '期待', experience: '经历', experiment: '实验', explain: '解释',
  explore: '探索', expose: '暴露', express: '表达', extend: '延伸', fail: '失败',
  fancy: '想象', fascinate: '迷住', favor: '偏爱', fear: '害怕', figure: '计算',
  finance: '资助', finish: '完成', fix: '修理', fluctuate: '波动', focus: '集中',
  follow: '跟随', forbid: '禁止', forecast: '预测', forgive: '原谅', form: '形成',
  found: '建立', free: '释放', freeze: '冻结', frighten: '惊吓', function: '运作',
  gain: '获得', gather: '聚集', generate: '产生', govern: '统治', graduate: '毕业',
  grasp: '掌握', grow: '增长', guarantee: '保证', guess: '猜测', guide: '引导',
  handle: '处理', happen: '发生', harm: '伤害', hate: '讨厌', heal: '治愈',
  hesitate: '犹豫', hide: '隐藏', highlight: '强调', hire: '雇佣', hope: '希望',
  hunt: '搜寻', identify: '识别', ignore: '忽视', imagine: '想象', imitate: '模仿',
  impact: '影响', imply: '暗示', import: '进口', impose: '强加', improve: '改善',
  include: '包含', increase: '增加', indicate: '指示', influence: '影响', inform: '通知',
  inherit: '继承', injure: '伤害', insist: '坚持', inspire: '激励', instruct: '指导',
  intend: '打算', interest: '兴趣', interpret: '解释', interrupt: '打断', interview: '面试',
  introduce: '介绍', invade: '入侵', invent: '发明', invest: '投资', invite: '邀请',
  involve: '涉及', isolate: '隔离', join: '加入', judge: '判断', justify: '证明正当',
  keep: '保持', kill: '杀死', know: '知道', lack: '缺乏', last: '持续',
  launch: '发射', lead: '引导', learn: '学习', lend: '借出', limit: '限制',
  link: '连接', listen: '听', live: '生活', locate: '定位', long: '渴望',
  look: '看', lose: '失去', maintain: '维持', manage: '管理', manufacture: '制造',
  mark: '标记', marry: '结婚', master: '掌握', matter: '要紧', mean: '意味着',
  measure: '测量', meet: '遇见', mention: '提及', mind: '介意', miss: '错过',
  misunderstand: '误解', mix: '混合', modify: '修改', monitor: '监控', move: '移动',
  multiply: '相乘', name: '命名', need: '需要', neglect: '忽视', negotiate: '谈判',
  note: '注意', notice: '注意', observe: '观察', obtain: '获得', occupy: '占据',
  occur: '发生', offer: '提供', open: '打开', operate: '操作', oppose: '反对',
  organize: '组织', originate: '起源', overcome: '克服', owe: '欠', own: '拥有',
  pack: '打包', participate: '参与', pass: '通过', perform: '执行', permit: '允许',
  persist: '坚持', persuade: '说服', pick: '挑选', plan: '计划', please: '取悦',
  possess: '拥有', postpone: '推迟', practice: '练习', predict: '预测', prefer: '偏爱',
  prepare: '准备', present: '呈现', preserve: '保存', pretend: '假装', prevent: '阻止',
  produce: '生产', progress: '进步', prohibit: '禁止', promise: '承诺', promote: '促进',
  propose: '提议', protect: '保护', prove: '证明', provide: '提供', publish: '出版',
  punish: '惩罚', purchase: '购买', pursue: '追求', puzzle: '使困惑', qualify: '使合格',
  question: '质疑', quit: '放弃', quote: '引用', race: '比赛', raise: '提高',
  range: '范围', reach: '到达', react: '反应', read: '阅读', realize: '意识到',
  reason: '推理', recall: '回忆', receive: '收到', recognize: '认出', recommend: '推荐',
  record: '记录', recover: '恢复', recycle: '回收', reduce: '减少', reflect: '反思',
  reform: '改革', refuse: '拒绝', regard: '看待', regret: '后悔', regulate: '管理',
  reject: '拒绝', relate: '联系', relax: '放松', release: '释放', rely: '依赖',
  remain: '保持', remember: '记得', remind: '提醒', remove: '移除', renew: '更新',
  repair: '修理', repeat: '重复', replace: '替换', reply: '回复', report: '报告',
  represent: '代表', require: '需要', research: '研究', resist: '抵抗', resolve: '解决',
  respond: '回应', rest: '休息', restore: '恢复', restrict: '限制', result: '导致',
  retire: '退休', return: '返回', reveal: '揭示', review: '回顾', revolution: '革命',
  reward: '奖励', rid: '摆脱', ride: '骑', rise: '上升', risk: '冒险',
  rob: '抢劫', ruin: '毁坏', rule: '统治', run: '跑', sacrifice: '牺牲',
  satisfy: '满足', save: '节省', say: '说', scan: '扫描', scare: '惊吓',
  schedule: '安排', search: '搜索', secure: '保护', see: '看见', seek: '寻找',
  select: '选择', sell: '卖', send: '发送', separate: '分离', serve: '服务',
  settle: '解决', share: '分享', shock: '震惊', shoot: '射击', show: '展示',
  shrink: '缩小', signal: '发信号', sign: '签署', simplify: '简化', sit: '坐',
  sleep: '睡觉', slow: '减慢', solve: '解决', sort: '分类', sound: '听起来',
  source: '来源', speak: '说', specify: '指定', spend: '花费', spread: '传播',
  stand: '站立', start: '开始', stay: '停留', steal: '偷', steer: '引导',
  stimulate: '刺激', stop: '停止', store: '储存', strengthen: '加强', stress: '强调',
  strike: '打击', struggle: '挣扎', study: '研究', submit: '提交', succeed: '成功',
  suffer: '遭受', suggest: '建议', suit: '适合', supply: '供应', support: '支持',
  suppose: '假设', surround: '包围', survey: '调查', survive: '幸存', suspect: '怀疑',
  sustain: '维持', swallow: '吞咽', swap: '交换', talk: '谈话', taste: '品尝',
  teach: '教', tend: '倾向', test: '测试', thank: '感谢', think: '思考',
  threaten: '威胁', throw: '扔', train: '训练', transform: '转变', translate: '翻译',
  transport: '运输', travel: '旅行', treat: '对待', trust: '信任', try: '尝试',
  turn: '转动', understand: '理解', undertake: '承担', unite: '联合', update: '更新',
  use: '使用', utilize: '利用', vary: '变化', view: '观看', visit: '访问',
  vote: '投票', wait: '等待', wake: '醒来', walk: '走', wander: '漫步',
  want: '想要', warm: '温暖', warn: '警告', waste: '浪费', watch: '观看',
  weaken: '减弱', wear: '穿戴', weigh: '称重', welcome: '欢迎', win: '获胜',
  wish: '希望', withdraw: '撤回', wonder: '想知道', work: '工作', worry: '担心',
  wrap: '包裹', write: '写', wrong: '冤枉',
};

// 算法生成派生词（仅从已知后缀还原词根，不盲目添加后缀造词）
function generateDerivatives(word) {
  if (!word || word.length < 3) return [];
  const w = word.toLowerCase();

  // 仅当单词本身已有后缀时，还原出词根形式
  // 且词根必须在 baseWordMeanings 中有记录（确保是真实单词+有中文释义）
  const suffixRules = [
    { suffix: 'tion', type: 'v.' },   // education → educate
    { suffix: 'sion', type: 'v.' },   // decision → decide
    { suffix: 'ment', type: 'v.' },   // development → develop
    { suffix: 'ness', type: 'adj.' }, // happiness → happy
    { suffix: 'ity', type: 'adj.' },  // ability → able
    { suffix: 'able', type: 'v.' },   // enjoyable → enjoy
    { suffix: 'ible', type: 'v.' },   // visible → vis(e) (rare, skip)
    { suffix: 'ful', type: 'n.' },    // careful → care
    { suffix: 'less', type: 'n.' },   // fearless → fear
    { suffix: 'ous', type: 'n.' },    // dangerous → danger
    { suffix: 'ive', type: 'v.' },    // creative → create
    { suffix: 'al', type: 'n.' },     // cultural → culture
    { suffix: 'ly', type: 'adj.' },   // quickly → quick
    { suffix: 'er', type: 'v.' },     // teacher → teach
    { suffix: 'or', type: 'v.' },     // actor → act
    { suffix: 'ist', type: 'n.' },    // artist → art
  ];

  const results = [];
  for (const rule of suffixRules) {
    if (w.endsWith(rule.suffix)) {
      let base = w.slice(0, -rule.suffix.length);
      // 处理特殊拼写变化
      if (rule.suffix === 'tion' && base.endsWith('a')) base = base.slice(0, -1) + 'e'; // educa → educate
      if (rule.suffix === 'sion' && base.endsWith('de')) base = base; // decide → decid (keep)
      if (rule.suffix === 'ity' && base.endsWith('abil')) base = base.slice(0, -1); // abil → able
      if (rule.suffix === 'ness' && base.endsWith('i')) base = base.slice(0, -1) + 'y'; // happi → happy
      if (base.length < 2) continue;

      // 必须在词库中找到中文释义，否则跳过（避免生成不存在的词）
      const baseM = baseWordMeanings[base];
      if (!baseM) continue;

      results.push(`${base} ${rule.type} ${baseM}`);
    }
  }
  return results.slice(0, 4);
}

// 获取单词的增强数据（合并手动数据和算法生成）
export function getWordEnrichment(term) {
  if (!term) return null;
  const key = term.toLowerCase().trim();
  const data = wordEnrichmentData[key];
  if (data) {
    return {
      collocations: data.collocations || [],
      derivatives: data.derivatives || [],
      wordForms: data.wordForms || {},
      synonyms: data.synonyms || [],
      antonyms: data.antonyms || [],
      examPoints: data.examPoints || [],
    };
  }
  // 算法回退：仅当能还原出词根时才返回派生词
  const autoDerivatives = generateDerivatives(term);
  if (autoDerivatives.length === 0) return null;
  return {
    collocations: [],
    derivatives: autoDerivatives,
    wordForms: {},
    synonyms: [],
    antonyms: [],
    examPoints: [],
  };
}

export default wordEnrichmentData;
