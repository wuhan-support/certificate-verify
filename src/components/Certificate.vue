<template>
  <section>
    <h1>Certificate</h1>
    <ul>
      <li>Name: {{name}}</li>
      <li>Group: {{group}}</li>
      <li>Cert ID: {{certId}}</li>
      <li>Validity: {{valid}}</li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Validity from '@/models/validity'

@Component
export default class Certificate extends Vue {
  @Prop() private name!: string;
  @Prop() private group!: string;
  @Prop() private certId!: string;
  @Prop() private valid!: Validity;
}
</script>

<style scoped>

</style>
