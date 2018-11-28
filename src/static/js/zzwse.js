import axios from 'axios';

export const zzwse = {
    //后端服务器地址
    server_base:'',

    /**
     *  @param 登陆key
     * */
    key_login_user:'key_login_user',

    /**
     * 发起请求
     * @param type 请求类型
     * @param url  请求地址
     * @param data 数据
     *        数据类型： {}
     * @param success/err 成功失败回调
     * @return  无
     */
    axios:function({type='get',url,data,success,err}){
        let type = type.toLowerCase(),
            server_base = this.server_base;

        axios[type](server_base+url, data)
            .then(function (response) {
                success && success(response);
            })
            .catch(function (response) {
                err && err(response);
            });
    },

    /**
     * 设置cookie
     * @param Json
     *  {
     *      name:'hello',
     *      sex:'man',
     *      love:'逛街',
     *      work:'future'
     *  }
     *  @return 无
     * */
    setCookie:function(Json){
        for(key in Json){
            var d = new Date();
            d.setDate( d.getDate()+5 );
            document.cookie = key+'='+Json[key]+'; expires='+d.toUTCString();
        }
    },

    /**
     *  获取cookie
     *  @param Json
     *      getCookie('age','name')
     *
     *  @return {age:18,name:'zzw'}
     * */
    getCookie:function(){
        var cookie = document.cookie;
        var result = {};
        for(key in arguments){
            var val = '\\b'+arguments[key]+'=(\\w*)+';
            var reg =new RegExp(val,'i');
            val = reg.exec(cookie);
            result[arguments[key]] = val? decodeURI(val[1]):null;
        }
        return result;
    },

    /**
     *  删除cookie
     *  @param name
     *      removeCookie('name');
     *  @return 无
     * */
     removeCookie:function(){
        for(key in arguments){
            var json ={};
            json[arguments[key]]=null;
            setCookie(json,-1);
        }
    },

    /**
     * 设置本地存储数据
     * @param Json {key:'',value:''}
     * @return  无
    * */
    setItem:function(Json){
        for(let key in Json){
            let val = JSON.stringify(Json[key]);
            window.localStorage.setItem(key,val)
        }
    },

    /**
     * 获取本地存储数据
     * @param  ['abc','bcd']
     * @return {key:'abc',value:[1,2,3]}
     * */
    getItem:function(){
        var result = {};
        for(let key in arguments){
            let val = window.localStorage.getItem(key);
            val = JSON.parse(val);
            result[key] = val? window.localStorage.getItem(key):null;
        }
        return result;
    },

    /**
     *  账号登录
     *  @param phoneNum  登录手机号
     *  @return 无
     * */
    login:function(phoneNum){
        this.setCookie(this.key_login_user,phoneNum);
    },

    /**
     * 退出登陆
     * @return 无
     * */
    loginOut:function(){
        this.removeCookie(this.key_login_user);
    },

    /**
     *  检测登陆状态
     *  @return boolean
     * */
    isLogin:function () {
        return this.getCookie(this.key_login_user)?true:false;
    }
}