<template>
  <v-app>
    <v-main>
      <Bday/>
    </v-main>
  </v-app>
</template>

<script>
import Bday from './components/Bday';

export default {
  name: 'App',
  components: {
    Bday,
  },

  data: () => ({
//
  }),
};
</script>
