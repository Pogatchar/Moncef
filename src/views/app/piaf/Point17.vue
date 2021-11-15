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
            src="/assets/img/Globe/Sukhothai.jpg"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              Sukhothaï (ou Sukothaï) est la première capitale du Siam
              (Thaïlande) fondée en 1238 et mettant fin au règne khmer d'Angkor
              Wat. Sukhothaï a été inscrite en 1991 au patrimoine mondial de
              l'humanité1,2. Elle est plus célèbre pour son art que pour ses
              réalisations politiques.
              <br />

              Sukhothaï fut la capitale du premier royaume thaïlandais suzerain
              sur le bassin du fleuve Chao Phraya, à l'ouest sur la baie du
              Bengale et sur la péninsule entière. Ce royaume, après s'être
              affranchi de la tutelle khmère, parvint à préserver son
              indépendance de 1250 jusqu'au xve siècle. En 1378, Sukhothaï
              devint tributaire de l'État d'Ayutthaya.
              <br />
              <br />À la fin du xiiie siècle, dans les contrées voisines, les
              Mongols attaquent le Viêt Nam et l'Empire Khmer et saccagent la
              magnifique cité birmane de Pagan (1287). Sukhotaï se déclare leur
              vassale et profite de la situation. Ramkhamhaeng, dit « Rama le
              Fort », monarque respecté pour son équité et sa sagesse, la porte
              à son apogée entre 1275 et 1317. L'original de sa stèle, portant
              les plus anciennes inscriptions en alphabet thaï, se trouve au
              musée de Bangkok.

              <br />
              Située à environ 450 kilomètres au nord de Bangkok, l'immense cité
              de Sukhothaï est aujourd'hui en ruine. Le palais en bois de ses
              rois a disparu. Toutefois, la ville possède encore de nombreux
              vestiges de temples, construits en latérite et en brique. La
              plupart des édifices qui ont été découverts, et pour partie
              relevés, se trouvent à l'intérieur d'un rempart renforcé de
              douves. Mais de nombreux autres bâtiments, disséminés dans les
              rizières environnantes, attendent d'être dégagés de l'enveloppe de
              terre qui les recouvre.
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
                <router-link class="page-link" to="/app/piaf/Point16"> Précédent </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
               <li class="page-item"><a style="border-width:1px;border-style:dotted;border-color:black;" class="page-link"> 17 </a>  </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point18"> 18 </router-link>
              </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point19"> 19 </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
               <router-link class="page-link" to="/app/piaf/Point18"> Suivant </router-link>
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
      coords: [17.1446985, 99.4375845],
      center: { lat: 17.1446985, lng: 99.4375845 },
      markers: [
        {
          position: { lat: 17.1446985, lng: 99.4375845 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Sukhothaï</h1>
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



