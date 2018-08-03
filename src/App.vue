<template>
  <div id="app">
      <transition name="fade">
        <router-view/>
      </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  background: #f0f0f0;
  height: 100%;
}
#app {
  background-color: #f0f0f0;
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
