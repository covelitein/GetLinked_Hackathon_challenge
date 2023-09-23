import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
    modalcomponent: 'scale-0'
})

export { setGlobalState, useGlobalState, getGlobalState };