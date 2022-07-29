<template>
    <section class="flex flex-col gap-x-20  px-8 py-8  lg:gap-x-7 xl:gap-x-12  border border-gray-700 rounded-xl  bgNigth" :class="textTheme">
         <section class=" w-full ">
               <img :src="image" class="max-h-56 h-56 w-full object-contain">
         </section>
         <section class="flex flex-col text-center items-center pt-6 gap-y-4">
            <section class=" ">
                <p v-text="tittle" class="text-2xl text-red-600" />
            </section>
            <section class="h-16">
                <p v-text="description" class="text-sm" />
            </section>
            <section class="flex justify-center items-center ">
                    <p v-text="price + ' $'"  class="text-xl text-green-600"/>
            </section>
            <button  class="h-10 bg-yellow-500 rounded-2xl px-7 text-center w-52 selector" :class="textTheme">
                    <p class="pt-2">Buy!</p>
            </button>
         </section>
            
    </section>
</template>
<script>

export default {
    
    props: {
        image: {
            default: "image"
        },
        tittle:{
            default: "tittle"
        },
        description:{
            default: "description",
        },
        price:{
            default:"price"
        },
        textTheme:{
            default: null
        }
    },
    

}
</script>
<style>
.selector:hover{
    background-color: #E3811F ;
}
</style>