$(function(){
  $( "#btnSubirMateria" ).click(function() {
  $.ajax({
    url: '/vistaPrincipal/agregarMateria',
    type: 'GET',
    data: {nombre: $("#inputNombreMateria").val(),
          descripcion:$("#inputDescripcionMateria").val(),
          horaInicio:$("#inputHoraInicio").val(),
          horaFinal:$("#inputHoraFinal").val()
          },
    success: function(data) {
    //called when successful
    alert(data.nombre+"\n"+data.descripcion +"\n" +data.agregada)
    //Dependiendo de lo que salga aqui toca redireccionar o no

    },
    error: function(e) {
    //called when there is an error
    //console.log(e.message);
    }
  });
});
});