<template>
    <div class="signup">
        <span class="login1">회원가입이 완료되었습니다.</span>
        <div class="signup_button">
            <button @click="goToMain">시작페이지로</button>
        </div>
    </div>
</template>
<script>
import { initializeApp } from 'firebase/app'

import '@/assets/SignUpComplete.css'
export default {
    name: 'main',
    methods: {
        goToMain() {
            this.$router.push('/')
        },
    },
}
</script>
<style>
@media screen and (min-width: 769px) {
    .signup {
        background: #ff9356;
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
    }
    .signup_button {
        display: flex;
        justify-content: center;
    }
}
</style>
