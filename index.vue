<template>
<div>
  <divflex v-if="item.nm_restriction != 'Meses Encher Filial'">
      <v-col cols="8">
      <TitleDetalhe >Restrições de {{ item.nm_restriction }}</TitleDetalhe>
      </v-col>
      <v-col v-if="item.bl_button_load_file === true" cols="2">
        <input type="file" id="upload-file" name="upload-file" hidden
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
        <FlexDiv><icon :name="'download'" size="20" />
        <UploadFile for="upload-file" refs="upload-file" class="file-btn">
          Importar Planilha
        </UploadFile>
        </FlexDiv>
      </v-col>

      <v-col cols="2">
        <v-text-field
          outlined
          label="Pesquisar"
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <TableRestriction v-if="item.nm_restriction === 'Consumo'" :restriction="item"/>
      </divflex>
      <TitleRestriction v-show="showRestriction">Editar restrições</TitleRestriction>
      <divflex v-if="item.nm_restriction === 'Meses Encher Filial'">
      <v-col cols="10">
      <TitleDetalhe >Restrições de Meses Encher Filial</TitleDetalhe>
      </v-col>
      <v-col cols="2">
        <v-text-field
          outlined
          label="Pesquisar"
          append-icon="mdi-magnify"
        >
        </v-text-field>
      </v-col>
      <TableDetail>
        <table>
          <caption>Tabelas de Filiais</caption>
          <thead>
            <tr>
              <th scope="col">Centro</th>
              <th scope="col" v-for="filial in mes" :key="filial">{{ filial.mes }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in dtl" :key="index">
              <td>{{ row.centro }}</td>
              <td v-for="(tofillCheck, index) in tofill"
              :key="index">
                {{ tofillCheck.cd_capacity }} -
                <input v-model="tofillCheck.vl_tofill"
                type="checkbox" id="scales" name="scales"
                @click="saveEdit(tofillCheck.cd_capacity)">
              </td>
            </tr>
          </tbody>
        </table>

      </TableDetail>
      </divflex>
      <saveButton @click="saveEdit">Salvar</saveButton>

    </div>
</template>
<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import Vue from 'vue';
import {
  Generic,
} from '@/utils/types';
import {
  divflex, TitleDetalhe, saveButton, TableDetail, UploadFile, FlexDiv,
} from './styles';

import TableRestriction from '../table-restriction/index.vue';
import icon from '@/components/icon/index.vue';

export default Vue.extend({
  name: 'Card',
  components: {
    divflex,
    TitleDetalhe,
    saveButton,
    TableDetail,
    TableRestriction,
    UploadFile,
    icon,
    FlexDiv,
  },
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(['getDetails']),
  },
  data: () => ({
    DetalhesShow: false,
    dtl: [] as Generic,
    mes: [] as Generic,
    tofill: [] as Generic,
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 200,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%',
      },
      {
        name: 'Ice cream sandwich',
        calories: 200,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%',
      },
      {
        name: 'Eclair',
        calories: 300,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%',
      },
      {
        name: 'Cupcake',
        calories: 300,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%',
      },
      {
        name: 'Gingerbread',
        calories: 400,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%',
      },
      {
        name: 'Jelly bean',
        calories: 400,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%',
      },
      {
        name: 'Lollipop',
        calories: 400,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%',
      },
      {
        name: 'Honeycomb',
        calories: 400,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%',
      },
      {
        name: 'Donut',
        calories: 500,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%',
      },
      {
        name: 'KitKat',
        calories: 500,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%',
      },
    ],
  }),
  created() {
    this.postDetails()
      .then(() => {
        this.getDetails.forEach((item: Generic) => {
          const dup = this.dtl.findIndex((redItem: Generic) => item.centro === redItem.centro) > -1;
          if (!dup) {
            this.dtl.push(item);
          }
        });
        this.getDetails.forEach((item: Generic) => {
          const dup = this.mes.findIndex((redItem: Generic) => item.mes === redItem.mes) > -1;
          if (!dup) {
            this.mes.push(item);
          }
        });
        this.getDetails.forEach((item: Generic) => {
          const dup = this.tofill.findIndex((redItem: Generic) => item.mes === redItem.mes) > -1;
          if (!dup) {
            this.tofill.push(item);
          }
        });
      });
  },
  methods: {
    ...mapActions({
      postDetails: 'postDetails', putSelectedTrue: 'putSelectedTrue',
    }),
    saveEdit(item: Generic) {
      this.putSelectedTrue(item);
      console.log(item);
    },
  },
});
</script>
