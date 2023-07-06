import Vue from 'vue';
import VueRouter from 'vue-router';
import MainComponent from '../views/MainView.vue';
import LoginComponent from '../views/LoginView.vue';
import SignUpComponent from '../views/SignUpView.vue'
import SignUpCompleteComponent from '../views/SignUpComplete.vue'
import StartComponent from '../views/StartView.vue'
import QuizComponent from '../views/QuizView.vue'
import CorrectComponent from '../views/Correct.vue'
Vue.use(VueRouter);

// 라우트 정보
// 라우팅을 해주면서 #을 제거해주면서, path에 입력한 경로에 매핑된 컴포넌트를 보여준다.
 
// Vue 라우터 인스턴스 생성
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
          path: '/main',
          name:"main",
          component: MainComponent,
        },
        {
          path: '/login',
          name:"login",
          component: LoginComponent,
        },
        {
          path: '/signUp',
          name:"signUp",
          component: SignUpComponent,
        },
        {
          path: '/signUpComplete',
          name:"signUpComplete",
          component: SignUpCompleteComponent,
        },
        {
          path: '/start',
          name:"start",
          component: StartComponent,
        },
        {
          path: '/quiz',
          name:"quiz",
          component: QuizComponent,
        },
        {
          path: '/correct',
          name:"correct",
          component: CorrectComponent,
        }
        // 추가 경로 및 컴포넌트 설정
      ],
});

export default router;