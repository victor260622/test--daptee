<template>
        <section class="lg:px-8 xl:px-16 pt-20  min-h-screen  bgNigth flex flex-col items-center">
            <section style="width: 172px;">
                <img src="../assets/LogoDaptee.svg" />
            </section>
            <section class="flex flex-col justify-center pt-24 gap-y-6">
                    <section v-for="item in items" :key="item" class="text-xl  flex justify-evenly items-center gap-x-3 border-b py-2 border-gray-400 w-40 items" :class="textTheme" @click="showComponent(item.id)" >
                        <img :src="require(`../assets/${item.icon}.svg`)" :fill="'BtnHover'" />
                        <button  v-text="item.name"  />
                    </section>
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
.items:hover{
    color: #E3811F ;
}
</style>