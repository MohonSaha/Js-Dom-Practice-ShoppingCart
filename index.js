// Using id to get data
let counter = 0;
document.getElementById('first-card').addEventListener('click', function(){
    // Get the data
    counter = counter + 1;      
    const productName = getInnerTextValue('first-name');
    const productPrice = getInnerTextValue('first-price');
    const productQuantity = getInnerTextValue('first-quantity');
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
    
    // SHow the data
    displayData(counter, productName, productPrice, productQuantity, priceTotal);
    disabledButton("first-card");
})

// Using event object from browser to get data
document.getElementById('second-card').addEventListener('click', function(e){
    // Get the data:
    counter = counter + 1;
    const productName = e.target.parentNode.parentNode.children[0].innerText;
    const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    const sumTotal = parseInt(productPrice) + parseInt(productQuantity);
    
    // SHow the data
    displayData(counter, productName, productPrice, productQuantity, sumTotal);
    disabledButton("second-card");
})

document.getElementById('third-card').addEventListener('click', function(){
    // Get the data
    counter = counter + 1;      
    const productName = getInnerTextValue('third-title');
    const productPrice = getInnerTextValue('third-price');
    const productQuantity = getInnerTextValue('third-quantity');
    const priceTotal = parseInt(productPrice) - parseInt(productQuantity);
    
    // SHow the data
    displayData(counter, productName, productPrice, productQuantity, priceTotal);
    disabledButton("third-card");
})


// Last card
document.getElementById('last-card').addEventListener('click', function(){
    counter = counter + 1; 
    const productName = getInnerTextValue('last-title');
    const productPrice = getInputTextValue('first-input');
    const productQuantity = getInputTextValue('second-input');
    if(productPrice == "" ||
    productQuantity == "" ||
    productPrice <= 0 ||
    productQuantity <= 0){
        alert("sorry")
    }
    else{
        const priceTotal = parseInt(productPrice) / parseInt(productQuantity);
        displayData(counter, productName, productPrice, productQuantity, priceTotal);
    }



    document.getElementById('first-input').value = '';
    document.getElementById('second-input').value ='';

})





// Function to get the value from inner text
function getInnerTextValue(id){
    const value = document.getElementById(id).innerText;
    return value;
}

// Function to get the value from input text
function getInputTextValue(id){
    const value = document.getElementById(id).value;
    return value;
}

// Function to set the HTML for dynamically

function displayData(counter, productName, productPrice, productQuantity, priceTotal){
     const container = document.getElementById('table-container')
    const tr = document.createElement("tr");
    tr.innerHTML = `
                    <td>${counter}</td>
                    <td>${productName}</td>
                    <td>${productPrice}</td>
                    <td>${productQuantity}</td>
                    <td>${priceTotal}</td>
    `;
    container.appendChild(tr);
}

// common function to disable button
function disabledButton(id) {
    document.getElementById(id).setAttribute("disabled", true);
  }