import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const Table = ( {response, status}) => {
  return(
    <div>
      <BootstrapTable data={response} striped={true} hover={true} exportCSV={true} csvFileName="table-export" pagination >
        <TableHeaderColumn dataField="productGroup" width="100"  isKey={true}  dataSort={true} dataAlign="center">PRODUCT GROUP</TableHeaderColumn>
        <TableHeaderColumn dataField="effectiveDate" width="100"  dataAlign="center"  hidden={status} >Efective Date</TableHeaderColumn>
        <TableHeaderColumn dataField="created" width="100" dataAlign="center" hidden={status} >Created Date</TableHeaderColumn>
        <TableHeaderColumn dataField="createdBy" width="100" dataAlign="center" hidden={status} >Created By</TableHeaderColumn>
        <TableHeaderColumn dataField="version" width="100" dataSort={true} dataAlign="center" hidden={status}>Version</TableHeaderColumn>
        <TableHeaderColumn dataField="rangeGroupCount" width="100" dataSort={true} dataAlign="center">Range Group Count</TableHeaderColumn>
    </BootstrapTable>
    </div>
  );
};

export default Table;
