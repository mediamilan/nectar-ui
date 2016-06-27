/** @jsx React.DOM **/

/***** LOGIN FORM *****/
var loginForm = React.createClass({
  render: function(){
    return (
		<form>
			<label><input type="email" className="type-text" placeholder="Email address"/></label>
			<label><input type="text" className="type-text" placeholder="Password"/></label>						
			<div className="button-row">
				<a className="forgotten" href="#" title="">Forgotten account?</a>
				<input type="submit fr" className="primary-drock-btn" value="Login" />							
			</div>
		</form>
	);
  }
});
var showLoginfrom = React.renderComponent(	
	<loginForm />,
	document.getElementById('loginForm')
);

/***** LOGIN FORM *****/
var sociallogin = React.createClass({
  render: function(){
    return (
		<ul className="social-login">
			<li><a href="" className="facebook-btn" title="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i><span>Sign in with Facebook</span></a></li>
			<li><a href="" className="twitter-btn" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i><span>Sign in with Twitter</span></a></li>
			<li><a href="" className="google-btn" title="Google"><i className="fa fa-google-plus" aria-hidden="true"></i><span>Sign in with Google</span></a></li>
			<li><a href="" className="linkedIn-btn" title="LinkedIn"><i className="fa fa-linkedin" aria-hidden="true"></i><span>Sign in with LinkedIn</span></a></li>
		</ul>
	);
  }
});
var showSociallogin = React.renderComponent(	
	<sociallogin />,
	document.getElementById('sociallogin')
);

/***** MODAL-POPUP *****/
var loginmodalPopup = React.createClass({
  render: function(){
    return (
		<div className="modal-content align-center">
			<h2 className="modal-title">Hi Joe,</h2>
			<p>It looks like you have an existing loan application in progress. Would you like to pick up that application where you left off?</p>
			<div className="modal-bottom">
				<a href="#" className="secondary-btn btn" title="No Thanks">No Thanks</a>
				<a href="#" className="primary-drock-btn btn" title="Yes">Yes</a>
			</div>
		</div>
	);
  }
});
var showloginmodalPopup = React.renderComponent(	
	<loginmodalPopup />,
	document.getElementById('login-msg')
);