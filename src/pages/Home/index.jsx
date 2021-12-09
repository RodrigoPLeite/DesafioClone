import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { styles } from "./styles";
import IonIcon from "react-native-vector-icons/Ionicons";
import gato from "../../../assets/gatofeio.png";
import gatoFofinho from "../../../assets/gatoFofinho.jpg";
import gatoPulando from "../../../assets/gatoPulando.jpg";
import gatoBranco from "../../../assets/gatoBranco.jpg";
import gatoEscondido from "../../../assets/gatoEscondido.jpg";
import malvadao from "../../../assets/malvadao.jpg";

export default function Home() {
  return (
    <View style={styles.container1}>
    <View style={styles.container}>
        <Text style={styles.text}>WhatsApp</Text>
        <View style={styles.iconesDireita}>
          <IonIcon name="search" size={25} color="gray"/>
          <IonIcon name="ellipsis-vertical" size={25} color="gray"/>
        </View>
      <View style={styles.text2}>
        <IonIcon name="camera" size={25} color="gray"/>
        <Text style={styles.corVerdeConversa}>CONVERSAS</Text>
        <Text style={styles.bolaConversa}></Text>
        <Text style={styles.textConversa}>3</Text>
        <Text style={styles.linhaConversa}>  __________________</Text>
        <Text style={styles.text2}>STATUS</Text>
        <Text style={styles.text2}>CHAMADAS</Text>
      </View>
        <View style={styles.corpoApp}>
          <View>
            <Image source={gato} style={styles.img} />
          </View>
          <View>
            <Text style={styles.text3}>Gato Feio</Text>
            <Text style={styles.text4}>Eu não sou feio!!!😡😡😡</Text>
            <Text style={styles.corVerde}>11:02</Text>
            <Text style={styles.bola}></Text>
            <Text style={styles.text6}>3</Text>
          </View>          
        </View>
        <View style={styles.corpoApp}>
          <View>
            <Image source={gatoFofinho} style={styles.img} />
          </View>
          <View>
            <Text style={styles.text3}>Gato Fofinho ❤️</Text>
            <Text style={styles.text4}>Miau</Text>
            <Text style={styles.corVerde}>08:02</Text>
            <Text style={styles.bola}></Text>
            <Text style={styles.text6}>1</Text>
          </View>          
        </View>
        <View style={styles.corpoApp}>
          <View>
            <Image source={malvadao} style={styles.img} />
          </View>
          <View>
            <Text style={styles.text3}>Malvadão 😉🍻</Text>
            <Text style={styles.text4}>E ai gatinha?? Só te falo uma c...</Text>
            <Text style={styles.corVerde}>07:01</Text>
            <Text style={styles.bola}></Text>
            <Text style={styles.text6}>9</Text>
          </View>          
        </View>
        <View style={styles.corpoApp}>
          <View>
            <Image source={gatoEscondido} style={styles.img} />
          </View>
          <View>
            <Text style={styles.text3}>Nutella</Text>
            <Text style={styles.text4}>
              <IonIcon name="checkmark-done-outline" size={20} color="#4ba5f7"/>
              Cadê meus brinquedos??
            </Text>
            <Text style={styles.text5}>06:34</Text>
          </View>          
        </View>
        <View style={styles.corpoApp}>
          <View>
            <Image source={gatoPulando} style={styles.img} />
          </View>
          <View>
            <Text style={styles.text3}>Gato Nervoso 🎸🎸🎸</Text>
            <Text style={styles.text4}><IonIcon name="checkmark-done-outline" size={20} color="#4ba5f7"/>Cadê minha ração, Márcia??</Text>
            <Text style={styles.text5} >05:45</Text>
          </View>          
        </View>
        <View style={styles.corpoApp}>
          <View>
            <Image source={gatoBranco} style={styles.img} />
          </View>
          <View>
            <Text style={styles.text3}>Gatinho 🎮</Text>
            <Text style={styles.text4}>Não sei não</Text>
            <Text style={styles.text5}>05:05</Text>
          </View>          
        </View>
    </View>
    </View>
  );
}