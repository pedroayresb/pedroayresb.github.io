import { createStore } from "vuex";

function isInViewport(element1, element2, element3) {
  const scrollPosition = window.scrollY;
  const element1Position = element1.getBoundingClientRect().bottom;
  const element2Top = element2.getBoundingClientRect().top;
  const element2Bottom = element2.getBoundingClientRect().bottom;
  const element3Position = element3.getBoundingClientRect().bottom;
  if (scrollPosition < element1Position) {
    return "homePage";
  }
  if (scrollPosition > element2Top && scrollPosition < element2Bottom) {
    return "aboutPage";
  }
  if (scrollPosition > element3Position) {
    return "projectsPage";
  }
  return "aboutPage";
}

const store = createStore({
  state: {
    currentPage: "homePage",
  },
  mutations: {
    setCurrentPageWithScroll(state) {
      const homePage = document.getElementById("homePage");
      const aboutPage = document.getElementById("aboutPage");
      const projectsPage = document.getElementById("projectsPage");
      const elementInView = isInViewport(homePage, aboutPage, projectsPage);
      state.currentPage = elementInView;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
      const id = document.getElementById(page);
      if (id) {
        id.scrollIntoView({ behavior: "smooth" });
      }
      state.currentPage = page;
      this.commit("setCurrentPageWithScroll");
    },
  },
});

export default store;
