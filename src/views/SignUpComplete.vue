<template>
    <div>
        <div class="signup">
            <span class="login1">회원가입이 완료되었습니다.</span>
            <button @click="goToMain">시작페이지로</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'main',
    methods:{
        goToMain(){
            this.$router.push("/main");
        }
    }
}
</script>
<style>
span{
    font-size: 30px;
}

</style>
