import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, Switch, Button, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

class Reservation extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      guest: 1,
      smoking: false,
      date: '',
      showModal: false
    }
  }

  toggleModal() {
    this.setState({showModal: !this.state.showModal});
}

handleReservation() {
    console.log(JSON.stringify(this.state));
    this.toggleModal();
}

resetForm() {
    this.setState({
        guests: 1,
        smoking: false,
        date: '',
        showModal: false
    });
}

  render() {
    const guestNumOptions = {1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6'};

    return (
      <ScrollView>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Number of Guests</Text>
          <Picker style={styles.formItem} 
                  selectedValue={this.state.guests} 
                  onValueChange={(itemValue, itemIndex) => 
                    this.setState({ 
                      guests: itemValue 
                    })}>
            {Object.entries({ ...guestNumOptions }).map(( [option] ) => (
              <Picker.Item label={option} value={option} />     
            ))}     
          </Picker>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Smoking/Non-Smoking?</Text>
          <Switch style={styles.formItem} 
                  value={this.state.smoking} 
                  onTintColor='#512DA8'
                  onValueChange={(value) => 
                    this.setState({
                      smoking: value
                    })}>

          </Switch>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Date and Time</Text>
          <DateTimePicker
              testID="dateTimePicker"
              value={this.state.date}
              mode='datetime'
              is24Hour={true}
              display="default"
              onChange={(date) => {this.setState({date: date})}}
             />
        </View>
        <View style={styles.formRow}>
          <Button title='Reserve' 
                  color='black' 
                  onPress={() => this.handleReservation()}
                  accessibilityLabel='Learn more about this purple button' />
        </View>
        <Modal animationType={"slide"} transparent = {false}
              visible={this.state.showModal}
              onDismiss={() => this.toggleModal() }
              onRequestClose={() => this.toggleModal() }>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Your Reservation</Text>
            <Text style={styles.modalText}>Number of Guests: {this.state.guests}</Text>
            <Text style={styles.modalText}>Smoking?: {this.state.smoking ? 'Yes' : 'No'}</Text>
            <Text style={styles.modalText}>Date and Time: {this.state.date}</Text>
            <Button 
                onPress={() =>{this.toggleModal(); this.resetForm();}}
                color="black"
                title="Close" 
                />
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 20
  },
  formLabel: {
    fontSize: 18,
    flex: 2
  },
  formItem: {
    flex: 1
  },
  modal: {
    justifyContent: 'center',
    margin: 20,
    borderColor: 'transparent'
  },
  modalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      backgroundColor: 'black',
      textAlign: 'center',
      color: 'white',
      marginBottom: 20
  },
  modalText: {
      fontSize: 18,
      margin: 10
  }
});

export default Reservation;