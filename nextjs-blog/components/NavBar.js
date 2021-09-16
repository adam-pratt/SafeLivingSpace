import Link from 'next/Link';

export default function NavBar() {
    return(
      <div>
        <ul>
          <li><Link href="/who-we-are"><a>WHO WE ARE</a></Link></li>
          <li><Link href="/what-we-do"><a>WHAT WE DO</a></Link></li>
          <li><Link href="/"><a>RESOURCES</a></Link></li>
          <li><Link href="/get-involved"><a>GET INVOLVED</a></Link></li>
          <li><Link href="/contact-us"><a>CONTACT US</a></Link></li>
        </ul>
        <style jsx>{`
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0 0 0 0;
          }

          li {
            font-weight: 250;
            color: #222222;
            letter-spacing: 1px;
            font-size: 18px;
            display: inline;
            padding: 0 20px 0 20px;
            font-weight: 400;
          }

          a {
            text-decoration: none;
            color: #777777;
          }

          a:hover {
              color: #973494 
          }
          `}</style>
      </div>
    )
  }
