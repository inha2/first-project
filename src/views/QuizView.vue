<template>
  <div class="quiz-all">
    <span>{{ currentIndex + 1 }}/10</span>
    <img :src="currentImage" alt="" class="quiz-image" />
    <p>위 사람은 누구일까요?</p>
    <div class="quiz-input-container">
      <input class="quiz-input" type="text" v-model="answer" />
      <button class="quiz-button" v-show="!answered" @click="submitAnswer">
        제출하기
      </button>
    </div>
    <p v-if="answered">
      <span v-if="isCorrect">정답입니다!</span>
      <span v-else >땡!</span>
    </p>
    <p v-if="showCorrectAnswer">
      정답은 "{{ getCorrectAnswer().join(", ") }}"입니다.
    </p>
    <button
      class="quiz-button"
      v-if="answered && currentIndex < images.length - 1"
      @click="nextQuestion"
    >
      다음 문제
    </button>
    <button
      class="quiz-button"
      v-else-if="answered && currentIndex === images.length - 1"
      @click="goToQuizComplete"
    >
      다음 문제
    </button>
  </div> 
</template>

<script>
import '@/assets/Quiz.css'
import jsonData from "../assets/imageData.json";
import {  } from "../views/QuizComplete.vue";
export default {
  name: "quiz",
  data() {
    return {
      answer: "",
      jsonData: jsonData,
      currentIndex: 0,
      images: [],
      answered: false,
      isCorrect: false,
      showCorrectAnswer: false,
      answerCount:0
    };
  },
  computed: {
    currentImage() {
      return (
        this.images[this.currentIndex].path &&
        require(`../images/${this.images[this.currentIndex].path}`)
      );
    },
  },
  methods: {
    submitAnswer() {
      const correctAnswers = this.getCorrectAnswer();
      const isCorrect = correctAnswers.some(
        (correctAnswer) =>
          correctAnswer.toLowerCase() === this.answer.toLowerCase()
      );
      console.log(isCorrect);
      // 얘가 참이면 점수를 올려야돼 내려야돼?
      // 그러면 이즈커렉트가 참일때 아까 엔서카운트가 ++ 되게 하면 되겠지?
      // 그걸 조건문으로 써보세요 .
      if(isCorrect == true){
        this.answerCount++
      }
      this.isCorrect = isCorrect;
      this.showCorrectAnswer = !isCorrect;
      this.answered = true;
    },
    nextQuestion() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
        this.answer = "";
        this.answered = false;
        this.isCorrect = false;
        this.showCorrectAnswer = false;
      }
    },
    getCorrectAnswer() {
      return this.jsonData.data[this.currentIndex].answer;
    },
    getRandomImages() {
      const shuffledImages = this.shuffleArray(this.jsonData.data);
      this.images = shuffledImages.slice(0, 10);
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    goToQuizComplete() {
      console.log(typeof 'answerCount');
      this.$router.push({
      path: '/quizComplete',
      query: { data: this.answerCount }
    });    
    },
  },
  created() {
    this.getRandomImages();
  },
};
</script>

<style>
@media screen and (min-width:769px){
.quiz-all {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background-color: #FF9356;
}
.quiz-image {
  width: 500px;
  height: 500px;
}
.quiz-input-container {
  display: flex;
  align-items: center;
  gap: 10px;
}
.quiz-button {
  width: 150px;
  height: 50px;
  border: none;
  font-size: 18px;
}
.quiz-input {
  height: 40px;
  border-radius: 15px;
  background: #fff;
  color: #999;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.quiz-all span {
  color: #FFF;
  font-size: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.quiz-all p {
  color: #FFF;
  text-align: center;
  font-size: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
}
</style>


<!-- 부모 컴포넌트
<template>
  <div>
    <child-component :propName="dataValue"></child-component>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataValue: 'Hello, World!' // 부모 컴포넌트의 데이터
    };
  }
};
</script> -->
