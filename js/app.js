// #  FizzBuzz

// - Creare il ciclo For con i=0 0 < 100;
    for (let i = 0; i < 100; i++) {
        //     - Creazione dei variabili
        let fizz = "Fizz";
        let buzz = "Buzz";
        let fizzBuzz = "FizzBuzz";
        let n = i + 1;
        const restOf3 = n % 3;
        const restOf5 = n % 5;
        const gridDOMElement = document.querySelector(".grid");
        
        //     - Creazione di operatore logico
        
        if (restOf3 == 0 && restOf5 == 0) {
            // Passiamo il risultato sul console log
            console.log(fizzBuzz);
            // Creamo il box dentro grid 
                // Creamo la div tramite "createElement" assegnando il valore alla variabile "boxDOMElement"
                const boxDOMElement = document.createElement("div");
                // Aggiungiamo il classe "box" e il "bg" in base al tipo di box 
                boxDOMElement.classList.add("box", "bg-danger");
                // Assegnamo il numero di box
                boxDOMElement.innerHTML = fizzBuzz;
                // Aggiungiamo il div alla nostra DOM
                gridDOMElement.append(boxDOMElement);
        } else if (restOf3 == 0){
            console.log(fizz);
            const boxDOMElement = document.createElement("div");
            boxDOMElement.classList.add("box", "bg-success");
            boxDOMElement.innerHTML = fizz;
            gridDOMElement.append(boxDOMElement);
        } else if (restOf5 == 0){
            console.log(buzz);
            const boxDOMElement = document.createElement("div");
            boxDOMElement.classList.add("box", "bg-warning");
            boxDOMElement.innerHTML = buzz;
            gridDOMElement.append(boxDOMElement);
        } else {
            console.log(n);
            console.log(fizz);
            const boxDOMElement = document.createElement("div");
            boxDOMElement.classList.add("box", "bg-dark-subtle");
            boxDOMElement.innerHTML = n;
            gridDOMElement.append(boxDOMElement);
        }
    }
    
