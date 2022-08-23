<template>
    <div class="white-panel add-target">
        <h2 class="add-target-title">Мои цели</h2>
        <button @click="toggleModal()" class="btn-add-target" to="test">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11.6445 3.26562H10.3555C10.2409 3.26562 10.1836 3.32292 10.1836 3.4375V18.5625C10.1836 18.6771 10.2409 18.7344 10.3555 18.7344H11.6445C11.7591 18.7344 11.8164 18.6771 11.8164 18.5625V3.4375C11.8164 3.32292 11.7591 3.26562 11.6445 3.26562Z"
                    fill="black" />
                <path
                    d="M18.2188 10.1836H3.78125C3.66667 10.1836 3.60938 10.2409 3.60938 10.3555V11.6445C3.60938 11.7591 3.66667 11.8164 3.78125 11.8164H18.2188C18.3333 11.8164 18.3906 11.7591 18.3906 11.6445V10.3555C18.3906 10.2409 18.3333 10.1836 18.2188 10.1836Z"
                    fill="black" />
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        toggleModal() {
            this.$store.commit('toggleModal')
        }
    }
}
</script>

<style lang="scss" scoped>
.add-target {
    margin-bottom: 25px;
    padding: 14px;
}

.add-target-title {
    font-size: 18px;
    font-weight: 700;
    margin: auto;
}

.btn-add-target {
    cursor: pointer;
}
</style>
