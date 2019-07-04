$(document).ready(function(){
    $('#aceptar').click(function(){
          var nombre = $('#nombre').val();
          var sexo = $('input:radio[name=sexo]:checked').val();
          var edad = $('#edad').val();
          var carrera = $("#Carrera").val();
          var estado = $("#state").val();
      
       var tbody = $('tbody');
       var tr = $('<tr></tr>');
       var form = [nombre, sexo, edad,carrera,estado];
       var items = [];

       form.forEach(function(i,x){
           var td = $('<td>' + form[x] + '</td>');
           items.push(td); 
       });
       tr.append(items);
       tbody.append(tr);
    });
});
