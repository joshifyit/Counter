let b1 = document.getElementById("decrementButton");
let b2 = document.getElementById("incrementButton");

b1.addEventListener('click',function(){
    document.getElementById('mainVal').innerHTML = Number(document.getElementById('mainVal').innerHTML) - 1;
})
b2.addEventListener('click',function(){
    document.getElementById('mainVal').innerHTML = Number(document.getElementById('mainVal').innerHTML) + 1;
})

b1.addEventListener('contextmenu',function(){
    document.getElementById('mainVal').innerHTML = Number(document.getElementById('mainVal').innerHTML) - 10;
})
b2.addEventListener('contextmenu',function(){
    document.getElementById('mainVal').innerHTML = Number(document.getElementById('mainVal').innerHTML) + 10;
})