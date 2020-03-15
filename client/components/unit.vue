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
        units: [
          {
            label: 'Temperature',
            options: [
              {
                value: `Kelvin`,
                unitShort: `K`
              },
              {
                value: `Celsius​`,
                unitShort: `C`
              },
              {
                value: `Fahrenheit`,
                unitShort: `F`
              },
              {
                value: `Rankine`,
                unitShort: `R`
              }
            ]
          },
          {
            label: 'Volume',
            options: [
              {
                value: `​liters​`,
                unitShort: `l`
              },
              {
                value: `​tablespoons​`,
                unitShort: `Tbs`
              },
              {
                value: `​cubic-inches`,
                unitShort: `in3`
              },
              {
                value: `cups​`,
                unitShort: `cup`
              },
              {
                value: `cubic-feet`,
                unitShort: `ft3`
              },
              {
                value: `gallons`,
                unitShort: `gal`
              }
            ]
          }
        ]
      }
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
