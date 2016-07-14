/** @jsx React.DOM **/

/***** APPLICATION STEP 4 FORM *****/
var referForm = React.createClass({
  render: function(){
    return (		
		<form>
			<div className="cc-notification">
				<h3>A customer care operator has been notified and will contact you on <strong>021 123 45</strong> shortly to discuss.</h3>
			</div>						
			<div className="cc-notification">
				<h3>We are currently outside of our normal business hours. Please select the best time for a customer care operator to call your back on <strong>021 123 456.</strong></h3>								
				<div className="form-row">								
					<label className="date-picker">
						<input type="text" className="type-text" placeholder="Date"/>
					</label>
					
					<div className="select-tag">										
						<div className="select-box">
						   <select>
							  <option>Time window</option>
							  <option>status 1</option>
							  <option>status 2</option>												  
							  <option>status 3</option>												  
							  <option>status 4</option>												  
							</select>
						 </div>																			
					</div>
				</div>
			</div>
			<div className="form-row butonRow">
				<input type="submit" className="primary-drock-btn" value="Go to dashboard"/>
			</div>										
		</form>			
	);
  }
});

var stepform = React.renderComponent(	
	<referForm />,
	document.getElementById('referForm')
);