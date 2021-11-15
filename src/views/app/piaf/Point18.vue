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
            src="/assets/img/Globe/Angkor_Wat.jpg"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              Angkor Vat ou Angkor Wat (en khmer : ប្រាសាទអង្គរវត្ត, Prasat
              Angkor Vat) est le plus grand des temples et le plus grand
              monument religieux au monde1. Il fait partie du complexe
              monumental d'Angkor au Cambodge réparti sur un site de 162,6
              hectares2 . Il fut construit par le roi khmer Suryavarman II au
              début du xiie siècle à Yaśodharapura (Angkor actuel) capitale de
              l'empire khmer en tant que « temple d'État » et éventuel mausolée.
              Temple le mieux préservé d'Angkor, l'une des plus grandes villes
              médiévales du monde, il est le seul à être resté un important
              centre religieux depuis sa fondation, initialement hindou et dédié
              au dieu Vishnou pour l'empire khmer rompant avec la tradition
              Shaiva des rois précédents. Il a progressivement été transformé en
              temple bouddhiste vers la fin du xiie siècle.

              <br />
              <br />Le temple est l'archétype du style classique de
              l'architecture khmère. Il est devenu le symbole du Cambodge et
              figure sur son drapeau national. Il est le principal lieu
              touristique du pays. Angkor Vat combine deux bases de
              l'architecture khmère pour les temples : le côté temple-montagne
              et le côté temple à galeries. Il est conçu pour représenter le
              mont Meru, la maison des dieux dans la mythologie hindoue.
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
                <router-link class="page-link" to="/app/piaf/Point17"> Précédent </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point17"> 17 </router-link>
              </li>
               <li class="page-item"><a style="border-width:1px;border-style:dotted;border-color:black;" class="page-link"> 18 </a>  </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point19"> 19 </router-link>
              </li>
              <li class="page-item">
               <router-link class="page-link" to="/app/piaf/Point19"> Suivant </router-link>
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
      coords: [13.4124413, 103.866584],
      center: { lat: 13.4124413, lng: 103.866584 },
      markers: [
        {
          position: { lat: 13.4124413, lng: 103.866584 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Angkor Vat</h1>
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
