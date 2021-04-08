

// document.getElementById()
// document.querySelector()
// document.querySelectorAll()
let myInput = document.getElementById("input_myvalue"),
myButton =  document.getElementById("my_button");

myButton.addEventListener("click", 
    (event) => {
        let value = myInput.value;
        alert ('Значение в импуте - ' + value);
    }
);
setTimeout( () => {
    document.getElementById("textblock").innerHTML = `
        Привет! <br>
        <b>Этот html вставлен в виде строки из скрипта</b>. <br>
        Здорово, правда?
    `;
}, 3000);