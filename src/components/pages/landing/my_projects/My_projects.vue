<template>
    <section class="my-projects main__my-projects" id="my-projects_section">
        <div class="container my-projects__container">
            <h2 class="heading">Мои проекты
                <Tooltip :tooltip-text="tooltip_text" :tooltip-position="'bottom'"></Tooltip>
            </h2>
            <ul class="card-list my-projects__card-list">
                <li class="card-list__item card-list__item_show-card card-list__item_mr-right"
                    v-for="(card, index) in cards" :key="index" @touchstart="startDraggingSlide()"
                    @touchmove="keepDraggingSlide()" @touchend="stopDraggingSlide()">
                    <span class="card-list__technology">
                        {{ card.technology }}
                    </span>
                    <h2 class="card-list__subtitle">
                        {{ card.title }}
                    </h2>
                    <p class="card-list__descr">
                        {{ card.descr }}
                    </p>
                    <router-link :to="card.url" class="card-list__link">
                        {{ link_text }}
                    </router-link>
                </li>
            </ul>
            <div class="pagination">
                <div class="bullet pagination__bullet" v-for="(card, index) in cards" :key="index"
                    @click="bulletClicked(index)">
                </div>
            </div>
            <router-link to="#my-projects_section" @click="showAllProjects($event.target)"
                class="btn my-projects__show-more btn_border-radius_30" href="#my-projects_section">
                Все проекты
            </router-link>
        </div>
    </section>
</template>

<script>
// import style from './my_projects.scss'
import Tooltip from '@/components/common_components/tooltip/Tooltip.vue'

export default {
    components: { Tooltip },
    data() {
        return {
            link_text: 'Смотреть',
            tooltip_text: 'На этой странице я использую options API, а слайдер в мобильной версии сделан мной, так что это тоже своего рода небольшой пет проект',
            coords: {
                clientX: 0,
                currentSlideXCoords: 0,
            },
            slides: {
                currentNumberSlide: 0,
                nextSlideStep: window.innerWidth - 10, // Шаг до следующего слайда
                slidesAmount: 0,
                isSlideMoving: false,
                completedSteps: 0,
                commonPointToAutoMove: 0,
            },
            isDragging: false,

            cards: [
                {
                    title: 'Todo-app',
                    descr: 'Классическая практика - менеджер тасок. Здесь я использую вместо бекэнда локальное хранилище.',
                    technology: 'LocalStorage',
                    url: { name: 'todo-list' },
                    id: 1,
                },
                {
                    title: 'Каталог страниц',
                    descr: 'Работа с REST-API, пагинация, роутинг.',
                    technology: 'Vue-router, REST-API, promise',
                    url: '/catalog-list',
                    id: 2,
                },
                {
                    title: 'Формы',
                    descr: 'Работа с формой',
                    technology: 'Form',
                    url: '/form',
                    id: 3,
                },
                {
                    title: 'Таймер',
                    descr: 'Обыкновенный красивый таймер :)',
                    technology: 'Async',
                    url: '/timer',
                    id: 4,
                },
                {
                    title: 'Гибридированние слов',
                    descr: 'Смешиваем два слова - получаем что-то странное, а может даже и смешное',
                    technology: 'Regex',
                    url: '/hybrid-word',
                    id: 5,
                },
            ]
        };
    },
    mounted() {
        this.slides.slidesAmount = this.cards.length;
        this.slides.nextSlideStep = this.windowChangeSize();
        window.addEventListener('resize', this.windowChangeSize);
    },
    methods: {
        windowChangeSize() {
            this.changeSlide()
            return this.slides.nextSlideStep = window.innerWidth - 10
        },
        startDraggingSlide() {
            this.isDragging = !this.isDragging
            // присваиваем координаты первой точки
            this.coords.clientX = event.changedTouches[0].clientX
        },
        keepDraggingSlide() {
            if (this.isDragging) {
                // изначально я хотел, чтобы к координатам слайда прибавлялась 1 с каждым вызовом mousemove, но так как mousemove вызывается ограниченное кол-во раз и не соответствуюет скорости мыши/пальца, мною было решено добавить к координатам слайда разницу между прошлой точкой координат и нынешней - таким образом скорость слайда будет соблюдена
                // Предыдущая точка (previousXCoords) - точка координат, на которой была наша мышь до того, пока мы ее не сместили в одну из сторон по X.
                // Актуальная точка (currentXCoords) - точка координат, на которой находится наша мышь в данный момент
                // Эти точки координат относятся не к положению слайдера, а к мыши/пальца относительно окна браузера, поэтому мы вычитаем прошлые координаты из актуальных. Пример: если двигаем слайд 'вперед', то нам надо прибавлять к стилю right разницу предыдущей точки и актуальной (такая разница, потому что двигая палец влево, предыдущая точка будет больше, чем актуальная, а нам как раз надо прибавлять положительное число к right чтобы двигать слайд в нужном направлении, соответственно если двигаем слайд 'назад', то нам надо прибавлять отрицательное число)
                let currentXCoords = event.changedTouches[0].clientX
                let previousXCoords = this.coords.clientX
                let completedSteps = previousXCoords - currentXCoords

                this.coords.currentSlideXCoords += completedSteps
                this.slides.completedSteps += completedSteps

                document.querySelector('.card-list').style.right = `${this.coords.currentSlideXCoords}px`

                this.coords.clientX = currentXCoords

                if (Math.abs(this.slides.completedSteps) > 20 && !this.slides.isSlideMoving) {
                    this.slides.isSlideMoving = !this.slides.isSlideMoving
                    this.toggleScrollFromBody()
                }
                console.log(this.coords.currentSlideXCoords)
            }
        },
        stopDraggingSlide() {

            this.isDragging = !this.isDragging
            this.slides.isSlideMoving = false
            this.slides.completedSteps = 0
            this.toggleScrollFromBody()
            this.changeCurrentNumberSlide()
            this.changeSlide()
        },
        changeSlide() {
            this.coords.currentSlideXCoords = this.slides.nextSlideStep * this.slides.currentNumberSlide
            document.querySelector('.card-list').style.right = `${this.coords.currentSlideXCoords}px`
            document.querySelector('.card-list').style.transition = `right 0.5s`
            setTimeout(() => { document.querySelector('.card-list').style.transition = `none` }, 500)
            this.addSelectedBulletClass()
        },
        changeCurrentNumberSlide() {
            let stepToNextSlide = this.slides.nextSlideStep / 5.5
            let currentSliderLocate = this.slides.nextSlideStep * this.slides.currentNumberSlide

            if (this.coords.currentSlideXCoords > currentSliderLocate + stepToNextSlide && this.slides.currentNumberSlide < this.slides.slidesAmount - 1) {
                this.slides.currentNumberSlide++
            }

            if (this.coords.currentSlideXCoords < currentSliderLocate - stepToNextSlide && this.slides.currentNumberSlide) {
                this.slides.currentNumberSlide--
            }
        },
        bulletClicked(index) {
            this.slides.currentNumberSlide = index
            this.changeSlide()
        },
        addSelectedBulletClass() {
            let elements = document.querySelectorAll('.bullet')
            for (let i = 0; i < elements.length; i++) {
                if (i === this.slides.currentNumberSlide) {
                    elements[i].classList.add('selected-bullet')
                    continue
                }
                elements[i].classList.remove('selected-bullet')
            }
        },
        toggleScrollFromBody() {
            if (this.slides.isSlideMoving) document.body.classList.add('removed-scroll')
            else document.body.classList.remove('removed-scroll')
        },
        showAllProjects(btn) {

            btn.textContent = btn.textContent.trim() === "Все проекты" ? "Свернуть" : "Все проекты"

            let el_array = document.querySelectorAll('.card-list__item')

            for (let i = 0; i < el_array.length; i++) {
                el_array[i].classList.toggle('card-list__item_show-card')
                el_array[i].classList.toggle('card-list__item_mrb')
            }
        }
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.removed-scroll {
    overflow: hidden;
}

.main__my-projects {
    margin-bottom: 35px;
}

.my-projects__container {
    display: flex;
    flex-flow: column wrap;
    overflow: hidden;
}

.card-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.my-projects__card-list {
    margin-bottom: 45px;
}

.card-list__item {
    display: flex;
    flex-direction: column;
    padding: 313px 50px 50px 50px;
    width: 32%;
    border: #CACACA 1px solid;
}

.card-list__item_show-card:nth-child(n + 4) {
    display: none;
}

.card-list__item_mrb {
    margin-bottom: 20px;
}

@media screen and (max-width: 1000px) {

    .card-list__item {
        width: 48%;
    }

    .card-list__item_show-card:nth-child(3) {
        display: none;
    }
}

@media screen and (max-width: 678px) {
    .card-list {
        position: relative;
        width: 100%;
        flex-wrap: nowrap;
    }

    .card-list__item {
        display: flex;
        flex-shrink: 0;
        width: 100%;
    }

    .card-list__item:last-child {
        display: flex;
    }

    .my-projects__show-more {
        display: none;
    }

    .card-list__item_mr-right {
        margin-right: 20px;
    }

    .card-list__item_show-card:nth-child(3) {
        display: flex;
    }

    .card-list__item_show-card:nth-child(n + 4) {
        display: flex;
    }
}

.card-list__technology {
    margin-left: auto;
    font-size: 12px;
    color: $light-text-color;
}

.card-list__subtitle {
    font-size: 24px;
    margin-bottom: 36px;
}

.card-list__descr {
    margin-bottom: 35px;
}

.card-list__link {
    margin-top: auto;
    align-self: center;
    color: $purple-color;
    border-bottom: 1px solid $purple-color;
}

.pagination {
    display: none;
    align-self: center;
}

@media screen and (max-width: 678px) {
    .pagination {
        display: flex;
    }
}

.bullet {
    height: 15px;
    width: 15px;
    align-self: center;
    background-color: #CACACA;
    border-radius: 50px;
    transition: all 0.5s;
}

.selected-bullet {
    height: 13px;
    width: 13px;
    background-color: #999999;
}

.pagination__bullet:not(:last-child) {
    margin-right: 20px;
}

.my-projects__show-more {
    align-self: center;
    width: fit-content;
}
</style>
