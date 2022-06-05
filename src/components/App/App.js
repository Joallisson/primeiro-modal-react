import './App.css';
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#root');

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const modalIsOpen = true;

  function handleOpenModel(){
    setIsOpen(true);
  }

  function handleCloseModel(){
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      width: "400px",
      height: '200px',
      margin: 'auto',
      //Para saber mais sobre a estilização do model, procura na documentação
    }
  }

  return (
    <div id='container'>

      <button onClick={handleOpenModel}>
        Modal
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModel}
        style={customStyles}
      >
        <h2>Hello World</h2>
        <button onClick={handleCloseModel}> Close Modal </button>
        <div>I am a Modal</div>

        <form action='https://www.google.com' method='get'>
          <input type='number'/>
          <button>Ir pro google</button>
        </form>
      </Modal>

    </div>
  );
    
    
}

export default App;
