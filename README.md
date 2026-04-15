# DSIA-7

sudo apt update
sudo apt install -y nodejs npm
npm install --global expo-cli

# criar projeto
npx create-expo-app ex1 --template blank@sdk-54

# instalar o firebase
npm install firebase

### Instalar o React Navigation
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context

# instalar pacote drawer
npm install @react-navigation/drawer

# executar projeto
npx expo start --tunnel

npm install -g @expo/ngrok  