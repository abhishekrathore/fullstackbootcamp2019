import React from 'react';
import News from './News';
import Medical from './Medical';
import Books from './Books';

class App extends React.Component{

  constructor(props){
    super(props)

  }
  
  getBooks


  render(){
    return (
      <div>
        <News/>
        {/* <Books/> */}
        {/* <Medical>
          
        </Medical> */}
      </div>
      );
  }
  
}

export default App;
