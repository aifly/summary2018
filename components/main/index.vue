<template>
	<transition name='main'>
		<div class='zmiti-main-ui lt-full' :class="{'show':show}" >
			<div v-if='href' class='zmiti-frame-C lt-full'>
				<iframe  :src="href" frameborder="0" class=''></iframe>
				<div class='zmiti-back' v-tap='[hideFrame]'>
					<img :src="imgs.back" alt="">
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import './index.css';

	
	import zmitiUtil from '../lib/util';
	import Toast from '../toast/toast.vue'
	
	export default {
	
		props: ['obserable', 'pv', 'randomPv', 'nickname', 'headimgurl'],
	
		name: 'zmitiindex',
	
		data() {
	
			return {
				href:'',
				imgs,
				show:false
			}
		},
	
		components: {Toast},
		methods: {

			hideFrame(){
				var viewport = document.createElement('meta');
				viewport.name = 'viewport';
				viewport.id = 'viewport';
				viewport.content = 'width=750,user-scalable=no';
				//document.head.appendChild(viewport);
				this.href = '';
				this.show =false;
			}
		
			
		},
	
		mounted() {
			var {obserable } = this;
			obserable.on('toggleMain',(data)=>{
				//document.body.style.position = 'fixed'; //防止iframe页上下滚动时带动本页移动
				//document.body.style.position = 'static'; //取消禁止滚动
				this.showFrame = true;
				this.show = data.show;
				this.href = data.href;
			});


			
		}
	
	}
</script>
