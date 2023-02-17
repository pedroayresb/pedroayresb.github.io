<template>
  <a
    :href="project.url"
    target="_blank"
    v-if="!overlay"
    className="text-sm grid items-center justify-center text-center border border-white rounded-lg p-4 m-2 mdlg:w-[30%] mdlg:h-[40%] w-[90%] h-[60%] transition-opacity duration-500 ease-in"
    @mouseenter="overlay = true"
  >
    <p className="mdlg:text-4xl">{{ project.name }}</p>
    <p className="mdlg:text-lg">{{ project.type }}</p>
    <p>{{ project.date }}</p>
  </a>

  <a
    v-if="overlay"
    :href="project.url"
    target="_blank"
    className="grid items-center border border-white text-[10px] rounded-lg p-4 m-2 justify-center mdlg:w-[30%] w-[90%] h-[40%] mdlg:text-[15px] text-center transition-opacity duration-500 ease-in"
    @mouseleave="overlay = false"
  >
    {{ project.description }}
  </a>
</template>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fadeIn {
  transform: translate3d(0, 0, 0);
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectComponent",
  props: {
    project: {
      type: Object,
      required: true,
    },
    stacks: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    overlay: false,
  }),
});
</script>
