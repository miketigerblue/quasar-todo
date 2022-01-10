<template>
  <q-page class="row">
    <q-card class="col-xs-9">
      <q-toolbar>
        <q-input
          dense
          placeholder="Search"
          borderless
          class="full-width"
          :model-value="search"
        >
          <template #append> <q-icon name="mdi-magnify"></q-icon> </template>
        </q-input>
      </q-toolbar>
      <q-list bordered>
        <q-item>
          <q-item-section side>
            <q-checkbox :model-value="true"> </q-checkbox>
          </q-item-section>
          <q-item-section> Go Shopping </q-item-section>
          <q-item-section side>
            <q-btn round size="sm" flat icon="mdi-delete"></q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
    <q-card class="col-xs-3">
      <div>
        <q-toolbar class="bg-primary">
          <q-btn
            fab
            style="margin-bottom: -42px"
            class="q-ml-lg"
            color="secondary"
            icon="mdi-plus"
          ></q-btn>
        </q-toolbar>
      </div>
    </q-card>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      search: "",
    };
  },
});
</script>
