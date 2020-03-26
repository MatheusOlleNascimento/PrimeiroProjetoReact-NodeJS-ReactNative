import React from 'react';
import Routes from './routes';
import './global.css';

//React precisa ser importado sempre que o arquivo trabalhar com JSX
//JSX:Um HTML está escrito dentro do javascript (Javascript XML)

//Componente: Uma função que retorna HTML podendo ter funcionalidades JS / CSS

//Componente estático não é alterado em nenhuma página:
//Ex: Header.js = function Header() { return (<header><h1>Texto</h1></header>) ;}
//Ex: App.js = function App() { return (<Header/>) ;}

//Propriedade de componente com props: (Para o titulo ser dinâmico em cada página):
//Ex: Header.js = function Header(props) { return (<header><h1>{props.title}</h1></header>) ;}
//Ex: App.js = function App() { return (<Header title="Semana OmniStack"/>) ;}

//Propriedade de componente com children: (Para o titulo ser dinâmico em cada página):
//Ex: Header.js = function Header({children}) { return (<header><h1>{children}</h1></header>) ;}
//Ex: App.js = function App() { return (<Header>Semana OmniStack</Header> ) ;}

//No React não é possível colocar elementos sem ter nada em volta
//Ex: divs

//No React nunca se deve manupular a variável do estado, precisa-se sobrepor
//Método useState: retorna um Array com duas posições [valor, funcaoDeAtualizacao]
//[] em uma variável de armazenamento desestrutura um array
//Ex: let [counter, setCounter] = useState(0);
//  setCounter(counter + 1);

//Estado: Sempre que um componente precisa guardar uma informação nele mesmo se aplica o conceito de estado
//Ex: Através da funcaoDeAtualizacao de uma variável

function App() {
  return (
    <Routes />
  );
}

export default App;
