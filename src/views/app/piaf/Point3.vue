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
            src="/assets/img/Globe/nasca.jpg"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              Les géoglyphes de Nazca (ou Nasca), appelés communément lignes de
              Nazca, sont de grandes figures tracées sur le sol, souvent
              d'animaux stylisés, parfois de simples lignes longues de plusieurs
              kilomètres, visibles dans le désert de Nazca au sud du Pérou. Le
              sol sur lequel se dessinent ces géoglyphes est couvert de cailloux
              que l'oxyde de fer colore en rouge. En les ôtant, les Nazcas ont
              fait apparaître un sol gypseux grisâtre, découpant ainsi les
              contours des figures qu'ils traçaient. <br />
              <br />Découverts en 1927, ces géoglyphes sont le fait de la
              civilisation Nazca, une culture pré-inca qui se développa entre
              300 av. J.-C. et 800 de notre ère. Ils ont été réalisés pour la
              plupart entre -200 et 6001. Lignes et géoglyphes sont inscrits,
              sous la désignation « Lignes et géoglyphes au Nasca et Palpa »,
              sur la liste du patrimoine mondial de l’Unesco depuis 19942.
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
                <router-link class="page-link" to="/app/piaf/Point2"> Précédent </router-link>
              </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point1"> 1 </router-link>
              </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point2"> 2 </router-link>
              </li>
               <li class="page-item"><a style="border-width:1px;border-style:dotted;border-color:black;" class="page-link"> 3 </a>  </li>
              <li class="page-item"><a class="page-link" >...</a></li>
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
      coords: [-14.8277203, -74.9370624],
      center: { lat: -14.8277203, lng: -74.9370624 },
      markers: [
        {
          position: { lat: -14.8277203, lng: -74.9370624 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Nazca </h1>
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
