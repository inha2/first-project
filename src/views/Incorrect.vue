<template>
    <div>
    <!-- 이미지 파일명 표시 -->
    <div v-for="filename in imageFilenames" :key="filename">
      {{ filename }}
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'ImageList',
    data() {
        return {
        imageFilenames: [],
        };
    },
    mounted() {
        this.loadImageFilenames();
    },
    methods: {
        async loadImageFilenames() {
        try {
            const response = await axios.get('/api/image-filenames'); // 이미지 파일명을 가져올 API 엔드포인트
            this.imageFilenames = response.data;
        } catch (error) {
            console.error('이미지 파일명을 불러오는 도중 오류가 발생했습니다:', error);
        }
        },
    },
  };
  </script>
  
  <style>
  
  </style>
  
  