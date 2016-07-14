document.addEventListener('DOMContentLoaded', function() {
	
	function Goods() {
		var self = this,
			loadMore = document.querySelector('.load-more');

		self.count = 1;

		this.getAjax(self);
		loadMore.addEventListener('click', this.getAjax.bind(this, self));
	};

	Goods.prototype.getAjax = function(self) {
		var xhr = new XMLHttpRequest(),
			counter = self.count++;

		console.log('counter', counter);
		xhr.open('get', 'list.php?per_page=4&page='+ counter);

		xhr.onreadystatechange = function() {

			if(xhr.status == 200 && xhr.readyState == 4) {
				var xhrObj = JSON.parse(xhr.responseText);
				console.log(xhrObj);
			};
		};

		xhr.send();
	};

	new Goods();
});


// $(document).ready(function() {

// 	var count = 1;

// 	function getAjax() {
// 		$.ajax({
// 		    url:'list.php' ,
// 		    type: 'GET',
// 		    data: {per_page: 4, page: count++},
// 		    success: function(data) {
// 		    	var dataObj = JSON.parse(data);
// 		        console.log(dataObj);
// 		    }
// 		});
// 	};
// 	getAjax();

// 	// function showGoods() {
// 	// 	var htm = '<div class="col-md-3 col-sm-6">
//  //                        <div class="good">
//  //                            <div class="img-holder">
//  //                                <img src="<?php echo $item['img']; ?>" alt="<?php echo $item['title']; ?>">
//  //                            </div>                                        
//  //                            <div class="description-block">
//  //                                <div class="title"><?php echo $item['title']; ?></div>
//  //                                <div class="description"><?php echo $item['description']; ?></div>
//  //                                <div class="discount-cost">
//  //                                    $<?php echo $item['discountCost'] ? $item['discountCost'] : $item['cost']; ?>
//  //                                </div>
//  //                            <?php if ($item['discountCost'] !== null): ?>
//  //                                <strike class="cost">$<?php echo $item['cost']; ?></strike>
//  //                                <div class="sale">Sale</div>
//  //                            <?php endif; ?>
//  //                            <?php if ($item['new']): ?>
//  //                                <div class="new">New</div>
//  //                            <?php endif; ?>
//  //                            </div>
//  //                            <div class="links-holder">
//  //                                <a href="#" class="add">Add to cart</a>
//  //                                <a href="#" class="view">View</a>
//  //                            </div>
//  //                        </div>
//  //                    </div>';
// 	// };

// 	$(document).on('click', '.load-more', getAjax);
// });