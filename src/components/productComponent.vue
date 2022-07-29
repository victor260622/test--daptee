<template>
    <section class="grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6 max-w-1440" >  <!-- py-12 lg:py-20 lg:px-6 xl:px-18 xl:px-20 -->
       
        <ProductCards class="" :textTheme="textTheme" v-for="product in products" :key="product" :tittle="product.title" :description="product.description" :price="product.price" :image="product.images[0]" />
        
    </section>
</template>



<script>
import axios from 'axios';
import ProductCards from './productCards.vue';
export default {
    data: () => ({
        products: [],
    }),
    props:{
        textTheme: {
            default: "text-white"
        }
    },
    components: { ProductCards },
    methods:{
        async getProducts(){
            const response = await axios.get('https://dummyjson.com/products?limit=6')
            this.products = response.data.products
        },

    },
    created(){
        this.getProducts()
    }
}
</script>
<style>

</style>