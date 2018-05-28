<template>
    <div>
        <div class="search-bar">
            <van-row>
                <van-col span="3">
                    <img :src="locationIcon" width="80%" class="location-icon"/>
                </van-col>
                <van-col span="16">
                    <input type="text" class="search-input" />
                </van-col>
                <van-col span="5">
                    <van-button size="mini">查找</van-button>
                </van-col>
            </van-row>
        </div>
        <!--swiper area-->
        <div class="swiper-area">
            <van-swipe :autoplay="1000">
                <van-swipe-item v-for="( banner ,index) in bannerPicArray" :key="index" >
                    <img v-lazy="banner.image" width="100%"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!--type bar-->
        <div class="type-bar">
            <div v-for="(cate,index) in category" :key="index">
                <img v-lazy="cate.image" width="90%">
                <span>{{cate.mallCategoryName}}</span>
            </div>
        </div>
        <!--adbanner area-->
        <div>
            <img v-lazy="adBanner" width="100%" />
        </div>
        <!--Recommend goods area-->
        <div class="recommend-area">
            <div class="recommend-title">
                商品推荐
            </div>
            <div class="recommend-body">
                <swiper :options="swiperOption">
                   <swiper-slide v-for="(item,index) in recommendGoods " :key="index" >
                       <div class="recommend-item">
                           <img :src="item.image" width="80%">
                           <div>{{item.goodsName}}</div>
                           <div>￥{{item.price}}(￥{{item.mallPrice}})</div>
                       </div>
                   </swiper-slide>
                </swiper>
            </div>
        </div>
        <floor-component :floorData="floor1" :floorTitle="floorName.floor1"></floor-component>
        <floor-component :floorData="floor2" :floorTitle="floorName.floor2"></floor-component>
        <floor-component :floorData="floor3" :floorTitle="floorName.floor3"></floor-component>
         <!-- Hot Area -->
        <div class="hot-area">
            <div class="hot-title">热卖商品</div>
            <div class="hot-goods">
                <van-list>
                    <van-row gutter='20'>
                        <van-col span='12' v-for="(item,index) in hotGoods" :key="index">
                            <goodsInfo :goodsImage="item.image" :goodsName='item.name' :goodsPrice='item.price'></goodsInfo>
                        </van-col>
                    </van-row>
                </van-list>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import url from "@/serviceApi.config.js";
import floorComponent from "../component/floorComponent";
import goodsInfo from "../component/goodsInfoComponent";

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3
      },
      msg: "Shopping Mall",
      locationIcon: require("../../assets/images/location.png"),
      category: "", //  导航栏循环
      adBanner: "", //  广告图
      bannerPicArray: [], //  轮播图片
      recommendGoods: [], //  推荐商品数据
      floor1: [], //   楼层1数据
      floor2: [], //   楼层2数据
      floor3: [], //   楼层3数据
      floorName: {}, // 楼层名称
      hotGoods: [] // 热卖商品
    };
  },
  components: { swiper, swiperSlide, floorComponent, goodsInfo },
  created() {
    axios({
      url: url.getShoppingMallInfo,
      method: "get"
    })
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          this.category = response.data.data.category; // 导航栏图片
          this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS; //获得广告图片
          this.bannerPicArray = response.data.data.slides; // 轮播图片
          this.recommendGoods = response.data.data.recommend; //  推荐商品
          this.floorName = response.data.data.floorName; //楼层名称
          this.floor1 = response.data.data.floor1; //楼层1数据
          this.floor2 = response.data.data.floor2; //楼层3数据
          this.floor3 = response.data.data.floor3; //楼层2数据
          this.hotGoods = response.data.data.hotGoods; //热卖商品
        } else {
          console.log(response);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
  overflow: hidden;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid #fff !important;
  background-color: #e5017d;
  color: #fff;
}
.location-icon {
  padding-top: 0.2rem;
  padding-left: 0.3rem;
}
.swiper-area {
  clear: both;
  max-height: 15rem;
  overflow: hidden;
}

.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar div {
  padding: 0.3rem;
  font-size: 12px;
  text-align: center;
}
.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
}
.recommend-title {
  border-bottom: 1px solid #eee;
  font-size: 14px;
  padding: 0.2rem;
  color: #e5017d;
}
.recommend-body {
  border-bottom: 1px solid #eee;
}
.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}
.hot-title {
  color: #d74118;
  text-align: center;
  padding: 8px 0;
}
</style>
