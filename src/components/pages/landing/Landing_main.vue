<template>
    <main class="main">
        <My_projects />
        <About_me />
        <Contacts />
    </main>
</template>

<script>

import My_projects from '@/components/pages/landing/my_projects/My_projects.vue'
import About_me from '@/components/pages/landing/about_me/About_me.vue'
import Contacts from '@/components/pages/landing/contacts/Contacts.vue'

export default {
    components: { My_projects, About_me, Contacts, }
}
</script>
