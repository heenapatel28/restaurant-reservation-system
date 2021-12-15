import React, { useState } from "react";
import MenuForm from "./menuForm";
import Categories from "./categories";
import items from "./data";
import logo from "./logo.JPG";
import "./menuStyles.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const MenuList = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
	<section>
            <div className="headingBar d-md-flex my-3 p-2">
                <h1>MENU</h1>
            </div>
            <main>
				<section className="menu section">
				<div className="title">
				  <img src={logo} alt="logo" className="logo" />
				  <h2 className="heading">Beit Beirut</h2>
				  <div className="underline"></div>
				</div>
				<Categories
				  categories={categories}
				  activeCategory={activeCategory}
				  filterItems={filterItems}
				/>
				<MenuForm items={menuItems} />
				</section>
			</main>
    </section>
   
  );
};

export default MenuList;






	