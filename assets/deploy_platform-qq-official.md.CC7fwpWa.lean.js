import{_ as l,c as i,j as e,a as t,G as o,a6 as r,B as p,o as c}from"./chunks/framework.RcHASSkL.js";const n="/sealdice-manual-next/assets/platform-qq-bot-qrcode.CZVWW4Rf.jpg",d="/sealdice-manual-next/assets/platform-qq-official-1.xvYBQLAg.png",m="/sealdice-manual-next/assets/platform-qq-official-2.BG1tRARH.png",f="/sealdice-manual-next/assets/platform-qq-official-4.DeNeyeyZ.png",h="/sealdice-manual-next/assets/platform-qq-official-3.DhHb4kkJ.png",q="/sealdice-manual-next/assets/platform-qq-official-11.CAwk7sBV.png",u="/sealdice-manual-next/assets/platform-qq-official-12.CdZ1iKI7.png",Q="/sealdice-manual-next/assets/platform-qq-official-7.B2ZAvwsL.png",g="/sealdice-manual-next/assets/platform-qq-official-8.DhuF29we.png",b="/sealdice-manual-next/assets/platform-qq-official-6.D_U8yZ10.png",x="/sealdice-manual-next/assets/platform-qq-official-5.CdDG8A97.png",k="/sealdice-manual-next/assets/platform-qq-official-9.DBxQzTd1.png",D=JSON.parse('{"title":"QQ 官方机器人","description":"","frontmatter":{"lang":"zh-cn","title":"QQ 官方机器人"},"headers":[],"relativePath":"deploy/platform-qq-official.md","filePath":"deploy/platform-qq-official.md","lastUpdated":1728702230000}'),_={name:"deploy/platform-qq-official.md"},B={id:"qq-官方机器人",tabindex:"-1"};function A(E,a,P,v,w,y){const s=p("Badge");return c(),i("div",null,[e("h1",B,[a[0]||(a[0]=t("QQ 官方机器人 ")),o(s,{type:"tip",text:"v1.4.2"}),a[1]||(a[1]=t()),a[2]||(a[2]=e("a",{class:"header-anchor",href:"#qq-官方机器人","aria-label":'Permalink to "QQ 官方机器人 <Badge type="tip" text="v1.4.2" />"'},"​",-1))]),e("p",null,[a[3]||(a[3]=t("海豹从 ")),o(s,{type:"tip",text:"v1.4.2"}),a[4]||(a[4]=t(" 开始支持对接 QQ 官方的机器人服务。"))]),a[5]||(a[5]=r('<div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将包含你在 QQ 官方机器人平台接入海豹核心需要了解的特定内容。</p></div><div class="tip custom-block"><p class="custom-block-title">提示：QQ 机器人</p><p>QQ 官方目前已开放了机器人功能，可进入 <a href="https://q.qq.com/#/" target="_blank" rel="noreferrer">QQ 开放平台</a> 进行申请。</p><p>搭建机器人官方请参考 <a href="https://bot.q.qq.com/wiki/#/" target="_blank" rel="noreferrer">QQ 机器人文档</a>。</p><p>目前， <strong>QQ 官方机器人已开放个体使用权限。但官方文档没有及时更新</strong>。</p><p>同时，由于 QQ 官方对机器人能力的严格限制（包括获取 QQ 号、昵称，非 @ 时响应，私聊，群控、发送本地图片等大量功能目前不支持），目前<strong>对接官方接口的骰子很多功能无法支持</strong>（如跑团 Log，暗骰，对抗等）。</p><p>QQ 官方机器人的优点，就是不用担心被风控。</p></div><h2 id="尝试一下" tabindex="-1">尝试一下 <a class="header-anchor" href="#尝试一下" aria-label="Permalink to &quot;尝试一下&quot;">​</a></h2><p>如果你想尝试一下这样的机器人，非常欢迎你使用海豹官方的骰子：</p><img src="'+n+'" alt="海豹机器人二维码" width="65%"><h2 id="获取连接所需信息" tabindex="-1">获取连接所需信息 <a class="header-anchor" href="#获取连接所需信息" aria-label="Permalink to &quot;获取连接所需信息&quot;">​</a></h2><p>要获取用于连接海豹的信息之前，你需要建立好一个 QQ 机器人应用。可前往 <a href="https://q.qq.com/#/" target="_blank" rel="noreferrer">QQ 开放平台</a> 进行申请，<strong>实名</strong>注册后，创建一个机器人应用。</p><p>创建完成后，进入机器人管理后台，切换到「开发设置」页面：</p><img src="'+d+'" alt="切换到开发设置" width="40%"><p>在页面中你可以看到这样的信息，其中「机器人 ID」「机器人令牌」「机器人密钥」这三项是海豹进行连接所需要的。</p><p><img src="'+m+'" alt="开发设置"></p><p>然后在「开发设置 IP 白名单」一栏中，填写你骰子所在电脑的 <strong>公网</strong> IP。（使用云服务器时，请填写对应云服务商在控制台提供的 IP）</p><img src="'+f+'" alt="连接官方 Bot" width="100%"><div class="warning custom-block"><p class="custom-block-title">注意：家庭网络的 IP 变动</p><p>如果你使用的是家用网络，在本地电脑运行海豹，要注意家庭网络的 IP 通常是不固定的，运营商随时可能会更换你的 IP，遇到问题时请先检查。</p></div><h2 id="连接海豹" tabindex="-1">连接海豹 <a class="header-anchor" href="#连接海豹" aria-label="Permalink to &quot;连接海豹&quot;">​</a></h2><p>登录海豹并添加账号，选择「QQ(官方机器人)」。填写对应的信息点击连接。你的海豹应该可以正常连接官方机器人运作了！</p><img src="'+h+'" alt="连接官方 Bot" width="100%"><h2 id="指令配置" tabindex="-1">指令配置 <a class="header-anchor" href="#指令配置" aria-label="Permalink to &quot;指令配置&quot;">​</a></h2><ol><li>进入「发布配置」页面；</li><li>点击「功能配置」；</li><li>点击「指令配置」；</li><li>再点击右上角的「重新配置」开始编辑；</li><li>点开「指令」页添加指令，「指令名」里面输入对应指令（例如 <code>r</code>、<code>ra</code>、<code>en</code>），<code>/</code> 是 QQ 官方机器人默认的指令前缀（海豹也支持使用 <code>/</code>）；</li><li>然后在「指令介绍」一栏填写指令的简介；</li><li>然后在「使用场景」一栏点击「QQ 频道」、「频道私信」、「QQ 群」，切记不能选中「消息列表」；</li><li>确认配置完成后，扫码确认修改，就可以完成指令配置。</li></ol><img src="'+q+'" alt="进入指令配置页"><img src="'+u+'" alt="进行指令配置"><details class="details custom-block"><summary>推荐指令列表模版</summary><img src="'+Q+'" alt="推荐指令列表模版1" width="66%"><img src="'+g+'" alt="推荐指令列表模版2" width="66%"></details><h2 id="机器人上线" tabindex="-1">机器人上线 <a class="header-anchor" href="#机器人上线" aria-label="Permalink to &quot;机器人上线&quot;">​</a></h2><p>点开「使用范围和人员页面」，进入「编辑」页，参考下面图片中编辑使用范围与人员。</p><img src="'+b+'" alt="连接官方 Bot"><p>配置完成后，点击「发布配置」页面，上传「自测报告」与「隐私协议」。</p><details class="details custom-block"><summary>「隐私协议」与「自测报告」模板</summary><p>这里提供了海豹骰的机器人「隐私协议」与「自测报告」模版。</p><p><strong>强烈建议你按自身情况进行修改，绝对不要原样上传，这涉及到你的机器人是否能被 QQ 官方的工作人员审核通过。</strong></p><p><a href="https://github.com/sealdice/sealdice-manual-next/blob/main/assets/%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%87%AA%E6%B5%8B%E6%8A%A5%E5%91%8A.xlsx?raw=true" target="_blank" rel="noreferrer">机器人自测报告.xlsx</a></p><p><a href="https://github.com/sealdice/sealdice-manual-next/blob/main/assets/%E7%AC%AC%E4%B8%89%E6%96%B9%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%9A%90%E7%A7%81%E4%BF%9D%E6%8A%A4%E6%8C%87%E5%BC%95.docx?raw=true" target="_blank" rel="noreferrer">第三方机器人隐私保护指引.docx</a></p><p>如果你对「指令列表」的指令进行了修改，或者新增了其他功能，请自行修改，需要在「预期输出」一栏填「指令简介」。</p></details><p>点击「提交审核」后，等待 QQ 官方人员测试并审核（时间不定）。审核通过后，在「发布设置」页面中点击「上线机器人」。</p><div class="tip custom-block"><p class="custom-block-title">提示：关于 QQ 审核</p><p>目前 QQ 审核主要是测试机器人能否在所选支持的场景下，正常回应指令列表里的指令（在没有添加任何其他内容前提下），为人工审核。</p><p>在提交审核前，请善用沙盒群，测试你提交的自测报告中，所提到的指令是否都能正常工作，机器人需要正常发出回应。</p><p>如果你的指令包含一些需要填写的参数，请务必在「自测报告」表格「特殊说明」一栏里补充说明。（你可以参考模板中对 <code>.ra</code> <code>.sc</code> <code>.en</code> 指令的特殊说明。）</p><p>如果审核未通过，点击右上角的「通知」查看原因，解决后再次提交。 如果实在无法解决，可加入「QQ 机器人官方频道」，在「寻求｜｜审核和及 bug 」一栏里，发帖询问。</p></div><h2 id="使用海豹" tabindex="-1">使用海豹 <a class="header-anchor" href="#使用海豹" aria-label="Permalink to &quot;使用海豹&quot;">​</a></h2><p>点击「使用人员与范围」页面，查看你的机器人对应的邀请二维码，扫码添加即可。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>目前官方机器人只响应包含 <code>@</code> 的消息，操作时请注意。</p><p>同时，官方机器人一次只能发一条消息，一次性发送消息太多，官方机器人会因为消息发送过于频繁而报错。</p><p>此外，官方机器人目前无法发送本地图片。</p></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><p>大部分事项 <a href="https://bot.q.qq.com/wiki" target="_blank" rel="noreferrer">QQ 机器人文档</a> 都有说明，这里补充一些文档中没有说明的其他事项：</p><h3 id="企业账号的开发者资质审核" tabindex="-1">企业账号的开发者资质审核 <a class="header-anchor" href="#企业账号的开发者资质审核" aria-label="Permalink to &quot;企业账号的开发者资质审核&quot;">​</a></h3><p>如果你使用企业账号进行了注册，请记得在资料一栏中进行开发者资质状态审核。该审核需要将对应企业的银行卡号上传至腾讯审核，期间的等待时间可能较久。在开发者资质状态通过后，你才能将官方机器人送审。</p><img src="'+x+'" alt="开发者资质状态审核"><h3 id="机器人官方频道跳转" tabindex="-1">机器人官方频道跳转 <a class="header-anchor" href="#机器人官方频道跳转" aria-label="Permalink to &quot;机器人官方频道跳转&quot;">​</a></h3><p>机器人「资料卡」页面中资料卡设置一栏中，「机器人官方频道跳转」不能是骰子的「沙盒频道」。</p><img src="'+k+'" alt="机器人官方频道跳转"><h3 id="功能审核未通过" tabindex="-1">功能审核未通过 <a class="header-anchor" href="#功能审核未通过" aria-label="Permalink to &quot;功能审核未通过&quot;">​</a></h3><p>有时候「功能配置」页面中，「功能配置与提审」旁显示审核通过，但实际并没有通过，这时点击「机器人上线」的会显示发送错误。</p><p>遇见这种情况请点击「通知」，看机器人哪方面没过审，修改后再次提交审核。</p>',43))])}const I=l(_,[["render",A]]);export{D as __pageData,I as default};
