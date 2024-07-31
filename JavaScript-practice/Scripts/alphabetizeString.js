function alphabetizeStringScript(str = null) {
  let string1 = 'webmaster';
  let str1 = string1.split('').sort().join('');
  //return str1;
  console.log(str1);
  return str1;
  }
  
  //function test(){
  
  
  //}
//document.write

function reverseNumberScript() {
  let RNumber = 32243;
  function reverseNumber(num) {
      return parseInt(num.toString().split('').reverse().join(''));
  }
  document.getElementById('reverseNumberOutput').innerText = `Reverse of ${RNumber} is ${reverseNumber(RNumber)}`;
}