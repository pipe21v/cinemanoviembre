let peliculas=[
    {
        nombre:"Hallowen la noche final",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/hallowen%20ultimo%20poster.jpg?alt=media&token=4cc9a9c8-c7bb-4462-9675-2dd057e889f0"

    },
    {
        nombre:"La noche del demonio",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/jeeppers.jpg?alt=media&token=c6c07002-c476-4095-900f-011047e967dc"
    },
    {
        nombre:"Minions",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/minions2posternuevo.jpg?alt=media&token=dc7c97ca-ebb7-4342-b0c9-a9fd7b0f1af1"
    },
    {
        nombre:"Tadeo",
        duracion:104,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/tadeo3nuevoposter.jpg?alt=media&token=3b31d4c0-3c0b-4317-ba8a-fc47a47e2a84"
    },
    {
        nombre: "Wakanda forever",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/wakanda.jpg?alt=media&token=5716b762-e877-4512-99ce-4e09cce7f690"
    },
    {
        nombre: "Sonrie",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemafelipe-abcbf.appspot.com/o/ba08a64d79b2-smile_cineco_2-poster_480x670.jpg?alt=media&token=e6244463-4560-42b1-8403-59b797737848"
    },
    {
        nombre: "Avatar 2",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemafelipe-abcbf.appspot.com/o/9fe9cf28c779-480x670.png?alt=media&token=f84f60d5-7917-45a3-84cc-31907646591f"
    },
    {
        nombre: "Amenaza Explosiva",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemafelipe-abcbf.appspot.com/o/6893d3af31b3-hh_poster-dsktp_480x670.jpg?alt=media&token=a0a09071-3565-4c55-8527-488b958f5ac4"
    },
    {
        nombre: "Gato con Botas",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemafelipe-abcbf.appspot.com/o/6556104b4e3a-480x670.png?alt=media&token=b2e96ae2-8444-4056-a606-5512613e3133"
    },
    {
        nombre: "La noche del Apocalipsis",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemafelipe-abcbf.appspot.com/o/17b1b97755f4-poster_480x670.png?alt=media&token=d142dc65-ae63-4d0a-9ed4-cf8fbe585d6a"
    }
]

//creamos una referencia al espacio HTML donde queremos
//hacer el render(PINTAR ETIQUETAS)
let etiquetaFila=document.getElementById("fila")

//SI YA TENGO DATOS QUE NORMALMENTE LLEGAN AL FRONT
//COMO UN ARREGLO DE OBJETOS DEBEMOS RECORRER Y DEPURAR
//DICHA INFORMACION 
peliculas.forEach(function(pelicula){
    // para pintar la informacion de cada pelicula 
    //debemos aplicar una tecnica conocida como traversing
    //TRAVERSING=crear etiquetas de HTML desde Js
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    let poster=document.createElement("img")
    poster.classList.add("img-fluid","w-100")
    poster.src=pelicula.poster

    let nombre=document.createElement("h3")
    nombre.classList.add("text-center","fw-bold")
    nombre.textContent=pelicula.nombre

    let duracion=document.createElement("h5")
    duracion.classList.add("text-start")
    duracion.textContent= "Duracion: "+pelicula.duracion+" Min"

    //PADRES E HIJOS
    etiquetaFila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(duracion)
})