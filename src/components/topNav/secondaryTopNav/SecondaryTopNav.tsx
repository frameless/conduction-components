import * as React from "react";
import * as styles from "./SecondaryTopnav.module.css";
import { Link } from "@gemeente-denhaag/components-react";
import clsx from "clsx";

interface TopNavProps {
  items: { label: string; icon?: JSX.Element; handleClick: () => any }[];
  layoutClassName?: string;
}

export const SecondaryTopNav: React.FC<TopNavProps> = ({ items, layoutClassName }) => {
  return (
    <div className={clsx(styles.secondary, layoutClassName && layoutClassName)}>
      <nav>
        <ul className={styles.ul}>
          {items.map(({ label, icon, handleClick }, idx) => (
            <li className={styles.li} key={idx} onClick={handleClick}>
              <Link className={styles.link} icon={icon} iconAlign="start">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};