<script>
import Hello from "../components/Hello.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: {
    Hello,
  },
});
</script>

<template>
  <div id="homePage">
    <Hello />
  </div>
</template>
