<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
        <slot :item="goal" another-prop="Chino"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish the course", "Learn Vue", "Chino"],
    };
  },
};
</script>