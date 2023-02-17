<script>
import { defineComponent } from "vue";
import WordsCarrousel from "../components/WordsCarrousel.vue";
import stacks from "../utils/stacks";

export default defineComponent({
  name: "HomePage",
  components: {
    WordsCarrousel,
  },
  setup() {
    return {
      stacks,
    };
  },
});
</script>

<template>
  <div id="homePage" className="flex flex-col items-center justify-center h-[88vh]">
    <div className="flex-col text-center">
      <h1 className="text-4xl">Pedro Olympio Ayres Begnini</h1>
      <div className="flex flex-col p-2 text-2xl items-center md:flex-row">
        <p className="p-2">Desenvolvedor</p>
        <WordsCarrousel :stacks="stacks" />
        <p className="p-2">Junior FullStack</p>
      </div>
    </div>
    <div className="flex flex-row justify-between p-2 text-2xl w-[40%]">
      <a href="https://www.linkedin.com/in/pedroayresb/" target="_blank">
        <img
          src="https://img.shields.io/badge/LinkedIn-ffffff?style=for-the-badge&logo=linkedin&logoColor=black"
          className="h-10"
        />
      </a>
      <a href="https://github.com/pedroayresb" target="_blank">
        <img
          src="https://img.shields.io/badge/Github-ffffff?style=for-the-badge&logoColor=white"
          className="h-10"
        />
      </a>
    </div>
  </div>
</template>

