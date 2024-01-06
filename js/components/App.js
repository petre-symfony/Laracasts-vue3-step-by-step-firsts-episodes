export default {
  template: `<section v-show="inProgressAssignments.length">
      <h2 class="font-bold mb-5">In Progress</h2>
    
      <ul>
        <li v-for="assignment in inProgressAssignments" :key="assignment.id">
        <label >
          {{ assignment.name }}
          <input type="checkbox" v-model="assignment.complete">
        </label>
      </li>
    </ul>
    </section>
    
    <section v-show="completedAssignments.length" class="mt-8">
      <h2 class="font-bold mb-5">Completed</h2>
    
      <ul>
        <li v-for="assignment in completedAssignments" :key="assignment.id">
        <label >
          {{ assignment.name }}
          <input type="checkbox" v-model="assignment.complete">
        </label>
      </li>
    </ul>
  </section>
  `
}