/* Targeting the box and body */
const boxes = document.getElementsByClassName('box');
const body = document.querySelector('body');

/* Since boxes is a HTML Collection. So to use looping Convert the html collection into array */
const arr = Array.from(boxes); 
arr.forEach(function (b){
    b.addEventListener('click', function (e){
        if(e.target.id == "red"){
            body.style.backgroundColor = "red";
        }else if( e.target.id == "yellow"){
            body.style.backgroundColor = "yellow";
        }else if(e.target.id == "pink"){
            body.style.backgroundColor = "pink";
        }else if(e.target.id == "white"){
            body.style.backgroundColor ="white";
        }
    })

})


  
 
