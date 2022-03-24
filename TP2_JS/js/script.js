 
const main=document.querySelector('main')

tab=[
    {
       logo: '../images/dashbord.png',
       text:'Dashboard',
       span:'',
       fleche:'../images/outline_chevron_left_white_24dp.png'

    },
    {
        logo:'../images/outline_apps_white_24dp.png',
       text:'Widgets',
       span:'span3',

       fleche:''

        
    },
    {
        logo:'../images/outline_backup_table_white_24dp.png',
       text:'Layout Options',
       span:'span3',

       fleche:'../images/outline_chevron_left_white_24dp.png'

    },
    {
        logo:'../images/outline_pie_chart_white_24dp.png',
       text:'Charts',
       span:'',

       fleche:'../images/outline_chevron_left_white_24dp.png'



    },
    {
        logo:'../images/outline_data_usage_white_24dp.png',
       text:'ChartJS',
       span:'',

       fleche:'../images/outline_chevron_left_white_24dp.png'


    },
    {

        logo:'../images/outline_park_white_24dp.png',
       text:'UI Elements',
       span:'',

       fleche:'../images/outline_chevron_left_white_24dp.png'


    },
    {
        logo:'../images/outline_border_color_white_24dp.png',
       text:'Forms',
       span:'',


       fleche:'../images/outline_chevron_left_white_24dp.png'



    },
    {
        logo:'../images/outline_ballot_white_24dp.png',
       text:'Tables',
       span:'',


       fleche:'../images/outline_chevron_left_white_24dp.png'
    },
    {
        logo:'',
       text:'EXEMPLES',
       span:'',


       fleche:''
    }
    
]

function generElements(){
    //  CREATE ELEMENT
const divContainer=document.createElement('div')
//div menu
const divMenu=document.createElement('div')
//div menu logo
const divMenuLogo=document.createElement('div')
const imgMenuLogo=document.createElement('img')

//div menu left seyeu
const divMenuLeft=document.createElement('div')
const span1=document.createElement('span')
const span2=document.createElement('span')
const span3=document.createElement('span')
const span4=document.createElement('span')

const imgMenuleft=document.createElement('img')

//div sous menu
const divSousMenu=document.createElement('div')
// creaer class attribute
divContainer.setAttribute('class','contener')
divMenu.setAttribute('class','divMenu')
divMenuLogo.setAttribute('class','divMenuLogo')
divMenuLeft.setAttribute('class','seyeu')

//APPEND CHILD
divContainer.appendChild(divMenu)
divContainer.appendChild(divSousMenu)

divMenu.appendChild(divMenuLogo)
divMenu.appendChild(divMenuLeft)

divMenuLogo.appendChild(imgMenuLogo)

divMenuLeft.appendChild(span1)
divMenuLeft.appendChild(span2)
divMenuLeft.appendChild(span3)
divMenuLeft.appendChild(span4)
span4.appendChild(imgMenuleft)

return divContainer
}

tab.forEach((element,key) => {
    
    main.appendChild(generElements())
    main.children[key].firstChild.firstChild.firstChild.src=tab[key].logo
    main.children[key].firstChild.lastChild.firstChild.innerHTML=tab[key].text
    main.children[key].firstChild.lastChild.firstChild.style.color='white'
    main.children[key].firstChild.lastChild.firstChild.style.fontSize='2rem'
    main.children[key].firstChild.lastChild.children[1].className=tab[key].span
    
    main.children[0].firstChild.style.background='#2f7df6'
    main.children[key].firstChild.lastChild.lastChild.firstChild.src=tab[key].fleche
    
  
});
main.children[1].firstChild.lastChild.children[1].className=tab[2].span
// main.children[1].firstChild.lastChild.children[1].className=tab[3].span

const sp=document.querySelector('.sp')
const nav1=document.querySelectorAll('.nav1')
const nav2=document.querySelector('.nav2')



sp.addEventListener('click', ()=>{
    //  alert("hamza")
 
    nav2.remove()   






})