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
            src="/assets/img/Globe/Ile-de-Paques.jpg"
            alt="Detail"
            class="card-img-top"
          />
          <b-card-body>
            <p class="text-muted text-small mb-2">
              {{ $t("pages.description") }}
            </p>
            <p class="mb-3">
              L'île de Pâques, en rapanui Rapa Nui (« la grande Rapa » en
              référence à Rapa iti « la petite Rapa »)N 1, en espagnol Isla de
              Pascua, est une île du Chili, isolée dans le Nord-Est de l’océan
              Pacifique sud. Elle est particulièrement connue pour ses statues
              monumentales (les moaï) et son écriture océanienne unique (le
              rongorongo).
              <br />
              <br />Toutefois l’hypothèse émise par Thor Heyerdahl suscite
              toujours de nouvelles études visant à l’étayer, notamment de la
              part de Jean-Hervé Daude, Denise Wenger, Charles-Edouard Duflon,
              Alexander Ioannidis ou Javier Blanco-Portillo14 ; la plus récente,
              publiée en 2020, affirme ainsi que des contacts entre polynésiens
              et amérindiens proches des Zenú de l’actuelle Colombie se seraient
              produits dans les îles Marquises au xiiie siècle15. Les
              spécialistes du peuplement de l'Océanie ne nient pas que des
              navigateurs polynésiens hauturiers aient pu, sur de grandes
              pirogues à balancier ou bien sur des catamarans offrant plus de
              charge utile, échanger avec l'Amérique du Sud : la dispersion de
              légumes comme la kumara en témoignent16. Ils doutent seulement que
              le mégalithisme soit un apport exclusivement sud-américain que les
              Polynésiens auraient été incapables d'initier d'eux-mêmes17. Quoi
              qu’il en soit, la date du début du premier peuplement de l’île par
              des Polynésiens n’est pas déterminée avec précision. Selon
              l’hypothèse d’une chronologie longue, il daterait de 400 ou de 800
              ; mais selon la thèse, majoritaire, d’une chronologie courte, le
              peuplement daterait de 120018,19. Des mesures au radiocarbone,
              effectuées dans les années 1950, estimaient la date du peuplement
              de l’île20 vers 400 (à +/- 80 ans). De nouvelles études21, ont mis
              en évidence des pollutions sur les mesures antérieures, impliquant
              un vieillissement des résultats. Des mesures de radiocarbone
              publiées en 2006 ont mis en évidence des premières implantations
              plus récentes, vers 120022. Ces premiers colons polynésiens
              seraient partis des îles Marquises (situées à plus de 3 200 km) ou
              bien des îles plus proches des Tuamotu (Mangareva, à 2 600 km) en
              passant par Pitcairn (située à 2 000 km). Une reconstitution,
              effectuée en 1999 à partir de Mangareva sur des embarcations
              polynésiennes, a demandé 19 jours de navigation23. En rapanui
              moderne, ces premiers habitants polynésiens sont appelés matamua :
              « les premiers »7.
              <br />
              <br />
              Les plus anciens moaïs ressemblent beaucoup aux tikis que l’on
              peut voir dans les îles de Polynésie (Hiva Oa ou Nuku Hiva des
              Marquises, Tahiti…), et une partie de la flore et de la faune de
              l'île est très semblable à celle des autres îles polynésiennes
              (par exemple la fougère Microlepia strigosa (en), le Sophora
              toromiro, le Hauhau Triumfetta semitrebula, le Mahute Broussonetia
              papyrifera ou le Ti Cordyline terminalis (en), les poulets, les
              rats7…)
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
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Précédent</a>
              </li>
              <li class="page-item"><a class="page-link">A</a></li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="http://192.168.1.82:8080/app/piaf/Point1"
                  >1</a
                >
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="http://192.168.1.82:8080/app/piaf/Point2"
                  >2</a
                >
              </li>
              <li class="page-item"><a class="page-link">...</a></li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="http://192.168.1.82:8080/app/piaf/Point1"
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
      coords: [-27.1259451, -109.3496335],
      center: { lat: -27.1259451, lng: -109.3496335 },
      markers: [
        {
          position: { lat: -27.1259451, lng: -109.3496335 },
        },
      ],
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Ile de paques</h1>
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
