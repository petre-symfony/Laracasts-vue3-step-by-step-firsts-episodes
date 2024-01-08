export default {
  template: `
    <div class="bg-gray-700 p-4 border border-gray-400 rounded">
      <h2 v-if="$slots.heading" class="font-bold">
        <slot name="heading"/>
      </h2>
      
      <slot/>
      
      <footer v-if="$slots.footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  `,
  props: {
    heading: String
  }
}