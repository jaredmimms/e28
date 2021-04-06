<template>
  <div v-bind:class="classApply">
    <template v-if="classApply == 'correct'">
      You got it! Nice work.
      <button v-on:click="$emit('play-again')">Play again</button>
    </template>
    <template v-if="classApply == 'incorrect'">
      Sorry, that's not correct. Please try again.
    </template>
  </div>
</template>

<script>
export default {
  name: "SuccessError",
  props: ["classApply"],
  data() {
    return {};
  },
};
</script>

<style>
.correct {
  background-color: green;
  width: 15em;
}

.incorrect {
  background-color: red;
  width: 17em;
}

.correct,
.incorrect {
  color: white;
  padding: 0.2em;
  margin-top: 0.4em;
}
</style>