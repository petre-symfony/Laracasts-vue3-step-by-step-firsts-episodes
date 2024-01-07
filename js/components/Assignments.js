import AssignmentsList from "./AssignmentsList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: {
    AssignmentsList,
    AssignmentCreate
  },
  template: `
    <section class="space-y-6">
      <assignments-list :assignments="filters.inProgress" title="In Progress"></assignments-list>
      <assignments-list :assignments="filters.completed" title="Completed"></assignments-list>
      
      <assignment-create @add="add"/>
    </section>
  `,
  data() {
    return {
      assignments: []
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