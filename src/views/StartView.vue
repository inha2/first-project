<template>
    <div class="start">
        <img class="start_img" src="../assets/ddaeng.png" alt="" />
        <div class="start_quiz">
            종합 인물 퀴즈!! 종합 인물 퀴즈 인물 사진을 보고 어떤 사람인지 맞히시면 됩니다. 정치인, 연예인, 역사인물,
            인플루언서 등 <br />많은 인물이 종합적으로 등록되어있습니다!
        </div>
        <button @click="goToQuiz">게임시작</button>
    </div>
</template>
<script>
import '@/assets/Start.css'
export default {
    name: 'quiz',
    methods: {
        goToQuiz() {
            this.$router.push('/quiz')
        },
    },
}
</script>
<style>
@media screen and (min-width: 769px) {
    .start {
        background-color: #ff9356;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-direction: column;
        height: 100vh;
    }
    .start_img {
        width: 500px;
        height: 500px;
        padding: 30px 30px;
    }
    .start_quiz {
        font-size: 20px;
        width: 500px;
        height: 150px;
        background-color: #ffc582;
        border-radius: 20px;
        position: relative;
        padding-top: 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        line-height: 50px;
        margin-bottom: 20px;
    }
}
</style>
