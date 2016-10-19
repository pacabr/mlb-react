var React = require('react');
// var bootstrap = require('./bootstrap');
// var mdb = require('./mdb');
var Navbar = require('./Navbar');
var Card = require('./Card');

var App = React.createClass({
  render: function() {
    return (
      <div>
      	<Navbar></Navbar>
      	<section className="section">

		    <h1 className="section-heading">Our best projects</h1>
		    <p className="section-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

		    <div className="row">

		        <div className="col-md-6 m-b-r">
		        	<Card
			      		image="http://i.imgur.com/PO65vpi.jpg"
			      		projectTitle="Play Ball"
			      		projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!.">
			      	</Card>

		        </div>

		        <div className="col-md-6 m-b-r">
		        	<Card
			      		image="http://i.imgur.com/PO65vpi.jpg"
			      		projectTitle="Play Ball2"
			      		projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!.">
			      	</Card>
		        </div>

		    </div>
	    </section>
      	


      </div>
    )
  }
});

module.exports = App;
