<template>
  <div><back></back>

      <div class="DivWithScroll">

        <router-link v-for="image in images" :to="link+start++">

          <div  class="container">
            <div class="mobile">
              <div class="image">
                <img :src="image.pathLong" />
              </div>
              <div class="descriptionBox">
                <p>Nam a ultricies nisl. Vivamus rhoncus nec est eu convallis.</p>
              </div>
            </div>
          </div>

        </router-link>

      </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      images: [
      ],
      link: '/pierwszy/',
      start: 1
    }
  },
  mounted() {
    this.importAll(require.context('../assets/gallery1/', false, /\.jpg$/));
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
    }
  }
}
</script>

<style scoped>
.container {
  float: left;
  width: 20vw;
  height: 19.5vw;
  margin: 2%;
  box-sizing: border-box;
  border: solid;
  border-color: gray;
}
.container:hover {
  cursor: pointer;
}
.image {
  height: 75%;
  margin: auto;
  position: relative;
}

img {
  max-width: 100%;
  max-height: 100%;
  width: inherit !important;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

img:hover {
  filter:none;
}

.descriptionBox {
  position:relative;
  height: 25%;
  text-align: center;
}

.DivWithScroll{
    width: 60vw;
    height: 100vh;
    overflow:scroll;
    overflow-x:hidden;
    direction: rtl;
}
.mobile {
  width: 100%;
  height: 100%;
}
@media only screen and (max-width: 1000px) {
.container {
}
.DivWithScroll {
  padding-top: 2vh;
  padding-down: 2vh;
  padding-right: 3vw;
  margin-top: 5vh;
  overflow:scroll;
  overflow-x:hidden;
  position: fixed;
  height: 98vw;
  width: 98vh;
  transform: rotate(-90deg);
  transform-origin: right top;
  transform:rotate(-90deg) translateY(-100vh);
  direction: ltr;
}
.container {
  float: right;
  width: 22vh;
  height: 22vh;
  margin: 0;
  margin-top: 3vh;
  margin-bottom: 3vh;
  transform: rotate(90deg);
}
img {
  filter: none;
}
.mobile {
  position: relative;
  float: left;
  width: 100%;
  height: 100%;
  background-color: #dddddd;
}
.descriptionBox {
  height: 34%;
  font-size: 30px;
}
.image {
  height: 66%;
  width: 100%;
}
}
</style>
