/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

type ComponentAction = any[];

// HookState is an array that contains a "component" for
// every single state change that occurs in the app
// Information on these components include ComponentData as well as state
// For class components, there will be one "component" for each snapshot
// For functional components that utilize Hooks, there will be one "component"
// for each setter/getter every time we have a new snapshot
let componentActionsRecord: ComponentAction = [];
let index: number;
index = 0;

export default {
  clear: () => {
    componentActionsRecord = [];
    index = 0;
  },
  // Adds new component to ComponentActionsRecord
  saveNew: (component): number => {
    componentActionsRecord[index] = component;
    index++;

    return index - 1;
  },
  // ----------------------------CLASS COMPONENT--------------------------------
  /* inputIndex will always be a fixed number (coming in timeJump.ts) */
  getComponentByIndex: (inputIndex: number): any | undefined => componentActionsRecord[inputIndex],

  //---------------------------FUNCTIONAL COMPONENT-----------------------------
  // this is used for react hooks - hooks will be passed in as an array from timeJump.ts
  getComponentByIndexHooks: (inputIndex: Array<number> = []): any[] | undefined =>
    inputIndex.map((index) => componentActionsRecord[index]),
};
