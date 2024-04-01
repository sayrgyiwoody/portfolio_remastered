<script setup>
import TopNav from "./components/TopNav.vue";
import Home from "./components/Home.vue";
import RightLine from "./components/RightLine.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Portfolio from "./components/Portfolio.vue";
import Contact from "./components/Contact.vue";
</script>

<template>
  <!-- top nav bar -->
  <top-nav :navFix="navFix"></top-nav>

  <!-- main body start -->
  <div class="bg-slate-100 dark:bg-zinc-900 px-5 py-12 md:py-0 md:pb-32 md:px-32">
    <!--Right social -->
    <right-line></right-line>

    <!-- home section -->
    <div ref="homeSection">
      <home></home>
    </div>

    <!-- about section  -->
    <div ref="aboutSection">
      <about></about>
    </div>

    <!-- services section  -->
    <div ref="servicesSection">
      <services></services>
    </div>

    <!-- portfolio section  -->
    <div ref="portfolioSection">
      <portfolio></portfolio>
    </div>

    <!-- contact section  -->
    <div ref="contactSection">
      <contact></contact>
    </div>
  </div>
  <!-- main body end  -->

  <!-- copyright start  -->
  <div
    class="bg-primary text-slate-100 dark:bg-zinc-800 py-5 flex justify-center items-center"
  >
    <i class="fa-solid fa-copyright text-lg md:text-2xl me-2"></i>
    <p class="text-xs md:text-lg">
      2023 , All rights reserved by
      <a
        target="_blank"
        href="https://github.com/sayrgyiwoody"
        class="underline font-semibold"
        >Wai Yan Tun</a
      >
    </p>
  </div>
  <!-- copyright end  -->
</template>

<style>
:root {
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
}

* {
  font-family: "Poppins", sans-serif;
}
</style>

<script>
export default {
  components: { Services },
  data() {
    return {
      navFix: false,
    };
  },
  methods: {
    checkDarkMode() {
      const localDarkMode = localStorage.getItem("darkMode");
      if (JSON.parse(localDarkMode) == true) {
        document.documentElement.classList.add("dark");
      } else if (JSON.parse(localDarkMode) == false) {
        document.documentElement.classList.remove("dark");
      }
    },
    checkWayPoint(sectionRef, sectionName) {
      var offset = sectionName == 'home' ? '3%': '35%';

      var waypoint = new Waypoint({
        element: this.$refs[sectionRef],
        handler: (direction) => {
          if (direction === "down") {
            if (sectionName !== "home") {
              this.navFix = true;
            }
          } else if (direction === "up") {
            if (sectionName === "about" && sectionName !== "home") {
              this.navFix = false;
            }
          }
        },
        offset: offset,
      });
    },
  },
  mounted() {
    this.checkDarkMode();
    this.checkWayPoint("aboutSection", "about");
    // this.checkWayPoint("servicesSection", "services");
    // this.checkWayPoint("portfolioSection", "portfolio");
    // this.checkWayPoint("contactSection", "contact");
  },
};
</script>
