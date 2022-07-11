<template>
  <div class="w-full my-4 px-4 column h-full" @click="navigateTo(partner)">
    <!-- Article -->
    <article
      class="grid-item bg-white rounded-xl text-black relative flex flex-nowrap flex-col h-80 overflow-hidden shadow-2xl hover:shadow-lg"
    >
      <div class="px-2 py-3 z-10">
        <div class="grid place-items-center">
          <span
            class="py-1 px-2 font-bold text-4xl mb-2 p-auto text-white bg-opacity-90 bg-gray-600"
          >
            {{ partner.name }}
          </span>
        </div>
        <span
          class="box-decoration-clone py-1 px-2 font-bold text-xl lg:text-2xl mb-2 p-auto text-white bg-opacity-90 bg-black"
        >
          {{ partner.subtitle }}
        </span>
      </div>

      <img
        alt="Placeholder"
        class="cover-image absolute w-full box-decoration-clone"
        :class="partner.imageXOffset ? `-mt-${partner.imageXOffset}` : ''"
        :src="partner.imageUrl"
      />

      <!-- <div class="partner-description px-4 py-1 overflow-hidden">
                {{ partner.description || defaultDescription }}
                <p class="read-more"></p>
            </div> -->

      <!-- <div class="absolute bottom-0 right-0 lex justify-between h-8">
                <span class="relative p-4 text-lg">
                Mehr erfahren >
                </span>
            </div> -->

      <div class="grid grid-cols-2">
        <div>
          <div class="px-1 pb-1 grid gap-2">
            <span
              class="bg-gray-200 rounded-full text-sm font-semibold text-gray-700 text-center"
              v-for="(tag, index) in partner.tags ?? []"
              :key="index"
            >
              {{ tag
              }}<template v-if="partner.tags?.length - 1 !== index"></template>
            </span>
          </div>
        </div>

        <div class="w-full bg-white absolute bottom-0 p-2 flex justify-between">
          <Popper
            v-if="
              partner.websitesToDisplay && partner.websitesToDisplay.length > 0
            "
            v-bind="$attrs"
            @click.stop=""
            arrow="true"
          >
            <button
              type="button"
              class="mdi mdi-eye px-2.5 py-1 text-center text-xl text-black-700 border border-black rounded-full"
            ></button>
            <template #content="props">
              <div
                class="grid grid-cols-2 gap-2 w-64 h-36 bg-gray-200 border-4 border-white shadow-xl"
              >
                <div
                  class="bg-gray-600 text-white hover:bg-gray-700 p-2"
                  @click.stop="
                    callToDashboard('top-left');
                    props.close();
                  "
                >
                  Oben links
                </div>
                <div
                  class="bg-gray-600 text-white hover:bg-gray-700 p-2"
                  @click.stop="
                    callToDashboard('top-right');
                    props.close();
                  "
                >
                  Oben rechts
                </div>
                <div
                  class="bg-gray-600 text-white hover:bg-gray-700 p-2"
                  @click.stop="
                    callToDashboard('bottom-left');
                    props.close();
                  "
                >
                  Unten links
                </div>
                <div
                  class="bg-gray-600 text-white hover:bg-gray-700 p-2"
                  @click.stop="
                    callToDashboard('bottom-right');
                    props.close();
                  "
                >
                  Unten rechts
                </div>
              </div>
              <div
                class="bg-gray-600 text-white hover:bg-gray-700 p-2"
                @click.stop="
                  callToDashboard('full');
                  props.close();
                "
              >
                Ganzer Bildschirm
              </div>
            </template>
          </Popper>
          <span v-else />
        </div>
      </div>
    </article>
    <!-- END Article -->
  </div>
</template>

<script>
export default {
  props: ["partner"],
  methods: {
    navigateTo(partner) {
      this.$router.push({
        name: "partner",
        params: {
          name: partner.name.toLowerCase().replaceAll(" ", "-"),
        },
      });
    },
    callToDashboard(position) {
      var oReq = new XMLHttpRequest();

      oReq.addEventListener("load", reqListener);

      oReq.open(
        "POST",
        "https://1src.tech/api/functions/sbp_set-window/run?key=XFKdw42rYH2pLgGZ9WGzzShWD9GfJZra"
      );

      oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

      oReq.send(
        JSON.stringify({ partner: this.partner.websiteName, position })
      );
    },
  },
};
function reqListener() {}
</script>

<style>
@media (min-width: 1024px) {
  .cover-image {
    object-fit: fill;
  }
}
.box-decoration-clone {
  -webkit-box-decoration-break: clone;
}
.partner-description {
  position: relative;
}
.grid-item {
  transition: box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.partner-description .read-more {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 30px 0;
  color: red;

  margin-top: 2rem;

  /* "transparent" only works here because == rgba(0,0,0,0) */
  background-image: linear-gradient(to bottom, transparent, lightgrey);
}
</style>
