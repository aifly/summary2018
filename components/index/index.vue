<template>
	<transition name='index'>
		<div v-if='show' class="lt-full zmiti-index-main-ui " >
			<div class='lt-full' ref='page' >
				<div style='padding-bottom:30px'>
					<div class='zmiti-banner'>
						<img :src="imgs.banner" alt="">
					</div>
					<div class='zmiti-data-list'>
						<div class='zmiti-list-item' v-for="(item,i) in dataList" :key="i">
							<div class='zmiti-item-date' style="opacity:0;height:20px;border:1px solid red;overflow:hidden" v-if='false'>
								<div></div>
								<div>{{item.date}}</div>
								<div></div>
							</div>
							<div class='zmiti-banner-list' ref='banners' :class="{'zmiti-single':item.bannerList.length<=1}">
								<ul :style="{width:item.bannerList.length<=1?'730px':item.bannerList.length*420+'px'}">
									<li v-for="(banner,k) in item.bannerList" :key="k" :style="{width:item.bannerList.length<=1?'730px':400+'px'}">
										<a :href="banner.href">
											<img :src="banner.img" alt="">
											<span class='zmiti-banner-item-content zmiti-text-overflow' v-if='false'>
												{{banner.content}}
											</span>
										</a>
										<div class='zmiti-banner-item-mask'>
											{{banner.title}}
										</div>	
									</li>
								</ul>
							</div>

							<div class='zmiti-data-like-comment'>
								<div v-tap='[like,i]'>
									<img :src="imgs.like" alt="">
									<span>{{item.likeCount}}</span>
									<div class='zmiti-face' ref='face' v-for='(face,h) in item.faces' :key="h">
										<img draggable='false' :src='imgs["gif"+(h+1)]'/>
									</div>
								</div>
								<div>
									<img :src="imgs.comment" alt="">
									<span>{{item.commentCount}}</span>
								</div>
							</div>

							<div class='zmiti-comment-list' v-if='item.commentList.length>0'>
								<div v-for="(comment,l) in item.commentList" :key="l">
									<div>{{comment.username}}：</div>
									<div>{{comment.title}}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import './index.css';
	import {imgs} from '../lib/assets.js';
	import {zmitiUtil} from '../lib/util';
	import IScroll from 'iscroll';
	import Face from '../lib/face';
	export default {
		props:['obserable','nickname','pv'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				viewH:window.innerHeight,
				count:0,
				show:true,
				faces:[],
				start:false,
				showIndex:false,
				dataList:window.config.dataList.concat([])
			}
		},
		components:{
		},
		
		methods:{
			imgStart(e){
				e.preventDefault(); 
			},
			entry(){
				this.show =false;
				this.obserable.trigger({
					type:'toggleMain',
					data:{
						show:true
					}
				})
			},
			like(index){
				if(this.t ){
					return;
				}
				this.t =  setInterval( ()=> {
					this.dataList[index].faces.forEach(function (face) {
						face.animate();
					});
				}, 30);
				setTimeout(function() {
					clearInterval(this.t);
					this.t = null;
					this.dataList[index].faces.forEach(function(face) {
						face.init();
					});
				}.bind(this), 1000);
				
			},
			end(){
				this.showIndex = true;
			},
		},
		mounted(){

			setTimeout(() => {
			
				this.dataList.forEach((data,j)=>{
					console.log(j)
					for(var i = 0;i<15;i++){
						data.faces[i] = (new Face({obj:this.$refs['face'][j*15+i]}))
					}
				});

				this.scorll = new IScroll(this.$refs['page'],{
					preventDefault:false,
					scrollbars:true
				})

			
			}, 10);



			setTimeout(() => {
				this.start = true;
				this.showIndex = true;

				this.scorll.refresh();
				
				this.$refs['banners'].forEach((banner,i)=>{
					if(this.dataList[i].bannerList.length>1){
						new IScroll(banner,{
							scrollX:true,
							preventDefault:false,
						})
					}
				})

			}, 1000);

		}
	}
</script>