function mincost(arr)
{ 
//write your code here
// return the min cost
	//my repeated sorting and finding the sum of two elements
	if(arr.length == 1){
		return 0;
	}
	arr.sort((a, b) => a - b);
	let cost = 0;
    while(arr.length != 1){
        let sum = arr[0]+arr[1];
        cost += sum;
        arr.shift();
        arr[0] = sum;
        // let i=0;
        // while(arr[i]<arr[i+1] && i<arr.length-1){
        //     [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        //     i++;
        // }
        arr.sort();
    }
    return cost;
}

module.exports=mincost;
