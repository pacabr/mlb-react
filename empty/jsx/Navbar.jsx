var React = require('react');

var Navbar = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-dark navbar-fixed-top scrolling-navbar">

        <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapseEx">
            <i className="fa fa-bars"></i>
        </button>

        <div className="container">

            <div className="collapse navbar-toggleable-xs" id="collapseEx">
                <a className="navbar-brand waves-effect waves-light" href="#" target="_blank">MLB React</a>
                <ul className="nav navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Players</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Stats</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Scores</a>
                    </li>
                </ul>
                <form className="form-inline">
                    <input className="form-control" type="text" placeholder="Search" />
                </form>
            </div>

        </div>

    </nav>
		)
	}
})

module.exports = Navbar;