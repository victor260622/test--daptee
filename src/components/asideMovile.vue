<template>
        <section class="lg:px-8 xl:px-16 pt-20  min-h-screen  bgNigth flex flex-col items-center">
            <section class="w-72">
                <img src="../assets/LogoDaptee.svg" />
            </section>
            <section class="flex flex-col justify-center pt-24 gap-y-8">
                    <section v-for="item in items" :key="item" class="text-xl  flex justify-evenly items-center border-b py-2 border-gray-400 w-40" :class="textTheme" @click="showComponent(item.id)" >
                        <img :src="require(`../assets/${item.icon}.svg`)" :fill="'BtnHover'" />
                        <button  v-text="item.name"  />
                    </section>
                    <a href="/login" class="h-10 bg-yellow-500 rounded-2xl px-7 text-center mt-16" :class="textTheme">
                        <p class="pt-2">LogOut</p>
                     </a>
                     <button v-text="'Close'" :class="textTheme" @click="close" />
            </section>
            
        </section>
</template>
<script>

export default{
    data: () => ({
        items:[
            {
                name:'Users',
                url:'/',
                icon:'user',
                id: 1
            },
            {
                name:'Products',
                url:'/about',
                icon:'briefcase',
                id: 2
            },
        ],
    }),
    methods:{
        showComponent(id){
            this.$emit('component', id)
        },
        close(){
            this.$emit('close')
        }
    },
    props:{
        textTheme: {
            default:null
        },

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