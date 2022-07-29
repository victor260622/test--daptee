<template>
  <section >
    <default-layout @component="displayComponent" @textColor="changeTextColors">
      <home-component v-if="home" :textTheme="textTheme" />
      <product-component v-if="about" :textTheme="textTheme"/>
    </default-layout>
  </section>
</template>

<script>
import homeComponent from '../components/homeComponent.vue'
import defaultLayout from '../layout/defaultLayout.vue'
import ProductComponent from '../components/productComponent.vue'


export default {
  created(){
            if(!localStorage.getItem("validate") || localStorage.getItem("validate") == "false") {
                this.$router.push('/login')
                }
            else{localStorage.removeItem("validate");}

    },
  data:()=>({
    home: true,
    about: false,
    textTheme:'text-white'
  }),
  components: {
    defaultLayout,
    homeComponent,
    ProductComponent
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
  changeTextColors(text){
    if(text == null){
      this.textTheme = 'text-white'
      }
    if(text != null) this.textTheme = text
  }
},
}
</script>
