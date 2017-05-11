# Valpress v1.0

EN : Framework for javascript + jquery with which you can validate in real time what users enter and only allow them to enter valid data.It works in any browser and platform. <br>
ES : Marco de trabajo para javascript + jquery con el cual podrá validar en tiempo real lo que ingresen los usuarios y solo permitir que pulsen datos validos.Funciona en cualquier navegador y plataforma.
 
## Installation | Instalación

EN : Include this script on your web page.You must have installed Jquery.<br>
ES : Incluye este script en tu pagina web.Debe tener instalado ademas Jquery.

<script type="text/javascript" src="jquery.min.js"></script>
<b><script type="text/javascript" src="jquery.valpress.min.js"></script></b>

## Predefined validations | Validaciones predefinidas

### all (boolean)
EN : All printable characters can be entered.<br>
ES : Se pueden ingresar todos los caracteres imprimibles.

$("#password").valpress({<br>
    all:true<br>
  });<br>

### number (boolean)
EN : You can only enter numbers.<br>
ES : Solo se puede ingresar numeros.

$("#edad").valpress({<br>
    number:true<br>
  });<br>

### number_roman (boolean)
EN : Only Roman numerals can be entered.<br>
ES : Solo se puede ingresar numeros romanos.

$("#category").valpress({<br>
    number_roman:true<br>
  });<br>

### letter (boolean)
EN : You can only enter letters.<br>
ES : Solo se puede ingresar letras.

$("#nombre").valpress({<br>
    letter:true<br>
  });<br>

### space (boolean)
EN : You can only enter spaces.<br>
ES : Solo se puede ingresar espacios en blanco.

$("#space").valpress({<br>
    space:true <br>
  });<br>

### include (string)(custom)
EN : Handles autocompletion of the element.<br>
ES : Recibe y valida una serie de caracteres.

$("#user").valpress({<br>
    include:"a,b,c"<br>
  });<br>
  <br>
  or
  <br>
  <br>
  $("#user").valpress({<br>
    include:"ascii:97,ascii:98,ascii:99"<br>
  });<br>
  
### exclude (string)(custom)
EN : Validates that the entered value is only repeated once.<br>
ES : Recibe e invalida una serie de caracteres.

$("#user").valpress({<br>
    all:true, <br>
    exclude:"a,b,c"<br>
  });<br>
  <br>
  or
  <br>
  <br>
  $("#user").valpress({<br>
    all:true,<br>
    exclude:"ascii:97,ascii:98,ascii:99"<br>
  });<br>

## Properties | Propiedades

### _maxlength (integer)
EN : Limits the number of characters entered to a specified maximum.<br>
ES : Limita el numero de caracteres ingresados a un maximo especificado.

### _minlength (integer)
EN : Limits the number of characters entered to a specified minimum.<br>
ES : Limita el numero de caracteres ingresados a un minimo especificado.

### _readonly (boolean)(default=false)
EN : Prevents typing in the element.<br>
ES : Evita que se puede escribir en el elemento.

### _autocomplete (boolean)(default=false)
EN : Handles autocompletion of the element.<br>
ES : Maneja el autocompletado del elemento.

### _unique (string)
EN : Validates that the entered value is only repeated once.<br>
ES : Valida que el valor ingresado solo se repita una sola vez.

### _follow_space (boolean)(default=false)
EN : Initialize in a script or main.js its input text, textarea or other element to validate.<br>
ES : Valida que no se puedan ingresar mas de un espacio seguido.

### _controls (boolean)(default=true)
EN : Initialize in a script or main.js its input text, textarea or other element to validate.<br>
ES : Valida la funcionalidad de las teclas de control.

### _enter (boolean)(default=false)
EN : Initialize in a script or main.js its input text, textarea or other element to validate.<br>
ES : Valida la funcion del enter para evitar que se envie el formulario por equivocación.

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

EN : You can view the license in LICENSE.md <br>
ES : Puede ver la licencia en LICENSE.md
