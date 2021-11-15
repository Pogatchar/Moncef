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
            src="/assets/img/Globe/pyramide.jpg"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              Les pyramides de Gizeh, aussi appelées complexe pyramidal de
              Gizeh, sont l'ensemble des pyramides égyptiennes situées dans la
              nécropole de Gizeh sur le plateau de Gizeh. Ce complexe pyramidal
              égyptien est classé au patrimoine mondial de l'humanité depuis
              1979.
              <br />
              <br />La pyramide de Khéops ou grande pyramide de Gizeh est un
              monument construit par les Égyptiens de l'Antiquité, formant une
              pyramide à base carrée. Tombeau présumé du pharaon Khéops, elle
              fut édifiée il y a plus de 4 500 ans, sous la IVe dynastie1, au
              centre du complexe funéraire de Khéops se situant à Gizeh en
              Égypte. Elle est la plus grande des pyramides de Gizeh.
              <br />

              Ce monument forme une pyramide à base carrée de 440 coudées
              royales anciennes, soit environ 230,5 mètres. Les valeurs
              empiriques d'aujourd'hui sont : au sud de 230,384 m, au nord
              230,329 m, à l'ouest 230,407 m, à l'est 230,334 m, soit une erreur
              pour obtenir un carré parfait de seulement 12 secondes d'arc sur
              l'angle formé par ses diagonales2.
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
                <router-link class="page-link" to="/app/piaf/Point9"> Précédent </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
               <li class="page-item"><a style="border-width:1px;border-style:dotted;border-color:black;" class="page-link"> 10 </a>  </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point11"> 11 </router-link>
              </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point12"> 12 </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
               <router-link class="page-link" to="/app/piaf/Point11"> Suivant </router-link>
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
      coords: [29.9870753, 31.2118063],
      center: { lat: 29.9870753, lng: 31.2118063 },
      markers: [
        {
          position: { lat: 29.9870753, lng: 31.2118063 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Gizeh</h1>
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

