let output = document.getElementById('output');

let buttons = Array.from(document.getElementsByClassName('number-btn'));


buttons.map ( button => {
    button.addEventListener('click', (e =>{
        switch(e.target.innerText){
            case 'C':
                output.innerText = '';
                break;
            case '=':
                try{
                    output.innerText = eval(output.innerText)
                } catch {
                    output.innerText = 'Syntax Error'
                }
                break;
            default:
                output.innerText += e.target.innerText;
        }
    }))
})