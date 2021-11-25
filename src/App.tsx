import React from "react";
import "./App.css";
// import Button from "app2/Button";
//@ts-expect-error
import Content from "apzao/App";
import styled from "styled-components";

interface ToastProps {
  showToast: boolean;
}

const Toast = styled.div<ToastProps>`
  position: absolute;
  bottom: 10px;
  right: 10px;
  height: 100px;
  width: 300px;
  background-color: aquamarine;
  padding: 32px;
  opacity: ${props => props.showToast ? 1 : 0};
  transition: opacity 1s;
`

function App() {
  const [count, setCount] = React.useState(45);
  const [showToast, setShowToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");
  const add = () => setCount(oldState => oldState + 1);
  const activateToast = (text: string) => {
    setShowToast(true);
    setToastMessage(text)
    setTimeout(() => setShowToast(false), 5000);
  }
  return (
    <div className="App">
      This is app{count}
      {/* <button onClick={activateToast}>Bora</button> */}
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
        <Content title='foi?' count={count} add={add} activateToast={activateToast} />
      </React.Suspense>
      <Toast showToast={showToast} >
        {toastMessage}
      </Toast>
    </div>
  );
}

// const StyledButton = styled(Button)`
//   color: blue;
// `;

export default App;
