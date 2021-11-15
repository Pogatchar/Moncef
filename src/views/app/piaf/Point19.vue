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
            src="/assets/img/Globe/preah vihear.jpg"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              Le temple de Preah Vihear, (en Khmer : « ប្រាសាទព្រះវិហារ »,
              Prasat Preah Vihea) est un temple du Cambodge érigé durant
              l'Empire khmer au sommet d'une colline des Monts Dângrêk, à plus
              de 500 mètres d'altitude. Dédié au dieu hindou Shiva, et
              aujourd'hui temple bouddhiste, il se compose d'une série de
              sanctuaires reliés par un système de chaussées et d'escaliers
              s’étendant sur un axe nord-sud de 800 mètres. Le temple actuel
              date de la première moitié du xie siècle, bien que le site ait été
              occupé par un ermitage dès le ixe siècle.

              <br />
              <br />Le site est inscrit sur la liste du patrimoine mondial de
              l’UNESCO le 7 juillet 2008 pour son « architecture, adaptée à la
              fois aux contraintes naturelles du site et aux fonctions
              religieuses du temple, ainsi que pour la qualité des
              ornementations de pierre sculptée. »1. L'UNESCO considère ce
              temple comme ayant "une valeur universelle exceptionnelle" et lui
              attribue ainsi le critère suivant : « Critère (i) : Preah Vihear
              est un chef-d’œuvre remarquable de l’architecture khmère. Il est
              très « pur » dans sa configuration comme dans la finesse de ses
              décors. »
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
            map-type="map"
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
                <router-link class="page-link" to="/app/piaf/Point18"> Précédent </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point17"> 17 </router-link>
              </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point18"> 18 </router-link>
              </li>
              <li class="page-item"><a style="border-width:1px;border-style:dotted;border-color:black;" class="page-link"> 19 </a>  </li>
              
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
  lang: "fr-fr", // 'ru_RU' by default
  version: "2.1", // '2.1' by default
};

vue.use(ymapPlugin, yandexOptions);
export default {
  data() {
    return {
      coords: [13.7462982, 104.97403],
      center: { lat: 13.7462982, lng: 104.97403 },
      markers: [
        {
          position: { lat: 13.7462982, lng: 104.97403 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Preah Vihear, Cambodge</h1>
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
