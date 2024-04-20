import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView 
        contentContainerStyle={{
          flexGrow: 1
        }}
      >
        <View className="w-full h-full justify-center items-center px-5">
          <Image
            source={images.logo}
            className="w-[130px] h-[45px]"
            resizeMode='contain'
          />

          <Text className="text-2xl text-white text-semibold font-psemibold">
            Log in to {' '}
            <Text className="text-secondary-200">
              Aora
            </Text>
          </Text>

          <FormField/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn