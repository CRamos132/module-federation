import React from "react";
import "./App.css";
// import Button from "app2/Button";
//@ts-expect-error
import Content from "apzao/App";
// import styled from "styled-components";

function App() {
  const [count, setCount] = React.useState(45);
  const add = () => setCount(oldState => oldState + 1);
  return (
    <div className="App">
      This is app{count}
      <p>
        <a href='/destinox'>X</a>
        <a href='/destinoy'>Y</a>
        <a href='/qualquerurl/no/mundo'>Literalmente</a>
      </p>
      {/* <React.Suspense fallback="loading">
        <Button />
        <StyledButton />
      </React.Suspense> */}
      <React.Suspense fallback="loading">
        <Content title='foi?' count={count} add={add} />
      </React.Suspense>
    </div>
  );
}

// const StyledButton = styled(Button)`
//   color: blue;
// `;

export default App;
