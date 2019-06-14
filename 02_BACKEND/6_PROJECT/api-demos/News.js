import React from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { List, Avatar, Icon } from 'antd';
const Search = Input.Search;

const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

class News extends React.Component{

constructor(props){
    super(props)
    this.state = {}
}

componentDidMount(){
    this.getNews();
}

getNews(){

    var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=ffc1fbd7698249d2ae2ea1945ab44b45';

    axios.get(url)
    .then((res)=>{
       console.log(res.data.articles)
     this.setState({
         articles : res.data.articles
     })
    })

}

searchNews(search){
    var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=in&' +
    'apiKey=ffc1fbd7698249d2ae2ea1945ab44b45';

    axios.get(url+"&q="+search)
    .then((res)=>{
       console.log(res.data.articles)
     this.setState({
         articles : res.data.articles
     })
    })
}


render(){
    return (
        <div>
    <Search placeholder="input search text" onSearch={value => this.searchNews(value)} enterButton />

            <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={this.state.articles}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText type="star-o" text="156" />,
          <IconText type="like-o" text="156" />,
          <IconText type="message" text="2" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src={item.urlToImage}
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.url}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
        </div>
    )
}    


}

export default News;