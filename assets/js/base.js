﻿var imgs = {
  logo: "./assets/images/logo.png",
  arrow: "./assets/images/arrow.png",
  play: "./assets/images/play.png",
  banner: "./assets/images/banner.jpg",
  banner1: "./assets/images/banner1.jpg",
  banner2: "./assets/images/banner2.jpg",
  banner3: "./assets/images/banner3.jpg",
  like: "./assets/images/like.png",
  comment: "./assets/images/comment.png",
  img40: "./assets/images/40.jpg",
  gif1: "./assets/images/1.gif",
  gif2: "./assets/images/2.gif",
  gif3: "./assets/images/3.gif",
  gif4: "./assets/images/4.gif",
  gif5: "./assets/images/5.gif",
  gif6: "./assets/images/6.gif",
  gif7: "./assets/images/7.gif",
  gif8: "./assets/images/8.gif",
  gif9: "./assets/images/9.gif",
  gif10: "./assets/images/10.gif",
  gif11: "./assets/images/11.gif",
  gif12: "./assets/images/12.gif",
  gif13: "./assets/images/13.gif",
  gif14: "./assets/images/14.gif",
  gif15: "./assets/images/15.gif",

  liusheng1: "./assets/images/42.gif",
  zhencang: "./assets/images/zhencang.gif",
  duanshiping: "./assets/images/duanshiping.gif",
  dajuan: "./assets/images/dajuan.gif",
  gandong: "./assets/images/gandong.gif",
  fengjing: "./assets/images/fengjing.gif",
  gushi: "./assets/images/gushi.gif",
  donghua: "./assets/images/donghua.gif",
  lishi1: "./assets/images/lishi1.jpg",
  lishi2: "./assets/images/lishi2.jpg",
  lishi3: "./assets/images/lishi3.jpg",
  lishi4: "./assets/images/lishi4.jpg",
  lishi5: "./assets/images/lishi5.jpg",
  lishi6: "./assets/images/lishi6.jpg",
  liusheng2: "./assets/images/liusheng2.jpg",
  liusheng3: "./assets/images/liusheng3.jpg",
  liusheng4: "./assets/images/liusheng4.jpg",
  liusheng5: "./assets/images/liusheng5.jpg",
  liusheng6: "./assets/images/liusheng6.jpg",
  liusheng7: "./assets/images/liusheng7.jpg",
  liusheng8: "./assets/images/liusheng8.jpg",
  liusheng9: "./assets/images/liusheng9.jpg",
  yuanquan: "./assets/images/yuanquan.jpg",
  rmxy: "./assets/images/rmxy.jpg",
  tongkuang: "./assets/images/tongkuang.jpg",
  dashuju: "./assets/images/dashuju.jpg",
  teshuwujian: "./assets/images/teshuwujian.jpg",
  zhexienian: "./assets/images/zhexienian.jpg",
  kaifang: "./assets/images/kaifang.jpg",
  haohio: "./assets/images/haohio.jpg",
  shidai: "./assets/images/shidai.jpg",
  liuye: "./assets/images/liuye.jpg",
  yifu: "./assets/images/yifu.jpg",
  doutu: "./assets/images/doutu.jpg",
  gaigekaifang40: "./assets/images/gaigekaifang40.jpg",
  chuanyue: "./assets/images/chuanyue.jpg",
  suoyouren: "./assets/images/suoyouren.jpg",
  xinxian: "./assets/images/xinxian.jpg",
  luopan: "./assets/images/luopan.jpg",
  jinian: "./assets/images/jinian.jpg",
  huida: "./assets/images/huida.jpg",
  shouhui: "./assets/images/shouhui.jpg",
  yigezi: "./assets/images/yigezi.jpg",
  fasheng: "./assets/images/fasheng.jpg",
  jianzheng: "./assets/images/jianzheng.jpg",
  chuangyi: "./assets/images/chuangyi.jpg",
  zouxiu: "./assets/images/zouxiu.jpg",
  gaibian: "./assets/images/gaibian.jpg",
  fengyu: "./assets/images/fengyu.jpg",
  kuayue: "./assets/images/kuayue.jpg",
  fangan: "./assets/images/fangan.jpg",
  guanyu: "./assets/images/guanyu.jpg",
  shaziguazi: "./assets/images/shaziguazi.jpg",
  meiyan: "./assets/images/meiyan.jpg",
  xunzhao: "./assets/images/xunzhao.jpg",
  huigu: "./assets/images/huigu.jpg",
  manshuo: "./assets/images/manshuo.jpg",
  bangmang: "./assets/images/bangmang.jpg",
  pindie: "./assets/images/pindie.jpg",
  qingchun: "./assets/images/qingchun.jpg",
  suiyue: "./assets/images/suiyue.jpg"
};
 
var arr = [];
for (var attr in imgs) {
	arr.push(imgs[attr]);
}


window.config = {
  baseUrl: "https://xlive.xinhuaapp.com",
  secretKey: "e9469538b0623783f38c585821459454",
  dataList: [
    {
      date: "12月17日",
      likeCount: 200,
      commentCount: 300,
      title:"40年，你可曾读懂父亲？",
      faces: new Array(15),
      commentList: [
        {
          username: "再见@青春",
          title:
            "父爱如山，父爱是默默的付出，父爱是沉稳，父爱是。。。倒不出的心酸和光荣。我爱你，父亲"
        },
        {
          username: "树子",
          title: "不同父亲的侧影都是时代背景的体现！"
        },
        {
          username: "岁月如哥",
          title: "接过父辈的旗帜，沿着父辈的脚步前行！"
        }
      ],
      bannerList: [
        {
          img: imgs.img40,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5327123?isview=1&homeshow=1",
          title: "40年，你可曾读懂父亲？ "
        }
      ]
    },
    {
      date: "12月17日",
      likeCount: 200, //2
      commentCount: 300,
      faces: new Array(15),
      title:"留声40年系列一 ",
      bannerList: [
        {
          img: imgs.liusheng1,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5080757?isview=1&homeshow=1",
          title: "这个刷屏的大展中，有一台专门为你预留的“留声机” "
        }
      ],
      commentList: [
        {
          username: "十八公",
          title:
            "熟悉的旋律响起，勾起万千思绪，抚今追昔，倍感珍惜，也更加鞭策自己。"
        },
        {
          username: "Smile",
          title: "送了我一首《祖国颂》，前奏开始的时候，就能感觉到心血涌动。"
        },
        {
          username: "轩轩",
          title: "再听听四十年前的留声机，感觉最舒服了。"
        }
      ]
    },
    {
      date: "12月17日",
      likeCount: 200, //3
      commentCount: 300,
      faces: new Array(15),
      title:"留声40年系列二",
      bannerList: [
        {
          img: imgs.gushi,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5235134?isview=1&homeshow=1",
          title: "留声40年 那些改变你我的故事 "
        }
      ],
      commentList: [
        {
          username: "郝全林",
          title:
            "感人的歌声留给人的记忆是长远的。伴随着你的成长，镌刻在心灵的深处，凝聚着一种力量。"
        },
        {
          username: "沂蒙山水",
          title: "青春无悔，青春万岁！"
        },
        {
          username: "山村野夫",
          title: "乘着歌声的翅膀飞过了四十年，现在听来仍然是热血沸腾！"
        }
      ]
    },

    {
      date: "12月17日",
      likeCount: 200, //3
      commentCount: 300,
      faces: new Array(15),
      title:"留声40年系列三",
      subtitle:"（横向滑动）",
      bannerList: [
        {
          img: imgs.liusheng2,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5184181?isview=1&homeshow=1",
          title: "“我在最没有能力照顾TA的年纪,碰见了最想照顾一生的人。” "
        },
        {
          img: imgs.liusheng3,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5192820?isview=1&homeshow=1",
          title: "“时光久远，念你如常。”"
        },
        {
          img: imgs.liusheng4,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5201151?isview=1&homeshow=1",
          title: "初听不识曲中意，再听已是曲中人"
        },
        {
          img: imgs.liusheng5,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5211660?isview=1&homeshow=1",
          title: "此身许国，亦能许卿"
        },
        {
          img: imgs.liusheng6,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5223444?isview=1&homeshow=1",
          title: "“留声40年”主题列车、地铁站亮相京杭"
        },
        {
          img: imgs.liusheng7,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5229622?isview=1&homeshow=1",
          title: "他不是老了，他只是依然热爱着他十五岁时喜欢的东西"
        },
        {
          img: imgs.liusheng8,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5237133?isview=1&homeshow=1",
          title: "地铁上的这个展览不仅“刷爆了”朋友圈 还“引爆了”媒体圈"
        },
        {
          img: imgs.liusheng9,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5247845?isview=1&homeshow=1",
          title: "哎呀，怎么就火了呢？"
        }
      ],
      commentList: [
        {
          username: "不要香菜",
          title: "哈哈哈哈哈说新闻要正经点，怎么能变这么甜呢？"
        },
        {
          username: "张先生",
          title: "完了。。。接下来一段时间地铁上班更挤了"
        },
        {
          username: "Lian°",
          title: "新华社真是又有活力又具有准确的导向力，点赞"
        },
        {
          username: "伟",
          title: "身为4号线地铁司机的我，还是很自豪的嘛"
        },
        {
          username: "灯火阑珊处",
          title: "加油中国，我为你感到骄傲！"
        }
      ]
    },
    {
      date: "12月17日",
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "人民心愿 ",
      bannerList: [
        {
          img: imgs.rmxy,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5316743?isview=1&homeshow=1",
          title: "人民心愿 "
        }
      ],
      commentList: [
        {
          username: "吴昊",
          title: "小时候的心愿是，火腿肠随便吃。现在早就不想吃了"
        },
        {
          username: "山村野夫",
          title: "小时候的愿望是当一名医生，现在已经穿上白大褂了"
        }
      ]
    },

    {
      date: "12月17日",
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title:'历史从这里转身',
      subtitle:"（横向滑动）",
      subimg:imgs.lishi1,
      bannerList: [
        {
          img: imgs.lishi2,
          href: "http://www.xinhuanet.com/interview/c40nzgqj/ah.htm",
          title: "按下手印后"
        },
        {
          img: imgs.lishi3,
          href: "http://www.xinhuanet.com/interview/c40nzgqj/sz.htm",
          title: "四十正青春"
        },
        {
          img: imgs.lishi4,
          href: "http://www.xinhuanet.com/interview/c40nzgqj/hn.htm",
          title: "潮起海之南"
        },
        {
          img: imgs.lishi5,
          href: "http://www.xinhuanet.com/interview/c40nzgqj/sh.htm",
          title: "九〇后传奇"
        },
        {
          img: imgs.lishi6,
          href: "http://www.xinhuanet.com/interview/c40nzgqj/xa.htm",
          title: "千年之约定"
        }
      ],
      commentList: [
        {
          username: "吴昊",
          title: "小时候的心愿是，火腿肠随便吃。现在早就不想吃了"
        },
        {
          username: "山村野夫",
          title: "小时候的愿望是当一名医生，现在已经穿上白大褂了"
        }
      ]
    },
    {
      date: "12月17日",
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title:'画一个圈圈',
      bannerList: [
        {
          img: imgs.yuanquan,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5315536?isview=1&homeshow=1",
          title: "画一个圈圈圆圆圈圈……哇！ "
        }
      ],
      commentList: [
        {
          username: "77777",
          title: "看着标题为什么不受控制的哼唱起来"
        },
        {
          username: "静心如水",
          title:
            "四十年里的变迁多次看得我热泪盈眶！为伟大祖国的日益强大而骄傲！为新华社的爱国心点赞！"
        }
      ]
    },
    {
      date: "12月17日",
      likeCount: 200,
      commentCount: 300,
      title:"一起来做短视频",
      faces: new Array(15),
      bannerList: [
        {
          img: imgs.duanshiping,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5081743?isview=1&homeshow=1",
          title: "“一起来画”改革开放40周年动画短视频大赛启动 "
        }
      ],
      commentList: [
        {
          username: "李亚松",
          title: "年龄是青年，绘画水平幼儿组"
        },
        {
          username: "十八公",
          title: "才华就是财富，等你来拿。"
        }
      ]
    },
    {
      date: "12月17日", //6
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title:"框住你的心",
      bannerList: [
        {
          img: imgs.tongkuang,
          href: "https://mp.weixin.qq.com/s/0WSGDyDcvr5dCKiVFJWByA",
          title: "你来啊！来了我就框住你的心！ "
        }
      ],
      commentList: [
        {
          username: "轩轩",
          title: "快来关注新华社，要特别快，不然框不住你的心。"
        },
        {
          username: "Xf XF",
          title:
            "虽然仅仅90后，但从小到大看着祖国一天天变好变强，无比自豪！我们要与时代同框，记录这最美好的时代！我爱你祖国！"
        },
        {
          username: "文岩",
          title: "我把我的靓照P进你们这个框里，我是不是太聪明了"
        }
      ]
    },
    {
      date: "12月17日", //7
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title:'40年40个“第一”',
      bannerList: [
        {
          img: imgs.suiyue,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/3531151?isview=1&homeshow=1",
          title: "岁月如歌！改革开放40年40个“第一” "
        }
      ],
      commentList: [
        {
          username: "新华社客户端网友",
          title: "新时代中国改革开放的步伐不会停息！"
        }
      ]
    },
    {
      date: "12月17日", //8
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title:'"C1978"号航班即将起飞',
      bannerList: [
        {
          img: imgs.kaifang,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5276780?isview=1&homeshow=1",
          title: '紧急通知！"C1978"号航班即将起飞，请小伙伴们抓紧登机'
        }
      ],
      commentList: [
        {
          username: "何杰",
          title: "吓得我赶紧看看自己的航班信息"
        },
        {
          username: "新闻青年",
          title: "一起穿阅鸭！冲鸭！"
        }
      ]
    },
    {
      date: "12月17日", //9
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title:"1分钟里的40年",
      bannerList: [
        {
          img: imgs.dashuju,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5287413?isview=1&homeshow=1",
          title: "大数据看中国：1分钟里的40年"
        }
      ],
      commentList: [
        {
          username: "新华社客户端网友",
          title: "想想过去的筒子楼，现在的变化真是太大了。"
        },
        {
          username: "新华社客户端网友",
          title: "岁月将一段段往事定格成一幕幕全民的集体记忆，历久弥新。"
        }
      ]
    },
    {
      date: "12月17日", //10
      likeCount: 200,
      commentCount: 300,
      title:"这些年，你变了……",
      faces: new Array(15),
      bannerList: [
        {
          img: imgs.zhexienian,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5209837?isview=1&homeshow=1",
          title: "这些年，你变了……"
        }
      ],
      commentList: [
        {
          username: "方圆几里",
          title: "我们做了那么多改变，只是为了心中的不变。"
        },
        {
          username: "唐均胜",
          title: "这些年，努力过，奋斗过，失败过，仍然痴心不改，负重前行！"
        }
      ]
    },
    {
      date: "12月17日", //11
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title:"令人心动的特殊物件",
      bannerList: [
        {
          img: imgs.teshuwujian,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5103291?isview=1&homeshow=1",
          title: "看！这些令人心动的特殊物件"
        }
      ],
      commentList: [
        {
          username: "雨过天晴",
          title:
            "现场可是人山人海，40年取得成绩令人眼花缭乱，切实感觉到我们不仅站起来、富起来，更强起来了！"
        },
        {
          username: "Sea",
          title: "今天刚去看了，自行车、电视都是回忆啊"
        }
      ]
    },
    {
      date: "12月17日", //12
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title:"请回答2018",
      bannerList: [
        {
          img: imgs.haohio,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5281206?isview=1&homeshow=1",
          title: "新华社推出“请回答2018”线上、线下活动"
        }
      ],
      commentList: [
        {
          username: "新华社客户端网友",
          title: "40年，弹指一挥间。今后路还长，努力加油干！共圆中国梦！"
        }
      ]
    },
    {
      date: "12月17日", //13
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title:"与时代同框",
      bannerList: [
        {
          img: imgs.shidai,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5327036?isview=1&homeshow=1",
          title: "“与时代同框”活动亮相京沪深三地"
        }
      ],
      commentList: [
        {
          username: "大婶～华视眼镜",
          title: "我18号就去上海外滩找，看你能不能框住我滴心，哈哈哈。"
        },
        {
          username: "健",
          title: "我有点儿宽，需要一个大框框昂"
        }
      ]
    },
    {
      date: "12月17日", //14
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title:"改革开放40年大事",
      bannerList: [
        {
          img: imgs.zhencang,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5324940?isview=1&homeshow=1",
          title: "每一张都值得珍藏！160秒手绘改革开放40年大事"
        }
      ],
      commentList: [
        {
          username: "Liping",
          title: "作为一个经历了这40年来改革开放成果的人感到很自豪。"
        },
        {
          username: "新华社客户端网友",
          title: "感谢祖国，您辛苦了！"
        }
      ]
    },
    {
      date: "12月17日", //15
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "来……来了！",
      bannerList: [
        {
          img: imgs.yifu,
          href: "https://mp.weixin.qq.com/s/dpDKK_7lwDejV8fih4OSuw",
          title: "来……来了！"
        }
      ],
      commentList: [
        {
          username: "不忘初心&一味做自己",
          title: "我有故事，你有酒吗？"
        },
        {
          username: "茂华",
          title: "我就想知道，照片中塗鸦的字儿是谁写的？哈哈哈"
        }
      ]
    },
    {
      date: "12月17日", //16
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "刘烨的大片",
      bannerList: [
        {
          img: imgs.liuye,
          href: "https://mp.weixin.qq.com/s/swG2g22Cv4Mv2RFeT9Sj3w",
          title: "来了！这就是刘烨的大片"
        }
      ],
      commentList: [
        {
          username: "MH",
          title:
            "我和你音乐响起，莫名留下了眼泪。零八奥运，我是孩童，十年时间，又翻了新天地。"
        },
        {
          username: "大萌神呀~",
          title: "终于等到揭晓答案了，前排观影。"
        }
      ]
    },
    {
      date: "12月17日", //17
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "穿越时光的照片",
      bannerList: [
        {
          img: imgs.chuanyue,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5312090?isview=1&homeshow=1",
          title: "这40组穿越时光的照片，哪张感动了你？"
        }
      ],
      commentList: [
        {
          username: "新华社客户端网友",
          title: "40年来，我们国家发生了翻天覆地的变化。"
        },
        {
          username: "网友",
          title: "看到这些照片真的是太感慨了，满满的都是回忆啊！"
        }
      ]
    },
    {
      date: "12月17日", //18
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title:"你的表情可“斗”了",
      bannerList: [
        {
          img: imgs.doutu,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5272561?isview=1&homeshow=1",
          title: "改革开放40年|听说，你的表情可“斗”了"
        }
      ],
      commentList: []
    },
    {
      date: "12月17日", //19
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title:"改革开放40年",
      bannerList: [
        {
          img: imgs.gaigekaifang40,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5112508?isview=1&homeshow=1",
          title: "改革开放40年|“他”经历了这些事儿，你呢？"
        }
      ],
      commentList: []
    },
    {
      date: "12月17日", //20
      likeCount: 200,
      commentCount: 300,
      title:"40年里的新鲜事物",
      faces: new Array(15),
      bannerList: [
        {
          img: imgs.xinxian,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5167594?isview=1&homeshow=1",
          title: "请回答，1978-2018！40年里的新鲜事物 你还记得吗？"
        }
      ],
      commentList: []
    },
    {
      date: "12月17日", //21
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "这才是中国该有的动画！",
      bannerList: [
        {
          img: imgs.donghua,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5336021?isview=1&homeshow=1",
          title: "这才是中国该有的动画！"
        }
      ],
      commentList: []
    },
    {
      date: "12月17日", //22
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "一起随着时间去旅行",
      bannerList: [
        {
          img: imgs.suoyouren,
          href:
            "http://h5.zhongguowangshi.com/h5/qihuanzhilv/index.html?from=timeline&isappinstalled=0",
          title: "@所有人，一起随着时间去旅行"
        }
      ],
      commentList: []
    },
    {
      date: "12月17日", //23
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "这就是1978的回答！",
      bannerList: [
        {
          img: imgs.huida,
          href: "https://mp.weixin.qq.com/s/7Aufzr6CTRNg5af3s0uOFg",
          title: "这就是1978的回答！"
        }
      ],
      commentList: []
    },
    {
      date: "12月17日", //24
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "我们的一点心意",
      bannerList: [
        {
          img: imgs.jinian,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5175337?isview=1&homeshow=1",
          title: "在这段特殊的日子，这是我们的一点心意"
        }
      ],
      commentList: [
        {
          username: "宋宋",
          title: "我们都是改变开放的弄潮儿！"
        },
        {
          username: "暴走萝莉",
          title: "谢谢新华社的心意！"
        },
        {
          username: "哈哈",
          title: "这点心意，用来做微信头像，永久记忆！"
        }
      ]
    },
    {
      date: "12月17日", //25
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title:"寻找“你”“我”的故事",
      bannerList: [
        {
          img: imgs.luopan,
          href: "https://mp.weixin.qq.com/s/y9W-uWGFypRYphqzeUYucg",
          title: "在岁月罗盘中，寻找“你”“我”的故事"
        }
      ],
      commentList: [
        {
          username: "SAgP",
          title: "岁月罗盘，快带我回到过去吧"
        },
        {
          username: "刘锋",
          title: "人生就是一场精彩纷呈舞台，让你发挥表演"
        },
        {
          username: "LZ仁",
          title: "岁月的罗盘，承载了几代人的艰辛与希望、奋斗与輝煌的历史回望！"
        }
      ]
    },
    {
      date: "12月17日", //26
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "这33米的风景，值得你好好看看",
      bannerList: [
        {
          img: imgs.fengjing,
          href: "https://mp.weixin.qq.com/s/aDvucBZfXGU1CDycgMP0SA",
          title: "这33米的风景，值得你好好看看"
        }
      ],
      commentList: [
        {
          username: "喜欢欣赏",
          title:
            " 综上所述这33米的风景，展现大美中国，进化中的人文之美……一起来感受一下吧！值得好好看看～"
        },
        {
          username: "小苹果",
          title: "人在画中走  景在屏中游"
        },
        {
          username: "八喜",
          title:
            "你不说，我真不知道。以前，只知道日新月异，现在，看到了争分夺秒"
        }
      ]
    },
    {
      date: "12月17日", //27
      likeCount: 200,
      commentCount: 300,
      title: "40年来最流行的那些衣服",
      faces: new Array(15),
      bannerList: [
        {
          img: imgs.shouhui,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5300638?isview=1&homeshow=1",
          title: "手绘“穿”越  40年来最流行的那些衣服"
        }
      ],
      commentList: [
        {
          username: "@糖葫芦多一点糖果",
          title:
            "每个时代都有每个时代服装的特色，这些见证了中国的发展，是我们的历史印记"
        },
        {
          username: "@四字弟弟的二十喵喵",
          title: "现在看以前的衣服也没觉得过时。"
        },
        {
          username: "@lazy20137",
          title: "服饰的变化，也体现了我国经济的变化"
        }
      ]
    },
    {
      date: "12月17日", //28
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "两座城的眉眼怕你看不懂",
      bannerList: [
        {
          img: imgs.meiyan,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5240915?isview=1&homeshow=1",
          title: "40岁以下别看！两座城的眉眼怕你看不懂"
        }
      ],
      commentList: [
        {
          username: "新华社客户端网友",
          title: "是啊，90后真的看不太懂呢！..."
        },
        {
          username: "新华社客户端网友",
          title: "自那个春天起，转机开始。"
        },
        {
          username: "新华社客户端网友",
          title: "真的是时代不同了，人们也越来越富裕了。"
        }
      ]
    },
    {
      date: "12月17日", //29
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "一个字形容改革开放四十年",
      bannerList: [
        {
          img: imgs.yigezi,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5046240?isview=1&homeshow=1",
          title: "如果用一个字形容改革开放四十年，你会用？"
        }
      ],
      commentList: [
        {
          username: "新华社客户端网友",
          title: "我们的祖国确实是翻天覆地的变化！我身为中国人感到骄傲。"
        },
        {
          username: "新华社客户端网友",
          title: "我们伟大的中国这40年来很不容易啊！"
        },
        {
          username: "新华社客户端网友",
          title: "我想还是“新”，一切都是新的呀。"
        }
      ]
    },
    {
      date: "12月17日", //30
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "“国博内的走秀”见证改革开放",
      bannerList: [
        {
          img: imgs.zouxiu,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5080755?isview=1&homeshow=1",
          title: "“国博内的走秀”见证改革开放４０年服装变化"
        }
      ],
      commentList: []
    },
    {
      date: "12月17日", //31
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "噌！40秒40年 这里发生了什么？",
      bannerList: [
        {
          img: imgs.fasheng,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5288728?isview=1&homeshow=1",
          title: "噌！40秒40年 这里发生了什么？"
        }
      ],
      commentList: [
        {
          username: "刘清洁",
          title: "雄壮，威武，让人振奋"
        },
        {
          username: "蜗牛",
          title:
            "4年，一个小县城的变化也是翻天覆地的，祖国日渐强大！心中无限自豪！"
        },
        {
          username: "情殇",
          title: "为深圳40年改革开放取得的成果点赞！"
        }
      ]
    },
    {
      date: "12月17日", //32
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "情·弦 草原歌声四十年",
      bannerList: [
        {
          img: imgs.chuangyi,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5330841?isview=1&homeshow=1",
          title: "创意视频｜情·弦 草原歌声四十年"
        }
      ],
      commentList: [
        {
          username: "新华社客户端网友",
          title: "走出去开阔视野，迎进来海纳百川。"
        },
        {
          username: "新华社客户端网友",
          title: "传统的、民族的、摇滚的、混搭的..."
        },
        {
          username: "新华社客户端网友",
          title: "每一曲音乐，都饱含着一代又一代音乐人的深情。"
        }
      ]
    },
    {
      date: "12月17日", //33
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "见证丨40年，衣之变",
      bannerList: [
        {
          img: imgs.jianzheng,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5175070?isview=1&homeshow=1",
          title: "见证丨40年，衣之变"
        }
      ],
      commentList: [
        {
          username: "新华社客户端网友",
          title: "由于人们穿着的颜色越来越丰富 这个世界也越来越多彩"
        },
        {
          username: "新华社客户端网友",
          title: "真的是一种见证啊，简直是太棒了"
        },
        {
          username: "新华社客户端网友",
          title: "我们国家一步一步发展到今天真是太不容易了啊"
        }
      ]
    },
    {
      date: "12月17日", //34
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "还记得“傻子瓜子”吗？",
      bannerList: [
        {
          img: imgs.shaziguazi,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/4598832?isview=1&homeshow=1",
          title: "还记得“傻子瓜子”吗？"
        }
      ],
      commentList: [
        {
          username: "@新华社客户端网友",
          title: "满满的都是回忆啊"
        },
        {
          username: "@新华社客户端网友",
          title: "90后的我们表示 只知道真心瓜子"
        },
        {
          username: "@新华社客户端网友",
          title: "老一代的一定很好吃啊"
        }
      ]
    },
    {
      date: "12月17日", //35
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "改变中国 影响世界的40年的数据视频",
      bannerList: [
        {
          img: imgs.gaibian,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5326020?isview=1&homeshow=1",
          title: "创意数据视频|改变中国 影响世界的40年"
        }
      ],
      commentList: [
        {
          username: "网友评论",
          title: "祖国强大，人民自豪"
        },
        {
          username: "网友评论",
          title: "中国加油，祝福祖国越来越好！"
        },
        {
          username: "上善若水",
          title: "我生于中国，我自豪"
        }
      ]
    },
    {
      date: "12月17日", //36
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "全球治理 中国方案",
      bannerList: [
        {
          img: imgs.fangan,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5303777?isview=1&homeshow=1",
          title: "重磅微视频|全球治理 中国方案"
        }
      ],
      commentList: []
    },
    {
      date: "12月17日", //37
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "跨越40年的民心见证",
      bannerList: [
        {
          img: imgs.kuayue,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5273069?isview=1&homeshow=1",
          title: "跨越40年的民心见证"
        }
      ],
      commentList: [
        {
          username: "@日常开森呀呀呀",
          title: "改革开放40年改善了很多人的生活，我们的生活越来越好。"
        },
        {
          username: "@可拉可拉冰冰",
          title: "关心农民，毕竟是农业大国，用更少更有效路的劳动力赚更多的钱"
        },
        {
          username: "@啊Teen",
          title: "40年政策一变再变，但不变的是为农民着想的心"
        }
      ]
    },
    {
      date: "12月17日", //38
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "从改革开放40年看中国奇迹",
      bannerList: [
        {
          img: imgs.fengyu,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5268414?isview=1&homeshow=1",
          title: "风雨砥砺 壮丽史诗——从改革开放40年看中国奇迹"
        }
      ],
      commentList: [
        {
          username: "@伊米难寻",
          title: "改革开放40年是奇迹的40年"
        },
        {
          username: "@四字弟弟987",
          title: "激活亿万人民的奋斗和干劲，凝聚起中国实现梦想的磅礴伟力。"
        },
        {
          username: "@四字弟弟123",
          title: "这一路我们风雨兼程！幸亏改革开放的成果没有辜负我们的努力！"
        }
      ]
    },
    {
      date: "12月17日", //39
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "习主席曾在这里这样说……",
      bannerList: [
        {
          img: imgs.guanyu,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5329989?isview=1&homeshow=1",
          title: "关于改革开放，习主席曾在这里这样说……"
        }
      ],
      commentList: [
        {
          username: "@新华社客户端网友",
          title:
            "40年的改革开放，百姓的衣食住行每一处都发生可喜的变化，点个赞。"
        },
        {
          username: "@新华社客户端网友",
          title: "四十年，我们一直在路上！"
        },
        {
          username: "@新华社客户端网友",
          title:
            "回首过往，四十年是一段精彩旅程；更好出发，中国改革开放永不止步。"
        }
      ]
    },
    {
      date: "12月17日", //40
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "“第一动力”的时代答卷",
      bannerList: [
        {
          img: imgs.dajuan,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5060796?isview=1&homeshow=1",
          title: "创新：“第一动力”的时代答卷"
        }
      ],
      commentList: []
    },
    {
      date: "12月17日", //41
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "有一个地方，让你边嗨边感动",
      bannerList: [
        {
          img: imgs.gandong,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5323994?isview=1&homeshow=1",
          title: "今天，有这样一个地方，让你边嗨边感动"
        }
      ],
      commentList: [
        {
          username: "会变魔术",
          title: "那个年代真好，00后表示想回去"
        },
        {
          username: "呵，Q",
          title:
            "每个年代有每个年代的好。现在的我们怀念过去，如果是过去肯定也会羡慕现在的我们。"
        },
        {
          username: "海石",
          title: "让回忆定格，画面感很强"
        }
      ]
    },
    {
      date: "12月17日", //42
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "寻找40年里的我",
      bannerList: [
        {
          img: imgs.xunzhao,
          href:
            "https://xhpfmapi.zhongguowangshi.com/vh512/share/5334395?isview=1&homeshow=1",
          title: "寻找40年里的我"
        }
      ],
      commentList: []
    },
    {
      date: "12月17日", //43
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "回顾改革开放40年",
      bannerList: [
        {
          img: imgs.huigu,
          href: "http://www.sc.xinhuanet.com/xmt/2018-04/09/c_1122654820.htm",
          title: "@新的社会阶层人士 回顾改革开放40年 这些题目你能答对吗？"
        }
      ],
      commentList: []
    },
    {
      date: "12月17日", //44
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "漫说改革开放40年通讯工具变迁",
      bannerList: [
        {
          img: imgs.manshuo,
          href: "http://www.ah.xinhuanet.com/2018-09/14/c_1123430867.htm",
          title: "漫说改革开放40年通讯工具变迁：穿越时空的爱"
        }
      ],
      commentList: []
    },
    {
      date: "12月17日", //45
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "帮个忙，请你@这个人",
      bannerList: [
        {
          img: imgs.bangmang,
          href: "https://mp.weixin.qq.com/s/mPOQb_21iV_1qodD2NEv3Q",
          title: "帮个忙，请你@这个人"
        }
      ],
      commentList: [
        {
          username: "茄丫茄丫茄",
          title:
            "@我的家人，感谢你们一直健健康康地陪伴我身边25年...希望再更多的35/45/55...你们都健康~~"
        },
        {
          username: "Elisha",
          title: "一定是特别的缘分，才一路走来成为了一家人"
        },
        {
          username: "WAN",
          title: "@我的祖国母亲"
        }
      ]
    },
    {
      date: "12月17日", //46
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title: "这里面一定有你的青春",
      bannerList: [
        {
          img: imgs.qingchun,
          href: "https://mp.weixin.qq.com/s/kIAOOtFtihHX411zQMIZqg",
          title: "敢不敢点开？这里面一定有你的青春......"
        }
      ],
      commentList: [
        {
          username: "烟🔥 火",
          title: "同桌的你现在好吗？"
        },
        {
          username: "北风轻飘",
          title: " 熟悉的老歌还是那样的经典,我们的青春已远去,怀念青春!"
        },
        {
          username: "大刘666",
          title: "时光不老，青春不散"
        }
      ]
    },
    {
      date: "12月17日", //47
      likeCount: 200,
      commentCount: 300,
      faces: new Array(15),
      title:"不拼爹，不拼颜值，我们一起拼年代",
      bannerList: [
        {
          img: imgs.pindie,
          href: "https://mp.weixin.qq.com/s/F6wa-zeshiH-oy5BpiDerQ",
          title: "不拼爹，不拼颜值，我们一起拼年代！"
        }
      ],
      commentList: []
    }
    /* {
      date: "12月16日",
      faces: new Array(15),
      likeCount: 200,
      commentCount: 300,
      commentList: [
        {
          username: "十八公",
          title: "熟悉的旋律响起，勾起万千思绪，抚今追昔，倍感珍惜，也更加鞭策自己。"
        },
        {
          username: "Smile",
          title: "送了我一首《祖国颂》，前奏开始的时候，就能感觉到心血涌动。"
        
        },
        {
          username: "轩轩",
          title:'再听听四十年前的留声机，感觉最舒服了。'
        }
      ],
      bannerList: [
        {
          img: imgs.liusheng1,
          href:"https://xhpfmapi.zhongguowangshi.com/vh512/share/5080757?isview=1&homeshow=1",
          title: "这个刷屏的大展中，有一台专门为你预留的“留声机”",
        },
        {
          img: imgs.liusheng2,
          href: "https://xhpfmapi.zhongguowangshi.com/vh512/share/5184181?isview=1&homeshow=1",
          title: '我在最没有能力照顾TA的年纪,碰见了最想照顾一生的人。',
        },
        {
          img: imgs.banner3,
          href: "#",
          title: '紧急通知！"C1978"号航班即将起飞，请小伙伴们抓紧登机',
        }
      ]
    } */
  ]
};
 
var musics = {
	music: {
		src: './assets/music/bg5.mp3',
		autoplay: false,
		name: 'bg2',
		loop: true
	}
};

 (function () {

 	if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
 		handleFontSize();
 	} else {
 		if (document.addEventListener) {
 			document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
 		} else if (document.attachEvent) {
 			document.attachEvent("WeixinJSBridgeReady", handleFontSize);
 			document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
 		}
 	}

 	function handleFontSize() {
 		// 设置网页字体为默认大小
 		WeixinJSBridge.invoke('setFontSizeCallback', {
 			'fontSize': 0
 		});
 		// 重写设置网页字体大小的事件
 		WeixinJSBridge.on('menu:setfont', function () {
 			WeixinJSBridge.invoke('setFontSizeCallback', {
 				'fontSize': 0
 			});
 		});
 	}
 })();