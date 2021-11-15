<template>
  <div>
    <b-row>
      <b-colxx xxs="12" xl="6">
        <b-card class="mb-4" no-body>
          <div class="position-absolute card-top-buttons">
            <b-button variant="outline-white" class="icon-button">
              <i class="simple-icon-pencil" />
            </b-button>
          </div>
          <img
            src="/assets/img/Globe/pyay.png"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              Pyay est l'une des nombreuses anciennes capitales de Birmanie,
              Pyay (prononcé ‘Pyee’ et connu à l'époque coloniale sous le nom de
              *Prome* est une ville riveraine calme de stupa Irrawaddy, environ
              290 kilomètres au nord de Yangon. A quelques kilomètres de la
              vieille ville de Prome se trouve le village de Hawmza, site de
              l'ancienne capitale du royaume pyu de Sri Ksetra (viie au xie
              siècle). La ville nouvelle fut fondée par les britanniques à la
              fin du xixe siècle, pour servir de port fluvial intermédiaire
              entre la Haute et la Basse Birmanie.

              <br />
              <br />Ajouté à la liste du patrimoine mondial de l'UNESCO en 2014,
              le site est centré sur les vestiges du palais royal et, même si il
              n'y a pas beaucoup de vestiges de la ville d'origine, il y a un
              certain nombre de tombes, des palais, des pagodes et autres sites
              religieux à explorer - y compris la pagode énorme, cylindrique,
              briques BawBawGyi, qui est dit être le plus ancien monument
              bouddhiste en Birmanie; la pagode de la grotte Rahanta; le
              monument Lay MyetHna; et le cimetière royal.
            </p>

            <div class="mb-3">
              <stars value="4" :disabled="true"></stars>
            </div>
          </b-card-body>
        </b-card>
      </b-colxx>
      <b-colxx xxs="12" xl="6" class="col-right">
        <b-card :title="$t('maps.yandex')" class="mb-4">
          <yandex-map
            :coords="coords"
            @click="onClick"
            zoom="2"
            class="map-item"
            map-type="satellite"
          >
            <ymap-marker
              marker-id="123"
              :coords="coords"
              :balloon-template="balloonTemplate"
            ></ymap-marker>
          </yandex-map>
        </b-card>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
               <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point15"> Précédent </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
               <li class="page-item"><a style="border-width:1px;border-style:dotted;border-color:black;" class="page-link"> 16 </a>  </li>>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point17"> 17 </router-link>
              </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point18"> 18 </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
               <router-link class="page-link" to="/app/piaf/Point17"> Suivant </router-link>
              </li>
            </ul>
          </nav>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>



<script>
import vue from "vue";
import ymapPlugin from "vue-yandex-maps";

const yandexOptions = {
  apiKey: "", // '' by default
  lang: "en-US", // 'ru_RU' by default
  version: "2.1", // '2.1' by default
};

vue.use(ymapPlugin, yandexOptions);

export default {
  data() {
    return {
      coords: [18.816667, 95.216667],
      center: { lat: 18.816667, lng: 95.216667 },
      markers: [
        {
          position: { lat: 18.816667, lng: 95.216667 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Pyay</h1>
        <p>I am here: ${this.coords}</p>
      `;
    },
  },
  methods: {
    onClick(e) {
      this.coords = e.get("coords");
    },
  },
};
</script>
