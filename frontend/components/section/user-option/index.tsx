import { Switch } from "@mui/material";
import styles from "./index.module.css";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { AccountCircle, LogoutOutlined } from "@mui/icons-material";

export default function UserOption() {
  return (
    <div className={styles.layout}>
      <div className={styles.profile}>
        <AccountCircle />
        <div className={styles.user}>
          <div className={styles.title}>View Profile</div>
          <div className={styles.id}>ID: 123456</div>
        </div>
      </div>
      <div className={styles.edit}>
        <CheckroomIcon />
        <div className={styles.label}>Edit Profile</div>
      </div>
      <div className={styles.dark_mode}>
        <DarkModeOutlinedIcon />
        <div className={styles.label}>Dark Mode</div>
        <Switch />
      </div>
      <div className={styles.logout}>
        <LogoutOutlined />
        Log out
      </div>
      <hr />
      <div className={styles.setting}>
        <SettingsOutlinedIcon />
        <div className={styles.label}>Settings</div>
      </div>
    </div>
  );
}
