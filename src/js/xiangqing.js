require(["config"], function(){
	require(["jquery","header","template"], function($,header,template){
	function Xiangqing(){
       		this.renderXiangqing();
       }
       Xiangqing.prototype = {
       	constructor:Xiangqing,
       	//渲染列表数据
       	renderXiangqing: function(){
       		$.ajax("http://rap2api.taobao.org/app/mock/116587/123456")
       			.done(function(data){
       				//待渲染的数据
       				console.log(data)
       				var data={list:data.res_body.list};
       				//渲染
       				var html=template("xiangqing_template",data);
       				$(".main_right").html(html)
       			});
       	}
       }
       
       new Xiangqing();
	})
});	