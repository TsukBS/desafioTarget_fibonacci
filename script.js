function perfectSquare(userNumber){
    let squareRoot = Math.sqrt(userNumber);
    if (Number.isInteger(squareRoot)){
        return squareRoot * squareRoot === userNumber;
    };
};

function fibonacci(userNumber){
    return perfectSquare(5 * userNumber * userNumber + 4) || perfectSquare(5 * userNumber * userNumber - 4);
};

function responseFibonacci(){
    const userNumber = document.getElementById('user-number').value;
    const response = document.getElementById('response');

    if (fibonacci(userNumber)){
        response.textContent = `${userNumber} pertence a sequencia de Fibonacci!`
    }
    else{
        response.textContent = `${userNumber} Nao pertence a sequencia de Fibonacci!`
    };
}

function styleOfResponse(){
    const styleResponse = document.getElementById('response-screen');
    styleResponse.classList.add('style-response');
};


document.getElementById('check').addEventListener('click', responseFibonacci);
document.getElementById('check').addEventListener('click', styleOfResponse);
