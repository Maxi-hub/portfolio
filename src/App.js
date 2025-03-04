import { useSelector } from 'react-redux';
import './App.css';
import { Header } from './components/Header';
import { Skills } from './components/skills/Skills';
import { Title } from './components/Title';
import { About } from './components/About';
import { Projects } from './components/projects/Projects';
import { Footer } from './components/Footer';


function App() {
  const theme = useSelector(state => state.theme);

  return (
    <div className={`${theme}`}>
      <Header />
      <Title />
      <Projects />
      <About />
      <Skills />
      <Footer />
     </div>
  );
}

export default App;
