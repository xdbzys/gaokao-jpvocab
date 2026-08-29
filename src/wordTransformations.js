/* ============================
   单词变形扩展数据
   包含：形容词变副词规则、比较级/最高级规则、过去式规则、不规则动词表
   ============================ */

// 形容词变副词规则
export const adjToAdverbRules = [
  {
    rule: '一般情况：直接加 -ly',
    examples: [
      { adj: 'quick', adverb: 'quickly', meaning: '快地' },
      { adj: 'clear', adverb: 'clearly', meaning: '清楚地' },
      { adj: 'bad', adverb: 'badly', meaning: '坏地' },
      { adj: 'bright', adverb: 'brightly', meaning: '明亮地' },
      { adj: 'happy', adverb: 'happily', meaning: '快乐地' },
    ]
  },
  {
    rule: '以 -e 结尾：直接加 -ly',
    examples: [
      { adj: 'safe', adverb: 'safely', meaning: '安全地' },
      { adj: 'wide', adverb: 'widely', meaning: '广泛地' },
      { adj: 'brave', adverb: 'bravely', meaning: '勇敢地' },
      { adj: 'gentle', adverb: 'gently', meaning: '温柔地' },
      { adj: 'simple', adverb: 'simply', meaning: '简单地' },
    ]
  },
  {
    rule: '以 -y 结尾：变 y 为 i 再加 -ly',
    examples: [
      { adj: 'easy', adverb: 'easily', meaning: '容易地' },
      { adj: 'busy', adverb: 'busily', meaning: '忙碌地' },
      { adj: 'heavy', adverb: 'heavily', meaning: '沉重地' },
      { adj: 'angry', adverb: 'angrily', meaning: '愤怒地' },
      { adj: 'noisy', adverb: 'noisily', meaning: '吵闹地' },
    ]
  },
  {
    rule: '以 -le 结尾：去 e 加 -y',
    examples: [
      { adj: 'gentle', adverb: 'gently', meaning: '温柔地' },
      { adj: 'simple', adverb: 'simply', meaning: '简单地' },
      { adj: 'possible', adverb: 'possibly', meaning: '可能地' },
      { adj: 'terrible', adverb: 'terribly', meaning: '可怕地' },
      { adj: 'comfortable', adverb: 'comfortably', meaning: '舒适地' },
    ]
  },
  {
    rule: '以 -ll 结尾：直接加 -y',
    examples: [
      { adj: 'full', adverb: 'fully', meaning: '充分地' },
      { adj: 'dull', adverb: 'dully', meaning: '沉闷地' },
      { adj: 'shrill', adverb: 'shrilly', meaning: '尖锐地' },
    ]
  },
  {
    rule: '以 -ic 结尾：加 -ally',
    examples: [
      { adj: 'basic', adverb: 'basically', meaning: '基本上' },
      { adj: 'scientific', adverb: 'scientifically', meaning: '科学地' },
      { adj: 'fantastic', adverb: 'fantastically', meaning: '极好地' },
      { adj: 'automatic', adverb: 'automatically', meaning: '自动地' },
      { adj: 'tragic', adverb: 'tragically', meaning: '悲剧地' },
    ]
  },
  {
    rule: '特殊变化（不规则）',
    examples: [
      { adj: 'true', adverb: 'truly', meaning: '真正地' },
      { adj: 'due', adverb: 'duly', meaning: '适时地' },
      { adj: 'whole', adverb: 'wholly', meaning: '完全地' },
      { adj: 'full', adverb: 'fully', meaning: '充分地' },
      { adj: 'public', adverb: 'publicly', meaning: '公开地' },
    ]
  },
  {
    rule: '形容词与副词同形',
    examples: [
      { adj: 'hard', adverb: 'hard', meaning: '努力地/硬的' },
      { adj: 'fast', adverb: 'fast', meaning: '快地/快的' },
      { adj: 'early', adverb: 'early', meaning: '早地/早的' },
      { adj: 'high', adverb: 'high', meaning: '高地/高的' },
      { adj: 'late', adverb: 'late', meaning: '晚地/晚的' },
      { adj: 'long', adverb: 'long', meaning: '长久地/长的' },
      { adj: 'far', adverb: 'far', meaning: '远地/远的' },
      { adj: 'near', adverb: 'near', meaning: '近地/近的' },
    ]
  },
  {
    rule: '有两副词形式，含义不同',
    examples: [
      { adj: 'hard', adverb: 'hard (努力地) / hardly (几乎不)', meaning: '' },
      { adj: 'late', adverb: 'late (晚) / lately (最近)', meaning: '' },
      { adj: 'high', adverb: 'high (高) / highly (高度地)', meaning: '' },
      { adj: 'near', adverb: 'near (近) / nearly (几乎)', meaning: '' },
      { adj: 'deep', adverb: 'deep (深) / deeply (深深地)', meaning: '' },
      { adj: 'close', adverb: 'close (近) / closely (密切地)', meaning: '' },
    ]
  },
];

// 比较级和最高级规则
export const comparativeRules = [
  {
    rule: '单音节词：加 -er / -est',
    examples: [
      { word: 'tall', comparative: 'taller', superlative: 'tallest', meaning: '高的' },
      { word: 'old', comparative: 'older', superlative: 'oldest', meaning: '老的' },
      { word: 'fast', comparative: 'faster', superlative: 'fastest', meaning: '快的' },
      { word: 'great', comparative: 'greater', superlative: 'greatest', meaning: '伟大的' },
      { word: 'rich', comparative: 'richer', superlative: 'richest', meaning: '富的' },
    ]
  },
  {
    rule: '以 -e 结尾：加 -r / -st',
    examples: [
      { word: 'large', comparative: 'larger', superlative: 'largest', meaning: '大的' },
      { word: 'late', comparative: 'later', superlative: 'latest', meaning: '晚的' },
      { word: 'nice', comparative: 'nicer', superlative: 'nicest', meaning: '好的' },
      { word: 'wide', comparative: 'wider', superlative: 'widest', meaning: '宽的' },
      { word: 'fine', comparative: 'finer', superlative: 'finest', meaning: '好的' },
    ]
  },
  {
    rule: '以"辅音+元音+辅音"结尾：双写末尾辅音，加 -er / -est',
    examples: [
      { word: 'big', comparative: 'bigger', superlative: 'biggest', meaning: '大的' },
      { word: 'hot', comparative: 'hotter', superlative: 'hottest', meaning: '热的' },
      { word: 'thin', comparative: 'thinner', superlative: 'thinnest', meaning: '薄的' },
      { word: 'fat', comparative: 'fatter', superlative: 'fattest', meaning: '胖的' },
      { word: 'wet', comparative: 'wetter', superlative: 'wettest', meaning: '湿的' },
    ]
  },
  {
    rule: '以"辅音+y"结尾：变 y 为 i，加 -er / -est',
    examples: [
      { word: 'happy', comparative: 'happier', superlative: 'happiest', meaning: '快乐的' },
      { word: 'heavy', comparative: 'heavier', superlative: 'heaviest', meaning: '重的' },
      { word: 'early', comparative: 'earlier', superlative: 'earliest', meaning: '早的' },
      { word: 'busy', comparative: 'busier', superlative: 'busiest', meaning: '忙的' },
      { word: 'easy', comparative: 'easier', superlative: 'easiest', meaning: '容易的' },
    ]
  },
  {
    rule: '多音节词和部分双音节词：加 more / most',
    examples: [
      { word: 'beautiful', comparative: 'more beautiful', superlative: 'most beautiful', meaning: '美丽的' },
      { word: 'important', comparative: 'more important', superlative: 'most important', meaning: '重要的' },
      { word: 'expensive', comparative: 'more expensive', superlative: 'most expensive', meaning: '贵的' },
      { word: 'carefully', comparative: 'more carefully', superlative: 'most carefully', meaning: '小心地' },
      { word: 'quickly', comparative: 'more quickly', superlative: 'most quickly', meaning: '快地' },
    ]
  },
  {
    rule: '以 -ly 结尾的副词：加 more / most',
    examples: [
      { word: 'easily', comparative: 'more easily', superlative: 'most easily', meaning: '容易地' },
      { word: 'slowly', comparative: 'more slowly', superlative: 'most slowly', meaning: '慢地' },
      { word: 'clearly', comparative: 'more clearly', superlative: 'most clearly', meaning: '清楚地' },
    ]
  },
  {
    rule: '不规则变化',
    examples: [
      { word: 'good / well', comparative: 'better', superlative: 'best', meaning: '好' },
      { word: 'bad / badly', comparative: 'worse', superlative: 'worst', meaning: '坏' },
      { word: 'many / much', comparative: 'more', superlative: 'most', meaning: '多' },
      { word: 'little', comparative: 'less', superlative: 'least', meaning: '少' },
      { word: 'far', comparative: 'farther / further', superlative: 'farthest / furthest', meaning: '远' },
      { word: 'old', comparative: 'older / elder', superlative: 'oldest / eldest', meaning: '老' },
    ]
  },
];

// 动词变过去式和过去分词规则
export const pastTenseRules = [
  {
    rule: '一般情况：加 -ed',
    examples: [
      { verb: 'work', pastTense: 'worked', pastParticiple: 'worked', meaning: '工作' },
      { verb: 'play', pastTense: 'played', pastParticiple: 'played', meaning: '玩' },
      { verb: 'watch', pastTense: 'watched', pastParticiple: 'watched', meaning: '观看' },
      { verb: 'talk', pastTense: 'talked', pastParticiple: 'talked', meaning: '谈论' },
      { verb: 'help', pastTense: 'helped', pastParticiple: 'helped', meaning: '帮助' },
    ]
  },
  {
    rule: '以 -e 结尾：加 -d',
    examples: [
      { verb: 'hope', pastTense: 'hoped', pastParticiple: 'hoped', meaning: '希望' },
      { verb: 'live', pastTense: 'lived', pastParticiple: 'lived', meaning: '居住' },
      { verb: 'use', pastTense: 'used', pastParticiple: 'used', meaning: '使用' },
      { verb: 'arrive', pastTense: 'arrived', pastParticiple: 'arrived', meaning: '到达' },
      { verb: 'decide', pastTense: 'decided', pastParticiple: 'decided', meaning: '决定' },
    ]
  },
  {
    rule: '以"辅音+y"结尾：变 y 为 i 加 -ed',
    examples: [
      { verb: 'study', pastTense: 'studied', pastParticiple: 'studied', meaning: '学习' },
      { verb: 'carry', pastTense: 'carried', pastParticiple: 'carried', meaning: '携带' },
      { verb: 'worry', pastTense: 'worried', pastParticiple: 'worried', meaning: '担心' },
      { verb: 'hurry', pastTense: 'hurried', pastParticiple: 'hurried', meaning: '匆忙' },
      { verb: 'cry', pastTense: 'cried', pastParticiple: 'cried', meaning: '哭' },
    ]
  },
  {
    rule: '重读闭音节结尾（辅+元+辅）：双写末尾辅音加 -ed',
    examples: [
      { verb: 'stop', pastTense: 'stopped', pastParticiple: 'stopped', meaning: '停止' },
      { verb: 'plan', pastTense: 'planned', pastParticiple: 'planned', meaning: '计划' },
      { verb: 'prefer', pastTense: 'preferred', pastParticiple: 'preferred', meaning: '偏爱' },
      { verb: 'drop', pastTense: 'dropped', pastParticiple: 'dropped', meaning: '掉落' },
      { verb: 'nod', pastTense: 'nodded', pastParticiple: 'nodded', meaning: '点头' },
    ]
  },
  {
    rule: '以 -l 结尾的动词（英式英语双写 l）',
    examples: [
      { verb: 'travel', pastTense: 'travelled (英) / traveled (美)', pastParticiple: 'travelled (英) / traveled (美)', meaning: '旅行' },
      { verb: 'cancel', pastTense: 'cancelled (英) / canceled (美)', pastParticiple: 'cancelled (英) / canceled (美)', meaning: '取消' },
    ]
  },
];

// 不规则动词变化表（按变化模式分类）
export const irregularVerbs = {
  'AAA型（三式同形）': [
    { verb: 'cost', pastTense: 'cost', pastParticiple: 'cost', meaning: '花费' },
    { verb: 'cut', pastTense: 'cut', pastParticiple: 'cut', meaning: '切，割' },
    { verb: 'hit', pastTense: 'hit', pastParticiple: 'hit', meaning: '打，击' },
    { verb: 'hurt', pastTense: 'hurt', pastParticiple: 'hurt', meaning: '伤害' },
    { verb: 'let', pastTense: 'let', pastParticiple: 'let', meaning: '让' },
    { verb: 'put', pastTense: 'put', pastParticiple: 'put', meaning: '放' },
    { verb: 'read', pastTense: 'read', pastParticiple: 'read', meaning: '读（发音变化）' },
    { verb: 'set', pastTense: 'set', pastParticiple: 'set', meaning: '设置' },
    { verb: 'shut', pastTense: 'shut', pastParticiple: 'shut', meaning: '关' },
    { verb: 'spread', pastTense: 'spread', pastParticiple: 'spread', meaning: '传播' },
    { verb: 'beat', pastTense: 'beat', pastParticiple: 'beat', meaning: '打败' },
    { verb: 'broadcast', pastTense: 'broadcast', pastParticiple: 'broadcast', meaning: '广播' },
  ],
  'ABA型（过去式与原形不同，过去分词同原形）': [
    { verb: 'become', pastTense: 'became', pastParticiple: 'become', meaning: '成为' },
    { verb: 'come', pastTense: 'came', pastParticiple: 'come', meaning: '来' },
    { verb: 'run', pastTense: 'ran', pastParticiple: 'run', meaning: '跑' },
  ],
  'ABB型（过去式与过去分词同形）': [
    { verb: 'bring', pastTense: 'brought', pastParticiple: 'brought', meaning: '带来' },
    { verb: 'build', pastTense: 'built', pastParticiple: 'built', meaning: '建造' },
    { verb: 'buy', pastTense: 'bought', pastParticiple: 'bought', meaning: '买' },
    { verb: 'catch', pastTense: 'caught', pastParticiple: 'caught', meaning: '抓住' },
    { verb: 'dig', pastTense: 'dug', pastParticiple: 'dug', meaning: '挖' },
    { verb: 'dream', pastTense: 'dreamt/dreamed', pastParticiple: 'dreamt/dreamed', meaning: '做梦' },
    { verb: 'fight', pastTense: 'fought', pastParticiple: 'fought', meaning: '战斗' },
    { verb: 'find', pastTense: 'found', pastParticiple: 'found', meaning: '找到' },
    { verb: 'get', pastTense: 'got', pastParticiple: 'got/gotten', meaning: '得到' },
    { verb: 'hang', pastTense: 'hung/hanged', pastParticiple: 'hung/hanged', meaning: '挂/吊死' },
    { verb: 'have', pastTense: 'had', pastParticiple: 'had', meaning: '有' },
    { verb: 'hear', pastTense: 'heard', pastParticiple: 'heard', meaning: '听见' },
    { verb: 'hold', pastTense: 'held', pastParticiple: 'held', meaning: '握住' },
    { verb: 'keep', pastTense: 'kept', pastParticiple: 'kept', meaning: '保持' },
    { verb: 'lay', pastTense: 'laid', pastParticiple: 'laid', meaning: '放置' },
    { verb: 'learn', pastTense: 'learnt/learned', pastParticiple: 'learnt/learned', meaning: '学习' },
    { verb: 'leave', pastTense: 'left', pastParticiple: 'left', meaning: '离开' },
    { verb: 'lend', pastTense: 'lent', pastParticiple: 'lent', meaning: '借出' },
    { verb: 'lose', pastTense: 'lost', pastParticiple: 'lost', meaning: '丢失' },
    { verb: 'make', pastTense: 'made', pastParticiple: 'made', meaning: '制作' },
    { verb: 'mean', pastTense: 'meant', pastParticiple: 'meant', meaning: '意思' },
    { verb: 'meet', pastTense: 'met', pastParticiple: 'met', meaning: '遇见' },
    { verb: 'pay', pastTense: 'paid', pastParticiple: 'paid', meaning: '支付' },
    { verb: 'say', pastTense: 'said', pastParticiple: 'said', meaning: '说' },
    { verb: 'send', pastTense: 'sent', pastParticiple: 'sent', meaning: '发送' },
    { verb: 'sell', pastTense: 'sold', pastParticiple: 'sold', meaning: '卖' },
    { verb: 'shoot', pastTense: 'shot', pastParticiple: 'shot', meaning: '射击' },
    { verb: 'sit', pastTense: 'sat', pastParticiple: 'sat', meaning: '坐' },
    { verb: 'sleep', pastTense: 'slept', pastParticiple: 'slept', meaning: '睡觉' },
    { verb: 'smell', pastTense: 'smelt/smelled', pastParticiple: 'smelt/smelled', meaning: '闻' },
    { verb: 'spend', pastTense: 'spent', pastParticiple: 'spent', meaning: '花费' },
    { verb: 'stand', pastTense: 'stood', pastParticiple: 'stood', meaning: '站' },
    { verb: 'stick', pastTense: 'stuck', pastParticiple: 'stuck', meaning: '粘住' },
    { verb: 'strike', pastTense: 'struck', pastParticiple: 'struck', meaning: '打击' },
    { verb: 'teach', pastTense: 'taught', pastParticiple: 'taught', meaning: '教' },
    { verb: 'tell', pastTense: 'told', pastParticiple: 'told', meaning: '告诉' },
    { verb: 'think', pastTense: 'thought', pastParticiple: 'thought', meaning: '思考' },
    { verb: 'understand', pastTense: 'understood', pastParticiple: 'understood', meaning: '理解' },
    { verb: 'weep', pastTense: 'wept', pastParticiple: 'wept', meaning: '哭泣' },
    { verb: 'win', pastTense: 'won', pastParticiple: 'won', meaning: '赢' },
    { verb: 'wind', pastTense: 'wound', pastParticiple: 'wound', meaning: '缠绕' },
    { verb: 'burn', pastTense: 'burnt/burned', pastParticiple: 'burnt/burned', meaning: '燃烧' },
    { verb: 'deal', pastTense: 'dealt', pastParticiple: 'dealt', meaning: '处理' },
    { verb: 'feed', pastTense: 'fed', pastParticiple: 'fed', meaning: '喂养' },
    { verb: 'feel', pastTense: 'felt', pastParticiple: 'felt', meaning: '感觉' },
    { verb: 'flee', pastTense: 'fled', pastParticiple: 'fled', meaning: '逃跑' },
    { verb: 'light', pastTense: 'lit/lighted', pastParticiple: 'lit/lighted', meaning: '点燃' },
    { verb: 'shine', pastTense: 'shone', pastParticiple: 'shone', meaning: '照耀' },
    { verb: 'shoot', pastTense: 'shot', pastParticiple: 'shot', meaning: '射击' },
    { verb: 'slide', pastTense: 'slid', pastParticiple: 'slid', meaning: '滑动' },
    { verb: 'spit', pastTense: 'spat', pastParticiple: 'spat', meaning: '吐' },
    { verb: 'spin', pastTense: 'spun', pastParticiple: 'spun', meaning: '旋转' },
    { verb: 'sting', pastTense: 'stung', pastParticiple: 'stung', meaning: '刺' },
    { verb: 'swing', pastTense: 'swung', pastParticiple: 'swung', meaning: '摇摆' },
    { verb: 'sweep', pastTense: 'swept', pastParticiple: 'swept', meaning: '扫' },
  ],
  'ABC型（三式各不相同）': [
    { verb: 'arise', pastTense: 'arose', pastParticiple: 'arisen', meaning: '出现' },
    { verb: 'awake', pastTense: 'awoke', pastParticiple: 'awoken', meaning: '醒来' },
    { verb: 'bear', pastTense: 'bore', pastParticiple: 'born/borne', meaning: '出生/承受' },
    { verb: 'begin', pastTense: 'began', pastParticiple: 'begun', meaning: '开始' },
    { verb: 'blow', pastTense: 'blew', pastParticiple: 'blown', meaning: '吹' },
    { verb: 'break', pastTense: 'broke', pastParticiple: 'broken', meaning: '打破' },
    { verb: 'choose', pastTense: 'chose', pastParticiple: 'chosen', meaning: '选择' },
    { verb: 'drink', pastTense: 'drank', pastParticiple: 'drunk', meaning: '喝' },
    { verb: 'drive', pastTense: 'drove', pastParticiple: 'driven', meaning: '驾驶' },
    { verb: 'eat', pastTense: 'ate', pastParticiple: 'eaten', meaning: '吃' },
    { verb: 'fall', pastTense: 'fell', pastParticiple: 'fallen', meaning: '落下' },
    { verb: 'fly', pastTense: 'flew', pastParticiple: 'flown', meaning: '飞' },
    { verb: 'forbid', pastTense: 'forbade', pastParticiple: 'forbidden', meaning: '禁止' },
    { verb: 'forget', pastTense: 'forgot', pastParticiple: 'forgotten', meaning: '忘记' },
    { verb: 'forgive', pastTense: 'forgave', pastParticiple: 'forgiven', meaning: '原谅' },
    { verb: 'freeze', pastTense: 'froze', pastParticiple: 'frozen', meaning: '冻结' },
    { verb: 'give', pastTense: 'gave', pastParticiple: 'given', meaning: '给' },
    { verb: 'go', pastTense: 'went', pastParticiple: 'gone', meaning: '去' },
    { verb: 'grow', pastTense: 'grew', pastParticiple: 'grown', meaning: '生长' },
    { verb: 'hide', pastTense: 'hid', pastParticiple: 'hidden', meaning: '隐藏' },
    { verb: 'know', pastTense: 'knew', pastParticiple: 'known', meaning: '知道' },
    { verb: 'lie', pastTense: 'lay', pastParticiple: 'lain', meaning: '躺' },
    { verb: 'mistake', pastTense: 'mistook', pastParticiple: 'mistaken', meaning: '弄错' },
    { verb: 'ride', pastTense: 'rode', pastParticiple: 'ridden', meaning: '骑' },
    { verb: 'ring', pastTense: 'rang', pastParticiple: 'rung', meaning: '响' },
    { verb: 'rise', pastTense: 'rose', pastParticiple: 'risen', meaning: '升起' },
    { verb: 'see', pastTense: 'saw', pastParticiple: 'seen', meaning: '看见' },
    { verb: 'shake', pastTense: 'shook', pastParticiple: 'shaken', meaning: '摇动' },
    { verb: 'show', pastTense: 'showed', pastParticiple: 'shown/showed', meaning: '展示' },
    { verb: 'sing', pastTense: 'sang', pastParticiple: 'sung', meaning: '唱歌' },
    { verb: 'sink', pastTense: 'sank', pastParticiple: 'sunk', meaning: '下沉' },
    { verb: 'speak', pastTense: 'spoke', pastParticiple: 'spoken', meaning: '说' },
    { verb: 'steal', pastTense: 'stole', pastParticiple: 'stolen', meaning: '偷' },
    { verb: 'swim', pastTense: 'swam', pastParticiple: 'swum', meaning: '游泳' },
    { verb: 'take', pastTense: 'took', pastParticiple: 'taken', meaning: '拿' },
    { verb: 'tear', pastTense: 'tore', pastParticiple: 'torn', meaning: '撕' },
    { verb: 'throw', pastTense: 'threw', pastParticiple: 'thrown', meaning: '扔' },
    { verb: 'wake', pastTense: 'woke', pastParticiple: 'woken', meaning: '醒来' },
    { verb: 'wear', pastTense: 'wore', pastParticiple: 'worn', meaning: '穿' },
    { verb: 'weave', pastTense: 'wove', pastParticiple: 'woven', meaning: '编织' },
    { verb: 'write', pastTense: 'wrote', pastParticiple: 'written', meaning: '写' },
    { verb: 'draw', pastTense: 'drew', pastParticiple: 'drawn', meaning: '画' },
    { verb: 'drink', pastTense: 'drank', pastParticiple: 'drunk', meaning: '喝' },
    { verb: 'bid', pastTense: 'bade', pastParticiple: 'bidden', meaning: '出价' },
    { verb: 'do', pastTense: 'did', pastParticiple: 'done', meaning: '做' },
    { verb: 'be', pastTense: 'was/were', pastParticiple: 'been', meaning: '是' },
    { verb: 'tread', pastTense: 'trod', pastParticiple: 'trodden', meaning: '踩' },
    { verb: 'strive', pastTense: 'strove', pastParticiple: 'striven', meaning: '努力' },
    { verb: 'strive', pastTense: 'strove', pastParticiple: 'striven', meaning: '努力' },
  ],
};

// 动词变现在分词规则
export const presentParticipleRules = [
  {
    rule: '一般情况：加 -ing',
    examples: [
      { verb: 'go', presentParticiple: 'going', meaning: '去' },
      { verb: 'ask', presentParticiple: 'asking', meaning: '问' },
      { verb: 'look', presentParticiple: 'looking', meaning: '看' },
      { verb: 'read', presentParticiple: 'reading', meaning: '读' },
    ]
  },
  {
    rule: '以 -e 结尾：去 e 加 -ing',
    examples: [
      { verb: 'make', presentParticiple: 'making', meaning: '制作' },
      { verb: 'write', presentParticiple: 'writing', meaning: '写' },
      { verb: 'have', presentParticiple: 'having', meaning: '有' },
      { verb: 'live', presentParticiple: 'living', meaning: '居住' },
      { verb: 'come', presentParticiple: 'coming', meaning: '来' },
    ]
  },
  {
    rule: '以 -ie 结尾：变 ie 为 y 加 -ing',
    examples: [
      { verb: 'die', presentParticiple: 'dying', meaning: '死' },
      { verb: 'lie', presentParticiple: 'lying', meaning: '躺/撒谎' },
      { verb: 'tie', presentParticiple: 'tying', meaning: '系' },
    ]
  },
  {
    rule: '重读闭音节结尾（辅+元+辅）：双写末尾辅音加 -ing',
    examples: [
      { verb: 'run', presentParticiple: 'running', meaning: '跑' },
      { verb: 'swim', presentParticiple: 'swimming', meaning: '游泳' },
      { verb: 'sit', presentParticiple: 'sitting', meaning: '坐' },
      { verb: 'stop', presentParticiple: 'stopping', meaning: '停止' },
      { verb: 'begin', presentParticiple: 'beginning', meaning: '开始' },
      { verb: 'cut', presentParticiple: 'cutting', meaning: '切' },
    ]
  },
];

// 名词变复数规则
export const nounPluralRules = [
  {
    rule: '一般情况：加 -s',
    examples: [
      { singular: 'book', plural: 'books', meaning: '书' },
      { singular: 'cat', plural: 'cats', meaning: '猫' },
      { singular: 'desk', plural: 'desks', meaning: '桌子' },
    ]
  },
  {
    rule: '以 s, x, sh, ch 结尾：加 -es',
    examples: [
      { singular: 'bus', plural: 'buses', meaning: '公交车' },
      { singular: 'box', plural: 'boxes', meaning: '盒子' },
      { singular: 'watch', plural: 'watches', meaning: '手表' },
      { singular: 'brush', plural: 'brushes', meaning: '刷子' },
    ]
  },
  {
    rule: '以"辅音+y"结尾：变 y 为 i 加 -es',
    examples: [
      { singular: 'city', plural: 'cities', meaning: '城市' },
      { singular: 'baby', plural: 'babies', meaning: '婴儿' },
      { singular: 'story', plural: 'stories', meaning: '故事' },
      { singular: 'family', plural: 'families', meaning: '家庭' },
    ]
  },
  {
    rule: '以 f 或 fe 结尾：变 f/fe 为 v 加 -es',
    examples: [
      { singular: 'leaf', plural: 'leaves', meaning: '树叶' },
      { singular: 'knife', plural: 'knives', meaning: '刀' },
      { singular: 'wife', plural: 'wives', meaning: '妻子' },
      { singular: 'wolf', plural: 'wolves', meaning: '狼' },
      { singular: 'shelf', plural: 'shelves', meaning: '架子' },
    ]
  },
  {
    rule: '以 o 结尾：有生命加 -es，无生命加 -s（部分例外）',
    examples: [
      { singular: 'potato', plural: 'potatoes', meaning: '土豆' },
      { singular: 'tomato', plural: 'tomatoes', meaning: '西红柿' },
      { singular: 'hero', plural: 'heroes', meaning: '英雄' },
      { singular: 'photo', plural: 'photos', meaning: '照片' },
      { singular: 'piano', plural: 'pianos', meaning: '钢琴' },
      { singular: 'radio', plural: 'radios', meaning: '收音机' },
    ]
  },
  {
    rule: '不规则变化',
    examples: [
      { singular: 'man', plural: 'men', meaning: '男人' },
      { singular: 'woman', plural: 'women', meaning: '女人' },
      { singular: 'child', plural: 'children', meaning: '孩子' },
      { singular: 'foot', plural: 'feet', meaning: '脚' },
      { singular: 'tooth', plural: 'teeth', meaning: '牙齿' },
      { singular: 'mouse', plural: 'mice', meaning: '老鼠' },
      { singular: 'goose', plural: 'geese', meaning: '鹅' },
      { singular: 'person', plural: 'people', meaning: '人' },
      { singular: 'ox', plural: 'oxen', meaning: '牛' },
    ]
  },
  {
    rule: '单复数同形',
    examples: [
      { singular: 'sheep', plural: 'sheep', meaning: '羊' },
      { singular: 'deer', plural: 'deer', meaning: '鹿' },
      { singular: 'fish', plural: 'fish', meaning: '鱼' },
      { singular: 'series', plural: 'series', meaning: '系列' },
      { singular: 'species', plural: 'species', meaning: '物种' },
    ]
  },
  {
    rule: '外来词复数',
    examples: [
      { singular: 'analysis', plural: 'analyses', meaning: '分析' },
      { singular: 'crisis', plural: 'crises', meaning: '危机' },
      { singular: 'basis', plural: 'bases', meaning: '基础' },
      { singular: 'criterion', plural: 'criteria', meaning: '标准' },
      { singular: 'phenomenon', plural: 'phenomena', meaning: '现象' },
      { singular: 'datum', plural: 'data', meaning: '数据' },
    ]
  },
];
