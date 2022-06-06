<template>
        <section class="px-16 pt-20 border-r border-red-700 fixed top-0 left-0 min-h-screen bgNigth flex flex-col items-center">
            <section>
                <img src="../assets/logo.png" />
            </section>
            <section class="flex flex-col justify-center pt-24 gap-y-6">
                    <section v-for="item in items" :key="item" class="text-xl text-white flex justify-evenly items-center gap-x-3 border-b py-2 border-gray-400 w-40 selector" >
                        <img :src="require(`../assets/${item.icon}.svg`)" :fill="'BtnHover'" />
                        <a  v-text="item.name" :href="item.url" />
                    </section>
            </section>
        </section>
</template>
<script>


export default{
    data: () => ({
        items:[
            {
                name:'Home',
                url:'/',
                icon:'home'
            },
            {
                name:'About',
                url:'/about',
                icon:'user'
            },
            {
                name:'Services',
                url:'/services',
                icon:'list'
            },
            {
                name:'Portfolio',
                url:'/portfolio',
                icon:'briefcase'
            },
            {
                name:'Contact',
                url:'/contact',
                icon:'mail'
            },
        ],
    }),
}
</script>
<style scoped>
.bgNigth{
    background-color: #0d1117;
}
.selector:hover{
    color: #E3811F ;
}
</style>