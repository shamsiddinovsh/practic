export default {
    head: {
        title: "practic",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    css: [
        "~assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css",
        "~/assets/css/style.css",
    ],

    plugins: [
        { src: "~/plugins/VueAwesomeSwiper.js", mode: "client" },
    ],

    components: true,

    buildModules: [],

    modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios"],

    axios: {
        baseURL: "/",
    },

    build: {},
};