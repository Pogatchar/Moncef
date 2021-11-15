<template>
  <div>
    <b-row>
      <b-colxx xxs="12" xl="6" class="col-left">
        <b-card class="mb-4" no-body>
          <div class="position-absolute card-top-buttons">
            <b-button variant="outline-white" class="icon-button">
              <i class="simple-icon-pencil" />
            </b-button>
          </div>
          <img
            src="/assets/img/Globe/paracas.jpg"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              La civilisation de Paracas est une ancienne civilisation
              précolombienne, située sur la presqu'île de Paracas, au Pérou.
              Elle aurait existé selon les suppositions entre 800 av. J.-C. et
              200 apr. J.-C. et connu son apogée entre 600 av. J.-C. et 400 av.
              J.-C.
              <br />
              <br />"Cette civilisation pratiquait le tissage (laine et coton)
              ainsi que la poterie. Elle pratiquait également une déformation
              cranienne par allongement dans un but esthétique, ainsi que la
              trépanation rituelle, parfois répétée. Après l'an 200, la
              civilisation de Paracas se fond dans celle de Nazca". Elle est une
              des plus importantes cultures pré-incas du Pérou qui émergea après
              la disparition de la domination Chavín pendant la période de
              l'Horizon Ancien dans la région de Ica-Nazca. C'est l'archéologue
              Julio C. Tello qui en fait la découverte dans les années 1920 et
              qui, après l'analyse du style d'enterrement et des motifs qui
              ornent les fardos[Quoi ?] funéraires trouvés dans les cimetières
              (comme celui de Wari Kayan) divise son occupation en deux périodes
              distinctes : Paracas Cavernas (700 av. J.-C. - 200 av. J.-C.) et
              Paracas Necropolis (200 av. J.-C. - 200 apr. J.-C.).
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
                <router-link class="page-link" to="/app/piaf/Point1"> Précédent </router-link>
              </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point1"> 1 </router-link>
              </li>
              <li class="page-item"><a style="border-width:1px;border-style:dotted;border-color:black;" class="page-link"> 2 </a>  </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point3"> 3 </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
               <router-link class="page-link" to="/app/piaf/Point3"> Suivant </router-link>
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
      coords: [-13.8350425, -76.2496219],
      center: { lat: -13.8350425, lng: -76.2496219 },
      markers: [
        {
          position: { lat: -13.8350425, lng: -76.2496219 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Paracas </h1>
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
