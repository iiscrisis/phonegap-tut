// JavaScript Document

var Homeview = function(store){


		

		this.initialize = function(){
			
			this.el = $('<div/>');
			this.el.on('keyup','.search-key',this.findByName);
		
		};


	
		this.render = function()
		{
			
			this.el.html(Homeview.template());
			return this;
			
		};
		
		this.findByName =  function() {
        
       		store.findByName($('.search-key').val(), function(employees) {
				 $('.employee-list').html(Homeview.template_li(employees));
        	});
    	};
		
		    this.initialize();
	

}
	Homeview.template =Handlebars.compile($("#home-tpl").html());
	Homeview.template_li = Handlebars.compile($("#employee-li-tpl").html());