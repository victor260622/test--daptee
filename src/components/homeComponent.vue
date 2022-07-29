<template>
    <section class="flex flex-col  px-8  lg:gap-x-7 xl:gap-x-12 w-full border border-gray-700 rounded-xl text- bgNigth py-12 lg:py-20 lg:px-6 xl:px-18 xl:px-20">
        <table :class="textTheme" class="border-separate border-spacing-2 border border-white " >
            <thead class="bg-yellow-500">
                <tr>
                    <th class="p-4 border-separate border-spacing-2 border border-white" v-text="'First Name'"></th>
                    <th class="p-4 border-separate border-spacing-2 border border-white" v-text="'Gender'"></th>
                    <th class="p-4 border-separate border-spacing-2 border border-white hidden lg:table-cell" v-text="'Email'"></th>
                    <th class="p-4 border-separate border-spacing-2 border border-white hidden md:table-cell" v-text="'Phone'"></th>
                    <th class="p-4 border-separate border-spacing-2 border border-white" v-text="'Optios'"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user">
                    <td class="p-4" v-text="user.firstName"/>
                    <td class="p-4" v-text="user.gender"/>
                    <td class="p-4 hidden lg:table-cell" v-text="user.email"/>
                    <td class="p-4 hidden md:table-cell" v-text="user.phone"/>
                    <td class="flex justify-center p-4 h-14">
                        <selectable-button />
                    </td>
                </tr>
            </tbody>
        </table>

        
    </section>
</template>



<script>
 import selectableButton from './selectableButton.vue'
import axios from 'axios';
export default {
    data: () => ({
        users: [],
        editable: false,

    }),
    props: {
        textTheme: {
            default: "text-white"
        }
    },
    components: { 
        selectableButton
    },
    methods:{
        async getUsers(){
            const response = await axios.get('https://dummyjson.com/users?limit=10')
            this.users = response.data.users
        },

    },
    created(){
        this.getUsers()
    }
}
</script>
<style>

.bgNigth{
    background-color: rgb(12 12 20 / 98%);
}
</style>