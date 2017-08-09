$(function(){
    //普通用户和手机动态的切换
      $(".sjdl").click(function(){
            $(".spec-login").css("display","block")
            $(".nor-login").css("display","none")

      })
       $(".nord2").click(function(){
            $(".nor-login").css("display","block")
            $(".spec-login").css("display","none")
      })


      //用户的登录
      //获取用户输入的值
      $(".last").click(function(){
            var user=$(".iema-user").val();
            var pass=$(".pasjd").val();
            //请求数据
           $.ajax({
                    url:"http://datainfo.duapp.com/shopdata/userinfo.php",
                    data:{
                        status:"login",
                        userID:user,
                        password:pass
                    }
           })
           .then(function(res){
                    console.log(res);
                    switch(res){
                        case "0":$(".errouser").html("用户名已存在");break;
                        case "2":$(".errosure   .erropa  .errouser .erroreil  .errorconfir  .erroripho").html("不能为空");break;
                        default:$(".regt").html("注册成功正在跳转");
                         location.href="index.html";
                        break;

                   }
                })
      })
     
     
      /*$(".regt").click(function(){
            var user=$("#userBac").val();
            var pass=$("#mama").val();
           $.ajax({
                    url:"http://datainfo.duapp.com/shopdata/userinfo.php",
                    data:{
//                      status:"register",
						status:"login",
                        userID:user,
                        password:pass
                    }
           })
           .then(function(res){
                    switch(res){
                       case "0":$(".errouser").html("用户名已存在");break;
                       case "1":$(".regt").html("注册成功正在跳转....").css("background","green");
                        location.href="../html/shouye.html";
                      var str= JSON.stringify({"user":user,"password":pass})
                       $.cookie("mingzi",str,{"expires":7,"path":"/"})
                       break;
                        default:$(".errosure   .erropa  .errouser .erroreil  .errorconfir  .erroripho").html("不能为空");
                   }

                })

        })*/


})