let string="";
let buttons=document.querySelectorAll('.row button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>
    {
        if(e.target.textContent=='=')
        {
            string=eval(string);
            document.querySelector('.input').value=string;
        }
        else if(e.target.textContent=='C')
        {
            string=""
            document.querySelector('.input').value=string;
        }
        else{
        console.log(e.target)
        string=string+ e.target.textContent;
        document.querySelector('.input').value=string;}
    })
})