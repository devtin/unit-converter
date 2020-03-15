<template>
  <el-row class="unit-input">
    <label>
      {{ label }}
    </label>
    <el-col :span="8" class="unit-col">
      <unit
        class="unit"
        @keydown.esc="clearUnit"
        placeholder="Enter unit"
        ref="input-unit"
        v-model="input.unit"
        @input="$event && $refs['input-value'].focus()"
      ></unit>
    </el-col>
    <el-col :span="16" class="value-col">
      <value
        class="value"
        placeholder="Enter value"
        ref="input-value"
        v-model="input.value"
      ></value>
    </el-col>
  </el-row>
</template>
<style lang="postcss">
  .unit-input {
    .unit-col {
      padding-right: 10px;
    }

    .value-col {
      padding-left: 10px;
    }

    label {
      display: block;
      position: relative;
      vertical-align: middle;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
  }
</style>
<script>
  import unit from '@/components/unit.vue'
  import value from '@/components/value.vue'

  export default {
    props: {
      label: String,
      value: Object
    },
    components: {
      unit,
      value
    },
    data () {
      return {
        input: this.value
      }
    },
    methods: {
      focus () {
        this.$refs['input-unit'].focus()
      },
      clearUnit () {
        this.input.unit = ''
        this.$nextTick(() => {
          this.$refs['input-unit'].focus()
        })
      }
    },
    watch: {
      input: {
        handler () {
          this.$emit('input', this.input)
        },
        deep: true
      },
      value (v) {
        this.$set(this, 'input', v)
      }
    }
  }
</script>
