<template>
    <div id="portfolio" class="py-10 md:pb-32">
        <div class=" mb-8">
            <h6 v-scroll-reveal.reset="{origin : 'top' , distance : '20px'}" class="text-gray-500 text-md md:text-xl font-medium ">Portfolio</h6>
            <h2 v-scroll-reveal.reset="{origin : 'bottom' , distance : '30px'}" class="text-zinc-900 dark:text-slate-100 text-xl md:text-4xl font-medium">Some of My <span class="text-primary">Recent Works</span></h2>
        </div>   
            
            <div v-scroll-reveal.reset="{origin : 'bottom' , distance : '30px' , delay : 700}" class="flex space-x-4 md:space-x-6 my-6 text-sm md:text-xl text-zinc-900 dark:text-slate-100">
                <p :class="{'active':selectedType === 'all'}" @click="selectType('all')">All</p>
                <p :class="{'active':selectedType === 'graphic'}" @click="selectType('graphic')">Graphic</p>
                <p :class="{'active':selectedType === 'front-end'}" @click="selectType('front-end')">Front-end</p>
                <p :class="{'active':selectedType === 'full-stack'}" @click="selectType('full-stack')">Full-stack</p>
            </div>
            <div  v-scroll-reveal.reset="{
                origin: 'bottom',
                distance: '40px',
                delay: 400,
              }" class="grid md:grid-cols-3">
                <div v-for="(p,index) in filterProjects" :key="index" class=" rounded-md shadow-sm hover:shadow-md  md:me-5 mb-4 md:mb-3 md:mb-5 hover:bg-slate-50 dark:hover:bg-zinc-700 duration-150 bg-white dark:bg-zinc-800 p-4">
                    
                    <div class="img-container relative mb-2 ">
                        <img :src="p.image_url" class="rounded-sm w-full object-cover h-36" alt="project_image">
                    </div>
                    <h3 class="text-primary font-medium dark:text-white mb-1 text-xl md:text-2xl ">{{p.title}}</h3>
                    <p class="text-gray-500 dark:text-muted text-[12px] md:text-xs mb-1">{{p.desc}}</p>
                    <div class="text-zinc-900 dark:text-slate-300 font-medium text-xs md:text-base mt-2">
                        <a target="_blank" :href="p.source" class=" hover:text-primary duration-150 me-2"><i class="fa-brands fa-github me-2"></i>Source</a> 
                    | <a target="_blank" :href="p.demo" class=" hover:text-primary duration-150 ms-2"><i class="fa-solid fa-laptop me-2"></i>Demo</a>
                    </div>

                </div>
            </div>
        
        
    </div>
    
</template>

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

<style scoped>
    p.active {
        background-color: var(--color-primary);
        padding: 0px .8rem;
        border-radius: 5px;
        color: #fff;
    }
</style>

<script>
export default {
    data() {
        return {
            selectedType: 'all',
            projects : [
                {
                    'id' : 1,
                    'title':'Graphic',
                    'desc' : 'Lorem ipsum dolor sit amet consectetur. Justo montes pretium massa duis.',
                    'image_url' : './images/SPACE_snap.bmp',
                    'type' : 'graphic',
                    'source' : '',
                    'demo' : '',
                },

                {
                    'id' : 2,
                    'title':'front end',
                    'desc' : 'Lorem ipsum dolor sit amet consectetur. Justo montes pretium massa duis.',
                    'image_url' : './images/SPACE_snap.bmp',
                    'type' : 'front-end',
                    'source' : '',
                    'demo' : '',
                },
                {
                    'id' : 3,
                    'title':'Front-end',
                    'desc' : 'Lorem ipsum dolor sit amet consectetur. Justo montes pretium massa duis.',
                    'image_url' : './images/SPACE_snap.bmp',
                    'type' : 'front-end',
                    'source' : '',
                    'demo' : '',
                },
                {
                    'id' : 4,
                    'title':'Full',
                    'desc' : 'Lorem ipsum dolor sit amet consectetur. Justo montes pretium massa duis.',
                    'image_url' : './images/SPACE_snap.bmp',
                    'type' : 'full-stack',
                    'source' : '',
                    'demo' : '',
                },
                {
                    'id' : 5,
                    'title':'Full-stack',
                    'desc' : 'Lorem ipsum dolor sit amet consectetur. Justo montes pretium massa duis.',
                    'image_url' : './images/SPACE_snap.bmp',
                    'type' : 'full-stack',
                    'source' : '',
                    'demo' : '',
                },
                {
                    'id' : 6,
                    'title':'Full stack',
                    'desc' : 'Lorem ipsum dolor sit amet consectetur. Justo montes pretium massa duis.',
                    'image_url' : './images/SPACE_snap.bmp',
                    'type' : 'full-stack',
                    'source' : '',
                    'demo' : '',
                }

            ]
        }
    },
    computed: {
        filterProjects(){
            if(this.selectedType === 'all') {
                return this.projects;
            }else {
                return this.projects.filter(p => p.type === this.selectedType);
            }
        }
    },
    methods: {
        selectType(type) {
            this.selectedType = type;
        }
    },
}
</script>