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
            src="/assets/img/Globe/siwa.jpg"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              Le temple d'Amon situé à Siwa se dresse au nord-ouest du rocher
              d'Aghourmi, l'antique capitale de l'oasis. Son oracle a joué un
              rôle fondamental dans la conquête de l'Égypte par Alexandre le
              Grand, qui se rendit à Siwa afin de faire légitimer son pouvoir et
              son règne en Égypte par l'oracle d'Amon.
              <br />
              <br />Le sanctuaire se situe aux croisements de différentes
              cultures, notamment Cyrène, l'Égypte et le monde méditerranéen.
              C'est pourquoi l'identité de la divinité honorée originellement à
              Siwa est difficile à cerner. Il s'agit probablement d'une variante
              libyenne d'Amon, honoré dans l'oasis sous forme criocéphale1. Lors
              de la mainmise des Égyptiens sur l'oasis, ils interprétèrent la
              divinité comme un variante locale de leur Amon de Thèbes, qui
              pouvait effectivement être représenté sous forme criocéphale. Dans
              une stratégie d'expansion vers la mer Méditerranée, la dynastie
              saïte procède aux aménagements et aux agrandissement d'un temple,
              probablement déjà construit par des dynastes libyens. Ahmôsis II
              est probablement le pharaon à l'origine de la construction du
              temple à la Basse époque. Malgré la destruction, en 1970, des
              maisons qui le dissimulaient, ce qui reste du temple d'Amon ne
              permet guère d'imaginer sa splendeur passée.
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
                <router-link class="page-link" to="/app/piaf/Point8"> Précédent </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point7"> 7 </router-link>
              </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point8"> 8 </router-link>
              </li>
               <li class="page-item"><a style="border-width:1px;border-style:dotted;border-color:black;" class="page-link"> 9 </a>  </li>
              <li class="page-item"><a class="page-link"> ...</a></li>
              <li class="page-item">
               <router-link class="page-link" to="/app/piaf/Point10"> Suivant </router-link>
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
      coords: [29.2034664, 25.5192273],
      center: { lat: 29.2034664, lng: 25.5192273 },
      markers: [
        {
          position: { lat: 29.2034664, lng: 25.5192273 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Siwa</h1>
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


