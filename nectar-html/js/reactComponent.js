/** @jsx React.DOM **/

/*************************/
	// TAB NAVIGATION
/***********************/
var tabnav = React.createClass({
	render: function(){
		return (
			<ul>
				<li><a className="selected" href="#applications-tab">Applications</a></li>
				<li><a href="#loan-status-tab">Loan Status</a></li>
				<li><a href="#profile-tab">Profile</a></li>
			</ul>
		);
	}
});
var renderComponentJSX = React.renderComponent(
	<tabnav />,
	document.getElementById('tab-nav')
);
/*************************/
	// TAB-PANE-HEAD
/***********************/
var rowbutton = React.createClass({
	render: function(){
		return (
			<a className="fr primary-drock-btn button" href="#">Proceed with offer</a>
		);
	}
});

var tabpanHead = React.createClass({
render: function(){
	return (			
		<div className="tab-pane-head">
			<ul className="fl">
				<li>Loan Application: N-123012</li>
				<li className="status">
					<i className="icon offer-made">
						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 64 64"><g id="tick.svg">
						<path className="cls-1" d="M1190.76,1178.95l-9.28-11.67a1.994,1.994,0,0,1,.31-2.79,1.966,1.966,0,0,1,2.78.31l6.52,8.2,20.17-20.29a1.956,1.956,0,0,1,2.79,0,2,2,0,0,1,0,2.81Z" transform="translate(-1166 -1134)"/>
					  </g></svg>
				</i>Status: offer made</li>			
			</ul>
			<rowbutton />
		</div>	
	);}
});
/*************************/
	// TAB-PANE-TABLE
/***********************/
var applicationsRow = React.createClass({
  render: function(){
    return ( <tr>
				<th>Date</th>
				<th>Loan Purpose</th>
				<th>Requested Amount</th>
				<th>Interest Rate</th>
				<th>Requested Term</th>
		   </tr> );}
});

var applicationsValRow = React.createClass({
  render: function() {
    var dateVal = this.props.application.date;      
    var loanPurposeVal = this.props.application.loanPurpose;      
    var requestedAmountVal = this.props.application.requestedAmount;      
    var interestRateVal = this.props.application.interestRate;      
    var requestedTermVal = this.props.application.requestedTerm;      
    return (
      <tr>
        <td>{dateVal}</td>
        <th>{loanPurposeVal}</th>
		<th>{requestedAmountVal}</th>
		<th>{interestRateVal}</th>
		<th>{requestedTermVal}</th>
      </tr>
    );
  }
});

var ProductTable = React.createClass({
  render: function() {	  
    var rows = [];    
    this.props.applications.forEach(function(application) {      
      rows.push(<applicationsValRow application={application} key={application.application} />);      
    });
    return (
      <table className="table">        
        <tbody><applicationsRow />{rows}</tbody>
      </table>
    );
  }
});

var FilterableProductTable = React.createClass({
  render: function() {
    return (
      <div className="tab-pane-table">   
		<tabpanHead />
        <ProductTable applications={this.props.applications} />
      </div>
    );
  }
});

var APPLICATIONS = [
  {date: '10 Apr 2016', loanPurpose: 'Holiday', requestedAmount:'4.99%', interestRate:'4.99%', requestedTerm:'12 months'}  
]; 


var productsTable = React.renderComponent(
	<FilterableProductTable applications={APPLICATIONS} />,
	document.getElementById('pane-group-1')
);
/********** END APPLICATIONS TAB ****************/

/********** START LOANS TAB ****************/
