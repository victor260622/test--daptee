<template>
    <section class="flex px-8 justify-between gap-x-12 w-full">
        <section class="flex flex-col ">
            <section v-html="tittle" :class="textTheme" />
            <section v-html="subTittle" :class="textTheme" class="mt-4" />
            <p v-text="text" :class="textTheme" class="mt-3 max-w-md" />
        </section>
        <section >
            <img src="../assets/foto.jpg" class="w-80 h-80" />
        </section>
    </section>
</template>



<script>


export default {
    data: () => ({
        tittle:'<p class="text-4xl">Hello, my name is <span>Victor Lovera</sapn></p>',
        subTittle:"<p class='text-2xl' >I'm a  <span>Front End Developer</sapn></p>",
        text:"I'm a web Designer with some experience for over 2 years. My expertise is to create and website design, graphic desing and many more",
    }),
    props:{
        textTheme:{
            default:'text-white'
        }
    }
}
</script>
<style>

</style>