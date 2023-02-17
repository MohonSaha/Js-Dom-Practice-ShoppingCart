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
})







// Function to get the value from inner text
function getInnerTextValue(id){
    const value = document.getElementById(id).innerText;
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