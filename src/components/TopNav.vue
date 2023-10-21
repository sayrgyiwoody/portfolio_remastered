<template>
 <nav class="bg-white dark:bg-zinc-800 dark:text-white flex justify-between items-center px-4 md:px-10 py-3 shadow-md">
    <a href="#">Waiyan's <span class="bg-primary text-white p-2 rounded-sm ms-2">Portfolio</span></a>
    <div :class="menuStatus ? 'left-0':'-left-full'" id="menu" class="duration-200 fixed z-20 md:static md:w-auto md:h-auto md:bg-transparent md:dark:bg-transparent w-screen h-screen top-0 flex justify-center items-center bg-slate-200 dark:bg-zinc-950">
        <ul class="flex flex-col md:flex-row space-y-6 md:space-y-0 text-center text-xl md:text-base  md:space-x-6 text-zinc-600 dark:text-slate-300">
            <li><a href="#home" @click="setActive('home')" :class="{ 'nav-active': activeItem === 'home' }" >Home</a></li>
            <li><a href="#about"  @click="setActive('about')" :class="{ 'nav-active': activeItem === 'about' }" >About</a></li>
            <li><a href="#"  @click="setActive('services')" :class="{ 'nav-active': activeItem === 'services' }" >Services</a></li>
            <li><a href="#"  @click="setActive('portfolio')" :class="{ 'nav-active': activeItem === 'portfolio' }" >Portfolio</a></li>
            <li><a href="#"  @click="setActive('contact')" :class="{ 'nav-active': activeItem === 'contact' }" >Contact</a></li>
        </ul>
        <div @click="toggleMenu" class="md:hidden btn-close-menu rounded-full border border-2 p-1 border-primary absolute top-7 right-7">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 256 256"><path fill="currentColor" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/></svg>
        </div>
    </div>
    <div class="flex space-x-6 items-center">
        <div @click="toggleDarkMode" class=" rounded-full w-12 h-12 flex items-center justify-center bg-slate-100 dark:bg-zinc-600 dark:border-none border border-3 duration-150 hover:bg-slate-200 border-slate-300">
            <svg v-if="darkMode" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.5 19.5h-5m5 0c0-.713 0-1.07.038-1.307c.123-.763.144-.812.631-1.412c.151-.186.711-.688 1.832-1.692A7.5 7.5 0 1 0 7 15.09c1.12 1.004 1.68 1.505 1.832 1.692c.487.6.508.649.63 1.412c.039.237.039.593.039 1.307m5 0c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.349.2-.816.2-1.751.2s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75"/><path stroke-linecap="round" d="M12 17v-2m1.732-1a2 2 0 0 1-3.464 0"/></g></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.484.484 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.484.484 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.484.484 0 0 1-.273-.274l-.43-1.095ZM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.484.484 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.484.484 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.484.484 0 0 1-.272-.273l-.157-.4Z"/><path fill="currentColor" d="m21.067 11.857l-.642-.388l.642.388Zm-8.924-8.924l-.388-.642l.388.642ZM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5Zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25v-1.5Zm4.925-2.781A5.746 5.746 0 0 1 15.5 14.25v1.5a7.247 7.247 0 0 0 6.21-3.505l-1.285-.776ZM9.75 8.5a5.747 5.747 0 0 1 2.781-4.925l-.776-1.284A7.246 7.246 0 0 0 8.25 8.5h1.5ZM12 2.75a.384.384 0 0 1-.268-.118a.285.285 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026v1.5Zm9.71 9.495c-.066.107-.156.109-.187.105a.285.285 0 0 1-.155-.082a.384.384 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606l1.284.776Z"/></g></svg>
        </div>
        <div @click="toggleMenu" class="md:hidden bg-slate-100 px-3 py-2 border border-2 border-slate-200 dark:bg-zinc-600 dark:border-none rounded-md hover:bg-slate-300 dark:hover:bg-zinc-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M48.07 104h159.86a16 16 0 0 0 15.72-19.38C216.22 49.5 176 24 128 24S39.78 49.5 32.35 84.62A16 16 0 0 0 48.07 104ZM128 40c39.82 0 74.21 20.61 79.93 48H48.07l-.07-.07C53.79 60.61 88.18 40 128 40Zm101.26 112.48l-41.13 15L151 152.57a8 8 0 0 0-5.94 0l-37 14.81L71 152.57a8 8 0 0 0-5.7-.09l-44 16a8 8 0 0 0 5.47 15L40 178.69V184a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-9.67l18.73-6.81a8 8 0 1 0-5.47-15ZM200 184a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24v-11.12l11.87-4.32L105 183.43a8 8 0 0 0 5.94 0l37-14.81l37 14.81a8 8 0 0 0 5.7.09l9.27-3.37ZM16 128a8 8 0 0 1 8-8h208a8 8 0 0 1 0 16H24a8 8 0 0 1-8-8Z"/></svg>
        </div>
    </div>
 </nav>
</template>

<style scoped>

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
    
    nav ul li a:hover::after {
        width: 100%;
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

<script>
export default {
  data() {
    return {
        activeItem: 'home',
        menuStatus : false,
        darkMode: localStorage.getItem('darkMode') === 'true',
    }
  },
  methods: {
    setActive(item) {
        this.activeItem = item;
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