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

// 登录
        $(".last").click(function(){
            var user=$(".iema-user").val();
            var pass=$(".pasjd").val();
           $.ajax({
                    url:"http://datainfo.duapp.com/shopdata/userinfo.php",
                    data:{
                      	status:"register",
						userID:user,
                        password:pass
                    }
           })
           .then(function(res){
          /* 	console.log("wwww");*/
           		console.log(res);
                    switch(res){
                       case "0":$(".please").css({"display":"block"}).siblings().css({"display":"none"});
/*                       console.log(0000000);*/
                       break;
                       case "2":$(".please1").css({"display":"block"}).siblings().css({"display":"none"});
                       break;
                        default$(".please").css({"display":"block"}).siblings().css({"display":"block"});
                   }

                })

        })
        
    
})