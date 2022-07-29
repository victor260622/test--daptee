<template>
<section class="flex  justify-center items-center absolute top-0 right-0 left-0 bottom-0 bgNigth2">
    <form
        @submit="validate"
        class=" flex flex-col justify-center items-center bgNigth text-white px-4 py-4 md:px-20 md:py-20 rounded-2xl border border-gray-700"
    >
        <section class="form-login text-lg md:text-3xl font-semibold py-5 text-center">
            <h1 class="border-b">¡BIENVENIDO DEVUELTA!</h1>
        </section>

        <section class="flex flex-col gap-y-4 w-72 text-black">

            <input
                id="username"
                name="username"
                type="text"
                class="rounded-lg"
                placeholder="Username"
            />
            <input
                id="password"
                name="password"
                type="password"
                class="rounded-lg"
                placeholder="Password"
            />
        </section>

        <button class="h-10 bg-yellow-500 rounded-2xl px-7 mt-4 selector"  >
            <span>INICIAR SESIÓN</span>
        </button>

          <p href="#" class="cursor-pointer mt-4">¿Olvidó su Contraseña?</p>

    </form>
</section>
</template>
<script>
  export default{
    data:() =>({
      username: "",
      password: ""
    }),
    methods:{
      validate(){
        let user = document.getElementById('username').value;
        let pass = document.getElementById('password').value;
        if(user == "admin" && pass == "admin"){
          localStorage.setItem("validate", true)
          this.$router.push('/')

        } else {
          alert('Usuario o Contraseña erroneos.')
          this.$router.push('/login')
        } 

      }
    }
  }
</script>
<style scoped>
.bgNigth{
    background-color: rgb(12 12 20 / 98%);
}
.bgNigth2{
    background-color: #181818;
}
.selector:hover{
    background-color: #E3811F ;
}
</style>