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
            src="/assets/img/Globe/ollantaytambo.jpg"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              Ollantaytambo est une forteresse inca dont le nom signifie
              l'auberge d'Ollantay, du nom d'un guerrier. Elle fut le siège de
              combats acharnés entre Incas et Espagnols, Manco Inca s'y
              réfugiant pour tenter de fédérer la résistance inca après la chute
              de Cuzco.

              <br />
              Elle est située à 75 km au nord-ouest de Cuzco au Pérou, à 2 792 m
              d'altitude. Elle se trouve au point de jonction de la vallée de
              l'Urubamba et d'un ravin latéral sur la droite.
              <br />

              <br />Les différents sites archéologiques d'Ollantaytambo
              renferment des pierres travaillées avec une admirable perfection ;
              cependant certaines de ces constructions correspondent à une
              époque très ancienne et bien antérieure à l'histoire des Incas2.
              Des analyses d’ADN ancien établissent la preuve d'un peuplement
              humain sur ce site au cours de la période 600 à 400 av. J.-C.
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
                <a
                  class="page-link"
                  href="http://192.168.1.82:8080/app/piaf/Point2"
                  >Précédent</a
                >
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item"><a class="page-link">3</a></li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="http://192.168.1.82:8080/app/piaf/Point4"
                  >4</a
                >
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="http://192.168.1.82:8080/app/piaf/Point5"
                  >5</a
                >
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="http://192.168.1.82:8080/app/piaf/Point4"
                  >Suivant</a
                >
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
      coords: [-13.255845, -72.2663165],
      center: { lat: -13.255845, lng: -72.2663165 },
      markers: [
        {
          position: { lat: -13.255845, lng: -72.2663165 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Ollantaytambo</h1>
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

