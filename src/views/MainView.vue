<template>
    <div class="main_logo">
      <img src="../assets/ddaeng.png" alt="">
      <button class="main-button" @click="goToLogin">로그인</button>
    </div>
</template>
  
  <script>
import '@/assets/Main.css'
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
 @media screen and (min-width:769px){
.main_logo {
  background-color: #FF9356;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}

.main_logo img {
  width: 700px;
  height: 500px;
  padding: 20px;
}

.main-button {
  margin: 20px;
  width: 156px;
  height: 54px;
  border-radius: 20px;
  border: 1px solid #000;
  background: #FF5C00;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
 }
</style>

