$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
$("ul").on("click","span", function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});
$("input[type='text']").keypress(function(e){
	if(e.which===13){
		let text = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+ text+"</li>");
	}
})
$("h1 i").on("click",function(){
	$("input[type='text']").fadeToggle(200);
})
