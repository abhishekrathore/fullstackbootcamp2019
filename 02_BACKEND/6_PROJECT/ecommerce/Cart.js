import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import { List, Avatar } from 'antd';


function Cart({db,changeQuantity}){

    return (
        <div>
        <List
        changeQuantity={changeQuantity}
        itemLayout="horizontal"
        dataSource={db.cart}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={<a href="https://ant.design">{item.name}</a>}
              description={item.price}
            />
                            <div>
                                <select onChange={(e)=>{changeQuantity(item,e)}}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                </select>
                            </div>

          </List.Item>
        
        )}
      /> 
       <h2>Total : {db.cart.reduce((sum,item)=>sum+item.price*item.quantity,0)}</h2>
      
       </div>
    )
}

export default Cart;