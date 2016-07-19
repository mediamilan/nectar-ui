/** @jsx React.DOM **/

/***** step2-holding-bank-success *****/
var bankSuccess = React.createClass({
  render: function(){
    return (
		<div className="bankSuccess-msm">
			<div className="content-area">
				<h2 className="big-title">Success!</h2>
				<p>We've successfully received your bank statements. You can contiue with your loan application process.</p>
			</div>
			<div className="form-row butonRow">
				<a href="#" className="primary-drock-btn" title="Continue">Continue</a>
			</div>	
		</div>	
	);
  }
});

var stepform = React.renderComponent(	
	<bankSuccess />,
	document.getElementById('bankSuccess')
);