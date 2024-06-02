import Icon from "@/components/ui/icon";
import HeaderLogo from "../../ui/logo/header-logo";

import styles from "./index.module.css";
import InputSearch from "@/components/ui/input/search";

export default function Header() {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <InputSearch />
      <Icon color="white" bgColor="red">
        Login
      </Icon>
    </header>
  );
}
