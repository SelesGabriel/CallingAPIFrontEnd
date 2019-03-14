
$(document).ready(function() {

  showCloseButtons()

});

function showCloseButtons(){
		$(".btn-menu").click(function(){
				$(".menu").show();
			})

			$(".btn-close").click(function(){
				$(".menu").hide();
			})
}
