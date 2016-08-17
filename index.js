/*
* 项目下面的主模块 入口模块是index.js
* 所以需要通过入口模块index.js去加载其它的模块
* 所以require在这个入口模块index.js里面写
*
* */

require('./person.js');
console.log("hello");

/*
* 下面的步骤是将npmsets这个项目提交到github上面去
* 1、打开项目所在的盘,鼠标右键,Git Bash Here
* 2、输入 touch .gitignore (发现在项目下面生成一个.gitignore的文本文档,这个文件叫忽略文件,可以将需要忽略的文件夹的名字放在里面)
* 3、git init 初始化git
* 4、git add -A 把本地工作区中的文件全部添加到暂存区
*
*
* */