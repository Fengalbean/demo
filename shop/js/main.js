/**
 * Created by freddy on 2017/3/25.
 */
$(function () {
	// 实例化购物车类
	var Shop = new ShoppingCart();
	var goodList = $('#goodList'),
		shopList = $('#shopList');

	$.getJSON('./data.json',function (response) {
		// 渲染商品列表
		var html = template('listTpl', {
			list: response
		});
		//页面初始化渲染商品列表
		goodList.html(html);
	});


	// 渲染购物车数据
	function renderShop() {
		var shopData = Shop.getStore();
		if (shopData.length === 0) {
			$('#shop').hide();
			return $('#tip').show();
		}
		$('#tip').hide();
		$('#shop').show();
		// 渲染商品列表
		var html = template('shopTpl', {
			list: Shop.getStore()
		});

		shopList.html(html);
	}
	// 初始化渲染购物车列表
	renderShop();

	// 添加商品
	goodList.on('click','.btn-add',function () {

		var $this = $(this),
			$tr = $this.closest('tr'), //这一步是找到最近的tr
			id = $this.data('id'),
			name = $tr.find('.name').text(),
			count = parseInt($tr.find('.count').val()),
			stock = parseInt($tr.find('.stock').text());
		if (count > stock) return alert('库存不够');
		var obj = {
			id: id,
			name: name,
			count: parseInt(count)
		};
		// 把商品添加到购物车
		Shop.add(obj);

		// 重新渲染购物车列表
		renderShop();

	});
	// 打印购物车数据
	$('#log').on('click',function () {
		console.log(Shop.getStore());
	});


	// 删除商品
	shopList.on('click','.btn-del',function () {
		var $this = $(this),
			id = $this.data('id');
		Shop.remove(id);
		renderShop();
	});
	// 减少数量
	shopList.on('click','.btn-minus',function () {
		var $this = $(this),
			id = $this.data('id');
		Shop.minus({id:id,count:1});
		renderShop();
	});

	// 增加数量
	shopList.on('click','.btn-addition',function () {
		var $this = $(this),
			id = $this.data('id');
		Shop.add({id:id,count:1});
		renderShop();
	});

	$('#clear').on('click',function () {
		Shop.clearStorage();
		renderShop();
	})
});