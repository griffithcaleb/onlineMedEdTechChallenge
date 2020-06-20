import { ConnectedProps, connect } from "react-redux"
import { RootState } from "../store";

export const mapState = (state: RootState) => ({
  todos: state.todos
})

export const connector = connect(mapState)

export type PropsFromRedux = ConnectedProps<typeof connector>