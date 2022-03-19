const button = document.querySelectorAll('button');

for (let i = 0; i < button.length; i++) {

    
    button[i].addEventListener('click',()=>{
 
        const overview=document.querySelector('.overview');
        const div=document.createElement('div');
        const h2=document.createElement('h2');
        const elem=document.createTextNode('Mon project 4');
        h2.appendChild(elem);
        div.appendChild(h2);
        overview.appendChild(div);

        if(i==0){

            
            div.style.border=('none')
            div.style.position="absolute"
            div.style.borderRadius="10px"
            div.style.padding="1.5rem"
            div.style.margin="5px"
            div.style.bottom="0"
            div.style.right="0"
            div.classList.add('success')
            h2.innerText = "Projet success"
            
        }
        else if(i==1){
            div.style.border=('none')
            div.style.position="absolute"
            div.style.borderRadius="10px"
            div.style.padding="1.5rem"
            div.classList.add('danger')
            div.style.margin="5px"
            div.style.bottom="0"
            div.style.right="0"
            h2.innerText = "Projet Danger"

        }
        else if(i==2){
            div.style.border=('none')
            div.style.position="absolute"
            div.style.borderRadius="10px"
            div.style.padding="1.5rem"
            div.classList.add('warning')
            div.style.margin="5px"
            div.style.bottom="0"
            div.style.right="0"
            h2.innerText = "Projet Warning"

        }
        else if(i==3){
            div.style.border=('none')
            div.style.position="absolute"
            div.style.borderRadius="10px"
            div.style.padding="1.5rem"
            div.style.margin="5px"
            div.style.bottom="0"
            div.style.right="0"
            div.classList.add('infos')
            h2.innerText = "Projet infos"

        }
        setTimeout(() => {
           div.remove()
        },2000);
        

        

    })
    


}


