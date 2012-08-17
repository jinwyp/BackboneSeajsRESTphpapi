Project for mordern RestFull Single Web App on Website and Mobile


# Include Framework 包含的库

1. PHP Framework CodeIgniter http://codeigniter.com/  https://github.com/CodeIgniter

2. CodeIgniter restserver library  CodeIgniter 的 Restfull 库 https://github.com/philsturgeon/codeigniter-restserver  在本项目的application/controllers/api/

3. Seajs a javascript Module Loader like requirejs. Seajs是一个用来加载和调度js文件的工具, 来至淘宝的lifesinger作者 https://github.com/seajs/seajs  http://seajs.org/docs/
在本项目中放到了 assets/m/js/lib/sea 下. 注意所有的常用的例如jQuery,backbone 等都需要修改才能使用,因为要符合CMD规范. lifesinger是个大好人已经帮我修改好了 都放到了assets/m/js/lib/seajs-modules下 而且可以到https://github.com/seajs/modules 去获取

4. Backbone 一个目前最流行的JS前端MVC框架. 带有Model, Collection, View, Router.  官方网站 http://backbonejs.org/  其中Router功能即路由功能, 就是控制url访问的页面.实际上Backbone的程序是一个单页面程序Web App. 已经没有了页面的概念.

5. jQuery Mobile 基于手机开发Web App的最流行的框架,丰富的UI组件 官方网站 http://jquerymobile.com/

6. 其他: Less 用于更快捷书写CSS的JS库 官方网站 lesscss.org,  Twitter Bootstrap 一个CSS框架,带有Grid布局和丰富的UI组件库,方便开发网站  官方网站 http://twitter.github.com/bootstrap/


# Structure 结构说明

1. 程序的第一个入口为 通过CodeIgniter 调用第一个controllers 在application/controllers/welcome.php 文件. 然后在welcome.php调用第一个view文件在/application/views/mobile.php

2. mobile.php 基本为一个空壳文件, 通过引入seajs和一些基本css文件(包括jQuery Mobile的css文件jquery.mobile-1.1.0.min.css和自己的样式文件my.css) 实际上如果使用less做为css文件,那么大部分css都可以使用seajs来加载less样式文件.

3. mobile.php 通过<script 标签 引入 /assets/m/js/lib/sea/sea.js 库 然后调用第一个入口文件 assets/m/js/config.js文件.

4. 所有的前端页面在/assets/m/ 里面 其中js/lib/ 下的大部分原生库都是不需要用到的,因为加载的是assets/m/js/lib/seajs-modules改过的库. 在config.js文件中设置了很多alias别名,例如 'jquery': 'http://localhost:8080/assets/m/js/lib/seajs-modules/jquery/1.7.2/jquery.js', 方便以后在文件中不需要在输入超长的路径了.
同时在还调用了seajs的插件 	`preload: ['plugin-json', 'plugin-text', 'plugin-coffee', 'plugin-less'],` 可以方便解析json数据,文本数据(用来解析html模板文件), coffee的js语法, 和 less样式文件.
最后在config.js 调用了assets/m/js/init.js 真正的入口文件.` seajs.use('baseurl/js/init');` 注意:使用seajs需要把config配置放到init之前,否则seajs插件例如plugin-text 无法起到作用导致无法解析.tpl模板文件

5. 在init.js中 建立了符合CMD规范的格式文件. 同时引用了库,例如	var $ = jQuery = require('jquery');  此时$已经不是常规的jQuery的$,而是我们自行定义的变量. 为了和其他库兼容, 当然还是起个名字为$. 同样还有var Backbone和 underscore.

6. 在init.js中 开始调用Backbone的Router文件 同时引入了router文件assets/m/js/myapp/bbrouter.js 	var BBRouter = require('./myapp/bbrouter');  可以看到使用seajs可以很方便把一个js文件当作一个类引入,然后实例化一个变量.

7. 如果要做手机网站,同时使用jQuery Mobile和Backbone会出现一些问题. 因为jQuery Mobile本身也有路由功能,点击页面上链接都已经被jQuery Mobile拦截,而同时我们使用Backbone的Router做路由功能. 就会产生冲突. 这里要禁掉jQuery Mobile自带的路由功能. 从init.js文件中的$.extend($.mobile,  代码处开始

8. 同时使用jQuery Mobile和Backbone还有一个问题, jQuery Mobile本身会使用DOM injection 功能. 就是说你写一个<div data-role="header" >  jQuery Mobile 渲染后会生成的页面为<div  data-role="header" class="ui-header ui-bar-a" role="banner">  自动加上了很多属性. 但是使用seajs加载后,所有的html代码是通过backbone的view里面的模板加载的. 如果页面先执行了jQuery Mobile渲染,然后backbone插入页面,结果很多标签属性没有被jQuery Mobile加上.导致页面样式全乱了. 解决的方式是 在backbone的调用router之后引入jQuery Mobile.	代码为require('jqm');

9. 然后init.js就开始调用assets/m/js/myapp/bbrouter.js 工作了 所有的backbone相关的Model, Collection, View, Router 都放到了assets/m/js/myapp/

10. backbone具体怎么用就不介绍了. 那么在所有Model, Collection, View, Router 都要符合CMD 规范就是页面头部增加 define(function(require, exports, module) {

11. 在所有Model, Collection, View, Router 同时要引入库文件例如 var $ = jQuery = require('jquery');  还有要引入需要的model或view文件,例如	require('./model/usermodel');

12. 在View 会引入模板文件. 该项目使用的underscore内置的模板引擎. 所有的模板放到了assets/m/templates. 在view文件中使用以下代码即可 引入模板作为一个变量使用 var userloginTemplate = require('baseurl/templates/web/user/userlogin.tpl');

13. 基本就这些了, 项目中所有的html扩展名结尾的文件都是无用的. templates下web是做网站的模板, mobile是做手机的模板. 在bbrouter.js文件中项目首页和user/add页面 user/2页面是用户列表,添加,删除,修改的简单例子, 而user/login是使用了jQuery Mobile例子.数据调用Restful接口则在 Model文件assets / m / js / myapp / model / usermodel.js中,调用的接口地址为	urlRoot: "index.php/api/restful_user/user/id",
