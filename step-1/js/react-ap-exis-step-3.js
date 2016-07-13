/** @jsx React.DOM **/

/***** APPLICATION STEP 3 FORM *****/
var apstepExis3Form = React.createClass({
  render: function(){
    return (
		<form>
			<div className="form-row">
				<label className="required-field">									
					<input type="text" className="type-text" placeholder="Weekly income after tax" required/>
				</label>
			</div>
			<div className="form-row">
				<div className="select-tag">										
					<div className="select-box required">
					   <select>
						  <option>Income type</option>
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
						  <option>When does your contract expire?</option>
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
					<div className="select-box disabled">
					   <select disabled>
						  <option>Type of employment?</option>
						  <option>1</option>
						  <option>2</option>												  
						  <option>3</option>												  
						  <option>4</option>				  
						</select>
					 </div>										 
				</div>
			</div>
			
			<div className="form-row">
				<div className="select-tag">										
					<div className="select-box required">
					   <select>
						  <option>How long have you worked there?</option>
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
						  <option>How long have you worked there?</option>
						  <option>3 Months</option>
						  <option>6 Months</option>
						  <option>8 Months</option>
						  <option>10 Months</option>
						  <option>12 Months</option>			  
						</select>
					 </div>										 
				</div>
			</div>
			<h4>Got a promotional code?</h4>
			<div className="form-row">
				<label>									
					<input type="text" className="type-text" placeholder="Enter promo code here"/>
				</label>
			</div>	
			
			<div className="form-row">
				<input type="checkbox" className="type-checkbox" name="Privacy Policy" value="privacyPolicy" checked/>I have read and agree to Nectar's <a>Privacy Policy</a>
			</div>
			
			<div className="submit_row form-row center-align">
				<a className="outline-btn" href="#" title="back">Back</a>
				<input type="submit" className="primary-drock-btn" value="Continue"/>
			</div>			
		</form>			
	);
  }
});

var exis3Form = React.renderComponent(	
	<apstepExis3Form />,
	document.getElementById('appSetp3')
);