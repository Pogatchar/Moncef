<template>
  <div>
    <b-row>
       <b-colxx xxs="12" xl="6">
        <b-card class="mb-4" no-body>
                <b-card-body>
                    <glide-component-thumbs :settingsImages="{ bound: true, rewind: false, focusAt: 0, startAt: 0, gap: 5, perView: 1, data: detailImages}" :settingsThumbs="{ bbound: true, rewind: false, focusAt: 0, startAt: 0, gap: 10, perView: 5, data: detailThumbs, breakpoints: { 576: { perView: 4 }, 420: { perView: 3 } } }" />
                </b-card-body>
            </b-card>
      </b-colxx>
    </b-row>
    <b-row> 

    </b-row>
  </div>
</template>


<script>
import GlideComponentThumbs from '../../../components/Carousel/GlideComponentThumbs'
import {
    detailImages,
    detailThumbs
} from "../../../data/carouselItems";

export default {
  components: {
    "glide-component-thumbs": GlideComponentThumbs,
  },
  data() {
        return {
             
            detailImages,
            detailThumbs,

        }
    },

};
</script>
