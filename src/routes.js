import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage")
  },
  {
    path: "/MyRecipes",
    name: "MyRecipes",
    component: () => import("./pages/MyRecipes")
  },
  {
    path: "/FavoriteRecipes",
    name: "FavoriteRecipes",
    component: () => import("./pages/FavoriteRecipes")
  },
  {
    path: "/RecipeViewPage",
    name: "RecipeViewPage",
    props: true,
    component: () => import("./pages/RecipeViewPage")
  },
  {
    path: "/FamilyRecipes",
    name: "FamilyRecipes",
    component: () => import("./pages/FamilyRecipes")
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
