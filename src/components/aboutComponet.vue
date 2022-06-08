<template>
    <section class="flex px-8">
        <section>
            <section v-html="tittle" />
            <section v-html="subTittle" />
            <p v-text="text" />
        </section>
        <section>

        </section>
    </section>
</template>



<script>


export default {
    data: () => ({
        tittle:'<p class="text-xl">Hello, my name is <span>Victor  asdasdadasdasdasdasdasd Lovera</sapn></p>',
        subTittle:"<p class='text-xl'>I'm a  <span>Front End Developer</sapn></p>",
        text:"I'm a web Designer with some experience for over 2 years. My expertise is to create and website design, graphic desing and many more",
    }),
}
</script>
<style>

</style>