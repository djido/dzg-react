import fanshop from "./images/fanshop.jpg"
import defaultImg from "./images/defaultBcg.jpg";
import img1 from "./images/training.jpg";
import img2 from "./images/tracksuit.jpg";
import img3 from "./images/jacket-blue.jpg";
import img4 from "./images/jacket-black.jpg";
import img5 from "./images/dzg-shirt.jpg";
import img6 from "./images/dinamo-shirt.jpg";
import img7 from "./images/grey-shirt.jpg";
import img8 from "./images/ucl-shirt.jpg";
import img9 from "./images/panorama-shirt.jpg";
import img10 from "./images/home.jpeg";
import img11 from "./images/away.jpeg";
import img12 from "./images/third.jpeg";

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Trenirka za trening",
      slug: "trening-trenirka",
      type: "Trenirka",
      price: 300,
      size: 200,
      quantity: 1,
      sale: false,
      addidasWinter: false,
      featured: false,
      description:
	  "Trenirka trening gornji dio plava iz sezone 18/19",
      extras: [
        "Trenirka",
        "Sezona 2018-19",
        "Poliestersko vlakno 100%",
		"Dostupno u svim veličinama",
        "Zemlja podrijetla: Tajland"
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: defaultImg
            }
          }
        },
		 {
          fields: {
            file: {
              url: fanshop
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "Službena trenirka",
      slug: "sluzbena-trenirka",
      type: "Trenirka",
      price: 600,
      size: 250,
      quantity: 1,
      sale: false,
      addidasWinter: true,
      featured: false,
      description:
	  "Službena trenirka gornji dio crna iz sezone 19/10",
      extras: [
        "Trenirka",
        "Sezona 2019-20",
		"addidasWinter",
        "Poliestersko vlakno 100%",
		"Dostupno u svim veličinama",
        "Zemlja podrijetla: Tajland"
      ],
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: defaultImg
            }
          }
        },
		{
          fields: {
            file: {
              url: fanshop
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "Plava jakna",
      slug: "plava-jakna",
      type: "Jakna",
      price: 400,
      size: 300,
      quantity: 1,
      sale: true,
      addidasWinter: true,
      featured: false,
      description:
	  "Službena trenirka gornji dio crna iz sezone 19/10",
      extras: [
        "Jakna",
        "Sezona 2018-19",
        "Poliestersko vlakno 100%",
		"Dostupno u svim veličinama",
        "Zemlja podrijetla: Tajland"
      ],
      images: [
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: defaultImg
            }
          }
        },
		{
          fields: {
            file: {
              url: fanshop
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "Crna jakna",
      slug: "crna-jakna",
      type: "Jakna",
      price: 800,
      size: 400,
      quantity: 1,
      sale: true,
      addidasWinter: true,
      featured: false,
      description:
	  "Službena jakna gornji dio crna iz sezone 19/10",
      extras: [
        "Jakna",
        "Sezona 2018-19",
        "Poliestersko vlakno 100%",
		"Dostupno u svim veličinama",
        "Zemlja podrijetla: Tajland"
      ],
      images: [
        {
          fields: {
            file: {
              url: img4
            }
          }
        },
        {
          fields: {
            file: {
              url: defaultImg
            }
          }
        },
		{
          fields: {
            file: {
              url: fanshop
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "Siva DZG majica",
      slug: "siva-dzg-majica",
      type: "Majica",
      price: 50,
      size: 300,
      quantity: 2,
      sale: false,
      addidasWinter: false,
      featured: false,
      description:
	  "Službena Majica gornji dio siva iz sezone 19/10",
      extras: [
        "Majica",
        "Sezona 2018-19",
        "Poliestersko vlakno 100%",
		"Dostupno u svim veličinama",
        "Zemlja podrijetla: Tajland"
      ],
      images: [
        {
          fields: {
            file: {
              url: img5
            }
          }
        },
        {
          fields: {
            file: {
              url: defaultImg
            }
          }
        },
		{
          fields: {
            file: {
              url: fanshop
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "Dinamo Navy Majica",
      slug: "navy-majica",
      type: "Majica",
      price: 250,
      size: 350,
      quantity: 2,
      sale: false,
      addidasWinter: false,
      featured: false,
      description:
	  "Dinamo Navy Majica iz sezone 19/10",
      extras: [
        "Majica",
        "Sezona 2018-19",
        "Poliestersko vlakno 100%",
		"Dostupno u svim veličinama",
        "Zemlja podrijetla: Tajland"
      ],
      images: [
        {
          fields: {
            file: {
              url: img6
            }
          }
        },
        {
          fields: {
            file: {
              url: defaultImg
            }
          }
        },
		{
          fields: {
            file: {
              url: fanshop
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "Siva Dinamo Majica",
      slug: "siva-majica",
      type: "Majica",
      price: 180,
      size: 400,
      quantity: 2,
      sale: true,
      addidasWinter: false,
      featured: false,
      description:
	  "Službena trenirka gornji dio crna iz sezone 19/10",
      extras: [
        "Trenirka",
        "Sezona 2018-19",
        "Poliestersko vlakno 100%",
		"Dostupno u svim veličinama",
        "Zemlja podrijetla: Tajland"
      ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: defaultImg
            }
          }
        },
		{
          fields: {
            file: {
              url: fanshop
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "Dinamo Liga Prvaka",
      slug: "dinamo-lp",
      type: "Majica",
      price: 100,
      size: "m",
      quantity: 2,
      sale: true,
      addidasWinter: false,
      featured: false,
      description: "Majica Dinamo - Liga Prvaka za sezonu 2019/2020 predstavlja novi standard. Fantastičan dizajn upotpunjen vertikalnim bijelim crtama, grbom s tri zvjezdice i prepoznatljivim adidas elementima nikoga neće ostaviti ravnodušnim. Autentičnost koju garantiraju hologramski elementi i vrhunska prilagodljivost tijelu sportaša čine ga obaveznim dijelom kolekcije svakog navijača Dinama.",
	  extras: [
		"Majica Liga Prvaka 2019-2020",
        "Poliestersko vlakno 100%",
        "Besplatan tisak broja i Natpisa",
		"Dostupno u svim veličinama",
        "Zemlja podrijetla: Tajland"
      ],
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        },
        {
          fields: {
            file: {
              url: defaultImg
            }
          }
        },
		{
          fields: {
            file: {
              url: fanshop
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "9"
    },
    fields: {
      name: "Dinamo Panorama",
      slug: "dinamo-panorama",
      type: "Majica",
      price: 80,
      size: 500,
      quantity: 3,
      sale: false,
      addidasWinter: false,
      featured: false,
      description:
	  "Dinamo Panorama Majica iz sezone 19/10",
      extras: [
       "Majica",
        "Sezona 2018-19",
        "Poliestersko vlakno 100%",
		"Dostupno u svim veličinama",
        "Zemlja podrijetla: Tajland"
      ],
      images: [
        {
          fields: {
            file: {
              url: img9
            }
          }
        },
        {
          fields: {
            file: {
              url: defaultImg
            }
          }
        },
		{
          fields: {
            file: {
              url: fanshop
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "10"
    },
    fields: {
      name: "domaći dres",
      slug: "domaci-dres",
      type: "Dres",
      price: 549,
      size: 600,
      quantity: 5,
      sale: true,
      addidasWinter: false,
      featured: true,
      description:
	  "Domaći dres iz sezone 19/10",
      extras: [
       "Dres",
        "Sezona 2018-19",
        "Poliestersko vlakno 100%",
		"Dostupno u svim veličinama",
        "Zemlja podrijetla: Tajland"
      ],
      images: [
        {
          fields: {
            file: {
              url: img10
            }
          }
        },
        {
          fields: {
            file: {
              url: defaultImg
            }
          }
        },
		{
          fields: {
            file: {
              url: fanshop
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "11"
    },
    fields: {
      name: "Gostujući dres",
      slug: "gostujuci-dres",
      type: "Dres",
      price: 549,
      size: "L",
      quantity: 100,
      sale: true,
      addidasWinter: false,
      featured: true,
      description:
	  "Gostujući dres GNK Dinamo za sezonu 2019/2020 predstavlja novi standard. Fantastičan dizajn upotpunjen vertikalnim bijelim crtama, grbom s tri zvjezdice i prepoznatljivim adidas elementima nikoga neće ostaviti ravnodušnim. Autentičnost koju garantiraju hologramski elementi i vrhunska prilagodljivost tijelu sportaša čine ga obaveznim dijelom kolekcije svakog navijača Dinama.",
      extras: [
        "Gostujući dres 2019-2020",
        "Poliestersko vlakno 100%",
        "Besplatan tisak broja i Natpisa",
		"Dostupno u svim veličinama",
        "Zemlja podrijetla: Tajland"
      ],
      images: [
        {
          fields: {
            file: {
              url: img11
            }
          }
        },
        {
          fields: {
            file: {
              url: defaultImg
            }
          }
        },
		{
          fields: {
            file: {
              url: fanshop
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "12"
    },
    fields: {
      name: "treći dres",
      slug: "treci-dres",
      type: "Dres",
      price: 549,
      size: 1000,
      quantity: 150,
      sale: true,
      addidasWinter: false,
      featured: true,
      description:
	   "Treći dres GNK Dinamo za sezonu 2019/2020 predstavlja novi standard. Fantastičan dizajn, upotpunjen grbom s tri zvjezdice i prepoznatljivim adidas elementima nikoga neće ostaviti ravnodušnim. Autentičnost koju garantiraju hologramski elementi i vrhunska prilagodljivost tijelu sportaša čine ga obaveznim dijelom kolekcije svakog navijača Dinama.",
      extras: [
        "Treći dres 2019-2020",
        "Poliestersko vlakno 100%",
        "Besplatan tisak broja i Natpisa",
		"Dostupno u svim veličinama",
        "Zemlja podrijetla: Tajland"
      ],
      images: [
        {
          fields: {
            file: {
              url: img12
            }
          }
        },
        {
          fields: {
            file: {
              url: defaultImg
            }
          }
        },
		{
          fields: {
            file: {
              url: fanshop
            }
          }
        }
      ]
    }
  }
];
