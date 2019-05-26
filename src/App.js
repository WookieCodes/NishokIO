import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from './pages/home-page/home-page';

export const particlesSettings = {
   "particles": {
       "number": {
           "value": 69,
           "density": {
               "enable": false,
               "value_area": 1690
           }
       },
       "color": {
           "value": "#00020e"
       },
       "shape": {
           "type": "circle",
           "stroke": {
               "width": 0,
               "color": "#000000"
           },
           "polygon": {
               "nb_sides": 5
           },
           "image": {
               "src": "img/github.svg",
               "width": 100,
               "height": 100
           }
       },
       "opacity": {
           "value": 0,
           "random": false,
           "anim": {
               "enable": false,
               "speed": 1,
               "opacity_min": 0.1,
               "sync": false
           }
       },
       "size": {
           "value": 5,
           "random": true,
           "anim": {
               "enable": true,
               "speed": 12,
               "size_min": 2,
               "sync": false
           }
       },
       "line_linked": {
           "enable": true,
           "distance": 169,
           "color": "#62d5ff",
           "opacity": 0.6,
           "width": 0.9
       },
       "move": {
           "enable": true,
           "speed": 3,
           "direction": "none",
           "random": true,
           "straight": false,
           "out_mode": "out",
           "bounce": false,
           "attract": {
               "enable": true,
               "rotateX": 1200,
               "rotateY": 1200
           }
       }
   },
   "interactivity": {
       "detect_on": "window",
       "events": {
           "onhover": {
               "enable": true,
               "mode": "grab"
           },
           "onclick": {
               "enable": false,
               "mode": "bubble"
           },
           "resize": true,
           "onresize": {
                "enable": true,
                "density_auto": true,
                "density_area": 400
           }
       },
       "modes": {
           "grab": {
               "distance": 169,
               "line_linked": {
                   "opacity": 0.8
               }
           },
           "bubble": {
               "distance": 169,
               "size": 10,
               "duration": 1,
               "opacity": 0.8,
               "speed": 5
           },
           "repulse": {
               "distance": 90,
               "duration": 0.4
           },
           "push": {
               "particles_nb": 4
           },
           "remove": {
               "particles_nb": 2
           }
       }
   },
   "retina_detect": true
};

export const particlesSettingsMobile = {
    "particles": {
        "number": {
            "value": 23,
            "density": {
                "enable": false,
                "value_area": 1690
            }
        },
        "color": {
            "value": "#00020e"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 12,
                "size_min": 2,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 169,
            "color": "#62d5ff",
            "opacity": 0.6,
            "width": 0.9
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 1200,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": false,
                "mode": "bubble"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 169,
                "line_linked": {
                    "opacity": 0.8
                }
            },
            "bubble": {
                "distance": 169,
                "size": 10,
                "duration": 1,
                "opacity": 0.8,
                "speed": 5
            },
            "repulse": {
                "distance": 90,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
 };

function App() {
   return (
      <Router>
         <div className="App">
            <Route path="/" exact component={HomePage}/>
         </div>
      </Router>
   );
}

export default App;
