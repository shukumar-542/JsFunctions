function addNumbers(){
      let sum = 0;
     for (let i = 0; i <arguments.length; i++) {
           const num =arguments[i];
           sum = sum + num;
           
     }
     
     function messageInfo(message){
      console.log(message);
      }
      messageInfo('the total number of summetion');
     
      return sum;

    
}
let result = addNumbers(15,22,25,22,13);
console.log(result);
