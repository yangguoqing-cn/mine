$(function(){
        $("#iphones").blur(function(){
                //判断手机号码
            var str=$("#iphones").val();
             var res= /^1\d{10}$/;
            if(!res.test(str)&&str!=""){
                 $(".please").css("display","none");
                  $(".please1").css("display","none");
                   $(".please2").css("display","block");
            }else if(str==""){
            	 $(".please").css("display","block");
                $(".please2").css("display","none");
                 $(".please1").css("display","none");
            }else{
            	 $(".please").css("display","none");
                $(".please1").css("display","block");
                 $(".please2").css("display","none");
            }
         })
         $(".regt").click(function(){
                //判断手机号码
            var str=$("#iphones").val();
             var res= /^1[3,4,5,7,8]\d{9}$/;
            if(!res.test(str)&&str!=""){
                 $(".please").css("display","none");
                  $(".please1").css("display","none");
                   $(".please2").css("display","block");
            }else if(str==""){
            	 $(".please").css("display","block");
                $(".please2").css("display","none");
                 $(".please1").css("display","none");
            }else{
            	 $(".please").css("display","none");
                $(".please1").css("display","block");
                 $(".please2").css("display","none");
            }
         })

         //判断手机验证码
         $("#pic-con").blur(function(){
                var str1=$("#pic-con").val();
                var res1=/^\d{4}$/;
                if(!res1.test(str1)){
                     $(".confir").css("display","block");
                     $(".confir1").css("display","none");
                }else{
                     $(".confir").css("display","none");
                      $(".confir1").css("display","block");
                }
         })
         $(".regt").click(function(){
                var str1=$("#pic-con").val();
                var res1=/^\d{4}$/;
                if(!res1.test(str1)){
                     $(".confir").css("display","block");
                     $(".confir1").css("display","none");
                }else{
                     $(".confir").css("display","none");
                      $(".confir1").css("display","block");
                }
         })
         //判断用户名的正则表达式
          $("#userBac").blur(function(){
                var str2=$("#userBac").val();
                var res2=/^[a-zA-Z0-9_]{4,16}$/ ;
                if(!res2.test(str2)&&str2!=""){
                     $(".userNa2").css("display","block");
                      $(".userNa1").css("display","none");
                       $(".userNa").css("display","none");
                }else if(str2==""){
                	$(".userNa2").css("display","none");
                     $(".userNa1").css("display","none");
                     $(".userNa").css("display","block");
                }else{
                	$(".userNa2").css("display","none");
                     $(".userNa").css("display","none");
                     $(".userNa1").css("display","block");
                }
         })
         $(".regt").click(function(){
                var str2=$("#userBac").val();
                var res2=/^[a-zA-Z0-9_]{4,16}$/ ;
                if(!res2.test(str2)&&str2!=""){
                     $(".userNa2").css("display","block");
                      $(".userNa1").css("display","none");
                       $(".userNa").css("display","none");
                }else if(str2==""){
                	$(".userNa2").css("display","none");
                     $(".userNa1").css("display","none");
                     $(".userNa").css("display","block");
                }else{
                	$(".userNa2").css("display","none");
                     $(".userNa").css("display","none");
                     $(".userNa1").css("display","block");
                }
         })
         //判断密码
          $("#mama").blur(function(){
                var str3=$("#mama").val();
                var res3=/^[\d\D]{8,20}$/;
                if(!res3.test(str3)&&str3!=""){
                     $(".pasddd2").css("display","block");
                     $(".pasddd1").css("display","none");
                      $(".pasddd").css("display","none");
                }else if(str3==""){
                	$(".pasddd2").css("display","none");
                     $(".pasddd1").css("display","none");
                      $(".pasddd").css("display","block");
                }else{
                	$(".pasddd2").css("display","none");
                     $(".pasddd").css("display","none");
                      $(".pasddd1").css("display","block");
                }
         })
         $(".regt").click(function(){
                var str3=$("#mama").val();
                var res3=/^[\d\D]{8,20}$/;
                if(!res3.test(str3)&&str3!=""){
                     $(".pasddd2").css("display","block");
                     $(".pasddd1").css("display","none");
                      $(".pasddd").css("display","none");
                }else if(str3==""){
                	$(".pasddd2").css("display","none");
                     $(".pasddd1").css("display","none");
                      $(".pasddd").css("display","block");
                }else{
                	$(".pasddd2").css("display","none");
                     $(".pasddd").css("display","none");
                      $(".pasddd1").css("display","block");
                }
         })
         //确认密码
         $("#confirs").blur(function(){
             if($("#mama").val()==$("#confirs").val()&&$("#mama").val()!=""){
               $(".surepas1").css("display","block");
                $(".surepas").css("display","none");
                $(".surepas2").css("display","none");
             }else if($("#mama").val()!=$("#confirs").val()&&$("#mama").val()!=""){
                $(".surepas1").css("display","none");
                $(".surepas").css("display","none");
                $(".surepas2").css("display","block");
                console.log($(".surepas").val());
             }else{
             	 $(".surepas").css("display","block");
                $(".surepas1").css("display","none");
                $(".surepas2").css("display","none");
             }
             // console.log($("#mama").val(),$("#confirs").val())
         })
          $(".regt").click(function(){
             if($("#mama").val()==$("#confirs").val()&&$("#mama").val()!=""){
               $(".surepas1").css("display","block");
                $(".surepas").css("display","none");
                $(".surepas2").css("display","none");
             }else if($("#mama").val()!=$("#confirs").val()&&$("#mama").val()!=""){
                $(".surepas1").css("display","none");
                $(".surepas").css("display","none");
                $(".surepas2").css("display","block");
                console.log($(".surepas").val());
             }else{
             	 $(".surepas").css("display","block");
                $(".surepas1").css("display","none");
                $(".surepas2").css("display","none");
             }
         })


          // 注册
        $(".regt").click(function(){
            var user=$("#userBac").val();
            var pass=$("#mama").val();
           $.ajax({
                    url:"http://datainfo.duapp.com/shopdata/userinfo.php",
                    data:{
                      	status:"register",
						userID:user,
                        password:pass
                    }
           })
           .then(function(res){
                    switch(res){
                       case "0":$(".errouser").html("用户名已存在");break;
                       case "1":$(".regt").html("注册成功正在跳转....").css("background","green");
                       setInterval(function(){
                       	 location.href="index.html";
                       },500);
                       
                      var str= JSON.stringify({"user":user,"password":pass});;
                       $.cookie("mingzi",str,{"expires":7,"path":"/"});
                       console.log($.cookie('mingzi'));
                       break;
                        default:$(".errosure   .erropa  .errouser .erroreil  .errorconfir  .erroripho").html("不能为空");
                   }

                })

        })

   })