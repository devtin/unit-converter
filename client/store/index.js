export const state = () => ({
  mobile: null,
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
})

export const getters = {
  isMobile (state) {
    return state.mobile
  },
  units (state) {
    return state.units
  }
}

export const mutations = {
  setMobile (state, value) {
    state.mobile = value
  }
}
