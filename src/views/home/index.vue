<template>
  <home-layout>
    <div :class="{'landing-page': true,'show-mobile-menu': showMobileMenu}">
       

      <div class="main-container">
        <div class="landing-page-nav">
          <headroom style="height:initial;">
            <nav>
              <div class="container d-flex align-items-center justify-content-between">
                <a class="navbar-logo pull-left" @click="scrollTo('#home')" href="javascript:;">
                  <span class="white"></span>
                  <span class="dark"></span>
                </a>
                
                 
              </div>
            </nav>
          </headroom>
        </div>

        <div class="content-container" id="home">
          <div class="section home" id="sectionHome">
            <div class="container">
              <div class="row home-row" id="homeRow">
                <div class="col-12 d-block d-md-none">
                   <a :href="adminRoot" target="_blank">
                    <img
                      alt="mobile hero"
                      class="mobile-hero"
                      src="/assets/img/landing-page/home-hero-mobile.png"
                    />
                  </a>
                </div>

                <div class="col-12 col-xl-4 col-lg-5 col-md-6">
                  <div class="home-text">
                    <div class="display-1">
                       The Ring
                    </div>
                    <p class="white mb-5">
                      <br />
                      La plus formidable chasse 
                      <br />
                      au trésor de tout les temps
                      <br />
                      <br />
                      Vous êtes sur le point d'être témoin directe d'une découverte majeur et de ne jamais regarder notre planète du même oeil !
                       
                      <br /> 
                    </p>
                    <a class="btn btn-light btn-xl mr-2 mb-2" :href="adminRoot" target="_blank">
                      Découvrir
                      <i class="simple-icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div class="col-12 col-xl-7 offset-xl-1 col-lg-7 col-md-6 d-none d-md-block">
                  <a :href="adminRoot" target="_blank">
                    <img alt="hero" src="/assets/img/landing-page/home-hero.png" />
                  </a>
                </div>
              </div>

               

               
            </div>
          </div>

     
          
        </div>
      </div>
    </div>
  </home-layout>
</template>

<script>
import { headroom } from "vue-headroom";
import VueScrollTo from "vue-scrollto";
import HomeLayout from "../../layouts/HomeLayout";
import GlideComponent from "../../components/Carousel/GlideComponent";
import { adminRoot, buyUrl } from "../../constants/config";
const slideSettings = {
  type: "carousel",
  gap: 30,
  perView: 4,
  hideNav: true,
  peek: { before: 10, after: 10 },
  breakpoints: {
    "600": { perView: 1 },
    "992": { perView: 2 },
    "1200": { perView: 3 }
  }
};

const slideItems = [
  {
    icon: "iconsminds-mouse-3",
    title: "Right Click Menu",
    detail:
      "Increases overall usability of the project by providing additional actions menu."
  },
  {
    icon: "iconsminds-electric-guitar",
    title: "Video Player",
    detail:
      "Carefully themed multimedia players powered by Video.js library with Youtube support."
  },
  {
    icon: "iconsminds-keyboard",
    title: "Keyboard Shortcuts",
    detail:
      "Easily configurable keyboard shortcuts plugin that highly improves user experience."
  },
  {
    icon: "iconsminds-three-arrow-fork ",
    title: "Two Panels Menu",
    detail:
      "Three states two panels icon menu that looks good, auto resizes and does the job well."
  },
  {
    icon: "iconsminds-deer",
    title: "Icons Mind",
    detail:
      "1040 icons in 53 different categories, designed pixel perfect and ready for your project."
  },
  {
    icon: "iconsminds-palette",
    title: "20 Color Schemes",
    detail:
      "Colors, icons and design harmony that creates excellent themes to cover entire project."
  },
  {
    icon: "iconsminds-air-balloon-1",
    title: "3 Applications",
    detail:
      "Applications that mostly made of components are the way to get started to create something similar."
  },
  {
    icon: "iconsminds-resize",
    title: "Extra Responsive",
    detail:
      "Custom Bootstrap 4 xxs & xxl classes delivers better experiences for smaller and larger screens."
  }
];

const features = [
  {
    title: "Pleasant Design",
    img: "/assets/img/landing-page/features/pleasant-design.png",
    detail:
      "As a web developer we enjoy to work on something looks nice. It is not an absolute necessity but it really motivates us that final product will look good for user point of view. <br /><br />So we put a lot of work into colors, icons, composition and design harmony. Themed components and layouts with same design language. <br /><br />We kept user experience principles always at the heart of the design process."
  },
  {
    title: "Extra Responsive",
    img: "/assets/img/landing-page/features/extra-responsive.png",
    detail:
      "Xxs breakpoint is for smaller screens that has a resolution lower than 420px. Xs works between 576px and 420px. Xxl breakpoint is for larger screens that has a resolution higher than 1440px. Xl works between 1200px and 1440px.<br><br>With this approach we were able to create better experiences for smaller and larger screens."
  },
  {
    title: "Superfine Charts",
    img: "/assets/img/landing-page/features/superfine-charts.png",
    detail:
      "Using charts is a good way to visualize data but they often look ugly and break the rhythm of design. <br /><br />We concentrated on a single chart library and tried to create charts that look good with color, opacity, border and shadow. <br /><br />Used certain plugins and created some to make charts even more useful and beautiful."
  },
  {
    title: "Layouts for the Job",
    img: "/assets/img/landing-page/features/layouts-for-the-job.png",
    detail:
      "Layouts are the real thing, they need to be accurate and right for the job. They should be functional for both user and developer. <br /><br />We created lots of different layouts for different jobs.<br /><br />Listing pages with view mode changing capabilities, shift select and select all functionality, application layouts with an additional menu, authentication and error layouts which has a different design than the other pages were our main focus. We also created details page with tabs that can hold many components."
  },
  {
    title: "Smart Menu",
    img: "/assets/img/landing-page/features/smart-menu.png",
    detail:
      "Instead of good old single panel menus with accordion structure that looks over complicated, we created 2 panels and categorized pages accordingly.<br><br>The default menu auto hides sub panel when resolution is under some breakpoint to open some space. You may also hide menu completely or use only main panel open only."
  }
];

const layouts = [
  {
    title: "Menu Default",
    img: "/assets/img/landing-page/layouts/menu-default.jpg"
  },
  {
    title: "Menu Subhidden",
    img: "/assets/img/landing-page/layouts/menu-subhidden.jpg"
  },
  {
    title: "Menu Hidden",
    img: "/assets/img/landing-page/layouts/menu-hidden.jpg"
  },
  {
    title: "Image List",
    img: "/assets/img/landing-page/layouts/image-list.jpg"
  },
  {
    title: "Thumb List",
    img: "/assets/img/landing-page/layouts/thumb-list.jpg"
  },
  { title: "Data List", img: "/assets/img/landing-page/layouts/data-list.jpg" },
  { title: "Details", img: "/assets/img/landing-page/layouts/details.jpg" },
  {
    title: "Authentication",
    img: "/assets/img/landing-page/layouts/authentication.jpg"
  },
  {
    title: "Search Results",
    img: "/assets/img/landing-page/layouts/search-results.jpg"
  },
  {
    title: "Single Page Application",
    img: "/assets/img/landing-page/layouts/spa.jpg"
  },
  {
    title: "Data List App Menu Hidden",
    img: "/assets/img/landing-page/layouts/data-list-app-menu-hidden.jpg"
  },
  { title: "Tabs", img: "/assets/img/landing-page/layouts/tabs.jpg" }
];

const applications = [
  {
    title: "Survey",
    path: `${adminRoot}/#survey`,
    img: "/assets/img/landing-page/applications/survey.jpg"
  },
  {
    title: "Chat",
    path: `${adminRoot}/#chat`,
    img: "/assets/img/landing-page/applications/chat.jpg"
  },
  {
    title: "Todo",
    path: `${adminRoot}/#todo`,
    img: "/assets/img/landing-page/applications/todo.jpg"
  }
];

const themes = [
  { title: "Navy Blue", class: "bluenavy" },
  { title: "Olympic Blue", class: "blueolympic" },
  { title: "Yale Blue", class: "blueyale" },
  { title: "Moss Green", class: "greenmoss" },
  { title: "Lime Green", class: "greenlime" },
  { title: "Carrot Orange", class: "carrotorange" },
  { title: "Ruby Red", class: "rubyred" },
  { title: "Monster Purple", class: "monsterpurple" },
  { title: "Steel Grey", class: "steelgrey" },
  { title: "Granola Yellow", class: "granolayellow" }
];
const scrollOptions = {
  container: "body",
  easing: "ease-in",
  offset: -120,
  force: true,
  x: false,
  y: true
};

export default {
  components: {
    "home-layout": HomeLayout,
    "glide-component": GlideComponent,
    headroom: headroom
  },
  data() {
    return {
      showMobileMenu: false,
      adminRoot,
      buyUrl,
      slideSettings,
      slideItems,
      features,
      layouts,
      applications,
      themes
    };
  },
  methods: {
    onWindowResize() {
      const homeRect = document
        .getElementById("homeRow")
        .getBoundingClientRect();
      const homeSection = document.getElementById("sectionHome");
      homeSection.style.backgroundPositionX = homeRect.x - 580 + "px";

      const footerSection = document.getElementById("sectionFooter");
      footerSection.style.backgroundPositionX =
        event.target.innerWidth - homeRect.x - 2000 + "px";

      if (event.target.innerWidth >= 992) {
        this.showMobileMenu = false;
      }
    },
    onWindowScroll() {
      this.showMobileMenu = false;
    },
    onWindowClick() {
      this.showMobileMenu = false;
    },

    scrollTo(target) {
      VueScrollTo.scrollTo(target, 200, scrollOptions);
    }
  },
  mounted() {
    document.body.classList.add("no-footer");
    window.addEventListener("scroll", this.onWindowScroll);
    window.addEventListener("resize", this.onWindowResize);
    window.addEventListener("click", this.onWindowClick);
  },
  beforeDestroy() {
    document.body.classList.remove("no-footer");
    window.removeEventListener("scroll", this.onWindowScroll);
    window.removeEventListener("resize", this.onWindowResize);
    window.removeEventListener("click", this.onWindowClick);
  }
};
</script>
