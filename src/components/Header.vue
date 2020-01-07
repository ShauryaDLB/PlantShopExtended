<template>
  <div class="header">
    <!-- nav-bar -->
    <div class="top-nav-bar">
      <div class="search-box">
        <a href="index.html">
          <img
            :src="'@/assets/img/logo_200x200.png'"
            alt="Plant-Shop-Logo"
            class="logo"
          />
        </a>

        <a href="index.html"><h1>Plant Shop</h1></a>
        <input type="text" class="form-control" />
        <span class="input-group-text"><i class="fa fa-search"></i></span>
      </div>
      <div class="menu-bar">
        <ul>
          <li class="submenu">
            <a href="login.html"><i class="fa fa-shopping-cart"></i>Cart(0)</a>
            <div id="shopping-cart">
              <table id="cart-content" class="u-full-width">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>

              <a
                href="login.html"
                id="clear-cart"
                class="button-clear-cart u-full-width"
                >Buy Now</a
              >
            </div>
          </li>
          <li>
            <a href="forum.html"><i class="fa fa-user-plus"></i>Forum</a>
          </li>
          <li>
            <a href="login.html"><i class="fa fa-user"></i>Login</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
