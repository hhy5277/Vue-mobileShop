<template>
    <div>
        <div class="navbar-div">
            <van-nav-bar title="购物车"/>
        </div>
        <!--显示购物车中的商品-->
        <div class="cart-list">
            <div class="cart-row" v-for="(item,index) in cartInfo" :key="index">
                <div class="cart-img">
                    <img :src="item.image" width="100%" />
                </div>
                <div class="cart-text">
                    <div class="cart-goods-name">{{item.name}}</div>
                    <div class="cart-control">
                        <van-stepper v-model="item.count" />
                    </div>
                </div>
                <div class="cart-goods-price">
                    <div>
                        ￥{{item.price | moneyFilter}}
                    </div>
                    <div>
                        x{{item.count}}
                    </div>
                    <div class="allPrice">
                        ￥{{item.price*item.count | moneyFilter}}
                    </div>
                </div>
            </div>
        </div>
        <!--显示总金额-->
        <div class="totalMoeny">
            商品总价:￥{{totalMoney | moneyFilter}}
        </div>
        <div class="cart-title">
            <van-button size="small"  type="danger" @click="clearCart" plain>
                清空购物车
            </van-button>
        </div>
    </div>
</template>



<script>
import { toMoney } from "@/filter/moneyFilter.js";
export default {
  data() {
    return {
      cartInfo: [], // 购物车内的商品
      isEmpty: false // 购物车是否为空，空为false,为空显示false
    };
  },
  // 调用获取购物车商品方法
  created() {
    this.getCartInfo();
  },
  //  计算商品总额
  computed: {
    totalMoney() {
      let allMoney = 0;
      this.cartInfo.forEach((item, index) => {
        allMoney += item.price * item.count;
      });
      localStorage.cartInfo = JSON.stringify(this.cartInfo);
      return allMoney;
    }
  },
  // 价格过滤器
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  },
  methods: {
    // 获取购物车内的商品
    getCartInfo() {
      // 判断缓存内是否有购物车数据
      if (localStorage.cartInfo) {
        // 有数据去除且赋值给cartInfo
        this.cartInfo = JSON.parse(localStorage.cartInfo);
      }
      // 打印得到结果
      console.log("this.cartInfo" + JSON.stringify(this.cartInfo));
      this.isEmpty = this.cartInfo.length > 0 ? true : false;
    },
    //清空购物车的商品
    clearCart() {
      localStorage.removeItem("cartInfo");
      this.cartInfo = [];
    },
  }
};
</script>

<style scoped>
.cart-title {
  height: 2rem;
  line-height: 2rem;
  background-color: #fff;
  border-bottom: 1px solid #e4e7ed;
  padding: 5px;
  text-align: right;
}
.cart-list {
  background-color: #fff;
}
.cart-row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 0.5rem;
  font-size: 0.85rem;
  border-bottom: 1px solid #e4e7ed;
}
.cart-img {
  flex: 6;
}
.cart-text {
  flex: 14;
  padding-left: 10px;
}
.cart-control {
  padding-top: 10px;
}
.cart-goods-price {
  flex: 4;
  text-align: right;
}
.allPrice {
  color: red;
}
.totalMoeny {
  text-align: right;
  background-color: #fff;
  border-bottom: 1px solid #e4e7ed;
  padding: 5px;
}
</style>
