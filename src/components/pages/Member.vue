<template>
    <div>
        <div>
            <van-nav-bar title="会员中心" />
        </div>
        <div class="member-top">
            <img src="@/assets/images/errorimg.png"  class="member-img">
        </div>
        <div class="member-login">
            <div><van-button type="warning" plain>我要登录</van-button></div>
            <div><van-button type="primary" plain>我要注册</van-button></div>
        </div>
        <div>
            <van-cell-group>
                <van-cell>
                    <van-cell title="会员卡" is-link />
                    <van-cell title="地址管理" is-link  />
                    <van-cell title="我的订单" is-link  />
                    <van-cell title="会员权益" is-link />
                    <van-cell title="联系我们" is-link  />
                </van-cell>
            </van-cell-group>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.member-top {
  height: 5rem;
  text-align: center;
  padding-top: 2rem;
  background-color: #eea2ad;
}
.member-img {
  width: 70px;
  height: 70px;
  border-radius: 50px;
}
.member-login {
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  padding: 10px;
}
.member-login div {
  flex: 1;
  text-align: center;
}
</style>
