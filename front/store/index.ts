import { observable, action } from 'mobx';

export interface User {
  email: string,
  password: string,
  enabled: boolean,
  name: string,
  profilePic: string | null,
  signFrom: string,
  authOk: boolean,
}

interface UserStore {
  isLoggingIn: boolean,
  data: User | null,
  logIn: (data: User) => void,
  logOut: () => void,
}

const userStore = observable<UserStore>({
  isLoggingIn: false,
  data: null,
  // mobx에서 화살표함수 쓰면 this를 못 씀, 따라서 화살표 함수 사용할 경우 this.말고 그대로 userStore 써줘야함
  logIn: action((data: User) => { //mobx에서 action이 필수는 아니지만 mobx state 바꾸는 함수들은 action으로 감싸주는게 편함, 디버깅이 편리하고 비동기 문제로 state가 바뀌지 않는 버그가 종종 발생함
    userStore.isLoggingIn = true; // mobx state
    userStore.data = data;
    userStore.isLoggingIn = false;
  }),
  logOut: action(() => {
    userStore.data = null;
  }),
});

export { userStore };
