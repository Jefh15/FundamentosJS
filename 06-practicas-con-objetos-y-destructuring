// Practicar con los  objetos


//Creo el objeto
const web = {
  nombre: 'bluuweb',
  links: {
    enlace: 'www.bluuweb.cl'
  },
  redesSociales:{
    youtube:{
      enlace: 'youtube.com/bluuweb',
      nombre: 'bluuweb yt'
    },
    facebook:{
      enlace: 'facebook.com/bluuweb',
      nombre: 'bluuweb fb'
    }
  }
}

// acceder al enlace de YT SIN DESTRUCTURING
// padre = web
// propiedades = redesSociales
// propiedades = youtube
// propiedades = enlace
// lo cual es asi: web.redesSociales.youtube.enlace
const enlaceYT = web.redesSociales.youtube.enlace
console.log(enlaceYT) // youtube.com/bluuweb



// DESTRUCTURING
// hago desestructuring mas facil de las propiedades de (web.redesSociales.youtube)
// quiero acceder al enlace y nombre de esa propiedad
const {enlace, nombre} = web.redesSociales.youtube
console.log(enlace) // youtube.com/bluuweb
console.log(nombre) // bluuweb yt
