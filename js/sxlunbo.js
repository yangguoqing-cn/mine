//下面的自动的轮播
(function($, undefined) {
      $.fn.slider = function(opts) {
		var defaults = {
			width: 918,
			height: 409,
			direction: "left",
			interval: 3000,
			showNav: false,
			showBtns: false
		};
		var options = $.extend(true, {}, defaults, opts);

		function Slider(options) {
			this.ele = $(".ul-con");
			this.lists = $(".ul-con ul");
			this.nav = $(".circle-bot");
			/*this.btns = $("#sliderBtns");*/
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
					_this.nav.find("span").eq(0).addClass("anim").siblings().removeClass("anim");

				} else {
					_this.nav.find("span").eq(index).addClass("anim").siblings().removeClass("anim");
				}
				
				_this.lists.stop().animate({"left": -index * options.width},2000,function(){
					
				});
				
			}

			function jump() {
				index++;
				if(index == _this.list.length) {
					index = 1;
					_this.lists.css("left", 0);
				}
				if(index == _this.list.length - 1) {
					_this.nav.find("span").eq(0).addClass("anim").siblings().removeClass("anim");

				} else {
					_this.nav.find("span").eq(index).addClass("anim").siblings().removeClass("anim");
				}
				_this.lists.css({"left": -index * options.width});
			

			}

			this.nav.find("span").hover(function() {
				clearInterval(_this.timer);
				index = $(this).index() - 1;
				jump();
			}, function() {
				_this.timer = setInterval(move, 2000);
			});

			

		}

		new Slider(options);
		return this;
	}
      })(jQuery)

$(".ul-con").slider({
	showNav: true,
	showBtns: true
});