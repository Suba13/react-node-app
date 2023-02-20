import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AdminselectItem, AdmindeleteItem } from '../actions/index';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Admin_ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: {}
        };
    }
    itemSelect(item) {
        this.state.newItem = item;
        this.setState({ newItem: this.state.newItem });
    }
    editItem(newItem) {
        this.props.AdminselectItem(newItem);
    }
    addItem() {
    }
    deleteItem(deleteItem) {
        this.props.AdmindeleteItem(deleteItem);
    }
    viewItem(editItem) {
        this.props.AdminselectItem(editItem);
    }
    AdminTable(adminItems){
        return (<table>
            <th></th>
            <th>Item Id</th>
            <th>Item Name</th>
            <th></th>
            <th>Price</th>
            {adminItems.map(row => {
                return this.AdminTableRow(row);
            })}
        </table>);
    };
    AdminTableRow(adminRow){
        return (
        <tr key={adminRow.id}>
            <td><input value={adminRow.id} type="radio" onClick={()=>this.itemSelect(adminRow)} ></input></td>
            <td>{adminRow.id}</td>
            <td>{adminRow.item} </td>
            <td><img src={adminRow.image} className="image" /></td>
            <td>{adminRow.price}</td>
        </tr>
        );
    };
    render() {
        return (
            <div>
        
                    <h1 className="adminItemHeading">CAFETERIA FOOD ITEMS</h1>
                <div>
                    <ul class="adminBtnLine">
                        <button className="adminBtnAlign"><Link to='/Add' onClick={()=>this.addItem()} >ADD</Link></button>
                        <button className="adminBtnAlign"><Link to="/Edit" onClick={()=>this.editItem(this.state.newItem)}>EDIT</Link>
                        </button>
                        <button className="adminBtnAlign"><Link to="/View" onClick={()=>this.viewItem(this.state.newItem)}>VIEW</Link>
                        </button>
                        <button  className="adminBtnAlign"><Link  to ="/admin-add-items" onClick={()=>this.deleteItem(this.state.newItem)}>DELETE
                        </Link></button>
                        <button  className="adminBtnAlign"><Link  to ="/admin-main-page" >BACK
                        </Link></button>
                    </ul>
                    {this.AdminTable(this.props.items.items)}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        items: state.adminAdd
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ AdminselectItem: AdminselectItem, AdmindeleteItem: AdmindeleteItem }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Admin_ItemList);