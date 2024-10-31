import './App.css';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Title } from './components/Title';


function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Title />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
