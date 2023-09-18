function threeSum(arr, target) {
// write your code here
	arr.sort((a,b)=>a-b);
	let min_diff = Number.MAX_VALUE;
	for(let i=0; i<arr.length; i++){
		let p = i+1; 
		let q = arr.length - 1;
		while(p<q){
			let sum = p + q + i;
			if(Math.abs(target-sum) < min_diff){
				min_diff == target - sum;
			}

			if(target < sum){
				p++;
			}
			else q--;
		}	
	}

	return min_diff;
	
}

module.exports = threeSum;
