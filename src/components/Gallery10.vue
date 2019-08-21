<template>
  <div>

    <div class="DivToScroll">
      <div class="DivWithScroll">

        <router-link v-for="image in images" :to="link+start++">
          <div  class="container">
            <div class="image">
              <img :src="image.pathLong" />
            </div>
            <div class="descriptionBox">
              <p>Nam a ultricies nisl. Vivamus rhoncus nec est eu convallis. Mauris cursucommodo felis.</p>
            </div>
          </div>
        </router-link>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      images: [],
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

.DivToScroll{
    border-radius: 4px 0 4px 0;
    color: #3B3C3E;
    font-size: 12px;
    font-weight: bold;
    left: -1px;
    padding: 0;
    width: 48vw;
    margin-right: 0;
}

.DivWithScroll{
    height: 100vh;
    overflow:scroll;
    overflow-x:hidden;
    direction: rtl;
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
@media only screen and (max-width: 1000px) {
.container {
  background-size: 20%;
    width: 30vw;
}
}
</style>
