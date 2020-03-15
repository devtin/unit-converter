import convertUnits from 'convert-units'
import { round as myRoundFunction } from './round.js'

export class UnitConverter {
  constructor ({ converter = convertUnits, round = myRoundFunction } = {}) {
    this._converter = converter
    this._round = round
  }

  input (value, unit) {
    this._input = {
      value,
      unit
    }
    return this
  }

  grade (value, unit) {
    let correctAnswer

    try {
      correctAnswer = this._round(this._converter(this._input.value).from(this._input.unit).to(unit))
    } catch (err) {
      return {
        message: `invalid`
      }
    }

    if (value === '' || isNaN(value) || isNaN(this._input.value)) {
      return {
        message: `incorrect`
      }
    }

    value = Number(value)

    return {
      correctAnswer,
      message: this._round(value) === correctAnswer ? `correct` : `incorrect`
    }
  }
}

export default new UnitConverter()
