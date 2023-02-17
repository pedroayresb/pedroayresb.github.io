<template>
  <div v-if="currentWord !== null" :class="currentWord.classes">
    <p v-if="currentWord !== null" id="stack" className="p-2">
      {{ currentWord.text }}
    </p>
    <img
      v-if="currentWord !== null"
      :src="currentWord.source"
      className="h-8"
    />
  </div>
</template>

<style scoped>
.fadeIn {
  animation-name: fadeIn;
  animation-duration: 0.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeOut {
  animation-name: fadeOut;
  animation-duration: 0.5s;
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(100%);
  }
}
</style>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "WordsCarrousel",
  props: {
    stacks: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const currentWord = ref(props.stacks[0]);
    let interval = null;

    const changeWord = () => {
      const currentStack = document.getElementById("stack")
        ? document.getElementById("stack").innerText
        : "HTML";
      const filtered = props.stacks.filter(
        (word) => word.text === currentStack
      );
      const nextIndex = props.stacks.indexOf(filtered[0]) + 1;
      const nextWord = props.stacks[nextIndex] || props.stacks[0];
      currentWord.value = nextWord;
      setTimeout(() => {
        currentWord.value.classes = currentWord.value.classes.replace(
          "fadeIn",
          "fadeOut"
        );
      }, 1950);
      setTimeout(() => {
        currentWord.value.classes = currentWord.value.classes.replace(
          "fadeOut",
          "fadeIn"
        );
      }, 50);
    };

    onMounted(() => {
      interval = setInterval(changeWord, 2000);
    });

    onUnmounted(() => {
      clearInterval(interval);
    });

    return {
      currentWord,
    };
  },
});
</script>
