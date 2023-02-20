import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AdminaddItems } from '../actions/index';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export class ItemAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addItem: {}
        };
    }
    Change(event) {
        let addItem= this.state.addItem;
        let name = event.target.name;
        let value = event.target.value;

        addItem[name] = value;
        this.setState({addItem})
    }

    render() {
        return (
            <div className="adminDivAlign">
               
                    <h2 className="adminAddHeading">Add Item </h2>
                    <p>Id:<input type="text" className="AdminAddMargin1"  name="id" onChange={(e)=>this.Change(e)} ></input></p>
                    <p>Item Name:<input type="text" className="AdminAddMargin2"  name="item" onChange={(e)=>this.Change(e)} >
                    </input></p>
                    <p>Price : <input type="text"  className="AdminAddMargin3"  name="price" onChange={(e)=>this.Change(e)} >
                    </input></p>
                    <p>Item Image: <input type="text" className="AdminAddMargin4"  name="image" onChange={(e)=>this.Change(e)}>
                    </input></p>
                    <button type="button" className="adminBtnAlign"  onClick={()=>this.props.AdminaddItems(this.state.addItem)}>
                    <Link to ="/admin-add-items" >Save</Link></button>
                {/* </form> */}
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
    return bindActionCreators({ AdminaddItems: AdminaddItems }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(ItemAdd);