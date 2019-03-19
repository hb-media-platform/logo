import switcher from '../vue/logo.vue'

export function install(Vue) {

    if ( this.installed ) return
    this.installed = true

    Vue.component('logo', switcher)
}

export default {
    installed: false,
    install
}
