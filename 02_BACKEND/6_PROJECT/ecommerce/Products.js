import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { Card, Icon, Avatar,Row,Col,Pagination } from 'antd';
const { Meta } = Card;


function Products ({db,addProduct,pageChanged}){
     let pageSize =10;
      return(
        <div>
          {/* <button onClick={this.addProduct(p)}>Add</button> */}
        <Row>
            {db.products.slice((db.page-1)*pageSize,db.page*pageSize).map(p=> <Col span={6}><Card
            className='col-12'
      // style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src={p.image}
        />
      }
      actions={[<Icon type="plus" onClick={()=>{addProduct(p)}} />, <Icon type="edit" />, <Icon type="ellipsis" />]}
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={p.name}
        description={p.price}
      />
    </Card></Col>)}
    </Row>
    <Pagination defaultCurrent={1} total={db.products.length} onChange={(p)=>{pageChanged(p)}} ></Pagination>

    </div>
      )
     
  
  }

  export default Products;