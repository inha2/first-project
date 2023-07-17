<template>
    <div class="login">
        <div class="login1">
            <div class="login-email-input-wrap">
                <input class="login_email" v-model="email" type="email" placeholder="이메일을 입력하세요." />
                <div>
                    <p v-if="showEmailError" class="error">이메일형식이 틀렸습니다.</p>
                </div>
            </div>
            <input v-model="password" type="password" placeholder="비밀번호를 입력하세요." />
            <p class="login-signup" @click="goToSignUp">회원가입 ></p>
            <button @click="login">로그인</button>
        </div>
    </div>
</template>
<script>
import '@/assets/Login.css'
import firebase from 'firebase/compat/app' // 변경된 import 문
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyBl2IJvyVq9x_0ZlLGChjssFOn9xNiUqKE',
    authDomain: 'ddaeng-fbba2.firebaseapp.com',
    databaseURL: 'https://ddaeng-fbba2-default-rtdb.firebaseio.com',
    projectId: 'ddaeng-fbba2',
    storageBucket: 'ddaeng-fbba2.appspot.com',
    messagingSenderId: '978175736639',
    appId: '1:978175736639:web:29475ec7fd809f9c7eb18a',
}

firebase.initializeApp(firebaseConfig)
export default {
    data() {
        return {
            email: '',
            password: '',
            showEmailError: false, // 새로운 데이터 속성 추가
        }
    },
    methods: {
        login() {
            console.log(this.validateEmail(this.email))
            if (!this.validateEmail(this.email)) {
                this.showEmailError = true // 비밀번호가 틀렸음을 나타내는 변수를 true로 설정xs
                return
            }
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(
                    (res) => {
                        alert('로그인 되었습니다.')
                        this.$router.push('/start')
                    },
                    (err) => {
                        alert('존재하지 않는 유저입니다.')
                    },
                )
        },
        goToSignUp() {
            this.$router.push('/signUp')
        },
        goToStart() {
            this.$router.push('/start')
        },
        validateEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return regex.test(email)
        },
    },
}
</script>
<style>
@media screen and (min-width: 769px) {
    .login-email-input-wrap {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .login-email-input-wrap div {
        display: flex;
        justify-content: start;
        align-items: center;
        padding-left: 10px;
    }
    .login_email {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .error {
        color: red;
        margin: 0;
        padding: 0;
        font-size: 15px;
    }
    .login {
        background-color: #ff9356;
        display: flex;
        justify-content: center;
        position: relative;
        align-items: center;
        width: 100%;
        height: 100vh;
    }
    .login1 {
        width: 700px;
        height: 500px;
        flex-shrink: 0;
        border-radius: 20px;
        border: 1px solid #ff5c00;
        background: #ffc582;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        gap: 20px;
        margin: 0 auto;
        display: flex;
    }
    .login1 input {
        width: 300px;
        height: 50px;
        border-radius: 15px;
        background: #fff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border: none;
        padding: 0 30px;
    }
    .login-signup {
        color: #fff;
        font-size: 16px;
        font-family: Inter;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-left: 200px;
    }
}
</style>
