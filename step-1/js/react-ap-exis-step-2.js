/** @jsx React.DOM **/

/***** APPLICATION STEP 2 FORM *****/
var apstepExis2Form = React.createClass({
  render: function(){
    return (
		<form>
			<div className="form-row">
				<div className="select-tag">										
					<div className="select-box required">
					   <select>
						  <option>Your residential status</option>
						  <option>status 1</option>
						  <option>status 2</option>												  
						  <option>status 3</option>												  
						  <option>status 4</option>												  
						</select>
					 </div>																			
				</div>
			</div>
			<div className="form-row">
				<div className="select-tag">										
					<div className="select-box required">
					   <select>
						  <option>How long have you lived there?</option>
						  <option>3 Months</option>
						  <option>6 Months</option>
						  <option>8 Months</option>
						  <option>10 Months</option>
						  <option>12 Months</option>				  
						</select>
					 </div>																			
				</div>
			</div>
			<div className="form-row">
				<div className="select-tag">										
					<div className="select-box required">
					   <select>
						  <option>Relationship status</option>
						  <option>status 1</option>
						  <option>status 2</option>												  
						  <option>status 3</option>												  
						  <option>status 4</option>				  
						</select>
					 </div>																			
				</div>
			</div>
			<div className="form-row tooltip-sms">
				<div className="select-tag">										
					<div className="select-box required">
					   <select>
						  <option>Number of dependents</option>
						  <option>1</option>
						  <option>2</option>												  
						  <option>3</option>												  
						  <option>4</option>				  
						</select>
					 </div>	
					 <div className="tooltip"> 									 
					  <span className="tooltipIcon"> ? </span>
					  
					  <span className="tooltiptext">Tooltip text</span>
					</div>
				</div>
			</div>
			<div className="submit_row form-row center-align">
				<a className="outline-btn" href="#" title="back">Back</a>
				<input type="submit" className="primary-drock-btn" value="Continue"/>
			</div>			
		</form>			
	);
  }
});

var exis2Form = React.renderComponent(	
	<apstepExis2Form />,
	document.getElementById('appSetp_2')
);