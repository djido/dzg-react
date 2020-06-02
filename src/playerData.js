import livakovic from "./images/livakovic.png";
import gvardiol from "./images/gvardiol.jpg";
import theophile from "./images/theophile.jpg";
import moro from "./images/moro.jpg";
import majer from "./images/majer.jpg";
import ademi from "./images/ademi.jpg";
import ivanusec from "./images/ivanusec.jpg";
import kadzior from "./images/kadzior.jpg";
import orsic from "./images/orsic.jpg";
import petkovic from "./images/petkovic.jpg";


export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      playerName: "Livaković",
      position: "vratar",
      country: "Hrvatska",
      nationalTeam: true,
      stranger: false,
      shirtNumber: 40,
      images: [
        {
          fields: {
            file: {
              url: livakovic
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
      playerName: "Theophile Catherine",
      position: "obrana",
      country: "Francuska",
      nationalTeam: false,
      stranger: true,
      shirtNumber: 28,
      images: [
        {
          fields: {
            file: {
              url: theophile
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
      playerName: "Gvardiol",
      position: "obrana",
      country: "Hrvatska",
      nationalTeam: false,
      stranger: false,
      shirtNumber: 32,
      images: [
        {
          fields: {
            file: {
              url: gvardiol
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
      playerName: "Ademi",
      position: "vezni red",
      country: "Makedonija",
      nationalTeam: true,
      stranger: true,
      shirtNumber: 5,
      images: [
        {
          fields: {
            file: {
              url: ademi
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
      playerName: "Ivanušec",
      position: "vezni red",
      country: "Hrvatska",
      nationalTeam: false,
      stranger: true,
      shirtNumber: 17,
      images: [
        {
          fields: {
            file: {
              url: ivanusec
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
      playerName: "Majer",
      position: "vezni red",
      country: "Hrvatska",
      nationalTeam: false,
      stranger: false,
      shirtNumber: 10,
      images: [
        {
          fields: {
            file: {
              url: majer
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
      playerName: "Moro",
      position: "vezni red",
      country: "Hrvatska",
      nationalTeam: false,
      stranger: false,
      shirtNumber: 27,
      images: [
        {
          fields: {
            file: {
              url: moro
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
      playerName: "Oršić",
      position: "napad",
      country: "Hrvatska",
      nationalTeam: true,
      stranger: false,
      shirtNumber: 99,
      images: [
        {
          fields: {
            file: {
              url: orsic
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
      playerName: "Kadzior",
      position: "napad",
      country: "Poljska",
      nationalTeam: true,
      stranger: true,
      shirtNumber: 92,
      images: [
        {
          fields: {
            file: {
              url: kadzior
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
      playerName: "Petković",
      position: "napad",
      country: "Hrvatska",
      nationalTeam: true,
      stranger: false,
      shirtNumber: 21,
      images: [
        {
          fields: {
            file: {
              url: petkovic
            }
          }
        }
      ]
    }
  },
];
