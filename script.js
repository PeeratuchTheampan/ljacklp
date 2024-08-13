function openPresent(){
    const image = document.querySelector('img');
    image.src =  'https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2022/5/25/j8tzdfqjfnxciaca06qc/f1-22-red-bull-racing-rb18-sergio-perez' ;
    image.removeEventListener('click',openPresent);
   
}
function changeText()
{
    const text = document.querySelector('h1');
    text.style.color = "red";
    const button = document.querySelector('button');
    button.removeEventListener('click',changeText);
}
const image = document.querySelector('img');
image.addEventListener('click',openPresent);

const button = document.querySelector('button');
button.addEventListener('click',changeText);
