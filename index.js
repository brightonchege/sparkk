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
       headi.textContent = "Spark music"
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
