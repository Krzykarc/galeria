<template>
  <div id="boss">

  <div v-for="index in 12" class="container">
    <div class="littleSqaure" v-show="index!=4&&index!=5&&index!=6">
    </div>
  </div>

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
#boss {
  height: 100vh;
  overflow: scroll;
}
.container {
  float: left;
  width: 32vw;
  height: 32vw;
  margin: 0;
}
.littleSqaure {
  position: relative;
  float: left;
  width: 98%;
  height: 98%;
  background-color: #111111;
  margin: 1%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
</style>
