 $(function(){
      // 显示隐藏
        $(".e-dog").mouseover(function(){
             $(".showOrder").show();
        });
        $(".e-dog").mouseout(function(){
              $(".showOrder").hide();
        });
        $(".collect").mouseover(function(){
              $(".collectShow").show();
        });
         $(".collect").mouseout(function(){
              $(".collectShow").hide();
        });
         $(".search").mouseover(function(){
             $(".search").css("boxShadow","0 0 8px rgba(0,0,0,0.3)"
                )
         })
          $(".search").mouseout(function(){
             $(".search").css("boxShadow","0 0 8px rgba(0,0,0,0)"
                )
         })

          $(".dog").mouseover(function(){
             $(".dogShow").css("display","block")
             $(".shopClas").css("display","none")
         })
          $(".dog").mouseout(function(){
             $(".dogShow").css("display","block")
             $(".shopClas").css("display","none")
         })
          $(".shop").mouseover(function(){
             $(".shopClas ").css("display","block")
             $(".dogShow").css("display","none")
         })
         $(".shop").mouseout(function(){
             $(".shopClas ").css("display","block")
             $(".dogShow").css("display","none")
         })
          $(".eat").mouseover(function(){
             $(".develTu").css("display","block")
         })
         $(".eat").mouseout(function(){
             $(".develTu").css("display","none");
          })
     //轮播图
     var $banner = $("#banner");
        var $imgLi=$(".slideshow>li");
        // 定义一个变量, 含义是当前播到第几张
        var index=0;
        //写一个主控函数, 控制第几张
        letsShow();
        function  carousel(){
          index++;
          if(index>=$imgLi.size()){
              index=0;
          }
          letsShow();
          setNav();
        }
        var timer = setInterval(carousel, 6000);
        function letsShow(){
          switch(index){
            case 0: $banner.css({background:"red"});break;
            case 1: $banner.css({background:"yellow"});break;
            case 2: $banner.css({background:"blue"});break;
            case 3: $banner.css({background:"purple"});break;
            case 4: $banner.css({background:"black"});break;
            case 5: $banner.css({background:"red"});break;
          }
          $imgLi.eq(index).stop().fadeIn(500)
          .children("img").css({
              transition:"6s",
              transform: "scale(1)"
          }).parent()
          .siblings().stop().fadeOut(500)
          .children("img").css({
              "transition-delay":"1s",
              transform: "scale(1.05)"
          });
        }
        function setNav(){
           $(".number li").eq(index).addClass('select').siblings().removeClass('select');
          }

          $(".number li").click(function(){
              clearInterval(timer);
              index = $(this).index();
              letsShow();
              setNav();
              timer = setInterval(carousel, 3000);
          })
     //ajax获取数据
     $.get("../json/test.json")
     .then(function(res){
    //第一次获取数据
         $(".cimg img").each(function(index){
              $(this).attr("src",res.res[0].shop1[index].path);
         })
          $(".word").each(function(index){
                $(this).html(res.res[0].shop1[index].message);
          })
          $(".price .now").each(function(index){
                 $(this).html(res.res[0].shop1[index].pric);
          })
          $(".price .old").each(function(index){
                 $(this).html(res.res[0].shop1[index].old);
          })

        var shops = res.res[0];
          $(".menu-box  li").each(function(){
              $(this).mouseover(function(){
            //记录当前移入的li的下标
              var index=$(this).index();
              //遍历获取shops的对象，选出对应的shop
              var nowShop = shops["shop" +(index+1)];
          //遍历下边显示图片的li,添加src属性
              $(".cimg img").each(function (index){
                  $(this).attr("src",nowShop[index].path)
              })
          //遍历添加下面的文字
             $(".word").each(function(index){
                $(this).html(nowShop[index].message);
            })
          //遍历价格
          $(".price .now").each(function(index){
                 $(this).html(nowShop[index].pric);
          })
          //遍历旧价格
           $(".price .old").each(function(index){
                 $(this).html(nowShop[index].old);
          })
          })
        })
    //第二次获取数据,获得所有的pic*
      var pics = res.res[1];
      $(".dogfoods").each(function(){
          var index = $(this).index();
          var nowPic = pics["pic"+index];
              $(this).find(".listgoods  li").each(function(index){
                  $(this).find("img").attr("src",nowPic[0][index].path);
              })
                $(this).find(".listgoods  li").each(function(index){
                  $(this).find(".conte").html(nowPic[0][index].message);
              })
                 $(this).find(".listgoods  li").each(function(index){
                  $(this).find(".pic p").html(nowPic[0][index].pric);
              })
        })
      $(".dogfoods").each(function(){
        //记录当前的大div的下标:1,2,3,4
        var index = $(this).index();
        var that = this;
        //得出当前需要加载的所有li的图片集合
        var nowPic = pics["pic"+index];//pic1:[[{},{},{}....共8张图片],[],[],[],[]]
        // console.log(nowPic);
        //遍历当前大div下面的导航条li，添加鼠标移入事件
        $(that).find(".nav-list li").mouseover(function(){

            //记录当前的移入的li的下标，以便获取相应下标nowPic[index]下的一组图片
            var index = $(this).index();
            //当前需要加载的图片列表
            var imgList = nowPic[index];
            $(that).find(".pic img").each(function(index){
                $(this).attr("src",imgList[index].path)
            })
            $(that).find(".conte").each(function(){
                 $(this).html(imgList[index].message)
            })
             $(that).find(".pic p").each(function(){
                 $(this).html(imgList[index].pric)
            })
        })
      })
      })
   })

  //无缝滚动
  $(function(){
      var lis = $('.choice .choice-things');
        for(var i = 0; i < lis.length; i++){
          lis[i].style.left = 201 * i + "px";
        }
      var index = 0;

      $(".leftArrow").click(function(){
          if(index==0){
             index=0;
          }else{
              index++;
          }
          $(".choice").animate({left:201*index});
      })
      $(".rightArrow").click(function(){
          if(index==-3){
            index==-3
          }else{
              index--;
          }
          $(".choice").animate({left:201*index});
      })
    //鼠标划过显示图片
    $(".time-menu .menu-box  .nine").mouseover(function(){
            $(".choice").show();
    })



     //上下轮播
     //获取要上下轮播的对象
     var  $xlis=$("#edogHead .conul  ul li ");
     // for(var i=0;i<$xlis.length;i++){
     //
     // }
     //定义一个变量记录当前播到第几张
     var index1=0;
      function carousel(){
         index1++;
        if(index1==$xlis.size()-1){
             index1=0;
        }
        letsShow();
      }
      setInterval(carousel,1000)
      function letsShow(){
        if(index1==0){
              $("#edogHead .conul ul").css({top:-152*index1});
              index1++;
        }
         $("#edogHead .conul ul").animate({top:-152*index1});
      }




    //下面的自动的轮播
      var $zlis=$(".praise-left");
      for(var i=0;i<$zlis.length;i++){
          $zlis[i].style.left=950*i+"px";
      }
      var   index2=0;
      function  swiper(){
           index2++;
           if(index2==$zlis.size()-1){
                index2=0;
           }
           goshow();
           setNav1();
      }
      var timer1=setInterval(swiper,1000)
      function goshow(){
         if(index2==0){
              $(".prais-inset").css({left:-950*index2});
              index2++;
        }
         $(".prais-inset").animate({
              left:-950*index2
         })
      }
      function setNav1(){
          $(".circle-bot  span").eq(index2).addClass('anim').siblings().removeClass('anim');

          $(".circle-bot  span").mouseover(function(){
             clearInterval(timer1);
             index2=$(this).index();
              goshow();
              setNav1();
               timer1=setInterval(swiper, 1000);
          })
      }

      // 遮罩层
           $(".scroll-one").mouseover(function(){
              $(this).find(".xian").stop().animate({
                  top:0
            },500)
        })
            $(".scroll-one").mouseout(function(){
              $(this).find(".xian").stop().animate({
                  top:80
            },500)
        })

            //接受cookie
          var res= $.cookie('mingzi');
           res=res?res:"{}";
           res=JSON.parse(res);
           if(res){
               $(".log").html(res.user);
               $(".regs a").html("退出").attr("href","login.html").click(function(){
                     $.cookie('mingzi',"",{"expires":-1,"path":"/"})
               });
           }else{
               $(".log a").html("登录").attr("href","login.html");
               $(".regs a").html("注册").attr("href","register.html");
           }

     // 点击图片跳转
     $(".listgoods li").click(function(){
          location.href="../html/details.html?id=53";
     })

  });



