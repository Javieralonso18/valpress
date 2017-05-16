/*!
 * Valpress - v1.5
 * Copyright (c) 2017 Javieralonso Uceda Maza (PE)
 * https://www.facebook.com/javieralonsoum
 */

var device = navigator.userAgent ;
var movil =  false;
if (device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)|| device.match(/J2ME/i)|| device.match(/BlackBerry/i)|| device.match(/iPhone|iPad|iPod/i)|| device.match(/Opera Mini/i)|| device.match(/IEMobile/i)|| device.match(/Mobile/i)|| device.match(/Windows Phone/i)|| device.match(/windows mobile/i)|| device.match(/windows ce/i)|| device.match(/webOS/i)|| device.match(/palm/i)|| device.match(/bada/i)|| device.match(/series60/i)|| device.match(/nokia/i)|| device.match(/symbian/i)|| device.match(/HTC/i))
 { movil =true;}

function opc (parameter,val,sw,data){

  if (parameter.space == true){
   if (val== 32){
    sw=false;
  }
}

if (parameter._enter == true){
 if  (val == 13){
  sw=false;
}
}

if (parameter._controls != false){
  if (val==0 || val== 8){
    sw=false;
  }
}

if (parameter._follow_space== true){
 if (val== 32){
  if (data.length> 0){
    if (data [data.length - (movil ? 2 : 1) ] == " "){
      sw=true;
    }
  }
}
}

if (parameter._unique){
  if (parameter._unique.length > 0){
    var array_yes= parameter._unique.replace(" ","").split(",");
    array_yes.forEach(function(entry) {
      var cuenta = 0;
      if (entry.indexOf("ascii:") == -1 ){
        var posicion = data.indexOf(entry);
        while ( posicion != -1 ) {
         cuenta++;
         posicion = data.indexOf(entry,posicion+1);
       }

       if (((movil && cuenta > 1) || (!movil && cuenta == 1))&&  entry.charCodeAt() == val){
        sw=true;
      }
    }else{
      var entryparse =  String.fromCharCode(entry.replace("ascii:",""));
      var posicion = data.indexOf(entryparse);
      while ( posicion != -1 ) {
       cuenta++;
       posicion = data.indexOf(entryparse,posicion+1);
     }

     if (((movil && cuenta > 1) || (!movil && cuenta == 1))&&  entry.replace("ascii:","") == val){
      sw=true;
    }
  }
});
  }
}

return sw;
}

jQuery.fn.valpress = function(parameter) {
  "use strict";

  function validate(val,data){
    var sw = true;

    if (parameter.all == true){
      if (!(val==0 || val== 8 || val == 13 || val == 32)){
        sw=false;
      }
    }

    if (parameter.number == true){
     if (val > 47 && val < 58){
      sw=false;
    }
  }

  if (parameter.number_roman == true){
    if (val==105 || val ==118 || val==120 || val==108 || val == 99 || val ==100 || val==109 || val+32 ==105 || val+32 ==118 || val+32 ==120 || val+32 ==108 || val+32  == 99 || val+32 ==100 || val+32==109){
      sw=false;
    }
  }

  if (parameter.letter== true){
    if (val==193 || val==201 || val==205 || val==211 || val==218 || val==225 || val==233 || val==237 || val==243 || val==250 ||  (val > 96 && val < 123) || (val > 64 && val < 91) || (val > 163 && val < 166)){
      sw=false;
    }
  }

  if (parameter.include){
    if (parameter.include.length > 0){
      var array_yes= parameter.include.replace(" ","").split(",");
      array_yes.forEach(function(entry) {
       if(entry.indexOf("ascii:") != -1){
        if (entry.replace("ascii:","") == val){
          sw=false;
        }
      }else{
        if (entry.charCodeAt()== val){
          sw=false;
        }
      }
    });
    }
  }

  if (parameter.exclude){
    if (parameter.exclude.length > 0){
      var array_not= parameter.exclude.replace(" ","").split(",");
      array_not.forEach(function(entry) {
        if(entry.indexOf("ascii:") != -1){
          if (entry.replace("ascii:","") == val){
            sw=true;
          }
        }else{
          if (entry.charCodeAt()== val){
            sw=true;
          }
        }
      });
    }
  }

  sw= opc (parameter,val,sw,data);
  return sw;
}

if (movil){
  $(this).on('keyup',function(e){
    var val = $(this).val();
    if (validate(val.charCodeAt(val.length -1),val)){
      $(this).val(val.substring(0,val.length -1));
    }
  });
}

if (!movil){
  $(this).on('keypress',function(e){
    if (validate(e.which,$(this).val())){
      e.preventDefault();
    }
  });

  var sw_drop = false;
  $(this).on('drop', function(e) {
    if(parameter._dropoff == true){
      sw_drop = false;
      e.preventDefault();
      e.stopPropagation();
    }else{
      $(this).focus();
      sw_drop = true;
    }
  });

  $(this).on('mousemove', function(e) {
    if (sw_drop){
      $(this).focus();
      var clip =  $(this).val();
      if(clip.length > 0){
        var array_paste = clip.split('');
        for (var i = 0; i < array_paste.length ; i++) {
          if (validate(array_paste[i].charCodeAt(),$(this).val())){
            $(this).val("");
            return false;
          }
        }
      }
      sw_drop= false;
    }
  });

}

$(this).on('paste', function(e) {
  if(parameter._pasteoff == true){
   e.preventDefault();
 }else{
  var clip =  e.originalEvent.clipboardData.getData('Text');
  if(clip.length > 0){
    var array_paste = clip.split('');
    for (var i = 0; i < array_paste.length ; i++) {
      if (validate(array_paste[i].charCodeAt(),$(this).val())){
        e.preventDefault();
        return false;
      }
    }
  }
}
});

if(parameter._copyoff == true){
  $(this).on('copy', function(e) {
    e.preventDefault();
  });
}

if(parameter._cutoff == true){
  $(this).on('cut', function(e) {
    e.preventDefault();
  });
}

if(parameter._maxlength){
  $(this).attr("maxlength",parameter._maxlength);
}

if(parameter._minlength){
  $(this).attr("minlength",parameter._minlength);
}

if(parameter._readonly == true){
  $(this).attr("readonly",parameter._readonly);
}

if(parameter._autocomplete == false){
  $(this).attr("autocomplete","off");
}

};
