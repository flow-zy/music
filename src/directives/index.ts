import premission from './premissions'
const directives: any = {
  premission
}
// 进行循环注册指令
const registerDirective = (app: any) => {
  Object.keys(directives).forEach(key => {
    app.directive(key, directives[key])
  })
}
export default registerDirective
