$(function(){
			/*轮播图效果*/
			
			

		function lunbo(){ 
			var i=0;
			$(".imp .suprise .fri .time-proc .timeproright").on("click",function(){
			 	if(i<1){
				i=0;
				}
        	i++;
			var x=211;
			if(i<$(".imp .suprise .fri .time-proc .sh li").length){
				if(i>7){
				i=7;
			}
				console.log($(".imp .suprise .fri .time-proc .sh li").length);

				$(".imp .suprise .fri .time-proc .sh").stop().animate({"left":-i*x},600);
				}
			
				});
				
				
			
			$(".imp .suprise .fri .time-proc .timeproleft").on("click",function(){
        	/*i--;*/
        	var x=211;
			if(i>0){
				i--;

				$(".imp .suprise .fri .time-proc .sh").stop().animate({"left":-i*x},600);
				
				
				}
			});
		}
			 
			
			//     time-proc部分鼠标移动变化商品信息
			 $(".imp .suprise .suprise-img").mouseover(function(){
        	
        	$(this).find("img").stop().animate({"top":"-10px"},200);
        });/*图片向上移动*/
        
			 $(".imp .suprise .r1").mouseover(function(){
        	
        	$(".imp .suprise .time-proc .proc1").css({"display":"block"}).siblings().css({"display":"none"});
        });
      
        
         $(".imp .suprise .time-menu .r2").mouseover(function(){
         	/*i=0;*/
        	lunbo();
        	$(".imp .suprise .time-proc .proc2").css({"display":"block"}).siblings().css({"display":"none"});
        });
        $(".imp .suprise .time-menu .r3").mouseover(function(){
        	
        	lunbo();
        	
        	$(".imp .suprise .time-proc .proc3").css({"display":"block"}).siblings().css({"display":"none"});
        });
        $(".imp .suprise .time-menu .r4").mouseover(function(){
        	
        	lunbo();
        	
        	$(".imp .suprise .time-proc .proc4").css({"display":"block"}).siblings().css({"display":"none"});
        });
        $(".imp .suprise .time-menu .r5").mouseover(function(){
        	
        	lunbo();
        	
        	$(".imp .suprise .time-proc .proc5").css({"display":"block"}).siblings().css({"display":"none"});
        });
        $(".imp .suprise .time-menu .r6").mouseover(function(){
        	
        	lunbo();
        	
        	$(".imp .suprise .time-proc .proc6").css({"display":"block"}).siblings().css({"display":"none"});
        });
        $(".imp .suprise .time-menu .r7").mouseover(function(){
        	
        	lunbo();
        	
        	$(".imp .suprise .time-proc .proc7").css({"display":"block"}).siblings().css({"display":"none"});
        });
       
       /*epetfood-pro部分图片变化*/
      	$(".ff0  .lib_conbox ul li").mouseover(function(){
        	$(this).find("img").stop().animate({"top":"-5px"},200);
        });
        
        $(".ff0  .lib_conbox ul li").mouseleave(function(){
        	$(this).find("img").stop().animate({"top":"5px"},200);
        });
        
        $(".ff1  .lib_conbox ul li").mouseover(function(){
        	$(this).find("img").stop().animate({"top":"-5px"},200);
        });
        
        $(".ff1  .lib_conbox ul li").mouseleave(function(){
        	$(this).find("img").stop().animate({"top":"5px"},200);
        });
        
        $(".ff2  .lib_conbox ul li").mouseover(function(){
        	$(this).find("img").stop().animate({"top":"-5px"},200);
        });
        
        $(".ff2  .lib_conbox ul li").mouseleave(function(){
        	$(this).find("img").stop().animate({"top":"5px"},200);
        });
        $(".ff3  .lib_conbox ul li").mouseover(function(){
        	$(this).find("img").stop().animate({"top":"-5px"},200);
        });
        
        $(".ff3  .lib_conbox ul li").mouseleave(function(){
        	$(this).find("img").stop().animate({"top":"5px"},200);
        });
        $(".ff4  .lib_conbox ul li").mouseover(function(){
        	$(this).find("img").stop().animate({"top":"-5px"},200);
        });
        
        $(".ff4  .lib_conbox ul li").mouseleave(function(){
        	$(this).find("img").stop().animate({"top":"5px"},200);
        });
        $(".ff5  .lib_conbox ul li").mouseover(function(){
        	$(this).find("img").stop().animate({"top":"-5px"},200);
        });
        
        $(".ff5  .lib_conbox ul li").mouseleave(function(){
        	$(this).find("img").stop().animate({"top":"5px"},200);
        });
        $(".ff6  .lib_conbox ul li").mouseover(function(){
        	$(this).find("img").stop().animate({"top":"-5px"},200);
        });
        
        $(".ff6  .lib_conbox ul li").mouseleave(function(){
        	$(this).find("img").stop().animate({"top":"5px"},200);
        });
        /*图片向上移动*/
       
       	$(".ff0 .clearfix .lib-menu ul #one1").mouseover(function(){
        	$(".ff0 .lib_conbox #con_one_1").css({"display":"block"}).siblings().css({"display":"none"});
        });
      
        $(".ff0 .clearfix .lib-menu ul #one2").mouseover(function(){
         	$(".ff0 .lib_conbox #con_one_2").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
         $(".ff0 .clearfix .lib-menu ul #one3").mouseover(function(){
         	$(".ff0 .lib_conbox #con_one_3").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
         $(".ff0 .clearfix .lib-menu ul #one4").mouseover(function(){
         	$(".ff0 .lib_conbox #con_one_4").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
         $(".ff0 .clearfix .lib-menu ul #one5").mouseover(function(){
         	$(".ff0 .lib_conbox #con_one_5").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
        
        $(".ff1 .clearfix .lib-menu ul #one1").mouseover(function(){
        	$(".ff1 .lib_conbox #con_one_1").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
      	$(".ff1 .clearfix .lib-menu ul #one2").mouseover(function(){
         	$(".ff1 .lib_conbox #con_one_2").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
        $(".ff1 .clearfix .lib-menu ul #one3").mouseover(function(){
         	$(".ff1 .lib_conbox #con_one_3").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
        $(".ff1 .clearfix .lib-menu ul #one4").mouseover(function(){
         	$(".ff1 .lib_conbox #con_one_4").css({"display":"block"}).siblings().css({"display":"none"});
        });
        $(".ff1 .clearfix .lib-menu ul #one5").mouseover(function(){
         	$(".ff1 .lib_conbox #con_one_5").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
        
    	$(".ff2 .clearfix .lib-menu ul #one1").mouseover(function(){
        	$(".ff2 .lib_conbox #con_one_1").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
      	$(".ff2 .clearfix .lib-menu ul #one2").mouseover(function(){
         	$(".ff2 .lib_conbox #con_one_2").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
        $(".ff2 .clearfix .lib-menu ul #one3").mouseover(function(){
         	$(".ff2 .lib_conbox #con_one_3").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
        $(".ff2 .clearfix .lib-menu ul #one4").mouseover(function(){
         	$(".ff2 .lib_conbox #con_one_4").css({"display":"block"}).siblings().css({"display":"none"});
        });
        $(".ff2 .clearfix .lib-menu ul #one5").mouseover(function(){
         	$(".ff2 .lib_conbox #con_one_5").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
         $(".ff3 .clearfix .lib-menu ul #one1").mouseover(function(){
        	$(".ff3 .lib_conbox #con_one_1").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
      	$(".ff3 .clearfix .lib-menu ul #one2").mouseover(function(){
         	$(".ff3 .lib_conbox #con_one_2").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
        $(".ff3 .clearfix .lib-menu ul #one3").mouseover(function(){
         	$(".ff3 .lib_conbox #con_one_3").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
        $(".ff3 .clearfix .lib-menu ul #one4").mouseover(function(){
         	$(".ff3 .lib_conbox #con_one_4").css({"display":"block"}).siblings().css({"display":"none"});
        });
        $(".ff3 .clearfix .lib-menu ul #one5").mouseover(function(){
         	$(".ff3 .lib_conbox #con_one_5").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
         $(".ff4 .clearfix .lib-menu ul #one1").mouseover(function(){
        	$(".ff4 .lib_conbox #con_one_1").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
      	$(".ff4 .clearfix .lib-menu ul #one2").mouseover(function(){
         	$(".ff4 .lib_conbox #con_one_2").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
        $(".ff4 .clearfix .lib-menu ul #one3").mouseover(function(){
         	$(".ff4 .lib_conbox #con_one_3").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
        $(".ff4 .clearfix .lib-menu ul #one4").mouseover(function(){
         	$(".ff4 .lib_conbox #con_one_4").css({"display":"block"}).siblings().css({"display":"none"});
        });
        $(".ff4 .clearfix .lib-menu ul #one5").mouseover(function(){
         	$(".ff4 .lib_conbox #con_one_5").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
         $(".ff5 .clearfix .lib-menu ul #one1").mouseover(function(){
        	$(".ff5 .lib_conbox #con_one_1").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
      	$(".ff5 .clearfix .lib-menu ul #one2").mouseover(function(){
         	$(".ff5 .lib_conbox #con_one_2").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
        $(".ff5 .clearfix .lib-menu ul #one3").mouseover(function(){
         	$(".ff5.lib_conbox #con_one_3").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
        $(".ff5 .clearfix .lib-menu ul #one4").mouseover(function(){
         	$(".ff5 .lib_conbox #con_one_4").css({"display":"block"}).siblings().css({"display":"none"});
        });
        $(".ff5 .clearfix .lib-menu ul #one5").mouseover(function(){
         	$(".ff5 .lib_conbox #con_one_5").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
         $(".ff6 .clearfix .lib-menu ul #one1").mouseover(function(){
        	$(".ff6 .lib_conbox #con_one_1").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
      	$(".ff6 .clearfix .lib-menu ul #one2").mouseover(function(){
         	$(".ff6 .lib_conbox #con_one_2").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
        $(".ff6 .clearfix .lib-menu ul #one3").mouseover(function(){
         	$(".ff6 .lib_conbox #con_one_3").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
        $(".ff6 .clearfix .lib-menu ul #one4").mouseover(function(){
         	$(".ff6 .lib_conbox #con_one_4").css({"display":"block"}).siblings().css({"display":"none"});
        });
        $(".ff6 .clearfix .lib-menu ul #one5").mouseover(function(){
         	$(".ff6 .lib_conbox #con_one_5").css({"display":"block"}).siblings().css({"display":"none"});
        });
        
      //上下轮播
     //获取要上下轮播的对象  
        var  $xlis=$("#edogHead .conul  ul li");
   //定义一个变量记录当前播到第几张
     var index1=0;
      function carousel(){
         index1++;
        if(index1==$xlis.size()-1){
             index1=0;
        }
        letsShow();
      }
      setInterval(carousel,2000);
      function letsShow(){
        if(index1==0){
              $("#edogHead .conul ul").css({top:-152*index1});
              index1++;
        }
         $("#edogHead .conul ul").animate({top:-152*index1},600);
      }
      
      });
		  