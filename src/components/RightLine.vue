<template>
    <div id="right-line" class="hidden md:block">
        <div class="top-right fixed flex flex-col justify-center items-center">
        <div class="line bg-zinc-900 dark:bg-slate-100"></div>
        <div class="flex flex-col items-center">
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100017455754116&mibextid=" class="my-2">
                <i class="fa-brands hover:text-primary dark:hover:text-primary_hover hover:scale-125 duration-150 dark:text-white fa-facebook-f"></i>
            </a>
            <a target="_blank" href="https://github.com/sayrgyiwoody" class="my-2">
                <i class="fa-brands hover:text-primary dark:hover:text-primary_hover hover:scale-125 duration-150 dark:text-white fa-github"></i>
            </a>
            <a target="_blank" href="https://t.me/waiyanwoody" class="my-2">
                <i class="fa-brands hover:text-primary dark:hover:text-primary_hover hover:scale-125 duration-150 dark:text-white fa-telegram"></i>
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