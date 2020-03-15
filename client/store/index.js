export const state = () => ({
  mobile: null
})

export const getters = {
  isMobile (state) {
    return state.mobile
  }
}

export const mutations = {
  setMobile (state, value) {
    state.mobile = value
  }
}
