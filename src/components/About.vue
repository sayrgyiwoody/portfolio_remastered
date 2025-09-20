<template>
  <section
    id="about"
    v-scroll-reveal.reset="{
      origin: 'left',
      delay: 500,
      duration: 1500,
      distance: '40px',
      reset: false,
      opacity: 0,
    }"
    class="mt-8 md:mt-0 md:py-20 md:space-x-8 items-start justify-center md:px-52 grid md:grid-cols-2"
  >
    <!-- Left Image Slideshow -->
    <div
      class="img-container relative h-80 md:h-[28rem] overflow-hidden rounded-md"
      @mouseenter="pauseSlideshow"
      @mouseleave="resumeSlideshow"
    >
      <!-- Current Slide -->
      <img
        :src="currentImages[currentImageIndex]"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        :key="currentImages[currentImageIndex]"
        alt="slideshow"
      />

      <!-- Navigation Arrows -->
      <button
        v-if="currentImages.length > 1"
        class="absolute top-1/2 -translate-y-1/2 left-3 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
        @click="prevImage"
      >
        ‹
      </button>
      <button
        v-if="currentImages.length > 1"
        class="absolute top-1/2 -translate-y-1/2 right-3 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
        @click="nextImage"
      >
        ›
      </button>

      <!-- Dots -->
      <div
        v-if="currentImages.length > 1"
        class="absolute bottom-3 w-full flex justify-center space-x-2"
      >
        <span
          v-for="(img, index) in currentImages"
          :key="index"
          class="w-3 h-3 rounded-full cursor-pointer"
          :class="
            index === currentImageIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
          "
          @click="goToImage(index)"
        ></span>
      </div>
    </div>

    <!-- Right About Info -->
    <div class="about-text mt-6 md:mt-0">
      <h4 class="text-zinc-900 dark:text-slate-100 text-5xl font-medium mb-3">
        About <span class="text-primary">Me</span>
      </h4>
      <p class="text-gray-500 dark:text-muted text-sm font-medium mb-4">
        Hello I'm Waiyan Tun. I'm a 21 years old Software Engineer specialized in AI and
        Web Development.
      </p>

      <!-- Tabs -->
      <div
        class="tabs flex space-x-6 text-zinc-900 dark:text-slate-100 text-xl font-semibold"
      >
        <p
          class="cursor-pointer"
          @click="setTab('skill')"
          :class="{ active: currentTab === 'skill' }"
        >
          Skill
        </p>
        <p
          class="cursor-pointer"
          @click="setTab('exp')"
          :class="{ active: currentTab === 'exp' }"
        >
          Experience
        </p>
        <p
          class="cursor-pointer"
          @click="setTab('edu')"
          :class="{ active: currentTab === 'edu' }"
        >
          Education
        </p>
      </div>

      <!-- Tab Content -->
      <div class="tab-info py-5">
        <!-- Skills -->
        <div
          v-if="currentTab === 'skill'"
          class="skil text-zinc-900 dark:text-slate-300 font-semibold"
        >
          <p class="mt-3">Graphic Design</p>
          <div class="w-full mt-2 mb-5 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-primary h-2.5 rounded-full" style="width: 25%"></div>
          </div>
          <p class="mt-3">Web Design</p>
          <div class="w-full mt-2 mb-5 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-primary h-2.5 rounded-full" style="width: 50%"></div>
          </div>
          <p class="mt-3">Front-end Developing</p>
          <div class="w-full mt-2 mb-5 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-primary h-2.5 rounded-full" style="width: 75%"></div>
          </div>
          <p class="mt-3">Back-end Developing</p>
          <div class="w-full mt-2 mb-5 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-primary h-2.5 rounded-full" style="width: 35%"></div>
          </div>
        </div>

        <!-- Experience -->
        <div v-if="currentTab === 'exp'" class="exp animate__animated animate__bounceIn">
          <p class="text-xl mt-3 font-medium text-primary">2024 - 2025</p>
          <p class="text-sm font-medium text-gray-700 dark:text-slate-300">
            Web Developer at Creative Coder MM
          </p>

          <p class="text-xl mt-3 font-medium text-primary">Hackathons</p>
          <ul class="list-disc list-inside pl-5 text-gray-700 dark:text-muted">
            <li
              v-for="(hack, index) in hackathons"
              :key="index"
              class="text-sm font-medium cursor-pointer hover:text-primary"
              @click="changeSlideshow(hack.images)"
            >
              {{ hack.title }}
            </li>
          </ul>

          <p class="text-xl mt-3 font-medium text-primary">OJTs</p>
          <p
            class="text-sm font-medium text-gray-700 dark:text-slate-300 cursor-pointer hover:text-primary"
            @click="changeSlideshow(ojtImages)"
          >
            Code Lab A to Z batch 6 OJT First Prize Winner
          </p>

          <p class="text-xl mt-3 font-medium text-primary">Fieldwork</p>
          <p
            class="text-sm font-medium text-gray-700 dark:text-slate-300 cursor-pointer hover:text-primary"
            @click="changeSlideshow(fieldworkImages)"
          >
            EBA Minamata Fieldwork 2025 Participant
          </p>
        </div>

        <!-- Education -->
        <div v-if="currentTab === 'edu'" class="edu animate__animated animate__bounceIn">
          <p class="mt-3 font-medium text-primary">2022 - current</p>
          <p class="text-lg font-medium text-gray-700 dark:text-slate-300">
            University of Computer Studies Yangon (Software Engineering)
          </p>
          <p class="mt-3 font-medium text-primary">2019 - 2020</p>
          <p class="text-lg font-medium text-gray-700 dark:text-slate-300">
            Passed matriculation exam
          </p>
          <p class="mt-3 font-medium text-primary">2016 - 2019</p>
          <p class="text-lg font-medium text-gray-700 dark:text-slate-300">
            Pinlon Rose Private High School
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { createScrollRevealDirective } from "vue-scroll-reveal";
import { ref, onMounted, onUnmounted } from "vue";

const vScrollReveal = createScrollRevealDirective({
  class: "v-scroll-reveal",
  delay: 500,
  duration: 1500,
  distance: "80px",
  reset: false,
  opacity: 0,
});

// === Slideshow State ===
const initialImages = [
  "./images/woody1.jpg",
  "./images/woody2.jpg",
  "./images/woody3.jpg",
];

const hackathons = [
  {
    title: "2025 APTYPS Myanmar Cybersecurity and Privacy Chatbot Competition Champion",
    images: [
      "./images/hack1.jpg",
      "./images/hack2.jpg",
      "./images/hack3.jpg",
      "./images/hack4.jpg",
    ],
  },
  {
    title: "2025 UCSY Product Show 1st Prize",
    images: ["./images/hack5.jpg", "./images/hack6.jpg"],
  },
  {
    title: "2025 Technortal 1 Project 1 Week 1st Prize",
    images: ["./images/hack7.jpg"],
  },
  {
    title: "2024 UCSY Product Show 1st Prize",
    images: ["./images/hack8.jpg", "./images/hack9.jpg"],
  },
  {
    title: "2023 Job-Matching Hackathon 2nd Runner Up",
    images: ["./images/hack10.jpg", "./images/hack11.jpg"],
  },
];

const ojtImages = ["./images/ojt1.jpg"];
const fieldworkImages = [
  "./images/field1.jpg",
  "./images/field2.jpg",
  "./images/field3.jpg",
];

const currentImages = ref(initialImages);
const currentImageIndex = ref(0);
let slideshowInterval = null;

// Auto slide
onMounted(() => {
  startSlideshow();
});
onUnmounted(() => {
  clearInterval(slideshowInterval);
});

// Methods
function startSlideshow() {
  slideshowInterval = setInterval(() => {
    nextImage();
  }, 5000);
}
function pauseSlideshow() {
  clearInterval(slideshowInterval);
}
function resumeSlideshow() {
  startSlideshow();
}
function changeSlideshow(images) {
  currentImages.value = images;
  currentImageIndex.value = 0;
}
function nextImage() {
  currentImageIndex.value = (currentImageIndex.value + 1) % currentImages.value.length;
}
function prevImage() {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + currentImages.value.length) %
    currentImages.value.length;
}
function goToImage(index) {
  currentImageIndex.value = index;
}
</script>

<script>
export default {
  data() {
    return {
      currentTab: "skill",
    };
  },
  methods: {
    setTab(tabName) {
      this.currentTab = tabName;
    },
  },
};
</script>

<style scoped>
.tabs p {
  position: relative;
  z-index: 0;
}
.tabs p::after {
  content: "";
  width: 0%;
  height: 3px;
  border-radius: 3px;
  background-color: var(--color-primary);
  position: absolute;
  left: 0;
  bottom: -6px;
  transition: 0.5s;
}
.tabs p:hover::after {
  width: 100%;
}
.tabs p.active::after {
  width: 100%;
}
</style>
