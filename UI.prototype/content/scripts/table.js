$j(document).ready(function(){
	$j("table.list").each(function(){
		$j("tbody tr:odd", this).addClass("altRow");
	});
});