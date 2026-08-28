<template>  
  <div>
    <!-- one -->
     <page-one></page-one>
    <!-- two -->   
     <page-two></page-two>
    <!-- three --> 
     <page-three></page-three>
    <!-- four --> 
     <page-four></page-four>
    <!-- guide -->
     <guide-mcp></guide-mcp>
    <!-- five -->
     <page-five></page-five>
    <!-- six -->  
     <page-six></page-six>
    <!-- seven -->  
     <page-seven></page-seven>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue' 
import PageOne from "./part/page-one.vue";     
import PageTwo from "./part/page-two.vue";
import PageThree from "./part/page-three.vue";
import PageFour from "./part/page-four.vue";
import GuideMcp from "../guide/index.vue";
import PageFive from "./part/page-five.vue";
import PageSix from "./part/page-six.vue";
import PageSeven from "./part/page-seven.vue";
</script>    