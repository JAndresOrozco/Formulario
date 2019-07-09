$(document).ready(function(){
    $('#aceptar').click(form);

      function  form () {
        $nombre =  $ ( '#nombre'). val ();
        $sexo =  $ ( 'input:radio[name=sexo]:checked'). val ();
        $edad =  $ ( ' #edad ' ). val ();
        $carrera =  $ ( '#Carrera' ). val ();
        $estado =  $ ( '#state' ). val ();

        var array = [];
          var datos = {
            Nombre : $nombre,
            Sexo : $sexo,
            Edad : $edad,
            Carrera : $carrera,
            estado : $estado,
            mayoredad: function() {
              if(this.edad >= 18) {
                this.mayoredad = 'Es mayor'
              } else {
                this.mayoredad = 'Es menor'
              }
            }
          }
          
          datos.mayoredad();
          array.push(datos); 
          clear();
          insert(array);
        }

          function insert(elementos){
            var tr = '<tr>';
          $.each(elementos[0], function(i,x){
            var td = '<td>' + x + '</td>';
            tr += td;
        });
        tr += '</tr>';
        $('#tb').append(tr);
          }
          
          
        });

      
  
    function clear(){
        var nombre = $('#nombre').val('');
        var sexo = $('input:radio[name=sexo]:checked').val('');
        var edad = $('#edad').val('');
        var carrera = $("#Carrera").val('');
        var estado = $("#state").val('');
    };
    


