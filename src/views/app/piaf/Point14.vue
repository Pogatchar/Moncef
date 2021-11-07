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
            src="/assets/img/Globe/khajuraho.jpg"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              Khajurâho (hindi : खजुराहो, « Khadjouraho ») est un village du
              Madhya Pradesh en Inde. Avant sa destruction, c'était l'une des
              capitales de la dynastie des Chandela qui, entre le ixe et xie
              siècles gouvernait un large royaume englobant presque la totalité
              du Madhya-Pradesh. Site touristique très visité, sinon le plus
              visité, de toute l'Inde. Il figure au patrimoine mondial de
              l'UNESCO depuis 1986.

              <br />
              <br />Il compte encore 22 grands temples des xe et xie siècles qui
              ont été très largement préservés des destructions les plus graves
              au moment de la conquête islamique et au cours des siècles qui ont
              suivi. La renommée de cet ensemble exceptionnel tient aussi à des
              scènes de maithuna des couples d'amoureux et à une multitude
              d'apsaras, êtres célestes ayant l'apparence de jolies femmes aux
              formes généreuses et aux attitudes pleines de charme, qui couvrent
              certaines parties des espaces dédiés à la sculpture figurative sur
              les faces externes des grands temples et bien visibles de tous.
              <br />
              Ces temples sont célèbres pour les nombreuses scènes érotiques de
              couples en pleine action, accompagnés et encadrés d'ailleurs,
              chaque fois, par deux autres acteurs. Ces « tableaux » sont comme
              noyés dans un immense « bandeau » de figures gracieuses, bandeau
              qui couvre une grande partie des édifices, sur trois niveaux ou
              trois registres. Une gracieuse souplesse anime les innombrables
              figures qui semblent tapisser les murs, dès l'extérieur mais on
              les trouve aussi à l'intérieur des temples.
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
                  href="http://192.168.1.82:8080/app/piaf/Point13"
                  >Précédent</a
                >
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="http://192.168.1.82:8080/app/piaf/Point12"
                  >12</a
                >
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="http://192.168.1.82:8080/app/piaf/Point13"
                  >13</a
                >
              </li>
              <li class="page-item"><a class="page-link">14</a></li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="http://192.168.1.82:8080/app/piaf/Point15"
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
      coords: [24.8515132, 79.9259786],
      center: { lat: 24.8515132, lng: 79.9259786 },
      markers: [
        {
          position: { lat: 24.8515132, lng: 79.9259786 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Khajurâho</h1>
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

