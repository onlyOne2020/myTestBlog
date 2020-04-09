// right random cloud
let randomCloud=new Vue({
    el:'#random_cloud',
    data:{
        title:"随机标签云",
        tags:["E6","Js","php","vue",,"E6","Js","php","vue","net","net","Java","E6","Js","php","vue","oracle","E6","Js","php","vue","net","php","vue","oracle","Java","oracle","E6","Js","php","vue","net","Java","oracle","E6","Js","php","vue","net","Java","oracle"]
    },
    computed:{
        color(){
            return function(){
                var red=Math.random()*255+50;
                var blue=Math.random()*255+50;
                var green=Math.random()*255+50;
                return "rgb("+red+","+ blue+"," +green+")"
            }
        },
        size(){
            return function(){
                var size=Math.random()*16+8;
                return size+"px";
            }
        }
    }
})

// right news
let rightNews=new Vue({
    el:'#hot_news',
    data:{
        title:"最新热门",
        news:[{
            content:'得不到想得到的东西时，你就会得到经验',
            flag:true
        },{
            content:'得不到想得到的东西时，你就会得到经验',
            flag:true
        },{
            content:'得不到想得到的东西时，你就会得到经验',
            flag:true
        },{
            content:'得不到想得到的东西时，你就会得到经验',
            underline:false
        }]
    }
})

// right common
let rightCommon=new Vue({
    el:"#new_common",
    data:{
        title:"最新评论",
        common:[{
            title:"跪求大佬",
            date:"[一周前]",
            desc:"我是小白，看起来就很懵逼的这种",
            underline:true
        },{
            title:"跪求大佬",
            date:"[一周前]",
            desc:"我是小白，看起来就很懵逼的这种",
            underline:true
        },{
            title:"跪求大佬",
            date:"[一周前]",
            desc:"我是小白，看起来就很懵逼的这种",
            underline:true
        },{
            title:"跪求大佬",
            date:"[一周前]",
            desc:"我是小白，看起来就很懵逼的这种",
            underline:false
        }]
    }
})

// left footer
let leftFooter=new Vue({
    el:'#footer',
    data:{
        content:['C/C++','编程基础','编程基础','C/C++','C/C++','编程基础','编程基础','C/C++','C/C++','Javacript','Javacript','Javacript','Javacript','C/C++','C/C++','wordpress','wordpress','wordpress','wordpress','wordpress','C/C++','C/C++'],
        right:'Copyright © 2010-2020 个人博客 All rights reserved. 由免费开源的WordPress强力驱动. 鲁ICP备14017955号站长统计'
    }
})