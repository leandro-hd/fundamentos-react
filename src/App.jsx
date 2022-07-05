import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
            author="Leandro Dias"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe numquam ipsum aperiam maiores incidunt sed vel. Optio ad quos unde! Tempora accusamus laboriosam asperiores fugit nesciunt adipisci nostrum eius?"
          />
          <Post
            author="Godofredo José"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vitae ratione et rerum. Voluptates delectus quod corrupti nostrum ex libero, neque laborum facilis nihil aliquam reiciendis, quisquam obcaecati quibusdam saepe?"
          />
        </main>
      </div>
    </div>
  )
}

export default App
