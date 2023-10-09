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
        let message = n + "";

        const gridDOMElement = document.querySelector(".grid");
        const boxDOMElement = document.createElement("div");
        let classNameBase = "box";
        let classNameBg = "bg-dark-subtle";
        
        if (restOf3 == 0 && restOf5 == 0) {
            message = fizzBuzz;
            classNameBg = "bg-danger";
        } else if (restOf3 == 0){
            message = fizz;
            classNameBg = "bg-success";
        } else if (restOf5 == 0){
            message = buzz;
            classNameBg = "bg-warning"; 
        } 

        console.log(message);
        boxDOMElement.innerHTML = message;
        boxDOMElement.classList.add(classNameBase, classNameBg);
        gridDOMElement.append(boxDOMElement);
    }
    
    
