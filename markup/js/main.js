$(document).ready(function() {
	
	var count = 1;

	function getAjax() {
		$.ajax({
		    url:'list.php' ,
		    type: 'GET',
		    data: {per_page: 4, page: count++},
		    success: function(data) {
		    	var dataObj = JSON.parse(data);
		        console.log(dataObj);
		    }
		});
	};
	getAjax();

	$('.load-more').on('click', getAjax);
});

