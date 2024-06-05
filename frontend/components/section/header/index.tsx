import Icon from "@/components/ui/button";
import HeaderLogo from "../../ui/logo/header-logo";

import styles from "./index.module.css";
import InputSearch from "@/components/ui/input/search";
import Button from "@/components/ui/button";

export default function Header() {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <InputSearch />
      <Button color="white" bgColor="red">
        Login
      </Button>
    </header>
  );
}
