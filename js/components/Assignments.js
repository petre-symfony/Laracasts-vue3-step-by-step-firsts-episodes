import AssignmentsList from "./AssignmentsList.js";
export default {
  components: {
    AssignmentsList
  },
  template: `
    <assignments-list :assignments="inProgressAssignments" title="In Progress"></assignments-list>
    <assignments-list :assignments="completedAssignments" title="Completed"></assignments-list>
  `,
  data() {
    return {
      assignments: [
        {name: 'Finish project', complete: false, id: 1},
        {name: 'Read chapter 4', complete: false, id: 2},
        {name: 'Turn in homework', complete: false, id: 3}
      ]
    }
  },
  computed: {
    inProgressAssignments() {
      return this.assignments.filter(assignment => !assignment.complete)
    },
    completedAssignments() {
      return this.assignments.filter(assignment => assignment.complete)
    }
  }
}