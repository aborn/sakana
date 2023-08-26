<template>
    <input v-model="searchText" type="text" />
    <Tree :nodes="data" :search-text="searchText" @onNodeExpanded="onNodeExpanded" @onCheckboxToggle="onCheckboxToggle"
        @onDataUpdated="onDataUpdated" @onToggleParentCheckbox="onToggleParentCheckbox" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Tree from 'vue3-tree';

const searchText = ref("");
const onNodeExpanded = (node, state) => {
    // console.log('state: ', state)
    // console.log('node: ', node)
};
const onCheckboxToggle = (node, state) => {
    // console.log('checkbox state: ', state)
    // console.log('checkbox node: ', node)
};
const onToggleParentCheckbox = (node, state) => {
    // console.log('parent checkbox state: ', state)
    // console.log('parent checkbox node: ', node)
};

const data = ref([
    {
        id: 1,
        label: 'Animal',
        nodes: [
            {
                id: 2,
                label: 'Dog',
            },
            {
                id: 3,
                label: 'Cat',
                nodes: [
                    {
                        id: 4,
                        label: 'Egyptian Mau Cat',
                    },
                    {
                        id: 5,
                        label: 'Japanese Bobtail Cat',
                    },
                ],
            },
        ],
    },
    {
        id: 6,
        label: 'People',
    },
    {
        id: 7,
        label: '中国人',
    },
]);
</script>