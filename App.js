import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'; 
import { Header } from 'react-native-elements';
import db from "./localdb";

console.log(db["camera"].chunks)

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {text:'', chunks:[]}
  }

render(){
  return (
    <View style={styles.container}>
  <Header 
    backgroundColor = {"#9C8210"}
    centerComponent = {{text:"Monkey Chunky",
  style:{color:"#FFFFFF", fontSize:20}
  }}
    />

<Image style = {styles.Imageicon}
  source = {{
    uri:"https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png"
  }}
/>

  <TextInput 
 style = {styles.inputbox}
 onChangeText={(text)=>{
   this.setState({text:text})
 }}
 value={this.state.text}
  />
  
<TouchableOpacity 
  style={styles.goButton}
  onPress={()=>{
    this.setState({
     chunks:db[this.state.text].chunks
    })
  }}>

  <Text 
  style={styles.buttonText}>GO
  </Text>
  

      </TouchableOpacity>

     <View>
 {this.state.chunks.map(item=>{
   return(
     <TouchableOpacity style={style.chunkButton}>
   <Text style={styles.displayText}>
{item}
   </Text>
 </TouchableOpacity>
   )
 })}

   </View>
    </View>
  );
}
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B8B8B8',
  },
   inputbox: { marginTop: 200, 
   width: '80%',
   alignSelf: 'center',
   height: 40,
   textAlign: 'center', 
   borderWidth: 4,
   outline: 'none',
   },   
  
  goButton:{
   width: '50%',
   height: 55,
   alignSelf: 'center', 
   padding: 10,
   margin: 10,
 },

 Imageicon :{
    width: 150,
    height: 150,
   marginLeft: 95,
},
   
   displayText: { 
     textAlign: 'center', fontSize: 30, 
    },

    
chunkButton:{ 
width: '60%',
height: 50,
justifyContent: 'center',
alignItems: 'center',
alignSelf: 'center',
borderRadius: 10,
margin: 5,
backgroundColor: 'red'},

buttonText: {
textAlign: 'center',
fontSize: 30,
fontWeight: 'bold',
},
});
