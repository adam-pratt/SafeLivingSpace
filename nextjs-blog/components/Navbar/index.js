
export default function NavBar() {
    return(
      <div className='nav-container'>
        <ul>
          <li><a href="http://safelivingspace.org/who-we-are">WHO WE ARE</a></li>
          <li><a href="http://safelivingspace.org/what-we-do">WHAT WE DO</a></li>
          <li><a href="http://safelivingspace.org/tools">RESOURCES</a></li>
          <li><a href="http://safelivingspace.org/get-involved">GET INVOLVED</a></li>
          <li><a href="http://safelivingspace.org/contact-us">CONTACT US</a></li>
        </ul>
        <style jsx>{`

          .nav-container {
            margin-top: auto;
            margin-right: 200px;
            margin-bottom: 6px;
          }

          ul {
            list-style-type: none;
            margin: 0;
            padding: 0 0 0 0;
          }

          li {
            font-weight: 250;
            color: #222222;
            letter-spacing: 1px;
            font-size: 20px;
            display: inline;
            padding: 0 20px 0 20px;
            font-weight: 400;
          }

          a {
            text-decoration: none;
            color: #777777;
          }

          a:hover {
              color: #370F7A;
          }
          @media only screen and (max-width: 1400px) {
            .nav-container {
              display: none;
            }
          }

          @media only screen and (max-width: 1670px) {
            .nav-container {
              margin-right: 0px;
              margin-bottom: 0px;

            }
            li {
              font-size: 18px;
            }
          }
        `}</style>
      </div>
    )
  }
