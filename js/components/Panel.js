export default {
  template: `
    <div class="bg-gray-700 p-4 border border-gray-400 rounded">
      <h2 class="font-bold">
        <slot name="heading"/>
      </h2>
      
      <slot/>
    </div>
  `,
  props: {
    heading: String
  }
}