<template>
    <div class="quiz_complete">
        <img src="../assets/logo.png" alt="">
        <span class="quiz_complete_count">{{ correctCount }}개 맞추셨습니다</span>
        <div class="quiz_complete_content">
            <p>당신은 상위 40% 입니다</p>
        </div>
        <div class="quiz_complete_share">
            <span class="kakao">카톡 공유하기</span>
            <span class="home">홈으로</span>
        </div>
        <div>
            <div>
                <input type="text" placeholder="내용을 입력하세요(최대 200자)">
                <input type="text" placeholder="닉네임">
                <input type="text" placeholder="비밀번호">
                <button>작성하기</button>
            </div>
            <div>
                <span>닉네임</span>
                <span>2023-07-04 09:23:56</span>
                <span>재밌네요</span>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        correctCount: 1, // 맞춘 개수를 설정해주세요
      };
    },
  }
  </script>
  
  <style>
  .quiz_complete {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FF9356;
    height: 900px;
    text-align: center;
  }
  
  .quiz_complete img {
    width: 200px;
    height: 120px;
    margin-bottom: 20px;
  }
  
  .quiz_complete_content {
    margin-bottom: 20px;
    width: 1030px;
    height: 358.356px;
    background: #FFB648;
  }
  
  .quiz_complete_count {
    width: 1030px;
    height: 31px;
    background: #FFB648;
    color: #FFF;
    font-size: 20px;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 0 10px;
    margin-bottom: 20px;
  }
  
  .kakao {
    width: 140px;
    height: 40px;
    border-radius: 10px;
    background: #FFF500;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #000;
    font-size: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  
  .home {
    width: 120px;
    height: 40px;
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 20px;
    background: #FF5C00;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
  </style>
  