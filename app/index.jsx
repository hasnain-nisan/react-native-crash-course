import { Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView 
        contentContainerStyle={{
          flexGrow: 1
        }}
      >
        <View className="w-full min-h-[99vh] justify-center items-center px-5">
          <Image
            source={images.logo}
            className="w-[130px] h-[85px]"
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode='contain'
          />

          <View>
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with 
              {' '}
              <Text className="text-secondary-200">
                Aora
              </Text>
            </Text>
            <Image
              source={images.path}
              className="w-[130px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode='contain'
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-8 text-center">
            Where creativity meets innovation: Embark on a journey off limitless exploration with {' '}
            <Text className="text-secondary-200">
              Aora
            </Text>
          </Text>

          <CustomButton
            title="Continue with email"
            handlePress={() => router.push('/signIn')}
            containerStyles="w-full mt-8"
          />

        </View>
      </ScrollView>
      <StatusBar 
        backgroundColor='#161622' 
        style='light'
      />
    </SafeAreaView>
  );
}
