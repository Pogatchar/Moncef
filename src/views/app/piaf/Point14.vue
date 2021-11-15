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
            src="/assets/img/Globe/mohenjodaro.jpg"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              Mohenjo-daro — littéralement le mont des Morts, un nom qu'il
              partage avec Lothal —, est un site important de la civilisation de
              la vallée de l'Indus. On y trouve les vestiges d'une des plus
              grandes cités de l'âge du bronze indien. Il est situé au Pakistan
              à 300 km au nord-nord-est de Karâchi.
              <br />
              <br />Ayant subi peu de dégradations modernes, son état de
              conservation est meilleur que celui d'Harappâ, et par suite c'est
              une importante source d'informations sur la civilisation à
              laquelle la ville appartenait. Elle a été construite durant le
              IIIe millénaire av. J.‑C. et a été abandonnée à la fin du xviiie
              siècle av. J.-C., vraisemblablement en raison d'un changement du
              cours du fleuve Indus.
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
                <router-link class="page-link" to="/app/piaf/Point13"> Précédent </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point13"> 13 </router-link>
              </li>
               <li class="page-item"><a style="border-width:1px;border-style:dotted;border-color:black;" class="page-link"> 14 </a>  </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point15"> 15 </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
               <router-link class="page-link" to="/app/piaf/Point15"> Suivant </router-link>
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
      coords: [27.321657, 68.1365933],
      center: { lat: 27.321657, lng: 68.1365933 },
      markers: [
        {
          position: { lat: 27.321657, lng: 68.1365933 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Mohenjo-daro</h1>
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

