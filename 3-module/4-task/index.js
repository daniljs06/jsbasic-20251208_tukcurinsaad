function showSalary(users, age) {
  // ваш код...
  let arr = users.filter(item => item.age <= age);
	let arrUser = arr.map(function(item) {
	return item.name + ", " + item.balance;
	});
	let result = arrUser.join("\n");
	return result;
}
