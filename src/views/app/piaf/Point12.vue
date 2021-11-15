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
            src="/assets/img/Globe/ur.jpg"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              Ur (Our, en sumérien urim), actuellement Tell al-Muqayyar (en
              arabe : tall al-muqayyar, تل المقير, « la colline poissée/bitumée
              »), est l'une des plus anciennes et des plus importantes villes de
              la Mésopotamie antique, dans l'actuel Irak. Elle était alors
              située sur une des branches de l'Euphrate et proche du Golfe
              Persique.
              <br />
              <br />Ur apparaît comme une des principales et des plus puissantes
              cités sumériennes du IIIe millénaire av. J.‑C., comme l'illustrent
              les tombes royales et le riche mobilier funéraire qui y fut
              exhumé. Durant le xxie siècle av. J.-C. cette ville fut la
              capitale d'un puissant empire, dirigé par les rois de ce que la
              tradition mésopotamienne a retenu comme la troisième dynastie
              d'Ur. Ces derniers édifient des monuments remarquables dans le
              sanctuaire du grand dieu de la ville, le Dieu-Lune, appelé Nanna
              en sumérien et Sîn en akkadien. Elle reste une ville importante au
              début du IIe millénaire av. J.‑C. comme l'attestent les nombreuses
              découvertes de constructions et de tablettes cunéiformes
              effectuées pour cette période par les équipes archéologiques
              dirigées par Leonard Woolley, qui explorèrent ses ruines entre
              1922 et 1934. Ur demeure une cité assez importante en dépit d'un
              déclin marqué durant le Ier millénaire av. J.‑C., avant son
              abandon vers le iiie siècle av. J.-C. Dans la Bible, « Ur des
              Chaldéens » est présentée comme la ville d'origine du Patriarche
              Abraham.
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
                <router-link class="page-link" to="/app/piaf/Point11"> Précédent </router-link>
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point10"> 10 </router-link>
              </li>
              <li class="page-item">
                <router-link class="page-link" to="/app/piaf/Point11"> 11 </router-link>
              </li>
              <li class="page-item"><a style="border-width:1px;border-style:dotted;border-color:black;" class="page-link"> 12 </a>  </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
               <router-link class="page-link" to="/app/piaf/Point13"> Suivant </router-link>
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
      coords: [30.96963156798143, 46.117086875492284],
      center: { lat: 30.96963156798143, lng: 46.117086875492284 },
      markers: [
        {
          position: { lat: 30.96963156798143, lng: 46.117086875492284 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">UR</h1>
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

