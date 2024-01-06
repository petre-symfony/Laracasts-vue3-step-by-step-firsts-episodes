import Assignment from "./Assignment.js";

export default {
  components: {
    Assignment
  },
  template: `<section v-show="assignments.length" class="mt-8">
      <h2 class="font-bold mb-5">{{ title }}</h2>
    
      <ul>
        <assignment 
          v-for="assignment in assignments" 
          :key="assignment.id"
          :assignment="assignment"
        />
      </ul>
    </section>
  `,
  props: {
    assignments: Array,
    title: String
  }
}