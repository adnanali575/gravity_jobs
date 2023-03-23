<template>
    <div class="select-input">

        <v-select style="width: 400px;" placeholder="efdls" v-model="selectedFruits" :items="fruits" label="Select Stacks"
            multiple>

            <template v-slot:append-item>
                <v-divider class="mb-2"></v-divider>
                <span class="d-flex justify-space-between px-5">
                    <v-btn @click="clear()" rounded class="text-primary px-12 py-6 d-flex align-center"
                        variant="flat">Clear</v-btn>
                    <v-btn rounded class="bg-primary px-12 py-6 d-flex align-center" variant="flat">Save</v-btn>
                </span>
            </template>
        </v-select>

    </div>
</template>

<script>

export default {
    data() {
        return {
            fruits: [
                'React',
                'Angular',
                'Node',
                'JQuery',
                'Vue',
                'JavaScript'
            ],
            selectedFruits: [],
        }

    },
    methods: {
        clear: function () {
            this.selectedFruits = []
        }
    }
}

</script>