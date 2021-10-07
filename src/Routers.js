import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
  } from "react-router-dom";
  
  import "bootstrap/dist/css/bootstrap.min.css";
  import Product from "./list";
  import Add from "./add";
  import Edit from "./editproduct";
  import Home from "./home";
  import Load from "./loadproduct";
  
  export default function Routes(props) {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <div className="nav-link">
                  <NavLink to="/" activeClassName="active" exact>
                    home
                  </NavLink>
                </div>
                <div className="nav-link">
                  <NavLink to="/product" activeClassName="active" exact>
                    Product
                  </NavLink>
                </div>
                <div className="nav-link">
                  <NavLink to="/product/add" activeClassName="active">
                    Add Product
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/product" exact>
            <Product {...props} />
          </Route>
          <Route path="/product/add">
            <Add onAdd={props.onAdd} />
          </Route>
          <Route path="/product/edit/:id">
            <Edit onUpdate={props.onUpdate} />
          </Route>
          <Route path="/product/detail/:id">
            <Load />
          </Route>
        </Switch>
      </Router>
    );
  }
  