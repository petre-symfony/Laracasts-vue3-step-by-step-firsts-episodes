export default {
  template: `<form @submit.prevent="add">
      <div class="border border-gray-600 text-black flex w-60">
        <input v-model="newAssignment" placeholder="New assignment..." class="w-5/6 p-2">
        <button type="submit" class="bg-white p-2 border-l w-1/6">Add</button>
      </div>
    </form>`,
  data() {
    return {
      newAssignment: ''
    }
  },
  methods: {
    add() {
      this.$emit('add', this.newAssignment);

      this.newAssignment = '';
    }
  }
}