const APIURL =`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
fetch(APIURL)
    .then(function(APIfiles){
     return APIfiles.json()

    })
    .then(function(jsonAPIcontent){

        jsonAPIcontent.results.forEach(movies => {
        
            let titre =movies.original_title
            let apreciation=movies.overview
            let photo=IMGPATH+movies.backdrop_path
            let compte=movies.vote_average

            creationfilm(photo,titre,apreciation,compte)
        });
    })

function creationfilm(photos,titles,votes,descs){
const body =document.querySelector('body')
const main =document.querySelector('main')


//Create tag 

const movie=document.createElement('div')
const img=document.createElement('img')
const divmov=document.createElement('div')
const title=document.createElement('h4')
const spanchang=document.createElement('span')
const overview=document.createElement('div')
const p=document.createElement('p')

//Attribut
movie.setAttribute('class','movie')
img.setAttribute('src', photos)
divmov.setAttribute('class','div-mov')
title.setAttribute('class','title')
spanchang.setAttribute('class','spanchang')
overview.setAttribute('class','overview')

//ADD CLASS listStyle: 
movie.classList.add('movie')
divmov.classList.add('div-mov')
title.classList.add('title')
spanchang.classList.add('spanchang')
overview.classList.add('overview')




//Append

main.append(movie)


movie.appendChild(img)
movie.appendChild(divmov)
movie.appendChild(overview)

divmov.appendChild(title)
divmov.appendChild(spanchang)

overview.appendChild(p)

body.appendChild(main)

}


     