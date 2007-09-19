var Beautifier = {
	beautifyTables : function(){
		$j("table.list").each(function(){
			$j("tbody tr:odd", this).addClass("altRow");
		})
	},
	
	beautifyButtons : function(){
		$j("input[@type='submit'],input[@type='reset']").addClass("btn");
		
		$j("tfoot a").addClass("btn");
		
		$j(".bottomBar a").addClass("btn");
	},	
	
	addToggleButtonForMasthead : function(){
		$j("<div class='opened'></div>").appendTo("#necklace").toggle(
			function(){var switcher=$(this); $("#masthead").slideUp("normal",function(){switcher.removeClass("opened");switcher.addClass("closed");});	},
			function(){var switcher=$(this); $("#masthead").slideDown("normal",function(){switcher.removeClass("closed");switcher.addClass("opened");}); }
		);
	}
}

$j(document).ready(function(){
	Beautifier.beautifyTables();
	Beautifier.beautifyButtons();
	Beautifier.addToggleButtonForMasthead();	
});
