export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section id="social" className="contact-section bg-black">
        <div className="container">

          {/*TODO: get font awesome icons working*/}

          <div className="social d-flex justify-content-center">
            <a href="http://twitter.com/dxeverywhere" className="mx-2" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="http://facebook.com/directactioneverywhere" className="mx-2" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="http://instagram.com/directactioneverywhere" className="mx-2" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

        </div>
      </section>

    <footer className="bg-black small text-center text-white-50">
      <div className="container">
        {/*TODO: get date working*/}
        Copyright &copy; Direct Action Everywhere {currentYear}
      </div>
    </footer>
    </>
  )
}