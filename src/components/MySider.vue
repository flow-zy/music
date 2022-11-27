<template>
  <a-layout-sider width="212">
    <div class="logo"></div>
    <a-menu v-model:selectedKeys="selectedKeys" @click="changeRoute">
      <template v-for="(menuItem, key) in menu" :key="key">
        <p class="title">{{ key }}</p>
        <template v-for="menu in menuItem" :key="menu.key">
          <template v-if="!menu.children">
            <a-menu-item class="item" :key="menu.key">
              <template #icon>
                <IconPark :icon="menu.icon" :size="18" />
              </template>
              {{ menu.title }}
            </a-menu-item>
          </template>
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import menuData from '@/mock/menuFile'
import { preStore } from '@/store/premission'
import { MenuData, Menu, MenuInit } from '@/types'
const store = preStore()
const router = useRouter()
// 侧边栏
const menu = computed((): MenuData => {
  const newMenu: MenuData = {}
  Object.keys(menuData).forEach((key: string) => {
    newMenu[key] = menuData[key]
    newMenu[key] = newMenu[key].filter(
      (menuItem: Menu) =>
        !menuItem.premission || store.premissionObj[menuItem.premission]
    )
  })
  return newMenu
})
// 选择的菜单
const selectedKeys = ref<string>(
  !store.premissionObj?.auth ? ['hall'] : ['recommend']
)
// 切换路由
const changeRoute = (item: MenuInit) => {
  router.push(item.key)
}
</script>

<style scoped lang="less">
.logo {
  height: 76px;
  padding: 0 26px;
  background-color: #fff;
  background-position: center center;
}
:deep(.ant-menu) {
  padding: 0 26px;
  height: calc(100% - 76px);
  .title {
    color: rgb(123, 123, 123);
    font-size: 12px;
    margin: 46px 0 16px;
    &:first-of-type {
      margin-top: 24px;
    }
  }
  .item {
    height: 30px;
    line-height: 30px;
    width: 160px;
    border-radius: 5px;
    display: flex;
    align-self: center;

    &:hover {
      color: #000;
      background-color: rgb(221, 221, 221);
    }
  }
}
</style>
