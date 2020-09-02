import React from 'react';
import { Button, Input } from 'semantic-ui-react'

class EditHabit extends React.Component {
    state = {
        editHabit: '',
        editId: null
    }

    componentDidMount = () => {
      this.setState({ editHabit: this.props.habit.description })
    }

    onChange = (e) => {
      this.setState({ editHabit: e.target.value })
    }

    onSubmit = (e) => {
      e.preventDefault()
      this.props.editSubmit(this.props.habit.id, this.state.editHabit);
    }

    render() {
        return (
          <React.Fragment>

            <form onSubmit={ this.onSubmit }>
              <Input  type="text"
                      style={{ width: '350px' }}
                      value={ this.state.editHabit }
                      name="editHabit"
                      onChange={ this.onChange }
                      label={<Button type="submit" color="orange">Edit</Button>}
                      labelPosition='right' />
            </form>
          </React.Fragment>
        );
    }
}

export default EditHabit;
