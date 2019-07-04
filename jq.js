$(document).ready(function(){
    $('#aceptar').click(function(){
          var nombre = $('#nombre').val();
          var sexo = $('input:radio[name=sexo]:checked').val();
          var carrera = $("#Carrera").val();
          var estado = $("#state").val();
          var rr;
          var edad = $('#edad').val();
          //Edad//
          var mayoredad = function(){
            if(edad >= 18)
          {
              rr = edad +' '+ 'Es mayor de edad';
          }else{
             rr= edad +' '+'Es menor de edad';
          };
          return rr;
        };
       var tbody = $('tbody');
       var tr = $('<tr></tr>');
       var form = [nombre, sexo, mayoredad(rr),carrera,estado];
       var items = [];

       $(form).each(function(i,x){
           var td = $('<td>' + form[i] + '</td>');
           items.push(td); 
           clear();
       });
       tr.append(items);
       tbody.append(tr);
    });
    
    function clear(){
        var nombre = $('#nombre').val('');
        var sexo = $('input:radio[name=sexo]:checked').val('');
        var edad = $('#edad').val('');
        var carrera = $("#Carrera").val('');
        var estado = $("#state").val('');
    };
    
});

