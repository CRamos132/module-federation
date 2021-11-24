import { lazy, useState, Suspense  } from 'react';
import './App.css';

const OtherComponent = lazy(async () => await import("app1/App"));

function App() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(oldState => oldState + 1);
  }
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent count={count} add={add} title='prop passed' />
      </Suspense>
    </div>
  )
}

export default App;
