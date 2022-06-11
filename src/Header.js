import React from "react";

function Header() {
    return (
    <header className="jumbotron bg-light">
        <div className="container-fluid text-black">
          <h1 className="display-4 text-center">Price: Low to High</h1>
          <nav class="navbar navbar-expand-lg bg-light align-center">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Click on of these to Go to a certain part of my website:</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/paintings">Paintings</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Something else eventually</a>
                    </li>
                </ul>
                </div>
            </div>
          </nav>
        </div>
      </header>
    )
}

export default Header;