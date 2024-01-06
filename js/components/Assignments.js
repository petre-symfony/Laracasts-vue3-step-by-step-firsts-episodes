import AssignmentsList from "./AssignmentsList.js";
export default {
  components: {
    AssignmentsList
  },
  template: `
    <section class="space-y-6">
      <assignments-list :assignments="filters.inProgress" title="In Progress"></assignments-list>
      <assignments-list :assignments="filters.completed" title="Completed"></assignments-list>
      
      <form >
        <div class="border border-gray-600 text-black">
          <input placeholder="New assignment..." class="p-2">
          <button type="submit" class="bg-white p-2 border-l">Add</button>
        </div>
      </form>
    </section>
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
    filters() {
      return {
        inProgress: this.assignments.filter(assignment => !assignment.complete),
        completed: this.assignments.filter(assignment => assignment.complete)
      }
    }
  }
}