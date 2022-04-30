import React from 'react'

function Header() {
  return (
    <section id="header">
        <div className="container-fluid">
            <div className="row">
                <div className="navbar-sec">
                    <div className="navbar-menu">
                       
                        <li>
                            <a href="/">Welcome</a>
                        </li>
                        <li>
                            <a href="/Allproducts">All Products</a>
                        </li>
                        <li>
                            <a href="/addproducts">Add Products</a>
                        </li>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header