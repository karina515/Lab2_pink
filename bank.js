/*    let limit;
limit = 10000
float_num.toFixed(2);
for (let i=0; i==limit; i++) {        
    if(i=limit){
        console.log('Вы достигли лимита')
    }
}
alert( Вывести + " ") 
*/
/* ежемесячный платеж
 if (Debt==40000); {   
            let pay = 20000;
            let percent = 50;
            let Mpay = pay + (pay / 100 * percent)  
            let closelimit = Debt-Mpay
         }

закрытие лимита 
x = 40000 лимит исчерпан 
  когда он исчерпан нужно его закрыть 
  x=40000
  i=Mpay= платеж +процент
  b= закрытие долга= x-i
let mr= mp+debt*(50/100);
*/


function Ccl(limit, percent, change) {

    //вычислить ежемесячный процент
    let debt = limit;

    let time = 1;

    let ch = change;

    let mr;

    let PastDebt;

    while( debt > 0) {
  
        let mp = debt*(percent/(100*12));
         
        console.log('Начисленные проценты' , mp.toFixed() )
        mr = mp*2;
        console.log('Пополнение' ,mr.toFixed())

        if(mr < 500){

            mr = 500

        }

        console.log('mr: ', mr.toFixed(), " ch: ", ch);

        if(ch > -mr.toFixed()){    
            
            PastDebt = debt.toFixed();
            console.log("PastDebt: ", PastDebt);

            debt = debt - mr;

            
            
            debt -= ch
            console.log("debt now: ", debt.toFixed())
            

            if(debt < 0){

                console.log('Лимит закрыт: ', debt.toFixed())

            }

            else{

                console.log('Лимит не закрыт: ', debt.toFixed())

            } 
            
            console.log("PastDebt: ", PastDebt, " debt: ", debt.toFixed());  
            if(PastDebt == debt.toFixed()){
                console.log("Ну всё, приехали");
                break;
            }

            time++;
            console.log("mr: ", mr.toFixed(), " ch: ", ch);
        }
        

        else{

            console.log("Не робит");
            break;

        }
    }

 //alert (Ввести + '  ')

}

Ccl(40000, 24, -1000);
