import React, { Component } from 'react';
import { connect } from "react-redux";
import employeeListAction from "../redux/actions/EmployeeList.js";
import staticData from '../staticdata/StaticData';
import { bindActionCreators } from 'redux'
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
 
  }
  componentWillMount(){
				this.props.employeeListAction(staticData.getListOfEmployees())
  }
  componentDidMount(){
			}
		
  render() {
		var employeeList=this.props.employeeList&&this.props.employeeList.data?this.props.employeeList.data:[];
		var tableHeader=[];
		var tableRows=[];
		var index=0;
		employeeList&&employeeList.length>0?employeeList.forEach((element,j)=>{
			tableRows.push(getTableRow(element,index));
			j++;

		}):"";
		if(employeeList&&employeeList.length>0){
			for(var key in employeeList[0]){
            if(key !="id"){
							tableHeader.push(getTableCell(key,index+"header"));
							j++;
						}
			}
		}
    return (
      <div className="home-page">
					<div className="table">
						<div className="row header">
						{tableHeader}
						</div>
					   {tableRows}
					</div>
			</div>
    );
  }
}


const mapStateToProps = redux => ({
 employeeList:redux.employeeList
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { employeeListAction:employeeListAction}, 
    dispatch 
  );

};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage) ;


function  getTableCell(data,index){
	return  <div key={index} className="table-cell">
					{data}
				</div>
}
function getTableRow(object,keyValue){
	var cells=[];
	Object.keys(object).forEach((key,index)=> {
		let value = object[key];
		if(key!="id")
		cells.push(getTableCell(value,keyValue+"_key_"+index));
	});
	return <div key={keyValue+"row"} className="row">{cells}</div>;
}