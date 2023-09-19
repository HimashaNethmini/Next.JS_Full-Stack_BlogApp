import React from "react";
import styles from './homepage.module.css'
import '../component/cardList/cardList.module.css';
import Featured from "@/component/featured/Featured";
import CategoryList from "@/component/categoryList/CategoryList";
import CardList from "@/component/cardList/CardList";
import Menu from "@/component/Menu/Menu";

export default function Home() {
  return (
    <div className="container">
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
     

    </div>
  )
}
