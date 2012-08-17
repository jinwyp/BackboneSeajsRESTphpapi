Project for mordern RestFull Single Web App on Website and Mobile


# Include Framework 包含的库

1. PHP Framework CodeIgniter http://codeigniter.com/  https://github.com/CodeIgniter

2. CodeIgniter restserver library  CodeIgniter 的 Restfull 库 https://github.com/philsturgeon/codeigniter-restserver  在本项目的application/controllers/api/

3. Seajs a javascript Module Loader like requirejs. Seajs是一个用来加载和调度js文件的工具, 来至淘宝的lifesinger作者 https://github.com/seajs/seajs  http://seajs.org/docs/
在本项目中放到了 assets/m/js/lib/sea 下. 注意所有的常用的例如jQuery,backbone 等都需要修改才能使用,因为要符合CMD规范. lifesinger是个大好人已经帮我修改好了 都放到了assets/m/js/lib/seajs-modules下 而且可以到https://github.com/seajs/modules 去获取

4. Backbone 一个目前最流行的JS前端MVC框架. 带有Model, Collection, View, Router.  官方网站 http://backbonejs.org/  其中Router功能即路由功能, 就是控制url访问的页面.实际上Backbone的程序是一个单页面程序Web App. 已经没有了页面的概念.

5. jQuery Mobile 基于手机开发Web App的最流行的框架,丰富的UI组件 官方网站 http://jquerymobile.com/

6 其他: Less 用于更快捷书写CSS的JS库 官方网站 lesscss.org,  Twitter Bootstrap 一个CSS框架,带有Grid布局和丰富的UI组件库,方便开发网站  官方网站 http://twitter.github.com/bootstrap/
