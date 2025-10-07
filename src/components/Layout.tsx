import type { PropsWithChildren } from "react";
import styles from "./Layout.module.css";

const Layout: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
    return (
        <div className={styles.layout} {...rest}>
        {children}
        </div>
    );
};

export default Layout;