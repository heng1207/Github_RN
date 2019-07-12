
/*
*
*全局导航栏跳转工具
*
*/

export default  class navigationUtil {


    /*
    * 返回上一页
    * */
    static  resetToHomePage(navigation){
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
