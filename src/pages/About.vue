<template>
  <section
    id="aboutPage"
    className="flex flex-col items-center justify-evenly h-screen text-white bg-[#121212] top-0 w-full"
  >
    <article className="flex flex-col w-[80%] text-sm md:text-xl text-justify">
      <h1 className="text-2xl bold p-2 text-[#91008c]">Sobre Mim</h1>
      <p className="p-2 indent-8">
        Sou um desenvolvedor Full Stack Junior com habilidades de programação em
        várias linguagens e stacks. Tenho experiência em React, Vue, Tailwind,
        Bootstrap, NodeJS, Meteor, MySQL, PostgreSQL e MongoDB. Busco sempre
        aprender novas tecnologias e estou sempre evoluindo dentro deste ramo
        tão extenso de carreira.
      </p>
    </article>
    <StacksCarrousel />
  </section>
</template>

<script>
import { defineComponent } from "vue";
import StacksCarrousel from "../components/StacksCarrousel.vue";

export default defineComponent({
  name: "AboutPage",
  computed: {
    isPhone() {
      return document.documentElement.clientWidth < 768;
    },
    isLargeScreen() {
      return document.documentElement.clientWidth > 1024;
    },
  },
  components: {
    StacksCarrousel,
  },
});
</script>
