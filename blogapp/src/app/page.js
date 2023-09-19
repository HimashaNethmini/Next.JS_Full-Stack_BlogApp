import React from "react";
import '../component/cardList/cardList.module.css';
import Pagination from "../component/pagination/Pagination"
import Featured from "@/component/featured/Featured";

export default function Home() {
  return (
    <div className="container">
      <Featured />
      <Pagination />

    </div>
  )
}
