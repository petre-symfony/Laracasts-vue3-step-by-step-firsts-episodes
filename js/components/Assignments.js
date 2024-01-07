import AssignmentsList from "./AssignmentsList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: {
    AssignmentsList,
    AssignmentCreate
  },
  template: `
    <section class="flex gap-8">
      <assignments-list :assignments="filters.inProgress" title="In Progress">
        <assignment-create @add="add"></assignment-create>
      </assignments-list>
      <assignments-list 
          v-if="showCompleted"
          :assignments="filters.completed" 
          title="Completed" 
          can-toggle
          @toggle="showCompleted = !showCompleted"
      >        
      </assignments-list>
      
    </section>
  `,
  data() {
    return {
      assignments: [],
      showCompleted: true
    }
  },
  created() {
    fetch('http://localhost:3001/assignments')
      .then(response => response.json())
      .then(assignments => {
        this.assignments = assignments
    });
  },
  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(assignment => !assignment.complete),
        completed: this.assignments.filter(assignment => assignment.complete)
      }
    }
  },
  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        complete: false,
        id: this.assignments.length + 1
      });
    }
  }
}