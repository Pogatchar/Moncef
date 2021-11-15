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
            src="/assets/img/Globe/Tassili_nAjjer_Landsat.jpg"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              Le tassili n’Ajjer culmine à 2 158 mètres d'altitude à l'Adrar
              Afao et émerge en hautes falaises à 1 500 mètres en moyenne
              au-dessus des ergs de Mourzouq et d'Oubari à l'est et d'Admer dans
              le Ténéré au sud1. Au nord, ce haut plateau se perd dans les dunes
              d'Issaouane et de Bourharet.
              <br />
              <br />

              Ce haut plateau aride se trouve à plus de 1 000 mètres d'altitude
              et s'étend sur 50 à 60 km d'est en ouest et 800 km du nord au sud,
              soit une superficie de près de 120 000 km2. Sur toute sa surface
              se dressent des formations rocheuses créées par l'érosion,
              émergeant des dunes de sable, qui évoquent de loin les ruines de
              villes antiques.
              <br />
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
                <router-link class="page-link" to="/app/piaf/Point4"> Précédent </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point4"> 7 </router-link>
              </li>
               <li class="page-item"><a style="border-width:1px;border-style:dotted;border-color:black;" class="page-link"> 8 </a>  </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point4"> 9 </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
               <router-link class="page-link" to="/app/piaf/Point4"> Suivant </router-link>
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
      coords: [25.4448, 8.9976],
      center: { lat: 25.4448, lng: 8.9976 },
      markers: [
        {
          position: { lat: 25.4448, lng: 8.9976 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Le tassili n’Ajjer</h1>
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
