<template>
    <div class="xtx-bread-item">
        <RouterLink :to="to" v-if="to">
            <slot />
        </RouterLink>
        <span v-else>
            <slot />
        </span>
    </div>
</template>

<script lang="ts" setup>

//import { useSlots } from 'vue';
import { RouterLink } from 'vue-router';
// const slots = useSlots().default


// const zlf =

//     (

//         <div class="xtx-bread-item">
//             <RouterLink to='' v-if="to">
//                 {slots}
//             </RouterLink>
//             <span v-else>
//                 {slots}
//             </span>
//             <i class="iconfont icon-angle-right"></i>
//         </div >


//     )



withDefaults(defineProps<{ to: string | object }>(), {
    to: '',
})
</script>
<style lang="ts"></style>