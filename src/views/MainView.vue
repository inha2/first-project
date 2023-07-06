<template>
    <div class="main_logo">
      <img src="../assets/logo.png" alt="">
      <button @click="goToLogin">로그인</button>
    </div>
</template>
  
  <script>
  // @ is an alias to /src
  
  
  export default {
    name: 'LoginView',
    methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  },
  }
  </script> 
 
 <style>

.main_logo{
  background-color: #FF9356;
  display: flex;
  justify-content: center;
  position: relative;
}
.main_logo img{
  width: 900px;
  height: 100%;
  padding: 20px;
}

</style>

