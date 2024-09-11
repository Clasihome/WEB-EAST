export default (data) => {
  return(
    {
      builderId: data._id ? data._id : "5fb2a5f3ea262c2e14e462ad",
      typeId: data.user ? "user" : "office",
      officeId: data.user ? data.user : data.office,
      primaryColor: data.primaryColor ? data.primaryColor : "#f2d40d",
      address: data.address ? data.address : "Lo Barnechea",
      email: data.email ? data.email : "hola@eastproperties.es",
      facebook: data.facebook ? data.facebook : "https://facebook.com",
      twitter: data.twitter ? data.twitter : "https://twitter.com",
      instagram: data.instagram ? data.instagram : "https://www.instagram.com/eastproperties/",
      favicon: data.favicon ? data.favicon : require("../images/icon.png"),      
      lat: data.lat ? data.lat : "-33.410167",
      lng: data.lng ? data.lng : "-70.655265",
      logo: data.logo ? data.logo : require("../images/logo.png"),
      logoDark: data.logoDark ? data.logoDark : require("../images/logo-dark.png"),
      movil: data.movil ? data.movil : "+56 9 2630 7841",
      phone: data.phone ? data.phone : "+56 9 2630 7841",
      footerText: data.footerText ? data.footerText : "Corredora de Propiedades Boutique en Santiago Oriente",
      home:{
        hero: {
          background: data.home && data.home.hero && data.home.hero.background ? data.home.hero.background : require("../images/template-home-hero-background.jpg"),
          title: data.home && data.home.hero && data.home.hero.title ? data.home.hero.title : "Tenemos propiedades <br /> exclusivas pensadas para tí"
        },        
        properties: {
          title: data.home && data.home.properties && data.home.properties.title ? data.home.properties.title : "Contamos con una selección exclusiva de propiedades.",
          maxProperties: data.home && data.home.properties && data.home.properties.maxProperties ? data.home.properties.maxProperties : 9,
          footer: data.home && data.home.properties && data.home.properties.footer ? data.home.properties.footer : "Estas son solo algunas de las propiedades que tenemos para ofrecerte",
          buttonText: data.home && data.home.properties && data.home.properties.buttonText ? data.home.properties.buttonText : "Ver más"
        },        
        about: {
          banner: {
            image: data.home && data.home.about && data.home.about.banner && data.home.about.banner.image ? data.home.about.banner.image : require("../images/template-home-about-hero-background.jpg"),
            title: data.home && data.home.about && data.home.about.banner && data.home.about.banner.title ? data.home.about.banner.title : "Corredora de Propiedades Boutique en Santiago Oriente ",
            subTitle: data.home && data.home.about && data.home.about.banner && data.home.about.banner.subTitle ? data.home.about.banner.subTitle : "Brindamos a nuestros clientes un servicio exclusivo. Acompañandoles de forma muy personalizada en todo el proceso compra, venta y arriendo.Desde el momento de la selección hasta el día de la entrega de llaves.",
            buttonText: data.home && data.home.about && data.home.about.banner && data.home.about.banner.buttonText ? data.home.about.banner.buttonText : "Conózcanos"
          }
        },  
        services: {
          items: data.home && data.home.services && data.home.services.items.length ? data.home.services.items : [
            {
              title: "Compras",
              description: ""
            },
            {
              title: "Arriendo",
              description: ""
            },
            {
              title: "Compras",
              description: ""
            }
          ]
        },  
        reviews: {
          items: data.home && data.home.reviews && data.home.reviews.items.length ? data.home.reviews.items : [
            {
              id: null,
              review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate sapien at nisi volutpat dictum. Maecenas vel lorem tellus. Sed sit amet sollicitudin nisi. Sed consectetur eget orci sit amet condimentum.",
              author: "Cliente 1"
            },
            {
              id: null,
              review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate sapien at nisi volutpat dictum. Maecenas vel lorem tellus. Sed sit amet sollicitudin nisi. Sed consectetur eget orci sit amet condimentum.",
              author: "Cliente 2"
            },
            {
              id: null,
              review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate sapien at nisi volutpat dictum. Maecenas vel lorem tellus. Sed sit amet sollicitudin nisi. Sed consectetur eget orci sit amet condimentum.",
              author: "Cliente 3"
            }
          ]
        }                    
      },
      about:{
        hero: {
          background: data.about && data.about.hero && data.about.hero.background ? data.about.hero.background : require("../images/template-about-hero-background.jpg"),
          title: data.about && data.about.hero && data.about.hero.title ? data.about.hero.title : "Un equipo de profesionales especializados en el sector inmobiliario."
        },
        history: {
          background: data.about && data.about.history && data.about.history.background ? data.about.history.background : require("../images/template-about-history-background.jpg"),
          description: data.about && data.about.history && data.about.history.description ? data.about.history.description : "<p>Corredora Boutique de propiedades especializada en el sector oriente de la capital: Lo Barnechea, Vitacura y las Condes. Ofrecemos también servicios de relocation para clientes internacionales .<p/>",
          title: data.about && data.about.history && data.about.history.title ? data.about.history.title : "Nuestra Historia"
        },
        description: {
          items: data.about && data.about.description && data.about.description.items.length ? data.about.description.items : [
            {
              title: "Misión",
              description: "Nos enfocamos en captar y ofrecer viviendas que se revalorizan en el tiempo, satisfaciendo así las necesidades de nuestros clientes nacionales e internacionales."
            },
            {
              title: "Visión",
              description: "Brindamos a nuestros clientes un servicio exclusivo. Acompañandoles de forma muy personalizada en todo el proceso compra, venta y arriendo.Desde el momento de la selección hasta el día de la entrega de llaves."
            }
         
          ]
        },
        stats: {
          proffesionals: data.about && data.about.stats && data.about.stats.proffesionals ? data.about.stats.proffesionals : 70,
          properties: data.about && data.about.stats && data.about.stats.properties ? data.about.stats.properties : 1000,
          years: data.about && data.about.stats && data.about.stats.years ? data.about.stats.years : 50,
          transactions: data.about && data.about.stats && data.about.stats.transactions ? data.about.stats.transactions : 500
        },
        team: {
          visible: true,
          items: data.about && data.about.team && data.about.team.items.length ? data.about.team.items : [
            {
              avatar: require("../images/template-team-member-1.jpg"),
              cv1: "Abogada de formación, y banquera de profesión. Nací en Madrid, pero Santiago de Chile es mi hogar desde hace años. ¡Tanto es así que mis hijos son chilenos! ",
              cv2:"Después de una larga trayectoria profesional desempeñada en distintas entidades bancarias, tanto en España como en Chile, decido crear East Properties para dedicarme a una de mis pasiones, el mundo del real estate. Las casas y los lugares me inspiran, y procuro transmitir esa inspiración a la hora de mostrar una propiedad a mis clientes.",
              cv3:"Otra de mis pasiones es ayudar a las personas a establecerse de forma exitosa en nuevos países, para ello cuento con el bagaje de mi propia experiencia como expatriada, donde la ayuda una empresa profesional y con experiencia es clave para que el proceso de reubicación sea un éxito",
              email: "Broker & Founder",
              fullName: "Maria de Gracia Ouaglou Barrera ",
              phone: "+56 9 5555 5555"
            }                         
          ]
        },
        ubication: {
          title:  data.about && data.about.ubication && data.about.ubication.title ? data.about.ubication.title : "¿Necesitas vender, arrendar o comprar una propiedad? Somos tu socio perfecto"
        }
      },
      contact: {
        map: {
          title: data.contact && data.contact.map && data.contact.map.title ? data.contact.map.title : "Encuéntranos en Santiago",
          subTitle: data.contact && data.contact.map && data.contact.map.subTitle ? data.contact.map.subTitle : "234"
        },
        title: data.contact && data.contact.title ? data.contact.title : "¿Dudas? ¿Consultas? Estamos aquí para ayudarlo.",
        subTitle: data.contact && data.contact.subTitle ? data.contact.subTitle : "Envienos un mensaje y uno de nuestros asesores se pondra en contacto a la brevedad"        
      },
    }
  )
}