<template>
        <section class="px-16 pt-20 border-r border-red-700  min-h-screen bgNigth flex flex-col items-center">
            <section>
                <img src="../assets/logo.png" />
            </section>
            <section class="flex flex-col justify-center pt-24 gap-y-6">
                    <section v-for="item in items" :key="item" class="text-xl  flex justify-evenly items-center gap-x-3 border-b py-2 border-gray-400 w-40 selector" :class="textTheme" @click="showComponent(item.id)" >
                        <img :src="require(`../assets/${item.icon}.svg`)" :fill="'BtnHover'" />
                        <button  v-text="item.name" :href="item.url" />
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
                icon:'home',
                id: 1
            },
            {
                name:'About',
                url:'/about',
                icon:'user',
                id: 2
            },
            {
                name:'Services',
                url:'/services',
                icon:'list',
                id: 3
            },
            {
                name:'Portfolio',
                url:'/portfolio',
                icon:'briefcase',
                id: 4
            },
            {
                name:'Contact',
                url:'/contact',
                icon:'mail',
                id: 5
            },
        ],
    }),
    methods:{
        showComponent(id){
            this.$emit('component', id)
        }
    },
    props:{
        textTheme: {
            default:null
        }
    }
}
</script>
<style scoped>
.bgNigth{
    background-color: #090c10;
}
.selector:hover{
    color: #E3811F ;
}
</style>