/* 复用头部与尾部 */
define(["jquery","cookie"], function($,cookie){


function Header() {
		this.load();
	}

	Header.prototype = {
		constructor: Header,
		// 加载头部与尾部
		load: function() {
			// 头部
			// $.get("/html/include/header.html", this.headerHandler.bind(this));
//			$.get("header.html", $.proxy(this.headerHandler, this));
          $.get("header.html", $.proxy(this.headerHandler, this));

			// 尾部
			$("footer").load("footer.html");
		},
		// 处理头部加载完成后的任务
		headerHandler: function(data) {
			// 将读取到的头部复用HTML渲染到 <header> 内部
			$("header").html(data);
			// 注册事件监听
			this.addListener();
		},
//为"搜索"框绑按键事件		
			addListener: function() {
			// 为“搜索”框绑定按键事件
			$("#search1").keyup(this.searchHandler);
			// 为 ".suggest" 的孩子 div 绑定点击事件：事件委派
			$(".suggest").on("click", "div", this.suggestHandler);
		},
		// 处理搜索框事件
		searchHandler: function() {
			var 
				word = $(this).val(),
				url = `https://suggest.taobao.com/sug?code=utf-8&q=${word}&callback=?`;
				$("#search2").click(function(){
					if($(".suggest").css("display")=="none"){
						$(".suggest")[0].style.display="block";
					}
				});
			$.getJSON(url, function(data){
				var html = "";
				data.result.forEach(function(curr){
					html += `<div>${curr[0]}</div>`;
				});
				$(".suggest").html(html);
			});			
		},
		// 点击提示
		suggestHandler: function() {
			$("#search2").val($(this).text());
			$(".suggest").empty();
		}
	}
	new Header();
});
