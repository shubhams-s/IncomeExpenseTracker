let iDisp = document.querySelector('.iDisp');
let eDisp = document.querySelector('.eDisp');
let sDisp = document.querySelector('.sDisp');
let slno =1;

let inpAmount = document.getElementById('inpAmount');
let inpType = document.getElementById('inpType');
let inpRemarks = document.getElementById('inpRemarks');
let submit = document.getElementById('submit');

let data=document.querySelector('.data');
let sno = document.querySelector('.serialD');
let amount = document.querySelector('.amountD');
let type = document.querySelector('.typeD');
let remarks = document.querySelector('.remarksD');
let form = document.querySelector('.form');
let blurcover = document.querySelector('.blur');

let income = 0;
let expenses = 0;


function submitvalue(){
    
   
    form.classList.add('hide'); 
    blurcover.classList.add('hide');

    const entry=`<div class="entry">
    <div class="serialD entryLook">${slno}</div>
    <div class="amountD entryLook">${inpAmount.value}</div>
    <div class="typeD entryLook">${inpType.value}</div>
    <div class="remarksD entryLook">${inpRemarks.value}</div>
</div>`;
data.innerHTML+=entry;
if(inpType.selectedIndex==0)
{
    income += parseFloat(inpAmount.value);
    iDisp.innerHTML = income;
}
if(inpType.selectedIndex==1)
{
    expenses += parseFloat(inpAmount.value);
    eDisp.innerHTML = expenses;
}
sDisp.innerHTML=income-expenses;
slno++;
}

function openform(){
    var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
form.classList.remove('hide');
blurcover.classList.remove('hide');
console.log();
blurcover.style.height=String(height)+ 'px';

}

function closeform(){
    form.classList.add('hide');
    blurcover.classList.add('hide');
}