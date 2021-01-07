import { useObserver } from 'mobx-react';
import * as React from 'react';
import { } from 'react';
import { userStore } from '../../store';

const Home = () => {
  console.log(userStore.data);
  return useObserver(() =>
    <div>
      하이 홈
    </div>
  )
};

export default Home;