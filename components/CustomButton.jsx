import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
        className={`bg-secondary rounded-xl justify-center items-center min-h-[50px] px-5 ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        onPress={handlePress}
        activeOpacity={0.7}
        disabled={isLoading}
    >
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton