let total = document.querySelector('#total-result');

function getData(i){
    let value = i.value;
    total.value += value;
}

function clean(){
    total.value = '';
}

function calculate(){
    try {
        total.value = eval(total.value);
    } catch (error) {
        total.value = 'Error';
        setTimeout(() => {
            clean();
        }, 500);
    }
}