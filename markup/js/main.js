document.addEventListener('DOMContentLoaded', function() {
	
	function Goods() {
		var self = this;
		self.loadMore = document.querySelector('.load-more');
		self.count = 2;

		this.getAjax(self);

		self.loadMore.addEventListener('click', function() {
			self.showGoods(self.xhrObj.entities);

			if(self.count + 4 >= self.xhrObj.total) {
				self.loadMore.style.cssText = 'display: none';
			};
		});
	};

	Goods.prototype.getAjax = function() {
		var xhr = new XMLHttpRequest(),
			self = this;
		self.counter = self.count++;

		xhr.open('get', 'list.php?per_page=4&page='+ self.counter);

		xhr.onreadystatechange = function() {

			if(xhr.status == 200 && xhr.readyState == 4) {
				self.xhrObj = JSON.parse(xhr.responseText);
			};
		};

		xhr.send();
	};

	Goods.prototype.showGoods = function(obj) {
		var goodsList = document.querySelector('.goods-list'),
			template = '';

		var checkDiscount = function() {
			if(obj[i].discountCost) {
				return '$' + obj[i].discountCost;
			} else{
				return '$' + obj[i].cost;
			};
		};

		var discountNotNull = function() {
			if(obj[i].discountCost !== null) {
				return '<strike class="cost">' + '$' + obj[i].cost + '</strike>' + '<div class="sale">Sale</div>';
			} else{
				return '';
			};
		};

		var checkNew = function() {
			if(obj[i].new) {
				return '<div class="new">New</div>';
			} else{
				return '';
			};
		};

		for (var i = 0; i < obj.length; i++) {
			template += '<div class="col-md-3 col-sm-6">' + 
	                    '<div class="good load">' +
	                        '<div class="img-holder">' +
	                            '<img src="' + obj[i].img + '" alt="">' +
	                        '</div>' +                                    
	                        '<div class="description-block">' +
	                            '<div class="title">' + obj[i].title + '</div>' +
	                            '<div class="description">' + obj[i].description + '</div>' +
	                            '<div class="discount-cost">' +
	                            	(checkDiscount()) +
	                            '</div>' +
	                            	(discountNotNull()) +
	                            	(checkNew()) +
	                        '</div>' +
	                        '<div class="links-holder">' +
	                            '<a href="#" class="add">Add to cart</a>' +
	                            '<a href="#" class="view">View</a>' +
	                        '</div>' +
	                    '</div>' +
	                '</div>';
		};

		goodsList.insertAdjacentHTML('beforeEnd', template);

		setTimeout(function() {
			var goodsLoad = document.querySelectorAll('.good.load');
			for (var i = 0; i < goodsLoad.length; i++) {
				goodsLoad[i].style.cssText = 'opacity: 1';
			}
		}, 100);

		this.getAjax();
	}; 

	new Goods();
});