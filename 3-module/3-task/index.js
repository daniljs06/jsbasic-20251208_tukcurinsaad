function camelize(str) {
  // ваш код...
  let arrStr = str.split("-");
	let result = arrStr.map(function(item, index) {
		if (index === 0) {
            return item;
		} else if (item === "") {
			return "";
		}
		else {
			return item[0].toUpperCase() + item.slice(1);
		}
	});
return result.join("");
}
