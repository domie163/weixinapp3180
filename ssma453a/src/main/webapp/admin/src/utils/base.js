const base = {
    get() {
        return {
            url : "http://localhost:8080/ssma453a/",
            name: "ssma453a",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssma453a/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "家庭大厨微信小程序"
        } 
    }
}
export default base
