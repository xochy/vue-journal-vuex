<template>
    <div v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
            </div>
            <div>
                <button class="btn btn-danger mx-2">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="btn btn-primary">
                    Subir foto
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>
        <hr>
        <div class="d-flex flex-column px-3 h-75">
            <textarea
                v-model="entry.text"
                placeholder="Whats going on?"
            >
            </textarea>
        </div>
        <Fab icon="fa-save" @on:click="saveEntry"/>
        <img src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" alt="entry-picture" class="img-thumbnail">
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'

import getDayMonthYear from '../helpers/getDayMonthYear'

export default {
    props: {
        id: {
            type: String,
            required: true
        },
    },
    components: {
        Fab: defineAsyncComponent(() => import('../components/FabComponent.vue'))
    },
    data() {
        return {
            entry: null
        }
    },
    created() {
        this.loadEntry()
    },
    methods: {
        ...mapActions('journal', ['updateEntry']),
        loadEntry() {
            const entry = this.getEntryById(this.id)

            if (!entry) {
                this.$router.push({name: 'no-entry'})
            }

            this.entry = entry
        },
        async saveEntry() {
            this.updateEntry(this.entry)
        }
    },
    computed: {
        ...mapGetters('journal', ['getEntryById']),
        day() {
            const { day } = getDayMonthYear(this.entry.date)
            return day
        },
        month() {
            const { month } = getDayMonthYear(this.entry.date)
            return month
        },
        yearDay() {
            const { yearDay } = getDayMonthYear(this.entry.date)
            return yearDay
        },
    },
    watch: {
        id() {
            this.loadEntry()
        }
    }
}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>