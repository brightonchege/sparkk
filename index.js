const title = document.querySelector('title')
      title.textContent = "Spark movies"
 const link = document.querySelector('link')
      link.href = "index.css"
      link.rel = "stylesheet"



const container = document.createElement('div')
      container.className = "container"
const animation = document.createElement('div')
      animation.className = "animation"
const topp = document.createElement('div')
      topp.className="top"
const  headi = document.createElement('h1')
       headi.textContent = "Spark movies"
const searcharea = document.createElement('div')
      searcharea.className = "searcharea"
const inputarea = document.createElement('input')
      inputarea.type = "text"
      inputarea.placeholder = "search for music"
      inputarea.id='searchmusic'

const  button1 = document.createElement('button')
      button1.className="search"
      button1.id='search'
      button1.textContent="search"
const button2 = document.createElement('button')
      button2.className='clear'
      button2.id="clear"
      button2.textContent="clear"
const center = document.createElement('div')
      center.id="middle"

document.body.append(container)
container.append(animation,topp,center)
topp.append(headi,searcharea)
searcharea.append(inputarea,button1,button2)


const searching = document.getElementById('search')
searching.addEventListener('click',()=>{
    for(var i = 0; i < 30 ; i++){
        const middle = document.getElementById('middle')
        const moviecontainer = document.createElement('div')
              moviecontainer.className="moviecontainer"
 moviecontainer.addEventListener('click',()=>{
  believer = Math.floor(Math.random() * 14) + 1
  if (believer === 1) { beli = "#214559",bola = '#262b2f'}  if (believer === 2) { beli = "#4f1507",bola = '#3b2820'}
  if (believer === 3) { beli = "#00626f",bola = '#00022e'}  if (believer === 4) { beli = "#110022",bola = '#050d25'}
  if (believer === 5) { beli = "#112222",bola = '#2a293e'}  if (believer === 6) { beli = "#fb5581",bola = '#eeaaff'}
  if (believer === 7) { beli = "#29304e",bola = '#033500'}  if (believer === 8) { beli = "#483c3c",bola = '#a22452'}
  if (believer === 9) { beli = "#373e02",bola = '#11574a'}  if (believer === 10) { beli = "#05472a",bola = '#343c4c'}
  if (believer === 11) { beli = "#d90166",bola = '#490648'}  if (believer === 12) { beli = "#316c6b",bola = '#4d233d'}
  if (believer === 13) { beli = "#76424e",bola = '#4d233d'}  if (believer === 14) { beli = "#00022e",bola = '#112222'}
               moviecontainer.style.background = beli
 })
        middle.append(moviecontainer)
              const clear = document.getElementById('clear')
              clear.addEventListener('click',()=>{
                  moviecontainer.remove()
              })
    
    }
 
      let searchitem = document.getElementById('searchmusic').value
      const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '68ca2b29famsh3659961ddfd0bc6p13afa2jsn2558945f180c',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    let search
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${searchitem}`, options)
        .then(response => response.json())
        .then((response) => {

        })
})
