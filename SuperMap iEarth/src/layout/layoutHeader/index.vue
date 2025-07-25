<template>
  <n-layout-header bordered>
    <div class="header-container" v-if="headShow">
      <div class="head-content header-left"></div>

      <!-- 头部 Open -->
      <div class="head-content header-center">
        <img :src="imgurl" />
        <span class="head-title" :title="appName">{{ appName }}</span>
        <i class="iconfont iconxiala" @click="headerFold"></i>
      </div>

      <!-- 用户 -->
      <div class="head-content header-right">
        <User></User>
      </div>
    </div>

    <!-- 头部 Down -->
    <div class="headerFoldBox" v-else>
      <i
        class="iconfont iconxiala downSvg"
        @click="headerOpen"
        style="font-size: 0.12rem"
      ></i>
    </div>
  </n-layout-header>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { IportalStoreCreate } from "@/store/iportalManage/index";
import { User } from "./components/user/index";

const IportalStore = IportalStoreCreate();
const imgurl = ref("./logo.png");

const appName: any = computed(() => {
  if (IportalStore.SceneName && IportalStore.SceneName.length > 0) {
    return IportalStore.SceneName;
  } else {
    return $t("earth3D");
  }
});

let headShow = ref(true);
// 页头折叠
function headerFold() {
  headShow.value = false;
}
// 页头展开
function headerOpen() {
  headShow.value = true;
}
</script>

<style lang="scss">
.head-title {
  font-family: "OptimizationTitle";
}

.header-container {
  position: absolute;
  z-index: 100;

  background-size: 100% 0.48rem;

  @include setBackground(100%, 0.48rem, "@/assets/images/header-bg.png");
  @include flexLayout(center);
  .head-title {
    overflow: hidden;

    max-width: 4rem;

    white-space: nowrap;
    text-overflow: ellipsis;

    color: rgba(255, 255, 255, 0.85);

    font-size: 0.28rem;
  }

  .head-content {
    width: 33%;

    @include flexLayout(center);
  }

  .header-center {
    img {
      width: 0.36rem;
      height: 0.36rem;
    }
  }

  .header-right {
    justify-content: end;
  }

  .iconxiala {
    margin-left: 0.1rem;

    transform: rotate(180deg);

    font-size: 0.12rem;
  }
}

.headerFoldBox {
  position: absolute;
  z-index: 100;
  top: 0%;
  left: 50%;

  width: 1.1rem;
  height: 0.15rem;

  transform: translate(-50%, 0%);
  text-align: center;

  @include setBackground(100%, 0.48rem, "@/assets/images/header-fold-bg.png");
}
</style>
