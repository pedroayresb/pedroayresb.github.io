<template>
  <div
    className="flex flex-col items-center justify-center h-screen w-full overflow-hidden"
  >
    <h1 className="text-4xl font-bold text-center" v-if="hasLargeHeight">
      Projetos
    </h1>
    <div
      className="h-[75%] w-[80%] flex flex-col mdlg:flex-row mdlg:flex-wrap items-center justify-center"
    >
      <ProjectComponent
        v-for="project in projects"
        :key="project.name"
        :project="project"
        :stacks="stacks"
      />
    </div>
    <a
      v-if="hasLargeHeight"
      className="border border-white rounded-lg p-4 m-2"
      href="https://github.com/pedroayresb?tab=repositories"
      target="”_blank”"
      >Ver mais projetos
    </a>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ProjectComponent from "./ProjectComponent.vue";
import projects from "../utils/projects";
import stacks from "../utils/stacks";

export default defineComponent({
  name: "ProjectsContainer",
  components: {
    ProjectComponent,
  },
  setup() {
    const hasLargeHeight = window.innerHeight > 840;
    return {
      projects,
      stacks,
      hasLargeHeight,
    };
  },
});
</script>
