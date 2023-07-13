<template>
  <div class="quiz_signup">
    <div class="signup_text">
      <input type="text" placeholder="아이디를 입력하세요.">
      <input type="text" placeholder="비밀번호를 입력하세요.">
      <input type="text" placeholder="비밀번호를 재입력하세요.">
    <button @click="goToSignUpComplete">회원가입</button>
  </div>
  </div>
</template>

<script>
import '@/assets/Signup.css'
export default {
  name: 'signUpComplete',
  methods:{
    goToSignUpComplete(){
      this.$router.push('/signUpComplete');
    }
    }
  }

</script>
<style>
@media screen and (min-width:769px){
.quiz_signup{
  background-color: #FF9356;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 900px;
  padding-top: 70px;
}
.signup_text{
  width: 600px;
  height: 474px;
  border-radius: 20px;
  border: 1px solid #FF5C00;
  background: #FFC582;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 27px;
  flex-direction: column;
}
.signup_text input{
  width: 200px;
  height: 50px;
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  padding: 0 30px;
}
.signup_text button{
  margin-top: 20px;
}
}
</style>
