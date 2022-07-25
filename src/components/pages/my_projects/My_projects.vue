<template>
    <section class="my-projects main__my-projects" id="my-projects_section">
        <div class="container my-projects__container">
            <h2 class="heading">Мои проекты</h2>
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
                    <a href="#" class="card-list__link">
                        {{ link_text }}
                    </a>
                </li>
            </ul>
            <div class="pagination">
                <div class="bullet pagination__bullet" v-for="(card, index) in cards" :key="index"
                    @click="bulletClicked(index)">
                </div>
            </div>
            <a @click="showAllProjects($event.target)" class="show-more my-projects__show-more"
                href="#my-projects_section">
                Все проекты
            </a>
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
                    title: 'Формы',
                    descr: 'Работа с формой',
                    technology: 'Form',
                },
                {
                    title: 'Таймер',
                    descr: 'Обыкновенный красивый таймер :)',
                    technology: 'Async',
                },
                {
                    title: 'Гибридированние слов',
                    descr: 'Смешиваем два слова - получаем что-то странное, а может даже и смешное',
                    technology: 'Regex',
                },
            ],
            link_text: 'Смотреть',
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
        };
    },
    mounted() {
        this.slides.slidesAmount = this.cards.length;
        this.slides.nextSlideStep = this.windowChangeSize();
        window.addEventListener("resize", this.windowChangeSize);
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
