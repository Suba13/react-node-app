import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {CompletedOrderStatus} from '../actions/index';
import '../components/admin.css';

class OrderList extends Component {

    constructor(props) {
        super(props);
        this.state = { orders:[] };
    } 
    Change_Order_Status (order)
    {
        const data = {
                id:order.id,
                name: order.name,
                totalAmount: order.totalAmount,
                Totalquantity: order.Totalquantity,
                OrderStatus:"completed",
                Orderitems: order.Orderitems
            }
        this.props.CompletedOrderStatus(data);
    }
    componentDidMount (){
        fetch('http://localhost:3001/Orders')
  .then((response) => response.json())
  .then((data) => {
   return this.setState({orders: data.Orders})
  })
    }
    render() {
        return (
            <div>
                <header>
                <div className="Admin_back"><Link className="admin_name_color" to ="/">Logout</Link></div>
                    <div className="title">Cafe</div>
                        <div className="Admin_name"><Link className="admin_name_color" to ="/admin-add-items">List Items</Link></div>
                        
                    </header>
                <div className="sub-title">List of orders</div>
              
                    <table>

                        <th>S.No</th>
                        <th>Name</th>
                        <th>TotalAmount</th>
                        <th>Totalquantity</th>
                        <th>Status</th>



                        {this.props.item.Orders.map((order) => {
                            if(order.OrderStatus=="pending")
                            return (
                                <tr>
                                    <td>{order.id}</td>
                                    <td>{order.name}</td>
                                    <td>{order.totalAmount}</td>
                                    <td>{order.Totalquantity}</td>
                                    <td>{<Link to={`/admin-view/${order.id}`}> <button className="view-buttuon" > view  </button></Link>}
                                    <button  className="view-buttuon" onClick={()=>this.Change_Order_Status(order)}>Completed</button></td>
                                    
                                </tr>




                            );
                        })}
                    </table>
               

            </div>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        item: state.adminItem
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ CompletedOrderStatus:CompletedOrderStatus}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(OrderList);