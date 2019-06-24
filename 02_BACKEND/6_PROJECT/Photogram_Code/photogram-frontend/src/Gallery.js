import React from 'react';
import 'antd/dist/antd.css';

import { Card,Row,Col } from 'antd';
const { Meta } = Card;



function Gallery(props) {
    return (<div>
    <Row gutter={16}>

      {props.db.photos.map( (photo)=>  <Col span={6}><Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={photo.image} />}
  >
    <Meta title={photo.title} description={photo.desc} />
  </Card></Col>)}
  </Row>
      
    </div>)
   
}

export default Gallery;
