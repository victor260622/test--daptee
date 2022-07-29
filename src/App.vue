<template>
  <router-view />
</template>

<script>
export default {
  data:()=>({
    home: true,
    about: false,
    textTheme:'text-white'
  }),
  name: 'App',
  components: {
},

}
</script>
<style>
html{
  font-family: 'Roboto', sans-serif;
}
</style>
