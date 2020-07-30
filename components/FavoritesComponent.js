import React, { Component } from 'react';
import { FlatList, View, Text, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";
import { deleteFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    favorites: state.favorites
  }
};

const mapDispatchToProps = dispatch => ({
  deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId))
});

class Favorites extends Component {

  render() {
    // extract out the navigation
    const { navigate } = this.props.navigation; 

    const renderMenuItem = ({ item, index }) => {

      const rightButton = [
        {
          text: 'Delete', 
          type: 'delete',
          onPress: () => {
            Alert.alert(
              'Delete Favorite?',
              'Are you sure you wish to delete the favorite dish ' + item.name + '?',
              [
                { 
                  text: 'Cancel', 
                  onPress: () => console.log(item.name + 'Not Deleted'),
                  style: ' cancel'
                },
                {
                  text: 'OK',
                  onPress: () => this.props.deleteFavorite(item.id)
                }
              ],
              { cancelable: false }
            );
          }
        }
      ];

      return (
        <ListItem
            key={index}
            title={item.name}
            subtitle={item.description}
            hideChevron={true}
            onPress={() => navigate('Dishdetail', { dishId: item.id })}
            leftAvatar={{ source: {uri: baseUrl + item.image}}}
            />
      );
    }

    if (this.props.dishes.isLoading) {
      return (
        <Loading />
      );
    }
    else if (this.props.dishes.errMess) {
      return (
        <View>
          <Text>{this.props.dishes.errMess}</Text>
        </View>
      )
    }
    else {
      return (
        <FlatList data={this.props.dishes.dishes.filter(
                    dish => this.props.favorites.favorites.some(element => element === dish.id))}
                  renderItem={renderMenuItem}
                  keyExtractor={item => item.id.toString()} />
        
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);