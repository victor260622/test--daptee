<template>
    <section class="flex " :class="fixed">
        <section :class="{'animation flex': changeThemes, 'animationOut':!changeThemes}">

            <section class="flex-col items-center pr-3 py-5 hidden lg:flex " >
                <button @click="showThemes" class="transform hover:rotate-45 bg-gray-800  flex rounded-full" >
                    <img src="../assets/settings.svg" class="rotate px-1 py-1" />
                </button>
            </section>
            <section class="flex flex-col px-5 py-5 bgNigth rounded-xl border border-gray-600" v-if="changeThemes">
                <p class="text-white" v-text="'Themes Colors'" />
                <section class="flex gap-x-2 mt-2" >
                    <ButtonTheme @click="colorTheme(item.name, item.text)" v-for="item in colors" :key="item" :color="item.color" />
                </section>
            </section>
            
            <section class="flex flex-col px-5 py-5 bgNigth rounded-xl border border-gray-600 lg:hidden" v-if="movileThemes">
                <p class="text-white" v-text="'Themes Colors'" />
                <section class="flex gap-x-2 mt-2" >
                    <ButtonTheme @click="colorTheme(item.name, item.text)" v-for="item in colors" :key="item" :color="item.color" />
                </section>
            </section>
        </section>
    </section>
</template>


<script>
import ButtonTheme from './buttonTheme.vue'
    export default{
    data: () => ({
        changeThemes: false,
        
        colors:[
            {
                color:'bg-red-600',
                text:'text-red-600',
                name:'red'
            },
            {
                color:'bg-white',
                text:'text-white',
                name:'white'
            },
            {
                color:'bg-blue-600',
                text:'text-blue-600',
                name:'blue'
            },
            {
                color:'bg-purple-600',
                text:'text-purple-600',
                name:'purple'
            },
        ],
    }),
    props:{
        fixed:{
            default:'fixed right-4 top-20'
        },
        movileThemes:{
            default: false,
        } 
    },
    methods: {
        showThemes() {
            this.changeThemes = !this.changeThemes;
        },
        colorTheme(color, text) {
            this.$emit("theme", color);
            this.$emit("textColor", text);
        }
    },
    components: { ButtonTheme }
}
</script>
<style scoped>
.bgNigth{
    background-color: rgb(12 12 20 / 98%);
}
.rotate:hover {
  animation: rotation 4s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}


.animation{
  animation-name: nuevaAnimacion;
  animation-duration: 0.3s;

}
@keyframes nuevaAnimacion {
  0%{
      transform: translateX(100%);
  }
  100%{
      transform: translateX(0%)
  }
}

</style>