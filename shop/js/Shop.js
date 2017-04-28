/**
 * Created by freddy on 2017/3/25.
 */
function ShoppingCart() {

	//购物车容器
	this.store = localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store')) : [];

	//参考数据结构
	var data = [
		{
			id: 1, //商品唯一识别号
			count: 10 //商品数量
		}
	];
	/**
	 * 获取所有商品
	 */
	this.getStore = function () {
		return this.store;
	};

	/**
	 * 添加商品
	 * @param good
	 * @returns {*}
	 */
	this.add = function (good) {
		//先判断商品是否存在
		var isExist = this.findById(good['id']);

		if (isExist === false) { //如果不存在 就把商品添加至购物车 然后保存至缓存

			this.store.push(good);

		} else { // 如果商品存在购物车就把新添加的商品数量和之前购物车里该商品的数量相加，然后保存至缓存

			this.store[isExist].count = parseInt(this.store[isExist].count) + parseInt(good.count);

		}
		this.saveStorage();
	};
	/**
	 * 通过ID移除商品
	 * @param id
	 * @returns {*}
	 */
	this.remove = function (id) {
		//找到商品
		var index = this.findById(id);
		if (index !== false) {
			// 删除购物车里面的商品
			this.store.splice(index, 1);
			// 保存
			this.saveStorage();
		}

	};

	/**
	 * 减少商品数量
	 * @param good
	 * @returns {*}
	 */
	this.minus = function (good) {
		//先判断商品是否存在
		var index = this.findById(good['id']);

		if (index !== false) { //如果存在

			if (parseInt(this.store[index].count) > parseInt(good.count)) {
				this.store[index].count = parseInt(this.store[index].count) - parseInt(good.count);
			} else {
				this.remove(index);
			}
			this.saveStorage();
		}

	};

	/**
	 * 通过ID查找商品
	 * @param id
	 * @returns {*}
	 */
	this.findById = function (id) {
		var i = 0,
			l = this.store.length;
		for (; i < l; i++) {
			if (parseInt(this.store[i].id) === parseInt(id)) { // 如果存在就返回索引
				return i;
			}
		}
		// 否则返回false
		return false;
	};
	/**
	 * 缓存商品数据
	 */
	this.saveStorage = function () {
		localStorage.setItem('store', JSON.stringify(this.store));
	};
	/**
	 * 清空购物车缓存
	 */
	this.clearStorage = function () {
		this.store = [];
		localStorage.removeItem('store');
	}

}
