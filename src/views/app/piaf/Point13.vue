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
            src="/assets/img/Globe/Persepolis.jpg"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              Persépolis (grec ancien Περσέπολις [Persépolis], « la cité perse
              »), Parsa (𐎱𐎠𐎼𐎿𐎠) en vieux-persan (persan تخت جمشید [Takht-e
              Jamshid], « le Trône de Djamchid »), était une capitale de
              l’Empire perse achéménide. Le site se trouve dans la plaine de
              Marvdasht, au pied de la montagne Kuh-e Rahmat, à environ 75 km au
              nord-est de la ville de Shiraz, province de Fars, Iran.

              <br />
              <br />Son édification commence en 521 av. J.-C. sur ordre de
              Darius Ier. Elle fait partie d’un vaste programme de constructions
              monumentales visant à souligner l’unité et la diversité de
              l’Empire perse achéménide, à asseoir la légitimité du pouvoir
              royal et à montrer la grandeur de son règne. Elle fait appel à des
              ouvriers et artisans venus de toutes les satrapies de l’empire.
              L’architecture résulte d’une combinaison originale des styles
              issus de ces provinces créant ainsi le style architectural perse
              ébauché à Pasargades, également retrouvé à Suse et Ecbatane. Cette
              combinaison des savoir-faire marque également les autres arts
              perses, comme la sculpture ou l’orfèvrerie. La construction de
              Persépolis se poursuit pendant plus de deux siècles, jusqu’à la
              conquête de l'empire et la destruction partielle de la cité par
              Alexandre le Grand en 331 av. J.-C.
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
                <router-link class="page-link" to="/app/piaf/Point12"> Précédent </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
               <li class="page-item"><a style="border-width:1px;border-style:dotted;border-color:black;" class="page-link"> 13 </a>  </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point14"> 14 </router-link>
              </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point15"> 15 </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
               <router-link class="page-link" to="/app/piaf/Point14"> Suivant </router-link>
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
      coords: [29.9351669, 52.8904041],
      center: { lat: 29.9351669, lng: 52.8904041 },
      markers: [
        {
          position: { lat: 29.9351669, lng: 52.8904041 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Persépolis</h1>
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
