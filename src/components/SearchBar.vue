<template>
    <div class="search-bar-container">

        <v-sheet v-if="true" id="search-bar"
            class="d-none d-sm-none d-md-none d-lg-flex d-xl-flex search-bar bg-input-background px-5 rounded-pill d-flex align-center">
            Card
            <v-btn class="bg-primary" icon="">S</v-btn>
        </v-sheet>

        <span class="d-block d-sm-block d-md-block d-lg-none d-none">
            <v-img src="@/assets/icons/logo.svg" width="115px"></v-img>
        </span>

    </div>
</template>


<style>
.search-bar {
    width: 832px;
    height: 56px;
    background-color: red;
}

@media (max-width: 600px) {
    #search-bar {
        visibility: hidden;
    }
}
</style>