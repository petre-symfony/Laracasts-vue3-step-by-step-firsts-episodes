export default {
  template: `
    <div class="bg-gray-700 p-4 border border-gray-400 rounded">
      <h2 class="font-bold" v-text="heading"></h2>
    </div>
  `,
  props: {
    heading: String
  }
}