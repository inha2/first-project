<template>
    <div class="quiz_complete">
        <img src="../assets/ddaeng.png" alt="" />
        <span class="quiz_complete_count">{{ $route.query.data }}개 맞추셨습니다</span>
        <div class="quiz_complete_content">
            <p v-if="$route.query.data == 0">상위 100% 입니다!</p>
            <p v-if="$route.query.data == 1">상위 90% 입니다!</p>
            <p v-if="$route.query.data == 2">상위 80% 입니다!</p>
            <p v-if="$route.query.data == 3">상위 70% 입니다!</p>
            <p v-if="$route.query.data == 4">상위 60% 입니다!</p>
            <p v-if="$route.query.data == 5">상위 50% 입니다!</p>
            <p v-if="$route.query.data == 6">상위 40% 입니다!</p>
            <p v-if="$route.query.data == 7">상위 30% 입니다!</p>
            <p v-if="$route.query.data == 8">상위 20% 입니다!</p>
            <p v-if="$route.query.data == 9">상위 10% 입니다!</p>
            <p v-if="$route.query.data == 10">상위 1% 입니다!</p>
            <div class="quiz_complete_share">
                <span @click="showAlert" class="kakao">카톡 공유하기</span>
                <span @click="goToStart" class="home">다시풀기</span>
            </div>
        </div>
        <div class="quiz_complete_input_wrap">
            <div class="quiz_complete_input">
                <div class="quiz_complete_textarea_content">
                    <div class="quiz_complete_textarea_wrap">
                        <textarea
                            name="comment"
                            id=""
                            cols="20"
                            rows="5"
                            placeholder="내용을입력하세요(최대20자)"
                            v-model="content"
                        ></textarea>
                    </div>
                    <div class="quiz_complete_input_content">
                        <div class="quiz_complete_input_id">
                            <input v-model="nickName" type="text" placeholder="닉네임" />
                            <input v-model="password" type="password" placeholder="비밀번호" />
                        </div>
                        <div>
                            <button @click="submitComment" class="quiz_complete_button">작성하기</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-for="comment in comments" :key="comment.createdAt" class="quiz_complete_user">
                <div class="quiz_complete_date">
                    <div class="quiz_complete_user_info_content">
                        <div>
                            <span>{{ comment.nickname }}</span>
                        </div>
                        <div>
                            <span>{{ comment.createdAt }}</span>
                        </div>
                    </div>
                    <div>
                        <img @click="goToDelete(comment)" class="siren" src="../images/ic_siren.webp" alt="" />
                    </div>
                </div>
                <div class="quiz_comment_wrap">
                    <span class="fun">{{ comment.content }}</span>
                    <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="delete"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Splitting from 'splitting'
import '@/assets/QuizComplete.css'
import firebase from 'firebase/compat/app' // 변경된 import 문
import 'firebase/compat/database'
import moment from 'moment'

const firebaseConfig = {
    apiKey: 'AIzaSyBl2IJvyVq9x_0ZlLGChjssFOn9xNiUqKE',
    authDomain: 'ddaeng-fbba2.firebaseapp.com',
    databaseURL: 'https://ddaeng-fbba2-default-rtdb.firebaseio.com',
    projectId: 'ddaeng-fbba2',
    storageBucket: 'ddaeng-fbba2.appspot.com',
    messagingSenderId: '978175736639',
    appId: '1:978175736639:web:29475ec7fd809f9c7eb18a',
}

firebase.initializeApp(firebaseConfig)

export default {
    data() {
        return {
            particles: [],
            colors: ['#eb6383', '#fa9191', '#ffe9c5', '#b4f2e1'],
            nickName: '',
            password: '',
            content: '',
            comments: [],
        }
    },
    methods: {
        pop() {
            // 기존의 particule 요소들 삭제
            const existingParticles = document.querySelectorAll('particule')
            existingParticles.forEach((p) => p.remove())

            for (let i = 0; i < 150; i++) {
                const p = document.createElement('particule')
                p.x = window.innerWidth * 0.5
                p.y = window.innerHeight + Math.random() * window.innerHeight * 0.3
                p.vel = {
                    x: (Math.random() - 0.5) * 10,
                    y: Math.random() * -20 - 15,
                }
                p.mass = Math.random() * 0.2 + 0.8
                this.particles.push(p)
                p.style.transform = `translate(${p.x}px, ${p.y}px)`
                const size = Math.random() * 15 + 5
                p.style.width = size + 'px'
                p.style.height = size + 'px'
                p.style.background = this.colors[Math.floor(Math.random() * this.colors.length)]
                document.body.appendChild(p)
            }
            Splitting()

            // 남아있는 동그라미 알맹이 제거
            const remainingParticle = document.querySelector('particule')
            if (remainingParticle) {
                remainingParticle.remove()
            }

            setTimeout(this.render, 700)
        },
        render() {
            for (let i = this.particles.length - 1; i--; i > -1) {
                const p = this.particles[i]
                p.style.transform = `translate3d(${p.x}px, ${p.y}px, 1px)`

                p.x += p.vel.x
                p.y += p.vel.y

                p.vel.y += 0.5 * p.mass
                if (p.y > window.innerHeight * 2) {
                    p.remove()
                    this.particles.splice(i, 1)
                }
            }
            requestAnimationFrame(this.render)
        },
        showAlert() {
            alert('카카오톡열기')
        },
        goToStart() {
            this.$router.push('/start')
        },
        goToDelete() {
            alert('quiz_complete_input')
        },
        submitComment() {
            const commentsRef = firebase.database().ref('comments')
            const now = moment().format('YYYY-MM-DD HH:mm:ss')
            const newCommentRef = commentsRef.push()
            let response = []
            newCommentRef.set({
                content: this.content,
                nickname: this.nickName,
                password: this.password,
                createdAt: now,
            })
            alert('댓글이 저장되었습니다.')
            commentsRef.on('child_added', async (snapshot) => {
                await this.initCommentList()
                await this.comments.push(snapshot.val())
            })
        },
        initComment() {
            const commentsRef = firebase.database().ref('comments')
            commentsRef.on('child_added', (snapshot) => {
                this.comments.push(snapshot.val())
            })
        },
        initCommentList() {
            this.comments = []
        },
    },
    mounted() {
        this.initComment()
        this.pop() // 폭죽 애니메이션 실행
    },
}
</script>
<style>
@media screen and (min-width: 769px) {
    .quiz_complete_share {
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
        margin-top: 100px;
    }
    .quiz_complete_input_id {
        display: flex;
        gap: 20px;
        align-items: center;
    }
    .quiz_complete_input_content {
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .quiz_complete_textarea_content {
        margin-top: 24px;
        width: 100%;
        background: #ff9356;
        border-radius: 20px;
    }
    .quiz_complete_textarea_wrap textarea {
        width: 94%;
        background: #ff9356;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        border: none;
        padding: 20px;
        resize: none;
    }
    .quiz_comment_wrap {
        display: flex;
        justify-content: space-between;
    }
    .quiz_complete_user_info_content {
        display: flex;
        align-items: center;
        gap: 30px;
    }
    .quiz_complete_date {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 720px;
        margin-top: 20px;
    }

    .quiz_complete_date .siren {
        width: 13.71px;
        height: 14.29px;
        display: inline-block;
        vertical-align: middle;
        margin-top: 14px; /* 적절한 값을 지정하여 이미지를 조정하세요 */
    }
    .quiz_complete {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #ff9356;
        text-align: center;
        width: 100%;
        height: 100vh;
    }
    .quiz_complete_user {
        /* margin: 0 auto; */
        display: flex;
        flex-direction: column;
        background: #fbe9e9;
        margin-top: 40px;
        margin-bottom: 30px;
        margin: 4px 0 30px 20px;
    }
    .fun {
        margin-right: 70px;
    }
    .quiz_complete img {
        width: 200px;
        height: 150px;
        margin-bottom: 20px;
    }
    .quiz_complete_content {
        margin-bottom: 20px;
        width: 1030px;
        height: 358.356px;
        background: #ffb648;
        font-weight: bold;
        font-size: 20px;
    }

    .quiz_complete_button {
        width: 120px;
        height: 40px;
        color: #fff;
        text-align: center;
        font-size: 16px;
        font-family: Inter;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        border-radius: 20px;
        background: #ff5c00;
        box-shadow: 0px 4px 4px quiz_complete_input rgba(0, 0, 0, 0.25);
        border: none;
    }
    .quiz_complete_button:hover {
        cursor: pointer;
    }
    .quiz_complete_count {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1030px;
        height: 35px;
        background: #ffb648;
        color: #fff;
        font-size: 30px;
        font-family: Inter;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 20px;
    }
    .kakao {
        width: 140px;
        height: 40px;
        border-radius: 10px;
        background: #fff500;
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
    }

    .home {
        width: 120px;
        height: 40px;
        color: #fff;
        text-align: center;
        font-size: 16px;
        font-family: Inter;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        border-radius: 20px;
        background: #ff5c00;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .quiz_complete_input_wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        /* height: 100vh; */
        background: #fbe9e9;
    }
    .quiz_complete_input {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 720px;
        /* height: 95px; */
    }
    .quiz_complete_input input {
        border-radius: 15px;
        background: #fff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border: none;
        padding: 10px;
        /* margin-left: 20px; */
    }
    .quiz_complete_input .quiz_comment {
        color: #999;
        box-shadow: none;
        background: #ffc582;
    }
}

.char,
.word {
    display: inline-block;
}
.splitting .char {
    animation: slide-in 1s cubic-bezier(0.17, 0.84, 0.4, 1.49) both;
    animation-delay: calc(30ms * var(--char-index));
}
[data-word='♬'] .char {
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
