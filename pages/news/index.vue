<template>
  <div>
    <PageBanner title="Новости" text="Главная" />
    <section class="news">
      <div class="container">
        <div class="news-inner">
          <div class="row">
            <div class="col-xl-9">
              <div class="row">
                <div class="col-lg-4" v-for="item in news" :key="item.id">
                  <div class="news-card">
                    <div class="news-card__img">
                      <img :src="item.img" alt="" />
                    </div>
                    <div class="news-card__date">
                      <span>{{ item.date }}</span> |<span>10</span>
                    </div>
                    <div class="news-card__content">
                      <h3>{{ item.title }}</h3>
                      <p>
                        {{ item.text }}
                      </p>
                      <span>{{ item.span }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="info">
                <h3>Новости</h3>
                <div class="info-content">
                  <Nuxt-link to="">инновации</Nuxt-link>
                  <Nuxt-link to="">наука</Nuxt-link>
                  <Nuxt-link to="">текущем состоянии проекта</Nuxt-link>
                </div>
              </div>
              <div class="quetion-banner">
                <h2>The world bank system</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      news: [
        {
          id: 1,
          img: require("../../assets/images/news1.png"),
          date: "8 сентября 2021, 15:20",
          title: "Флаг Узбекистана запустили в стратосферу",
          text:
            " Молодые ученые запустили аэростат с флагом Узбекистана в стратосферу. Видео запуска опубликовало Министерство инноваций в своем...",
          span: "#инновации",
        },
        {
          id: 2,
          img: require("../../assets/images/news1.png"),
          date: "8 сентября 2021, 15:20",
          title: "Флаг Узбекистана запустили в стратосферу",
          text:
            " Молодые ученые запустили аэростат с флагом Узбекистана в стратосферу. Видео запуска опубликовало Министерство инноваций в своем...",
          span: "#инновации",
        },
        {
          id: 3,
          img: require("../../assets/images/news1.png"),
          date: "8 сентября 2021, 15:20",
          title: "Флаг Узбекистана запустили в стратосферу",
          text:
            " Молодые ученые запустили аэростат с флагом Узбекистана в стратосферу. Видео запуска опубликовало Министерство инноваций в своем...",
          span: "#инновации",
        },
        {
          id: 4,
          img: require("../../assets/images/news1.png"),
          date: "8 сентября 2021, 15:20",
          title: "Флаг Узбекистана запустили в стратосферу",
          text:
            " Молодые ученые запустили аэростат с флагом Узбекистана в стратосферу. Видео запуска опубликовало Министерство инноваций в своем...",
          span: "#инновации",
        },
        {
          id: 5,
          img: require("../../assets/images/news1.png"),
          date: "8 сентября 2021, 15:20",
          title: "Флаг Узбекистана запустили в стратосферу",
          text:
            " Молодые ученые запустили аэростат с флагом Узбекистана в стратосферу. Видео запуска опубликовало Министерство инноваций в своем...",
          span: "#инновации",
        },
        {
          id: 6,
          img: require("../../assets/images/news1.png"),
          date: "8 сентября 2021, 15:20",
          title: "Флаг Узбекистана запустили в стратосферу",
          text:
            " Молодые ученые запустили аэростат с флагом Узбекистана в стратосферу. Видео запуска опубликовало Министерство инноваций в своем...",
          span: "#инновации",
        },
        {
          id: 7,
          img: require("../../assets/images/news1.png"),
          date: "8 сентября 2021, 15:20",
          title: "Флаг Узбекистана запустили в стратосферу",
          text:
            " Молодые ученые запустили аэростат с флагом Узбекистана в стратосферу. Видео запуска опубликовало Министерство инноваций в своем...",
          span: "#инновации",
        },
        {
          id: 8,
          img: require("../../assets/images/news1.png"),
          date: "8 сентября 2021, 15:20",
          title: "Флаг Узбекистана запустили в стратосферу",
          text:
            " Молодые ученые запустили аэростат с флагом Узбекистана в стратосферу. Видео запуска опубликовало Министерство инноваций в своем...",
          span: "#инновации",
        },
        {
          id: 9,
          img: require("../../assets/images/news1.png"),
          date: "8 сентября 2021, 15:20",
          title: "Флаг Узбекистана запустили в стратосферу",
          text:
            " Молодые ученые запустили аэростат с флагом Узбекистана в стратосферу. Видео запуска опубликовало Министерство инноваций в своем...",
          span: "#инновации",
        },
      ],
    };
  },
};
</script>
