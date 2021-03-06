import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

class WebDev extends Component {
  state = {
    quizData: {
      "quiz" : {
        "quiz1" : {
          "question1" : {
            "correctoption" : "option3",
            "options" : {
              "option1" : "Horizontal Text Machine Language",
              "option2" : "Hulk Thor Magneto Loki",
              "option3" : "Hypertext Markup Language",
              "option4" : "Hal taqulu Masalama La"
            },
            "question" : "What does HTML stand for?"
          },
          "question2" : {
            "correctoption" : "option4",
            "options" : {
                "option1" : "deliver butter",
                "option2" : "perform unit test",
                "option3" : "links HTML with Javascript code",
                "option4" : "adding styles to the website"
              },
            "question" : "What is the purpose of CSS?"
          },
          "question3" : {
            "correctoption" : "option1",
            "options" : {
                "option1" : "setInterval(myFunction(){}, 3000);",
                "option2" : "setInterval(myFunction(){}, 3);",
                "option3" : "setTimeout(myFunction(){}, 3000);",
                "option4" : "setTimeout(myFunction(){}, 3);",
              },
            "question" : "Which function performs myFunction every 3 seconds?"
          },
          "question4" : {
            "correctoption" : "option1",
            "options" : {
                "option1" : "<script src=\"lib/jquery.js\"></script>",
                "option2" : "<script src=\"src/index.js\"></script>"
              },
            "question" : "Which file should be loaded first in .html file? Assume index.js uses jQuery?"
          }
        }
      }      
    }
  }

  render() {
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle, boldText, container, thumbnailStyle1 } = Styles;
    const topic = 'Web Development';
    const introduction = 'All websites can be developed by HTML, Javascript, and CSS. Frameworks are introduced to make the development easier.';
    const body = [
      [
        'There are three foundations in Web Development', 
        'HTML: defines the content and structure of a website. Think of it as the frame of a house, it decides on having how many windows, is there a living room?\n\n\
Javascript: provides the interaction of the webpage. It tells the HTML components to perform certain actions. A simple example is when you click a button, then a pop up alert will be shown. \
In the house analogy, Javascript is the connection between the light switch to the light, \
and air conditioner controller to the air conditioner.    \n\n\
CSS: decides how the website is going to look. It doesn\'t change the content, but it changes how the content is displayed. For the car example, \
CSS decides the whether you want the car to be painted blue, how big the car windows are. \n'
      ],[
        'jQuery Framework',
        'Frameworks like jQuery are powerful tools that build on HTML, CSS, and Javascript. \
Programmers use jQuery to simplify the process of designing complex websites.\n\
jQuery builds on Javascript, but it has its own unique syntax.'
      ],[
        'How to import jQuery?',
        'Like any external library, programmers would need to import the library in the HTML page between the <head></head> tags. \n \
Here are the few ways you can import jQuery:\n\
1. Download jQuery to your local folder (I named it lib in this case) and import it like so \n<script src="lib/jquery.js"></script>\n\
2. Or you can use a jQuery library someone else uploaded online \n<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">\n\n\
They both import jQuery, but from different places. Option 1 is like download a movie and then watch it. Option 2 is like streaming a movie online\
'
      ],[
        'Common jQuery functions',
        'find(): Selects elements based on the provided selector string\n\
hide(): Hides an element if it was visible\n\
show(): Shows an element if it was hidden\n\
html(): Gets or sets an inner HTML of an element\n\
append() Injects an element into the DOM after the selected element\n\
prepend() Injects an element into the DOM before the selected element\n\
on(): Attaches an event listener to an element\n\
off() Detaches an event listener from an element\n\
css(): Gets or sets the style attribute value of an element\n\
attr() Gets or sets any attribute of an element\n\
val(): Gets or sets the value attribute of an element\n\
text(): Gets the combined text of an element and its children\n\
each(): Iterates over a set of matched elements'
      ],[
        'Advanced: Other major Libraries/Frameworks',
        'React: Structure the entire website as a combinations of different components. It\'s like building each room of the house on its own, and put them together at the end.\n\n\
Backbone: This framework separate the logic in three different layers: The data logic, what\'s being displayed on the page, and how data is changed. If you are curious, search about the concept of MVC: Model View Controller \n\n\
Angular: Angular offers another different design from React and Backbone. It works particularly well in formed and document based webapplications\n\n'
      ]
    ]
    const end = 'This is your first immersion to become a fullstack developer. If your experience was unpleasant, knowing most of technologies\
you struggle to understand is going to get easier. It takes time to pick up a skill from zero. And if you are already having fun, congratulations, you\
might just found a hobby that also pays salary!';
    return (
      
      <Card>
        <CardSection>
          <View style = {headerConetentStyle}>
            <Text style = {headerTextStyle}>
              {topic}
            </Text>
          </View>				
        </CardSection>

        <CardSection>
          <Text>
          {introduction}{"\n"}
          </Text>
        </CardSection>

        <CardSection>
          <Text style={ boldText }>
            {body[0][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[0][1]}
          </Text>
        </CardSection>
        <CardSection style={container}>
          <Image 
            style= {thumbnailStyle1}
            source={require('../../../../../assets/webDev0.jpg')}/>
        </CardSection>

        <CardSection>
          <Text style={ boldText }>
            {body[1][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[1][1]}
          </Text>
        </CardSection>

        <CardSection>
          <Text style={ boldText }>
            {body[2][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[2][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[3][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[3][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[4][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[4][1]}
          </Text>
        </CardSection>
        {/* <CardSection>
          <Text style={ boldText }>
            {body[5][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[5][1]}
          </Text>
        </CardSection> */}
        <CardSection>
          <Text style={ boldText }>
            Conclusion:
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {end}{"\n"}
          </Text>
        </CardSection>
        <CardSection style={container}>
          <Image 
            style= {thumbnailStyle1}
            source={require('../../../../../assets/webDev1.png')}/>
        </CardSection>

        <Playquiz quizData = { this.state.quizData }/>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Testing')}>
            Previous
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
  headerConetentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 30
  },
  thumbnailStyle: {
    height: 46,
    width: 46
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  container:{
    flexDirection: 'row'
  },
  thumbnailStyle1:{
    height: 250 ,
    width: 355
  }
});
export default WebDev;