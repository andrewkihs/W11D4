import React from 'react'
import BenchIndexItem from './beach_index_item'

class BenchIndex extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log('hello')
    this.props.fetchBenches();
  }
  render(){
    const benches = Object.values(this.props.benches)
    debugger
    return (
      <ul>
          {benches.map((bench) => (
           <BenchIndexItem key={bench.id} bench={bench}/>)
         )}
      </ul>
    )
  }
}

export default BenchIndex