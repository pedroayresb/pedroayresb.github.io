<script>
import AppMenu from "./AppMenu.vue";
import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import { defineComponent } from "vue";
import store from "./context";

window.addEventListener("scroll", () => {
  store.commit("setCurrentPageWithScroll");
});

export default defineComponent({
  name: "App",
  components: {
    AppMenu,
    About,
    Home,
    Projects,
  },
  computed: {
    currentPage() {
      return store.state.currentPage;
    },
  },
  updated() {
    if (this.currentPage === "homePage") {
      document.getElementById("homePage").scrollIntoView();
    }
    if (this.currentPage === "aboutPage") {
      document.getElementById("aboutPage").scrollIntoView();
    }
    if (this.currentPage === "projectsPage") {
      document.getElementById("projectsPage").scrollIntoView();
    }
  },
});
</script>

<template>
  <AppMenu />
  <Home />
  <About />
  <Projects />
</template>
