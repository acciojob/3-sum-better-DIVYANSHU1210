function threeSum(arr, target) {
// write your code here
	arr.sort((a,b)=>a-b);
	let min_diff = Number.MAX_VALUE;
	let ans = 0;
	for(let i=0; i<arr.length-2; i++){
		let p = i+1; 
		let q = arr.length - 1;
		while(p<q){
			let sum = arr[p] + arr[q] + arr[i];
			if(Math.abs(target-sum) < min_diff){
				min_diff = target - sum;
				ans = sum;
			}

			if(sum < target){
				p++;
			}
			else q--;
		}	
	}

	return ans;
	
}

module.exports = threeSum;
