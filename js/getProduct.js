$(document).ready(function() {

  getProduct()


  

});
//-----------------------------------------------------------------------------------------------------------//


  function getProduct(){


     var url = window.location.href;

      var res = url.split("id_produto=");
      console.log(res)

      var id = res[res.length -1];
      console.log(id);

    $.ajax({
           type: "GET",
           url: "https://desolate-brushlands-20405.herokuapp.com/api/v1/product/"+id+"",
           success: function(response){

            var produto = response[0]

              $('#nome_produto').val(produto.productName);
              $('#preco_produto').val(produto.price);
              $('#img_produto').attr('src', produto.imageUrl)

            },


        });

  }

  function mensagem(){
    alert("Javascript is cool");
  }
