import React from 'react'

function Footer() {
  return (
    <div className='card position-absolute bottom-0 w-100'>
        <nav className="navbar navbar-expand-sm bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-md">

                <img src="https://images-na.ssl-images-amazon.com/images/I/61PACBk46hL.png" alt="logo" width="80" height="80" />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarFooter">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarFooter">

                    <div className='d-flex flex-column col-lg-6 col-md-8 col-sm-10 ms-auto text-light'>
                        
                        <div className="d-flex flex-row p-2">
                            <div className="col-4 p-2">Resources</div>
                            <div className="col-4 p-2">Follow Us</div>
                            <div className="col-4 p-2">Legal</div>
                        </div>
                        <div className="d-flex flex-row p-2">
                            <div className="col-4 p-2">Home</div>
                            <div className="col-4 p-2">Github</div>
                            <div className="col-4 p-2">Privacy Policy</div>
                        </div>

                    </div>

                </div>

            </div>
        </nav>
    </div>
  )
}

export default Footer
