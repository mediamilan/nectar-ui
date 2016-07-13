/** @jsx React.DOM **/

/***** APPLICATION STEP 1 FORM *****/
var applistep1Form = React.createClass({
  render: function(){
    return (		
		<form>			
			<div className="form-row">
				<input type="checkbox" className="type-checkbox" name="borrow" value="borrow"/> Show me how much I can borrow
			</div>
			<h3>You are applying for:</h3>
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
			
			<div className="form-row">
				<label className="required-field">									
					<input type="email" className="type-text" placeholder="Email address" required/>
				</label>
			</div>
			
			<div className="form-row">
				<label className="required-field">									
					<input type="text" className="type-text" placeholder="Mobile number" required/>
				</label>
			</div>
			
			<div className="ssl-secure">
				<span className="ssl fr"><img src="images/ssl.png" alt="" width="100" height="73"/></span>
			</div>
			
			<div className="form-row center-align">
				<input type="submit" className="primary-drock-btn" value="Continue"/>
			</div>			
		</form>			
	);
  }
});

var stepform = React.renderComponent(	
	<applistep1Form />,
	document.getElementById('appliSetp1')
);