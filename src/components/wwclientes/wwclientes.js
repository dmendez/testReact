import React    from "react";
import template from "./wwclientes.jsx";

class wwclientes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientes: [
        { id: 1, nombre:'Junior Gabriel Arias', imagen:'http://www.peñarol.org/imgnoticias/201608/W100/13791.png', balance:11891},
        { id: 2, nombre:'Miguel Murillo', imagen:'http://www.peñarol.org/imgnoticias/201608/W100/13789.png', balance:21891},
        { id: 3, nombre:'Gastón Rodríguez', imagen:'http://www.peñarol.org/imgnoticias/201609/W100/13939.jpg', balance:31891},
        { id: 4, nombre:'Diego Rossi', imagen:'http://www.peñarol.org/imgnoticias/201608/W100/13790.png', balance:41891},
        { id: 5, nombre:'Nicolás Dibble', imagen:'http://www.peñarol.org/imgnoticias/201608/W100/13794.png', balance:51891},
        { id: 6, nombre:'Gastón Guruceaga', imagen:'http://www.peñarol.org/imgnoticias/201608/W100/13811.png', balance:61891}
      ]
    }
  }
  render() {
    return template.call(this);
  }
}

export default wwclientes;
