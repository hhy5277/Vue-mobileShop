<template>
  <div id="app">
    <transition name='fade' mode="out-in">
        <router-view/>
    </transition>
    <!-- <tabs></tabs> -->
  </div>
</template>

<script>
import Vue from "vue";
import tabs from "@/components/component/tabs";
export default {
  name: "App",
  components: {
    tabs
  }
};
</script>

<style>
#app {
  background-color: #f0f0f0;
  padding-bottom: 3.5rem;
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  -webkit-transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  -webkit-transition: opacity 0.5s;
}
</style>
