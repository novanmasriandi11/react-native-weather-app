import { ImageBackground, SafeAreaView, Text, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import highWeather from './assets/highWeather.png'
import lowWeather from './assets/lowWeather.png'
import { customStyle } from "./components/customStyle";
import { InputField } from "./components/InputField";
import { ButtonConvert } from "./components/ButtonConvert";
import { DisplayText } from "./components/DisplayText";
import { convertToFahrenheit, convertToCelcius, getOppositeUnit, convertTemperature, isCold } from './utils/temperature';
import { useEffect, useState } from "react";
import {DEFAULT_TEMPERATURE, DEFAULT_UNIT, UNITS} from './utils/constant';

export default function App() {
  const [input, setInput] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const [currentBackground, setCurrentBackground] = useState(highWeather);

  useEffect(()=>{
    const isColdWeather = isCold(currentUnit, input);
    setCurrentBackground(isColdWeather ? lowWeather : highWeather)
  },[input,currentUnit])

  return(
      <ImageBackground style={customStyle.background} source={currentBackground}>
        <SafeAreaProvider>
            <SafeAreaView style={customStyle.root}>
              <View style={customStyle.workspace}>
                <DisplayText unit ={getOppositeUnit(currentUnit)} temperature={convertTemperature(currentUnit, input).toFixed(1)}/>
                <InputField onChange={setInput} unit={currentUnit}/>
                <ButtonConvert onPress={()=>setCurrentUnit(getOppositeUnit(currentUnit))}/>
              </View>
            </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground> 
  )
}
