<template>
    <div id="services" class="md:px-5 md:py-20">
        <div class=" mb-12">
            <h6 v-scroll-reveal.reset="{origin : 'top' , distance : '20px'}" class="text-gray-500  text-lg md:text-xl font-medium ">My Services</h6>
            <h2 v-scroll-reveal.reset="{origin : 'bottom' , distance : '30px'}" class="text-zinc-900 dark:text-slate-100 text-5xl font-medium">What <span class="text-primary">I do</span></h2>
        </div>
        <div v-scroll-reveal.reset="{
            origin: 'bottom',
            distance: '40px',
            delay: 400,
          }"
          class="grid  md:grid-cols-3">
                <div  v-for="(service,index) in services" :key="index"
                
                class="md:me-5 mb-4 md:mb-0 hover:bg-slate-50 dark:hover:bg-zinc-700 duration-150 p-6 rounded-md shadow-sm hover:shadow-md bg-white dark:bg-zinc-800">
                <div v-scroll-reveal.reset="{
                    origin: 'bottom',
                    distance: '40px',
                    delay: 800 + index * 200 ,
                    mobile : false,
                  }">
                  <i :class="service.icon" class=" text-zinc-900 dark:text-white fa-solid  text-5xl mb-2"></i>
                  <h4 class=" mb-2 text-zinc-900 dark:text-slate-100 text-3xl font-medium">{{service.title}}</h4>
                  <p class="font-medium mb-2 text-gray-500 dark:text-muted">{{service.desc}}</p>
                  <p class="text-medium hover:text-primary dark:hover:text-primary_hover duration-150 text-zinc-900 dark:text-slate-100">Learn more</p>
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

<script>
export default {
    data() {
        return {
            services: [
                {
                    'id' : 1,
                    'icon' : 'fa-code',
                    'title' : 'Web Design',
                    'desc' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam aut sit, nihil temporibus ratione consequatur exercitationem?',
                },
                {
                    'id' : 2,
                    'icon' : 'fa-crop-simple',
                    'title' : 'Graphic Design',
                    'desc' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam aut sit, nihil temporibus ratione consequatur exercitationem?',
                },
                {
                    'id' : 3,
                    'icon' : 'fa-laptop-code',
                    'title' : 'Web Developing',
                    'desc' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam aut sit, nihil temporibus ratione consequatur exercitationem?',
                }
            ]
        }
    },
}
</script>