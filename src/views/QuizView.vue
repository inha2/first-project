<template>
  <div class="quiz-all">
    <img :src="this.images[this.currentIndex].path" alt="" class="quiz-image">
    <p>위 사람은 누구일까요?</p>
    <div class="quiz-input-container">
      <input class="quiz-input" type="text" v-model="answer">
      <button class="quiz-button" v-if="!answered" @click="submitAnswer">제출하기</button>
    </div>
    <p v-if="answered">
      <span v-if="isCorrect">정답입니다!</span>
      <span v-else>오답입니다!</span>
    </p>
    <p v-if="showCorrectAnswer">정답은 "{{ getCorrectAnswer().join(', ') }}"입니다.</p>
    <button class="quiz-button" v-if="answered" @click="nextQuestion">다음 문제</button>
  </div>
</template>
<script>
import jsonData from '../assets/imageData.json';

export default {
  name: 'quiz',
  data() {
    return {
      answer: '',
      jsonData: jsonData,
      currentIndex: 0,
      images: [],
      answered: false,
      isCorrect: false,
      showCorrectAnswer: false
    };
  },
  computed: {
    currentImage() {
      console.log(this.images[this.currentIndex].path)
       return this.images[this.currentIndex].path;
    },
  },
  methods: {
    submitAnswer() {
      const correctAnswers = this.getCorrectAnswer();
      const isCorrect = correctAnswers.some(correctAnswer => correctAnswer.toLowerCase() === this.answer.toLowerCase());
      this.isCorrect = isCorrect;
      this.showCorrectAnswer = !isCorrect;
      this.answered = true;
    },
    nextQuestion() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
        this.answer = '';
        this.answered = false;
        this.isCorrect = false;
        this.showCorrectAnswer = false;
      }
    },
    goMacho() {
      this.$router.push("/incorrect");
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
  },
  created() {
    this.getRandomImages();
  },
};
</script>

<style>
.quiz-all {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
}
.quiz-image {
  width: 500px;
  height: 500px;
}
.quiz-input-container {
  display: flex;
  align-items: center;
}
.quiz-button {
  width: 100px;
  border: none;
}
.quiz-input {
  height: 40px;
  border-radius: 15px;
  background: #FFF;
  color: #999;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
