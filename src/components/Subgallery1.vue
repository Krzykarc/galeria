<template>
  <div><back></back>

    <div id="boss">
      <img :src="images[whichUp%images.length].pathLong" />
    </div>

    <button v-on:click="wPrawo()" class="next">&gt;</button>
    <button v-on:click="wLewo" class="previous">&lt;</button>

    <button v-on:click="whichDown+=4" class="nextM">&gt;</button>
    <button v-on:click="toDownLoad()" class="previousM">&lt;</button>

    <div id="miniBoss">


      <div v-for="index in 4" class="element" v-on:click="whichUp=(whichDown+index-1)%images.length">
        <img :src="images[(whichDown+index-1)%images.length].pathLong" />
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      id: this.$route.params.id,
      images: [
      ],
      whichUp: 0,
      whichDown: 0
    }
  },
  mounted() {
    if(this.id==1)
      this.importAll(require.context('../assets/gallery1/sub1/', true, /\.jpg$/))
    else if(this.id==2)
      this.importAll(require.context('../assets/gallery1/sub2/', true, /\.jpg$/))
    else if(this.id==3)
      this.importAll(require.context('../assets/gallery1/sub3/', true, /\.jpg$/))
    else if(this.id==4)
      this.importAll(require.context('../assets/gallery1/sub4/', true, /\.jpg$/))
    else if(this.id==5)
      this.importAll(require.context('../assets/gallery1/sub5/', true, /\.jpg$/))
    else if(this.id==6)
      this.importAll(require.context('../assets/gallery1/sub6/', true, /\.jpg$/))
    else if(this.id==7)
      this.importAll(require.context('../assets/gallery1/sub7/', true, /\.jpg$/))
    else if(this.id==8)
      this.importAll(require.context('../assets/gallery1/sub8/', true, /\.jpg$/))
    else if(this.id==9)
      this.importAll(require.context('../assets/gallery1/sub9/', true, /\.jpg$/))
    else if(this.id==10)
      this.importAll(require.context('../assets/gallery1/sub10/', true, /\.jpg$/));
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
    },
    wPrawo: function() {
      this.whichUp++;
      if(this.whichUp%4==0)
        this.whichDown = this.whichUp;
    },
    wLewo: function() {
      this.whichUp--;
      if(this.whichUp==-1)
        this.whichUp += this.images.length*4;
      if(this.whichUp%4==3)
        this.whichDown = this.whichUp-3;
    },
    toLoad: function(num) {
      var c = (this.whichDown+num) % this.images.length;
      console.log(num);
      console.log(c);
      return c;
    },
    toDownLoad: function(){
      this.whichDown -= 4;
      if(this.whichDown<4) {
        this.whichDown += this.images.length*4;
      }
    }
  }
}
</script>

<style scoped>
body{
  height: 100%;
  width: 100%;
}
#boss {
  position: fixed;
  width: 54vw;
  height: 36vw;
  box-sizing: border-box;
  border: solid;
  border-width: 1px;
  left: 23vw;
  top: 4vh;
}
#miniBoss {
  position: fixed;
  width: 80vw;
  height: 10vw;
  margin-left: 10%;
  top: 78vh;
  padding: 0;
}
.element {
  position: relative;
  vertically-align: middle;
  float: left;
  width: 20%;
  border: solid;
  border-width: 1px;
  margin-left: 2.37812483%;
  margin-right: 2.37812483%;
  height: 100%;
  overflow: hidden;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
.element:hover {
  filter: none;
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
.previous{
    position: fixed;
    right: 77vw;
    top: 4vh;
    font-size: 45px;
    height: 36vw;
    outline: none;
    display:inline;
    float:left;
    text-decoration:none;
}

.next{
    position: fixed;
    left: 77vw;
    top: 4vh;
    font-size: 45px;
    height: 36vw;
    outline: none;
    display:inline;
    float:right;
    text-decoration:none;
}
.previousM{
    position: fixed;
    right: 90vw;
    top: 78vh;
    font-size: 45px;
    height: 10vw;
    outline: none;
    display:inline;
    float:right;
    text-decoration:none;
}

.nextM{
    position: fixed;
    left: 90vw;
    top: 78vh;
    font-size: 45px;
    height: 10vw;
    outline: none;
    display:inline;
    float:right;
    text-decoration:none;
}
@media only screen and (max-width: 1200px) {
.element {
  width: 19.87%;
}
#boss {
    top: auto;
    bottom: 35vh;
}
.previous {
    top: auto;
    bottom: 35vh;
}
.next {
    top: auto;
    bottom: 35vh;
}
.previousM {
    top: auto;
    bottom: 12vh;
}
.nextM {
    top: auto;
    bottom: 12vh;
}
#miniBoss {
    top: auto;
    bottom: 12vh;
}
}

</style>
