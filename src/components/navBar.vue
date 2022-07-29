<template>
    <header class="absolute z-20 text-white top-0 right-0 flex justify-end lg:justify-center items-center bgNigth h-20 navBar">
        <section class=" justify-between w-full px-8 items-center hidden lg:flex" >
            <section class="flex gap-x-3">
                <img src="../assets/search.svg" class="cursor-pointer">
                <input type="text" class="bgNigth border-0 border-b " :class="textTheme">
            </section>
                <a href="/login" class="h-10 bg-yellow-500 rounded-2xl px-7 text-center flex gap-x-3 selector" :class="textTheme">
                    <p class="pt-2">LogOut</p>
                    <img src="../assets/log-out.svg" class="pt-2 h-7 w-7">
                </a>
        </section>

        <button class="lg:hidden flex flex-col pr-5 md:pr-8 gap-y-2" @click="show">
            <section class="bg-yellow-500 rounded-2xl h-1 w-12" />
            <section class="bg-yellow-500 rounded-2xl h-1 w-12" />
            <section class="bg-yellow-500 rounded-2xl h-1 w-12" />
        </button>
    </header>
</template>
<script>
export default {
  props:{
    textTheme:{
        default: null
    }
  },
  methods:{
    show(){
        this.$emit('show')
    }
  }
}
</script>
<style>
    .selector:hover{
        background-color: #E3811F ;
    }
</style>