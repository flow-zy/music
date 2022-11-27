import musicMenu from '@/mock/musicMenu'
import { watch, ref } from 'vue'
import { useRouter, useRoute, RouteRecordName } from 'vue-router'
export const useMusicMenu = () => {
  const router = useRouter()
  const route = useRoute()

  const currentMenu = ref<RouteRecordName | null | undefined>(route.name)

  watch(
    () => route.name,
    (m: RouteRecordName | null | undefined) => {
      currentMenu.value = m
    }
  )
  const onTabClick = (name: string) => {
    router.push({ name })
  }
  return {
    musicMenu,
    onTabClick,
    currentMenu
  }
}
