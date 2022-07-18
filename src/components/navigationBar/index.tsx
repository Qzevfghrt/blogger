import React, { FC, useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

const Navigation: FC = () => {
  const navItems = ["首页", "About", "前端", "论文", "日常", "游戏"];
  const [scroll, setScrol] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop > 40){
        console.log(scrollTop)
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className={classNames(styles.navigationWrapper)}>
      <div className={classNames(styles.navigation)}>
        <div>刘学峰的个人日志</div>
        <div className={classNames(styles.navigationBar)}>
            {navItems.map((item) => (
              <a href = '#' className={classNames(styles.navigationBtn)}>{item}</a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
