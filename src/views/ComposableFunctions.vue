<template>
  <img alt="" src="@images/logo.png" />
  <h1>{{ counter }}</h1>
  <button @click="increase">+ 1</button>
  <button @click="decrement">- 1</button>
  <button @click="increaseBy(5)">+ 5</button>
</template>
<script>
//import { ref } from "vue";
import useCounter from "@/composables/useCounter";

export default {
  setup() {
    // Forma 01:
    // const counter = ref(10);
    // const increase = () => counter.value++;
    // const decrement = () => counter.value--;
    // const increaseBy = (value) => (counter.value += value);
    // return {
    //   counter,
    //   increase,
    //   decrement,
    //   increaseBy,
    // };
    // Forma 02:
    // const counter = ref(10);
    // return {
    //   counter,
    //   increase: () => counter.value++,
    //   decrement: () => counter.value--,
    //   increaseBy: (value) => (counter.value += value),
    // };
    // Forma 03:

    const { counter, increase, decrement, increaseBy } = useCounter(15);
    return {
      counter,
      increase,
      decrement,
      increaseBy,
    };
  },
};
</script>
