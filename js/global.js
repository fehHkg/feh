
$(document).ready(function () {

	$(document).click(function (event)
	{
		$("#navbarsExampleDefault").removeClass("show");

	});

	$(".btn-left").click(function (event)
	{
		if(!$(this).hasClass("active"))
		{
			$(this).addClass("active");
	
		}
		$(document).find(".btn-right").removeClass("active");

	});

	$(".btn-right").click(function (event)
	{
		if(!$(this).hasClass("active"))
		{
			$(this).addClass("active");
	
		}
		$(document).find(".btn-left").removeClass("active");

	});
});
