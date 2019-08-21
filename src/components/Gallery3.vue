<template>
  <div><back></back>
    <div class="DivToScroll">
      <div class="DivWithScroll">
        <div class="cutRight">

            <div class="description" style="margin-top:10vh" v-on:click="zmienGalerie(1)">Pierwsza
            </div>

            <div v-for="index in 5" class="description" v-on:click="zmienGalerie(index+1)">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor condimentum felis ut aliquet.
            </div>
            <div v-for="index in 5" class="description" v-on:click="zmienGalerie(index+1)">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor condimentum felis ut aliquet.
            </div>

        </div>

        <button v-on:click="wPrawo()" class="next">&gt;</button>
        <button v-on:click="wLewo" class="previous">&lt;</button>

        <div id="boss">
          <img :src="currentImages[which%currentImages.length].path" />
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
      currentImages: [
        { path : '' }
      ],
      which: 0,
      gallery: 1,
      zakres: [
        { koniec: 0 }
      ],
      link: '/trzeci/',
      id: this.$route.params.id,
    }
  },
  mounted() {
    if(typeof(this.id) == 'undefined' || this.id == null)
      this.id = 1;
    this.images.pop();
    this.images.pop();
    this.importAll(require.context('../assets/gallery3/sub1/', true, /\.jpg$/));
    this.zakres.push({koniec: this.images.length});
    this.importAll(require.context('../assets/gallery3/sub2/', true, /\.jpg$/));
    this.zakres.push({koniec: this.images.length});
    this.importAll(require.context('../assets/gallery3/sub3/', true, /\.jpg$/));
    this.zakres.push({koniec: this.images.length});
    this.importAll(require.context('../assets/gallery3/sub4/', true, /\.jpg$/));
    this.zakres.push({koniec: this.images.length});
    this.importAll(require.context('../assets/gallery3/sub5/', true, /\.jpg$/));
    this.zakres.push({koniec: this.images.length});
    this.importAll(require.context('../assets/gallery3/sub6/', true, /\.jpg$/));
    this.zakres.push({koniec: this.images.length});
    this.importAll(require.context('../assets/gallery3/sub7/', true, /\.jpg$/));
    this.zakres.push({koniec: this.images.length});
    this.importAll(require.context('../assets/gallery3/sub8/', true, /\.jpg$/));
    this.zakres.push({koniec: this.images.length});
    this.importAll(require.context('../assets/gallery3/sub9/', true, /\.jpg$/));
    this.zakres.push({koniec: this.images.length});
    this.importAll(require.context('../assets/gallery3/sub10/', true, /\.jpg$/));
    this.zakres.push({koniec: this.images.length});
    this.zmienGalerie(1);
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
    },
    wPrawo: function() {
      this.which++;
    },
    wLewo: function() {
      this.which--;
      if(this.which==-1)
        this.which += this.currentImages.length;
    },
    zmienGalerie: function(num) {
      this.gallery = num;
      this.currentImages = [];
      this.which = 0;
      for(var a=this.zakres[num-1].koniec;a<this.zakres[num].koniec;a++)  {
        this.currentImages.push({path:this.images[a].pathLong});
      }
      console.log(this.zakres[num].koniec);
      console.log(this.gallery);
      console.log(this.currentImages.length);
    }
  }
}
</script>
<style scoped>
#boss {
  position: fixed;
  bottom: 10vh;
  right: 9vw;
  width: 51vw;
  height: 34vw;
  box-sizing: border-box;
  border: solid;
  border-width: 1px;
}
#subBoss {
  width: 33%;
}
.description {
  float: left;
  border: solid;
  width: 80%;
  padding: 1vh;
  margin: 2vh;
  margin-right: 6vh;
  margin-left: 10vh;
  text-align: center;
  color: black;
  font-size: 30px;
  background-color: gray;
  word-wrap: break-word;
  cursor: pointer;
}

.DivToScroll{
    width: 100%;
    left: -1px;
    padding: 0;
    margin-right: 0;
}

.DivWithScroll{
    height: 100vh;
    overflow:scroll;
    overflow-x:hidden;
    direction: ltr;
}

.cutRight {
  width: 30%;
}

.previous{
    position: fixed;
    right: 60vw;
    bottom: 10vh;
    font-size: 45px;
    height: 34vw;
    outline: none;
    display:inline;
    float:left;
    text-decoration:none;
}

.next{
    position: fixed;
    left: 91vw;
    bottom: 10vh;
    font-size: 45px;
    height: 34vw;
    outline: none;
    display:inline;
    float:right;
    text-decoration:none;
}
img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  max-width: 100%;
  max-height: 100%;
  height: inherit !important;
}
@media only screen and (max-width: 1000px) {
.cutRight {
  width: 100%;
}
.DivToScroll{
    width: 100%;
    padding-top: 5vh;
}

.DivWithScroll{
    height: 60vh;
}
.description {
  float: left;
  border: solid;
  width: 81%;
  padding-left: 0;
  padding-right: 0;
  margin-right: 9.5%;
  margin-left: 9.5%;
}
#boss {
  bottom: 5vh;
  left: 9.5vw;
  width: 81vw;
  height: 54vw;
}
.previous{
    right: 90.5vw;
    bottom: 5vh;
    height: 54vw;
    width: 6vw;
}

.next{
    left: 90.5vw;
    bottom: 5vh;
    height: 54vw;
    width: 6vw;
}
}
</style>
