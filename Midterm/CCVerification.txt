function fSumDigits(pNum) {
    var sum = 0;
    
    for (let i = 0; i < pNum.length; i++) {
      sum += parseInt(pNum.charAt(i));
    }
    return sum;
}
  
var ans = fSumDigits("123");
console.log(ans);

function fRemoveSpaces(pString){

    let newString = "";
    for(let i =0;i< pString.length;i++){
        
        if(pString.charAt(i) != " "){
            newString+= pString.charAt(i);
        }
    }

    return newString;
}
  
let secans = fRemoveSpaces("I am Soham");
console.log(secans);

function fVerifyCC(pCC){
    let newPCC = fRemoveSpaces(pCC);
    let double = 0;
    let sum=0
    for(let i = newPCC.length-1;i>=0;i--){
        double = parseInt(newPCC.charAt(i));
        if(i%2==0){
            double = parseInt(newPCC.charAt(i))*2;
            if(double>9){
                double = fSumDigits(double.toString());
            }
        }

        sum+=double;

    }


    if(sum%10 == 0)
        return 'Valid';
    else
        return 'Invalid';
}

let num1 = fVerifyCC('4532 7787 7109 1795');
let num2 = fVerifyCC('4539 6779 0801 6808');

console.log(num1);
console.log(num2);

