export default {
  template: `<div class="flex gap-2">
      <button 
          @click="currentTag = tag"
          v-for="tag in tags" 
          class="rounded border px-1 py-1 text-xs"
          :class="{
            'border-blue-500 text-blue-500': tag === currentTag
          }"
        >
        {{ tag }}
      </button>
    </div>`,
  props: {
    tags: Array
  },
  computed: {
    tags() {
      return ['all', ...new Set(this.assignments.map(a => a.tag))];
    }
  }
}