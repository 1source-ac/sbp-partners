<template>
  <main class="main-content">
    <!-- static header -->
    <header class="bg-gradient-to-l from-blue-500 to-blue-600 site-header h-20">
      <div class="px-3 pt-4">
        <img src="/assets/img/center_weiss.png" class="logo hidden lg:inline" />
        <span class="hidden lg:inline">
          <a
            class="underline-dotted font-mono p-3 text-4xl font-bold leading-tight text-gray-100 text-center lg:text-left"
            href="https://smart-commercial-building.de/"
            >CSCB</a
          >
        </span>
        <!-- /
          </span>
          <router-link class="underline" :to="{ name: 'partners' }"
            >Smart Building Platform</router-link
          > -->
        <!-- <template v-if="$router.currentRoute.value.name === 'partner'">
            /
            <router-link class="underline" :to="{ name: 'partners' }"
              >Unternehmen</router-link
            >
          </template> -->
        <span
          class="text-2xl lg:text-5xl text-white font-mono font-sans text-center p-3 text-3xl leading-tight text-gray-100 title text-center lg:text-left"
        >
          Smart Building Platform
        </span>

        <span
          class="float-right mr-32"
          v-if="$store.state.currentConfiguration.name != null"
        >
          Einstellung: {{ $store.state.currentConfiguration.name }},
          <button
            id="show-modal"
            v-if="$store.state.currentConfiguration.page > 1"
            @click="incrementPage(-1)"
            type="button"
            class="mdi mdi-arrow-left-bold px-2.5 py-1 text-center text-4xl text-black-700"
          ></button>
          Seite {{ $store.state.currentConfiguration.page }}/{{
            $store.state.currentConfiguration.numPages
          }}
          <button
            v-if="
              $store.state.currentConfiguration.numPages >
              $store.state.currentConfiguration.page
            "
            id="show-modal"
            @click="incrementPage(1)"
            type="button"
            class="mdi mdi-arrow-right-bold px-2.5 py-1 text-center text-4xl text-black-700"
          ></button>
        </span>

        <button
          id="show-modal"
          @click="showModal = true"
          type="button"
          class="absolute right-10 top-2 mdi mdi-monitor-edit px-2.5 py-1 text-center text-3xl text-black-700 border rounded-full"
        ></button>
        <Teleport to="body">
          <!-- use the modal component, pass in the prop -->
          <modal :show="showModal" @close="showModal = false">
            <template #header>
              <h3>Change Diplay Options</h3>
            </template>
          </modal>
        </Teleport>
      </div>
    </header>

    <!-- dynamic content -->
    <router-view class="router pt-16 pb-10" />

    <!-- privacy & contact -->
    <div class="text-md pl-10 absolute bottom-4">
      <span class="bg-white pt-2 px-5 pb-2">
        <a href="https://smart-commercial-building.de/datenschutzerklaerung/"
          >Datenschutzerklärung</a
        >
        <span> - </span>
        <a href="https://smart-commercial-building.de/impressum/">Impressum</a>
      </span>
    </div>
  </main>
</template>

<script>
import Modal from "./views/Modal.vue";
export default {
  components: {
    Modal,
  },
  mounted() {
    console.log(this.$router.currentRoute.value.name);
  },
  methods: {
    incrementPage(value) {
      this.$store.dispatch("incrementPage", value);
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style>
.site-header {
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 100;
}

#app {
  min-height: 100vh;
}

.main-content {
  position: relative;
  min-height: 100vh;
}

body {
  min-height: 100vh;
}

.logo {
  height: 2.6rem;
  margin-right: 0.6rem;
  margin-bottom: 0.5rem;
}

.title {
  height: 2rem;
  line-height: 2rem;
}

.main-title {
}

main {
  /* background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjMzIiBoZWlnaHQ9IjMzIiB2aWV3Qm94PSIwIDAgNDAsNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgxOTgpICI+PHJlY3QgaWQ9InBhdHRlcm4tYmFja2dyb3VuZCIgd2lkdGg9IjQwMCUiIGhlaWdodD0iNDAwJSIgZmlsbD0icmdiYSgyNDcsIDI1MCwgMjUyLDEpIj48L3JlY3Q+IDxwYXRoIGZpbGw9InJnYmEoMTc2LCAxOTIsIDIxNiwxKSIgZD0iTSAtMTAgMzAgaCA2MCB2MSBoLTYweiBNLTEwIC0xMCBoNjAgdjEgaC02MCI+PC9wYXRoPjxwYXRoIGZpbGw9InJnYmEoMCwgMTA1LCAxODAsMSkiIGQ9Im0gLTEwIDEzIGggNjAgdjEgaC02MHogTS0xMCAtMjcgaDYwIHYxIGgtNjB6Ij48L3BhdGg+PC9wYXR0ZXJuPiAgPC9kZWZzPiA8cmVjdCBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIj48L3JlY3Q+PC9zdmc+") */
  /* background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjQ5IiBoZWlnaHQ9IjQ5IiB2aWV3Qm94PSIwIDAgNDAsNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgxOTgpICI+PHJlY3QgaWQ9InBhdHRlcm4tYmFja2dyb3VuZCIgd2lkdGg9IjQwMCUiIGhlaWdodD0iNDAwJSIgZmlsbD0icmdiYSgyNDcsIDI1MCwgMjUyLDEpIj48L3JlY3Q+IDxwYXRoIGZpbGw9InJnYmEoMTQ0LCAyMDUsIDI0NCwxKSIgZD0iTTAgMzUgYSA1IC01IDAgMCAwIDUgLTUgYSAxNSAtMTUgMCAwIDEgMTUgLTE1IGEgNSAtNSAwIDAgMCA1IC01IGEgMTUgLTE1IDAgMCAxIDE1IC0xNSB2MTAgYSAtNSA1IDAgMCAwIC01IDUgYSAtMTUgMTUgMCAwIDEgLTE1IDE1IGEgLTUgNSAwIDAgMCAtNSA1IGEgLTE1IDE1IDAgMCAxIC0xNSAxNXogCiAgICAgICAgICAgICAgICBNMCAtNSBhIDUgLTUgMCAwIDAgNSAtNSBoMTAgYSAtMTUgMTUgMCAwIDEgLTE1IDE1egogICAgICAgICAgICAgICAgTTAgLTUgYSAxNSAxNSAwIDAgMSAxNSAxNSBhIDUgNSAwIDAgMCA1IDUgYSAxNSAxNSAwIDAgMSAxNSAxNSBhIDUgNSAwIDAgMCA1IDUgYSAxNSAxNSAwIDAgMSAxNSAxNSBhIDUgNSAwIDAgMSA1IDUgdjEwIGEgLTE1IC0xNSAwIDAgMSAtMTUgLTE1IGEgLTUgLTUgMCAwIDAgLTUgLTUgYSAtMTUgLTE1IDAgMCAxIC0xNSAtMTUgYSAtNSAtNSAwIDAgMCAtNSAtNSBhIC0xNSAtMTUgMCAwIDEgLTE1IC0xNSBhIC01IC01IDAgMCAwIC01IC01IGEgLTE1IC0xNSAwIDAgMSAtMTUgLTE1IGEgLTUgLTUgMCAwIDEgLTUgLTUgYSAtMTUgLTE1IDAgMCAwIC0xNSAtMTUgIGgxMCBhIDUgNSAwIDAgMSA1IDUgIGEgNSA1IDAgMCAwIDUgNXoKICAgICAgICAgICAgICAgIE00MCAtNSBhIDE1IDE1IDAgMCAxIDE1IDE1IGgtMTAgYSAtNSAtNSAwIDAgMSAtNSAtNSBhIC0xNSAtMTUgMCAwIDEgLTE1IC0xNSBhIC01IC01IDAgMCAxIC01IC01IGEgLTE1IC0xNSAwIDAgMSAtMTUgLTE1eiI+PC9wYXRoPjxwYXRoIGZpbGw9InJnYmEoMjQ3LCAyNTAsIDI1MiwxKSIgZD0iTS0xMyAzOS41IGEgOS41IC05LjUgMCAwIDAgOS41IC05LjUgYSAxMC41IC0xMC41IDAgMCAxIDEwLjUgLTEwLjUgYSA5LjUgLTkuNSAwIDAgMCA5LjUgLTkuNSBhIDEwLjUgLTEwLjUgMCAwIDEgMTAuNSAtMTAuNSB2MSBhIC05LjUgOS41IDAgMCAwIC05LjUgOS41IGEgLTEwLjUgMTAuNSAwIDAgMSAtMTAuNSAxMC41IGEgLTkuNSA5LjUgMCAwIDAgLTkuNSA5LjUgYSAtMTAuNSAxMC41IDAgMCAxIC0xMC41IDEwLjV6IAogICAgICAgICAgICAgICAgTS0xMyAgLTAuNSBhIDkuNSAtOS41IDAgMCAwIDkuNSAtOS41IGgxIGEgLTEwLjUgMTAuNSAwIDAgMSAtMTAuNSAxMC41egogICAgICAgICAgICAgICAgTS0xMyAgLTAuNSBhIDEwLjUgMTAuNSAwIDAgMSAxMC41IDEwLjUgYSA5LjUgOS41IDAgMCAwIDkuNSA5LjUgYSAxMC41IDEwLjUgMCAwIDEgMTAuNSAxMC41IGEgOS41IDkuNSAwIDAgMCA5LjUgOS41IGEgMTAuNSAxMC41IDAgMCAxIDEwLjUgMTAuNSBhIDkuNSA5LjUgMCAwIDEgOS41IDkuNSB2MSBhIC0xMC41IC0xMC41IDAgMCAxIC0xMC41IC0xMC41IGEgLTkuNSAtOS41IDAgMCAwIC05LjUgLTkuNSBhIC0xMC41IC0xMC41IDAgMCAxIC0xMC41IC0xMC41IGEgLTkuNSAtOS41IDAgMCAwIC05LjUgLTkuNSBhIC0xMC41IC0xMC41IDAgMCAxIC0xMC41IC0xMC41IGEgLTkuNSAtOS41IDAgMCAwIC05LjUgLTkuNSBhIC0xMC41IC0xMC41IDAgMCAxIC0xMC41IC0xMC41IGEgLTkuNSAtOS41IDAgMCAxIC05LjUgLTkuNSBhIC0xMC41IC0xMC41IDAgMCAwIC0xMC41IC0xMC41ICBoMSBhIDkuNSA5LjUgMCAwIDEgOS41IDkuNSAgYSA5LjUgOS41IDAgMCAwIDkuNSA5LjV6CiAgICAgICAgICAgICAgICBNMjcgIC0wLjUgYSAxMC41IDEwLjUgMCAwIDEgMTAuNSAxMC41IGEgOS41IDkuNSAwIDAgMCA5LjUgOS41IGEgMTAuNSAxMC41IDAgMCAxIDEwLjUgMTAuNSBoLTEgYSAtOS41IC05LjUgMCAwIDAgLTkuNSAtOS41IGEgLTEwLjUgLTEwLjUgMCAwIDEgLTEwLjUgLTEwLjUgYSAtOS41IC05LjUgMCAwIDAgLTkuNSAtOS41IGEgLTEwLjUgLTEwLjUgMCAwIDEgLTEwLjUgLTEwLjUgYSAtOS41IC05LjUgMCAwIDEgLTkuNSAtOS41IGEgLTEwLjUgLTEwLjUgMCAwIDEgLTEwLjUgLTEwLjV6CiAgICAgICAgICAgICAgICBNMjcgMzkuNSBhIDkuNSAtOS41IDAgMCAwIDkuNSAtOS41IGEgMTAuNSAtMTAuNSAwIDAgMSAxMC41IC0xMC41IGEgOS41IC05LjUgMCAwIDAgOS41IC05LjUgYSAxMC41IC0xMC41IDAgMCAxIDEwLjUgLTEwLjUgdjEgYSAtOS41IDkuNSAwIDAgMCAtOS41IDkuNSBhIC0xMC41IDEwLjUgMCAwIDEgLTEwLjUgMTAuNSBhIC05LjUgOS41IDAgMCAwIC05LjUgOS41IGEgLTEwLjUgMTAuNSAwIDAgMSAtMTAuNSAxMC41eiI+PC9wYXRoPjwvcGF0dGVybj4gIDwvZGVmcz4gPHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSI+PC9yZWN0Pjwvc3ZnPg==") */
  /* background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjQ5IiBoZWlnaHQ9IjQ5IiB2aWV3Qm94PSIwIDAgNDAsNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgxOTgpICI+PHJlY3QgaWQ9InBhdHRlcm4tYmFja2dyb3VuZCIgd2lkdGg9IjQwMCUiIGhlaWdodD0iNDAwJSIgZmlsbD0icmdiYSgyNDcsIDI1MCwgMjUyLDEpIj48L3JlY3Q+IDxwYXRoIGZpbGw9InJnYmEoMjYsIDMyLCA0NCwxKSIgZD0iTS0xMCAxMCBoNjAgdjEwIGgtNjB6Ij48L3BhdGg+PHBhdGggZmlsbD0icmdiYSgyNDcsIDI1MCwgMjUyLDEpIiBkPSJNLTMwIDEwIGgxIGwtMjYgMTAgaC0xeiAKICAgICAgICAgICAgICAgIE0xMCAxMCBoMSBsLTI2IDEwIGgtMXogCiAgICAgICAgICAgICAgICBNNTAgMTAgaDEgbC0yNiAxMCBoLTF6IiBzdHJva2UtbWl0ZXJsaW1pdD0iOTkiPjwvcGF0aD48L3BhdHRlcm4+ICA8L2RlZnM+IDxyZWN0IGZpbGw9InVybCgjcGF0dGVybikiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiPjwvcmVjdD48L3N2Zz4=") */
  /* background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9Ijk4IiBoZWlnaHQ9Ijk4IiB2aWV3Qm94PSIwIDAgNDAsNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgxOTIpICI+PHJlY3QgaWQ9InBhdHRlcm4tYmFja2dyb3VuZCIgd2lkdGg9IjQwMCUiIGhlaWdodD0iNDAwJSIgZmlsbD0icmdiYSgyNDcsIDI1MCwgMjUyLDEpIj48L3JlY3Q+IDxwYXRoIGZpbGw9InJnYmEoMjYsIDMyLCA0NCwxKSIgZD0iTTAgMjkuNSBoNDAgdjEgaC00MHoKICAgICAgICAgICAgICAgIE0wIDkuNSBoNDAgdjEgaC00MCB6Ij48L3BhdGg+PHBhdGggZmlsbD0icmdiYSgyNDcsIDI1MCwgMjUyLDEpIiBkPSJNMCAyMCBoNDAgdjIwIGgtNDB6CiAgICAgICAgICAgICAgICBNMCAwIGg0MCB2MjAgaC00MCB6Ij48L3BhdGg+PHBhdGggZmlsbD0icmdiYSgyNiwgMzIsIDQ0LDEpIiBkPSJNMCAyOS41IGgyMCB2MSBoLTIwegogICAgICAgICAgICAgICAgTS0yMCAyOS41IGEgOS41IC05LjUgMCAwIDAgOS41IC05LjUgYSAxMC41IC0xMC41IDAgMCAxIDEwLjUgLTEwLjUgdjEgYSAtOS41IDkuNSAwIDAgMCAtOS41IDkuNSBhIC0xMC41IDEwLjUgMCAwIDEgLTEwLjUgMTAuNQogICAgICAgICAgICAgICAgTTIwIDI5LjUgYSA5LjUgLTkuNSAwIDAgMCA5LjUgLTkuNSBoMSBhIC0xMC41IDEwLjUgMCAwIDEgLTEwLjUgMTAuNQogICAgICAgICAgICAgICAgTS0xMCA5LjUgaDMwIHYxIGgtMzB6Ij48L3BhdGg+PHBhdGggZmlsbD0icmdiYSgyNDcsIDI1MCwgMjUyLDEpIiBkPSJNMCAyMCBhIDAgMCAwIDAgMCAwIDAgYSAyMCAtMjAgMCAwIDEgMjAgLTIwIHYyMCBhIDAgMCAwIDAgMCAwIDAgYSAtMjAgMjAgMCAwIDEgLTIwIDIweiBNMjAgMCBoMjAgdjIwIGgtMjB6Ij48L3BhdGg+PHBhdGggZmlsbD0icmdiYSgyNiwgMzIsIDQ0LDEpIiBkPSIKICAgICAgICAgICAgICAgIE00MCA5LjUgYSAtMTAuNSAxMC41IDAgMCAwIC0xMC41IDEwLjUgaDEgYSA5LjUgLTkuNSAwIDAgMSA5LjUgLTkuNQogICAgICAgICAgICAgICAgaDMwIHYtMSBoLTMweiI+PC9wYXRoPjwvcGF0dGVybj4gIDwvZGVmcz4gPHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSI+PC9yZWN0Pjwvc3ZnPg==") */
  /* background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9Ijk4IiBoZWlnaHQ9Ijk4IiB2aWV3Qm94PSIwIDAgNDAsNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgxOTIpICI+PHJlY3QgaWQ9InBhdHRlcm4tYmFja2dyb3VuZCIgd2lkdGg9IjQwMCUiIGhlaWdodD0iNDAwJSIgZmlsbD0icmdiYSgyNDcsIDI1MCwgMjUyLDEpIj48L3JlY3Q+IDxwYXRoIGZpbGw9InJnYmEoMjYsIDMyLCA0NCwxKSIgZD0iTTAgMjkuNSBoNDAgdjEgaC00MHoKICAgICAgICAgICAgICAgIE0wIDkuNSBoNDAgdjEgaC00MCB6Ij48L3BhdGg+PHBhdGggZmlsbD0icmdiYSgyNDcsIDI1MCwgMjUyLDEpIiBkPSJNMCAyMCBoNDAgdjIwIGgtNDB6CiAgICAgICAgICAgICAgICBNMCAwIGg0MCB2MjAgaC00MCB6Ij48L3BhdGg+PHBhdGggZmlsbD0icmdiYSgyNiwgMzIsIDQ0LDEpIiBkPSJNMCAyOS41IGgyMCB2MSBoLTIwegogICAgICAgICAgICAgICAgTS0yMCAyOS41IGEgOS41IC05LjUgMCAwIDAgOS41IC05LjUgYSAxMC41IC0xMC41IDAgMCAxIDEwLjUgLTEwLjUgdjEgYSAtOS41IDkuNSAwIDAgMCAtOS41IDkuNSBhIC0xMC41IDEwLjUgMCAwIDEgLTEwLjUgMTAuNQogICAgICAgICAgICAgICAgTTIwIDI5LjUgYSA5LjUgLTkuNSAwIDAgMCA5LjUgLTkuNSBoMSBhIC0xMC41IDEwLjUgMCAwIDEgLTEwLjUgMTAuNQogICAgICAgICAgICAgICAgTS0xMCA5LjUgaDMwIHYxIGgtMzB6Ij48L3BhdGg+PHBhdGggZmlsbD0icmdiYSgyNDcsIDI1MCwgMjUyLDEpIiBkPSJNMCAyMCBhIDAgMCAwIDAgMCAwIDAgYSAyMCAtMjAgMCAwIDEgMjAgLTIwIHYyMCBhIDAgMCAwIDAgMCAwIDAgYSAtMjAgMjAgMCAwIDEgLTIwIDIweiBNMjAgMCBoMjAgdjIwIGgtMjB6Ij48L3BhdGg+PHBhdGggZmlsbD0icmdiYSgyNiwgMzIsIDQ0LDEpIiBkPSIKICAgICAgICAgICAgICAgIE00MCA5LjUgYSAtMTAuNSAxMC41IDAgMCAwIC0xMC41IDEwLjUgaDEgYSA5LjUgLTkuNSAwIDAgMSA5LjUgLTkuNQogICAgICAgICAgICAgICAgaDMwIHYtMSBoLTMweiI+PC9wYXRoPjwvcGF0dGVybj4gIDwvZGVmcz4gPHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSI+PC9yZWN0Pjwvc3ZnPg==") */
  /* background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCA0MCw0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDM2MCkgIj48cmVjdCBpZD0icGF0dGVybi1iYWNrZ3JvdW5kIiB3aWR0aD0iNDAwJSIgaGVpZ2h0PSI0MDAlIiBmaWxsPSJyZ2JhKDI0NywgMjUwLCAyNTIsMSkiPjwvcmVjdD4gPHBhdGggZmlsbD0icmdiYSgyNiwgMzIsIDQ0LDEpIiBkPSJNLTEwIC0xMCBoNjAgdjYwIGgtNjB6IE0yMCAyMCB2MCBoMCB2LTAgeiI+PC9wYXRoPjxwYXRoIGZpbGw9InJnYmEoMjQ3LCAyNTAsIDI1MiwxKSIgZD0iTS0xMCAtMTAgaDkwIHY5MCBoLTkweiAKICAgICAgICAgICAgICAgIE0zMCAzMCB2MjAgaDIwIHYtMjAgegogICAgICAgICAgICAgICAgTS0xMCAtMTAgdjIwIGgyMCB2LTIwIHoKICAgICAgICAgICAgICAgIE0zMCAtMTAgdjIwIGgyMCB2LTIwIHoKICAgICAgICAgICAgICAgIE0tMTAgMzAgdjIwIGgyMCB2LTIwIHoiPjwvcGF0aD48L3BhdHRlcm4+ICA8L2RlZnM+IDxyZWN0IGZpbGw9InVybCgjcGF0dGVybikiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiPjwvcmVjdD48L3N2Zz4=") */
  /* background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDAsNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzNTUpICI+PHJlY3QgaWQ9InBhdHRlcm4tYmFja2dyb3VuZCIgd2lkdGg9IjQwMCUiIGhlaWdodD0iNDAwJSIgZmlsbD0icmdiYSgyNDcsIDI1MCwgMjUyLDEpIj48L3JlY3Q+IDxjaXJjbGUgZmlsbD0icmdiYSg5OSwgMTc5LCAyMzcsMSkiIGN4PSIyMCIgY3k9IjIwIiByPSIxIj48L2NpcmNsZT48Y2lyY2xlIGZpbGw9InJnYmEoNDMsIDEwOCwgMTc2LDEpIiBjeD0iMzIiIGN5PSIyMCIgcj0iMSI+PC9jaXJjbGU+PGNpcmNsZSBmaWxsPSJyZ2JhKDQzLCAxMDgsIDE3NiwxKSIgY3g9Ii04IiBjeT0iMjAiIHI9IjEiPjwvY2lyY2xlPjwvcGF0dGVybj4gIDwvZGVmcz4gPHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSI+PC9yZWN0Pjwvc3ZnPg==") */
  /* background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjM4IiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgNDAsNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg5MCkgIj48cmVjdCBpZD0icGF0dGVybi1iYWNrZ3JvdW5kIiB3aWR0aD0iNDAwJSIgaGVpZ2h0PSI0MDAlIiBmaWxsPSJyZ2JhKDI0NywgMjUwLCAyNTIsMSkiPjwvcmVjdD4gPGNpcmNsZSBmaWxsPSJyZ2JhKDI2LCAzMiwgNDQsMSkiIGN4PSIyMCIgY3k9IjIwIiByPSIxIj48L2NpcmNsZT48Y2lyY2xlIGZpbGw9InJnYmEoOTksIDE3OSwgMjM3LDEpIiBjeD0iMjMiIGN5PSIyMCIgcj0iMSI+PC9jaXJjbGU+PGNpcmNsZSBmaWxsPSJyZ2JhKDk5LCAxNzksIDIzNywxKSIgY3g9Ii0xNyIgY3k9IjIwIiByPSIxIj48L2NpcmNsZT48L3BhdHRlcm4+ICA8L2RlZnM+IDxyZWN0IGZpbGw9InVybCgjcGF0dGVybikiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiPjwvcmVjdD48L3N2Zz4=") */
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCA0MCw0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDIwNikgIj48cmVjdCBpZD0icGF0dGVybi1iYWNrZ3JvdW5kIiB3aWR0aD0iNDAwJSIgaGVpZ2h0PSI0MDAlIiBmaWxsPSJyZ2JhKDI0NywgMjUwLCAyNTIsMSkiPjwvcmVjdD4gPGNpcmNsZSBmaWxsPSJyZ2JhKDI2LCAzMiwgNDQsMSkiIGN4PSIyMCIgY3k9IjIwIiByPSIxIj48L2NpcmNsZT48Y2lyY2xlIGZpbGw9InJnYmEoOTksIDE3OSwgMjM3LDEpIiBjeD0iNDAiIGN5PSIyMCIgcj0iMSI+PC9jaXJjbGU+PGNpcmNsZSBmaWxsPSJyZ2JhKDk5LCAxNzksIDIzNywxKSIgY3g9IjAiIGN5PSIyMCIgcj0iMSI+PC9jaXJjbGU+PC9wYXR0ZXJuPiAgPC9kZWZzPiA8cmVjdCBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIj48L3JlY3Q+PC9zdmc+");
}
</style>
