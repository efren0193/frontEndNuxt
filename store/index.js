export const state = () => ({
    existCar: true,
    authUser: null,
  })
  export const actions = {
    nuxtClientInit({ commit }, { req, res }) {
        console.log(res)
        // if (req.user) {
        //   commit('SET_USER', req.user)
        // }
      },
      async login({ commit }, { email, password }) {
        try {
          const { data } = await this.$axios.post('/api/login', { email, password })
          commit('SET_USER', data)
          this.$router.push('/admin')
        } catch (error) {
          if (error.response && error.response.status === 401) {
            throw new Error('Credenciales incorrectas')
          }
          throw error
        }
      },
      async register ({ commit }, { email, password }) {
        if (!email || !password) throw new Error('Email y pass requeridos')
        try {
          const { data } = await this.$axios.post('/api/register', { email, password })
          commit('SET_USER', data)
        } catch (error) {
          switch (error.response.status || 500) {
            case 409: throw new Error('Such email is already registered')
            case 500: throw new Error('Internal server error')
          }
        }
      },
      async logout({ commit }) {
        await this.$axios.post('/api/logout')
        commit('SET_USER', null)
      }
  }

  export const mutations = {
    existCarousel(state, component){
        state.existCar = component
    },
    SET_USER: function (state, user) {
        state.authUser = user
    },
  }