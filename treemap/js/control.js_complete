$( document ).ready(function() {
	// You can comment out the whole csv section if you just have a JSON file.
	// loadJSONFile('data/portaldata.json');

	d3.csv("data/Home_Office_Air_Travel_Data_2011.csv", function(csv_data){
		// Add, remove or change the key values to change the hierarchy. 
		var nested_data = d3.nest()
			.key(function(d)  { return d.Destination; })
			.key(function(d)  { return d.Supplier_name; })
			.key(function(d)  { return d.Ticket_class_description; })
			.entries(csv_data);

		// Creat the root node for the treemap
		var root = {};

		// Add the data to the tree
		root.key = "Data";
		root.values = nested_data;

		// Change the key names and children values from .next and add values for a chosen column to define the size of the blocks
		root = reSortRoot(root,"Paid_fare");

		// DEBUG
		// $("#rawdata").html(JSON.stringify(root));

		loadData(root);
	});

});
