import React, { useState, useEffect } from "react";
import { getRecipesCat } from "../../actions/redux";
import { getCategories } from "../../actions/redux";
import { connect } from "react-redux";
import { Recipe } from "./Recipe";
import { changePath } from "../../actions/redux";
import PropTypes from "prop-types";

const Blog = ({
  getRecipesCat,
  getCategories,
  changePath,
  redux: { recipes, categories },
}) => {
  console.log(window.location.pathname);
  useEffect(() => {
    getCategories();
    getRecipesCat("all");
    changePath(window.location.pathname);
  }, []);
  const [filter, setFilter] = useState("all");
  return (
    <div className="blog">
      <div className="blog-categories">
        <p>Categorias</p>
        <div>
          <button
            key={"all"}
            onClick={() => {
              setFilter("all");
              getRecipesCat("all");
            }}
            className={filter === "all" ? "selected" : ""}>
            Todos
          </button>
        </div>
        {categories.map(category => (
          <div>
            <button
              key={category}
              onClick={() => {
                setFilter(category);
                getRecipesCat(category);
              }}
              className={filter === category ? "selected" : ""}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          </div>
        ))}
      </div>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

Blog.propTypes = {
  getCategories: PropTypes.func.isRequired,
  getRecipesCat: PropTypes.func.isRequired,
  redux: PropTypes.object.isRequired,
  changePath: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  redux: state.redux,
});

export default connect(mapStateToProps, {
  getRecipesCat,
  getCategories,
  changePath,
})(Blog);
