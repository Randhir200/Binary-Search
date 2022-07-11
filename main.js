let arr = [1, 2, 3, 4, 5, 6];
let n = 6;
let binarySearch = (arr,low, high, n) => {
    let mid = Math.floor(low+(high-low)/2)//2
    if(arr[mid]===n){
        console.log(`found at position ${mid}`);
        return;
    }
    if(arr[mid]<n){
        low = mid;
    }
    if(arr[mid]>n){
        high = mid;
    }
    binarySearch(arr, low, high,n);
}
    binarySearch(arr,0,arr.length, n)