"use strict"


let mysquares = document.querySelectorAll("div.square");
let i = 0;
let x= 0;




for (let i = 0; i < mysquares.length; i++) {
    mysquares[i].classList.add("empty");
}

const toggleSquare = function () {

    let isEmpty = this.classList.contains("empty");

    if (isEmpty) {
        if (i % 2 == 0) {
            this.classList.replace('empty', `full`);
            this.classList.add("bg-primary");
            x++;
        } else {
            this.classList.replace('empty', `full`);
            this.classList.add("bg-success");
            x++;
        }
    } else {
        alert("case deja joué");
        i--;
    }
    i++;

        if(x == 9){
            alert("match nul");
            document.location.reload();
        }

    if (mysquares[0].className === `square full bg-primary` && mysquares[1].className === `square full bg-primary` && mysquares[2].className === `square full bg-primary`) {
        alert("blue win!");
        document.location.reload();
    }
    if (mysquares[0].className === `square full bg-success` && mysquares[1].className === `square full bg-success` && mysquares[2].className === `square full bg-success`) {
        alert("green win!");
        document.location.reload();
    }
    if (mysquares[3].className === `square full bg-primary` && mysquares[4].className === `square full bg-primary` && mysquares[5].className === `square full bg-primary`) {
        alert("blue win!");
        document.location.reload();
    }
    if (mysquares[3].className === `square full bg-success` && mysquares[4].className === `square full bg-success` && mysquares[5].className === `square full bg-success`) {
        alert("green win!");
        document.location.reload();
    }
    if (mysquares[6].className === `square full bg-primary` && mysquares[7].className === `square full bg-primary` && mysquares[8].className === `square full bg-primary`) {
        alert("blue win!");
        document.location.reload();
    }
    if (mysquares[6].className === `square full bg-success` && mysquares[7].className === `square full bg-success` && mysquares[8].className === `square full bg-success`) {
        alert("green win!");
        document.location.reload();
    }
    if (mysquares[0].className === `square full bg-primary` && mysquares[3].className === `square full bg-primary` && mysquares[6].className === `square full bg-primary`) {
        alert("blue win!");
        document.location.reload();
    }
    if (mysquares[0].className === `square full bg-success` && mysquares[3].className === `square full bg-success` && mysquares[6].className === `square full bg-success`) {
        alert("green win!");
        document.location.reload();
    }
    if (mysquares[1].className === `square full bg-primary` && mysquares[4].className === `square full bg-primary` && mysquares[7].className === `square full bg-primary`) {
        alert("blue win!");
        document.location.reload();
    }
    if (mysquares[1].className === `square full bg-success` && mysquares[4].className === `square full bg-success` && mysquares[7].className === `square full bg-success`) {
        alert("green win!");
        document.location.reload();
    }
    if (mysquares[2].className === `square full bg-primary` && mysquares[5].className === `square full bg-primary` && mysquares[8].className === `square full bg-primary`) {
        alert("blue win!");
        document.location.reload();
    }
    if (mysquares[2].className === `square full bg-success` && mysquares[5].className === `square full bg-success` && mysquares[8].className === `square full bg-success`) {
        alert("green win!");
        document.location.reload();
    }
    if (mysquares[0].className === `square full bg-primary` && mysquares[4].className === `square full bg-primary` && mysquares[8].className === `square full bg-primary`) {
        alert("blue win!");
        document.location.reload();
    }
    if (mysquares[0].className === `square full bg-success` && mysquares[4].className === `square full bg-success` && mysquares[8].className === `square full bg-success`) {
        alert("green win!");
        document.location.reload();
    }
    if (mysquares[2].className === `square full bg-primary` && mysquares[4].className === `square full bg-primary` && mysquares[6].className === `square full bg-primary`) {
        alert("blue win!");
        document.location.reload();
    }
    if (mysquares[2].className === `square full bg-success` && mysquares[4].className === `square full bg-success` && mysquares[6].className === `square full bg-success`) {
        alert("green win!");
        document.location.reload();
    }



    console.log(mysquares[0, 1, 2]);
}

mysquares.forEach(function (mysquare) {
    mysquare.addEventListener('click', toggleSquare);
})