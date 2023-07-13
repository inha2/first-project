<template>
  <div class="login">
    <div class="login1">
      <input type="text" placeholder="아이디를 입력하세요.">
      <input type="text" placeholder="비밀번호를 입력하세요.">
      <p  class="login-signup" @click="goToSignUp">회원가입 ></p>
      <button @click="goToStart">로그인</button>
    </div>
  </div>
</template>
<script>
import '@/assets/Login.css'
  export default {
    name:'SignUpView',
    name:'StartView',
    methods: {
      goToSignUp() {
      this.$router.push("/signUp");
    },
      goToStart(){
        this.$router.push('/start')
      }
  },
}
</script>
<style>
@media screen and (min-width:769px){
.login{
  background-color: #FF9356;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  width: 100%;
  height: 900px;
  padding: 20px;
}
.login1{
  width: 700px;
  height: 500px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #FF5C00;
  background: #FFC582;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 27px;
}
.login1 input{
  width: 300px;
  height: 50px;
  border-radius: 15px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  padding: 0 30px;
}
.login-signup{
  color: #FFF;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 200px;
}
}
</style>
