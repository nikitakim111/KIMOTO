<template>
    <div class="container">
        <div class="white-panel target-input">
            <div class="target-input__wrapper">
                <h3 class="target-input__title">

                </h3>
                <input @toggleEditMode="test()" type="text">
                <Edit_btn />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import Edit_btn from '@/components/common_components/Edit_btn.vue'

function test() {
    console.log('test')
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.target-input {
    padding: 19px 26px 22px 26px;
    margin: 0 auto;
    font-size: $subtitle-fontSize;
}

.target-input__wrapper {
    margin: auto;
}

.container {
    margin-bottom: 20px;
}
</style>
