<template>
    <section id="home" class="grid md:grid-cols-2 md:h-[90vh] px-5 md:px-32 justify-center items-center">
        <div class=" mb-10 md:mb-20">
            <div  class="relative flex flex-col items-center">
                <img v-scroll-reveal.reset="{origin : 'bottom' , distance : '60px' , reset : false}" v-bind:src="`./images/me.png`" class=" w-96 relative bottom-[2px] left-0 z-10" alt="">
                <div v-scroll-reveal.reset="{origin : 'bottom' , distance : '40px'}" class="border border-2 border-primary absolute bottom-0 bg-white dark:bg-zinc-800 w-80 h-36 rounded-md z-0"></div>
            </div>
        </div>
        <div class="md:mb-10">
            <h5 v-scroll-reveal.reset="{origin : 'top' , distance : '20px'}" class="text-zinc-900 dark:text-slate-300 text-[20px] md:text-[28px]">Hello, <span class="text-primary">I'm</span></h5>
            <h3 v-scroll-reveal.reset="{origin : 'left' , distance : '40px',delay: 500}"   class="text-zinc-900 dark:text-white text-[38px] md:text-[54px] font-semibold">Web Developer</h3>
            <h5 v-scroll-reveal.reset="{origin : 'top' , distance : '20px',delay: 600}" class="text-primary text-[28px]">Wai Yan Tun</h5>
            <p  v-scroll-reveal.reset="{origin : 'top' , distance : '30px',delay: 700}" class="text-gray-500 dark:text-muted">Welcome to my portfolio! Explore my work and skills in web development and design. Let's create something amazing together!</p>
            <div v-scroll-reveal.reset="{origin : 'top' , distance : '20px',delay: 900}">
                <a target="_blank" download="Waiyan Tun CV Form" :href="`./WaiyanTun_CV.pdf`"  class="flex justify-center items-center bg-primary hover:bg-primary_hover duration-150 px-4 py-2 text-white rounded-md mt-4 w-fit">
                    <svg class="me-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="currentColor"><path fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586C8 20.828 8 19.886 8 18c0-1.886 0-2.828.586-3.414C9.172 14 10.114 14 12 14c1.886 0 2.828 0 3.414.586C16 15.172 16 16.114 16 18c0 1.886 0 2.828-.586 3.414C14.828 22 13.886 22 12 22Zm1.805-3.084l-1.334 1.333a.667.667 0 0 1-.942 0l-1.334-1.333a.667.667 0 1 1 .943-.943l.195.195v-1.946a.667.667 0 0 1 1.334 0v1.946l.195-.195a.667.667 0 0 1 .943.943Z" clip-rule="evenodd"/><path d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.356 4.356 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765C2 16.104 3.919 18 6.286 18H6.5Z"/></g></svg>
                    Download CV
                </a>
            </div>
           
            <div v-scroll-reveal.reset="{origin : 'bottom' , distance : '30px',delay: 700}" class=" mt-4 md:mt-8">
                <p class="mb-3 text-zinc-900 dark:text-slate-100 text-[20px] font-medium">Tech Stack</p>
                <div class="">
                    <img src="https://skillicons.dev/icons?i=figma,bootstrap,tailwindcss,react,vuejs,laravel,mysql&perline=10" />      
                </div>
            </div> 
        </div>
    </section>
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