jQuery("#frmLogin").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 6,
            maxlength: 20
        }
    },

    messages: {
        email: {
            required: "请输入Email地址",
            email: "请输入正确的email地址"
        },
        password: {
            required: "请输入密码",
            minlength: jQuery.validator.format("密码不能小于{0}个字符"),
            maxlength: jQuery.validator.format("密码不能最多超过{0}的字符")
        }
    }
});

jQuery("#frmReg").validate({
    errorElement:"span",
    rules:{
        email:{
            required:true,
            email:true
        },
        password:{
            required:true,
            minlength:6,
            maxlength:20
        },
        confirm_password:{
            required:true,
            minlength:6,
            maxlength:20,
            equalTo:"#password"
        },
        mobile:{
            required:true,
            number:true},
			
        checkbox_agree:{
            required:true
            }
    },

    messages:{
        email:{
            required:"请输入Email地址",
            email:"请输入正确的email地址"
        },
        password:{
            required:"请输入密码",
            minlength:jQuery.validator.format("密码不能小于{0}个字符"),
            maxlength:jQuery.validator.format("密码不能最多超过{0}的字符")
        },
        confirm_password:{
            minlength:jQuery.validator.format("确认密码不能小于{0}个字符"),
            required:"请输入确认密码",
            maxlength:jQuery.validator.format("密码不能最多超过{0}的字符"),
            equalTo:"两次输入密码不一致"
        },
        mobile:{
            required:"请输入手机号",
            number:"请输入有效的手机号码"

        },
        checkbox_agree:{
            required:"您还没有同意母婴之家”注册条款“！"

        },
        year:{
            required:"请您填写宝宝生日或预产期"

        },
        month:{
            required:"请您填写宝宝生日或预产期"

        },
        day:{
             required:"请您填写宝宝生日或预产期"

    }
     },
    groups: {
           username: "year month day"
       },
   errorPlacement: function (error, element) {
           if (element.attr("name") == "year" || element.attr("name") == "month" || element.attr("name") == "day")
                    error.appendTo("div.error");
              else
              error.insertAfter(element);
}

});



