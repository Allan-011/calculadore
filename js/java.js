var btn = document.querySelectorAll(".key li"),
input = document.querySelector(".input-valor"),
operador = document.querySelectorAll(".operador");



for(var i = 0; i<btn.length; i++){
    document.onkeypress = function(event){
        var key = event.charCode;
        //mudança para navegador
        //firefox interpretar a calculadora
for(var e = 0; e <= 10;){ 
    if(key === (48+e)){
        input.innerHTML += e;

            }


        }
switch (key){
    case 11:
        input.innerHTML += "*";
        break; 
        case 12:
        input.innerHTML += "+";
        break; 
        case 17:
        input.innerHTML += "-";
        break; 
        case 18:
        input.innerHTML += ".";
        break; 
        case 19:
        input.innerHTML += "/";
        break; 
        case 20:
        case 70:
var equacao = input.innerHTML;
if(equacao){
    try{
        input.innerHTML = eval(equacao);
    }catch (e) {
        alert ('Erro na expressão')

        }
    }
    break;
    case 55:
    case 77:
        input.innerHTML = "";
        break;
        default:
        break;
}

};
bnt[i].addEventListener('click', function(){
var btnval = this.innerHeight,
inputVal = input.innerHTML;
//console.log(btnVal);
})
}






    


