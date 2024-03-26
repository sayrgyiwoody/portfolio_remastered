<template>
    <div id="about" class="px-5 py-10 md:py-20 items-center justify-center md:px-52 grid md:grid-cols-2">
        <div v-scroll-reveal.reset="{origin : 'left' , distance : '30px'}" class="img-container">
            <img  v-bind:src="`./images/woody.jpg`" class=" md:w-80 w-full h-80 md:h-full object-cover  rounded-md" alt="">
        </div>
        <div class="about-text mt-6 md:mt-0">
            <h4 v-scroll-reveal.reset="{origin : 'top' , distance : '30px'}" class="text-zinc-900 dark:text-slate-100 text-5xl font-medium mb-3">About <span class="text-primary">Me</span></h4>
            <p v-scroll-reveal.reset="{origin : 'bottom' , distance : '40px'}" class="text-gray-500 dark:text-muted text-sm font-medium mb-4">Hello I'm Waiyan Tun. I'm a 19 years old passionate programmer who still learning about modern programming.</p>
            <div v-scroll-reveal.reset="{origin : 'bottom' , distance : '30px' , delay : 700}" class="tabs flex space-x-6 text-zinc-900 dark:text-slate-100 text-xl font-semibold">
                <p class=" cursor-pointer" @click="setTab('skill')" :class="{'active':currentTab === 'skill'}">Skill</p>
                <p class=" cursor-pointer" @click="setTab('exp')" :class="{'active':currentTab === 'exp'}">Experience</p>
                <p class=" cursor-pointer" @click="setTab('edu')" :class="{'active':currentTab === 'edu'}">Education</p>
            </div>
            <div v-scroll-reveal.reset="{origin : 'bottom' , distance : '40px' , delay : 700}" class="tab-info py-5">
                <div v-if="currentTab === 'skill'" class="skil animate__animated animate__bounceIn text-zinc-900 dark:text-slate-300 font-semibold">
                    <p class=" mt-3">Graphic Design</p>
                    <div class="w-full mt-2 mb-5 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-primary h-2.5 rounded-full" style="width: 25%"></div>
                    </div>
                    <p class=" mt-3">Web Design</p>
                    <div class="w-full mt-2 mb-5 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-primary h-2.5 rounded-full" style="width: 50%"></div>
                    </div>
                    <p class=" mt-3">Frond-end Developing</p>
                    <div class="w-full mt-2 mb-5 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-primary h-2.5 rounded-full" style="width: 75%"></div>
                    </div>
                    <p class=" mt-3">Back-end Developing</p>
                    <div class="w-full mt-2 mb-5 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-primary h-2.5 rounded-full" style="width: 35%"></div>
                    </div>
                </div>
                <div v-if="currentTab === 'exp'" class="exp animate__animated animate__bounceIn">
                    <p class="text-xl mt-3 font-medium text-primary">2023 - current</p>
                    <p class=" text-sm font-medium text-gray-700 dark:text-slate-300">Graphic Designer at Creative Coder MM</p>
                    <p class="text-xl mt-3 font-medium text-primary">Hackathons</p>
                    <p class=" text-sm font-medium text-gray-700 dark:text-slate-300">2023 Job-Matching Hackathon 2nd Runner Up</p>
                    <p class="text-xl mt-3 font-medium text-primary">OJTs</p>
                    <p class=" text-sm font-medium text-gray-700 dark:text-slate-300">Code Lab A to Z batch 6 OJT First Prize Winner</p>
                </div>
                <div v-if="currentTab === 'edu'" class="edu animate__animated animate__bounceIn">
                    <p class=" mt-3 font-medium text-primary">2022 - current</p>
                    <p class=" text-lg font-medium text-gray-700 dark:text-slate-300">University of Computer Studies Yangon</p>
                    <p class=" mt-3 font-medium text-primary">2019 - 2020</p>
                    <p class=" text-lg font-medium text-gray-700 dark:text-slate-300">Passed matriculation exam</p>
                    <p class=" mt-3 font-medium text-primary">2016 - 2019</p>
                    <p class=" text-lg font-medium text-gray-700 dark:text-slate-300">Pinlon Rose Private High School</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style  scoped>
    .tabs p {
        position: relative;
        z-index: 0;
    }

    .tabs p::after {
        content : '';
        width: 0%;
        height: 3px;
        border-radius: 3px;
        background-color: var(--color-primary);
        position: absolute;
        left: 0;
        bottom: -6px;
        transition: .5s;
    }

    .tabs p:hover::after {
        width: 100%;
    }

    .tabs p.active::after {
        width: 100%;
    }

</style>

<script setup>
import { createScrollRevealDirective } from 'vue-scroll-reveal'; 
const vScrollReveal = createScrollRevealDirective({
    class : 'v-scroll-reveal',
    delay: 500,
    duration: 1500,
    distance : '80px',
    reset : false ,
    opacity : 0,
});
</script>

<script>

export default {
    data() {
        return {
            currentTab: 'skill',
        }
    },
    methods: {
        setTab(tabName) {
            this.currentTab = tabName;
        },
        
    },
    
    
}


</script>