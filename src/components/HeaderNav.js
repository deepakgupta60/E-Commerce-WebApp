import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/authSlice";

var HeaderNav = () => {
	const dispatch = useDispatch();
	const [search,setsearch] = useState();
	const cookieobj = new Cookies();
	const navigate = useNavigate();

	const {isLoggedIn,pname}=useSelector((state)=>
	{
		return state.auth
	})

	var onlogout=()=>
	{
		// setuserinfo(null);
		dispatch(logout());
		sessionStorage.clear();
		cookieobj.remove("usercookie");
		navigate("/login");
	}
	var searchprod=(e)=>
	{
		e.preventDefault();
		navigate(`/searchresults?s=${search}`);
	}
	return (
		<>
			<div className="agileits_header">
				<div className="container">
					<div className="w3l_offers">
						<p>Welcome&nbsp;{pname}</p>
					</div>
					<div className="agile-login">
						<ul>
							{
								isLoggedIn===false?//user logged in
								<>
									<li><Link to="/signup">Create Account</Link></li>
									<li><Link to="/login">Login</Link></li>
								</>://user has not logged in
								<>
									<li><Link to="/orderhistory">Order History</Link></li>
									<li><Link to="/changepassword">Change Password</Link></li>
									<li><button className="btn btn-primary" onClick={onlogout}>Logout</button></li>
								</>

							}
						</ul>
					</div>
					<div className="product_list_header">
							{
							isLoggedIn===true?
								<Link to="/showcart">
									<button className="w3view-cart" type="button" name="submit" value="">
										<i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
									</button>
								</Link>
							:null
							}
					</div>
					<div className="clearfix"> </div>
				</div>
			</div>

			<div className="logo_products">
				<div className="container">
					<div className="w3ls_logo_products_left1">
						<ul className="phone_email">
							<li><i className="fa fa-phone" aria-hidden="true"></i>Order online or call us : (+0123) 234 567</li>

						</ul>
					</div>
					<div className="w3ls_logo_products_left">
						<h1><Link to="/">super Market</Link></h1>
					</div>
					<div className="w3l_search">
						<form name="form1" method="post" onSubmit={searchprod}>
							<input type="search" onChange={(e)=>setsearch(e.target.value)} name="Search" placeholder="Search for a Product..." required="" />
							<button type="submit" className="btn btn-default search" aria-label="Left Align">
								<i className="fa fa-search" aria-hidden="true"> </i>
							</button>
							<div className="clearfix"></div>
						</form>
					</div>

					<div className="clearfix"> </div>
				</div>
			</div>
			<div className="navigation-agileits">
				<div className="container">
					<nav className="navbar navbar-default">
						<div className="navbar-header nav_2">
							<button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						</div>
						<div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
							<ul className="nav navbar-nav">
								<li><Link to="/">Home</Link></li>
								<li><Link to="/category">Products</Link></li>
								<li><Link to="/contactus">Contact</Link></li>

							</ul>
						</div>
					</nav>
				</div>
			</div>
		</>
	)

}
export default HeaderNav