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
      <span v-else>오답입니다!</span>
    </p>
    <p v-if="showCorrectAnswer">
      정답은 "{{ getCorrectAnswer().join(", ") }}"입니다.
    </p>
    <button class="quiz-button" v-if="answered" @click="nextQuestion">
      다음 문제
    </button>
  </div>
</template>

<script>
import jsonData from "../assets/imageData.json";

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
.quiz-all span{
  color: #FFF;
  font-size: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.quiz-all p{
  color: #FFF;
  text-align: center;
  font-size: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
