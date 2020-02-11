import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { addCount, reduceCount } from './actions'

const Button = (props: {
  children: React.ReactChild
  onClick?: (event?: React.MouseEvent) => void
}) => (
  <button
    className="px-4 py-1 bg-yellow-400 mx-4 rounded-md shadow-sm focus:outline-none focus:shadow-outline"
    onClick={props.onClick}
  >
    {props.children}
  </button>
)

interface AppProps {
  number: number
  dispatch: Dispatch
}

function App(props: AppProps) {
  const { number, dispatch } = props
  const [value, setValue] = useState(1)

  const handleReduce = useCallback(() => {
    dispatch(reduceCount(value))
  }, [dispatch, value])

  const handleAdd = useCallback(() => {
    dispatch(addCount(value))
  }, [dispatch, value])

  return (
    <div className="app">
      <p className="container mx-auto pt-40 flex justify-center">
        <input
          type="number"
          placeholder="input value"
          className="border"
          onChange={e => setValue(Number(e.target.value))}
          value={value}
        />
      </p>
      <p className="container mx-auto pt-40 flex justify-center">
        <Button onClick={handleReduce}>Reduce</Button>
        <span className="text-2xl text-center w-5">{number}</span>
        <Button onClick={handleAdd}>Add</Button>
      </p>
    </div>
  )
}

const mapStateToProps = (state: any) => ({ number: state.count })
const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleAdd: () => {
    dispatch(addCount(1))
  },
  handleReduce: () => {
    dispatch(reduceCount(1))
  },
})

export default connect(mapStateToProps)(App)
