<template>
  <div
    id="projectsPage"
    className="flex flex-col items-center justify-center h-screen"
  >
    <ProjectsContainer />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ProjectsContainer from "../components/ProjectsContainer.vue";

export default defineComponent({
  name: "ProjectsPage",
  components: {
    ProjectsContainer,
  },
});
</script>
