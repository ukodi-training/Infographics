function reSortRoot(root,value_key) {
	//console.log("Calling");
	for (var key in root) {
		if (key == "key") {
			root.name = root.key;
			delete root.key;
		}
		if (key == "values") {
			root.children = [];
			for (item in root.values) {
				root.children.push(reSortRoot(root.values[item],value_key));
			}
			delete root.values;
		}
		if (key == value_key) {
			root.value = parseFloat(root[value_key]);
			delete root[value_key];
		}
	}
	return root;
}
