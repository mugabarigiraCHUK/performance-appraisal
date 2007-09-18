$j(document).ready(function(){
	$j("table.list").each(function(){
		$j("tbody tr:odd", this).addClass("altRow");
	});
	
	$j("input[@type='submit'],input[@type='reset']").addClass("btn");
	
	$j("tfoot a").addClass("btn");
	
	$j(".bottomBar a").addClass("btn");
});