# electron-react

> react + ts + webpack搭建electron项目

> 依赖安装 `npm install`

> 开发环境启动命令 `npm run start`

> 打包
  - webpack 打包 `npm run build`
  - electron 打包生成可执行文件 `npm run ele:pack`


|       包名        |   版本  |    作用     |
|    -----         | :----:  |   :----:   |
| electron         | ^9.2.1  | electron库 |
| electron-builder | ^22.8.0 | 打包库      |
| electron-is-dev  | 2.0.0   | 环境库      |
| react            | ^17.0.2 | 框架        |
| antd             | ^4.16.7 | UI框架      |
| typescript       | ^4.3.5  | TS         |


> `wait-on`
是一个跨平台的命令行实用程序，它将`等待`文件、端口、套接字和 http(s) 资源变为`可用`。功能也可通过 Node.js API 获得。跨平台 - 在 Node.js 运行的任何地方运行（linux、unix、mac OS X、windows）

> Concurrently 同时运行多个命令。



* 现象：在Electron项目升级了打包工具后打包失败：

`
  Cannot find module 'fs/promises'
`

* 原因：经过排查发现package.json和package-lock.json里打包工具版本不一致

* 解决方法：
重新安装指定版本的打包工具来更新package-lock.json对应的版本

npm install electron-builder@22.8.0 --save