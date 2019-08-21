<template>
  <div v-on:mousewheel="changeView()" id="boss" v-on:touchstart="saveStart()" v-on:touchend="changeViewByTouch()">

    <router-link v-for="index in 5" :to="zrobLink()">
      <div class="podstrona" :id="'p'+index">
      </div>
    </router-link>

    <div class="circlesContainer">
      <button v-for="index in 5" v-on:click="changePage(index)" :id="'button'+index">
      </button>
    </div>



  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      startURL: '../assets/p',
      page: 1,
      lastPage: 1,
      pages: 5,
      scrolled: 0,
      link: '/',
      startTouch: 0
    }
  },
  methods: {
    makeURL: function(num) {
      return require(this.startURL + num + '.jpg')
    },
    changePage: function(num) {
      this.lastPage = this.page;
      this.page = num;
      document.getElementById('button'+this.lastPage).style.background = "Black";
      document.getElementById('p'+num).scrollIntoView({behavior: "smooth"});
      document.getElementById('button'+num).style.background = "Red";
      setTimeout(() => this.scrolled = 0, 500);
      sessionStorage.setItem('key', num);
    },
    changeView: function(e) {
      var delta = null, direction = false;

      if(!e) // if the event is not provided, we get it from the window object
          e = window.event;
      if(e.wheelDelta) // will work in most cases
          delta = e.wheelDelta/60;
      else if (e.detail) // fallback for Firefox
          delta = -e.detail/2;
      if (delta!==null)
          direction = delta > 0 ? 'up' : 'down';

      if(!this.scrolled) {
        this.scrolled = 1;
        var nextPage = this.page;
        setTimeout(() => this.scrolled = 0, 500);
        console.log(direction);
        if(direction=='down'&&this.page<this.pages)
          this.changePage(++nextPage)
        else if(direction=='up'&&this.page>1)
          this.changePage(--nextPage)
        else
          console.log("scroll can't be recognized");
      }
    },
    saveStart: function(e) {
      if(!e) // if the event is not provided, we get it from the window object
          e = window.event;
      console.log(e.changedTouches[0].clientY);
      this.startTouch = e.changedTouches[0].clientY

    },
    changeViewByTouch: function(e) {
      var delta;
      var direction;
      if(!e) // if the event is not provided, we get it from the window object
          e = window.event;
      delta = this.startTouch - e.changedTouches[0].clientY;

      if (delta!==null&&(delta>5||delta<-5))
          direction = delta < 0 ? 'up' : 'down';

      if(!this.scrolled) {
        this.scrolled = 1;
        var nextPage = this.page;
        setTimeout(() => this.scrolled = 0, 500);
        console.log(direction);
        if(direction=='down'&&this.page<this.pages)
          this.changePage(++nextPage)
        else if(direction=='up'&&this.page>1)
          this.changePage(--nextPage)
        else
          console.log("scroll can't be recognized");
      }
    },
    zrobLink: function() {
      if(this.page==1)
        return 'pierwszy'
      else if(this.page==2)
        return 'drugi'
      else if(this.page==3)
        return 'trzeci'
      else if(this.page==4)
        return 'czwarty'
      else
        return 'kontakt';
    }
  },
  beforeMount() {
    if(window.addEventListener)
    {
        document.addEventListener('DOMMouseScroll',function(e)
        {
            handleMouseWheelDirection(detectMouseWheelDirection(e));
        });
        document.addEventListener('touchmove',function(e)
        {
            console.log("");
        });
    }
  },
  mounted() {
    if (sessionStorage.length != 0)
    {
      this.page = sessionStorage.getItem('key');
    }
    this.changePage(this.page);
  },
  beforeDestroy() {
    document.removeEventListener('DOMMouseScroll',function(e) {
        handleMouseWheelDirection(detectMouseWheelDirection(e));
    });
    document.removeEventListener('touchmove',function(e)
    {
        console.log("");
    });
  }
}

</script>

<style scoped>
button {
  position: relative;
  background-color: black;
  color: white;
  outline: none;
  width: 4vh;
  height: 4vh;
  display: block;
  cursor: pointer;
  border-radius: 50%;
  border-width: 0.5vh;
  border-color: light gray;
}

button:hover {
  transform: scale(1.4,1.4)
}

.circlesContainer {
  position: fixed;
  right: 0.5vw;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  align: middle;
  padding: 1vw;
  display: block;
}

.podstrona {
  height: 100vh;
  background-color: white;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#p1 {
  background: url('../assets/p1.jpg');
  background-size: cover;
  background-position: center center;
}

#p2 {
  background: url('../assets/p2.jpg');
  background-size: cover;
  background-position: center center;
}

#p3 {
  background: url('../assets/p3.jpg');
  background-size: cover;
  background-position: center center;
}

#p4 {
  background: url('../assets/p4.jpg');
  background-size: cover;
  background-position: center center;
}

#p5 {
  background: url('../assets/p5.jpg');
  background-size: cover;
  background-position: center center;
}
</style>
