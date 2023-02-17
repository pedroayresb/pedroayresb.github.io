<template>
  <div class="slider">
    <div class="slide-track">
      <div v-for="word in stacks" :key="word.text" class="slide">
        <img v-if="word !== null" :src="word.source" className="h-22" />
        <p v-if="word !== null" id="stack" className="p-2">
          {{ word.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin white-gradient {
  background: linear-gradient(to right, #101010 0%, rgba(255, 255, 255, 0) 40%);
}

$animationSpeed: 40s;

// Animation
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

// Styling
.slider {
  color: #454545;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 30%;
  overflow: hidden;
  position: relative;
  width: 95%;

  &::before,
  &::after {
    @include white-gradient;
    content: "";
    height: 100%;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    height: 100%;
    animation: scroll $animationSpeed linear infinite;
    display: flex;
    width: calc(250px * 14);
  }

  .slide {
    display: grid;
    align-content: center;
    justify-content: center;
    border-radius: 10px;
    color: white;
    background: #454545;
    border: 1px solid #454545;
    margin-left: 4rem;
    height: 100%;
    width: 250px;
    font-size: small;

    &:hover {
      background: #101010;
      border: 1px solid #101010;

      .slide-track {
        animation-play-state: paused;
      }
    }
  }
}
</style>

<script>
import { defineComponent } from "vue";
import stacks from "../utils/stacks";

export default defineComponent({
  name: "StacksCarrousel",
  setup() {
    return {
      stacks,
    };
  },
});
</script>
