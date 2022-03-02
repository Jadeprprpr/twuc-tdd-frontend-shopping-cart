import React from 'react';
import './index.css';


class ShoppingCart extends React.Component {
    render() {
        return (
            <div  className="wrapper">
                <div className="title">Shopping Cart</div>
                <table>
                    <thead>
                        <tr>
                            <th>商品名称</th>
                            <th>单价</th>
                            <th>数量</th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default ShoppingCart;
