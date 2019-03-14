$(document).ready(function() {

  getProducts()

});
//-----------------------------------------------------------------------------------------------------------//
function getProducts(){


      $.ajax({
         type: "GET",
         url: "https://desolate-brushlands-20405.herokuapp.com/api/v1/products",
         success: function(response){


          console.log(response);

            var html = "";

            $.each(response, function(posicao, item){

                html +='<div class="imagem">';
                  html +='<table>';
                    html += '<tr><td>'+item.productId +'</td></tr>'
                    html += '<tr><td>'+item.productName +'</td></tr>'
                    html += '<tr><td>'+item.price +'</td></tr>'
                    html += '<tr><td><a href="produto.html?id_produto='+item.productId+'"><i class="fa fa-edit"></td></tr>'
                    html +='<tr><img src="'+item.imageUrl+'"></tr>'
                  html +='</table>';
                html +='</div>';

            /*  html += '<tr>';
                html += '<td>'+item.productId +'</td>'
                html += '<td>'+item.productName +'</td>'
                html += '<td>'+item.price +'</td>'
                //html += '<td><i class="fa fa-trash" onClick="getProduct('+c.productId+')"></td>'
                html += '<td><a href="produto.html?id_produto='+item.productId+'"><i class="fa fa-circle"></td>'


              html += '</tr>';*/

            });

            //$('#cards').empty();
            $('#cards').append(html);

          },


      });

  }


  function getProduct(id){
    $.ajax({
           type: "GET",
           url: "https://desolate-brushlands-20405.herokuapp.com/api/v1/product/"+id+"",
           success: function(response){

              console.log(response)

            },


        });

  }
