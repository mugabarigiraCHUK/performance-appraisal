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
	
	addToggleForMasthead : function(){
		$j("<div class='opened'></div>").appendTo("#necklace").toggle(
			function(){ var toggle=$j(this); $j("#masthead").slideUp("normal", function(){ toggle.removeClass("opened"); toggle.addClass("closed");}); },
			function(){ var toggle=$j(this); $j("#masthead").slideDown("normal", function(){ toggle.removeClass("closed"); toggle.addClass("opened");}); }
		);
	},
	
	addToggleForSidebar : function(){
		$j("<div class='shown'></div>").appendTo("#necklace").toggle(
			function(){ $j(this).removeClass("shown").addClass("hidden"); $j("#container").addClass("collapsed"); },
			function(){ $j(this).removeClass("hidden").addClass("shown"); $j("#container").removeClass("collapsed"); }
		);
	},
	
	addCalendarIntoNecklace : function(){
		$j("<div class='calendar'>" + getNongli() +"</div>").appendTo("#necklace");
	}
}

$j(document).ready(function(){
	Beautifier.beautifyTables();
	Beautifier.beautifyButtons();
	Beautifier.addToggleForMasthead();
	Beautifier.addToggleForSidebar();
	Beautifier.addCalendarIntoNecklace();
});
