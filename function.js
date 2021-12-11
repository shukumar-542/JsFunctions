let nums  = [12,15,21,54,11,33];
evenifyLoop(nums);
let age  = [55,40,13,25,25,45,8];
evenifyLoop(age);

function evenify(num){
      if(num % 2 == 0 ){
            console.log(num, ": even number");
      }
      else{
            console.log(num , ": odd number");
      }
}
function evenifyLoop(nums){
      for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            evenify(num);
            
      }

}

