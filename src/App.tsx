import React from 'react';
import './App.css';
import { ThemeProvider } from './context/theme/ThemeProvider';
import { ContentCard } from './components/contentCard/ContentCard';
import biker from './assets/images/biker.png';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ContentCard
          imageUrl={biker}
          headline="Live Your Life Now"
          body="After MitraClip, you can resume usual activity
                        immediately. Recovery from OHS takes months."
          button={{
            text: 'Get the Process Started',
            onClick: () => console.log('hello')
          }}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
