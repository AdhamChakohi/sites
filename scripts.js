$("#buton").click(function(){
	var userInp = $("#ent").val();
	if (userInp.length > 0){
		$.ajax({
				url:'https://yesno.wtf/api/',
				type: 'GET',
				dataType: 'json',
				error: function(err){
					console.log("lmao u failure");
					console.log(err);
				},
				success: function(data){
					console.log("lmao u did something right");
					console.log(data.answer);
					$("#resultAnswer").html(data.answer);
					var img = "<img src="+data.image+" alt = gif for the answer>"
					$("#resultImage").html(img);
					
				}

			});
	
	}
})
