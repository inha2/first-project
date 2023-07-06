<template>
    <div>
      <div>
        <span>0/10</span>
        <img :src=randomImage  alt="" />
        <p>위 사람은 누구일까요?</p>
        <input type="text" placeholder="정답을 입력하세요!" v-model="answer">
        <button @click="submitAnswer">제출</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'quiz',
    data() {
      return {
        answer: '',
        images: [
            require('../images/fox.jpg'),
            require('../images/dolphin.jpg')
        ],
      };
    },
    computed: {
      randomImage() {
        const randomIndex = Math.floor(Math.random() * this.images.length);
        console.log(this.images[randomIndex]);
        return this.images[randomIndex];
      },
    },
    methods: {
      submitAnswer() {
        const correctAnswer = "정답";
        const isCorrect = this.answer === correctAnswer;
        if (isCorrect) {
          this.$router.push('/correct');
        } else {
          this.$router.push('/incorrect');
        }
      },
    },
  };
  </script>
  
  <style>
  
  </style>
  