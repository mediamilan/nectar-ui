/** @jsx React.DOM **/

/***** APPLICATION STEP 1 FORM *****/
var applistep2Form = React.createClass({
  render: function(){
    return (		
		<form>
			<div className="form-row">
				<label className="required-field">									
					<input type="text" className="type-text" placeholder="First name" required/>
				</label>
			</div>											
			
			<div className="form-row">
				<label>									
					<input type="text" className="type-text" placeholder="Middle name"/>
				</label>
			</div>
			
			<div className="form-row">
				<label className="required-field">									
					<input type="text" className="type-text" placeholder="Last name" required/>
				</label>
			</div>
			
			<div className="datePicker">
				<h3>Date of birth:</h3>
				<div className="selectTag_list">
					
					<div className="select-tag">										
						<div className="select-box required">
						   <select id="day_start" name="day_start">
								<option>Day</option>       
								<option>1</option>       
								<option>2</option>       
								<option>3</option>       
								<option>4</option>       
								<option>5</option>       
								<option>6</option>       
								<option>7</option>       
								<option>8</option>       
								<option>9</option>       
								<option>10</option>       
								<option>11</option>       
								<option>12</option>       
								<option>13</option>       
								<option>14</option>       
								<option>15</option>       
								<option>16</option>       
								<option>17</option>       
								<option>18</option>       
								<option>19</option>       
								<option>20</option>       
								<option>21</option>       
								<option>22</option>       
								<option>23</option>       
								<option>24</option>       
								<option>25</option>       
								<option>26</option>       
								<option>27</option>       
								<option>28</option>       
								<option>29</option>       
								<option>30</option>       
								<option>31</option>       
							</select>
						 </div>																			
					</div>
					
					<div className="select-tag">										
						<div className="select-box required">
							<select id="month_start" name="month_start"> 
								<option>Month</option>       
								<option>January</option>       
								<option>February</option>       
								<option>March</option>       
								<option>April</option>       
								<option>May</option>       
								<option>June</option>       
								<option>July</option>       
								<option>August</option>       
								<option>September</option>       
								<option>October</option>       
								<option>November</option>       
								<option>December</option>       
							</select>
						 </div>																			
					</div>
					
					<div className="select-tag">										
						<div className="select-box required">
							<select id="year_start" name="year_start">
								<option>Year</option>       
								<option>2009</option>       
								<option>2010</option>       
								<option>2011</option>       
								<option>2012</option>       
								<option>2013</option>       
								<option>2014</option>       
								<option>2015</option>       
								<option>2016</option>       
								<option>2017</option>       
								<option>2018</option>       
							  </select>
						 </div>																			
					</div>
					
				</div>
			</div>
			<h3>Identification</h3>
			<div className="form-row">								
				<div className="radio-box">									
					<input className="radio-input" type="radio" name="driverslicence" value="Drivers licence" checked/> Drivers licence
					 <div className="tooltip"> 									 
						  <span className="tooltipIcon"> ? </span>
						  <span className="tooltiptext">Tooltip text</span>
					</div>
				</div>
			</div>
			
			<div className="form-row">
				<label className="required-field">									
					<input type="text" className="type-text" placeholder="Number" required/>
				</label>
			</div>
			<div className="form-row">
				<label className="required-field">									
					<input type="text" className="type-text" placeholder="Version" required/>
				</label>
			</div>
			<div className="form-row">								
				<div className="radio-box">									
					<input className="radio-input" type="radio" name="passport" value="Passport"/> Passport
					 <div className="tooltip"> 									 
						  <span className="tooltipIcon"> ? </span>
						  <span className="tooltiptext">Tooltip text</span>
					</div>
				</div>
			</div>
			
			<div className="form-row">
				<label className="disabled-field">									
					<input type="text" className="type-text" placeholder="Number" disabled/>
				</label>
			</div>
			
			<div className="form-row">
				<label className="disabled-field date-picker">
					<input type="text" className="type-text" placeholder="Expiry" disabled/>
				</label>
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
	<applistep2Form />,
	document.getElementById('appliSetp3')
);