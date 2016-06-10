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
/******************/
// START ALERT DOM
/*********************/
var applyAlertDom = React.createClass({
render: function(){
	return(
		<div className="alertDom-head">
			<ul className="fl">
				<li>You currently have no in-progress applications with Nectar.</li>
			</ul>
			<a className="fr primary-drock-btn button" href="#">Apply Now</a>
		</div>
		);
	}
});

var loanAlertDom = React.createClass({
render: function(){
	return(
		<div className="alertDom-head">
			<ul className="fl">
				<li>You currently have no loan with Nectar</li>
			</ul>
			<a className="fr primary-drock-btn button" href="#">Apply Now</a>
		</div>
		);
	}
});

var rowbutton = React.createClass({
	render: function(){
		return (
			<a className="fr primary-drock-btn button" href="#">Proceed with offer</a>
		);
	}
});

var apptabpanHead = React.createClass({
render: function(){
	return (			
		<div className="tab-pane-head">		
			<applyAlertDom />
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
        <td>{loanPurposeVal}</td>
		<td>{requestedAmountVal}</td>
		<td>{interestRateVal}</td>
		<td>{requestedTermVal}</td>
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
		<apptabpanHead />
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

/***** loan-status ****/
var loanstatusList = React.createClass({
  render: function(){   
    return (
		<div className="loan-status">
		  <ul>
			<li>
				<span className="loan-amount">$5,000</span>
				<span>Loan Amount</span>
				<span className="small-text">$4.99% Interest Rate</span>
			</li>
			<li>
				<span className="loan-amount">15.06.16</span>
				<span>Next Payment Date</span>										
			</li>
			<li>
				<span className="loan-amount">$280</span>
				<span>Next Payment Amount</span>										
			</li>
			<li>
				<span className="loan-amount">$4,200</span>
				<span>Outstanding Balance</span>										
			</li>
		</ul>
	</div>
    );
  }
});

var loansRowbutton = React.createClass({
	render: function(){
		return (
			<a className="fr primary-drock-btn button" href="#">Apply for top-up</a>
		);
	}
});

var loanstabpanHead = React.createClass({
	render: function(){
		return ( <div className="tab-pane-head">	
					<loanAlertDom />
					<ul className="fl">
						<li className="select-tag">										
							<div className="select-box">
							   <select>
								  <option>Select Period</option>
								  <option>January 2016</option>
								  <option>February 2016</option>
								  <option>March 2016</option>
								  <option>April 2016</option>
								  <option>May 2016</option>
								</select>
							 </div>																			
						</li>									
						<li>10 Jan 2016 - 10 Feb 2016</li>				
					</ul>
				<loansRowbutton />
			</div>	
		);
	}
});

/*************************/
	// TAB-PANE-TABLE
/***********************/
var loansHeadRow = React.createClass({
  render: function(){
    return ( <tr>
			<th>Date</th>
			<th>Transaction</th>
			<th>Amount</th>
			<th>Outstanding Balance</th>											
		</tr> );}
});

var loansValRow = React.createClass({
  render: function() {
    var loandateVal = this.props.loansdetail.date;      
    var loantransaction = this.props.loansdetail.transaction;      
    var loanTAemount = this.props.loansdetail.loanemount;      
    var loansoutBalance = this.props.loansdetail.outBalance;
    return (
      <tr>
        <td>{loandateVal}</td>
        <td>{loantransaction}</td>
		<td>{loanTAemount}</td>
		<td>{loansoutBalance}</td>		
      </tr>
    );
  }
});

var loansTable = React.createClass({
  render: function() {	  
    var rows = [];    
    this.props.loansdetails.forEach(function(loansdetail) {      
      rows.push(<loansValRow loansdetail={loansdetail} key={loansdetail.loansdetail} />);      
    });
    return (
      <table className="table">        
        <tbody><loansHeadRow />{rows}</tbody>
      </table>
    );
  }
});

var filterableLoanTable = React.createClass({
  render: function() {
    return (
      <div className="tab-pane-table"> 
		<loanstatusList />
		<loanstabpanHead />
        <loansTable loansdetails={this.props.loansdetails} />
      </div>
    );
  }
});

var LOANSDETAILS = [
  {date: '10 Feb 2016', transaction: 'Closing Balance', loanemount:'', outBalance:'$4,200'},
  {date: '05 Feb 2016', transaction: 'Interest', loanemount:'+ $20', outBalance:'$4,920'},
  {date: '13 Jan 2016', transaction: 'Advance', loanemount:'+ $500', outBalance:'$4,900'},
  {date: '12 Jan 2016', transaction: 'Repayment', loanemount:'+ $100', outBalance:'$4,400'},
  {date: '10 Jan 2016', transaction: 'Opening Balance', loanemount:'', outBalance:'$4,500'}
];

var loansTableContainer = React.renderComponent(	
	<filterableLoanTable loansdetails={LOANSDETAILS} />,
	document.getElementById('pane-group-2')
);
/**************************/

/**********************/
	// PROFILE TAB
/**********************/
var profileTab = React.createClass({
  render: function() {
    return (
      <div className="form-tag">
		<form>
			<div className="form-row">
				<div className="select-tag selectSex">										
					<div className="select-box">
					   <select>
						  <option>Mr</option>
						  <option>Mrs</option>												  
						</select>
					 </div>																			
				</div>
			</div>
			
			<div className="form-row">
				<div className="form-col">
					
					<label>
						First name
						<input type="text" className="type-text"/>
					</label>
					
					<label>
						Middle name
						<input type="text" className="type-text"/>
					</label>
					<label>
						Last name
						<input type="text" className="type-text"/>
					</label>
					<div className="label-row">
						<label>
							Email address
							<input type="email" className="type-text"/>													
						</label>
						<span className="verified"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 64 64"><g id="tick.svg">
							<path className="cls-1" d="M1190.76,1178.95l-9.28-11.67a1.994,1.994,0,0,1,.31-2.79,1.966,1.966,0,0,1,2.78.31l6.52,8.2,20.17-20.29a1.956,1.956,0,0,1,2.79,0,2,2,0,0,1,0,2.81Z" transform="translate(-1166 -1134)"/>
						  </g></svg> Verified</span>
					</div>
					<label>
						Mobile number
						<input type="text" className="type-text"/>
					</label>											
					<label>
						Date of birth
						<input type="text" className="type-text"/>
						<span className="calendar-icon"></span>
					</label>											
				</div>										
				<div className="form-col">
					<label>
						Address
						<input type="text" className="type-text"/>
					</label>
					<label>
						Town / City
						<input type="text" className="type-text"/>
					</label>
					<label>
						Postcode
						<input type="text" className="type-text"/>
					</label>
					
					<div className="button-row">
						<a href="#">Change password</a>
						<input type="submit" className="primary-drock-btn" value="Save" />
					</div>
				</div>										
			</div>
		</form>
	</div>
    );
  }
});

var profileForm = React.renderComponent(	
	<profileTab />,
	document.getElementById('pane-group-3')
);
/**************************************/

/****************************/
/* START MOBILE VIEW TAB */
/*****************************/

var responsAllTable = React.createClass({
  render: function(){
    return (
		<table className="table">
			<tbody>
				<tr>
					<th>Date</th>
					<td>10 Apr 2016</td>
				</tr>
				<tr>
					<th>Loan Purpose</th>
					<td>Holiday</td>	
				</tr>
				<tr>
					<th>Requested Amount</th>
					<td>$2,000</td>		
				</tr>
				<tr>
					<th>Interest Rate</th>
					<td>4.99%</td>	
				</tr>
				<tr>
					<th>Requested Term</th>
					<td>12 months</td>
				</tr>												
			</tbody>									
		</table>
	 );
  }
});

var responsTabGroup = React.createClass({
  render: function(){
    return (
		<ul>
			<li className="tab-row">
				<h2>
					<a href="#applications_tab" title="Applications" className="res-tab-link toggled">
						<span>Applications</span>
						<i className="fa fa-angle-up active" aria-hidden="true"></i>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</a>
				</h2>
				<div id="applications_tab" className="tab-content open-tab">
					<div className="pane-group">
						<apptabpanHead />
						<div className="tab-pane-table">
							<responsAllTable />
							<div className="bottom-row"><rowbutton /></div>
						</div>
					</div>
				</div>
			</li>
			<li className="tab-row">
				<h2>
					<a href="#loan_status_tab" title="Loan Status" className="res-tab-link">
						<span>Loan Status</span>
						<i className="fa fa-angle-up" aria-hidden="true"></i>
						<i className="fa fa-angle-down active" aria-hidden="true"></i>
					</a>
				</h2>
				<div id="loan_status_tab" className="tab-content">
					<div className="pane-group">
					<loanstatusList />
					<loanstabpanHead />
					<table className="table mobileLoanTable">
						<tbody>
							<tr>
								<td><span>10 Feb 2016</span></td>
								<td><span>$4,200</span><span>Closing Balance</span></td>
							</tr>
							<tr>
								<td><span>05 Feb 2016</span><span>+ $20</span><span>Interest</span></td>
								<td><span>$4,920</span></td>
							</tr>
							<tr>
								<td><span>13 Jan 2016</span><span>+ $500</span><span>Advance</span></td>
								<td><span>$4,900</span></td>
							</tr>
							<tr>
								<td>
									<span>12 Jan 2016</span>
									<span>+ $100</span>
									<span>Repayment</span>
								</td>
								<td>
									<span>$4,400</span>
									
								</td>
							</tr>
							<tr>
								<td>
									<span>10 Jan 2016</span>								
								</td>
								<td>
									<span>$4,500</span><span>Opening Balance</span>
								</td>
								</tr>
							</tbody>									
						</table>
						<div className="bottom-row"><loansRowbutton /></div>
					</div>
				</div>
		   </li>
			<li className="tab-row">
				<h2>
					<a href="#profile_tab" title="Profile" className="res-tab-link">
						<span>Profile</span>
						<i className="fa fa-angle-up" aria-hidden="true"></i>
						<i className="fa fa-angle-down active" aria-hidden="true"></i>
					</a>
				</h2>
				<div id="profile_tab" className="tab-content">
					<div className="pane-group">
						<profileTab />
					</div>
				</div>
			</li>
		</ul>
	 );
  }
});

var momViewTabGroup = React.renderComponent(	
	<responsTabGroup />,
	document.getElementById('mobileResponseTab')
);