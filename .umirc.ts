import { defineConfig } from "umi";
import UnoCss from "@unocss/webpack";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/home1", component: "home1" },
    { path: "/home2", component: "home2" },
    { path: "/home3", component: "home3" },
  ],
  npmClient: "pnpm",
  chainWebpack(memo) {
    memo.plugin("UnoCss").use(UnoCss);
    return memo;
  },
});
