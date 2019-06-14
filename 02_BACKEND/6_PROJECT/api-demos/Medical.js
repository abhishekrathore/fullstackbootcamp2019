import React from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Input,List,Button } from 'antd';
import Symptoms from './symptoms';
const Search = Input.Search;
const ButtonGroup = Button.Group;



class Medical extends React.Component{

 constructor(props){
    super(props)
    this.state ={}
 }

 componentDidMount(){
     this.getSymptoms();
 }

 getSymptoms(){
    console.log(Symptoms);
    this.setState({
       symptoms:Symptoms
    })
 }

 getDiagnosis(item){
    let url = "https://api.infermedica.com/v2/diagnosis";
    axios.post(url,{
      "sex": "male",
      "age": 30,
      "evidence": [
        {"id": item.id, "choice_id": "present"}
      ]
    },
    {
       headers:{
         "Content-Type": "application/json",
         "App-Key": "abcd",
         "App-Id":"0001"
       }
    }).then((res)=>{
       this.setState({
          interview:res.data
       })
    })
 }

 render(){
     return(
        <div>   <Search placeholder="input search text" onSearch={value => this.getDiagnosis(value)} enterButton />
        
        <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={this.state.symptoms}
      renderItem={item => <List.Item onClick={() => this.getDiagnosis(item)}>{item.name}</List.Item>}
    />

      </div>
     )
 }


}


function Interview(){

   return (
      <ButtonGroup>
      <Button type="primary">
        Go back
      </Button>
      <Button type="primary">
        Go forward
      </Button>
    </ButtonGroup>
   )
}



export default Medical;