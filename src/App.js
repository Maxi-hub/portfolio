import { useSelector } from 'react-redux';
import './App.css';
import { Education } from './components/Education';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Title } from './components/Title';
import { Experience } from './components/experience/Experience';
import { Footer } from './components/Footer';
import { About } from './components/About';


function App() {
  const theme = useSelector(state => state.theme);

  return (
      <div className={`${theme}`}>
        <Header />
        <Title />
        <Experience />
        <Education />
        <Skills />
        <About />
        <Footer />
      </div>
  );
}

export default App;
