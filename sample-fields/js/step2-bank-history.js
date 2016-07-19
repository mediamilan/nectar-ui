/** @jsx React.DOM **/

/***** step2-bank-history *****/
var bankhistory = React.createClass({
  render: function(){
    return (
			<div className="bank-history-container">
				<div className="flex-row">
					<div className="flex-col">
						<div className="content-area">
							<h2 className="big-title">Verifiy your income and expenses</h2>
							<p>To simplify this process we use Credit Sense using their secure bank grade technology. </p>
							<p>After you have read the terms start by selecting your bank account. You will be able to review your offer before finalising your application. </p>
							</div>
						<form>
							<div className="form-row radio-box">
								<input type="radio" className="radio-input" name="bankhistorymanually" value="bank history manually"/><span>I'm not in a hurry and would rather send my bank history manually.</span>
							</div>
							<div className="form-row radio-box">
								<input type="radio" className="radio-input" name="notlisted" value="not listed"/><span>My bank is not listed.</span>
							</div>
						</form>								
					</div>
					
					<div className="flex-col">
						<div className="iFrame-col">
							<img src="images/iFrame.jpg" alt="" border="0" />
							<div className="ssl-secure">
								<span className="ssl fr"><img src="images/ssl.png" alt="" width="100" height="73"/></span>
							</div>
						</div>
					</div>
				</div>
		</div>	
	);
  }
});

var stepform = React.renderComponent(	
	<bankhistory />,
	document.getElementById('bankhistory')
);