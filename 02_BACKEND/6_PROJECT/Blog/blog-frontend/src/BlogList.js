import React from 'react';
import 'antd/dist/antd.css';
import { Card,Row,Col } from 'antd';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

const { Meta } = Card;




function BlogList(props) {
    return (<div>
    <Row gutter={16}>

 {props.db.blogs.map( (blog)=>  <Col span={6}><Link to={`/blogdetail/${blog._id}`}><Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={blog.image} />}>
    <Meta title={blog.title} />
     </Card></Link></Col>
  )}
  </Row>
     )
      
    </div>)
   
}

export default BlogList;
