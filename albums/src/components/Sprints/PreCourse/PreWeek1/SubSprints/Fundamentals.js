import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';

class Fundamentals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quizData: {
        "quiz" : {
          "quiz1" : {
            "question1" : {
              "correctoption" : "option1",
              "options" : {
                "option1" : "Boolean",
                "option2" : "String",
                "option3" : "String and Boolean",
                "option4" : "Number"
              },
              "question" : "True is a "
            },
            "question2" : {
              "correctoption" : "option3",
              "options" : {
                  "option1" : "Boolean",
                  "option2" : "String",
                  "option3" : "Number",
                  "option4" : "String and Number"
                },
              "question" : "6 is a "
            },
            "question3" : {
              "correctoption" : "option2",
              "options" : {
                  "option1" : "18",
                  "option2" : "'99' (data type is a String)",
                  "option3" : "99 (data type is a Number)",
                  "option4" : "The console will return an error message because JavaScript doesn't support type coercion"
                },
              "question" : "console.log('9' + 9) will display ____ on the console"
            },
            "question4" : {
              "correctoption" : "option1",
              "options" : {
                  "option1" : "1",
                  "option2" : "2",
                  "option3" : "3",
                  "option4" : "4"
                },
              "question" : "10 % 3 ="
            },
            "question5" : {
              "correctoption" : "option2",
              "options" : {
                  "option1" : "expression",
                  "option2" : "declaration",
                  "option3" : "expression and declaration",
                  "option4" : "No idea. Coding is hard."
                },
              "question" : "function foo() { return 'bar' } is a function _____"
            }
          }
        }      
      }
    }
  }

  render() {
    const { headerConetentStyle, headerTextStyle, container, textContainer } = Styles;
    const topic = 'Fundamentals and Functions'
    const introduction = 'The Term type refers to the different kind of values we might use in our programs';
    const { thumbnailStyle }=Styles
    return (
      <Card>
        <CardSection>
          <View style = {headerConetentStyle}>
            <Text style = {headerTextStyle}>
              {topic}{"\n"}
            </Text>
          </View>				
        </CardSection>

        <CardSection>
          <Text style={{fontWeight:'bold'}}>
          Types:{"\n"}
          <Text style={{fontWeight:'normal'}}>
            {introduction}{"\n"}{"\n"}
            <Text style={{fontWeight:'bold'}}>
              Javascript Data Types:{"\n"}
              <Text style={{fontWeight:'normal'}}>
              JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript:{"\n"}
              <Text style={{ color:'purple'}}>
                1.Primitive data type{"\n"}
                2.Non-primitive (reference) data type
              </Text>
              </Text>
            </Text>
          </Text>
          </Text>
        </CardSection>
        <CardSection style={{flexDirection: 'column', flex: 1}}>
          <Image 
              style= {thumbnailStyle}
              source={require('../../../../../assets/80.jpg')}/>
        </CardSection>

        <CardSection style = { container }>
        
          <Text style={{ fontWeight: 'bold', color: 'purple' }}>
            Here are some exampels :
          {"\n"}{"\n"}
              <Text style={{fontWeight:'bold',color:'black'}}>Number:</Text>
              <Text style={{fontWeight:'normal',color:'black'}}>1, 2, 3</Text> {"\n"}
              <Text style={{fontWeight:'bold',color:'black'}}> String:</Text>
              <Text style={{fontWeight:'normal',color:'black'}}>"Hello World"</Text>  {"\n"}
              <Text style={{fontWeight:'bold',color:'black'}}> Boolean:</Text>
              <Text style={{fontWeight:'normal',color:'black'}}>true, false</Text> {"\n"}
              <Text style={{fontWeight:'bold',color:'black'}}> Null:</Text>
              <Text style={{fontWeight:'normal',color:'black'}}>var helloWorld = null;</Text> {"\n"}
             <Text style={{fontWeight:'bold',color:'black'}}> Undefined:</Text>
             <Text style={{fontWeight:'normal',color:'black'}}>var goodbyeWorld = undefined;</Text> {"\n"}
              <Text style={{fontWeight:'bold',color:'black'}}> Symbol: </Text>
              <Text style={{fontWeight:'normal',color:'black'}}>var symbol = Symbol();</Text>{"\n"}
          </Text>
         </CardSection>

        <CardSection style = { container }>
          <Text style = { textContainer }>
            <Text style = {{ fontWeight: 'bold', color: 'purple' }}>
            There are two ways of writing functions.
            </Text>
            {"\n"}{"\n"}
            Function declaration: 
            {"\n"}
            {`function helloWorld() {
              return "hello world"
            }`}
            {"\n"}
            Function expression: 
            {"\n"}
            {`var helloWorld = function() {
              return "hello world"
            }`}
          </Text>
        </CardSection>
        <Playquiz quizData = { this.state.quizData }/>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Booleans, Comparisons, and Operators')}>
            Next
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Home')}>
            Home
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const Styles = StyleSheet.create({
  container:{
    flexDirection: 'row'
  },
  textContainer:{
    flex: 1,
     flexWrap: 'wrap'
    },
  headerConetentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 30
  },
  thumbnailStyle: {
    height: 150,
    width: 350
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  }
});

export default Fundamentals;