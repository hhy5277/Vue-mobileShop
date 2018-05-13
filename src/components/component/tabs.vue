<template>
    <div class="tabs">
        <ul>
            <router-link :to="{name:'ShoppingMall'}" tag="li" exact>
                <i class="icon iconfont icon-zhuye"></i>
                <div>商城</div>
            </router-link>

            <router-link :to="{name:'Classify'}" tag="li" exact>
                <i class="icon iconfont icon-ic-format-list-bulle"></i>
                <div>分类</div>
            </router-link>

            <router-link :to="{name:'Cart'}" tag="li" exact>
                <i class="icon iconfont icon-gouwuche1"></i>
                <div>购物车</div>
            </router-link>

            <router-link :to="{name:'Me'}" tag="li" exact>
                <i class="icon iconfont icon-lianxiren"></i>
                <div>会员中心</div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tabs {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  z-index: 9999;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0.5px 6px;
}

ul {
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-content: center;
  color: #7f838d;
}
ul > li {
  padding: 0.4rem 0;
  font-size: 12px;
}
.router-link-active {
  color: #e5017d;
}
.icon {
  font-size: 20px;
}
</style>
