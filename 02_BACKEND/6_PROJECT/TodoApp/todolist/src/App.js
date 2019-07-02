import React from 'react';
import './App.css';
import 'papercss/dist/paper.css';
import axios from 'axios';

function App(){
  return <Todolist list={[]}></Todolist>
}

class Todolist extends React.Component{
  constructor(props){
    super(props)
    this.state= {};
    this.state.list = props.list;
 

  }

  componentDidMount(){
    this.getData()
  }

  changeStatus(item){
     let i =this.state.list.indexOf(item);
     let l = this.state.list;
     l[i].status = !l[i].status;

     axios.put("http://localhost:8080/tasks/"+l[i]._id,l[i]).then(
     (res)=>{console.log(res.data)
     
    }
   ) 


     this.setState(
       {list:l}
     )
     console.log(this.state.list)

  }

  getData(){
   axios.
   get("http://localhost:8080/tasks")
   .then((res)=>
   {console.log(res.data)
      this.setState(
        {list:res.data}
      )
   }
  ) 
   
  }

  getList(){

    let list = [];
    for(let item of this.state.list){
      list.push(<li onClick={(e)=>{this.changeStatus(item)}} className={item.status?'paper-btn btn-block btn-success':'paper-btn btn-block'}>{item.title}</li>)
    }
  return list;
  }

  getValue(e){
    console.log(e.target.value)
    this.setState({
      newItem:e.target.value
    })
  }

  setValue(e){
   let l = this.state.list;
   let newItem = {title:this.state.newItem,status:false}
   console.log(l);

   axios.post("http://localhost:8080/tasks",newItem).then(
    (res)=>{console.log(res.data)


      l.push(res.data);
      console.log(l);
      this.setState(
        {list: l,newItem:""}
     )
   }
  ) 


  

  
   
  }

  render(){
    return (<div>
      <div className="row flex-center">
          <input onChange={(e)=>{this.getValue(e)}} type="text" value={this.state.newItem}></input>
      </div>
      <div className="row flex-center">
      <button onClick={(e)=>{this.setValue(e)}}>Add</button>
      </div>
      <ul>
       { this.getList()}
      </ul>
    </div>)
  }
}



export default App;
