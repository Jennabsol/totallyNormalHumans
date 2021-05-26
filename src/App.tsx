import './App.css';

import { ContentCard } from './components/contentCard/ContentCard';
import { ThemeProvider } from './context/theme/ThemeProvider';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <>
          <ContentCard
            imageUrl="https://freesvg.org/img/robot.png"
            headline="Live Your Human Life Now"
            body="Trust me! I am a totally normal human!"
            button={{
              text: 'Human not Robot',
              onClick: () => console.log('beep boop')
            }}
          />
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
