<template>
  <n-layout-content>
    <panel-layer />
    <layout-left-sider></layout-left-sider>
    <viewer></viewer>
    <layout-right-sider></layout-right-sider>
    <panel></panel>
  </n-layout-content>
</template>

<script setup lang="ts">
import Viewer from "@/views/viewer/index";
import LayoutLeftSider from "@/layout/layoutMain/components/layoutLeftSider/index";
import LayoutRightSider from "@/layout/layoutMain/components/layoutRightSider/index";
import Panel from "@/views/panel/index";
import PanelLayer from "@/views/panelLayer/index";
</script>
