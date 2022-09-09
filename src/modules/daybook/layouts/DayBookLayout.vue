<template>
    <div>
        <Navbar />

        <div v-if="isLoading" class="row justify-content-sm-center">
            <div class="col-3 alert-info text-center mt-5">
                Espere por favor...
                <h3 class="mt-2">
                    <i class="fa fa-spin fa-sync"></i>
                </h3>
            </div>
        </div>

        <div v-else class="d-flex">
            <div class="col-4">
                <EntryList />
            </div>
            <div class="col">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import { defineAsyncComponent } from 'vue'
export default {
    components: {
        Navbar: defineAsyncComponent(() => import('../components/NavbarComponent.vue')),
        EntryList: defineAsyncComponent(() => import('../components/EntryListComponent.vue')),
    },
    methods: {
        ...mapActions('journal', ['loadEntries'])
    },
    computed: {
        ...mapState('journal', ['isLoading'])
    },
    created() {
        this.loadEntries()
    }
}
</script>