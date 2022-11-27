import { MenuData } from '@/types'
import {
  Planet,
  Music,
  VideoOne,
  Fm,
  Like,
  Computer,
  PlayTwo
} from '@icon-park/vue-next'
const menuData: MenuData = {
  在线音乐: [
    { key: 'recommend', title: '推荐', icon: Planet, premission: 'auth' },
    { key: 'hall', title: '音乐馆', icon: Music },
    { key: 'video', title: '视频', icon: VideoOne },
    { key: 'radio', title: '电台', icon: Fm }
  ],
  本地音乐: [
    { key: 'like', title: '我喜欢', icon: Like, premission: 'auth' },
    { key: 'local', title: '本地和下载', icon: Computer },
    { key: 'plays', title: '最近播放', icon: PlayTwo },
    { key: 'playsList', title: '试听列表', icon: PlayTwo },
    { key: 'pay', title: '已购音乐', icon: PlayTwo, premission: 'auth' }
  ],
  创建歌单: [],
  收藏歌单: []
}
export default menuData
