# Project for mordern RESTful Single Web App on Website and Mobile
# 该项目是针对目前流行的单页面前端程序和后端RESTful接口模式的尝试, 可以作为同时快速开发网站和手机项目的框架
# [项目地址](http://www.fbair.net/ci/) http://www.fbair.net/ci/

## Include Framework  项目所用的框架和库 
(做个 hello world 要用这么框架, 框架时代真的来临了?  ... Meteor 秒杀之)

### BackEnd 后端框架
1. PHP Framework CodeIgniter [官方主页] (http://codeigniter.com/)  [github地址](https://github.com/CodeIgniter) CodeIgniter 是目前PHP最流行的开源快速开发框架之一, MVC结构, 但在我们项目中只提供RESTful数据接口服务. (CodeIgniter主页的那个动态流线上升效果太赞了, SVG的背景图把MacbookAir的风扇弄的嗷嗷叫)

2. CodeIgniter restserver library, CodeIgniter的一个提供RESTful库, [项目地址] (https://github.com/philsturgeon/codeigniter-restserver)  该库很好用,提供了GET/POST/PUT/DELETE 的四种标准方法, 在本项目的 application/controllers/api/ 路径下

### FrondEnd 前端框架
3. Seajs a javascript Module Loader, similar with Requirejs. Seajs是前端用来加载和调度js文件的框架, 符合CMD规范. 作者来至淘宝的lifesinger [官方主页](http://seajs.org/docs/) [github项目地址](https://github.com/seajs/seajs).
在本项目中放到了 assets/js/sea 路径下. 注意所有的静态文件,例如 图片,JS,HTML模板都在assets路径下, 
> 注意:常用的例如jQuery,backbone 等都需要修改才能使用,因为要符合CMD规范. lifesinger是个大好人已经帮我们修改好了 都放到了assets/js/sea/modules下  而且可以到 https://github.com/seajs/modules 去获取最新的版本.

4. Backbone 目前最流行的JS前端MVC框架,结构基本为 Model, Collection, View, Event, Router.  [官方网站] (http://backbonejs.org/)  其中Router功能即路由功能, 就是控制url访问的页面.实际上Backbone的程序是一个单页面程序Web App. 已经没有了传统页面的概念, 前端JS负责页面切换,而不再由后端的Controller负责页面调度.

5. jQuery Mobile 基于手机开发Web App的最流行的框架,丰富的UI组件 官方网站 http://jquerymobile.com/

6. 其他: Less 用于更快捷书写CSS的JS库 官方网站 lesscss.org,  Twitter Bootstrap 一个CSS框架,带有Grid布局和丰富的UI组件库,方便开发网站  官方网站 http://twitter.github.com/bootstrap/


## Structure 结构说明

1. 程序的第一个入口为 通过CodeIgniter 调用第一个controllers 在application/controllers/welcome.php 文件. 然后在该页面判断是否是手机浏览器 根据UserAgent判断跳转到view文件 手机的在/application/views/mobile.php 网站的是website.php

2. website.php和 mobile.php 基本为一个空壳index文件, 通过引入seajs和一些基本css文件(包括jQuery Mobile的css文件jquery.mobile-1.1.0.min.css和自己的样式文件my.css) 实际上如果使用less做为css文件,那么大部分css都可以使用seajs来加载less样式文件.

3. website.php 和 mobile.php 通过<script 标签 引入 /assets/m/js/lib/sea/sea.js 库 然后调用第一个入口文件 assets/m/js/config.js文件.

4. 所有的前端页面在/assets/m/ 里面 其中js/lib/ 下的大部分原生库都是不需要用到的,因为加载的是assets/m/js/lib/seajs-modules改过的库. 在config.js文件中设置了很多alias别名,例如 'jquery': 'http://localhost:8080/assets/m/js/lib/seajs-modules/jquery/1.7.2/jquery.js', 方便以后在文件中不需要在输入超长的路径了.
同时在还调用了seajs的插件 	`preload: ['plugin-json', 'plugin-text', 'plugin-coffee', 'plugin-less'],` 可以方便解析json数据,文本数据(用来解析html模板文件), coffee的js语法, 和 less样式文件.
最后在config.js 调用了assets/m/js/init.js 真正的入口文件.` seajs.use('baseurl/js/init');` 注意:使用seajs需要把config配置放到init之前,否则seajs插件例如plugin-text 无法起到作用导致无法解析.tpl模板文件

5. 在init.js中 建立了符合CMD规范的格式文件. 同时引用了库,例如 `var $ = jQuery = require('jquery');`  此时$已经不是常规的jQuery的$,而是我们自行定义的变量. 为了和其他库兼容, 当然还是起个名字为$. 同样还有var Backbone和 underscore.

6. 在init.js中 开始调用Backbone的Router文件 同时引入了router文件assets/m/js/myapp/bbrouter.js 	`var BBRouter = require('./myapp/bbrouter');`  可以看到使用seajs可以很方便把一个js文件当作一个类引入,然后实例化一个变量.

7. 如果要做手机网站,同时使用jQuery Mobile和Backbone会出现一些问题. 因为jQuery Mobile本身也有路由功能,点击页面上链接都已经被jQuery Mobile拦截,而同时我们使用Backbone的Router做路由功能. 就会产生冲突. 这里要禁掉jQuery Mobile自带的路由功能. 从init.js文件中的$.extend($.mobile,  代码处开始

8. 同时使用jQuery Mobile和Backbone还有一个问题, jQuery Mobile本身会使用DOM injection 功能. 就是说你写一个`<div data-role="header" >`  jQuery Mobile 渲染后会生成的页面为`<div  data-role="header" class="ui-header ui-bar-a" role="banner">`  自动加上了很多属性. 但是使用seajs加载后,所有的html代码是通过backbone的view里面的模板加载的. 如果页面先执行了jQuery Mobile渲染,然后backbone插入页面,结果很多标签属性没有被jQuery Mobile加上.导致页面样式全乱了. 解决的方式是 在backbone的调用router之后引入jQuery Mobile.	代码为require('jqm');

9. 然后init.js就开始调用assets/m/js/myapp/bbrouter.js 工作了 所有的backbone相关的Model, Collection, View, Router 都放到了assets/m/js/myapp/

10. backbone具体怎么用就不介绍了. 那么在所有Model, Collection, View, Router 都要符合CMD 规范就是页面头部增加 `define(function(require, exports, module) {`

11. 在所有Model, Collection, View, Router 同时要引入库文件例如 ` var $ = jQuery = require('jquery');`  还有要引入需要的model或view文件,例如	`require('./model/usermodel');`

12. 在View 会引入模板文件. 该项目使用的underscore内置的模板引擎. 所有的模板放到了assets/m/templates. 在view文件中使用以下代码即可 引入模板作为一个变量使用 `var userloginTemplate = require('baseurl/templates/web/user/userlogin.tpl');`

13. 在bbrouter.js文件中项目 首页和user/add页面, user/2页面是用户列表,添加,删除,修改的简单例子, 而user/login是使用了jQuery Mobile例子.

14. 数据调用Restful接口则在 Model文件assets/m/js/myapp/model/usermodel.js中,调用的接口地址为 `urlRoot: "index.php/api/restful_user/user/id",` PHP restful接口文件文件为application / controllers / api / restful_user.php 同时使用了mysql数据库, 很多简单的一个user表.字段与backbone的usermodel模型一样. 具体可以去看application/config/database.php数据库设置和 model文件application/models/model_user.php

15. 基本就这些了, 项目中所有的html扩展名结尾的文件都是无用的. templates下web是做网站的模板, mobile是做手机的模板.
