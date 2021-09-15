import Link from 'next/Link';

export default function NavBar() {
    return(
      <div>
        <ul>
          <li><Link href="/who-we-are"><a>Who We Are</a></Link></li>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/"><a>Home</a></Link></li>
        </ul>
        <style jsx global>{`
          ul {
            list-style-type: none;
            margin: 0;
          }

          li {
            font-size: 24px;
            display: inline;
            padding: 0 10px 0 10px;
          }

          a {
            color: #777777
          }
          `}</style>
      </div>
    )
  }
