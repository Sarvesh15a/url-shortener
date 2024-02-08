const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-light text-muted" style={{ marginTop: "40vh" }}>
        {/* Section: Social media */}
        <section className="flex justify-center justify-between p-4 border-b">
          {/* Left */}
          <div className="me-5 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}

          {/* Right */}
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links */}
        <section className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8">
            {/* Grid column */}
            <div className="mb-4">
              {/* Content */}
              <h6 className="text-uppercase font-bold mb-4">
                <i className="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">Angular</a>
              </p>
              <p>
                <a href="#!" className="text-reset">React</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Vue</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Laravel</a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Help</a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </section>
        {/* Section: Links */}

        {/* Copyright */}
        <div className="text-center py-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © 2024 Copyright:
          <a className="font-bold text-reset" href="https://github.com/Sarvesh15a/URL-Shortner.git">Sarvesh Kumar Yadav(URL Shortner)</a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  )
}

export default Footer
