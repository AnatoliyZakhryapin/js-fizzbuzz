// #  FizzBuzz

// - Creare il ciclo For con i=0 0 < 100;
    for (let i = 0; i < 100; i++) {

        let fizz = "Fizz";
        let buzz = "Buzz";
        let fizzBuzz = "FizzBuzz";
        let n = i + 1;
        const restOf3 = n % 3;
        const restOf5 = n % 5;

        //     - Creare un operatore condizionale per trovare il numero multipli di 3 e stampare risultato nel console;
        //     - Creare un operatore condizionale per trovare il numero multipli di 5 e stampare risultato nel console;
        //     - Creare un operatore condizionale per trovare il numero multipli di 3 e di 5, stampare risultato nel console;
    
        if (restOf3 == 0 && restOf5 == 0) {
            console.log(fizzBuzz);
        } else if (restOf3 == 0){
            console.log(fizz);
        } else if (restOf5 == 0){
            console.log(buzz);
        } else {
            console.log(n);
        }
    }
       
