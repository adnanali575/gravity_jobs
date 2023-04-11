<template>
    <div>
        
        <v-dialog transition="dialog-top-transition" width="auto">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" flat icon="">
                  <img src="@/assets/icons/pencil_signature.svg" />
                </v-btn>
        <span>
 
        </span>
      </template>

      <template v-slot:default="{ isActive }">
        <v-sheet width="500px" height="400px"></v-sheet>
      </template>
    </v-dialog>
    </div>
</template>