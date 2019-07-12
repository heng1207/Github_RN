
/*
*
*全局导航栏跳转工具
*
*/

export default  class NavigationUtil {


    /*
    *
    *   @params 要传递的参数
    *   @page  要跳转的页面名
    * */

    static  goPage(params, page){

        const navigation = NavigationUtil.navigation;
        if (!navigation){
            console.log("NavigationUtil.navigator can not be null");
            return;
        }
        navigation.navigate(
            page,
            {
                ...params
            }
        )
    }



    /*
    * 返回上一页
    * */
    static  goBack(navigation){
        navigation.goBack()
    }


    /*
    * 重置到首页
    * */
    static  resetToHomePage(parmas){
        const  {navigation} = parmas;
        navigation.navigate("Main");
    }

}
