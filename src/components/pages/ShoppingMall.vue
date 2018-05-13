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

        <!-- type-bar -->
        <div class="type-bar">
            <div  v-for="(cate,index) in category" :key="index" >
                <img v-lazy="cate.image" width="90%" />
                <span>{{cate.mallCategoryName}}</span>
            </div>
        </div>

        <!--AD banner area-->
        <div class="ad-banner">
            <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
        </div>

        <!-- Recommend  goods area -->
        <div class="recommend-area">
          <div class="recommend-title">
            商品推荐
          </div>
          <div class="recommend-body">
              <!-- swiper -->
              <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in recommendGoods " :key="index">
                    <div class="recommend-item">
                      <img :src="item.image" width="80%">
                      <div>{{item.goodsName}}</div>
                      <div>￥{{item.price}}(￥{{item.mallPrice}})</div>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
          </div>
        </div>

        <!--floor one area-->
        <div class="floorName">
            <div>
                <img src="../../../src/assets/images/1F.png" width="7%" />
                <span>{{floorName1}}</span>
            </div>
        </div>
        <floorComponent :floorData="floor1"></floorComponent>

        <!-- floor two area -->
        <div class="floorName">
            <div>
                <img src="../../../src/assets/images/2F.png" width="7%" />
                <span>{{floorName2}}</span>
            </div>
        </div>
        <floorComponent :floorData="floor2"></floorComponent>

        <!-- floor three area -->
        <div class="floorName">
            <div>
                <img src="../../../src/assets/images/3F.png" width="7%" />
                <span>{{floorName3}}</span>
            </div>
        </div>
        <floorComponent :floorData="floor3"></floorComponent>
    </div>
</template>

<script>
import axios from "axios";
import floorComponent from "../component/floorComponent";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
      locationIcon: require("../../assets/images/location.png"),
      category: "", //  导航栏循环
      adBanner: "", //  广告图
      bannerPicArray: [], //  轮播图片
      recommendGoods: [], //  推荐商品数据
      floor1: [], //   楼层1数据
      floor2: [], //   楼层2数据
      floor3: [], //   楼层3数据
      floorName1: "", //  1层名称
      floorName2: "", //  2层名称
      floorName3: "" //   3层名称
    };
  },
  components: { swiper, swiperSlide, floorComponent },
  created() {
    axios({
      url:
        "https://www.easy-mock.com/mock/5af3a581656ea22f99b56083/mobileShop/index",
      method: "get"
    })
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          this.category = response.data.data.category; // 导航栏图片
          this.adBanner = response.data.data.advertesPicture; //获得广告图片
          this.bannerPicArray = response.data.data.slides; // 轮播图片
          this.recommendGoods = response.data.data.recommend; //  推荐商品
          this.floorName1 = response.data.data.floorName.floor1; //  楼层名字数据1层
          this.floorName2 = response.data.data.floorName.floor2; //  楼层名字数据2层
          this.floorName3 = response.data.data.floorName.floor3; //  楼层名字数据3层
          this.floor1 = response.data.data.floor1; //楼层1数据
          this.floor2 = response.data.data.floor2; //楼层3数据
          this.floor3 = response.data.data.floor3; //楼层2数据
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
  background-color: #e5017d;
}
.van-row {
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid 1px !important;
  background-color: #e5017d;
  color: #ffffff;
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
  background-color: #ffffff;
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
  width: 100%;
  font-size: 12px;
  text-align: center;
}
.floorName > div {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  padding: 0.5rem 0;
  color: #d74118;
}
.floorName > div > img {
  margin-right: 0.3rem;
}
</style>
