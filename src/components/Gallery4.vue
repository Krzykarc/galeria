<template>
  <div class="DivToScroll DivWithScroll" style="background-color:black"><back></back>

    <div id="boss">
      <div>

        <div class="container">
          <router-link to="/czwarty/1">
            <div class="littleSqaure">
              <img :src="images[0].pathLong" />
            </div>
          </router-link>
          <router-link to="/czwarty/2">
            <div class="littleSqaure">
              <img :src="images[1].pathLong" />
            </div>
          </router-link>
          <router-link to="/czwarty/3">
              <div class="littleSqaure">
              <img :src="images[2].pathLong" />
            </div>
          </router-link>
          <router-link to="/czwarty/4">
              <div class="littleSqaure">
              <img :src="images[7].pathLong" />
            </div>
          </router-link>
        </div>


        <div class="container">
          <router-link to="/czwarty/5">
            <div class="horizontal">
              <img :src="images[4].pathLong" />
            </div>
          </router-link>
          <router-link to="/czwarty/6">
            <div class="littleSqaure">
              <img :src="images[5].pathLong" />
            </div>
          </router-link>
          <router-link to="/czwarty/7">
            <div class="littleSqaure">
              <img :src="images[6].pathLong" />
            </div>
          </router-link>
        </div>


        <div class="container">
          <router-link to="/czwarty/8">
            <div class="littleSqaure">
              <img :src="images[3].pathLong" />
            </div>
          </router-link>
          <router-link to="/czwarty/9">
            <div class="littleSqaure">
              <img :src="images[8].pathLong" />
            </div>
          </router-link>
          <router-link to="/czwarty/10">
            <div class="littleSqaure">
              <img :src="images[9].pathLong" />
            </div>
          </router-link>
          <router-link to="/czwarty/11">
            <div class="littleSqaure">
              <img :src="images[10].pathLong" />
            </div>
          </router-link>
        </div>

        <div class="container">
          <router-link to="/czwarty/12">
            <div class="verticalR">
              <img :src="images[11].pathLong" />
            </div>
          <router-link to="/czwarty/13">
          </router-link>
            <div class="littleSqaureR">
              <img :src="images[12].pathLong" />
            </div>
          <router-link to="/czwarty/14">
          </router-link>
            <div class="littleSqaureR">
              <img :src="images[13].pathLong" />
            </div>
          </router-link>
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
    }
  },
  mounted() {
    this.importAll(require.context('../assets/gallery4/', false, /\.jpg$/));
  },
  methods: {
    importAll(r) {
      this.images = [];
      r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
    }
  }
}
</script>

<style scoped>
#boss {
  padding-left: 4.5vw;
  padding-right: 3.5vw;
  padding-top: 2vw;
}
.container {
  float: left;
  width: 44vw;
  height: 44vw;
  margin: 0;
}
.littleSqaure {
  position: relative;
  float: left;
  width: 48%;
  height: 48%;
  background-color: #111111;
  margin: 1%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
.littleSqaureR {
  position: relative;
  float: right;
  width: 48%;
  height: 48%;
  background-color: #111111;
  margin: 1%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
.horizontal {
  position: relative;
  float: left;
  width: 98%;
  height: 48%;
  background-color: #111111;
  margin: 1%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
.vertical {
  position: relative;
  float: left;
  width: 48%;
  height: 98%;
  background-color: #111111;
  margin: 1%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
.verticalR {
  position: relative;
  float: right;
  width: 48%;
  height: 98%;
  background-color: #111111;
  margin: 1%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
.littleSqaure:hover {
    filter: none;
}
.littleSqaureR:hover {
    filter: none;
}
.verticalR:hover {
    filter: none;
}
.vertical:hover {
    filter: none;
}
.horizontal:hover {
    filter: none;
}
.DivToScroll{
    width: 100%;
    color: #3B3C3E;
    left: -1px;
    padding: 0;
    margin-right: 0;
}

.DivWithScroll{
    position: fixed;
    height: 100vh;
    overflow:scroll;
    overflow-x:hidden;
    direction: ltr;
}
/* width */
::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555555;
}
img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  max-height: 100%;
  height: inherit !important;
}
@media screen and (max-width:1000px){
.littleSqaure {
    filter: none;
}
.littleSqaureR {
    filter: none;
}
.verticalR {
    filter: none;
}
.vertical {
    filter: none;
}
.horizontal {
    filter: none;
}
.container {
  width: 88vw;
  height: 88vw;
}
}
</style>
