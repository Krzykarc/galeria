<template>
  <div>
    <router-link to="/menu">
      <div id="logo">
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
#logo {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0; botton: 0; right: 0; left: 0;

  background: url('../assets/ep.png') center center no-repeat;
  background-size: 10%;

  animation-name: showUp;
  animation-duration: 8s;
}
@keyframes showUp {
  0% {
    opacity: 0.0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1.0);
  }
}

@media only screen and (max-width: 1000px) {
#logo {
  background-size: 20%;
}
}
</style>
