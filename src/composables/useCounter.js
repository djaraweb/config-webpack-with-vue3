import { ref } from "vue";

const useCounter = (initValue = 10) => {
  const counter = ref(initValue);

  return {
    counter,
    increase: () => counter.value++,
    decrement: () => counter.value--,
    increaseBy: (value) => (counter.value += value),
  };
};

export default useCounter;
