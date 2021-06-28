const fetch = require('node-fetch');
const uuid = require('uuid').v1;
const noData = require('./src/_context/state');

const props = {
  office: "5e8e36b31c9d440000d35090",
  name: "Rojas Iñiguez Propiedades",
  email: "contacto@ripropiedades.cl",
  address: "Fundo Ranquil, km 24, Riñinahue, Lago Ranco",
  phone: "+56 998877747",
  mobile: "+56 966888168",
  typeId: 'office',
  lat: '-72.2105',
  lng: '-40.321',
  facebook: "https://www.facebook.com/Rojas-I%C3%B1iguez-100150131739775",
  instagram: "https://www.instagram.com/ri_propiedades/",
  primaryColor: "#1c8742",
  secondaryColor: "#ffffff",
  favicon: "",
  logo: "/logo.png"
}

class FormatData{
  constructor(props){
    this.builderId = props._id;
    this.office = {
      typeId: props.user ? "user" : "office",
      id: props.user ? props.user : props.office,
      name: props.name,
      email: props.email,
      address: props.address,
      phone: props.phone,
      mobile: props.mobile || '',
      facebook: props.facebook || '',
      twitter: props.twitter || '',
      instagram: props.instagram || '',
      lat: props.lat ?  props.lat : '-30',
      lng: props.lng ? props.lng : '-70',
    };

    this.main = {
      primaryColor: props.primaryColor,
      secondaryColor: "#ffffff",
      favicon: "",
      logo:{
        isImage: props.logo ? true : false,
        value: props.logo,
      },
      logoDark:{
        isImage: props.logoDark ? true : false,
        value: props.logoDark,
      },      
    };

    this.home = {
      hero:{
        visible: true,
        title: "",
        background: "",
      },
      properties:{
        visible: true,
        title: "",
        footer: "",
        bannerImage: "",
        buttonText: "",
        items: "",
      },
      about:{
        banner:{
          visible: true,
          image: "",
          title: "",
          subTitle: "",
          buttonText: "",
        },
      },
      services:{
        visible: true,
        items: "",
      },
      reviews:{
        visible: true,
        items: "",
      },
      contact:{
        visible: true,
        title: "¿Necesitas vender, arrendar o comprar una propiedad? Somos tu socio perfecto.",
        buttonText: "contacto"
      },
    }
    this.about = {};
    this.paginateProperties = [];
    this.singleProperty = {
      mainImage: "/property/main.jpg",
      images: [
        "/property/main.jpg",
        "/property/1.jpg",
        "/property/2.jpg",
        "/property/3.jpg",
        "/property/4.jpg",
        "/property/5.jpg",
      ],
      publicObservations: "Esta es la descripción púbica hecha pr el usuario donde pone lo que quiera poner. Hermosa Casa en lomas verdes, con 3 pisos. Aqui vivio drew Barirmore durante su corta estadia en Chile.",
      operation: "Arriendo",
      code: "EB092734",
      title: "Casa en Santiago de Chile",
      currency: "UF",
      value: "75.000",
      ubication:{
        region: "Rosario",
        commune: "Casorra alzamona",
        location:{
          coordinates: ["0", "0"],
        }
      },
      characteristics:[
        {
          type: "GENERAL",
          id: uuid(),
          name: "Casa",
          icon: "House"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Precio",
          icon: "Price"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Construida el 12/06/98",
          icon: "Building"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Sup. Construida 100m2",
          icon: "Surface"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Sup. Total 180m2",
          icon: "Surface"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Baños 2",
          icon: "Bath"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Venta",
          icon: "Sale"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Balcon",
          icon: "Balcony"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Habitaciones 3",
          icon: "Rooms"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Pisos 2",
          icon: "Floor"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Estacionamientos",
          icon: "Parking"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Gasto común 0",
          icon: "Spending"
        },
        {
          type: "GENERAL",
          id: uuid(),
          name: "Calefación",
          icon: "Heating"
        },
        {
          type: "OTHERS",
          id: uuid(),
          name: "Baño de Servicio",
          icon: "Extra"
        },
        {
          type: "OTHERS",
          id: uuid(),
          name: "Calefacción central",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Balcón",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Cerca a areas verdes",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Sist. de alarma",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Seguridad 24 hs",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Cuarto de servicio",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Pátio",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Piscina",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Chimenea",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Área verde",
          icon: "Extra"
        },             
        {
          type: "OTHERS",
          id: uuid(),
          name: "Terraza",
          icon: "Extra"
        },                                                                               
      ]
      ,
      relatedUser:{
        id: uuid(),
        firstName: "Adrian",
        lastName: "Carcamo",
        description: "Ingeniero Comercial, Master en Finanzas. Inversor inmobiliario, con 6 años de experiencia en Banca, Mesa de Dinero. 6 años en el corretaje de propiedades, especializado en el manejo de cartera de propiedades. ",
        avatar: "/team-member-1.jpg",
        email:"acarcamo@clasihome.cl",
        phone: "+56 9 5555 5555",
        jobTitle: "Ejecutivo comercial"
      },
    };
  }
}

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  //const builderId = process.env.BUILDER_ID;
  //console.log("BUILDER ID",builderId);
  //const data = await fetch(`https://api.clasihome.com/rest/builders?builderId=${builderId}`);
  //const result = await data.json();
  /*let propertiesUrl = `https://api.clasihome.com/rest/properties?id=${result.user ? result.user : result.office }&typeId=${result.user ? "user" : "office"}&status=PUBLICADA&limit=6`;
  if(!result.home.properties.items){
    propertiesUrl = 'https://api.clasihome.com/rest/properties?id=5e8e36b31c9d440000d35090&typeId=office&status=PUBLICADA&limit=6';
  }
  const propertiesData = await fetch(propertiesUrl);
  const propertiesResult = await propertiesData.json();
  result.home.properties.items = propertiesResult.properties;*/
  const formatedData = new FormatData(props);
  const finalData = JSON.stringify(formatedData);
  // create node for build time data example in the docs
  console.log("DATA", finalData);
  createNode({
    // nameWithOwner and url are arbitrary fields from the data
    data:finalData,
    // required fields
    id: `example-build-time-data`,
    parent: null,
    children: [],
    internal: {
      type: `Initial`,
      contentDigest: createContentDigest({ data: finalData }),
    },
  })
}