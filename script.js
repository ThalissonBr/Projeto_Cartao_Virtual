function togglemode() {
  const html = document.documentElement
   html.classList.toggle("lightmode")

  const img = document.querySelector("#profile img")


  if(html.classList.contains('lightmode')){
    img.setAttribute('src','./assets/lightratao.png')
  } else{
    img.setAttribute('src','./assets/perfilfoto.png')
  }

   
}
