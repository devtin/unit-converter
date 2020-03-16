<template>
  <el-form class="main" ref="unit-converter" :model="entry.input">
    <h1>Unit Converter v{{ version }}</h1>
    <p>
      <i>Validates the conversion between given 'input' and given 'response'.</i>
    </p>
    <unit-input class="input" label="Input" v-model="entry.input" ref="input"></unit-input>
    <unit-input class="response" label="Response" v-model="entry.response"></unit-input>
    <div class="output-container">
      <el-alert
        class="output"
        :title="result.message"
        :type="result.message === `correct` ? `success` : `warning`"
        v-if="result.message"
      >
      </el-alert>
      <el-alert
        class="info-output"
        type="info"
        v-if="result.message === `incorrect` && result.correctAnswer"
      >
        correct answer would be: {{ result.correctAnswer }}
      </el-alert>
    </div>
    <el-button @click="clearInput" v-if="isSomeFilled" type="primary" style="width: 100%">Clear</el-button>
  </el-form>
</template>
<style lang="postcss">
  .main {
    padding: 15px;
    max-width: 640px;
    margin: 0 auto;

    .output-container {
      .el-alert {
        margin-bottom: 15px;
      }
    }
  }
</style>
<script>
  import { version } from '../../package.json'
  import UnitInput from '@/components/unit-input.vue'
  import converter from '@/lib/unit-converter.js'
  import { mapGetters, mapMutations } from 'vuex'

  const entry = () => {
    return {
      input: {
        value: '',
        unit: '',
      },
      response: {
        value: '',
        unit: '',
      }
    }
  }

  const result = () => {
    return {
      message: '',
      correctAnswer: ''
    }
  }

  export default {
    components: {
      UnitInput
    },
    head: {
      title: `@devtin/unit-converter`
    },
    data () {
      return {
        version,
        entry: entry(),
        result: result()
      }
    },
    computed: {
      ...mapGetters(['isMobile']),
      isFullyFilled () {
        return this.entry.input.value !== ''
          && this.entry.input.unit !== ''
          && this.entry.response.unit !== ''
          && this.entry.response.value !== ''
      },
      isSomeFilled () {
        return this.entry.input.value !== ''
          || this.entry.input.unit !== ''
          || this.entry.response.unit !== ''
          || this.entry.response.value !== ''
      }
    },
    methods: {
      ...mapMutations(['setMobile']),
      clearInput () {
        this.$set(this, 'entry', entry())
        this.$refs['input'].focus()
        this.clearResults()
      },
      clearResults () {
        this.$set(this, 'result', result())
      },
      computeResults () {
        this.clearResults()

        if (this.isFullyFilled) {
          // do the math
          const { message, correctAnswer } = converter.input(this.entry.input.value, this.entry.input.unit).grade(this.entry.response.value, this.entry.response.unit)
          this.$set(this, 'result', {
            message,
            correctAnswer
          })
        }
      }
    },
    mounted () {
      this.setMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
      if (this.isMobile) {
        document.querySelector('html').classList.add('mobile')
      }
      this.clearInput()
    },
    watch: {
      entry: {
        handler () {
          this.computeResults()
        },
        deep: true
      }
    }
  }
</script>
