const sort = (a) => a.sort((a, b) => (a.name < b.name ? -1 : 1));

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

function partition(array, isValid) {
  return array.reduce(([pass, fail], elem) => {
    return isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
  }, [[], []]);
}

import { axios } from "@bundled-es-modules/axios";

export default {
  actions: {
    async getPartners({ commit }) {
      const partners = (await axios.get('https://1src.tech/api/functions/public_sbpPartners/run')).data.data
      commit('setPartners', partners);
    },
    async getPresets({ commit }) {
      const presets = await axios.get(
        `https://1src.tech/api/functions/public_sbp_presetNames/run`
      );
      commit('setPresets', presets.data.data);
    },
    async applyPreset({ commit, state }, preset) {
      await axios.post(
        `https://1src.tech/api/functions/sbp_applyPreset/run?key=XFKdw42rYH2pLgGZ9WGzzShWD9GfJZra`,
        { name: preset.name },
      );
      commit('setConfiguration', {...preset, page: 1});
    },
    async incrementPage({ commit, state }, increment) {
      const newPage = state.currentConfiguration.page + increment;
      (await axios.post(
        `https://1src.tech/api/functions/sbp_setCurrentPage/run?key=XFKdw42rYH2pLgGZ9WGzzShWD9GfJZra`,
        { page: newPage },
      ))
      commit('setConfiguration', { ...state.currentConfiguration, page: newPage });
    }
  },
  mutations: {
    setPartners(state, partners) {
      const [featured, regular] = partition(partners, (e) => !!e.featured);
      state.partners = {
        all: partners,
        featured,
        regular
      }
    },
    setPresets(state, presets) {
      state.presets = presets;
    },
    setConfiguration(state, configuration) {
      state.currentConfiguration = configuration;
    }
  },
  state() {
    return {
      partners: {
        all: [],
        featured: [],
        regular: []
      },
      presets: [],
      currentConfiguration: {
        name: null,
        page: 1,
        numPages: 1
      }
    };
  },
  getters: {
    byEscapedName: (state) => (name) => {
      return state.partners.all.find(
        (partner) => partner.name.toLowerCase().replaceAll(" ", "-") === name
      );
    },
  },
};
