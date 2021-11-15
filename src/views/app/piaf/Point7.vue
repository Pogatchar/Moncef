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
            src="/assets/img/Globe/dogon.png"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              Le pays Dogon se situe à l’est du Mali et empiète sur le
              territoire du Burkina-Faso. Sa superficie s’étend sur près de
              30.000 km2, essentiellement sur un vaste plateau de grès coupé par
              la falaise de Bandiagara.
              <br />
              <br />Au XIème siècle, une nouvelle population s’installe, les
              Tellem. On retrouve aujourd’hui la trace de leur habitat,
              construit essentiellement dans la falaise de Bandiagara. La taille
              et la situation (accrochés dans la paroi) de leurs abris laissent
              à penser que les habitants étaient très agiles et n’étaient pas
              très grands.
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
                <router-link class="page-link" to="/app/piaf/Point6"> Précédent </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
               <li class="page-item"><a style="border-width:1px;border-style:dotted;border-color:black;" class="page-link"> 7 </a>  </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point8"> 8 </router-link>
              </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point9"> 9 </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
               <router-link class="page-link" to="/app/piaf/Point8"> Suivant </router-link>
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
      coords: [14.5, -3.5],
      center: { lat: 14.5, lng: -3.5 },
      markers: [
        {
          position: { lat: 14.5, lng: -3.5 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Le pays Dogon</h1>
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
