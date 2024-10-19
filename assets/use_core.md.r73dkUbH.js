import{_ as i,c as u,a6 as s,j as e,G as o,a as n,w as l,B as a,o as b}from"./chunks/framework.RcHASSkL.js";const G=JSON.parse('{"title":"核心指令","description":"","frontmatter":{"lang":"zh-cn","title":"核心指令"},"headers":[],"relativePath":"use/core.md","filePath":"use/core.md","lastUpdated":1728702230000}'),m={name:"use/core.md"},g={class:"info custom-block"},f={class:"info custom-block"},k={class:"info custom-block"},x={class:"info custom-block"},v={class:"info custom-block"},h={class:"info custom-block"},q={class:"info custom-block"},P={class:"info custom-block"},D={class:"info custom-block"},C={class:"info custom-block"},I={class:"info custom-block"},A={class:"info custom-block"},B={class:"info custom-block"},M={class:"info custom-block"},y={class:"info custom-block"},T={class:"info custom-block"},N={class:"info custom-block"},O={class:"info custom-block"},Y={id:"指定默认查询分组",tabindex:"-1"},w={class:"info custom-block"},W={class:"info custom-block"},Z={class:"info custom-block"},S={class:"info custom-block"},U={class:"info custom-block"};function X(z,t,Q,V,$,j){const d=a("ChatBox"),r=a("PluginTabsTab"),c=a("PluginTabs"),p=a("Badge");return b(),u("div",null,[t[34]||(t[34]=s('<h1 id="核心指令" tabindex="-1">核心指令 <a class="header-anchor" href="#核心指令" aria-label="Permalink to &quot;核心指令&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将介绍海豹核心的核心指令。</p><p>核心指令是无法被关闭的指令。与之相对的概念是扩展指令，扩展指令可以被关闭。</p></div><h2 id="master-骰主指令" tabindex="-1"><code>.master</code> 骰主指令 <a class="header-anchor" href="#master-骰主指令" aria-label="Permalink to &quot;`.master` 骰主指令&quot;">​</a></h2><p>此指令只能由具有 Master 权限的用户使用。</p><p><code>.master add @A</code> 为 A 添加 Master 权限。</p><p><code>.master del @A</code> 移除 A 的 Master 权限。</p><p><code>.master list</code> 查看当前 Master 权限列表。</p><p><code>.master relogin</code> 30 秒后重新登录，有可能使骰子失联。</p><p><code>.master reboot</code> 重新启动海豹核心（需要二次确认）。</p><p><code>.master checkupdate</code> 检查并进行远程更新（需要二次确认）。</p><p><code>.master unlock &lt;解锁码&gt;</code> 清空 Master 权限列表，并给自己重新添加 Master 权限。</p><p><code>.master backup</code> 做一次备份。</p><p><code>.master reload (deck|js|helpdoc)</code> 重新加载牌堆/js/帮助文档。</p><p><code>.master quitgroup &lt;群组 ID&gt; [&lt;理由&gt;]</code> 从指定群组中退出，必须在同一平台使用。</p><div class="warning custom-block"><p class="custom-block-title">注意：保护好你的骰子</p><p>我们认为，拥有海豹核心的最终判定方式是可以接触到 WebUI。因此，该解锁码仅能通过 WebUI 的「综合设置 - 基本设置」获取。</p><p>你可以将 Master 权限授予若干位维护人员。但是，确保只有你完全信任的人能够接触到你骰子的 WebUI 与本地文件。</p><p>如果你的 WebUI 可以通过公开互联网访问，确保你设置了合适的密码。</p></div><h2 id="ban-黑白名单指令" tabindex="-1"><code>.ban</code> 黑白名单指令 <a class="header-anchor" href="#ban-黑白名单指令" aria-label="Permalink to &quot;`.ban` 黑白名单指令&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">注意：统一 ID</p><p>在海豹核心的指令和后台设置中，你会经常用到<strong>统一 ID</strong>。这是海豹核心用于标识不同平台的用户和群组的通用格式。对于每个用户，其形式为 <code>平台:序列号</code>；对于群组，其形式为 <code>平台-Group:序列号</code>。</p><p>使用 <code>.userid</code> 指令查看自己和所在群聊的统一 ID。</p><p>在 QQ 平台，序列号即为 QQ 号与群号。</p></div><p>此指令只能由具有 Master 权限的用户使用。</p><p><code>.ban help</code> 查看帮助。</p><p><code>.ban add &lt;统一 ID&gt; [&lt;原因&gt;]</code> 使用统一 ID，将指定用户拉入黑名单，理由可不填。</p><p><code>.ban trust &lt;统一 ID&gt;</code> 使用统一 ID，将指定用户添加至信任列表。</p><p><code>.ban rm &lt;统一 ID&gt;</code> 使用统一 ID，将指定用户移出黑名单/信任列表。</p><p><code>.ban list</code> 展示列表。</p><p><code>.ban list (ban|warn|trust)</code> 只显示被禁用/被警告/信任用户。</p><p><code>.ban query &lt;统一 ID&gt;</code> 查看指定用户黑白名单情况。</p><h2 id="bot-骰子管理" tabindex="-1"><code>.bot</code> 骰子管理 <a class="header-anchor" href="#bot-骰子管理" aria-label="Permalink to &quot;`.bot` 骰子管理&quot;">​</a></h2><p><strong>你必须 AT 骰子账号，才能使用 bot 命令</strong>。为了简单，在以下示例中略去 AT 的部分。</p>',27)),e("div",g,[t[0]||(t[0]=e("p",{class:"custom-block-title"},"示例",-1)),o(d,{messages:[{content:".bot on",send:!0},{content:"<海豹bot> 已启用 SealDice <版本号>"},{content:".bot off",send:!0},{content:"<海豹bot> 停止服务"},{content:".bot bye",send:!0},{content:"收到指令，5s后将退出当前群组"},{content:".bot",send:!0},{content:"SealDice <版本号>"}]})]),t[35]||(t[35]=s('<h2 id="ext-扩展管理" tabindex="-1"><code>.ext</code> 扩展管理 <a class="header-anchor" href="#ext-扩展管理" aria-label="Permalink to &quot;`.ext` 扩展管理&quot;">​</a></h2><p>除了本节所述的「核心指令」之外，海豹的其他功能都作为「扩展」提供。每一个扩展提供若干指令和其他功能，并可以单独开关。你可在每个群聊中启用不同的扩展。</p><p><code>.ext list</code> 查看扩展列表和开启情况。</p><p><code>.ext &lt;扩展名&gt;</code> 查询指定扩展的信息。</p><p><code>.ext &lt;扩展名&gt; (on|off)</code> 开启、关闭指定扩展。</p><p>目前，海豹提供 7 个内置扩展，它们的详细信息在本章的后续内容中逐一介绍。同时，海豹核心也支持通过装载 JavaScript 脚本添加第三方扩展。</p>',6)),e("div",f,[t[1]||(t[1]=e("p",{class:"custom-block-title"},"示例",-1)),o(d,{messages:[{content:".ext",send:!0},{content:`检测到以下扩展：
1. [开]coc7 - 版本:1.0.0 作者:木落
2. [开]log - 版本:1.0.0 作者:木落
3. [开]fun - 版本:1.0.0 作者:木落
4. [开]deck - 版本:1.0.0 作者:木落
5. [关]reply - 版本:1.0.0 作者:木落
6. [开]dnd5e - 版本:1.0.0 作者:木落
7. [开]story - 版本:1.0.0 作者:木落
使用命令: .ext <扩展名> on/off 可以在当前群开启或关闭某扩展。
命令: .ext <扩展名> 可以查看扩展介绍及帮助`},{content:".ext coc7 on",send:!0},{content:"打开扩展 coc7"},{content:".ext reply",send:!0},{content:`> [reply] 版本1.2.0 作者木落
> 自定义回复模块，支持各种文本匹配和简易脚本`},{content:".ext reply off",send:!0},{content:"关闭扩展 reply"}]})]),t[36]||(t[36]=s('<p>可以在 UI 界面中「综合设置 - 基本设置」的最底下，设置各个扩展及其指令的默认开启状态。</p><h2 id="set-骰子面数管理" tabindex="-1"><code>.set</code> 骰子面数管理 <a class="header-anchor" href="#set-骰子面数管理" aria-label="Permalink to &quot;`.set` 骰子面数管理&quot;">​</a></h2><p>海豹默认骰子面数为100，你可以通过以下指令在 coc/dnd 规则中切换，更多规则请看<a href="./other_rules.html">其它规则支持</a>。</p><p><code>.set info</code> 查看当前面数设置。</p><p><code>.set &lt;面数&gt;</code> 设置群内骰子面数。</p><p><code>.set dnd</code> 设置群内骰子面数为20，并自动开启对应扩展。</p><p><code>.set (coc|coc7)</code> 设置群内骰子面数为100，并自动开启对应扩展。</p><p><code>.set clr</code> 清除群内骰子面数设置。</p><h2 id="r-骰点" tabindex="-1"><code>.r</code> 骰点 <a class="header-anchor" href="#r-骰点" aria-label="Permalink to &quot;`.r` 骰点&quot;">​</a></h2><p><code>.r &lt;表达式&gt; [&lt;原因&gt;]</code></p><p>别名：<code>.roll</code></p><h3 id="常用示例" tabindex="-1">常用示例 <a class="header-anchor" href="#常用示例" aria-label="Permalink to &quot;常用示例&quot;">​</a></h3>',12)),e("div",k,[t[2]||(t[2]=e("p",{class:"custom-block-title"},"示例",-1)),o(d,{messages:[{content:".r",send:!0},{content:"<木落>掷出了 D100=69"},{content:".r d50",send:!0},{content:"<木落>掷出了 d50=[1d50=48]=48"},{content:".r d50 天气不错",send:!0},{content:"由于天气不错，<木落>掷出了 d50=[1d50=4]=4"},{content:".r 5d24 骰5个24面骰",send:!0},{content:"由于骰5个24面骰，<木落>掷出了 5d24=[5d24=60, 7+20+15+1+17]=60"},{content:".r 4d6k3 骰4个6面骰，选3个最大的",send:!0},{content:"由于骰4个6面骰，选3个最大的，<木落>掷出了 4d6k3=[{6 5 3 | 1 }]=14"},{content:".r 100 + 3 * 2",send:!0},{content:"<木落>掷出了 100 + 3 * 2=100 + 6=106"}]})]),t[37]||(t[37]=e("p",null,[n("或许你已注意到，"),e("code",null,".r"),n(" 指令的表达式在不包含骰子算符时，相当于计算器。海豹的计算只支持整数，出现的小数被立即舍弃。")],-1)),t[38]||(t[38]=e("h3",{id:"多轮骰点",tabindex:"-1"},[n("多轮骰点 "),e("a",{class:"header-anchor",href:"#多轮骰点","aria-label":'Permalink to "多轮骰点"'},"​")],-1)),e("div",x,[t[3]||(t[3]=e("p",{class:"custom-block-title"},"示例",-1)),o(d,{messages:[{content:".r 2#d10",send:!0},{content:`<木落>掷骰2次:
d10=[1d10=7]=7
d10=[1d10=8]=8`}]})]),t[39]||(t[39]=e("h3",{id:"在骰点中使用属性值",tabindex:"-1"},[n("在骰点中使用属性值 "),e("a",{class:"header-anchor",href:"#在骰点中使用属性值","aria-label":'Permalink to "在骰点中使用属性值"'},"​")],-1)),t[40]||(t[40]=e("p",null,"你可在表达式中包含属性值或其他变量。",-1)),e("div",v,[t[4]||(t[4]=e("p",{class:"custom-block-title"},"示例",-1)),t[5]||(t[5]=e("p",null,"此时木落的侦查技能点是 53",-1)),o(d,{messages:[{content:".r 侦查+10",send:!0},{content:"<木落>掷出了 侦查+10=53[侦查=53] + 10=63"}]})]),t[41]||(t[41]=e("h3",{id:"奖励骰与惩罚骰",tabindex:"-1"},[n("奖励骰与惩罚骰 "),e("a",{class:"header-anchor",href:"#奖励骰与惩罚骰","aria-label":'Permalink to "奖励骰与惩罚骰"'},"​")],-1)),t[42]||(t[42]=e("p",null,"CoC 规则中，对于百分骰的一种补偿骰法，通过额外骰一定数量的十位骰，选择组成的最好结果或最坏结果。",-1)),e("div",h,[t[6]||(t[6]=e("p",{class:"custom-block-title"},"示例",-1)),o(d,{messages:[{content:".r b",send:!0},{content:"<木落>掷出了 b=[D100=72, 奖励 4]=42"},{content:".r b3",send:!0},{content:"<木落>掷出了 b3=[D100=96, 奖励 4 6 3]=36"},{content:".r p4 惩罚骰",send:!0},{content:"由于惩罚骰，<木落>掷出了 p4=[D100=27, 惩罚 5 6 8 7]=87"}]})]),t[43]||(t[43]=e("h3",{id:"优势骰与劣势骰",tabindex:"-1"},[n("优势骰与劣势骰 "),e("a",{class:"header-anchor",href:"#优势骰与劣势骰","aria-label":'Permalink to "优势骰与劣势骰"'},"​")],-1)),t[44]||(t[44]=e("p",null,"D&D 规则中对 20 面骰的一种补偿骰法。额外骰一次，取较高或较低结果。",-1)),e("div",q,[t[7]||(t[7]=e("p",{class:"custom-block-title"},"示例",-1)),o(d,{messages:[{content:".set 20",send:!0},{content:"设定默认骰子面数为 20"},{content:".r d20优势",send:!0},{content:"<木落>掷出了 d20优势=[{7 | 6 }]=7"},{content:".r d劣势",send:!0},{content:"<木落>掷出了 d劣势=[{16 | 18 }]=16"}]})]),t[45]||(t[45]=e("p",null,"优势骰与劣势骰也可使用通用的表达式表达",-1)),e("div",P,[t[8]||(t[8]=e("p",{class:"custom-block-title"},"示例",-1)),o(d,{messages:[{content:".r 2d20k1 等于优势骰",send:!0},{content:"由于等于优势骰，<木落>掷出了 2d20k1=[{19 | 17 }]=19"},{content:".r 2d20q1 等于劣势骰",send:!0},{content:"由于等于劣势骰，<木落>掷出了 2d20k1=[{19 | 17 }]=17"}]})]),t[46]||(t[46]=e("h3",{id:"fvtt-骰点兼容",tabindex:"-1"},[n("fvtt 骰点兼容 "),e("a",{class:"header-anchor",href:"#fvtt-骰点兼容","aria-label":'Permalink to "fvtt 骰点兼容"'},"​")],-1)),e("div",D,[t[11]||(t[11]=e("p",{class:"custom-block-title"},"示例",-1)),o(c,null,{default:l(()=>[o(r,{label:"优势骰"},{default:l(()=>[o(d,{messages:[{content:".r d20kh",send:!0},{content:"<木落>掷出了 d20kh=[{10 | 3 }]=10"}]})]),_:1}),o(r,{label:"劣势骰"},{default:l(()=>[o(d,{messages:[{content:".r d20kl",send:!0},{content:"<木落>掷出了 d20kl=[{6 | 15 }]=6"}]})]),_:1}),o(r,{label:"排除低值"},{default:l(()=>[t[9]||(t[9]=e("p",null,"骰 4 个排除 1 个最低值：",-1)),o(d,{messages:[{content:".r 4d6dl1",send:!0},{content:"<木落>掷出了 4d6dl1=[{5 3 2 | 1 }]=10"}]})]),_:1}),o(r,{label:"排除高值"},{default:l(()=>[t[10]||(t[10]=e("p",null,"骰 4 个排除 1 个最高值：",-1)),o(d,{messages:[{content:".r 4d6dh1",send:!0},{content:"<木落>掷出了 4d6dh1=[{3 3 5 | 6 }]=11"}]})]),_:1})]),_:1})]),t[47]||(t[47]=e("h3",{id:"fate-命运骰",tabindex:"-1"},[n("fate 命运骰 "),e("a",{class:"header-anchor",href:"#fate-命运骰","aria-label":'Permalink to "fate 命运骰"'},"​")],-1)),t[48]||(t[48]=e("p",null,"一种特殊的六面骰，六个面分别为 -、-、0、0、+、+，分别代表 -1、0、1。",-1)),t[49]||(t[49]=e("p",null,"骰点时投掷 4 次，加在一起为结果。",-1)),e("div",C,[t[12]||(t[12]=e("p",{class:"custom-block-title"},"示例",-1)),o(c,null,{default:l(()=>[o(r,{label:"一般使用"},{default:l(()=>[o(d,{messages:[{content:".r f",send:!0},{content:"<木落>掷出了 f=[---+]=-2"}]})]),_:1}),o(r,{label:"带补正的情况"},{default:l(()=>[o(d,{messages:[{content:".r f+1",send:!0},{content:"<木落>掷出了 f+1=0[+0-0] + 1=1"}]})]),_:1})]),_:1})]),t[50]||(t[50]=s('<h3 id="wod-骰点" tabindex="-1">WOD 骰点 <a class="header-anchor" href="#wod-骰点" aria-label="Permalink to &quot;WOD 骰点&quot;">​</a></h3><p>WOD 骰点规则是一个多轮骰点规则，国内多见于无限团。</p><p>进行 WOD 骰点需要设定以下参数：<strong>骰池数量 X、加骰线 Y、骰子面数 Z、成功线 N</strong>，其中 X Y 是必须的，成功线默认为 8，骰子面数默认为 10。</p><p>骰 X 个 Z 面骰，每有一个大于等于成功线 N 的骰，成功数加 1，每有一个大于等于加骰线 Y 的骰，加骰数加 1，进入下一轮。</p><p>在第二轮中，骰上一轮中<strong>加骰数</strong>个 Z 面骰，重复进行计算。以此类推。</p><p>最后计算总计成功数。</p><p>表达式形如 <code>&lt;X&gt;a&lt;Y&gt;[m&lt;Z&gt;][k&lt;N&gt;]</code>。其中的大写字母用相应参数替换。</p>',7)),e("div",I,[t[13]||(t[13]=e("p",{class:"custom-block-title"},"示例",-1)),o(d,{messages:[{content:".r 5a6",send:!0},{content:"<木落>掷出了 5a6=[成功2/8 轮数:3 {4,<10*>,<10*>,5,1},{5,<6>},{1}]=2"},{content:".r 10a6k4m9",send:!0},{content:"<木落>掷出了 10a6k4m9=[成功11/16 轮数:3 {1,<6*>,5*,3,<8*>,5*,<8*>,<6*>,2,<8*>},{5*,2,<9*>,1,4*},{5*}]=11"}]})]),t[51]||(t[51]=s("<p>在计算过程中，每一轮骰点被包含在一对花括号 <code>{}</code> 中；达到加骰线 Y 的骰点用 <code>&lt;&gt;</code> 标记；达到成功线 N 的骰点用 <code>*</code> 标记。</p><p>你可指定 Y = 0，这时不进行加骰而只骰一轮。</p><p>你可将 <code>k&lt;N&gt;</code> 替换成 <code>q&lt;M&gt;</code>，这时，最终计算的是<strong>小于等于 M</strong>的骰子总数。</p>",3)),e("div",A,[t[14]||(t[14]=e("p",{class:"custom-block-title"},"示例",-1)),o(d,{messages:[{content:".r 5a6q4",send:!0},{content:"<木落>掷出了 5a6q4=[成功4/9 轮数:3 {<9>,5,<9>,3*,<9>},{<10>,3*,2*},{2*}]=4"}]})]),t[52]||(t[52]=s('<h3 id="双十字骰点" tabindex="-1">双十字骰点 <a class="header-anchor" href="#双十字骰点" aria-label="Permalink to &quot;双十字骰点&quot;">​</a></h3><p>双十字规则是一种多轮的骰点规则。</p><p>进行双十字骰点需要设定以下参数：<strong>骰池数量 X、暴击线 Y、骰子面数 Z</strong>，其中 X Y 是必须的，骰子面数 Z 默认为 10。</p><p>骰 X 个 Z 面骰，出目大于等于暴击线的骰子称为此骰子「暴击」。只要存在暴击的骰子，就称本轮暴击，进入下一轮；否则计算最终骰点。</p><p>第二轮中，骰 上一轮中暴击的骰子数 个 Z 面骰，统计暴击数，判断进入下一轮或结束。以此类推。</p><p>最终的骰点结果为：暴击轮数 * 10 + 最后一轮中最大点数。</p><p>表达式形如 <code>&lt;X&gt;c&lt;Y&gt;[m&lt;Z&gt;]</code>。其中的大写字母用相应参数替换。</p>',7)),e("div",B,[t[15]||(t[15]=e("p",{class:"custom-block-title"},"示例",-1)),o(d,{messages:[{content:".r 4c3m7",send:!0},{content:"<木落>掷出了 4c3m7=[出目32/9 轮数:4 {<4>,2,<4>,<5>},{<7>,1,2},{<7>},{2}]=32"}]})]),t[53]||(t[53]=e("p",null,[n("在计算过程中，每一轮骰点被包含在一对花括号 "),e("code",null,"{}"),n(" 中；达到暴击线 Y 的骰点用 "),e("code",null,"<>"),n(" 标记。")],-1)),t[54]||(t[54]=e("h3",{id:"混合运算",tabindex:"-1"},[n("混合运算 "),e("a",{class:"header-anchor",href:"#混合运算","aria-label":'Permalink to "混合运算"'},"​")],-1)),t[55]||(t[55]=e("p",null,[n("以上所有骰法，加、减、乘、除、乘方等 5 个数学运算，以及括号 "),e("code",null,"()"),n(" 可以被组合使用，以进行更复杂的运算。")],-1)),e("div",M,[t[16]||(t[16]=e("p",{class:"custom-block-title"},"示例",-1)),o(d,{messages:[{content:".r 30 + (-1d20) + 49",send:!0},{content:"<木落>掷出了 30 + (-1d20) + 49=30 + -1[1d20=1] + 49=78"},{content:".r d50 * 3 + 2",send:!0},{content:"<木落>掷出了 d50 * 3 + 2=21[1d50=21] * 3 + 2=65"},{content:".r d50 * 3 + (2 - p2) 多项式",send:!0},{content:"由于多项式，<木落>掷出了 d50 * 3 + (2 - p2)=25[1d50=25] * 3 + -64[D100=6, 惩罚 6 5]=11"}]})]),t[56]||(t[56]=s("<p>特别地，上文所述的「骰法」<code>d</code> <code>b</code> <code>p</code> <code>f</code> <code>a</code> <code>c</code> 均可作为运算符使用。</p>",1)),e("div",y,[t[17]||(t[17]=e("p",{class:"custom-block-title"},"示例",-1)),o(d,{messages:[{content:".r 1d1d1d1d1d1d1d1d1d1d1d1d1d1d(20+1d3*4)",send:!0},{content:"<木落>掷出了 1d1d1d1d1d1d1d1d1d1d1d1d1d1d(20+1d3*4)=13"},{content:".r 1d10+(1+32)d(4*6)d20",send:!0},{content:"<木落>掷出了 1d10+(1+32)d(4*6)d20=1[1d10=1] + 3941[33d24=384,384d20=3941]=3942"}]})]),t[57]||(t[57]=s('<h2 id="rh-暗骰" tabindex="-1"><code>.rh</code> 暗骰 <a class="header-anchor" href="#rh-暗骰" aria-label="Permalink to &quot;`.rh` 暗骰&quot;">​</a></h2><p>这个指令的格式与普通骰点 <code>.r</code> 完全相同，区别在于发送骰点结果的方式。</p><p>在发送指令的群聊中，海豹核心会进行提示，但提示不包含骰点结果。</p><p>骰点结果将由海豹核心私聊给指令发送者。</p><div class="info custom-block"><p class="custom-block-title">收不到结果？</p><p>在 QQ 平台上，如果你不是海豹账号的好友，将无法进行私聊。也就无法收到暗骰结果。</p></div>',5)),e("div",T,[t[18]||(t[18]=e("p",{class:"custom-block-title"},"示例",-1)),o(c,null,{default:l(()=>[o(r,{label:"群聊"},{default:l(()=>[o(d,{messages:[{content:".rh d50",send:!0},{content:"命运正在低语！"}]})]),_:1}),o(r,{label:"收到的私聊"},{default:l(()=>[o(d,{messages:[{content:`来自群<群名>(群号)的暗骰:
<木落>掷出了 d10=[1d10=3]=3`}]})]),_:1})]),_:1})]),t[58]||(t[58]=e("h2",{id:"rx-rxh-特殊骰点",tabindex:"-1"},[e("code",null,".rx"),n(" / "),e("code",null,".rxh"),n(" 特殊骰点 "),e("a",{class:"header-anchor",href:"#rx-rxh-特殊骰点","aria-label":'Permalink to "`.rx` / `.rxh` 特殊骰点"'},"​")],-1)),t[59]||(t[59]=e("p",null,[n("这个指令的格式与普通骰点 "),e("code",null,".r"),n(" 完全相同，区别在于允许额外 AT 其他人，以使用对方的属性。")],-1)),t[60]||(t[60]=e("p",null,"这种操作称为「代骰」，你会在许多其他指令中看到代骰用法。",-1)),e("div",N,[t[19]||(t[19]=e("p",{class:"custom-block-title"},"示例",-1)),t[20]||(t[20]=e("p",null,"此时木落的侦查是 75，Szz 的侦查是 80",-1)),o(d,{messages:[{content:".rx 侦查+1d20**2",send:!0},{content:"<木落>掷出了 侦查+1d20**2=75[侦查=75] + 324[1d20=18]=399"},{content:".rx 侦查+1d20**2 @Szz",send:!0},{content:`由<木落>代骰:
<Szz>掷出了 侦查+1d20**2=80[侦查=80] + 144[1d20=12]=224`}]})]),t[61]||(t[61]=s('<h2 id="nn-角色名设定" tabindex="-1"><code>.nn</code> 角色名设定 <a class="header-anchor" href="#nn-角色名设定" aria-label="Permalink to &quot;`.nn` 角色名设定&quot;">​</a></h2><p><code>.nn</code> 查看当前角色名。</p><p><code>.nn &lt;角色名&gt;</code> 修改角色名，角色名中不能带有空格。</p><p><code>.nn clr</code> 重置角色名，即，将角色名设置为 IM 平台的昵称。</p><p>角色名被用于在进行各种操作和记录 Log 时显示。</p>',5)),e("div",O,[t[21]||(t[21]=e("p",{class:"custom-block-title"},"示例",-1)),o(d,{messages:[{content:".nn 简·拉基·茨德",send:!0},{content:"<木落>(IM 账号)的昵称被设定为<简·拉基·茨德>"},{content:".r",send:!0},{content:"<简·拉基·茨德>掷出了 D100=16"},{content:".nn",send:!0},{content:"玩家的当前昵称为: <简·拉基·茨德>"},{content:".nn clr",send:!0},{content:"<简·拉基·茨德>(IM 账号)的昵称已重置为<木落>"}]})]),t[62]||(t[62]=s('<h2 id="pc-角色卡管理" tabindex="-1"><code>.pc</code> 角色卡管理 <a class="header-anchor" href="#pc-角色卡管理" aria-label="Permalink to &quot;`.pc` 角色卡管理&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">信息</p><p>为了使用这个指令，需要先介绍海豹核心管理你角色卡的方式。</p><p>在每个群聊（对于这里，私聊也被认为是一个特殊的群聊）中，你都自动拥有一张独立的角色卡。这些角色卡互相无任何影响。</p><p>你还可以拥有若干与特定群聊无关的角色卡，这些角色卡可以被绑定到任意数量的群聊。这时，绑定的群聊中角色数据<strong>互相同步</strong>，在一处的修改就会影响其他各处。</p><p><code>pc</code> 指令的作用是管理上述第二种群聊无关角色卡。</p></div><p><code>.pc new &lt;角色名&gt;</code> 新建一张角色卡，并绑定到当前群聊。</p><p><code>.pc save [&lt;角色名&gt;]</code> 将你当前群聊中的独立卡数据保存为个人角色卡。你可指定保存的角色名，如不指定，将使用当前群聊中你的角色名。</p><p><code>.pc list</code> 列出你所保存的所有角色。</p><p><code>.pc tag (&lt;角色名&gt;|&lt;角色序号&gt;)</code> 将指定角色卡绑定到当前群聊。</p><p><code>.pc tag</code> 不带有角色名参数，将本群的绑定关系解除。你在本群的角色将会恢复为独立卡的数据。</p><p><code>.pc untagAll (&lt;角色名&gt;|&lt;角色序号&gt;)</code> 将指定角色卡从其绑定的所有群解绑。</p><p><code>.pc load (&lt;角色名&gt;|&lt;角色序号&gt;)</code> 使用指定角色卡的数据覆盖当前群聊的独立卡。这不会将角色卡绑定到当前群聊。</p><p><code>.pc del/rm (&lt;角色名&gt;|&lt;角色序号&gt;)</code> 删除指定角色卡。</p><h2 id="find-词条查询指令" tabindex="-1"><code>.find</code> 词条查询指令 <a class="header-anchor" href="#find-词条查询指令" aria-label="Permalink to &quot;`.find` 词条查询指令&quot;">​</a></h2><p>海豹核心默认搭载了 CoC 的《怪物之锤》、《魔法大典》和 D&amp;D 规则的一系列资料。这些资料在海豹的 <code>data/helpdpc</code> 目录下的不同文件中被整理成词条，并支持使用此指令进行查询。</p><p><code>.find [#&lt;分组名&gt;] &lt;关键字&gt; [--num=&lt;页大小&gt;] [--page=&lt;页码&gt;]</code> 用关键字进行词条查询；如果提供了分组名，则只在指定分组中进行查询；可指定每页大小和页码，默认为每页 4 条，显示第 1 页。</p><p>「分组名」是指海豹 <code>data/helpdoc</code> 目录下的子目录名。对于内置的帮助文档，分组名分别是「COC」和「DND」。</p><p><code>.find &lt;数字ID&gt;</code> 显示该 ID 的词条。</p><p><code>.find --rand</code> 显示随机词条。</p><p>别名：<code>.查询</code></p><p>查询功能在不同设备上的实现是不同的。在 x86 设备上，海豹核心使用稍微更多的内存使用全文搜索，这赋予了查询指令强大的获取能力。在其他平台上，由于搜索库的限制，海豹核心使用词条标题模糊搜索。</p>',18)),e("p",null,[t[22]||(t[22]=n("从 ")),o(p,{type:"tip",text:"v1.4.2"}),t[23]||(t[23]=n(" 版本起，你可以在 WebUI 的「扩展功能 - 帮助文档」中设置分组的别名。"))]),e("h3",Y,[t[24]||(t[24]=n("指定默认查询分组 ")),o(p,{type:"tip",text:"v1.4.2"}),t[25]||(t[25]=n()),t[26]||(t[26]=e("a",{class:"header-anchor",href:"#指定默认查询分组","aria-label":'Permalink to "指定默认查询分组 <Badge type="tip" text="v1.4.2" />"'},"​",-1))]),e("p",null,[t[27]||(t[27]=n("从 ")),o(p,{type:"tip",text:"v1.4.2"}),t[28]||(t[28]=n(" 版本起，海豹支持在每个群组中分别设置默认的查询分组。"))]),t[63]||(t[63]=e("p",null,[e("code",null,".find config --group"),n(" 查看当前群组的默认查询分组。")],-1)),t[64]||(t[64]=e("p",null,[e("code",null,".find config --group=<分组名>"),n(" 设置当前群组的默认查询分组。")],-1)),t[65]||(t[65]=e("p",null,[e("code",null,".find config --groupclr"),n(" 清除当前群组的默认查询分组。")],-1)),e("div",w,[t[29]||(t[29]=e("p",{class:"custom-block-title"},"示例",-1)),o(d,{messages:[{content:".find config --group=COC",send:!0},{content:"指定默认搜索分组为COC"},{content:".find 火球术",send:!0},{content:"未找到搜索结果"},{content:".find config --groupclr",send:!0},{content:"已清空默认搜索分组，原分组为COC"},{content:".find 火球术",send:!0},{content:`[全文搜索]最优先结果:
词条: PHB法术:火球术`}]})]),t[66]||(t[66]=e("h3",{id:"全文搜索",tabindex:"-1"},[n("全文搜索 "),e("a",{class:"header-anchor",href:"#全文搜索","aria-label":'Permalink to "全文搜索"'},"​")],-1)),e("div",W,[t[30]||(t[30]=e("p",{class:"custom-block-title"},"示例",-1)),o(d,{messages:[{content:".find 30尺 法术",send:!0},{content:`全部结果:
[序号3066]【术士:超魔法:远程法术】 匹配度 0.16
[序号3015]【游侠:驯兽师:法术共享】 匹配度 0.13
[序号2396]【法术详述:迷踪步】 匹配度 0.12
[序号1319]【法术详述:阿迦纳萨喷火术】 匹配度 0.12
[序号507]【法术详述:智能堡垒/智力堡垒/智慧堡垒/智能壁垒/心智堡垒/心智壁垒】 匹配度 0.12
[序号2514]【法术详述:水下呼吸/水中呼吸】 匹配度 0.11
[序号2212]【法术详述:原力法阵】 匹配度 0.11
[序号1403]【法术详述:众星冠冕/星辰冠冕/星之冠冕】 匹配度 0.11
[序号2243]【法术详述:造水/枯水术/造水术/枯水术】 匹配度 0.11
[序号2176]【法术详述:秘法眼】 匹配度 0.11

(本次搜索由全文搜索完成)`}]})]),t[67]||(t[67]=e("p",null,"因为多个文本匹配度相近，因此没有列出最佳匹配条目的正文内容。用这条指令可以查看：",-1)),e("div",Z,[t[31]||(t[31]=e("p",{class:"custom-block-title"},"示例",-1)),o(d,{messages:[{content:".find 2212",send:!0},{content:`词条: 法术详述:原力法阵
原力法阵 Circle of Power
圣武士
5环 防护
施法时间：1动作
施法距离：自身（30尺半径）
法术成分：V
持续时间：专注，至多10分钟
你身上发出神圣能量并以扭曲散溢的魔法能量构成一个半径30尺的球状力场。法术持续时间内力场将以你为中心随你移动。力场范围内的友方生物（包括你自己）为对抗法术或其他魔法效应而进行的豁免检定具有优势。此外，受本法术效应影响的生物在对抗豁免成功则伤害减半的法术或魔法效应时，若成功则不受伤害。`}]})]),t[68]||(t[68]=e("p",null,[e("strong",null,"这么好用，那代价是什么呢？")],-1)),t[69]||(t[69]=e("p",null,"更多的内存占用和变慢的启动速度。",-1)),t[70]||(t[70]=e("p",null,[n("大致来说，"),e("strong",null,"每 1 MB 帮助文本会产生约 15 MB 额外内存占用"),n("。")],-1)),t[71]||(t[71]=e("h3",{id:"快速文档查找",tabindex:"-1"},[n("快速文档查找 "),e("a",{class:"header-anchor",href:"#快速文档查找","aria-label":'Permalink to "快速文档查找"'},"​")],-1)),e("div",S,[t[32]||(t[32]=e("p",{class:"custom-block-title"},"示例",-1)),o(d,{messages:[{content:".find 测试词条",send:!0},{content:`最优先结果:
词条: 测试:测试词条
他在命运的沉浮中随波逐流, 扮演着受害与加害者的双重角色

全部结果:
[序号2]【测试:测试词条】 匹配度 67.00

(本次搜索由快速文档查找完成)`}]})]),t[72]||(t[72]=s('<h3 id="致谢" tabindex="-1">致谢 <a class="header-anchor" href="#致谢" aria-label="Permalink to &quot;致谢&quot;">​</a></h3><p>CoC《怪物之锤》的整理者为：<strong>蜜瓜包</strong>、<strong>October</strong>；</p><p>CoC 魔法大典的整理者为：<strong>魔骨</strong>、<strong>NULL</strong>、<strong>Dr.Amber</strong>；</p><p>D&amp;D 系列资料的整理者主要为 DicePP 项目组成员，包括<strong>Farevell</strong>、<strong>梨子</strong>、<strong>花作噫</strong>、<strong>邪恶</strong>、<strong>惠惠</strong>、<strong>赵小安</strong>等。</p><p>这些资料的原始出处和译者很多已经不可考，此处无法一一列出，甚为遗憾。</p><p>也在此感谢一代又一代无名作者和译者做出的工作。</p><h2 id="help-帮助指令" tabindex="-1"><code>.help</code> 帮助指令 <a class="header-anchor" href="#help-帮助指令" aria-label="Permalink to &quot;`.help` 帮助指令&quot;">​</a></h2><p><code>.help [&lt;词条名&gt;]</code> 显示指定词条的帮助文档。</p><p><code>.help reload</code> 重新装载帮助文档。仅 Master 可用。</p><h2 id="set-设定默认骰子面数-设定游戏系统" tabindex="-1"><code>.set</code> 设定默认骰子面数 / 设定游戏系统 <a class="header-anchor" href="#set-设定默认骰子面数-设定游戏系统" aria-label="Permalink to &quot;`.set` 设定默认骰子面数 / 设定游戏系统&quot;">​</a></h2><p><code>.set info</code> 查看当前默认骰子面数。如果从未设置过，将显示为「0」。</p><p><code>.set dnd</code> 设置群内骰子面数为 20，并自动开启 D&amp;D 扩展。</p><p><code>.set (coc|coc7)</code> 设置群内骰子面数为 100，并自动开启 CoC 扩展。</p><p><code>.set &lt;面数&gt;</code> 设定群内默认骰子面数。</p><p><code>.set &lt;面数&gt; --my</code> 设定个人专属默认骰子面数。</p><p><code>.set clr</code> 清除群内骰子面数设置。</p><p><code>.set clr --my</code> 清除个人骰子面数设置。</p><p>如果通过「规则模板」机制添加了自设规则，并有相关配置，可以使用 <code>.set &lt;规则名&gt;</code> 切换为对应规则的默认骰面数。你可以通过 <code>.set help</code> 来查看当前可用的关键字。</p>',18)),e("div",U,[t[33]||(t[33]=e("p",{class:"custom-block-title"},"示例",-1)),o(d,{messages:[{content:".set 20",send:!0},{content:"设定默认骰子面数为 20"},{content:".set coc",send:!0},{content:`设定群组默认骰子面数为 100
提示:已切换至100面骰，并自动开启coc7扩展`},{content:".set dnd",send:!0},{content:`设定群组默认骰子面数为 20
提示:已切换至20面骰，并自动开启dnd5e扩展。`},{content:".set info",send:!0},{content:`个人骰子面数: 0
群组骰子面数: 20
当前骰子面数: 20`}]})]),t[73]||(t[73]=s('<h2 id="botlist-机器人列表" tabindex="-1"><code>.botlist</code> 机器人列表 <a class="header-anchor" href="#botlist-机器人列表" aria-label="Permalink to &quot;`.botlist` 机器人列表&quot;">​</a></h2><p>这个指令用于标记同一群聊内的其他机器人。</p><p>当一个账号被标记后，对于与 TA 相关的消息，海豹核心会按以下规则进行忽略：</p><ol><li>如果 TA 被 AT，忽略；</li><li>如果是 TA 发出的消息，忽略。</li></ol><p>这可避免机器人互相响应造成的危险的循环。</p><p><code>.botlist add @A @B @C</code> 标记 A、B、C 为机器人。</p><p><code>.botlist add @A @B --s</code> 同上，不过骰子不会做出回复。</p><p><code>.botlist del @A @B @C</code> 去除 A、B、C 的标记。</p><p><code>.botlist list</code> 查看当前标记列表。</p>',9))])}const J=i(m,[["render",X]]);export{G as __pageData,J as default};
