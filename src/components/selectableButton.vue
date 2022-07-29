<template>
    <section>
        <button class="flex gap-x-1 justify-center items-center cursor-pointer relative" @click="show">
            <section class="w-3 h-3 bg-yellow-500  rounded-full" />
            <section class="w-3 h-3 bg-yellow-500  rounded-full" />
            <section class="w-3 h-3 bg-yellow-500  rounded-full" />
        </button>
        <section class="absolute bgNigth  z-20 mt-2 flex flex-col " v-if="editable">
            <ul>
                <li class="cursor-pointer px-4 py-3 hover:bg-yellow-500" @click="show">Edit</li>
                <li class="cursor-pointer px-4 py-3 hover:bg-yellow-500" @click="show">Remove</li>
            </ul>
        </section>
    </section>
</template>
<script>
export default {
    data: () => ({
        editable: false,

    }),
    props: {
        textTheme: {
            default: "text-white"
        }
    },
    methods:{
        show(){
            this.editable = !this.editable
        },
    },
}
</script>
<style scoped>
.bgNigth{
    background-color: #090c10;
}
</style>