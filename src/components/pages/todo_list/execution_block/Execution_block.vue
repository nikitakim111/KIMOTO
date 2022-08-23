<template>
    <div class="execution-block">
        <div class="white-panel execution-block__wrapper">
            <h2 class="execution-block__title">Выполняю</h2>
        </div>
        <div class="execution-block__descr-block">
            <p class="execution-block__descr-title">
                Начало выполнения задачи открывает вам возможность вести дневник, видеть дату окончания и выполнять
                задачи
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.execution-block {
    margin-bottom: 25px;
}

.execution-block__wrapper {
    padding: 14px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}

.execution-block__title {
    font-size: 18px;
    font-weight: 700;
    margin: auto;
}

.execution-block__descr-block {
    padding: 56px 13px;
    background: linear-gradient(180deg, #005C97 0%, #363795 100%);
    border-radius: 0px 0px 10px 10px;
    color: #fff;
    text-align: center;
}
</style>
