import React from 'react';

import { Card,Row,Col } from 'antd';
const { Meta } = Card;


function BlogDetail(props) {

    
   let blog = props.db.blogs.find( (blog)=>blog._id==props.match.params.id)


    return (
   
    <div>
        <Card
        hoverable
        style={{ width: "100%" }}
        cover={<img alt="example" src={blog.image} />}
        >
        <div dangerouslySetInnerHTML={{__html: blog.desc}} >
        </div>
    </Card>
    </div>)
   
}

export default BlogDetail;
