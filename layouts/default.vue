  <template>
   <NavBarComponent />
    <div class="app">
      <socialBarComponent />
      <slot />

    </div>
    <Footer/>
  </template>

<script>
import SocialBarComponent from "~/layouts/socialBar.vue";
import NavBarComponent from "~/layouts/navbar.vue";
import Footer from "~/layouts/Footer.vue";

export default {
  components: {NavBarComponent, SocialBarComponent,Footer}
};
</script>
  <style>
  .app{
    display: flex;
    flex-direction: row;
    height: 80vh;
  }
  </style>