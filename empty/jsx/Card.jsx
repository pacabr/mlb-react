var React = require('react');

var Card = React.createClass({
	render: function() {
		return(
			<div className="card-overlay" style={{backgroundImage: 'url(' + this.props.image + ')'}}>

			    <div className="white-text text-xs-center">
			    	<div className="card-block">
						<h5 className="teal-text"><i className="fa fa-pie-chart"></i> Marketing</h5>
			            <h3>{this.props.projectTitle}</h3>
			            <p>{this.props.projectSummary}</p>
			            <a className="btn btn-lg btn-white-outline"><i className="fa fa-clone left"></i> View project</a>
			    	</div>
			    </div>



			</div>
		)
	}
})

module.exports = Card;