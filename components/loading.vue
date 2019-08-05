<template>
  <div class="loadingBar" :class="{ active: loading }"></div>
</template>

<script type="text/ecmascript-6">

export default {
    name: '',
    components: {},
    data() {
        return {
            loading: false
        }
    },
    methods: {
        start() {
            this.loading = true;
        },
        finish() {
            this.loading = false;
        }
    }
}
</script>

<style lang="less" scoped>
.loadingBar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: 800;
  background: @color-primary;
  transform: translateX(100%);
  &.active {
    display: block;
    animation: shift-rightwards 1s ease-in-out infinite;
    animation-delay: 0.8s;
  }
}
@keyframes shift-rightwards {
  0% {
    transform: translateX(-100%);
  }
  40% {
    transform: translateX(0);
  }
  60% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
