import { Login, Captcha, Reg, Rebind, UserInfo } from '@/types'
import { request } from '@/utils'
/**
 *  @description: 获取banner数据
 * @params {type: string} 类型
 * @return Promise
 */
const useBanner = () =>
  request({
    methods: 'get',
    url: '/banner',
    params: {
      type: 1
    }
  })
/**
 * @description: 发送验证码
 * @params phone: 手机号码
 * @return Promise
 */
const useCaptcha = (params: Captcha) =>
  request({
    methods: 'get',
    url: '/captcha/sent',
    params
  })
//   验证验证码
const useCaptchaVerify = (params: Captcha) =>
  request({
    methods: 'get',
    url: '/captcha/verify',
    params
  })
/**
 * @description: 手机登录
 * @params phone: 手机号码 password: 密码 countrycode: 国家码，用于国外手机号登录
 *                         md5_password: md5 加密后的密码,传入后 password 参数将失效
 *                         captcha: 验证码
 * @return Promise
 */
const useLoginByPhone = (data: Login) =>
  request({
    methods: 'post',
    url: '/login/cellphone',
    data
  })
//   邮箱登录
const useLoginByEmail = (email: string, password: string) =>
  request({
    methods: 'post',
    url: '/login',
    data: {
      email,
      password
    }
  })
//   二维码登录
// 生成key
const useQrKey = () => request({ methods: 'get', url: '/login/qr/key' })
// 渲染二维码
const useQrCreat = (params: Login) =>
  request({ methods: 'get', url: '/login/qr/create', params })
//   登录
const useLoginByQr = (data: Login) =>
  request({
    methods: 'post',
    url: '/login',
    data
  })
//   游客登录
const useAnimous = () => request({ methods: 'get', url: '/register/anonimous' })
// 刷新登录
const useRefresh = () => request({ methods: 'get', url: '/login/refresh' })
// 注册(修改密码)
const useReg = (data: Reg) =>
  request({ methods: 'post', url: '/register/cellphone', data })
// 检查号码是否被注册
const useCell = (data: Reg) =>
  request({
    methods: 'post',
    url: '/cellphone/existence/check',
    data
  })
//   初始化昵称
const useRefreshNickName = (data: Reg) =>
  request({ methods: 'post', url: '/activate/init/profile', data })
//   检查重复昵称
const useCheckNickName = (data: Reg) =>
  request({ methods: 'post', url: '/nickname/check', data })
//   更换绑定手机
const useRebind = (data: Rebind) =>
  request({ methods: 'post', url: '/rebind', data })
//   退出登录
const useLogout = () => request({ methods: 'post', url: '/logout' })
// 用户详情
const useUserDetail = (params: UserInfo) =>
  request({ methods: 'get', url: '/user/detail', params })
//   账号信息
const useUserAccount = (params: UserInfo) =>
  request({ methods: 'get', url: '/user/account', params })
//   获取用户信息 , 歌单，收藏，mv, dj 数量
const useUserSubcount = (params: UserInfo) =>
  request({ methods: 'get', url: '/user/subcount', params })
//   获取用户等级信息
const useUserLevel = (params: UserInfo) =>
  request({ methods: 'get', url: '/user/binding', params })
//   用户绑定手机
const useReplacePhone = (data: Rebind) =>
  request({ methods: 'post', url: '/user/replacephone', data })
//   更新用户信息
const useUserUpdata = (data: UserInfo) =>
  request({ methods: 'post', url: '/user/update', data })
//   更新用户头像
const useUserUpload = (data: UserInfo) =>
  request({ methods: 'post', url: '/avatar/upload', data })
//   国家编码列表
const useCountries = () =>
  request({ methods: 'get', url: '/countries/code/list' })
// 用户歌单
const usePlaylist = (params: UserInfo) =>
  request({ methods: 'get', url: '/playlist', params })
export {
  usePlaylist,
  useCountries,
  useUserUpload,
  useUserUpdata,
  useReplacePhone,
  useUserLevel,
  useBanner,
  useCaptcha,
  useLoginByPhone,
  useLoginByEmail,
  useLoginByQr,
  useQrCreat,
  useQrKey,
  useAnimous,
  useCaptchaVerify,
  useRefresh,
  useReg,
  useCell,
  useRefreshNickName,
  useCheckNickName,
  useRebind,
  useLogout,
  useUserDetail,
  useUserAccount,
  useUserSubcount
}
