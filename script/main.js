var text = "shohruh xorazm eng uzun so'zni topuvchi dastur";
 
function LongWord(massiv) {
    var newArr = massiv.split(' ') //
    var longsword = ""; // so'zlarni  saqlash uchun o'zgaruvchi ochib olamiz
     for( var i=0; i<newArr.length;i++) {
         if(newArr[i].length > longsword.length){
             longsword = newArr[i];
         }
         
        }
        return longsword;
}
 var a = LongWord(text);
 console.log(a);