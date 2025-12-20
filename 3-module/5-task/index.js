function getMinMax(str) {
  // ваш код
  let arrSpl = str.split(" ");
	let arrFilt = arrSpl.filter(item => !Number.isNaN(+(item)));
    let arrMap = arrFilt.map(item => +(item));
    let min = arrMap[0];
    let max = arrMap[0];
    for (let num of arrMap) {
    	if (num < min) min = num;
    	if (num > max) max = num;
    }
    return { min: min, max: max };
}
