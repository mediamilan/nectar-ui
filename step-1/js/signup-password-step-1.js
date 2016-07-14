/** @jsx React.DOM **/

/***** signup-password-step-1 *****/
var signupPassword = React.createClass({
  render: function(){
    return (		
		<form>
			<div className="confirm-email">
				<div className="form-row">
					<label className="required-field">									
						<input type="text" className="type-text" placeholder="paul@nectar.co.nz" required=""/>
					</label>
				</div>						
				<div className="form-row">
					<label className="required-field">									
						<input type="text" className="type-text" placeholder="Confirm email address" required=""/>
					</label>
				</div>
			</div>
			<div className="flex-row confirm-password">
				<div className="flex-col-6">
					<ul className="social-login">
						<li><a href="" className="facebook-btn" title="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i><span>Sign in with Facebook</span></a></li>
						<li><a href="" className="twitter-btn" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i><span>Sign in with Twitter</span></a></li>
						<li><a href="" className="google-btn" title="Google"><i className="fa fa-google-plus" aria-hidden="true"></i><span>Sign in with Google</span></a></li>
						<li><a href="" className="linkedIn-btn" title="LinkedIn"><i className="fa fa-linkedin" aria-hidden="true"></i><span>Sign in with LinkedIn</span></a></li>
					</ul>			
				</div>
				<div className="flex-col-6">
					<div className="form-row checkboxField">
						<input type="checkbox" className="type-checkbox" name="Privacy Policy" value="privacyPolicy" checked=""/>
						<span>I would like to create a Nectar password instead of using a third-party authenticator</span>
					</div>
					<div className="form-row">
						<h3 className="password-strength">									
							<label id="password-strength" className="password-strength"></label>
						</h3>
					</div>
					
					<div className="form-row">
						<label><input type="password" className="type-text" placeholder="Confirm password"/></label>
					</div>
				</div>					
			</div>	
			<div className="buttonRow">
				<input type="submit" className="primary-drock-btn fr" value="Submit" />	
			</div>
			<div className="clear"></div>
			<div className="form-row checkboxField marginTop">
				<input type="checkbox" className="type-checkbox" name="Privacy Policy" value="privacyPolicy" checked=""/><span>I have read and agree to Nectar's  <a href="#" title="Privacy Policy"> Privacy Policy</a></span>
			</div>
		</form>			
	);
  }
});

var stepform = React.renderComponent(	
	<signupPassword />,
	document.getElementById('signupPassword')
);