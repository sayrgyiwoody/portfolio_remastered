<template>
    <section id="contact" v-scroll-reveal.reset="{origin : 'top' , distance : '20px'}" class="bg-white dark:bg-zinc-800 rounded-md  py-5 md:py-10 md:px-36">
        <div class="flex items-center justify-center flex-col mb-8">
            <h6 v-scroll-reveal.reset="{origin : 'top' , distance : '30px'}"  class="text-gray-500 text-md md:text-lg font-medium ">Contact Me</h6>
            <h2 v-scroll-reveal.reset="{origin : 'bottom' , distance : '30px'}"  class="text-zinc-900 dark:text-slate-100 text-xl md:text-4xl font-medium">Get In <span class="text-primary">Touch</span></h2>
        </div>   
        <div class="grid px-6 md:px-0 items-center md:grid-cols-2">
            <div v-scroll-reveal.reset="{origin : 'left' , distance : '30px' , delay : 600}"  class=" px-2 md:px-0">
                <div class="flex mb-6 md:mb-14">
                    <div class="bg-slate-100 dark:bg-zinc-700  rounded-md border border-slate-200 dark:border-0 px-4 py-2 flex justify-center items-center">
                        <i class="fa-solid text-zinc-900 dark:text-white fa-phone text-sm md:text-xl"></i>
                    </div>
                    <div class="ms-4">
                        <p class=" text-zinc-900 dark:text-slate-100 font-medium text-sm md:text-xl">Phone</p>
                        <p class="text-gray-500 text-sm md:text-base dark:text-muted">09950214146</p>
                    </div>
                </div>
                <div class="flex mb-6 md:mb-14">
                    <div class="bg-slate-100 dark:bg-zinc-700  rounded-md border border-slate-200 dark:border-0 px-4 py-2 flex justify-center items-center">
                        <i class="fa-solid text-zinc-900 dark:text-white fa-envelope text-sm md:text-xl"></i>
                    </div>
                    <div class="ms-4">
                        <p class=" text-zinc-900 dark:text-slate-100 font-medium text-sm md:text-xl">Email</p>
                        <p class="text-gray-500 text-sm md:text-base dark:text-muted">wytun8904@gmail.com</p>
                    </div>
                </div>
                <div class="flex mb-10 md:mb-0">
                    <div class="bg-slate-100 dark:bg-zinc-700  rounded-md border border-slate-200 dark:border-0 px-4 py-2 flex justify-center items-center">
                        <i class="fa-solid text-zinc-900 dark:text-white fa-location-dot text-sm md:text-xl"></i>
                    </div>
                    <div class="ms-4">
                        <p class=" text-zinc-900 dark:text-slate-100 font-medium text-sm md:text-xl">Address</p>
                        <p class="text-gray-500 text-sm md:text-base dark:text-muted">Yangon</p>
                    </div>
                </div>
            </div>
            <div class="">
                <h4 v-scroll-reveal.reset="{origin : 'bottom' , distance : '30px' , delay : 700}"  class="flex items-center text-zinc-900 dark:text-slate-100"><svg class="me-3 hover:text-primary duration-150" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="m13.087 21.388l.645.382l-.645-.382Zm.542-.916l-.646-.382l.646.382Zm-3.258 0l-.645.382l.645-.382Zm.542.916l.646-.382l-.646.382Zm-8.532-5.475l.693-.287l-.693.287Zm5.409 3.078l-.013.75l.013-.75Zm-2.703-.372l-.287.693l.287-.693Zm16.532-2.706l.693.287l-.693-.287Zm-5.409 3.078l-.012-.75l.012.75Zm2.703-.372l.287.693l-.287-.693Zm.7-15.882l-.392.64l.392-.64Zm1.65 1.65l.64-.391l-.64.392ZM4.388 2.738l-.392-.64l.392.64Zm-1.651 1.65l-.64-.391l.64.392ZM9.403 19.21l.377-.649l-.377.649Zm4.33 2.56l.541-.916l-1.29-.764l-.543.916l1.291.764Zm-4.007-.916l.542.916l1.29-.764l-.541-.916l-1.291.764Zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0l-1.29-.764ZM10.5 2.75h3v-1.5h-3v1.5Zm10.75 7.75v1h1.5v-1h-1.5Zm-18.5 1v-1h-1.5v1h1.5Zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685h-1.5Zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43l.026-1.5ZM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3l-1.386.574Zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787h-1.5Zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316l.025 1.5Zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112l-1.386-.574ZM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095v1.5Zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761h1.5Zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899l-.783 1.28ZM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089v-1.5ZM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5h1.5Zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403l-.783-1.279Zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.229 2.229 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764l1.29-.764Zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.244 2.244 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045l-.025 1.5Zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884l1.291.764Zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037l-.026-1.5Z"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 9h8m-8 3.5h5.5" opacity=".5"/></g></svg>Send Messages</h4>
                <form @submit.prevent="sendEmail" class="mt-6">
                    <div class="grid md:grid-cols-2 md:gap-6">
                    <div v-scroll-reveal.reset="{origin : 'bottom' , distance : '30px' , delay : 800}" class="relative z-0 w-full mb-6 group">
                            <input v-model="name" type="text" class=" dark:text-white px-2 relative block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-primary_hover -z-0 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                            <label class="peer-focus:font-medium absolute text-sm bg-white dark:bg-zinc-800 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 peer-focus:z-10 origin-[0]  peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-primary peer-focus:dark:text-primary_hover peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Your Name</label>
                    </div>
                    <div v-scroll-reveal.reset="{origin : 'bottom' , distance : '30px' , delay : 850}" class="relative z-0 w-full mb-6 group">
                            <input v-model="email" type="text" class=" dark:text-white px-2 relative block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-primary_hover -z-0 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                            <label class="peer-focus:font-medium absolute text-sm bg-white dark:bg-zinc-800 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 peer-focus:z-10  origin-[0] peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-primary peer-focus:dark:text-primary_hover peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Your Email</label>
                    </div>
                    </div>
                    <div v-scroll-reveal.reset="{origin : 'bottom' , distance : '30px' , delay : 900}" class="relative z-0 w-full mb-6 group">
                        <input v-model="subject" type="text" class=" dark:text-white px-2 relative block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-primary_hover -z-0 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                        <label class="peer-focus:font-medium absolute text-sm bg-white dark:bg-zinc-800 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 peer-focus:z-10  origin-[0] peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-primary peer-focus:dark:text-primary_hover peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Subject</label>
                    </div>
                    <div v-scroll-reveal.reset="{origin : 'bottom' , distance : '30px' , delay : 950}" class="relative z-0 w-full mb-6 group">
                        <textarea v-model="message" cols="30" rows="4" class="dark:text-white px-3 relative block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none border-[1.5px] border-slate-300 dark:border-zinc-700 rounded-md dark:focus:border-primary_hover -z-0 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required></textarea>
                        <label class="peer-focus:font-medium absolute text-sm bg-white dark:bg-zinc-800 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 peer-focus:z-10  origin-[0] peer-focus:bg-white dark:peer-focus:bg-zinc-800 px-3 peer-focus:text-primary peer-focus:dark:text-primary_hover peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Text anything you want to say</label>
                    </div>  
                    <div v-if="sendingStatus" class=" w-fit cursor-pointer text-white bg-primary hover:bg-primary_hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2.5 text-center dark:bg-primary dark:hover:bg-primary_hover dark:focus:ring-blue-800">
                        <svg aria-hidden="true" class="w-6 h-6 me-2 inline-block text-gray-200 animate-spin  fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        Sending...</div>
                    <button v-if="!sendingStatus" v-scroll-reveal.reset="{origin : 'top' , distance : '20px' , delay : 1000}" type="submit" class=" cursor-pointer text-white bg-primary hover:bg-primary_hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm  px-6 py-2.5 text-center dark:bg-primary dark:hover:bg-primary_hover dark:focus:ring-blue-800"><i class="fa-solid duration-150 fa-paper-plane me-2"></i>Send</button>
                    
                </form>
  
            </div>
        </div>
    </section>
</template>

<script setup>
import emailjs from 'emailjs-com';

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

<style  scoped>
    button:hover i {
        transform: scale(1.15) ;
    }

    input:valid ~ label , textarea:valid ~ label {
        z-index: 10;
    }
</style>

<script>
export default {
    data() {
        return {
            name : '',
            email : '',
            subject : '',
            message : '',
            sendingStatus : false,
        }
    },
    methods: {
        sendEmail() {
            this.sendingStatus = true;
            const templateParams = {
                from_name: this.name,
                from_email: this.email,
                subject : this.subject,
                message: this.message,
            };

            

            emailjs.send('service_s76aagk', 'template_yt8s2oe', templateParams, 'p4u1TitNSl2DxBxUQ')
                .then(response => {
                    this.sendingStatus = false;
                    this.showAlert('contact message sent successfully.','success');
                    this.clearForm();
                })
                .catch(error => {
                    this.sendingStatus = false;
                    this.showAlert('Message not sent.','error');
                    console.log(error);
                });
                
        },
        clearForm(){
            this.name = '';
            this.email = '';
            this.subject = '';
            this.message = '';
        },
        showAlert(message,icon){
            if(localStorage.getItem('darkMode') == 'true') {
                var textColor = '#ffffff';
                var bgColor = '#3f3f46';
            }else {
                var textColor = '#18181b';
                var bgColor = '#ffffff';
            }
            Swal.fire(
                        {
                            html: `${message}`,
                            icon: icon,
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Ok',
                            color: `${textColor}`,
                            background: `${bgColor}`,
                        }
                      )
        },
    },

}
</script>