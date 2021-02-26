/*    let limit;
limit = 10000
for (let i=0; i==limit; i++) {        
    if(i=limit){
        console.log('Вы достигли лимита')
    }
}
alert( Вывести + " ") 
*/
/* ежемесячный платеж
let pay = 20000;
        let percent = 50;
         let Mpay = pay + (pay / 100 * percent)

закрытие лимита 
x = 40000 лимит исчерпан 
  когда он исчерпан нужно его закрыть 
  x=40000
  i=Mpay= платеж +процент
  b= закрытие долга= x-i

*/

function Ccl(limit, percent, change) {
    let mp;//вычислить ежемесячный процент
    let dept = limit;
    let time = 1;
    while( dept > 0) {
        if (Debt==40000); {   
            let pay = 20000;
            let percent = 50;
            let Mpay = pay + (pay / 100 * percent)  
            let closelimit = Debt-Mpay
         }
         if(closelimit==Debt){
             console.log('лимит закрыт ')
         }else{
             console.log('лимит не закрыт')
         }

         time++;
     }
 //alert (Ввести + '  ')
 }
Ccl(40000, 24, 0);