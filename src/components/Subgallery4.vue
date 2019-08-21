<template>
  <div class="DivToScroll DivWithScroll"><back></back>

    <div id="boss">
      <img :src="images[whichUp%images.length].pathLong" />
      <button v-on:click="wLewo()" class="next">&lt;</button>
      <button v-on:click="wPrawo()" class="previous">&gt;</button>
    </div>

    <div id="mobileBoss">
      <img :src="images[whichUp%images.length].pathLong" />
      <button v-on:click="wLewo()" class="next">&gt;</button>
      <button v-on:click="wPrawo()" class="previous">&lt;</button>
    </div>



    <div class="container">
      <div v-for="index in images.length">
        <div class="element" v-on:click="whichUp=(whichDown+index-1)%images.length">
          <img :src="images[(whichDown+index-1)%images.length].pathLong" />
        </div>

        <div class="mobile" v-show="index==6&&ukryj(6)">
          <img :src="images[ukryte].pathLong" />
        </div>
        <div class="mobile" v-show="index==6&&ukryj(7)">
          <img :src="images[ukryte].pathLong" />
        </div>
        <div class="mobile" v-show="index==6&&ukryj(8)">
          <img :src="images[ukryte].pathLong" />
        </div>
        <div class="mobile" v-show="index==6&&ukryj(9)">
          <img :src="images[ukryte].pathLong" />
        </div>
        <div class="mobile" v-show="index==6&&ukryj(10)">
          <img :src="images[ukryte].pathLong" />
        </div>
        <div class="mobile" v-show="index==6&&ukryj(11)">
          <img :src="images[ukryte].pathLong" />
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
      id: this.$route.params.id,
      images: [
        { shortPath : '' },
        { longPath : '' }
      ],
      whichUp: 0,
      whichDown: 0,
      ukryte: 0
    }
  },
  mounted() {
    this.images.pop();
    this.images.pop();
    if(this.id==1)
      this.importAll(require.context('../assets/gallery4/sub1/', true, /\.jpg$/))
    else if(this.id==2)
      this.importAll(require.context('../assets/gallery4/sub2/', true, /\.jpg$/))
    else if(this.id==3)
      this.importAll(require.context('../assets/gallery4/sub3/', true, /\.jpg$/))
    else if(this.id==4)
      this.importAll(require.context('../assets/gallery4/sub4/', true, /\.jpg$/))
    else if(this.id==5)
      this.importAll(require.context('../assets/gallery4/sub5/', true, /\.jpg$/))
    else if(this.id==6)
      this.importAll(require.context('../assets/gallery4/sub6/', true, /\.jpg$/))
    else if(this.id==7)
      this.importAll(require.context('../assets/gallery4/sub7/', true, /\.jpg$/))
    else if(this.id==8)
      this.importAll(require.context('../assets/gallery4/sub8/', true, /\.jpg$/))
    else if(this.id==9)
      this.importAll(require.context('../assets/gallery4/sub9/', true, /\.jpg$/))
    else if(this.id==10)
      this.importAll(require.context('../assets/gallery4/sub10/', true, /\.jpg$/))
    else if(this.id==11)
      this.importAll(require.context('../assets/gallery4/sub11/', true, /\.jpg$/))
    else if(this.id==12)
      this.importAll(require.context('../assets/gallery4/sub12/', true, /\.jpg$/))
    else if(this.id==13)
      this.importAll(require.context('../assets/gallery4/sub13/', true, /\.jpg$/))
    else if(this.id==14)
      this.importAll(require.context('../assets/gallery4/sub14/', true, /\.jpg$/));
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
    },
    wPrawo: function() {
      this.whichUp++;
    },
    wLewo: function() {
      this.whichUp--;
      if(this.whichUp==-1)
        this.whichUp += this.images.length*4;
    },
    toLoad: function(num) {
      var c = (this.whichDown+num) % this.images.length;
      console.log(num);
      console.log(c);
      return c;
    },
    ukryj: function(num) {
      if(this.images.length>num)
      {
        this.ukryte = num;
        console.log(this.ukryte);
        return 1;
      }
      else {
        this.ukryte = 0;
        console.log(this.ukryte);
        return 0;
      }
    }
  }
}
</script>

<style scoped>
#boss {
  position: fixed;
  box-sizing: border-box;
  right: 7vw;
  top: 5%;
  width: 60vw;
  height: 40vw;
  border: solid;
  border-width: 1px;
}
.container {
  float: left;
  margin: 3vw;
  margin-top: 2.5%;
  box-sizing: border-box;
  width: 24vw;
}
.element {
  position: relative;
  vertically-align: middle;
  float: left;
  width: 48%;
  height: 8vw;
  margin: 1%;
  overflow: hidden;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  box-sizing: border-box;
  border: solid;
  border-width: 1px;
}

.element:hover {
  filter: none;
}

.mobile2 {
  visibility: hidden;
}
#mobileBoss {
  visibility: hidden;
}

.mobile {
  visibility: hidden;
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
    right: 67vw;
    top: 5%;
    font-size: 45px;
    height: 40vw;
    outline: none;
    display:inline;
    float:left;
    text-decoration:none;
}

.next{
    position: fixed;
    left: 93vw;
    top: 5%;
    font-size: 45px;
    height: 40vw;
    outline: none;
    display:inline;
    float:right;
    text-decoration:none;
}
.DivToScroll{
    width: 100%;
    color: #3B3C3E;
    left: -1px;
    padding: 0;
    margin-right: 0;
    background-color: black;
}

.DivWithScroll{
    position: fixed;
    height: 100vh;
    overflow:scroll;
    overflow-x:hidden;
    direction: rtl;
}
button {
    color: black;
    background-color: #222222
}
@media screen and (max-width: 1000px) {
.container {
  margin: 0;
  margin-top: 0;
  width: 100%;
}
.element {
  width: 31vw;
  height: 31vw;
  margin: 1.1666666666666666666666vw;
  overflow: hidden;
  box-sizing: border-box;
  border: solid;
  border-width: 1px;
  filter: none;
}
.mobile2 {
  visibility: visible;
  vertically-align: middle;
  float: left;
  width: 97.61666666666666666666666vw;
  height: 64.33333333333333333333333vw;
  margin: 1.1666666666666666666666vw;
}
#mobileBoss {
  visibility: visible;
  position: fixed;
  top: 66.2vw;

  background-color: #000000;
  width: 100vw;
  height: 66vw;
  z-index: 2;
}
.previous{
    position: fixed;
    right: 0vw;
    top: 66.2vw;
    height: 66vw;
    z-index: 2;
}
.next{
    position: fixed;
    left: 0vw;
    top: 66.2vw;
    height: 66vw;
    z-index: 2;
}
.mobileContainer {

}
.mobile {
  visibility: visible;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -o-sticky;
  position: -ms-sticky;
  position: sticky;
  top: 0;
  vertically-align: middle;
  float: left;
  width: 31vw;
  height: 31vw;
  margin: 1vw;
}
#boss {
    display: none;
}
}
</style>
