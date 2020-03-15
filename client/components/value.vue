<template>
  <el-form-item class="value" :label="label">
    <el-input
      :placeholder="placeholder"
      :label="placeholder"
      v-model="selected"
      @input="$emit('input', $event)"
      :type="isMobile ? 'number' : 'text'"
      ref="input"
      clearable
    ></el-input>
  </el-form-item>
</template>
<script>
  import { mapGetters } from 'vuex'

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
    computed: {
      ...mapGetters(['isMobile'])
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
