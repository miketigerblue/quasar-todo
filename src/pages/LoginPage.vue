<template>
  <q-page class="flex flex-center" padding>
    <div class="full-width" style="max-width: 300px">
      <h5 class="q-my-md text-center">Login</h5>
      <q-card>
        <q-card-section>
          <q-input
            filled
            label="email"
            placeholder="example@example.com"
            class="q-mb-md"
          ></q-input>
          <q-input
            filled
            label="password"
            type="password"
            class="q-mb-sm"
          ></q-input>
          <q-checkbox label="remember me" :model-value="true"></q-checkbox>
        </q-card-section>
        <q-btn label="login" class="full-width" color="primary" />
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
