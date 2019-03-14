$(document).ready(function() {

  $("#btn-enviar").click(incluir);

});

//-----------------------------------------------------------------------------------------------------------//
	
	function alerta(){
		alert("ta chamando");
		console.log("ta chamando");
	}

		type: "POST",
         url: "http://api.vtexcrm.com.br/corebiz/dataentities/TE/documents",
         success: function incluir(){

      var name 	= $("#name").val();
      console.log(name);
      return false;
      var rg 	= $("#rg").val();
      var data_nascimento 	= $("#data_nascimento").val();
      var cargo 	= $("#cargo").val();


       if($("#data_nascimento").val()== "" || $("#name").val() ==""){
         alert('Campos obrigatórios não preenchidos');
         return false;
       }


          $.ajax({
              url: '/api/funcionario',
              type: 'POST',
              data: { nome: nome, rg:rg, data_nascimento: data_nascimento, cargo: cargo} ,
              success: function(response) {

                alert("Funcionário incluido com sucesso");
                location.reload();
              },
              failure: function(error){

                console.log(error);
                alert('Ops! '+error+'')
                location.reload();

              }
          });

     }