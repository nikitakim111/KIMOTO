<template>
    <Transition name="appear">
        <div class="modal" v-if="isShowing">
            <div :class="`modal__content ${styleClass}`">
                <button class="modal__btn" @click="closeModal()">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L1 17M17 17L1 1L17 17Z" stroke="#614807" stroke-width="2"
                            stroke-linecap="round" />
                    </svg>
                </button>
                <slot></slot>
            </div>
            <div @click="closeModalByFadeClick()" class="modal__fade"></div>
        </div>
    </Transition>
</template>

<script>
export default {
    props: {
        styleClass: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    },
    computed: {
        isShowing() {
            return this.$store.state.isShowing
        },
        canClickFadeCloseModal() {
            return this.$store.state.canClickFadeCloseModal
        }
    },
    methods: {
        closeModalByFadeClick() {
            if (this.canClickFadeCloseModal) this.$store.commit('toggleModal')
        },
        closeModal() {
            this.$store.commit('toggleModal')
        }
    },
    beforeUnmount() {
        this.$store.state.isShowing = false
    }
}
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: all 0.3s;
}

.modal__btn {
    display: block;
    margin-left: auto;
    cursor: pointer;
}

.modal__fade {
    position: absolute;
    background-color: #000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.3;
    z-index: 0;
}

.width_large {
    width: 92%;
}

.height_642 {
    min-height: 642px;
}

.modal__content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    z-index: 1;
    opacity: 1;
    transition: all 0.4s;
}

.appear-leave-to,
.appear-enter-from {

    .modal__fade,
    .modal__content {
        opacity: 0
    }
}
</style>
