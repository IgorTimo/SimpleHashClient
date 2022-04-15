import Link from "next/link";
import { Menu } from "semantic-ui-react";

const Header = (props) => {
  return (
    <Menu style={{marginTop: "20px"}}>
      <Link href="/">
        <a className="item">Главная</a>
      </Link>
      <Link href="/post">
        <a className="item">Захэшировать</a>
      </Link>
      <Link href="/get">
        <a className="item">Загрузить по хэшу</a>
      </Link>
    </Menu>
  );
};

export default Header;
