<template>
  <Transition name="fade">
    <div class="skill-percentage-item" v-if="isVisible">
      <div class="p-label">{{ skill.language }}</div>
      <div class="p-percentage">
        <div class="p-p-background">
          <div class="p-p-fill" v-bind:style="{ width: skill.percentage + '%' }"></div>
        </div>
      </div>
    </div>
  </Transition>
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
  created() {},
}
</script>

<style lang="scss">
.name {
}
</style>
