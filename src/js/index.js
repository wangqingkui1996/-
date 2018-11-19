//引入依赖的配置文件模块
require(["config"], function(){
	require(["jquery","header","carousel"], function($){
		function Index() {
			this.loadCarousel();
		}
		
		$.extend(Index.prototype, {
			// 加载轮播图
			loadCarousel: function() {
				$(".wrap1").carousel({
					imgs : [
						{href:"list.html", src:"img/c10d0c7b6256595be3492704ba4dddc7abf2dc98.jpg"},
						{href:"list.html", src:"img/c81b9548efc81e725dd557d776bc90b2d613bb27.jpg"},
						{href:"list.html", src:"img/2b831af31007cda253aadf019aadabcccb6c9181.jpg"},
						{href:"list.html", src:"img/dc9923add39276884b916deeeba8dd481139a3e7.jpg"}
					],
					width:1260,
					height: 480,
					duration: 1500
				});
			},
		});
		new Index();
	});	
});	
