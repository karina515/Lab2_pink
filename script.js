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

                alert('Лимит закрыт', debt.toFixed())

            }

            else{

                console.log('Лимит не закрыт: ', debt.toFixed())

            } 
            
            console.log("PastDebt: ", PastDebt, " debt: ", debt.toFixed());  
            if(PastDebt == debt.toFixed()){
                alert("Ну всё, приехали");
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


let myInputL = document.getElementById("input_limit");
let myInputC = document.getElementById("input_change");
myButton =  document.getElementById("my_button");

myButton.addEventListener("click", 
    (event) => {
        let value_limit = Number(myInputL.value);
        let value_change = Number(myInputC.value);
        
        alert ('Значение в импуте 1 - ' + value_limit);
        alert ('Значение в импуте 2 - ' + value_change);

        Ccl(value_limit, 24, value_change);
        

    }
);
setTimeout( () => {
    document.getElementById("textblock").innerHTML = `
        Привет! <dr>
        <b>Этот html вставлен в виде строки из скрипта</b>. 
        Здорово, правда?
    `;
}, 3000);













// document.getElementById()
// document.querySelector()
// document.querySelectorAll()