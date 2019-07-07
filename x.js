window.addEventListener('load', function(){
 console.log("Hello World!");

//this is to manipulate de Dom
function calculate(){
 let totalBill = document.getElementById("total-bill").value;
   console.log(document.getElementById("total-bill").value);

}

let submitButton = document.querySelector('#calculate-button');
// console.log(submitButton);

submitButton.onclick = function() { calculate(); event.preventDefault(); };

});
