/** @jsx React.DOM **/

/***** APPLICATION STEP 1 FORM *****/
var applistep1Form = React.createClass({
  render: function(){	  
    return (		
		<form>				
			<div className="form-row">
				<input type="checkbox" className="type-checkbox" name="borrow" value="borrow"/> Show me how much I can borrow
			</div>
			<h3>Please confirm your contact details</h3>
			<div className="form-row">
				<label>
					First name
					<input type="text" className="type-text" placeholder="paul@nectar.co.nz" />
				</label>
			</div>
			<div className="form-row">
				<label>
					Address
					<input type="text" className="type-text" placeholder="99 Jones St, Mt Eden, Auckland 1010" />
				</label>
			</div>
			
			<div className="form-row">
				<label>
					Mobile Number
					<input type="text" className="type-text" placeholder="021 234 567" />
				</label>
			</div>
			<div className="ssl-secure">
				<span className="ssl fr"><img src="images/ssl.png" alt="" width="100" height="73"/></span>
			</div>
			
			<div className="form-row center-align">
				<input type="submit" className="primary-drock-btn" value="Continue" />
			</div>			
		</form>			
	);
  }
});

var stepform = React.renderComponent(	
	<applistep1Form />,
	document.getElementById('appliSetp1')
);