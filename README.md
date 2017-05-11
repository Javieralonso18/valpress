# Valpress v1.0

EN : Framework for javascript + jquery with which you can validate in real time what users enter and only allow them to enter valid data.It works in any browser and platform. <br>
ES : Marco de trabajo para javascript + jquery con el cual podrá validar en tiempo real lo que ingresen los usuarios y solo permitir que pulsen datos validos.Funciona en cualquier navegador y plataforma.
 
## Installation | Instalación

EN : Include this script on your web page.You must have installed Jquery.<br>
ES : Incluye este script en tu pagina web.Debe tener instalado ademas Jquery.

<script type="text/javascript" src="jquery.min.js"></script>
<b><script type="text/javascript" src="jquery.valpress.min.js"></script></b>

## Properties | Propiedades


## Usage | Uso

EN : Initialize in a script or main.js its input text, textarea or other element to validate.<br>
ES : Inicializar en dentro de un script o main.js sus input text , textarea u otro elemento a validar.

  $("#fu_telef , #fu_dni").valpress({<br>
    number:true<br>
  });<br>

  $("#fu_nombre , #fu_apepat , #fu_apemat").valpress({<br>
    letter: true,<br>
    space: true,<br>
    _follow_space:true<br>
  });<br>

  $("#fu_usuario").valpress({<br>
    letter: true,<br>
    number: true,<br>
    _autocomplete:false<br>
  });<br>

  $("#fu_email").valpress({<br>
    all:true,<br>
    _unique:"@",<br>
    _autocomplete:false<br>
  });

  $("#fu_clave ,#fu_clave2").valpress({<br>
    all:true,<br>
    _autocomplete:false<br>
  });




## Credits | Creditos



## License | Licencia

EN : You can view the license in LICENSE.md
ES : Puede ver la licencia en LICENSE.md
