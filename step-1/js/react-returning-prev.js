/** @jsx React.DOM **/

/***** APPLICATION STEP 4 FORM *****/
var returningprev = React.createClass({
  render: function(){
    return (		
		<form>			
			<div className="form-row">
				<input type="checkbox" className="type-checkbox" name="borrow" value="borrow"/> Show me how much I can borrow
			</div>
			<h3>What is the loan for:</h3>
			<div className="form-row">
				<div className="select-tag">										
					<div className="select-box required">
					   <select>
						  <option>Please select</option>
						  <option>status 1</option>
						  <option>status 2</option>												  
						  <option>status 3</option>												  
						  <option>status 4</option>												  
						</select>
					 </div>																			
				</div>
			</div>
			
			<div className="form-row">
				<label className="disabled-field">									
					<input type="text" className="type-text" placeholder="Loan purpose (if other selected)" disabled/>
				</label>
			</div>							
			<div className="ssl-secure">
				<span className="ssl fr"><img src="images/ssl.png" alt="" width="100" height="73"/></span>
			</div>
			<h2>Or, if you would like to speak to customer care immediately, <a href="#" title="click here">click here.</a></h2>
			<div className="form-row center-align">
				<input type="submit" className="primary-drock-btn" value="Continue"/>
			</div>			
		</form>				
	);
  }
});

var stepform = React.renderComponent(	
	<returningprev />,
	document.getElementById('returning-prev')
);