import React from "react";

function App() {
  // Fiz um formulário que coleta seu nome e exibe em um h1
  // Primeiro app react ever, com certeza dá para melhorar
  // 
  // Fonte utilizadas:
  // https://cs50.harvard.edu/web/2020/notes/6/#react
  // https://pt-br.reactjs.org/docs/forms.html
  
  const [name, setName] = React.useState('World')

  function updateName(e) {
    setName(e.target.previousSibling.value ? e.target.previousSibling.value : 'World')
    e.target.parentElement.reset()
    e.preventDefault()
  }

  return (
    <form>
      <h1>Hello {name}!</h1>
      <label htmlFor="name">Your name:</label>
      <input className="form-control mt-2" id="name" placeholder="Ex: John Doe"></input>
      <input type="submit" className="btn btn-primary mt-2" onClick={updateName} value="Send"></input>
    </form>
  );
}

export default App;
