<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light navbar_change"
    style="padding: 15px"
  >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse"
      id="navbarNav"
      style="justify-content: flex-start"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
          <router-link
            data-toggle="dropdown"
            class="dropdown-toggle"
            href="#"
            to="/"
            >Home <b class="caret"></b
          ></router-link>
          <ul class="dropdown-menu">
            <li>
              <router-link class="dropdown-item" to="/genedetails"
                >Gene Details
              </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="/submitdata"
                >Submit Data</router-link
              >
            </li>
            <li>
              <router-link class="dropdown-item" to="/account"
                >Account</router-link
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div
      class="collapse navbar-collapse"
      id="navbarNav"
      style="justify-content: flex-end"
    >
      <ul class="nav navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/help">Help</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/signup">Register</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script></script>

<style scoped>
a {
  color: black;
}
.sidebar-nav {
  padding: 9px 0;
}

.dropdown-menu .sub-menu {
  left: 100%;
  position: absolute;
  top: 0;
  visibility: hidden;
  margin-top: -1px;
}

.dropdown-menu li:hover .sub-menu {
  visibility: visible;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.nav-tabs .dropdown-menu,
.nav-pills .dropdown-menu,
.navbar .dropdown-menu {
  margin-top: 0;
}

/* this file is NOT being used, my friend made a new file called Navbar in the "components" section okeyyy i see*/

.navbar .sub-menu:before {
  border-bottom: 7px solid transparent;
  border-left: none;
  border-right: 7px solid rgba(0, 0, 0, 0.2);
  border-top: 7px solid transparent;
  left: -7px;
  top: 10px;
}

.navbar .sub-menu:after {
  border-top: 6px solid transparent;
  border-left: none;
  border-right: 6px solid #fff;
  border-bottom: 6px solid transparent;
  left: 10px;
  top: 11px;
  left: -6px;
}
.navbar_change {
  z-index: 9999;
  box-shadow: 0px -4px 19px black;
  margin-bottom: 45px;
}
.items_right {
  display: flex;
}
</style>
