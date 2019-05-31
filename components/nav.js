import React from "react";
import Link from "next/link";

const links = [
  { href: "https://github.com/guildatech/", label: "GitHub" },
  { href: "https://t.me/guildatech", label: "Telegram" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a className="logo">
            Guilda<strong>Tech</strong>
          </a>
        </Link>
      </li>
      <ul className="network-links">
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #e9b625;
        text-decoration: none;
        font-size: 13px;
      }
      a.logo {
        color: #000;
        font-weight: 700;
      }
      a.logo strong {
        font-weight: 700;
        color: #e9b625;
        border-bottom: 2px solid black;
      }
      a.logo::after,
      .network-links a::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background: #000;
        transition: width 0.8s;
      }

      a.logo:hover::after,
      .network-links a:hover::after {
        width: 100%;
      }
    `}</style>
  </nav>
);

export default Nav;
