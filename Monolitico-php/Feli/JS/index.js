$(document).ready(function(){
  traerDatos();
})

function traerDatos(){    
  
  $.ajax("../controller/traerPezController.php", {
      "type": "POST",   
      "data": {},
     "async": false,
      dataType: 'json',
     "success": function(result) {
      var detalle="";
      jQuery.each(result,function (i) {
          detalle+="<tr>";
          detalle+="<th scope='row'>"+result[i].id +" </th>";
          detalle+="<td>"+ result[i].nombre+"</td>";
          detalle+="<td>"+ result[i].apellido+"</td>";
          detalle+="<td>"+ result[i].username+"</td>";
          detalle+="<td>"+ result[i].categoria+"</td>";
    
          detalle+="<td><button type='button' class='btn btn-outline-success' data-bs-toggle='modal' data-bs-target='#exampleModal' onClick='traerInfo("+result[i].id+")' name=''>Actualizar</button>"+
          "<button type='button' class='btn btn-outline-danger' onClick='eliminar("+result[i].id+")'>Eliminar</button></td>";
          detalle+="</tr>";    
          });
          jQuery("#tabla_pez").append(detalle);
     },
     "error": function(result) {
       console.error("Este callback maneja los errores", result);     

     },
  });
}


function guardarDatos(){

  if ($('#id').val()==''){
    aux='guardar';
  }else{
    aux='actualizar';
  }
  
  $.ajax("../controller/appController.php", {
      "type": "POST",   
      "data": {aux:aux,id:$('#id').val(),nombre:$('#inputNombre').val(),apellido:$('#inputApellido').val(),username:$('#inputUsername').val(),categoria:$('#inputCategoria').val()},
     "async": false,
      dataType: 'text',
     "success": function(result) {

      $('#inputNombre').val('');
      $('#inputApellido').val('');
      $('#inputUsername').val('');
      $('#inputCategoria').val('');
      $('#exampleModal').modal('hide');
      limpiarTabla();
      traerDatos();
     },
     "error": function(result) {
       console.error("Este callback maneja los errores", result);     

     },
  });
}
function traerInfo(id){
  $.ajax("../controller/traerDatoController.php", {
    "type": "POST",   
    "data": {id: id},
   "async": false,
    dataType: 'json',
    "success": function(result) {
     $('#id').val(result.id);
     $('#inputNombre').val(result.nombre);
     $('#inputApellido').val(result.apellido);
     $('#inputUsername').val(result.username);
     $('#inputCategoria').val(result.categoria);
   
   },
   "error": function(result) {
     console.error("Este callback maneja los errores", result);     

   },
});
}

function eliminar(id) {
  if (confirm("¿Estás seguro de que deseas eliminar este registro?")) {
      $.ajax("../controller/appController.php", {
          "type": "POST",
          "data": { aux: 'eliminar', id: id },
          "async": false,
          dataType: 'text',
          "success": function (result) {
            limpiarTabla();
              traerDatos(); 
          },
          "error": function (result) {
              console.error("Este callback maneja los errores", result);
          },
      });
  }
}
function limpiarTabla()
{
  $('#tabla_pez tr').each(function(i,row)
  {
    if(i>0)
    {
      $("#tabla_pez tr:last").remove();
    }
  });


}