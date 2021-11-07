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
            src="/assets/img/Globe/sacsayhuaman.jpg"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              Saksaywaman1, Saqsaywaman2 ou Sacsayhuamán (mot quechua signifiant
              « rapace content » ou « repu ») est une forteresse inca ou un
              centre religieux dédié au Soleil et à d'autres dieux incas, située
              à deux kilomètres de la ville de Cuzco, au Pérou.
              <br />
              <br />Construite vers le xiiie siècle, très probablement dans un
              but défensif ou religieux, la forteresse se trouve à 3 700 m
              d'altitude. Elle a la forme d'une tête de puma, animal sacré dans
              la tradition inca.
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
                  href="http://192.168.1.82:8080/app/piaf/Point4"
                  >Précédent</a
                >
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="http://192.168.1.82:8080/app/piaf/Point3"
                  >3</a
                >
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="http://192.168.1.82:8080/app/piaf/Point4"
                  >4</a
                >
              </li>
              <li class="page-item"><a class="page-link">5</a></li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="http://192.168.1.82:8080/app/piaf/Point6"
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
      coords: [-13.5071665, -72.5450851],
      center: { lat: -13.5071665, lng: -71.9758383 },
      markers: [
        {
          position: { lat: -13.5071665, lng: -71.9758383 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Sacsayhuamán</h1>
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



