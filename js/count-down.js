(function ($){
	//toyears:要到达的年,tomonths:要到达的月,today:要到达的天
    $.extend({
    	"count_down": function ( dom,toyears,tomonths,today){
    		showTime();
	        setInterval(showTime, 1000);
	        function showTime(){
	            // 获取当前时间的时间对象
	            var now = new Date();
	            // 创建未来一个时间的时间对象
	            var later = new Date(toyears, tomonths-1, today);
	            // 可以使用getTime方法获取每一个时间对象的中的事件的毫秒表示
	            // 计算出毫秒表示的差
	            var delta = later.getTime() - now.getTime();
	            // 定义几个变量表示几个常数
	            var dMs = 24*60*60*1000;
	            var hMs = 60*60*1000;
	            var mMs = 60*1000;
	            var sMs = 1000;
	            // 计算天数
	            var days = change(Math.floor(delta / dMs));
	            // 计算小时数
	            var hours = change(Math.floor((delta - days * dMs) / hMs));
	            // 计算分钟数
	            var mins = change(Math.floor((delta - days*dMs - hours*hMs) / mMs));
	            // 计算秒数
	            var secs = change(Math.floor((delta - days*dMs - hours*hMs - mins*mMs) / sMs));
	            // 将这个时间字符串显示到页面
             	var spans = $(".count-down").children("span");//[dom1`,dom2,dom3]
             	$(spans[0]).html(hours[0]);
             	$(spans[1]).html(hours[1]);
             	$(spans[2]).html(mins[0]);
             	$(spans[3]).html(mins[1]);
             	$(spans[4]).html(secs[0]);
             	$(spans[5]).html(secs[1]);
             // spans[0].innerHTML = hours[0];
	        }
	        function change(a){
	        	if(+a<10){
	        		return "0"+a;
	        	}
	        	return a+"";
	       	}
    	}
    })
})(jQuery);