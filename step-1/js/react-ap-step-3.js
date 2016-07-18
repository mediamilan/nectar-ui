/** @jsx React.DOM **/

/***** APPLICATION STEP 3 FORM *****/
var applistep3Form = React.createClass({
  render: function(){
    return (		
		<form>
			<div className="form-row">
				<label className="required-field">									
					<input type="text" className="type-text" placeholder="Address" required/>
				</label>
			</div>
			
			<div className="form-row">
				<div className="select-tag">										
					<div className="select-box required">
					   <select>
						  <option>Your residential status</option>
						  <option>status 1</option>
						  <option>status 2</option>
						  <option>status 3</option>
						  <option>status 4</option>
						  <option>status 5</option>				  
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
					<div className="select-box disabled">
					   <select disabled>
						  <option>How long at previous address?</option>
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
				<label className="required-field">									
					<input type="text" className="type-text" placeholder="Number of dependents" required/>
				</label>
				<div className="tooltip"> 									 
					  <span className="tooltipIcon"> ? </span>
					  <span className="tooltiptext">Tooltip text</span>
				</div>
			</div>
			
			<div className="form-row">
				<div className="select-tag">										
					<div className="select-box required">
					   <select>
						  <option>Are you a NZ citizen or permanent resident?</option>
						  <option>NZ Citizen</option>
						  <option>Permanent Resident</option>
						</select>
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

var stepform = React.renderComponent(	
	<applistep3Form />,
	document.getElementById('appliSetp3')
);