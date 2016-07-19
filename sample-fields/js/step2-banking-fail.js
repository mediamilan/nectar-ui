/** @jsx React.DOM **/

/***** step2-banking-fail *****/
var bankingfail = React.createClass({
  render: function(){
    return (
		<div className="bankSuccess-msm">
			<div className="content-area">
				<h2 className="big-title">There is a problem with the automated banking history.</h2>
				<p>That's fine, we'll just proceed with a manual banking history instead. This may take a little longer.</p>
				<p>You can scan or take a digital photo of your bank statements, and upload those here.</p>
			</div>
			<div className="uploadForm application-form">
				<form>							
					<div className="form-row">
						<label className="file-field">		
							<span className="field-lbl">Choose file</span>
							<input type="file" className="type-text" placeholder="Choose file"/>
						</label>
						<div className="tooltip"> 									 
						  <span className="tooltipIcon"> ? </span>
						  <span className="tooltiptext">Upload up 10 10 files Format: pdf, jpg, png Size limit: 5MB</span>
						</div>
					</div>
					
					<div className="form-row uploaded_list">
						<p><strong>Please include all pages from all of your transactional bank accounts, for a period covering the last 3 months.</strong></p>
						<ul>
							<li>
								<a href="#" title="Uploaded File">bank-statement-march.pdf</a>
								<a href="#" className="close_icon" title="Close">Close</a>
							</li>
							<li>
								<a href="#" title="Uploaded File">bank-statement-april.pdf</a>
								<a href="#" className="close_icon" title="Close">Close</a>
							</li>
							<li>
								<a href="#" title="Uploaded File">bank-statement-may.pdf</a>
								<a href="#" className="close_icon" title="Close">Close</a>
							</li>
						</ul>
					</div>
					
					<div className="form-row">
						<input type="submit" className="primary-drock-btn" value="Submit"/>
					</div>	
				</form>
			</div>						
		</div>	
	);
  }
});

var stepform = React.renderComponent(	
	<bankingfail />,
	document.getElementById('bankingfail')
);