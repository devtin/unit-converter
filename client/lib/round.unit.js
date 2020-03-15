import { round } from './round.js'
import test from 'ava'

test(`Rounds floats to given decimal places`, t => {
  t.is(round(1.12), 1.1)
  t.is(round(1.12, 2), 1.12)
  t.is(round(1.127, 2), 1.13)
})
