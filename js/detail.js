$(function(){
    $(".dogs-name").mouseenter(function(){
        $(this).children("ul").css("display","block")
    })
     $(".dogs-name").mouseleave(function(){
        $(this).children("ul").css("display","none")
    })
    //放大镜
    //移动的块
    var span= $(".dajt  span");
    //大图
    var daTu=$(".da-dajt li");
    //移入的框
    var xTuz=$(".sch");
    //鼠标移入框
    $(xTuz).mouseenter(function(){
        $(span).stop().fadeIn();
        $(daTu).stop().fadeIn();
        $(".da-dajt").css("display","block")
    })
    //鼠标移出框
    $(xTuz).mouseleave(function(){
        $(span).stop().fadeOut();
        $(daTu).stop().fadeOut();
    })
    //鼠标在框内移动
      $(xTuz).mousemove(function(e){
           var evt=e||window.event;
           //获得移动的块相对于移动的框的位置
           // console.log($(xTuz).offset().left);
           var moveL=evt.pageX-$(xTuz).offset().left-$(span).width()/2;
            var moveT=evt.pageY-$(xTuz).offset().top-$(span).height()/2;
            //计算移动的块的最大的位置
            var maxL=$(xTuz).width()-$(span).width();
            var maxT=$(xTuz).height()-$(span).height();
            //限制移动的范围
             if(moveL<=0){
                  moveL = 0;
             }else if(moveL >= maxL){
                  moveL = maxL;
             }
             if(moveT <= 0){
                 moveT = 0;
             }else if(moveT >= maxT){
                moveT = maxT;
             }
             if(moveT <= 0){
                moveT = 0;
             }else if(moveT >= maxT){
                moveT = maxT;
             }
             //小块移动的范围
             $(span).css({
                left:moveL,
                top:moveT
             })
            //大图片对应运动
            $(daTu).css({
                left:-moveL*2.57,
                top:-moveT*2.57
            })
      })


      //点击下面的小图出现上面的大图
      var $clk=$(".sujt li")
      // for(var i=0;i<$clk.size();i++){
         $(".sujt li").mouseenter(function(){
            // var  counts=$(this).index();
           $(".dajt li img").attr("src",$(this).children().attr("src"));
          $(".da-dajt li img").attr("src",$(this).children().attr("src"));
        // })
    });


         // 点击数量加加
        $(".jia").click(function(){
              var tim=+$(".tex2").val();
               tim++;
              $(".tex2").val(tim);
        })
           $(".jian").click(function(){
              var tim=+$(".tex2").val();
               tim--;
               if(tim==0){
                  return false;
               }
              $(".tex2").val(tim);
        })


          
            //侧边栏
           $(window).scroll( function() {
                $(".hd-top").css({
                    "display":"block"
                })
            });
              $(".hd-top").click(function(){
                      $(window).scrollTop(0)
            })

             

              // 加入购物车
              $(".jrgwc").click(function(){

                     //获取商品的价格图片等信息。
                   var goodsn=$(".goods-rigt h3").html();
                   var  tu=$(".sujt li").eq(0).children("img").attr("src");
                   var pri=$(".seven-f").text();
                   var obj={
                      "message":goodsn,
                      "pic":tu,
                      "money":pri
                   }
                  var str= JSON.stringify(obj);
                  //存cookie
                  $.cookie("cart",str,{"expires":14,"path":"/"})

                 location.href="../shop-cart.html";
            })

})
