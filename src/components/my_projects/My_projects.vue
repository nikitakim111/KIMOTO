<template>
    <section class="my-projects main__my-projects">
        <div class="container my-projects__container">
            <h2 class="heading">Мои проекты</h2>
            <ul class="card-list my-projects__card-list">
                <li class="card-list__item" v-for="(card, index) in cards" :key="index">
                    <span class="card-list__technology">
                        {{ card.technology }}
                    </span>
                    <h2 class="card-list__subtitle">
                        {{ card.title }}
                    </h2>
                    <p class="card-list__descr">
                        {{ card.descr }}
                    </p>
                    <a href="#" class="card-list__link">
                        {{ link_text }}
                    </a>
                </li>
            </ul>
            <div class="pagination">
                <div class="bullet pagination__bullet" v-for="(card, index) in cards" :key="index"></div>
            </div>
            <button @click="slide" class="show-more my-projects__show-more">
                Все проекты
            </button>
        </div>
    </section>
</template>

<script>
import style from './my_projects.scss'

export default {
    data() {
        return {
            cards: [
                {
                    title: 'Todo-app',
                    descr: 'Классическая практика - менеджер тасок. Здесь я использую вместо бекэнда локальное хранилище.',
                    technology: 'LocalStorage',
                },
                {
                    title: 'Каталог страниц',
                    descr: 'Работа с REST-API, пагинация, роутинг.',
                    technology: 'Vue-router, REST-API, promise',
                },
                {
                    title: '...',
                    descr: '...',
                    technology: 'LocalStorage',
                },
            ],
            link_text: 'Смотреть',

            methods: {
                slide() {
                    alert('test')
                }
            },
        };
    },
};
</script>
