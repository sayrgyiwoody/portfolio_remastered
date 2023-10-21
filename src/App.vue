<script setup>
import TopNav from './components/TopNav.vue'
import Home from './components/Home.vue'
import RightLine from './components/RightLine.vue'
import About from './components/About.vue'

</script>

<template>
  
    <!-- top nav bar -->
    <top-nav :navFix="navFix"></top-nav>

    <!-- main body start -->
    <div class="  bg-slate-100 dark:bg-zinc-900 px-10 py-12 md:py-0 md:pb-44 md:px-32">
      
      <!--Right social -->
      <right-line></right-line>

      <!-- home section -->
      <home></home>
      
      <!-- about section  -->
      <div ref="aboutSection">
      <about ></about>

      </div>

    </div>
    <!-- main body end  -->
</template>

<style>
:root {
  --color-primary: #2563EB;
}

* {
  font-family: 'Poppins', sans-serif;
}

</style>

<script>


export default {
  data() {
    return {
      navFix: false,
    }
  },
  methods: {
    checkDarkMode() {
      const localDarkMode = localStorage.getItem('darkMode');
      if(JSON.parse(localDarkMode) == true ){
        document.documentElement.classList.add('dark');
      }else if (JSON.parse(localDarkMode) == false ) {
        document.documentElement.classList.remove('dark');
      }
    },
    checkWayPoint() {
      var waypoint = new Waypoint({
        element: this.$refs.aboutSection,
        handler: (direction) => {
          if(direction === "down"){
            this.navFix = true;
          }else if(direction === "up"){
            this.navFix = false;
          }
          
        },
        offset: '35%' 
      })
    }

    
  },
  mounted () {
    this.checkDarkMode();
    this.checkWayPoint();
  },
}


</script>
