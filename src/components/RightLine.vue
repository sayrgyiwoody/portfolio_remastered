<template>
    <div id="right-line" class="hidden md:block">
        <div class="top-right fixed flex flex-col justify-center items-center">
        <div class="line bg-zinc-900 dark:bg-slate-100"></div>
        <div class="flex flex-col items-center">
            <a href="#" class="my-2">
                <i class="fa-brands dark:text-white fa-facebook-f"></i>
            </a>
            <a href="#" class="my-2">
                <i class="fa-brands dark:text-white fa-github"></i>
            </a>
            <a href="#" class="my-2">
                <i class="fa-brands dark:text-white fa-behance"></i>
            </a>
        </div>
        <div class="line bg-zinc-900 dark:bg-slate-100"></div>
      </div>
      </div>
</template>

<style  scoped>
  .line {
    width: 2px;
    height: 18rem;
  }
  
  .top-right {
    right: 2rem;
    top: 7rem;
  }
  
  #right-line i {
    font-size: 20px;
  }
</style>