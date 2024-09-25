
import { icons } from '@/constants'
import { router } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const RideLayout = ({children}:{children:React.ReactNode}) => {
  return (
      <View className='flex-1 bg-white'>
          <View className='flex flex-col h-screen bg-blue-500'>
              <View className='flex flex-row absolute z-10 top-16 items-center justify-start px-5'>
                  <TouchableOpacity onPress={()=> router.back()}>
                      <View className='w-10 h-10 bg-white items-center justify-center'>
                          <Image
                              source={icons.backArrow}
                              resizeMode='contain'
                              className='w-6 h-6'
                          />
                      </View>
                  </TouchableOpacity>
              </View>
          </View>
    </View>
  )
}

export default RideLayout
