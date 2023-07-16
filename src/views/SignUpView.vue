<template>
    <div class="quiz_signup">
        <div class="signup_text">
            <input v-model="email" type="email" placeholder="이메일을 입력하세요." />
            <p v-if="showEmailError" class="error">이메일 형식이 틀렸습니다.</p>
            <input v-model="password" type="password" placeholder="비밀번호를 입력하세요." />
            <input v-model="checkPassword" type="password" placeholder="비밀번호를 재입력하세요." />
            <p v-if="isConfirmPassword" class="error">비밀번호가 일치하지않습니다.</p>
            <button @click="signUpUser">회원가입</button>
        </div>
    </div>
</template>

<script>
import '@/assets/Signup.css'
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
            checkPassword: '',
            isConfirmPassword: false,
            showEmailError: false,
        }
    },
    name: 'signUpComplete',
    methods: {
        goToSignUpComplete() {
            this.$router.push('/signUpComplete')
        },
        isCheckPassword() {
            if (this.password !== this.checkPassword) {
                return (this.isConfirmPassword = true)
            } else {
                this.isConfirmPassword = false
            }
        },
        signUpUser() {
            if (!this.validateEmail(this.email)) {
                this.showEmailError = true
                return
            }
            this.isCheckPassword()

            if (this.isConfirmPassword) {
                return
            }

            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(
                    (res) => {
                        alert('회원가입이 완료되었습니다.')
                        this.showEmailError = false
                        this.isConfirmPassword = false
                        this.$router.push('/signUpComplete')
                    },
                    (err) => {
                        const res = JSON.parse(JSON.stringify(err))
                        if (res.code == 'auth/email-already-in-use') {
                            alert('중복된 아이디입니다.')
                            this.showEmailError = false
                            this.isConfirmPassword = false
                        } else {
                            alert('형식이 맞지 않습니다.')
                            this.showEmailError = false
                            this.isConfirmPassword = false
                        }
                    },
                )
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
    .quiz_signup {
        background-color: #ff9356;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        height: 100vh;
    }
    .signup_text {
        width: 600px;
        height: 474px;
        border-radius: 20px;
        border: 1px solid #ff5c00;
        background: #ffc582;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 27px;
        flex-direction: column;
    }
    .signup_text input {
        width: 200px;
        height: 50px;
        border-radius: 15px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border: none;
        padding: 0 30px;
    }
    .signup_text button {
        margin-top: 20px;
    }
}
</style>
