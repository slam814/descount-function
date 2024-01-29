document.getElementById('apply-btn').addEventListener('click', function(){
    const inputFildElement = document.getElementById('input-fild');
    const inputFildString = inputFildElement.value;
    const inputFildPrice = parseFloat(inputFildString);
    
    // worning 
    const worningMessege = document.getElementById('worning-message');
    if(isNaN(inputFildPrice)){
        worningMessege.innerText = 'Please input Valid Number!';
     
        return ;
    }else{
        worningMessege.innerText = '';
        inputFildElement.value = '';
    }

    // discount 
    const discountElement = document.getElementById('discount-price');
    const discountFildString = discountElement.innerText;
    const discountFildPrice = parseFloat(discountFildString);

    

    const discount = (discountFildPrice / 100) * inputFildPrice;

    const discountPrice = inputFildPrice - discount;

    // set price 
    const priceElement = document.getElementById('product-price');
    priceElement.innerText = discountPrice.toFixed(2);
})