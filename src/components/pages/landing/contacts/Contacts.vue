<template>
    <section class="contacts main__contacts" id="contacts-section">
        <div class="container">
            <h2 class="heading">
                Контакты
            </h2>
            <div class="contacts__info-container">
                <a href="mailto:nikita.kim.12@gmail.com" class="mail contacts__mail">
                    <strong>Почта: </strong>
                    nikita.kim.12@gmail.com
                </a>
                <div class="social-block">
                    <a href="https://t.me/NikitaKim12" class="social-block__icon social-icon social-tg"></a>
                    <a href="https://wa.me/79066677981" class="social-block__icon social-icon social-wt"></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import header from './contacts.scss'

export default {
    data() {
        return {
        };
    },
};
</script>
