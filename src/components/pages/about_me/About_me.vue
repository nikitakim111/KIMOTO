<template>
    <section class="about-me main__about-me" id="about-me-section">
        <div class="container">
            <h2 class="heading">Обо мне</h2>
            <p v-for="(skill, index) in about_me_info.skills" :key="index" :class="skill.class || 'paragraph'">
                <strong>{{ skill.title }}</strong>
                {{skill.descr}}
            </p>

            <p v-for="(info, index) in about_me_info.ex_job" :key="index" class="paragraph">
                <strong>{{ info.title }}</strong>
                {{info.descr}}
            </p>
        </div>
    </section>
</template>

<script>
import about_me from './about_me.scss'

export default {
    data() {
        return {
            about_me_info: {
                skills: [
                    {
                        title: 'Мои знания в области хард скиллов: ',
                        descr: 'HTML5, CSS3/SASS (Responsive, adaptive), JavaScript ES6, TypeScript, Vue, Vue-cli, Vue-router, Vuex, Webpack 5, экосистема NPM, база Git.'
                    },
                    {
                        title: 'Знаком: ',
                        descr: 'Jest, Pug, Vite, концепция ООП',
                        class: 'about-me__paragraph'
                    },
                    {
                        title: 'Мои софт скиллы: ',
                        descr: 'умение работать в команде, ответственно подхожу к дедлайнам. Обучаемость, высокая мотивированность, целеустремленность, самокритика присутствует. Переспрашиваю, если в техническом задании я что-то не понимаю.',
                        class: 'about-me__paragraph'
                    }
                ],
                ex_job: [
                    {
                        title: 'Предыдущий опыт работы:'
                    },
                    {
                        title: 'Компания:',
                        descr: 'trade-mate.io'
                    },
                    {
                        title: 'Должность:',
                        descr: 'Ручной тестировщик ПО, техподдержка'
                    },
                    {
                        title: 'Задачи:'
                    },
                    {
                        descr: '-Составление баг репортов'
                    },
                    {
                        descr: '-Помощь пользователям по техническим вопросам'
                    },
                    {
                        descr: '-Ручное тестирование функционала сервиса (с использованием devTools для просмотра запроса на бэк)'
                    },
                    {
                        descr: '-Выявление неудобств ux/ui дизайна'
                    }
                ]
            }
        };
    },
};
</script>
