/**
 * Auth Module
 */
import Vue from 'vue'
import axios from 'axios'
import Nprogress from 'nprogress'
import router from '../../../router'

const state = {
    user: localStorage.getItem('user')
}

// getters
const getters = {
    getUser: state => {
        return state.user
    }
}

// actions
const actions = {
    signinUser(context, payload) {
        const { user } = payload
        context.commit('loginUser')
        axios.post('login', user)
            .then(user => {
                Nprogress.done()
                setTimeout(() => {
                    context.commit('loginUserSuccess', user)
                }, 500)
            }).catch(e => {
            context.commit('loginUserFailure', e)
        })
    },
    logoutUser(context) {
        Nprogress.start()
        axios.post('logout')
            .then(() => {
                Nprogress.done()
                setTimeout(() => {
                    context.commit('logoutUser')
                }, 500)
            }).catch(e => {
            context.commit('loginUserFailure', e)
        })
    }
}

// mutations
const mutations = {
    loginUser(state) {
        Nprogress.start()
    },
    loginUserSuccess(state, user) {
        state.user = user
        localStorage.setItem('user',JSON.stringify(user))
        router.push("/default/dashboard/ecommerce")
        setTimeout(() => {
            Vue.notify({
                group: 'loggedIn',
                type: 'success',
                text: 'User Logged In Success!'
            })
       },1500)
    },
    loginUserFailure(state, error) {
        Nprogress.done()
        Vue.notify({
            group: 'loggedIn',
            type: 'error',
            text: error.message
        })
    },
    logoutUser(state) {
        state.user = null
        localStorage.removeItem('user')
        router.push("/session/login")
    },
    signUpUser(state) {
        Nprogress.start()
    },
    signUpUserSuccess(state, user) {
        state.user = localStorage.setItem('user', user)
        router.push("/default/dashboard/ecommerce")
        Vue.notify({
            group: 'loggedIn',
            type: 'success',
            text: 'Account Created!'
        })
    },
    signUpUserFailure(state, error) {
        Nprogress.done()
         Vue.notify({
            group: 'loggedIn',
            type: 'error',
            text: error.message
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
