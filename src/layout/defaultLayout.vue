<template>
    <section class="flex flex-row ">
        <aside-component @component="showComponent" :textTheme="textTheme" class="bgNigth" />
        <section class="flex items-center justify-center w-full bgNigth2">
            <section class="flex flex-col items-center justify-between ">
                <slot :textTheme="textTheme" ></slot>
            </section>
        </section>
        <themes-component @textColor="changeTextColors" />
    </section>
</template>


<script>
import asideComponent from '../components/asideComponent.vue'
import ThemesComponent from '@/components/themesComponent.vue'
export default {
   components:{
    asideComponent,
    ThemesComponent
},
data:()=>({
    textTheme:'text-white'
}),
methods:{
     showComponent(id){
            this.$emit('component', id)
        },
        changeTextColors(color){
            if(color == null){
                this.textTheme = 'text-white'
            }
            if(color != null) this.textTheme = color
            
        }

},
}
</script>
<style scoped>
.bgNigth2{
    background-color: #212326;
}
.bgNigth{
    background-color: #090c10;
}
</style>
