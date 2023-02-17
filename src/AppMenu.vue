<template>
  <nav
    className="w-full flex justify-around p-6 sticky top-0 items-center grow text-sm"
  >
    <div
      :class="{
        flex: true,
        'flex-row': true,
        'items-center': true,
        'w-fit': true,
        'bg-[#121212]': currentPage === 'aboutPage',
        'bg-[#101010]': currentPage !== 'aboutPage',
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
          'text-[#91008c]': currentPage === 'homePage',
          'p-3': true,
          'md:p-6': true,
          'hover:text-[#454545]': currentPage === 'homePage',
          'hover:text-[#390037]': currentPage !== 'homePage',
          'text-white': currentPage !== 'homePage',
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
          'text-[#91008c]': currentPage === 'aboutPage',
          'p-3': true,
          'md:p-6': true,
          'hover:text-[#454545]': currentPage === 'aboutPage',
          'hover:text-[#390037]': currentPage !== 'aboutPage',
          'text-white': currentPage !== 'aboutPage',
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
          'text-[#91008c]': currentPage === 'projectsPage',
          'p-3': true,
          'md:p-6': true,
          'hover:text-[#454545]': currentPage === 'projectsPage',
          'hover:text-[#390037]': currentPage !== 'projectsPage',
          'text-white': currentPage !== 'projectsPage',
          'hover:cursor-pointer': true,
        }"
      >
        Projetos
      </p>
    </div>
  </nav>
</template>

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
