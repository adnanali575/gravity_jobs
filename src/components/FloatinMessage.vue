<template>
    <div class="floating-message">
       <router-link to="/search">
        <img src="@/assets/icons/messenger_2.svg">
    </router-link>
    </div>
</template>


<style scoped>

.floating-message{
    position: fixed;
    right: 40px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    z-index: 1000;
}

@media(max-width: 1280px){
    .floating-message{
        bottom: 60px;
    }
}

</style>