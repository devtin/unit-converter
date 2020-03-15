import converter from '../client/lib/unit-converter.js'
import test from 'ava'

test(`Answers 'incorrect' given invalid values (NaN)`, t => {
  t.is(converter.input('lola', 'l').grade(11, 'l').message, 'incorrect')
  t.is(converter.input(11, 'l').grade('lola', 'l').message, 'incorrect')
  t.not(converter.input(11, 'l').grade(11, 'l').message, 'incorrect')
})

test(`Answers 'invalid' given invalid units`, t => {
  t.is(converter.input(11, 'lola').grade(11, 'l').message, 'invalid')
  t.is(converter.input(11, 'lola').grade('lola', 'l').message, 'invalid')
  t.is(converter.input(11, 'l').grade(11, 'lola').message, 'invalid')
  t.not(converter.input(11, 'l').grade(11, 'l').message, 'invalid')
})

test(`Answers 'correct' given correct answers`, t => {
  t.is(converter.input(11, 'l').grade(11, 'l').message, 'correct')
  t.is(converter.input(212, 'F').grade(100, 'C').message, 'correct')
})

test(`Answers 'incorrect' given incorrect answers`, t => {
  t.is(converter.input(11, 'l').grade(10, 'l').message, 'incorrect')
  t.is(converter.input(100, 'F').grade(212, 'C').message, 'incorrect')
})
