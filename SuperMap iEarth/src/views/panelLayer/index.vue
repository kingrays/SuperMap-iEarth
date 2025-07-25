<template>
  <div class="panel-layer">
    <!-- 头部 -->
    <div class="panel-header">
      <div class="header-left">
        <img :src="logoImg" alt="" />
        <div class="title">
          <span class="title-main">{{ $t("t_layerList") }}</span>
          <span class="title-sub">Layer List</span>
        </div>
      </div>
      <div class="panel-close">
        <span class="iconfont iconguanbi"></span>
      </div>
    </div>

    <!-- 内容 -->
    <div class="panel-body">
      <n-tree block-line :data="treeData" expand-on-click checkable />
    </div>
  </div>
</template>

<script setup lang="ts">
import logoImg from "@/assets/images/logo.png";
import { useLayerStore } from "@/store";
import { onMounted } from "vue";
import { ILayerPanelConfigItem } from "./index.d";
import { storeToRefs } from "pinia";

const layerStore = useLayerStore();
const { layerPanelTreeData: treeData } = storeToRefs(layerStore);

onMounted(() => {
  const config: ILayerPanelConfigItem[] = window.layerPanelConfig;

  const data = config?.map((item, idx) => {
    return {
      label: item.name,
      key: idx,
      ...item,
      children: item.children?.map((child, cIdx) => {
        return {
          label: $t(child.name) || child.name,
          key: idx + "-" + cIdx,
          ...child,
        };
      }),
    };
  });

  layerStore.setLayerPanelTreeData(data);
});
</script>

<style lang="scss" scoped>
.panel-layer {
  z-index: 100;

  box-sizing: border-box;
  width: vw(350);
  height: vh(900);
  padding: vw(20);

  background: linear-gradient(
    30deg,
    rgba(0, 138, 148, 0.7),
    rgba(0, 54, 126, 0.7)
  );

  backdrop-filter: blur(0.1rem);
  @include fixed($top: 0.6rem, $right: 0.2rem);
  .panel-header {
    color: #eee;

    font-family: "OptimizationTitle";
    font-size: 0.2rem;

    @include flexLayout;
    .header-left {
      @include flexLayout($align: flex-end);
      > img {
        width: 0.25rem;
        height: 0.25rem;
        margin-right: 0.1rem;
      }
      .title {
        @include flexLayout($align: flex-end);
        .title-main {
          font-size: 0.2rem;
          line-height: 0.2rem;
        }

        .title-sub {
          margin-left: 0.1rem;

          opacity: 0.7;

          font-size: 0.1rem;
        }
      }
    }
    .panel-close {
      cursor: pointer;

      @include transition;
      &:hover {
        color: #aaa;
      }
    }
  }
  .panel-body {
    overflow: auto;

    max-height: vh(780);
    margin-top: 0.15rem;

    @include setScrollBar;
  }
}
</style>
