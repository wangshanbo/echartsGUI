const proxyCas = '/cas'
const proxyUser = '/user'

const routers = {
    'userInfo': `${proxyUser}/userInfo/initUser`, // 检索登陆用户信息
    'getUserName': `${proxyCas}/homePage/homePage` // 验证是否登陆
}
export default routers
