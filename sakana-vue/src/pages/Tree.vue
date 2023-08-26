<template>
    <div>
        <Tree :nodes="nodes"> </Tree>
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from "vue"
import Tree from "vue3-treeview";

const nodes = ref({
    id1: {
        text: "text1",
        children: ["id11", "id12", "id13"],
        state: {
            checked: true,
            indeterminate: true,
            draggable: true,
            dropable: false
        },
    },
    id11: {
        text: "text11",
        children: ["id111", "id112", "id113"],
    },
    id111: {
        text: "id111",
    },
    id112: {
        text: "id112",
    },
    id113: {
        text: "id113",
    },
    id12: {
        text: "text12",
        children: [],
    },
    id13: {
        text: "text13",
        children: ["id131", "id132"],
    },
    id131: {
        text: "text131"
    },
    id132: {
        text: "text132"
    },
    id2: {
        text: "text2",
        children: ["id21", "id22"],
    },
    id21: {
        text: "text21",
        children: ["id211", "id212"],
    },
    id211: {
        text: "id211",
    },
    id212: {
        text: "id212",
    },
    id22: {
        text: "text12",
        children: [],
    },
    id3: {
        text: "text3"
    }
});
</script> 