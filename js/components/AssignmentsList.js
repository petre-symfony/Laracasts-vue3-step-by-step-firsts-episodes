import Assignment from "./Assignment.js";

export default {
  components: {
    Assignment
  },
  template: `<section v-show="assignments.length" class="mt-8">
      <h2 class="font-bold mb-5">
        {{ title }}
        <span>({{ assignments.length }})</span>
      </h2>
      
      <div class="flex gap-2">
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
      </div>
      
      <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
        <assignment 
          v-for="assignment in filteredAssignments" 
          :key="assignment.id"
          :assignment="assignment"
        />
      </ul>
    </section>
  `,
  data() {
    return {
      currentTag: 'all'
    }
  },
  props: {
    assignments: Array,
    title: String
  },
  computed: {
    tags() {
      return ['all', ...new Set(this.assignments.map(a => a.tag))];
    },
    filteredAssignments() {
      if (this.currentTag === 'all') {
        return this.assignments;
      }
      return this.assignments.filter(a => a.tag === this.currentTag)
    }
  }
}