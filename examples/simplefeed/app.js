define(["joshlib!collection","joshlib!factorycollection","joshlib!ui/list"],function(Collection, FactoryCollection, List) {
	
	//var c = new Collection([],{datasource:Joshfire.factory.getDataSource("home")});
	var c = FactoryCollection("home");

	new List({
		el:"#simplefeedlist",
		itemTemplateEl:"#template-simplefeedlist",
		collection:c,
		scroller:true
	});

	c.fetch();
	
});