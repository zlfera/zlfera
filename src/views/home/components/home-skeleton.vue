<template>
    <div class="home-skeleton">
        <div class="item" v-for="i in 4" :key="i" :style="{ backgroundColor: bg }">
            <XtxSkeleton bg="e4e4e4" width="306px" height="306px" :animated="true" />
            <XtxSkeleton bg="#e4e4e4" width="160px" height="24px" />
            <XtxSkeleton bg="#e4e4e4" width="120px" height="24px" />
        </div>
    </div>
</template>
<script setup lang="ts">
import XtxSkeleton from "@/components/librarys/xtx-skeleton.vue";
withDefaults(defineProps<{ bg: string }>(), { bg: "#fff" });
</script>
