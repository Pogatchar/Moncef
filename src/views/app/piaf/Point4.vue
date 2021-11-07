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
            src="/assets/img/Globe/machu pichu.jpg"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              Machu Picchu (du quechua machu : vieille, et pikchu : montagne,
              sommet)N 1 est une ancienne cité inca du xve siècle au Pérou,
              perchée sur un promontoire rocheux qui unit les monts Machu Picchu
              et Huayna Picchu (« le Jeune Pic » en quechua) sur le versant
              oriental des Andes centrales. Son nom aurait été Pikchu ou Picho.
              <br />
              <br />Selon des documents du xvie siècle, trouvés par
              l'archéologue américain Hiram Bingham, professeur assistant
              d'histoire de l'Amérique latine à l’université Yale, Machu Picchu
              aurait dû être une des résidences de l’empereur Pachacútec.
              Cependant, quelques-unes des plus grandes constructions et le
              caractère cérémonial de la principale voie d’accès au llaqta
              démontreraient que le lieu fut utilisé comme un sanctuaire
              religieux2. Les deux usages ne s’excluent pas forcément. En
              revanche, les experts ont écarté l’idée d’un ouvrage militaire.
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
                  href="http://192.168.1.82:8080/app/piaf/Point3"
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
              <li class="page-item"><a class="page-link">4</a></li>
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
                  href="http://192.168.1.82:8080/app/piaf/Point5"
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
      coords: [-13.164422, -72.5450851],
      center: { lat: -13.164422, lng: -72.5450851 },
      markers: [
        {
          position: { lat: -13.164422, lng: -72.5450851 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Machu Picchu</h1>
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


