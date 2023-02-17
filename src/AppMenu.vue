<template>
  <nav
    className="w-full flex justify-around p-6 sticky top-0 items-center grow text-2xl nav-bar"
  >
    <div
      :class="{
        flex: true,
        'flex-row': true,
        'items-center': true,
        'w-fit': true,
        'bg-[#f1f1f1]': currentPage === 'aboutPage',
        'bg-[#ffffff]': currentPage !== 'aboutPage',
        'rounded-full': true,
        'p-3': true,
        'transition-colors': true,
        ease: true,
        'duration-300': true,
      }"
    >
      <img
        v-if="!isPhone"
        alt="logo"
        src="https://i.imgur.com/gjOLQ5U.png"
        className="h-14"
      />
      <p
        ref="homePage"
        @click="goToPage('homePage')"
        :class="{
          'text-[#ac16a7]': currentPage === 'homePage',
          'p-3': true,
          'md:p-6': true,
          'hover:text-black': currentPage === 'homePage',
          'hover:text-[#390037]': currentPage !== 'homePage',
          'text-black': currentPage !== 'homePage',
          'hover:cursor-pointer': true,
        }"
      >
        Início
      </p>
      <p
        className="p-3 md:p-6"
        ref="about"
        @click="goToPage('aboutPage')"
        :class="{
          'text-[#ac16a7]': currentPage === 'aboutPage',
          'p-3': true,
          'md:p-6': true,
          'hover:text-black': currentPage === 'aboutPage',
          'hover:text-[#390037]': currentPage !== 'aboutPage',
          'text-black': currentPage !== 'aboutPage',
          'hover:cursor-pointer': true,
        }"
      >
        Sobre
      </p>
      <p
        className="p-3 md:p-6"
        ref="projects"
        @click="goToPage('projectsPage')"
        :class="{
          'text-[#ac16a7]': currentPage === 'projectsPage',
          'p-3': true,
          'md:p-6': true,
          'hover:text-black': currentPage === 'projectsPage',
          'hover:text-[#390037]': currentPage !== 'projectsPage',
          'text-black': currentPage !== 'projectsPage',
          'hover:cursor-pointer': true,
        }"
      >
        Projetos
      </p>
    </div>
  </nav>
</template>

<style scoped>
.nav-bar {
  z-index: 100;
}
</style>

<script lang="js">
import { defineComponent } from "vue";
import store from "./context";
export default defineComponent({
  name: "AppMenu",
  methods: {
    goToPage(page) {
      store.commit("setCurrentPage", page);
    },
  },
  computed: {
    currentPage() {
      return this.$store.state.currentPage;
    },
    isPhone() {
      return document.documentElement.clientWidth < 768;
    },
  },
});
</script>
