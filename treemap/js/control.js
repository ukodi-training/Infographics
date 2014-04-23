$( document ).ready(function() {
	// You can comment out the whole csv section if you just have a JSON file.
	// loadJSONFile('data/portaldata.json');

	// Convert a csv file (tabular data) into a json hierarchical structure
	d3.csv("data/data_file.csv", function(csv_data){
		
		// Nest function: Converts tabular data into a hierarchy
		// Add, remove or change the key values to change the hierarchy 
		// To do this change d.grand_parent, d.parent and d.child to the column titles in the order you wish to nest them, e.g. d.column_1, d.column_2 etc.
		// NOTE: Your column titles cannot contain spaces.
		var nested_data = d3.nest()
			.key(function(d)  { return d.grand_parent; })
			.key(function(d)  { return d.parent; })
			.key(function(d)  { return d.child; })
			.entries(csv_data);

		// Creat the root node for the treemap
		var root = {};

		// Add the data to the tree. This gives us a new top level "god" node. A parent of everything. 
		root.key = "Data";
		root.values = nested_data;

		// Change the key names and children values from .next and add values for a chosen column to define the size of the blocks, e.g. a value
		root = reSortRoot(root,"size_column");

		// DEBUG
		// $("#rawdata").html(JSON.stringify(root));

		loadData(root);
	});

});
