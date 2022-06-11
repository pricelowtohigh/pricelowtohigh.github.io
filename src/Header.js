import React from "react";

function Header() {
    return (
    <header className="jumbotron bg-light">
        <div className="container-fluid">
          <h1 className="display-4 text-center">Price: Low to High</h1>
          <div className="container">
            <div>
              <nav className=" navbar navbar-expand-lg bg-light">
                <a class="nav-link" aria-current="page" href="/">Home</a>
                <a class="nav-link" href="/paintings">Paintings</a>
                <a class="nav-link" href="/">Something else eventually, for right now also Home</a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;