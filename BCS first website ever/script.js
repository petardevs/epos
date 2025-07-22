let naslov=document.querySelector('.tx h1')
let text=naslov.innerText;
let splitText=text.split('');


naslov.innerHTML=''


for(let i=0; i<splitText.length;i++){
if(splitText[i]==' ')
	splitText[i]='&nbsp'

naslov.innerHTML+=`<span>${splitText[i]}</span>`


}
let spans=naslov.querySelectorAll('span')
let j=0;
let interval=setInterval(()=>{

spans[j].className='anim';

j++;
if(j=== spans.length)
clearInterval(interval)

},150)

