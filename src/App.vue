<script setup>
import TopNav from './components/TopNav.vue'
import Home from './components/Home.vue'
import RightLine from './components/RightLine.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'

</script>

<template>
  
    <!-- top nav bar -->
    <top-nav :navFix="navFix"></top-nav>

    <!-- main body start -->
    <div class="  bg-slate-100 dark:bg-zinc-900 px-5 py-12 md:py-0 md:pb-32 md:px-32">
      
      <!--Right social -->
      <right-line></right-line>

      <!-- home section -->
      <home></home>
      
      <!-- about section  -->
      <div ref="aboutSection">
      <about ></about>
      </div>

      <!-- services section  -->
      <services></services>

      <!-- portfolio section  -->
      <portfolio></portfolio>

      <!-- contact section  -->
      <contact></contact>

    </div>
    <!-- main body end  -->

    <!-- copyright start  -->
    <div class="bg-primary text-slate-100 dark:bg-zinc-800 py-5 flex justify-center items-center">
      <i class="fa-solid fa-copyright text-lg md:text-2xl me-2"></i>
      <p class="text-xs md:text-lg">2023 , All rights reserved by <a target="_blank" href="https://github.com/sayrgyiwoody" class="underline font-semibold">Wai Yan Tun</a></p>
    </div>
    <!-- copyright end  -->
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
  components: { Services },
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
