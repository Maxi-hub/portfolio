import './App.css';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
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
      <Projects />
    </div>
  );
}

export default App;
