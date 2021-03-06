# Valpress v1.5

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
EN : Invalidates that the entered value is only repeated once.<br>
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

$("#year").valpress({<br>
    number:true,<br>
    _maxlength:4<br>
  });<br>

### _minlength (integer)
EN : Limits the number of characters entered to a specified minimum.<br>
ES : Limita el numero de caracteres ingresados a un minimo especificado.

$("#year").valpress({<br>
    number:true,<br>
    _maxlength:4,<br>
    _minlength:4<br>
  });<br>
  
### _readonly (boolean)(default=false)
EN : Prevents typing in the element.<br>
ES : Evita que se puede escribir en el elemento.

$("#name").valpress({<br>
    all:true,<br>
    _readonly:true<br>
  });<br>

### _autocomplete (boolean)(default=false)
EN : Handles autocompletion of the element.<br>
ES : Maneja el autocompletado del elemento.

$("#name").valpress({<br>
    all:true,<br>
    _autocomplete:true<br>
  });<br>
  
### _unique (string)
EN : Validates that the entered value is only repeated once.<br>
ES : Valida que el valor ingresado solo se repita una sola vez.

$("#mail").valpress({<br>
    all:true,<br>
    _unique:"@"<br>
  });<br>
  
  $("#mail").valpress({<br>
    all:true,<br>
    _unique:"ascii:64"<br>
  });<br>
  
### _follow_space (boolean)(default=false)
EN : Initialize in a script or main.js its input text, textarea or other element to validate.<br>
ES : Valida que no se puedan ingresar más de un espacio seguido.

$("#name").valpress({<br>
    all:true,<br>
    space:true,<br>
    _follow_space:true<br>
  });<br>

### _controls (boolean)(default=true)
EN : Initialize in a script or main.js its input text, textarea or other element to validate.<br>
ES : Valida la funcionalidad de las teclas de control.

$("#name").valpress({<br>
    all:true,<br>
    _controls:true<br>
  });<br>

### _enter (boolean)(default=false)
EN : Initialize in a script or main.js its input text, textarea or other element to validate.<br>
ES : Valida la funcion del enter para evitar que se envie el formulario por equivocación.

$("#name").valpress({<br>
    all:true,<br>
    _enter:true<br>
  });<br>
  
### _copyoff (boolean)(default=false)
EN : Protects the contents of the field against the user's copy.<br>
ES : Protege el contenido del campo contra copia del usuario.

$("#clavesol").valpress({<br>
    _copyoff:true<br>
  });<br>
  
### _cutoff (boolean)(default=false)
EN : Protects the contents of the field against the user's cut.<br>
ES : Protege el contenido del campo contra cortado del usuario.

$("#clavesol").valpress({<br>
    _cutoff:true<br>
  });<br>
  
### _pasteoff (boolean)(default=false)
EN : Protects the contents of the field against the user's paste.<br>
ES : Protege el contenido del campo contra pegado del usuario.

$("#clavesol").valpress({<br>
    _pasteoff:true<br>
  });<br>
  
### _dropoff (boolean)(default=false)
EN : Protects the contents of the field against the user's paste.<br>
ES : Protege el contenido del campo contra pegado del usuario.

$("#clavesol").valpress({<br>
    _dropoff:true<br>
  });<br>
<br>
NOTA EN: Valpress detects and validates even data entered through the clipboard or drag but can generate more consumption of resources that is why you can use the options _off.
<br>
NOTA ES: Valpress detecta y valida incluso datos incresados a traves del portapapeles o el arrastre sin embargo puede generar mas consumo de recursos es por eso que puede usar las opciones _off.
<br>
## Usage | Uso

EN : Initialize in a script or main.js its input text, textarea or other element to validate.<br>
ES : Inicializar en dentro de un script o main.js sus input text , textarea u otro elemento a validar.

  $("#fu_telef , #fu_dni").valpress({<br>
    number:true,<br>
    include:"#"<br>
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
  });<br>

  $("#fu_clave ,#fu_clave2").valpress({<br>
    all:true,<br>
    _autocomplete:false<br>
  });<br>


## Credits | Creditos

Programmer: Uceda Maza Javieralonso <br>
Facebook: https://www.facebook.com/javieralonsoum <br>
GitHub: https://github.com/Javieralonso18/valpress/ 

## License | Licencia

EN : You can view the license in LICENSE.md <br>
ES : Puede ver la licencia en LICENSE.md
