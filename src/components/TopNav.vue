<template>
  <nav
    :class="navFix ? 'fixed top-0 animate__fadeInDown' : ''"
    class="z-20 duration-200 animate__animated w-full bg-white dark:bg-zinc-800 dark:text-white flex justify-between items-center px-4 md:px-10 py-3 shadow-md"
  >
    <a href="#"
      >Waiyan's
      <svg
        class="inline-block text-primary w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M14.18 4.276a.75.75 0 0 1 .531.918l-3.973 14.83a.75.75 0 0 1-1.45-.389l3.974-14.83a.75.75 0 0 1 .919-.53m2.262 3.053a.75.75 0 0 1 1.059-.056l1.737 1.564c.737.662 1.347 1.212 1.767 1.71c.44.525.754 1.088.754 1.784c0 .695-.313 1.258-.754 1.782c-.42.499-1.03 1.049-1.767 1.711l-1.737 1.564a.75.75 0 0 1-1.004-1.115l1.697-1.527c.788-.709 1.319-1.19 1.663-1.598c.33-.393.402-.622.402-.818c0-.195-.072-.424-.402-.817c-.344-.409-.875-.89-1.663-1.598l-1.697-1.527a.75.75 0 0 1-.056-1.06m-8.94 1.06a.75.75 0 1 0-1.004-1.115L4.761 8.836c-.737.662-1.347 1.212-1.767 1.71c-.44.525-.754 1.088-.754 1.784c0 .695.313 1.258.754 1.782c.42.499 1.03 1.049 1.767 1.711l1.737 1.564a.75.75 0 0 0 1.004-1.115l-1.697-1.527c-.788-.709-1.319-1.19-1.663-1.598c-.33-.393-.402-.622-.402-.818c0-.195.072-.424.402-.817c.344-.409.875-.89 1.663-1.598z"
        />
      </svg>
    </a>
    <div
      id="menu"
      class="duration-200 hidden md:block md:static z-40 w-auto h-auto bg-transparent dark:bg-transparent items-center"
    >
      <ul
        class="md:flex space-y-0 text-center text-base space-x-6 text-zinc-600 dark:text-slate-300"
      >
        <li>
          <a
            href="#home"
            @click="setActive('home')"
            :class="activeItem === 'home' ? 'nav-active' : ''"
            >Home</a
          >
        </li>
        <li>
          <a
            href="#about"
            @click="setActive('about')"
            :class="activeItem === 'about' ? 'nav-active' : ''"
            >About</a
          >
        </li>
        <li>
          <a
            href="#services"
            @click="setActive('services')"
            :class="activeItem === 'services' ? 'nav-active' : ''"
            >Services</a
          >
        </li>
        <li>
          <a
            href="#portfolio"
            @click="setActive('portfolio')"
            :class="activeItem === 'portfolio' ? 'nav-active' : ''"
            >Portfolio</a
          >
        </li>
        <li>
          <a
            href="#contact"
            @click="setActive('contact')"
            :class="activeItem === 'contact' ? 'nav-active' : ''"
            >Contact</a
          >
        </li>
      </ul>
    </div>

    <color-input></color-input>

    <button
      @click="toggleDarkMode"
      class="theme-toggle cursor-pointer rounded-full w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-zinc-600 dark:border-none border border-3 duration-150 hover:bg-slate-200 border-slate-300"
      :class="darkMode ? 'theme-toggle--toggled' : ''"
      type="button"
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width="1em"
        height="1em"
        fill="currentColor"
        class="theme-toggle__expand w-6 h-6"
        viewBox="0 0 32 32"
      >
        <clipPath id="theme-toggle__expand__cutout">
          <path d="M0-11h25a1 1 0 0017 13v30H0Z" />
        </clipPath>
        <g clip-path="url(#theme-toggle__expand__cutout)">
          <circle cx="16" cy="16" r="8.4" />
          <path
            d="M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z"
          />
        </g>
      </svg>
    </button>

    <div @click="toggleMenu" class="md:hidden">
      <div
        :class="menuStatus ? 'show' : ''"
        class="menu-icon bg-gray-100 dark:bg-zinc-600 border border-gray-200 dark:border-0 rounded-md"
      >
        <span class="bg-zinc-800 dark:bg-white"></span>
        <span class="bg-zinc-800 dark:bg-white"></span>
        <span class="bg-zinc-800 dark:bg-white"></span>
      </div>
    </div>
  </nav>

  <div
    :class="menuStatus ? ' right-0 ' : ' -right-full '"
    id="menu"
    class="fixed duration-200 w-2/5 md:hidden top-20 z-50"
  >
    <ul
      class="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-l-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 shadow rtl:space-x-reverse"
    >
      <li>
        <a
          href="#home"
          :class="activeItem === 'home' ? 'bg-primary text-white' : ''"
          class="block py-2 px-3 text-gray-900 rounded dark:text-white"
          >Home</a
        >
      </li>
      <li>
        <a
          href="#about"
          :class="activeItem === 'about' ? 'bg-primary text-white' : ''"
          class="block py-2 px-3 text-gray-900 rounded dark:text-white"
          >About</a
        >
      </li>
      <li>
        <a
          href="#services"
          :class="activeItem === 'services' ? 'bg-primary text-white' : ''"
          class="block py-2 px-3 text-gray-900 rounded dark:text-white"
          >Services</a
        >
      </li>
      <li>
        <a
          href="#portfolio"
          :class="activeItem === 'portfolio' ? 'bg-primary text-white' : ''"
          class="block py-2 px-3 text-gray-900 rounded dark:text-white"
          >Portfolio</a
        >
      </li>
      <li>
        <a
          href="#contact"
          :class="activeItem === 'contact' ? 'bg-primary text-white' : ''"
          class="block py-2 px-3 text-gray-900 rounded dark:text-white"
          >Contact</a
        >
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
  cursor: pointer;
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
  content: "";
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
  transition: 0.3s;
}

.btn-close-menu:hover {
  background: var(--color-primary);
}

.btn-close-menu svg {
  color: var(--color-primary);
}

.btn-close-menu:hover svg {
  color: #fff;
}
</style>

<script setup>
import ColorInput from "./ColorInput.vue";
import { createScrollRevealDirective } from "vue-scroll-reveal";
const vScrollReveal = createScrollRevealDirective({
  class: "v-scroll-reveal",
  delay: 500,
  duration: 1500,
  distance: "80px",
  reset: "false",
  opacity: 0,
});
</script>

<script>
export default {
  props: ["navFix"],
  data() {
    return {
      menuStatus: false,
      darkMode: localStorage.getItem("darkMode") === "true",
    };
  },
  computed: {
    activeItem() {
      return this.$store.state.currentSection;
    },
  },
  methods: {
    setActive(item) {
      this.$store.dispatch("setCurrentSection", item);
    },
    toggleMenu() {
      this.menuStatus = !this.menuStatus;
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("darkMode", this.darkMode.toString());
    },
  },
};
</script>
