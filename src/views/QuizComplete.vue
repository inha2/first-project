<template>
    <div class="quiz_complete">
        <img src="../assets/logo.png" alt="">
        <span class="quiz_complete_count">{{$route.query.data}}개 맞추셨습니다</span>
        <div class="quiz_complete_content">
            <p v-if="$route.query.data==0">상위 100% 입니다!</p>
            <p v-if="$route.query.data==1">상위 90% 입니다!</p>
            <p v-if="$route.query.data==2">상위 80% 입니다!</p>
            <p v-if="$route.query.data==3">상위 70% 입니다!</p>
            <p v-if="$route.query.data==4">상위 60% 입니다!</p>
            <p v-if="$route.query.data==5">상위 50% 입니다!</p>
            <p v-if="$route.query.data==6">상위 40% 입니다!</p>
            <p v-if="$route.query.data==7">상위 30% 입니다!</p>
            <p v-if="$route.query.data==8">상위 20% 입니다!</p>
            <p v-if="$route.query.data==9">상위 10% 입니다!</p>
            <p v-if="$route.query.data==10">상위 1% 입니다!</p>
            <div class="quiz_complete_share">
              <span class="kakao">카톡 공유하기</span>
              <span class="home">홈으로</span>
          </div>
        </div>
 
        <div class="quiz_complete_input_wrap">
            <div class="quiz_complete_input">
                <input type="value" placeholder="내용을 입력하세요(최대 200자)" class="quiz_comment">
                <input type="text" placeholder="닉네임">
                <input type="text" placeholder="비밀번호">
                <button class="quiz_complete_button">작성하기</button>
            </div>
          </div>
            <div class="quiz_complete_user">
              <div class="quiz_complete_date">
                <span >인하</span>
                <span>2023-07-04 09:23:56</span>
              </div>
                <span class="fun">재밌네요</span>
            </div>
    </div>
  </template>
  <script>
  import Splitting from 'splitting';
  
  export default {
    data() {
      return {
        particles: [],
        colors: ["#eb6383", "#fa9191", "#ffe9c5", "#b4f2e1"],
      };
    },
    methods: {
      pop() {
        // 기존의 particule 요소들 삭제
        const existingParticles = document.querySelectorAll('particule');
        existingParticles.forEach(p => p.remove());
  
        for (let i = 0; i < 150; i++) {
          const p = document.createElement('particule');
          p.x = window.innerWidth * 0.5;
          p.y = window.innerHeight + (Math.random() * window.innerHeight * 0.3);
          p.vel = {
            x: (Math.random() - 0.5) * 10,
            y: Math.random() * -20 - 15
          };
          p.mass = Math.random() * 0.2 + 0.8;
          this.particles.push(p);
          p.style.transform = `translate(${p.x}px, ${p.y}px)`;
          const size = Math.random() * 15 + 5;
          p.style.width = size + 'px';
          p.style.height = size + 'px';
          p.style.background = this.colors[Math.floor(Math.random() * this.colors.length)];
          document.body.appendChild(p);
        }
        Splitting();
  
        // 남아있는 동그라미 알맹이 제거
        const remainingParticle = document.querySelector('particule');
        if (remainingParticle) {
          remainingParticle.remove();
        }
  
        setTimeout(this.render, 700);
      },
      render() {
        for (let i = this.particles.length - 1; i--; i > -1) {
          const p = this.particles[i];
          p.style.transform = `translate3d(${p.x}px, ${p.y}px, 1px)`;
  
          p.x += p.vel.x;
          p.y += p.vel.y;
  
          p.vel.y += (0.5 * p.mass);
          if (p.y > (window.innerHeight * 2)) {
            p.remove();
            this.particles.splice(i, 1);
          }
        }
        requestAnimationFrame(this.render);
      }
    },
    mounted() {
      this.pop(); // 폭죽 애니메이션 실행
    }
  };
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
  .quiz_complete_user{
    background: #FBE9E9;
    width: 100%;
    height: 100%;
  }
  .quiz_complete_date{
    flex-direction: column;
  }
.fun{
  margin-right: 70px;
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

  .quiz_complete_button{
    width: 65px;
    height: 30px;
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
  .quiz_complete_input_wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background: #FBE9E9;
  
}
.quiz_complete_input{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 620px;
  height: 95px;
  border-radius: 20px;
  background: #FFC582;
}
.quiz_complete_input input{
  border-radius: 15px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border:none;
}
.quiz_complete_input .quiz_comment {
  color: #999;
  box-shadow: none;
  background: #FFC582;
}

  .char, .word {
	 display: inline-block;
}
 .splitting .char {
	 animation: slide-in 1s cubic-bezier(0.17, 0.84, 0.4, 1.49) both;
	 animation-delay: calc(30ms * var(--char-index));
}
 [data-word="♬"] .char {
	 display: inline;
}

 @keyframes slide-in {
	 0% {
		 transform: scale(2) rotate(60deg);
		 opacity: 0;
	}
}
 @keyframes bump-in {
	 0% {
		 transform: scale(0);
		 opacity: 0;
	}
}
particule {
	 position: absolute;
	 top: 0;
	 left: 0;
	 border-radius: 50%;
	 width: 30px;
	 height: 30px;
	 box-shadow: 1px 1px 4px #eb6383;
}

  </style>
  

  <!-- console.clear();

 

 
pop();
window.setTimeout(render, 700);
window.addEventListener('click', pop); -->