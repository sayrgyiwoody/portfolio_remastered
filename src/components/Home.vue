<template>
    <div id="home" class="grid md:grid-cols-2 h-[90vh] px-5 md:px-32 justify-center items-center">
        <div class=" mb-10 md:mb-20">
            <div class="relative flex flex-col items-center">
                <img src="../assets/images/me.png" class=" w-96 relative bottom-[2px] left-0 z-10" alt="">
                <div class="border border-2 border-primary absolute bottom-0 bg-white dark:bg-zinc-800 w-80 h-36 rounded-md z-0"></div>
            </div>
        </div>
        <div class="md:mb-10">
            <h5 class="text-zinc-900 dark:text-slate-300 text-[20px] md:text-[28px]">Hello, <span class="text-primary">I'm</span></h5>
            <h3 class="text-zinc-900 dark:text-white text-[38px] md:text-[54px] font-semibold">Web Developer</h3>
            <h5 class="text-primary text-[28px]">Wai Yan Tun</h5>
            <p class="text-gray-500 dark:text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus rem delectus tempore nesciunt exercitationem aliquam obcaecati itaque eius voluptatem alias.</p>
            <button class="flex justify-center items-center bg-primary hover:bg-primary_hover duration-150 px-4 py-2 text-white rounded-md mt-4">
                <svg class="me-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="currentColor"><path fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586C8 20.828 8 19.886 8 18c0-1.886 0-2.828.586-3.414C9.172 14 10.114 14 12 14c1.886 0 2.828 0 3.414.586C16 15.172 16 16.114 16 18c0 1.886 0 2.828-.586 3.414C14.828 22 13.886 22 12 22Zm1.805-3.084l-1.334 1.333a.667.667 0 0 1-.942 0l-1.334-1.333a.667.667 0 1 1 .943-.943l.195.195v-1.946a.667.667 0 0 1 1.334 0v1.946l.195-.195a.667.667 0 0 1 .943.943Z" clip-rule="evenodd"/><path d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.356 4.356 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765C2 16.104 3.919 18 6.286 18H6.5Z"/></g></svg>
                Download CV
            </button>
            <div class="flex items-center space-x-2 mt-7">
                <span class="text-zinc-900 dark:text-slate-100 text-[16px] md:text-[24px] font-medium">Tech Stack | </span>
                <div class="flex space-x-2">
                    <img src="../assets/images/icons/bootstrap.png" class=" w-8" alt="">
                    <img src="../assets/images/icons/tailwind.png" class=" w-8" alt="">
                    <img src="../assets/images/icons/jquery.png" class=" w-8" alt="">
                    <img src="../assets/images/icons/vuejs.png" class=" w-8" alt="">
                    <img src="../assets/images/icons/laravel.png" class=" w-8" alt="">
                </div>
            </div> 
        </div>
    </div>
</template>
