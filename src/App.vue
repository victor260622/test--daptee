<template>
  <section >
    <default-layout @component="displayComponent">
      <home-component v-if="home"  />
      <about-componet v-if="about" />
    </default-layout>
  </section>
</template>

<script>
import homeComponent from './components/homeComponent.vue'
import defaultLayout from './layout/defaultLayout.vue'
import AboutComponet from './components/aboutComponet.vue'


export default {
  data:()=>({
    home: true,
    about: false,
  }),
  name: 'App',
  components: {
    defaultLayout,
    homeComponent,
    AboutComponet
},
methods:{
  displayComponent(id){
    if(id == 1){
      this.home = true
      this.about = false
    }
    if(id == 2){
      this.home = false
      this.about = true
    }
  },
},
}
</script>
