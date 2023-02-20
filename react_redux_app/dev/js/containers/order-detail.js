import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { store } from '../index';
import '../components/admin.css';
import {CompletedOrderStatus} from '../actions/index';
import { bindActionCreators } from 'redux';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */
class Order_detail extends Component {

    Change_Order_Status(order)
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

    componentDidMount() {
        const value = fetch('http://localhost:3001/Orders/' + this.props.match.params.id).then(
            data =>
                ({
                    type: "ORDERED_ITEM",
                    payload: data.json()
                }),
            error => console.log(error));

        store.dispatch(
            value
        );
    };
    TableRow(row) {
        console.log(row);
        return (
            
               
            <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.item}</td>
                <td><img className="img_size" src={row.image}/></td>
                <td>{row.price}</td>
                 <td>{row.quantity}</td>
            </tr>
            
        )
    };

    Table(items) {
        return (<table>
            <th>S.no</th>
            <th>Food-Items</th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            {items.map(row => {
                return this.TableRow(row);
            })}
        </table>);
    };

    render() {
        if (!this.props.item) {
            return (<div>Select a order...</div>);
        }
        return (
            <div>
                 <div>
            <header>
                    <Link to ="/admin-main-page"><button>Back</button></Link>
                    <div className="title">Cafe</div>
                        <div className="Admin_name">Admin Name:Sundaram</div>
                    </header>
                <div className="sub-title">List of Items</div>
                </div>
                <h2>USERNAME:{this.props.item.name}</h2>
                <h2>QUANTITY: {this.props.item.Totalquantity}</h2>
                <h2>TOTALAMOUNT: {this.props.item.totalAmount}</h2>
               <Link to ="/admin-main-page"> <button className="order_details_completed_but" onClick={()=>this.Change_Order_Status(this.props.item)}>Completed</button></Link>
                {this.Table(this.props.item.Orderitems)}
              

            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        item: state.orderItem
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ CompletedOrderStatus:CompletedOrderStatus}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Order_detail);
