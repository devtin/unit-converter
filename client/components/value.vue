<template>
  <el-form-item class="value" :label="label">
    <el-input
      :placeholder="placeholder"
      :label="placeholder"
      v-model="selected"
      @input="$emit('input', $event)"
      ref="input"
      clearable
    ></el-input>
  </el-form-item>
</template>
<script>
  export default {
    props: {
      placeholder: String,
      value: String,
      label: String,
    },
    data () {
      return {
        selected: this.value
      }
    },
    methods: {
      focus () {
        this.$refs['input'].focus()
      }
    },
    watch: {
      value (v) {
        this.selected = v
      }
    }
  }
</script>
