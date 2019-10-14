let listBlock = document.getElementsByClassName('block')
console.log(listBlock)
let btn= document.getElementById('btn')
function changeBg()
{
    for(let i= 0; i< listBlock.length; i++)
    {
        listBlock[i].classList.toggle('green')
    }   
}
btn.onclick = changeBg;

