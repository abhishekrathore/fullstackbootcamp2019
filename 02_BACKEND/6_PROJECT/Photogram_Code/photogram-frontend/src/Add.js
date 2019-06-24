import React from 'react';
import 'antd/dist/antd.css';

import { Form,Input,Button } from 'antd';


function Add(props) {
    let title;
    let desc;
    let image;

    return (<div> 
       <Form>
       <Form.Item label="Title">
          <Input placeholder="Title" id="title" onChange={(e)=>{title=e.target.value}} />
        </Form.Item>
        <Form.Item label="Description"> 
          <Input placeholder="Description" id="desc" onChange={(e)=>{desc=e.target.value}}  />
        </Form.Item>
        <Form.Item label="Image">
          <Input placeholder="Image" id="image" onChange={(e)=>{image=e.target.value}} />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" onClick={()=>{props.savePhoto({image,desc,title})}}>
            Submit
          </Button>
        </Form.Item>
       </Form>
    </div>)
   
}

export default Add;
