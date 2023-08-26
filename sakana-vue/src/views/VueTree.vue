<template>
    <tree-view id="my-tree" :initial-model="dataModel"></tree-view>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { TreeView } from "@grapoza/vue-tree"
const dataModel = ref([
    {
        id: "numberOrString",
        label: "Root Node",
        children: [
            { id: 1, label: "Child Node" },
            { id: "node2", label: "Second Child" }
        ]
    }
])
</script>