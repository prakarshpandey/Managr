import * as _ from 'lodash'
import React from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import { employeesFetch } from '../actions'
import ListItem from './ListItem'
class EmployeeList extends React.Component {
  componentWillMount () {
    this.props.employeesFetch()
    this.createDataSource(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource (props) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(props.employees)
  }

  renderRow = (employee) => {
    return (
      <ListItem employee={employee}/>
    )
  }

  render () {
    console.log(this.props.employees)
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}>

      </ListView>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.employees)
  const employees = _.map(state.employees.employees, (val, uid) => {
    return { ...val, uid }
  })
  console.log(employees)
  return { employees }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)
