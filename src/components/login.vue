<!-- 登录组件 -->
<template>
  <div class="component-login" @mousedown="isClose">
    <div class="close">
      <span>
        <i class="iconfont icon-cuo" @click="closeWindow"></i>
      </span>
    </div>
    <div class="login-title">
      <span>账号密码登录</span>
    </div>
    <div class="login-form">
      <form action>
        <input type="text" name="phone" placeholder="手机号">
        <input type="password" name="password" placeholder="密码">
        <button class="btn-sub">进入新闻</button>
      </form>
    </div>
    <div class="terms">
      <span>
        点击查看
        <a href>"用户协议"</a> 和
        <a href>"隐私政策"</a>
      </span>
    </div>
    <div class="way">
      <span class="register" @click="checkText">{{registerText}}</span>
      |
      <span class="pwdLogin" @click="checkText">{{pwdLoginText}}</span>
      |
      <span>隐私设置</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerText: "账号注册",
      pwdLoginText: "密码登录"
    };
  },
  methods: {
    //关闭当前登录页
    closeWindow() {
      this.$emit("close", true);
    },

    //改变文本值
    checkText(event) {
      let name = event.target.className;
      let { registerText, pwdLoginText } = this;
      if (name === "register" && registerText !== "手机登录") {
        this.registerText = "手机登录";
        this.pwdLoginText = "密码登录";
      }
      if (name === "pwdLogin" && pwdLoginText !== "手机登录") {
        this.pwdLoginText = "手机登录";
        this.registerText = "账号注册";
      }
      if (name === "register" && registerText === "手机登录") {
        this.registerText = "账号注册";
      }
      if (name === "pwdLogin" && pwdLoginText === "手机登录") {
        this.pwdLoginText = "密码登录";
      }
    },
    //判断是否下拉关闭
    isClose(event) {
      console.log(event);

      document.onmousemove = function() {
        console.log("滑动");
      };
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" >
.component-login {
  width: 100%;
  height: 100%;
  background: #fafafa;
  margin-top: 10px;
  padding-top: 10px;
  border-radius: 15px 15px 0 0;
  position: relative;

  .close {
    text-align: right;

    span {
      margin-right: 10px;

      i {
        font-size: 20px;
      }
    }
  }

  .login-title {
    text-align: center;
    padding: 30px 0;
  }

  .login-form {
    text-align: center;

    input, .btn-sub {
      width: 80%;
      height: 40px;
      border-radius: 20px;
      line-height: 42px;
      outline: none;
      padding: 0 20px;
      border: 1px solid #ccc;
    }

    input[type='password'], .btn-sub {
      margin-top: 20px;
      border: 1px solid #ccc;
    }

    .btn-sub {
      background: #edacab;
      border: 1px solid #edacab;
      color: #fff;
      box-sizing: content-box;
      font-size: 16px;
      margin-bottom: 15px;
    }
  }

  .terms {
    font-size: 14px;
    text-align: center;
  }

  >.way {
    position: absolute;
    width: 100%;
    bottom: 45px;
    text-align: center;

    span {
      font-size: 14px;
      color: #7e8c8d;
      margin: 0 10px;
    }
  }
}
</style>