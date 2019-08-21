<template>
  <div><back v-show="pokaz==0"></back><div v-on:click="pokaz=0"><exit v-show="pokaz==1"></exit></div>

    <div class="DivToScroll">
      <div class="DivWithScroll">

        <div v-for="image in images" v-on:click="showImage(link=image.pathLong)" class="container">
            <img :src="image.pathLong" />
        </div>

        <div class="boss" style="filter:none;" v-show="pokaz==1" v-on:click="pokaz=0">
          <img :src="link" />
        </div>


      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      images: [
        { shortPath : '' },
        { longPath : '' }
      ],
      link: '../assets/p1.jpg',
      start: 1,
      pokaz: 0
    }
  },
  mounted() {
    this.images.pop();
    this.images.pop();
    this.importAll(require.context('../assets/gallery1/', false, /\.jpg$/));
    this.link = require('../assets/p1.jpg');
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
    },
    showImage(lin) {
    this.link = lin;
      this.pokaz = 1;
    }
  }
}
</script>

<style scoped>

.boss {
  position: fixed;
  width:100vw;
  height: 100vh;
  z-index: 1;
  background-color: black;
}

.container {
    position: relative;
    float: left;
    width: 21vw;
    height: 21vw;
    box-sizing: border-box;
    border: solid;
    border-width: 1px;
    margin: 2.5vh;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
}

.container:hover {
  filter: none;
  cursor: pointer;
}

img {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 100%;
  max-height: 100%;
  width: inherit !important;
  transform: translate(-50%,-50%);
}

.DivToScroll{
}

.DivWithScroll{
    height: 100vh;
    overflow:scroll;
    overflow-x:hidden;
    padding-right: 0vw;
}

@media screen and (max-width: 1000px) {
.container {
    filter: none;
}
.container {
    width: 39vw;
    height: 39vw;
}
}
</style>
