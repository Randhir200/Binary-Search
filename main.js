//Binary Search - Iterative
function runProgram(input) {
    input = input.trim().split("\n");
    let [n,k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    let flag = false;
    let left = 0;
    let right = n-1;
    let mid;
    arr.sort((a,b)=>a-b);
    //2 -2 0 3 4
    function search(){
        while(left<=right){ //0!=4&0!=undefined
         mid = calMid(left, right);
        if(k>arr[mid]){ //
            left = mid+1;//
        }
        if(k<arr[mid]){
            right = mid-1
        }
        if(k==arr[mid]){
            return 1;
        }
    }
    return -1
    }
    
    function calMid(left, right){
        return Math.floor(left + (right-left)/2);
    }
    console.log(search(left, right))
  
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  