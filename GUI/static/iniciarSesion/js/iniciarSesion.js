/*$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});*/
$(function() {
    $( "#btnLogin" ).click(function() {
    $.ajax({
      url: '/login/validarLogin',
      type: 'GET',
      data: {usuario: $("#inputUsuario").val(),
            contrasena:$("#inputContrasena").val()
            },
      success: function(data) {
    	//called when successful
      console.log("RES:" +data.valido)
      if(data.valido == "True"){
        location.href = '/vistaPrincipal';
      }else{
    	alert("Credenciales invalidas")
      }
      //Dependiendo de lo que salga aqui toca redireccionar o no

      },
      error: function(e) {
    	//called when there is an error
    	//console.log(e.message);
      }
    });
  });
});
