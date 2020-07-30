import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, Modal, StyleSheet, Button } from 'react-native';
import { Card, Icon, Rating, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from "../shared/baseUrl";
import { postFavorite, postComment } from '../redux/ActionCreators';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    favorites: state.favorites
  }
};

const mapDispatchToProps = dispatch => ({
  postFavorite: (dishId) => dispatch(postFavorite(dishId)),
  postComment: (id, dishId, author, comment, rating, date) => dispatch(postComment(id, dishId, author, comment, rating, date))
});

function RenderDish(props) {
  const dish = props.dish;

  if (dish != null) {
    return (
      <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
        <Card featuredTitle={dish.name}
              image={{ uri: baseUrl + dish.image }}>
          <Text style={{margin: 10}}> {dish.description} </Text>
          <Icon raised
                reverse
                name={ props.favorite ? 'heart' : 'heart-o'}
                type="font-awesome"
                color='#fc9d9d'
                size={20}
                onPress={() => 
                  props.favorite ? console.log('Already favorite') : props.addFavorite()} 
                />
          <Icon raised
                reverse
                name='pencil'
                type='font-awesome'
                color='black'
                size={20}
                onPress={() =>{
                  props.toggleModal(); 
                }} />
        </Card>
      </Animatable.View>
    );
  }
  else {
    return (
      <View></View>
    );
  }
}

function RenderComments(props) {
  const comments = props.comments;

  const renderCommentItem = ({ item, index }) => {
    return (
      <View key={index} style={{ margin: 10 }}>
        <Text style={{ fontSize: 14 }}>{item.comment}</Text>
        <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
        <Text style={{ fontSize: 12 }}>{'-- ' + item.author + ', ' + item.date}</Text>
      </View>
    );
  }

  return (
    <Animatable.View animation="fadeInUp" duration={2000} delay={1000}>
      <Card title="Comments">
        <FlatList data={comments}
                  renderItem={renderCommentItem}
                  keyExtractor={item => item.id.toString()} />
      </Card>
    </Animatable.View>
  );
}

class Dishdetail extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      author: '',
      comment: '',
      rating: 5,
      showModal: true
    }
  }

  // add favorite feature
  markFavorite(dishId) {
    this.props.postFavorite(dishId);
  }

  // add comments feature
  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  handleComment() {
    console.log(JSON.stringify(this.state));
    const id = this.props.comments.comments.length;
    const date = new Date().toISOString();
    this.props.postComment(id, this.props.route.params.dishId, this.state.author, this.state.comment, this.state.rating, date);
    this.toggleModal();
  }

  resetForm() {
    this.setState({
        author: '',
        comment: '',
        rating: 5,
        showModal: false
    });
  }

  render() {
    const dishId = this.props.route.params.dishId;  

    return (
      <ScrollView>
        <RenderDish dish={this.props.dishes.dishes[+dishId]}
                    favorite={this.props.favorites.favorites.some(
                                element => element === dishId)} 
                    addFavorite={() => this.markFavorite(dishId)}
                    toggleModal={() => this.toggleModal()}
                    />
        <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)} />

        <Modal animationType={"slide"} 
              transparent = {false}
              visible={this.state.showModal}
              onDismiss={() => this.toggleModal() }
              onRequestClose={() => this.toggleModal() }>
          <View style={styles.modal}>
            <View style={styles.formRow}>
              <Rating 
                    showRating 
                    onFinishRating={rating => this.setState({ rating: rating })} />
            </View>
            <View style={styles.formRow}>
              <Input 
                  placeholder='Author'
                  leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                  onChangeText={text => this.setState({ author: text })}
                  value={this.state.author} />
            </View>
            <View style={styles.formRow}>
              <Input 
                    placeholder='Comment'
                    leftIcon={{ type: 'font-awesome', name: 'comment-o' }}
                    onChangeText={text => this.setState({ comment: text })}
                    value={this.state.comment} />
            </View>
            <View style={styles.formRow}>
              <Button 
                  title='SUBMIT' 
                  color='black' 
                  onPress={() => { this.handleComment(); this.resetForm(); } }
                  accessibilityLabel='Learn more about this black button' />
            </View>
            <View style={styles.formRow}>
              <Button 
                  onPress={() =>{ this.toggleModal(); this.resetForm(); }}
                  color="darkgray"
                  title="CANCEL" 
                  />
            </View>
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
    borderColor: 'transparent',
    backgroundColor: 'white'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dishdetail);