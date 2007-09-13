$j(document).ready(function(){
	$j("ul.menu").Accordion({ 
		    active: '.selected', 
		    header: '.head', 
		    navigation: true, 
		    event: 'click', 
		    autoheight: true, 
		    animated: false
	});
});