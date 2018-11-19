require(["config"], function(){
	require(["jquery","header","template"], function($,header,template){
       function List(){
       		this.renderList();
       }
       List.prototype = {
       	constructor:List,
       	//渲染列表数据
       	renderList: function(){
       		$.ajax("http://rap2api.taobao.org/app/mock/116587/example/1541573516289")
       			.done(function(data){
       				//待渲染的数据
       				var data={list:data.res_body.list};
       				//渲染
       				var html=template("list_template",data);
       				$(".prod_list").html(html)
       			});
       	}
       }
       
       new List();
	});
});	