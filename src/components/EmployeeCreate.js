import React from 'react'
import { Picker, Text } from 'react-native'
import { Input, Card, CardSection, Button } from './common'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'

class EmployeeCreate extends React.Component {
  render () {
    console.log(this.state)
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            value={this.props.name}
            onChangeText={(text) => this.props.employeeUpdate({prop: 'name', value: text})}/>
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            value={this.props.phone}
            onChangeText={(text) => this.props.employeeUpdate({prop: 'phone', value: text})}/>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>

        <CardSection style={{flexDirection: 'column'}}>
          <Text style={styles.pickerTextStyle}>Select Shift</Text>
          <Picker
            style={{flex: 1}}
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeUpdate({prop: 'shift', value: day})}>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shift: state.employeeForm.shift
  }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate)
