<template>
    <section class="flex fixed right-4 top-20 ">
        <section :class="{'animation flex': changeThemes, 'animationOut':!changeThemes}">

            <section class="flex flex-col items-center pr-3 py-5 " >
                <button @click="showThemes" class="transform hover:rotate-45" >
                    <img src="../assets/settings.svg" class="rotate" />
                </button>
                <!-- <section>
                    <img src="../assets/settings.svg" />
                </section> -->
            </section>
            <section class="flex flex-col px-5 py-5 bgNigth rounded-xl " v-if="changeThemes">
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
                color:'bg-yellow-600',
                text:'text-yellow-600',
                name:'yellow'
            },
        ],
    }),
    methods: {
        showThemes() {
            this.changeThemes = !this.changeThemes;
        },
        colorTheme(color, text) {
            this.$emit("theme", color);
            this.$emit("textColor", text);
            console.log(color, text)
        }
    },
    components: { ButtonTheme }
}
</script>
<style scoped>
.bgNigth{
    background-color: #0d1117;
}
.rotate {
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
/* .animationOut{
  animation-name: animationOut;
  animation-duration: 0.3s;

}
@keyframes animationOut {
    100%{
        transform: translateX(0%)
  }
      0%{
          transform: translateX(100%);
      }
} */
</style>