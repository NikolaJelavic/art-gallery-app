import Link from "next/link";
import styled from "styled-components";

const NavBar = styled.ul`
  display: flex;
  flex-flow: row wrap;
  position: fixed;
  bottom: 0px;
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  text-transform: uppercase;
  border-top: 0.5px solid white;
  z-index: 99;
  padding: 13px;
  height: 50px;
  font-weight: 800;
  list-style-type: none;
`;

// const NavBar = styled.li`

export default function Navigation() {
  return (
    <NavBar>
      <li>
        <Link href="/">SpotlightPage</Link>
      </li>
      <li>
        <Link href="/art-pieces">Art Pieces</Link>
      </li>
      <li>
        <Link href="/favorites">Favorites</Link>
      </li>
    </NavBar>
  );
}
