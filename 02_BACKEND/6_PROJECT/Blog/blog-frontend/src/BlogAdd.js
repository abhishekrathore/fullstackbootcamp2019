import React from 'react';

import {Form,Input,Button} from 'antd';
import 'antd/dist/antd.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function BlogAdd(props){

  let title;
  let desc;
  let image;

  return <div>
    <Form>
           <Form.Item label="title" >
            <Input placeholder="input placeholder" onChange={(e)=>{title=e.target.value}}/>
          </Form.Item>
          <Form.Item label="description">
          <ReactQuill onChange={(value)=>{desc=value}} />
          </Form.Item>
          <Form.Item label="image">
            <Input placeholder="input placeholder" onChange={(e)=>{image=e.target.value}}/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={()=>{props.addBlog({title,desc,image})}}>Submit</Button>
          </Form.Item>

  </Form>


  </div>
}

export default BlogAdd;