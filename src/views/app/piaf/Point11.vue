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
            src="/assets/img/Globe/petra.jfif"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              Pétra (de πέτρα petra, « rocher » en grec ancien (البتراء
              Al-Butrāʾ en arabe) est une cité nabatéenne située au sud de
              l'actuelle Jordanie. C'est le pôle touristique majeur de ce pays.
              Fondée vers la fin du viiie siècle av. J.-C., par les Édomites,
              elle est ensuite occupée vers le vie siècle av. J.-C. par les
              Nabatéens qui la font prospérer grâce à sa position sur la route
              des caravanes transportant l'encens, les épices et d'autres
              produits précieux entre l'Arabie du Sud, l'Égypte, la Syrie et la
              Méditerranée.

              <br />
              <br />Pétra est un site localisé dans un cirque rocheux structuré
              par plusieurs failles creusées par des wadis, qui constituent les
              principales voies de communication. L'axe principal est le wadi
              Mousa, qui traverse le site d'est en ouest, d'abord dans la gorge
              du Sîq (« le fossé ») située à l'est, dont l'entrée, précédée par
              les « tombeaux Djinns », était surmontée d'une grande arche
              aujourd'hui effondrée. Ce défilé, traversant le massif du Khubtha,
              constituait la voie d'accès principale pour parvenir à Pétra, et
              avait été dallé dans l'Antiquité6.
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
                <router-link class="page-link" to="/app/piaf/Point10"> Précédent </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point10"> 10 </router-link>
              </li>
              <li class="page-item"><a style="border-width:1px;border-style:dotted;border-color:black;" class="page-link"> 11 </a>  </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point12"> 12 </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
               <router-link class="page-link" to="/app/piaf/Point12"> Suivant </router-link>
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
      coords: [30.3497724, 35.3764846],
      center: { lat: 30.3497724, lng: 35.3764846 },
      markers: [
        {
          position: { lat: 30.3497724, lng: 35.3764846 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Pétra</h1>
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


