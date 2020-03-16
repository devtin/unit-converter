<template>
  <el-form-item class="unit" :label="label">
    <el-select
      v-model="unit"
      :placeholder="placeholder"
      filterable
      clearable
      allow-create
      ref="unit"
    >
      <el-option-group
        v-for="unit in units"
        :key="unit.label"
        :label="unit.label"
      >
        <el-option
          v-for="item in unit.options"
          :key="item.value"
          :label="item.value"
          :value="item.unitShort"
        >
        </el-option>
      </el-option-group>
    </el-select>
  </el-form-item>
</template>
<style>
  .el-autocomplete {
    width: 100%;
  }

  .el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
    html.mobile & {
      background-color: inherit;
    }
  }

  .el-scrollbar {
    > .el-scrollbar__bar {
      opacity: 1;
    }
  }
</style>
<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      label: String,
      placeholder: String,
      value: String
    },
    methods: {
      focus () {
        this.$refs.unit.focus()
      }
    },
    data () {
      return {
        unit: this.value,
      }
    },
    computed: {
      ...mapGetters(['units'])
    },
    watch: {
      value (v) {
        this.unit = v
      },
      unit (v) {
        this.$emit(`input`, v)
      }
    }
  }
</script>
