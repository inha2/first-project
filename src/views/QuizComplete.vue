<template>
    <div class="quiz_complete">
        <img src="../assets/logo.png" alt="">
        <div class="quiz_complete_content">
            <span class="quiz_complete_count">10개 맞추셨습니다</span>
            <p>당신은 상위 40% 입니다</p>
        </div>
        <div class="quiz_complete_share">
            <span class="kakao">카톡 공유하기</span>
            <span class="home">홈으로</span>
        </div>
    </div>

</template>
<script>

</script>
<style>
.quiz_complete{
    background-color: #FF9356;
    width: 100%;
    height: 900px;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.quiz_complete_content{
    margin-bottom: 20px;
}
.quiz_complete img{
    width: 200px;
    height: 120px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}
.quiz_complete_count{
    width: 1000px;
    height: 31px;
    background: #FFB648;
    color: #FFF;
    font-size: 20px;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.kakao{
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background: #FFF500;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #000;
    font-size: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 10px;
    
}
.home{
    width: 65px;
    height: 30px;
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 15px;
    background: #FF5C00;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding-top: 10px;
}
.quiz_complete_share{
    display: flex;
    gap: 10px;
    text-align: center;
    justify-content: center;
    margin: auto 0;
    justify-content: center;
    align-items: center;
}
</style>