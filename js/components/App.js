import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
  components: {
    Assignments,
    Panel
  },
  template: `
    <div class="grid gap-6">
      <Assignments />
      
      <Panel>
         <template v-slot:heading>
          Hi there
        </template>
        <template v-slot:default>
          This is my default content
        </template>
      </Panel>
    </div>
  `
}