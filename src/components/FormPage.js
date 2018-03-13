import React , { Component } from 'react';
import Form from './Form';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import moment from 'moment';
import * as constant from './constants/constants';

class FormPage extends Component {

  constructor(props){
      super(props);
      this.selectDate = this.selectDate.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);

      this.state = {
        store: '',
        productGroup: '',
        effectiveDate: '',
        rangeClass: '',
        documentType: '',
        rangeType: '',
        response: [],
        data: []
  };
}

selectDate(selectedDate){
  this.setState({
    effectiveDate: selectedDate
  });
}

handleChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  });
}

handleSubmit(){
  let store = this.state.store;
  let mgps = this.state.productGroup;
  let effectiveDate = moment( this.state.effectiveDate).format('YYYY-MM-DD');
  let rangeClass = this.state.rangeClass;
  let documentType = this.state.documentType.toLowerCase();
  let rangeType = this.state.rangeType;

  if(effectiveDate === constant.INVALID_DATE){
    effectiveDate = moment().format('YYYY-MM-DD');
  }
let mgp;



//let baseUrl = constant.BASE_URL;
let baseUrl = 'http://demo3855336.mockable.io';

let url = '';

store === '' ? url = baseUrl : url = baseUrl +'/' + store;

let mgpList = mgps.split(',');
if(mgpList.length > 0){
  for(let i=0;i<mgpList.length;i++){
    mgpList[i] === '' ? url : url = url + '/mgps/' + mgpList[i];
    documentType !== '' ? url = url + '/' + documentType : url;
    rangeClass !== '' ? url = url + '?' + rangeClass : url;
    rangeType !== '' ? url = url + '?' + rangeType : url;
    effectiveDate !== null ? url = url + '?effectiveDate=' + effectiveDate : url ;
    fetch(url,{
      method: 'GET',
    })
    .then(response => response.json())
    .then( response => this.setState({response}));
    url = baseUrl;
  }
 }
}

  render(){
    return(
      <div>
        <Form
            selectDate={this.selectDate}
            submitFormData={this.handleSubmit}
            handleChange= {this.handleChange}
          />
        <BootstrapTable data={this.state.response} striped={true} hover={true} exportCSV={true} csvFileName="table-export" pagination>
          <TableHeaderColumn dataField="productGroup" width="150%" isKey={true}  dataSort={true} dataAlign="center">PRODUCT GROUP</TableHeaderColumn>
          <TableHeaderColumn dataField="effectiveDate" width="150%" dataSort={true} dataAlign="center">Efective Date</TableHeaderColumn>
          <TableHeaderColumn dataField="created" width="150%" dataAlign="center">Created Date</TableHeaderColumn>
          <TableHeaderColumn dataField="createdBy" width="150%" dataAlign="center">Created By</TableHeaderColumn>
          <TableHeaderColumn dataField="version" width="150%" dataSort={true} dataAlign="center">Version</TableHeaderColumn>
      </BootstrapTable>
      </div>
    );
  }
}

export default FormPage;
