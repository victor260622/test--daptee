<template>
    <section class="flex flex-row ">
        <nav-bar :textTheme="textTheme" @show="showMovile"/>
        <aside-movile v-if="asideMovile" class="absolute w-full z-50 lg:hidden" :textTheme="textTheme" @component="showComponent" @close="showMovile" />
        <aside-component @component="showComponent" :textTheme="textTheme" class=" hidden lg:block" />
        <section class="flex items-center justify-center w-full bgNigth2 lg:px-5">
            <section class="flex flex-col items-center justify-between mt-24 pb-4 lg:mt-40 lg:pb-20">              
                <slot>
                </slot>
            </section>
        </section>
        <themes-component @textColor="changeTextColors" />
    </section>
</template>


<script>
import navBar from '../components/navBar.vue'
import asideMovile from '../components/asideMovile.vue'
import asideComponent from '../components/asideComponent.vue'
import ThemesComponent from '@/components/themesComponent.vue'
export default {
   components:{
    navBar,
    asideComponent,
    ThemesComponent,
    asideMovile
},
data:()=>({
    textTheme:'text-white',
    asideMovile: false
}),
methods:{
     showComponent(id){
            this.$emit('component', id)
            this.asideMovile = false
        },
        changeTextColors(colorText){
            this.$emit("textColor", colorText);
            if(colorText == null){
                this.textTheme = 'text-white'
            }
            if(colorText != null) this.textTheme = colorText
            
        },
    showMovile(){
        this.asideMovile = !this.asideMovile
    }

},
}
</script>
<style scoped>
.bgNigth2{
    background-color: #181818;
}
.bgNigth{
    background-color: #090c10;
}
.navBar{
    width: 100%;
}
@media (min-width: 1024px) {
    .navBar{
    width: calc(100% - 235px);
    }
}

@media (min-width: 1440px) {
    .navBar{
    width: calc(100% - 300px);
    }
}

</style>
