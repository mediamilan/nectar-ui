/** @jsx React.DOM **/

/***** Login Modal POPUP *****/
var modallogin = React.createClass({
  render: function(){
    return (		
		<div className="modal-content align-center">
			<h2 className="modal-title">It looks like we know you already</h2>
			<p>Would you like to log in so we can help fill in your application?</p>
			<div className="modal-bottom">
				<a href="#" className="secondary-btn btn" title="No Thanks">No Thanks</a>
				<a href="#" className="primary-drock-btn btn" title="Yes">Yes</a>
			</div>
		</div>		
	);
  }
});

var stepform = React.renderComponent(	
	<modallogin />,
	document.getElementById('login-modal')
);