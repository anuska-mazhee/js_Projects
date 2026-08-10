const form = document.querySelector('form');


form.addEventListener('submit', function (e){
    //Stopping the default action of sumbit button
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if(height == '' || height < 0 || isNaN(height)){
        result.innerHTML = `Invalid Height ${height}`;
    }
    if(weight == '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Invalid Weight ${weight}`;
    }else{
        const bmi = (weight /((height *height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
    }
})
