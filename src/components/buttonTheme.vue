<template>
<section class="">
    <button  class="rounded-full  w-6 h-6 text-white" :class="color" />       
</section>
</template>
<script>
export default {
    data:() => ({
  
    }),
    props:{
      color:{
          default:'',
      },  
    }
}
</script>