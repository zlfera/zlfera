<template>
    <div class="xtx-bread-item">
        <RouterLink v-if="to" :to="to">
            <slot />
        </RouterLink>
        <span v-else>
            <slot />
        </span>
        <!-- <i class="iconfont icon-angle-right"></i> -->
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



const p = withDefaults(defineProps<{ to: string | object }>(), {
    to: '',
})
</script>
<style lang="ts"></style>