<template>
    <div class="account">
        <v-sheet class="form-container">
            <SignUpForm></SignUpForm>
        </v-sheet>
    </div>
</template>

<script setup lang="ts">
import SignUpForm from '@/components/SignUpForm.vue';
</script>

<style scoped>

.account{
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form-container{
    width: 600px;
    padding: 40px;
    margin-top: 20px;
}

</style>