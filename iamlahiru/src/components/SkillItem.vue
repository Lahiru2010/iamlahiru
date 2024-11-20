<template>
  <Transition name="fade">
    <div
      class="skill-icon"
      v-bind:class="skill.class"
      v-tooltip="skill.tooltip"
      v-if="isVisible"
    ></div
  ></Transition>
</template>

<script>
export default {
  name: 'name',
  data() {
    return {
      isVisible: false,
    }
  },
  props: {
    skill: {
      type: Object,
      default: null,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  components: {},
  mounted() {
    setTimeout(() => {
      this.setVisible()
    }, this.index * 150)
  },
  methods: {
    setVisible() {
      this.isVisible = true
    },
  },
}
</script>

<style lang="scss">
.name {
}
</style>
