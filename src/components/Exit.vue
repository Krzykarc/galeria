<template>
  <div>
    <button class="dropDown font">
      X
    </button>
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
.dropDown{
  --border-style: solid;
  --border-color: white;
  position: fixed;
  display: inline-block;
  background-color: #000000;
  padding: 0px;
  margin: 1vw;
  margin-left: 0 !important;
  cursor: pointer;
  --position: -webkit-sticky; /* Safari */
  --position: sticky;
  top: 0;
  right: 0;
  opacity: 0.86;
  height: auto;
  width: 2.5vw;
  float: center;
  z-index: 2;
}

.font{
  font-family: sans-serif;
  font-size: 2vw;
  color: white;
  text-align: center;
  --float: right;
  --line-height: 25%;
}
@media only screen and (max-width: 1000px) {
.dropDown {
  width: 8vw;
  height: 8vw;
  margin-right: 2.5vw;
}
.font {
  font-size: 6vw;
}
}
</style>
