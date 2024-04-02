<template>
 <nav :class="navFix  ? 'fixed top-0 animate__fadeInDown':''" class=" z-20 duration-200 animate__animated  w-full bg-white dark:bg-zinc-800 dark:text-white flex justify-between items-center px-4 md:px-10 py-3 shadow-md">
    <a href="#">Waiyan's <span class="bg-primary text-white p-2 rounded-sm ms-2">Portfolio</span></a>
    <div id="menu" class="duration-200 hidden md:block md:static z-40  w-auto h-auto bg-transparent dark:bg-transparent items-center bg-slate-200 dark:bg-zinc-900">
        <ul class=" md:flex space-y-0 text-center text-base space-x-6 text-zinc-600 dark:text-slate-300">
            <li><a href="#home" @click="setActive('home')"  :class="activeItem === 'home' ? 'nav-active' : ''" >Home</a></li>
            <li><a href="#about"  @click="setActive('about')" :class="activeItem === 'about'? 'nav-active' : ''" >About</a></li>
            <li><a href="#services"  @click="setActive('services')" :class="activeItem === 'services'? 'nav-active' : '' " >Services</a></li>
            <li><a href="#portfolio"  @click="setActive('portfolio')" :class="activeItem === 'portfolio'? 'nav-active' : '' " >Portfolio</a></li>
            <li><a href="#contact"  @click="setActive('contact')" :class="activeItem === 'contact'? 'nav-active' : '' " >Contact</a></li>
        </ul>
    </div>

    <color-input></color-input>

    <div class="flex md:space-x-6 space-x-4 items-center">
        <div @click="toggleDarkMode" class="cursor-pointer rounded-full w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-zinc-600 dark:border-none border border-3 duration-150 hover:bg-slate-200 border-slate-300">
            <svg v-if="darkMode" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.5 19.5h-5m5 0c0-.713 0-1.07.038-1.307c.123-.763.144-.812.631-1.412c.151-.186.711-.688 1.832-1.692A7.5 7.5 0 1 0 7 15.09c1.12 1.004 1.68 1.505 1.832 1.692c.487.6.508.649.63 1.412c.039.237.039.593.039 1.307m5 0c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.349.2-.816.2-1.751.2s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75"/><path stroke-linecap="round" d="M12 17v-2m1.732-1a2 2 0 0 1-3.464 0"/></g></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="#393634"><path fill-rule="evenodd" d="M18 2.75a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .53 1.28l-2.72 2.72H22a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.53-1.28l2.72-2.72H18Zm-4.5 6a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .53 1.28l-1.72 1.72h1.19a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.53-1.28l1.72-1.72H13.5Z" clip-rule="evenodd"/><path d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10Z"/></g></svg>
        </div>
        <div @click="toggleMenu" class="md:hidden">
            <div :class="menuStatus ? 'show' : ''" class="menu-icon bg-gray-100  dark:bg-zinc-600   border border-gray-200  dark:border-0 rounded-md">
                <span class="bg-zinc-800 dark:bg-white "></span>
                <span class="bg-zinc-800 dark:bg-white "></span>
                <span class="bg-zinc-800 dark:bg-white "></span>
            </div>    
        </div>
    </div>
 </nav>

 <div :class="menuStatus ? ' right-0 ' : ' -right-full '" id="menu" class="fixed duration-200 w-2/5 md:hidden top-20 z-50 ">
    
    <ul class="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-l-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 shadow  rtl:space-x-reverse ">
        <li>
        <a href="#home" :class="activeItem === 'home' ? 'bg-blue-700 text-white' : ''" class="block py-2 px-3 text-gray-900 rounded dark:text-white ">Home</a>
      </li>
      <li>
        <a href="#about" :class="activeItem === 'about' ? 'bg-blue-700 text-white' : ''" class="block py-2 px-3 text-gray-900 rounded dark:text-white  ">About</a>
      </li>
      <li>
        <a href="#services" :class="activeItem === 'services' ? 'bg-blue-700 text-white' : ''" class="block py-2 px-3 text-gray-900 rounded dark:text-white  ">Services</a>
      </li>  
      <li>
        <a href="#portfolio" :class="activeItem === 'portfolio' ? 'bg-blue-700 text-white' : ''" class="block py-2 px-3 text-gray-900 rounded dark:text-white  ">Pricing</a>
      </li>
      <li>
        <a href="#contact" :class="activeItem === 'contact' ? 'bg-blue-700 text-white' : ''" class="block py-2 px-3 text-gray-900 rounded dark:text-white  ">Contact</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>

/*menu icon*/
.menu-icon {
    width: 60px;
    height: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor : pointer;
}
.menu-icon span {
    width: 40px;
    height: 3px;
    position: absolute;
    border-radius: 25px;
    transition: 0.5s;
}
.menu-icon span:nth-child(1) {
    transform: translateY(-12px);
    width: 25px;
    left: 10px;
}
.menu-icon span:nth-child(2) {
    transform: translateY(12px);
    width: 15px;
    left: 10px;
}
.menu-icon.show span:nth-child(3) {
    transform: translateX(-60px);
    opacity: 0;
}
.menu-icon.show span:nth-child(1) {
    transform: translateY(0) rotate(45deg);
    width: 40px;
    transition: 0.125s;
}
.menu-icon.show span:nth-child(2) {
    transform: translateY(0) rotate(315deg);
    width: 40px;
    transition: 0.25s;
}

    nav ul li {
        display: inline-block;
    }
    
    nav ul li a {
        position: relative;
    }
    
    nav ul li a::after {
        content: '';
        width: 0%;
        height: 3px;
        border-radius: 3px;
        background: var(--color-primary);
        position: absolute;
        left: 0;
        bottom: -6px;
        transition: 0.5s;
    }
    

    @media screen and (min-width: 768px) {
        nav ul li a:hover::after {
        width: 100%;
        }
    }
  

    nav ul li a.nav-active {
        font-weight: 600;
    }
    
    nav ul li a.nav-active::after {
        width: 100%;
    }

    .btn-close-menu {
        cursor: pointer;
        transition: .3s;
    }

    .btn-close-menu:hover {
        background: var(--color-primary);
    }

    .btn-close-menu svg {
        color : var(--color-primary);
    }

    .btn-close-menu:hover svg {
        color : #fff;
    }

    

</style>

<script setup>
import ColorInput from './ColorInput.vue'
import { createScrollRevealDirective } from 'vue-scroll-reveal'; 
const vScrollReveal = createScrollRevealDirective({
    class : 'v-scroll-reveal',
    delay: 500,
    duration: 1500,
    distance : '80px',
    reset : 'false' ,
    opacity : 0,
});
</script>

<script>



export default {
    props: ['navFix'],
  data() {
    return {
        menuStatus : false,
        darkMode: localStorage.getItem('darkMode') === 'true',
    }
  },
  computed: {
    activeItem() {
        return this.$store.state.currentSection;
    }
  },
  methods: {
    setActive(item) {
        this.$store.dispatch('setCurrentSection', item);
    },
    toggleMenu(){
        this.menuStatus = !this.menuStatus;
    },
    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', this.darkMode.toString());
    },
  },

  
}


</script>