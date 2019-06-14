import React from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Input,List } from 'antd';
const Search = Input.Search;

class Books extends React.Component{

 constructor(props){
    super(props)
     this.state = {};
 }

 componentDidMount(){
   //   this.getBooks();
 }

 
searchBooks(search){
   var url = 'http://openlibrary.org/search.json?title='+search;

   axios.get(url+"&q="+search)
   .then((res)=>{
      console.log(res.data.docs)
    this.setState({
        titles : res.data.docs
    })
   })
}

showBook(item){
  console.log(item);

  var url = 'http://openlibrary.org/books.json?bibkeys=ISBN:='+item.popular;

  
}

 render(){
     return(
        
        <div>    <Search placeholder="input search text" onSearch={value => this.searchBooks(value)} enterButton />
        
        <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={this.state.titles}
      renderItem={item => <List.Item onClick={() => this.showBook(item)}>{item.title_suggest} <div><a href={`https://openlibrary.org/${item.key}`}>Link</a></div></List.Item>}
    />

      
       </div>
       
     )
 }


}

export default Books;