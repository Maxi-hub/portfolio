import { useSelector } from 'react-redux';
import './App.css';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Title } from './components/Title';


function App() {
  const theme = useSelector(state => state.theme);

  return (
    <div className={`${theme}`}>
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
