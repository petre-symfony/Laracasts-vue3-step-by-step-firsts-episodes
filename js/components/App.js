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
        This is my default content
      </Panel>
      
      <Panel>
         <template v-slot:heading>
          Hi there
        </template>
        
        This is my default content
        
      </Panel>
    </div>
  `
}