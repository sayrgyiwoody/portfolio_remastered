<template>
    <div class=" flex items-center space-x-2 ">
        <label for="color-input" class="hidden md:block text-sm font-medium mb-2 dark:text-white">Customize Theme : </label>
        <input id="color-input" type="color" v-model="selectedColor" class="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-zinc-900 dark:border-gray-700" title="Choose your color">
       
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedColor: '#2563EB',
      };
    },
    methods: {
        darkenColor(color, amount) {
            // Convert HEX to RGB
            const rgb = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
            const [, r, g, b] = rgb.map(value => parseInt(value, 16));

            // Darken RGB values
            const darkenedR = Math.max(0, r - amount);
            const darkenedG = Math.max(0, g - amount);
            const darkenedB = Math.max(0, b - amount);

            // Convert darkened RGB back to HEX
            return `#${(darkenedR * 65536 + darkenedG * 256 + darkenedB).toString(16).padStart(6, '0')}`;
        },
        setRandPrimaryColor() {
          const colors = ['#2563EB','#8112fa','#23905f','#ca271c','#e724eb','#0d8f91'];
          // Generate a random index
          const randomIndex = Math.floor(Math.random() * colors.length);

          // Get the random color
          const randomColor = colors[randomIndex];
          this.selectedColor = randomColor;
          this.changePrimaryColor(randomColor);
        },
        changePrimaryColor(newColor){
          
        // set primary color 
        document.documentElement.style.setProperty('--color-primary', newColor);

        // Darken primary color for primary_hover
        const primaryColor = newColor;
        const primaryHoverColor = this.darkenColor(primaryColor, 20); // Adjust the value for the desired darkness
        document.documentElement.style.setProperty('--color-primary-hover', primaryHoverColor);

        }
    },
    watch: {
      selectedColor(newColor) {
        this.changePrimaryColor(newColor);
      }
    },
    mounted () {
      this.setRandPrimaryColor();
    },
    
  };
  </script>
  