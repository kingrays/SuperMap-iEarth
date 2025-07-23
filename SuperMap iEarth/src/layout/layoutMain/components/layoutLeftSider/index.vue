<template>
  <div class="left-tool-bar">
    <span
      class="icon-container"
      v-for="iconItem in panelStore.panelList.leftToolBarList"
      :key="iconItem.id"
      :class="iconItem.isSelected ? 'select-too-bar-bg' : ''"
      @click="changePanel(iconItem)"
    >
      <i
        class="iconfont"
        :class="iconItem.iconName"
        :title="$t(iconItem.title)"
      ></i>
    </span>
  </div>
</template>

<script setup lang="ts">
import { usePanelStore } from "@/store";
const panelStore = usePanelStore();

// 切换面板
function changePanel(iconItem: any) {
  panelStore.setLeftToolBarList(iconItem);

  setTimeout(() => {
    setLeftPanelStyle(iconItem.id);
  });
}

// 左侧面板宽度样式切换
function setLeftPanelStyle(id: number) {
  let dom_header: any = document.getElementsByClassName("panle-header");
  let dom_container: any = document.getElementsByClassName("panle-container");
  let dom_footer: any = document.getElementsByClassName("panle-footer");
  let zst1: any = document.getElementsByClassName("zst1");

  if (id === 1) {
    if (dom_header.length > 0) {
      dom_header[0].style.width = "2.8rem";
    }
    if (dom_container.length > 0) {
      dom_container[0].style.width = "2.8rem";
    }
    if (dom_footer.length > 0) {
      dom_footer[0].style.width = "2.8rem";
    }
    if (zst1.length > 0) {
      zst1[0].style.left = "1.1rem";
    }
  } else if (id === 2) {
    if (dom_header.length > 0) {
      dom_header[0].style.width = "3.84rem";
    }
    if (dom_container.length > 0) {
      dom_container[0].style.width = "3.84rem";
    }
    if (dom_footer.length > 0) {
      dom_footer[0].style.width = "3.84rem";
    }
    if (zst1.length > 0) {
      zst1[0].style.left = "1.6rem";
    }
  }
}
</script>

<style lang="scss" scoped>
.left-tool-bar {
  position: fixed;
  z-index: 100;
  top: 0.8rem;
  left: 0.16rem;

  box-sizing: border-box;
  padding-top: 0.06rem;

  @include setBackground(0.32rem, 0.76rem, "@/assets/images/left-tool-bg.png");

  .icon-container {
    display: block;

    width: 100%;
    height: 0.32rem;

    @include flexLayout(center);
    @include setIconstyle();
    @include transition;

    &.select-too-bar-bg {
      color: #66bbff;
    }
    &:hover {
      color: #a3a3a3;
    }
  }

  // .select-too-bar-bg {
  //   @include setBackground(
  //     0.32rem,
  //     0.32rem,
  //     "@/assets/images/item-checked-bg.png"
  //   );
  // }
}
</style>
