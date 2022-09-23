const calc = document.querySelector('.calc');
const res  = document.querySelector('#result');


calc.addEventListener('click', function(event){
    const value = event.target.innerText;

    switch(value){
    case 'C':
        result.innerText= '' 
        break;
    
   
        case '=':
            result.innerText= eval(result.innerText).toFixed(2) 
            break;
            default:
            res.innerText += value;
        }
    
})