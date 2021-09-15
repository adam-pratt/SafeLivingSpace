import Link from 'next/Link';

export default function NavBar() {
    return(
      <div>
        <ul>
          <li><Link href="/who-we-are"><a>Who We Are</a></Link></li>
          <li><Link href="/"><a>What We Do</a></Link></li>
          <li><Link href="/"><a>Resources</a></Link></li>
          <li><Link href="/"><a>Get Involved</a></Link></li>
          <li><Link href="/"><a>Contact Us</a></Link></li>
        </ul>
        <style jsx>{`
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0 0 0 0;
          }

          li {
            font-size: 24px;
            display: inline;
            letter-spacing: -0.5px;
            padding: 0 20px 0 20px;
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
