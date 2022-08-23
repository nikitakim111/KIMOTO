<template>
    <Target_input />
    <section class="todo-section">
        <div class="container todo-section__container">
            <div class="todo-row">
                <Add_target />
                <ul class="todo-section__list">
                    <li class="todo-section__item">
                        <Target_panel />
                    </li>
                    <li>
                        <Target_panel />
                    </li>
                </ul>
            </div>
            <div class="execution-row">
                <Execution_block />
                <ul class="todo-section__list">
                    <li class="todo-section__item">
                        <Target_panel />
                    </li>
                    <li class="todo-section__item">
                        <Target_panel />
                    </li>
                    <li class="todo-section__item">
                        <Target_panel />
                    </li>
                </ul>
            </div>
        </div>
        <Modal style-class="width_large height_642">
            asdasda
        </Modal>
    </section>
</template>

<script>
import Target_panel from './target_panel/Target_panel.vue'
import Add_target from './add_target/Add_target.vue'
import Execution_block from './execution_block/Execution_block.vue'
import Modal from '@/components/common_components/modal_w/Modal.vue'

import Target_input from './target_widgets/target_input.vue'

export default {
    components: { Target_panel, Add_target, Add_target, Execution_block, Modal, Target_input, Target_input },
}
</script>

<style lang="scss" scoped>
.todo-section__container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: baseline;
    column-gap: 26px;
}

.todo-section__item:not(:last-child) {
    margin-bottom: 10px;
}

.execution-row {
    .target-panel {
        border-radius: 0;
    }
}
</style>
