import { Icon } from '@icon-park/vue-next/lib/runtime'
// 接口请求
export interface Options {
  methods: string
  url: string
  params?: object
  config?: object
  data?: object
}
// 自定义指令
export interface Binding {
  value: string
  oldValue: boolean
  arg: string
  modifiers: object
  instance: object
  dir: object
}
// 菜单
export interface Menu {
  key: string
  title: string | number
  icon?: Icon
  children?: Menu[]
  premission?: string
}
// 权限对象
export interface Premission {
  [key: string]: string | number | undefined
}
// 权限状态
export interface PreStore {
  premissionObj: Premission
}
// menu数据
export interface MenuData {
  [key: string]: Menu[]
}
// 切换menu
export interface MenuInit {
  item: object
  key: string
  keyPath: string[]
}
// 音乐馆
export interface IMusicMenu {
  label: string
  name: string
}
// banner
export interface Banner {
  pic: string
  targetId: number
  targetType: number
  typeTitle: string
  bannerId: number
}
// 验证码
export interface Captcha {
  phone: string
  captcha?: string
  ctcode?: string
}
// 登录
export interface Login {
  phone?: string
  password?: string
  captcha?: string
  countrycode?: string
  md5_password?: string
  email?: string
  key?: string
}
// 注册或修改密码
export interface Reg {
  captcha?: string
  phone?: string
  password?: string
  nickname?: string
  countrycode?: string
}
// 更换绑定手机
export interface Rebind {
  oldcaptcha: string
  captcha: string
  phone: string
  ctcode: string
  countrycode?: string
}
// 用户
export interface UserInfo {
  uid?: string | number
  gender?: string
  birthday?: string
  nickname?: string
  province?: string | number
  city?: string | number
  signature?: string
  imgSize?: number
  imgX?: number
  imgY?: number
}
