<template>
	<transition name='loading'>
		<div ref='page'  class="lt-full zmiti-loading " :style="{background:'url('+imgs.loadingBg1+') no-repeat center center',backgroundSize:'cover'}" >
			<div class='zmiti-loading-bar'>
				<img :src="imgs['1978']" alt="">
				<div>
					<span :style='{width:width+"px"}'></span>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import './index.css';
	import {imgs} from '../lib/assets.js';
	import {zmitiUtil} from '../lib/util';
	export default {
		props:['width','obserable'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				viewW:Math.min(window.innerWidth,750),
				viewH:window.innerHeight,
				show:false,
			}
		},
		components:{
		},
		
		methods:{

			

			imgStart(e){
				e.preventDefault(); 
			},
		},
		mounted(){

			this.obserable.on('hideBook',()=>{
				this.show = true;
			});

		}
	}
</script>