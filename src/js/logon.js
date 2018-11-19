require(["config"], function(){
	require(["jquery","header","cookie"], function($,header,cookie){
      $("#enroll").click(function(){
      	var user = $("#user").val(),
      	       psw = $("#password1").val(),
      	       psw1 = $("#password2").val(),
      	       name = $("#name").val(),
      	       reguser = /^1(3|4|5|7|8)\d{9}$/,
      	       regpsw = /^[a-zA-Z\d_]{8,}$/,
      	       regname =/^[\u4E00-\u9FA5]{2,4}$/;
      	      if(reguser.test(user)){
  	      		 if(regpsw.test(psw)){
  	      		 	if(psw==psw1){
  	      		 		if(regname.test(name)){
  	      		 			if($("#license").get(0).checked){
	      		 			var arr = [
											{user1:user},
											{psw2:psw},
											{name1:name}
																];															
							var str = JSON.stringify(arr);
							$.cookie("username",str,{
								expires:7,
								path:"/"
							});
							alert("注册成功")
							}else{
								alert("请同意条款")
							}
  	      		 		}else{
  	      		 			alert("姓名格式不正确")
  	      		 		}
  	      		 	}else{
  	      		 		alert("两次输入的密码不一致")
  	      		 	};
  	      		 }else{
  	      		 	alert("密码格式不正确")	
  	      		 };
      	      }else{
      	      	alert("用户名/手机格式不正确")
      	      };

      });
      $("#anniu").click(function(){
      	var str = $.cookie("username"),
			   arr =JSON.parse(str),
			   user = $("#user1").val(),
			   psw = $("#password").val();
			  if(arr[0].user1==user){
			  	if(arr[1].psw2==psw){
			  		if($("#license1").get(0).checked){
			  			alert("恭喜你已经成为高贵的vip会员~~~~~")
			  			location.href = "http://localhost:1212/index.html";
			  			$.cookie("chengong","login",{
			  				path:"/"
			  			});
			  		}else{
			  			alert("请同意条款")
			  		}
			  	}else{
			  		alert("密码错误")
			  	};
			  }else{
			  	alert("账号错误")
			  };
      });
	});
});	