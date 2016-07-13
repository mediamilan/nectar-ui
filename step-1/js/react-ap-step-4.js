/** @jsx React.DOM **/

/***** APPLICATION STEP 4 FORM *****/
var applistep4Form = React.createClass({
  render: function(){
    return (		
		<form>													
			<div className="form-row">
				<div className="select-tag">										
					<div className="select-box required">
					   <select>
						  <option>Weekly income after tax</option>
						  <option>option 1</option>
						  <option>option 2</option>
						  <option>option 3</option>
						  <option>option 4</option>
						  <option>option 5</option>				  
						</select>
					 </div>																			
				</div>
			</div>
			
			<div className="form-row">
				<div className="select-tag">										
					<div className="select-box required">
					   <select>
						  <option>Income type</option>
						  <option>type 1</option>
						  <option>type 2</option>
						  <option>type 3</option>
						  <option>type 4</option>
						  <option>type 5</option>				  
						</select>
					 </div>																			
				</div>
			</div>
			
			<div className="form-row">
				<div className="select-tag">										
					<div className="select-box disabled">
					   <select disabled>
						  <option>When does your contract expire?</option>
						  <option>type 1</option>
						  <option>type 2</option>
						  <option>type 3</option>
						  <option>type 4</option>
						  <option>type 5</option>				  
						</select>
					 </div>																			
				</div>
			</div>
			
			<div className="form-row">
				<div className="select-tag">										
					<div className="select-box disabled">
					   <select disabled>
						  <option>Type of employment?</option>
						  <option>type 1</option>
						  <option>type 2</option>
						  <option>type 3</option>
						  <option>type 4</option>
						  <option>type 5</option>				  
						</select>
					 </div>																			
				</div>
			</div>
			
			<div className="form-row">
				<div className="select-tag">										
					<div className="select-box disabled">
					   <select disabled>
						  <option>How long have you been at this employer?</option>
						  <option>type 1</option>
						  <option>type 2</option>
						  <option>type 3</option>
						  <option>type 4</option>
						  <option>type 5</option>				  
						</select>
					 </div>																			
				</div>
			</div>
			
			<div className="form-row">
				<div className="select-tag">										
					<div className="select-box disabled">
					   <select disabled>
						  <option>How long at previous employer ?</option>
						  <option>type 1</option>
						  <option>type 2</option>
						  <option>type 3</option>
						  <option>type 4</option>
						  <option>type 5</option>				  
						</select>
					 </div>																			
				</div>
			</div>	
			
			<h3>Got a promotional code?</h3>
			<div className="form-row">
				<label>									
					<input type="text" className="type-text" placeholder="Enter promo code here"/>
				</label>
			</div>
			
			<div className="submit_row form-row center-align">
				<a className="outline-btn" href="#" title="back">Back</a>
				<input type="submit" className="primary-drock-btn" value="Get started"/>
			</div>			
		</form>				
	);
  }
});

var stepform = React.renderComponent(	
	<applistep4Form />,
	document.getElementById('appliSetp4')
);