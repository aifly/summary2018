<template>
	<transition name='index'>
		<div v-if='show' class="lt-full zmiti-index-main-ui " >
			<div class='lt-full' ref='page' >
				<div style='padding-bottom:90px'>
					<div class='zmiti-banner'>
						<img :src="imgs.banner" alt="">
					</div>
					<div class='zmiti-data-list'>
						<div class='zmiti-list-item' v-for="(item,i) in dataList" :key="i">
							<div class='zmiti-item-date' >
								<div></div>
								<div>{{item.title||item.bannerList[0].title}}<span>{{item.subtitle}}</span></div>
								<div></div>
							</div>
							<div class='zmiti-banner-list'>
								<div v-if='item.subimg' class='zmiti-subimg'>
									<a href="javascript:void(0)"  v-tap='[showFrame,item.subhref || item.bannerList[0].href]'><img :src="item.subimg" alt=""></a>
								</div>
								<div ref='banners'>
									<ul :style="{width:item.bannerList.length<=1?'1220px':item.bannerList.length*420+'px'}">
										<li v-for="(banner,k) in item.bannerList" :key="k" :style="{width:item.bannerList.length<=1?'1220px':400+'px'}">
											<a :href=" banner.type === 'redirect' ? banner.href :'javascript:void(0)'" v-tap='[showFrame,banner.href,banner.type]'>
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
							</div>

							<div class='zmiti-data-like-comment'  :class="{'zmiti-single':item.commentList.length<=1}">
								<div v-tap='[like,i,item]'>
									<img :src="item.isLiked ? imgs.like :imgs.like1" alt="">
									<span>{{item.likeCount}}</span>
									<div class='zmiti-face' ref='face' v-for='(face,h) in item.faces' :key="h">
										<img draggable='false' :src='imgs["gif"+(h+1)]'/>
									</div>
								</div>
								<div>
									<img :src="imgs.comment" alt="">
									<span></span>
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
					<div class='zmiti-copyright'>
						新华社新媒体中心出品
					</div>
				</div>
			</div>
			<div v-if='false' class='zmiti-frame-C lt-full'>
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
				href:"",
				show:true,
				faces:[],
				start:false,
				showIndex:false,
				secretKey: "e9469538b0623783f38c585821459454",
                host: "https://xlive.xinhuaapp.com", //测试域名：https://testxlive.xinhuaapp.com
				dataList:window.config.dataList.concat([])
			}
		},
		components:{
		},
		
		methods:{
			hideFrame(){
				

			},
			showFrame(href,type){
				if(type){
					window.location.href = href;
					return;
				}
				///document.head.removeChild(document.getElementById('viewport'));
				this.obserable.trigger({
					type:"toggleMain",
					data:{
						show:true,
						href
					}
				})
				
			},
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
			getPV:function(id){
				var s = this;
				axios.post(this.host +'/xhs-security-activity/activity/num/getNum',{
					"secretKey": s.secretKey,  // 请求秘钥
					"nm": "xhs-summary2018-pv"+id // 活动某组图片点赞标识 或者活动某组图片浏览量标识 标识由更新接口定义
				}).then(function(data){
					var dt = data.data;
					if(typeof dt === 'string'){
						dt = JSON.parse(dt);
					}
					s.dataList[id-1].likeCount = dt.data.num;
					s.dataList = s.dataList.concat([]);
				});
			},
			like(index,item){
				if(this.t ){
					return;
				}
				var s = this;
				axios.post(s.host + '/xhs-security-activity/activity/num/updateNum', {
					"secretKey": s.secretKey, // 请求秘钥
					"nm": "xhs-summary2018-pv" + (index + 1) // 活动某组图片点赞标识 或者活动某组图片浏览量标识 标识由更新接口定义
				}).then(function(data) {
					var dt = data.data;
					if (typeof dt === 'string') {
						dt = JSON.parse(dt);
					}
					if (dt.rc === 0) {
						item.likeCount+=1;
						item.isLiked = true;
						s.dataList = s.dataList.concat([]);
					}
				});



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

			var s = this;
			setTimeout(() => {
			
				this.dataList.forEach((data,j)=>{
					for(var i = 0;i<15;i++){
						data.faces[i] = (new Face({obj:this.$refs['face'][j*15+i]}))
					}
				});
				this.scorll = new IScroll(this.$refs['page'],{
					preventDefault:false,
					scrollbars:true,
					bounce:false,
					deceleration:.002
				})

				s.dataList.forEach(function(img, i) {
					s.getPV(i + 1);
				});
			
			}, 10);


			axios.post(s.host + '/xhs-security-activity/activity/num/updateNum', {
				"secretKey": s.secretKey, // 请求秘钥
				"nm": "xhs-summary2018-pv" // 活动某组图片点赞标识 或者活动某组图片浏览量标识 标识由更新接口定义
			}).then(function (data) {
				var dt = data.data;
				if (typeof dt === 'string') {
					dt = JSON.parse(dt);
				}
				console.log(dt)

			});


			setTimeout(() => {
				this.start = true;
				this.showIndex = true;
				this.$refs['banners'].forEach((banner,i)=>{
					if(this.dataList[i].bannerList.length>1){
						new IScroll(banner,{
							scrollX:true,
							preventDefault:false,
						})
					}
				})

			}, 1000);

			var t = setInterval(()=>{
				this.scorll.refresh();
			},100);

			setTimeout(()=>{
				clearInterval(t);
			},6000)

		}
	}
</script>