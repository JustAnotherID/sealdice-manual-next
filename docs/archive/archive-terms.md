---
lang: zh-cn
title: 名词/术语速查表
---

<!--
本页面编写规范

1. 要求条目按英文首字母、拼音首字母分类排序。
2. 建议添加中文条目时，同时添加英文条目。
3. 要求添加英文条目时，同时添加中文条目，且将英文条目指向中文条目，并将实际内容写入中文条目。
    - 除非中文语境下，通常使用此条目的英文，如：IP、WebUI 等。
4. 要求同一首字母分类下，中文条目排在英文条目之前。
5. 要求条目（A 条目）内容中首次出现本页面内存在的名词/术语（B 条目）时，将 A 条目中对应的文本指向 B 条目。
    - 若 B 条目指向 C 条目，且除链接外无实质内容，则将 A 条目中对应的文本指向 C 条目。
    - 若 B 条目指向本页面之外，即使除链接外无实质内容，仍将 A 条目中对应的文本指向 B 条目。
-->

# 名词/术语速查表

::: info 本节内容

本节为计算机小白指南中的第四部分。

本节旨在帮助先前未曾接触过计算机以及服务器，或者对计算机及服务器知之甚少的用户快速查询特定名词/术语的含义。本节不能代替权威解释或各项目的官方文档。

关于如何正确地提问，请看 [如何正确提问](./archive-guide#如何正确提问)，关于如何快速学习相关背景知识，请看 [如何高效学习](./archive-guide#如何高效学习)；关于一些小白常见的问题，请看 [计算机小白常见问题](./archive-guide#计算机小白常见问题)。

:::

## C

### CQ 码

CQ 码是酷 Q（CoolQ）时代定义的一套接口语言，方便用户快速编写指定类型 QQ 消息。可以参考 [这个页面](https://docs.go-cqhttp.org/cqcode) 进行编写。

## D

### 端口

参见 [IP 与端口](#ip-与端口)。

## F

### 服务器

服务器可以简单地理解为持续保持开机的电脑，即持续提供服务的机器。

我们知道，骰子本质是在电脑上运行的程序，如果希望骰子 24 小时都可以回应我们的指令，那么就需要电脑保持开启的状态。但这样做的不稳定性非常大，如果出现例如家里突然停电了这样的情况，骰子就不能 24 小时随时回复我们的指令了，并且，这样也很费电。而服务器正是这样一种尽可能稳定运行的、不会关机的电脑，他们可能以「云电脑」这样的名字出现，但从本质上来说，这就是服务器。

::: tip 提示：服务器和个人计算机在使用上有明显差异

相比开机激活之后马上就可以投入使用的个人计算机，服务器从运行系统上就与其稍有不同。这里以 Windows 系统的服务器和个人电脑举例。

服务器使用的是微软特地为了服务器开发的 Windows Server 系统。顾名思义，这个系统就是专为服务器开发的，在部分设置的选项中也与个人计算机有所不同。

正因如此，服务器一开始并不容易熟练操作。不过，这篇速查表的目的就是让屏幕前不太明白计算机相关知识的用户可以快速入门。所以，你也不必对这些问题有太大的压力。

:::

## G

### 工作目录

工作目录是用户在使用 [命令行界面](#命令行界面) 时，当前「处于」的目录。在运行程序时，程序会以工作目录作为索引目录树的起始位置。

海豹核心要求的、和实际运行时的工作目录即为「包含 `sealdice-core(.exe)` 文件和 `data` 目录、通常还包含 `lagrange` 目录」的目录（文件夹）。

海豹工作目录内的文件结构可以参考 [海豹的本地文件](../deploy/about_file)。

## H

### Headless

参见 [无头](#无头)。

## I

### IP 与端口

在分离部署 QQ 后端和部署多只海豹时，你都需要正确处理 IP 与端口号。IP 与端口是互联网应用用于定位彼此的方式之一，IP 用于区分网络中的不同设备，而端口用于区分同一设备上的不同应用。打个比方，IP 就像是地址，可以定位到某个特定的房屋，而端口号是这个屋子里住户的编号，可以用于判断该联系这户人中的哪一位。在目前主流使用的 IPv4 标准下，IP 是形如 `127.0.0.1`、`192.168.0.1` 的一串数字，端口号则是范围在 0-65535 的一个整数。两者组合时，通常使用 `127.0.0.1:3456` 的方式描述。

通常来说，服务端应用程序会「监听」一个端口，而客户端应用程序会试图连接到此端口。例如在分离部署 QQ 后端并采用正向 WS 连接时，QQ 后端会监听你在配置中指定的端口，而海豹会试图连接到这个端口；而海豹的 WebUI 作为服务端默认绑定到 3211 端口，你的浏览器则试图连接到 3211 端口。所以，在配置分离部署的 QQ 后端时，海豹中必须填入与你的 QQ 后端配置相同的端口号。

不同范围的 IP 地址都有与之相关的规定，而你在配置海豹的过程中最常见的是 `127.0.0.1` 或 `localhost`。此地址一般用于指向**本机**，而非互联网上的其他设备。当你的海豹与 QQ 后端位于**同一主机**上，在海豹中需要通过此地址指向 QQ 后端。当你访问 WebUI 的设备与海豹所在的是**同一主机**，你也需要在浏览器地址栏填入此 IP。

同样的，端口号也不能随意指定。一般情况下，一个端口只能被一个服务端监听使用，这就是为什么当你部署多只海豹时需要切换端口，此时默认的 3211 端口已被第一只海豹占用。而低位端口（小数字）通常有其约定，例如 80 是 HTTP 端口，443 是 HTTPS 端口等。低位端口通常已经被占用，或系统安全策略不允许随意监听此类端口。所以，建议优先选择高位端口（大数字）部署 QQ 后端及海豹。

### Issue

Issue 更常见的含义是偏向负面的「问题」，而在开源项目领域，issue 一词更多地被翻译为中性的「议题」。

在开源项目网站如 GitHub 的 Issues 标签页下，按默认设置，你可以看到一个开源项目的全部进行中的议题。这些议题主要包括了使用求助、Bug 反馈以及功能请求。在这里的讨论是所有人可见的，因此可以方便开发者与用户高效地共享信息。Issue 也是大部分开源项目正式的反馈渠道。

## J

### JSON

JSON 是一种 [数据序列化语言](#数据序列化语言)。语法入门可以参考 [编写牌堆](../advanced/edit_deck)。

## K

### 控制台

控制台是 [终端](#终端) 生成的、用于与 [Shell](#shell) 交互的界面。

你可能还想了解 [控制台](#控制台)、[命令行](#命令行)、[Shell](#shell) 与 [命令提示符](#命令提示符)。

许多时候，终端、控制台、命令行与 Shell 或命令提示符等名词会被混用，因为在实际交互中，他们所指代的东西往往是一体的。

## L

### Lagrange

Lagrange（拉格兰）是一个 [NTQQ](#ntqq) 协议相关的开源项目。其包括目前实现了 [Linux](#linux) NTQQ 协议的 Lagrange.Core，和提供 OneBot-V11 API 的 Lagrange.Onebot 两部分。

Lagrange 可以很方便的在多个平台（Windows、Linux、Mac）部署，海豹核心可以对接其提供的 OneBot-V11 API 来提供 QQ 骰子服务。

可以参考 [连接平台 - QQ](../deploy/platform-qq) 中 [有关的部分](../deploy/platform-qq#Lagrange) 和 Lagrange 的官方 [GitHub 页面](https://github.com/LagrangeDev/Lagrange.Core)。

### Linux

Linux 是一种基于 UNIX 操作系统设计的开源操作系统。Linux 广泛应用于服务器、嵌入式系统、超级计算机以及大多数互联网基础设施。它也可以用于桌面计算，尽管市场份额相对较小。

Linux 的主要优点包括稳定性、安全性、低成本（大部分 Linux 发行版都是免费的）和开源性（用户可以查看和修改源代码）。

### LiteLoader

[LiteLoaderQQNT](https://github.com/LiteLoaderQQNT/LiteLoaderQQNT)（LiteLoader）是 [NTQQ](#ntqq) 的插件加载器，允许通过插件注入 QQ 实现某些特定的功能。

可以参考 [连接平台 - QQ](../deploy/platform-qq) 中 [有关的部分](../deploy/platform-qq#llonebot) 和 LiteLoader 的官方 [GitHub 页面](https://github.com/LiteLoaderQQNT/LiteLoaderQQNT)。

### Log

参见 [日志](#日志)。

## M

### 命令行

命令行是 [控制台](#控制台) 中，你实际输入命令的位置。通常，命令行行首会有 `$`、`#` 或 `>` 等符号，它们是 [Shell](#shell) 生成的提示符 (Prompt)，用于提示用户 Shell 正在等待用户输入命令。

你可能还想了解 [终端](#终端)、[控制台](#控制台)、[Shell](#shell) 与 [命令提示符](#命令提示符)。

许多时候，终端、控制台、命令行与 Shell 或命令提示符等名词会被混用，因为在实际交互中，他们所指代的东西往往是一体的。

### 命令行界面

命令行界面即基于 [命令行](#命令行) 的用户界面。在此界面下，用户通常使用输入指令的方式与操作系统或程序进行交互。

### 命令提示符

命令提示符（`cmd.exe`）是 Windows 平台下，在上个世代常用，在如今（由于 Windows *过于完善*的*兼容性*）也经常被使用到的一种 [Shell](#shell)。

命令提示符本身集成了 [控制台](#控制台)，但由于其过于古老，具有诸多弊端。例如，当你用鼠标选中控制台内的文本时，正在运行的程序会被暂停。

因此，强烈建议你使用 [Windows 终端](#windows-终端) 打开程序。在较新的 Windows 系统上，命令提示符默认使用 Windows 终端打开。

你可能还想了解 [终端](#终端)、[控制台](#控制台)、[命令行](#命令行) 与 [Shell](#shell)。

许多时候，终端、控制台、命令行与 Shell 或命令提示符等名词会被混用，因为在实际交互中，他们所指代的东西往往是一体的。

## N

### NapCatQQ

NapCatQQ 是基于 PC [NTQQ](#ntqq) 本体实现一套 [无头](#无头) Bot 框架。

可以参考 [连接平台 - QQ](../deploy/platform-qq) 中 [有关的部分](../deploy/platform-qq#napcatqq) 和 NapCatQQ 的官方 [GitHub 页面](https://github.com/NapNeko/NapCatQQ)。

### NTQQ

NTQQ/QQNT 是腾讯公司基于 NT 内核，重新设计了用户界面的 QQ 客户端。腾讯官方称之为「QQ 9」。因此，如果发现自己使用的 QQ 不能正确加载 [LiteLoader](#liteloader) 等插件，请先检查 QQ 版本号是否大于 9。

## Q

### QQNT

参见 [NTQQ](#ntqq)。

## R

### 日志

在计算机领域中，日志通常指程序在运行时生成的一系列记录。这些记录通常反映了程序的运行状态，同时一般包含时间信息以方便定位对应的事件。在程序运行发生故障或不符合预期的行为时，日志中通常也会有所反映。日志通常分为信息（Info）、注意（Warning）和错误（Error）等不同的等级，而后两者就对应了上述的程序问题。

海豹的日志通常可以在三个地方找到：

- [WebUI](#webui) 的「日志」导航栏，也即默认页面下。
- 运行着海豹核心的 [控制台](#控制台)。
- 海豹 [工作目录](#工作目录) 下， `data/main.log` 和 `data/default/record.log` 文件内。

## S

### 数据序列化语言

程序运行中使用的数据，通常以特定的数据结构存储在内存之中。为了更方便地对数据进行存储、传输与重建，数据序列化语言被发明出来。这类语言通过特定的语法描述了数据之间的关系，并以文本的方式存储或传输。程序可以从这类语言中方便地恢复原有的数据结构。

常见的数据序列化语言包括 [JSON](#json)、[YAML](#yaml)、[TOML](#toml)等。

### Shell

我们日常使用的程序通常使用图形用户界面（GUI）与我们交互，即基于图形渲染和鼠标点击、拖拽的交互方式。而在编程领域和更古早的时期，[命令行界面](#命令行界面)（CLI）则更为常用。在使用 CLI 时，我们第一个打开的程序通常就是 Shell。

Shell 是一个特殊的命令行界面程序，它给用户提供了通过输入命令与操作系统进行交互的交互方式。它会解析并执行用户输入的命令。

在类 Unix 系统中存在众多的 Shell，例如 Ubuntu 系统默认使用 Bash 而 macOS 默认使用 Zsh。Windows 系统推荐使用 PowerShell，而 [命令提示符](#命令提示符) 也是一种 Shell。

你可能还想了解 [终端](#终端)、[控制台](#控制台) 与 [命令行](#命令行)。

许多时候，终端、控制台、命令行、Shell 与命令提示符等名词会被混用，因为在实际交互中，他们所指代的东西往往是一体的。

## T

### TOML

TOML 是一种 [数据序列化语言](#数据序列化语言)。语法入门可以参考 [编写牌堆](../advanced/edit_deck)。

## W

### 无头

在计算机领域，无头（headless）通常指通过不生成图形化用户界面方式运行（原本有图形化用户界面的）程序。

### WebUI

UI 即「用户界面（User Interface）」，通常指用户与程序发生交互的位置。而 WebUI 顾名思义，就是通过网络生成、交互的用户界面。

在海豹的相关语境下，WebUI 指骰主能通过浏览器访问到的管理后台。海豹默认的 WebUI 监听 [端口](#ip-与端口) 为 3211，因此当你通过 3211 端口访问海豹的管理后台时，实质上就是在与海豹的 WebUI 交互。

### Windows Terminal

参见 [Windows 终端](#windows-终端)。

### Windows 终端

![Windows Terminal icon](./images/newbie_terms_windows_terminal_icon.svg)

> Windows 终端是一个为命令行用户准备的全新的、现代的、功能丰富的生产力 [终端](#终端)。它包含了 Windows 命令行社区经常希望加入的新功能，例如标签页、富文本、全球化、可配置性和主题与风格化等等。

如果你在 Windows「开始菜单」的搜素功能中，输入「终端」后并没有出现如上所示的图标。那么强烈建议你下载并安装 Windows 终端，而不是继续使用 [命令提示符](#命令提示符) 集成的 [控制台](#控制台)。

如果你发现你在启动海豹核心、[Lagrange](#lagrange) 或 [NapCatQQ](#napcatqq) 等程序时，弹出窗口的字体与风格都不属于 Windows 终端，那么强烈建议你在 Windows 终端中手动启动这些程序。

## Y

### YAML

YAML 是一种 [数据序列化语言](#数据序列化语言)。语法入门可以参考 [编写牌堆](../advanced/edit_deck)。

## Z

### 终端

终端（Terminal）是一个特殊的程序，它提供了一种访问 [Shell](#shell) 的方式，也可以视为 Shell 的一层包装。现代的终端通常会生成一个窗口——即 [控制台](#控制台) 用于交互。

你可能还想了解 [命令行](#命令行)、[Shell](#shell) 与 [命令提示符](#命令提示符)。

许多时候，终端、控制台、命令行与 Shell 或命令提示符等名词会被混用，因为在实际交互中，他们所指代的东西往往是一体的。
