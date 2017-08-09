/*轮播图效果*/
(function($, undefined) {
	$.fn.slider = function(opts) {
		var defaults = {
			width: 760,
			height: 360,
			direction: "left",
			interval: 3000,
			showNav: false,
			showBtns: false
		};
		var options = $.extend(true, {}, defaults, opts);

		function Slider(options) {
			this.ele = $("#sliderBox");
			this.lists = $("#sliderList");
			this.nav = $("#sliderNav");
			this.btns = $("#sliderBtns");
			this.lists.find("li").eq(0).clone(true).appendTo(this.lists);
			this.list = this.lists.find("li");
			this.ele.css({
				"width": options.width,
				"height": options.height
			});
			this.list.css({
				"width": options.width,
				"height": options.height
			});
			this.list.find("img").css({
				"width": options.width,
				"height": options.height
			});
			this.btns.find(".btn").css("top", ((options.height / 2) - 20));

			switch(options.direction) {
				case "top":
					this.topBottom();
					break;
				default:
					this.leftRight();
			}
			if(options.showNav) {
				this.nav.show();
			}
			if(options.showBtns) {
				this.btns.show();
			}
		}
		Slider.prototype.leftRight = function() {
			this.lists.css({
				"width": options.width * this.list.length,
				"height": options.height
			});
			this.list.css("float", "left");
			this.timer = setInterval(move, options.interval);
			var _this = this;
			var index = 0;

			function move() {
				index++;
				if(index == _this.list.length) {
					index = 1;
					_this.lists.css("left", 0);
				}
				if(index == _this.list.length - 1) {
					_this.nav.find("li").eq(0).addClass("hover").siblings().removeClass("hover");

				} else {
					_this.nav.find("li").eq(index).addClass("hover").siblings().removeClass("hover");
				}
				
				_this.lists.stop().animate({"left": -index * options.width},1000,function(){
					/*_this.lists.find("li").eq(index).stop().animate({"width":750,"height":350},1000);*/
				});
				
			}

			function jump() {
				index++;
				if(index == _this.list.length) {
					index = 1;
					_this.lists.css("left", 0);
				}
				if(index == _this.list.length - 1) {
					_this.nav.find("li").eq(0).addClass("hover").siblings().removeClass("hover");

				} else {
					_this.nav.find("li").eq(index).addClass("hover").siblings().removeClass("hover");
				}
//				_this.lists.css({"left": -index * options.width}).find("img").stop().animate({"width": 700,"height": 300},500);
				_this.lists.css({"left": -index * options.width});
			

			}

			this.nav.find("li").hover(function() {
				clearInterval(_this.timer);
				index = $(this).index() - 1;
				jump();
			}, function() {
				_this.timer = setInterval(move, 3000);
			});

			this.btns.find(".btn").eq(0).click(function() {
				clearInterval(_this.timer);
				move();
				_this.timer = setInterval(move, 3000);
			})
			this.btns.find(".btn").eq(1).click(function() {
				clearInterval(_this.timer);
				//							console.log(index);
				if(index == 0) {
					index = _this.list.length - 3;
					/*_this.lists.css("left",(-(_this.list.length-1))*options.width);*/
					_this.lists.css({
						"left": (-(_this.list.length - 1)) * options.width
					}, 500);
				} else {
					index = index - 2;
				}
				move();
				_this.timer = setInterval(move, 3000);
			})

		}
		/*Slider.prototype.topBottom = function(){
			
		}*/

		new Slider(options);
		return this;
	}

	$(".bgwhite").mouseover(function() {
		$(".place-hide").show();
	});
	$(".bgwhite").mouseleave(function() {
		$(".place-hide").hide();
	});
	$(".place-hide").mouseover(function() {
		$(".place-hide").show();
	});
	$(".place-hide").mouseleave(function() {
		$(".place-hide").hide();
	})

	$(".headerTopri .li4").mouseover(function() {
		$(".headerTopri .topsr").show();
	});
	$(".headerTopri .li4").mouseleave(function() {
		$(".headerTopri .topsr").hide();
	})
	$(".headerTopri .topsr").mouseover(function() {
		$(".headerTopri .topsr").show();
	})
	$(".headerTopri .topsr").mouseleave(function() {
		$(".headerTopri .topsr").hide();
	})

	$(".headerTopri .li5").mouseover(function() {
		$(".headerTopri .myec").show();
	});
	$(".headerTopri .li5").mouseleave(function() {
		$(".headerTopri .myec").hide();
	});
	$(".headerTopri .myec").mouseover(function() {
		$(".headerTopri .myec").show();
	});
	$(".headerTopri .myec").mouseleave(function() {
		$(".headerTopri .myec").hide();
	})

	/*section*/

	var vdefault = $('.section form input').val();

	$(".section form input").focus(function() {
		if($(this).val() == vdefault) {
			$(this).val("");
		}
	});
	$(".section form input").blur(function() {
		//失去焦点时，如果值为空，则设置为默认值  
		if($(this).val() == "") {
			$(this).val(vdefault);
		}
	});

	/*outer显示与隐藏*/
	$(".hov1").mouseover(function() {
		$(".dogcat").css("display", "block");
		$(".shoping").css("display", "none");
	});
	$(".hov2").mouseover(function() {
		$(".dogcat").css("display", "none");
		$(".shoping").css("display", "block");
		$(".outer .shoping ul .li1 .rig").css("display", "block");
	});
	$(".hov2").mouseover(function() {
		$(".dogcat").css("display", "none");
	});
	$(".outer .shoping ul li").mouseover(function() {
		$(this).find(".rig").show().end().siblings().find(".rig").hide();
	});
	$(".outer .shoping ul li").mouseleave(function() {
		$(this).find(".rig").hide();
	});

	$(".outer .shoping .pet-active").mouseover(function() {
		$(".outer .shoping .cate-action").css("display", "block");
	});
	$(".outer .shoping .cate-action").mouseleave(function() {
		$(".outer .shoping .cate-action").css("display", "none");
	});
	$(".outer .shoping .cate-action").mouseover(function() {
		$(".outer .shoping .cate-action").css("display", "block");
	});
	$(".outer .shoping .pet-active").mouseleave(function() {
		$(".outer .shoping .cate-action").css("display", "none");
	});

	/*hand右边动画*/
	$(".main_r div").mouseover(function() {
		$(this).stop().animate({
			"right": "16px"
		}, 300);
	});
	$(".main_r div").mouseleave(function() {
		$(this).stop().animate({
			"right": "0px"
		}, 300);
	});

	/*文字放大效果*/
	$(".imp .suprise .time-menu ul li").mouseover(function() {
		$(this).find("i").addClass("on").end().siblings().find("i").removeClass("on").end().end().find("p").addClass("fs").end().siblings().find("p").removeClass("fs");
	})
	/*sumprise-m字体变色效果*/
	$(".imp .suprise li").mouseover(function() {
		$(this).find(".goodsDes").addClass("co").end().siblings().find(".goodsDes").removeClass("co");
	});
	$(".imp .suprise li").mouseleave(function() {
		$(this).find(".goodsDes").removeClass("co");
	});
	/*lib-menu边框变化效果*/
	$(".imp .lib-menu li").mouseover(function() {

		$(this).addClass("hover").siblings().removeClass("hover");
	});
	
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
        });
            
          //侧边栏
           $(window).scroll( function() {
           	var wtop=$(window).scrollTop();
           	/*console.log(wtop);*/
           	if(wtop>0){
           		$(".hd-top").css({
                    "display":"block"
                })
           	}else{
           		$(".hd-top").css({
                    "display":"none"
                })
           	}
                
            });
              $(".hd-top").click(function(){
                $("body,html").stop().animate({"scrollTop":0},500)
            });
            
//          商品列表页文字颜色变化
             $(".filter_box tr td .fil-li").mouseover(function(){

   $(this).find("a").find("span").css({"display":"block","color":"#ff6302"}).siblings().css({"color":"#333"});
            });
            $(".filter_box tr td .fil-li").mouseleave(function(){

   $(this).find("span").css({"display":"block","color":"#333"}).siblings().css({"color":"#333"});
            });
            
            $(".filter_box tr td span").mouseover(function(){
 $(this).css({"display":"block","color":"#ff6302"}).siblings().css({"color":"#333"});
            });
             $(".filter_box tr td span").mouseleave(function(){

 $(this).css({"display":"block","color":"#333"});
            });
            

})(jQuery)

$("#sliderBox").slider({
	showNav: true,
	showBtns: true
});