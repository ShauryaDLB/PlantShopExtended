<template>
  <div class="login">
    <div class="form-box">
      <div class="button-box">
        <div id="btn"></div>
        <button id="login-btn" @click="login()">
          {{ $t("login.login") }}
        </button>
        <button id="register-btn" @click="register()">
          {{ $t("login.register") }}
        </button>
      </div>
      <div class="social-icons">
        <img src="@/assets/img/fb.png" alt="facebook-icon" />
        <img src="@/assets/img/ln.png" alt="linkedin-icon" />
        <img src="@/assets/img/tw.png" alt="twitter-icon" />
      </div>

      <form id="login-form">
        <input type="text" placeholder="User-Name" required />
        <input type="password" placeholder="Passwort" required />
        <input type="checkbox" id="login-checkbox" /><label
          for="login-checkbox"
          >{{ $t("login.remember") }}</label
        >
        <button type="submit" @click.stop.prevent="submit()">
          {{ $t("login.login") }}
        </button>
      </form>

      <form id="register-form">
        <input type="text" placeholder="User-Name" required />
        <input type="text" placeholder="E-Mail" required />
        <input type="password" placeholder="Passwort" required />
        <input type="checkbox" id="register-checkbox" /><label
          for="register-checkbox"
          >{{ $t("login.agree") }}</label
        >
        <button type="submit" @click.stop.prevent="submit()">
          {{ $t("login.register") }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    register: function() {
      document.getElementById("login-form").style.left = "-400px";
      document.getElementById("register-form").style.left = "50px";
      document.getElementById("btn").style.left = "110px";
      document.getElementById("login-btn").style.color = "var(--darkgrey)";
      document.getElementById("register-btn").style.color = "var(--white)";
    },
    login: function() {
      document.getElementById("login-form").style.left = "50px";
      document.getElementById("register-form").style.left = "450px";
      document.getElementById("btn").style.left = "0";
      document.getElementById("login-btn").style.color = "var(--white)";
      document.getElementById("register-btn").style.color = "var(--darkgrey)";
    },
    submit: function() {
      this.$router.push("/" + this.$i18n.locale + "/success");
    }
  }
};
</script>

<style scoped>
.login {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../assets/img/flower-banner.jpg");
  background-position: center;
  background-size: cover;
  position: absolute;
}
.login .form-box {
  width: 380px;
  height: 480px;
  position: relative;
  margin: 6% auto;
  background: var(--white);
  padding: 5px;
  border-radius: 30px;
  overflow: hidden;
}
.login .form-box .button-box {
  width: 220px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 20px 9px var(--cyan);
  border-radius: 30px;
}
.login .form-box .button-box #btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 110px;
  height: 100%;
  background: var(--cyan);
  border-radius: 30px;
  transition: 0.5s;
}
.login .form-box .button-box button {
  padding: 10px 30px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
}
.login .form-box .button-box #login-btn {
  color: var(--white);
}
.login .form-box .button-box #register-btn {
  color: var(--darkgrey);
}
.login .form-box .social-icons {
  margin: 30px auto;
  text-align: center;
}
.login .form-box .social-icons img {
  width: 30px;
  margin: 0 12px;
  cursor: pointer;
}
.login .form-box form {
  position: absolute;
  top: 180px;
  width: 280px;
  transition: 0.5s;
}
.login .form-box form input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px 0;
  margin: 5px 0;
  border-right: 0;
  border-top: 0;
  border-left: 0;
  border-bottom: 1px solid var(--lightgrey);
  outline: none;
  background: transparent;
}
.login .form-box form input[type="checkbox"] {
  margin: 30px 10px 30px 0px;
}
.login .form-box form label {
  color: var(--lightgrey);
  font-size: 12px;
  position: absolute;
  bottom: 65px;
}
.login .form-box form button[type="submit"] {
  width: 85%;
  padding: 10px 30px;
  cursor: pointer;
  display: block;
  margin: auto;
  background: var(--cyan);
  color: var(--white);
  border: 0;
  outline: none;
  border-radius: 30px;
}
.login .form-box form#login-form {
  left: 50px;
}
.login .form-box form#register-form {
  left: 450px;
}

@media only screen and (max-width: 600px) {
  .login .form-box {
    margin-top: 30%;
    width: 300px;
  }
  .login .form-box form {
    width: 200px;
  }
}
</style>
