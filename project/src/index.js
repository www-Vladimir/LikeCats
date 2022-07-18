import './style.css';

let app = null

window.onload = () => {
	Vue.component('box-cats', {
		props: {
			info: {
				type: Object,
				default() {
					return {}
				}
			},
		},
		template: `
		<div class="goods-item">
		<img class="img-cats" :src="info[0].url" :id="info[0].id" alt="Kot">
		</div>
		`,
	}),
		Vue.component('list-cats', {
			props: {
				info_data: {
					type: Object,
					default() {
						return {}
					}
				},
			},
			template: `
		<div class="goodsCard" :id="info_data.id">
		     <div class="goodsList">
		 		<img class="img-cats" :src="info_data.url" alt="Kot">
		     </div>
			 <div class="blockLaki">
			<button class="goods-title" @click="deletCat" > Убрать из любимчиков </button>
			 </div>
			 </div>
		`,
			methods: {
				deletCat() {
					this.$emit('del_cat', this.info_data.id)
				}
			}
		})

	app = new Vue({
		el: '#root',
		data: {
			isVisibleCat: true,
			snack: true,
			url: "https://api.thecatapi.com/v1/images/search",
			info: [{ url: require('/src/img/catO4kax.png'), id: '111', categories: [{ nameCat: 'Котик без имени:( ' }] }],
			selectedCat: [],
			tipper: false,
		},
		methods: {
			toggleimg: function () {
				this.tipper = true
				this.fetchImg();
			},

			// xhr: function () {
			// 	this.info = "Requesting ...";
			// 	var rq = new XMLHttpRequest();

			// 	rq.onreadystatechange = function (vm) {
			// 		if (this.readyState === XMLHttpRequest.DONE) {
			// 			if (this.status === 200) {
			// 				vm.info = JSON.parse(this.response);
			// 				console.log(vm.info)

			// 			} else {
			// 				vm.info = "Request Failed";
			// 			}
			// 		}
			// 		console.log(vm.info)
			// 	}.bind(rq, this);
			// 	rq.open('GET', this.url);
			// 	rq.setRequestHeader("x-api-key", "594bbe42-29d2-4378-93df-e4e8a3613f6d");
			// 	rq.send();
			// },
			fetchImg() {
				this.img = require('/src/img/catO4kax.png');
				return fetch(this.url, {
					headers: {
						"x-api-key": "594bbe42-29d2-4378-93df-e4e8a3613f6d"
					}
				})
					.then((res) => res.json()).then((data) => {
						this.info = data;
						this.tipper = false
					});
			},
			isVisible() {
				this.toggleimg()
				this.isVisibleCat = false
			},
			lick() {
				if (this.info[0] !== "R") {
					this.selectedCat.push(this.info[0])
					this.toggleimg()
					this.snack = false
				}
			},
			visiblCardCat(data) {
				const index = this.selectedCat.findIndex(n => n.id === data);
				if (index !== -1) {
					console.log(index)
					this.selectedCat.splice(index, 1);
					if (index == 0) {
						this.snack = true
					}
				}
			},
		},
	})
}
