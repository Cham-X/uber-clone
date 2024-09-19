import { ButtonProps } from '@/types/type'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native'

const getByVariantStyle = (variant: ButtonProps['bgVariant']) => {
   switch (variant) {
      case 'secondary':
         return 'bg-gray-500 '
      case 'danger':
         return 'bg-red-500'
      case 'success':
         return 'bg-green-500'
      case 'outline':
         return 'bg-transparent border border-neutral-500 border-[0.5px]'
      default:
         return 'bg-[#0286FF]'
   }
}

const getTextVariantStyle = (variant: ButtonProps['textVariant']) => {
   switch (variant) {
      case 'primary':
         return 'text-black'
      case 'secondary':
         return 'text-gray-100'
      case 'danger':
         return 'text-red-100'
      case 'success':
         return 'text-green-100'
      default:
         return 'text-white'
   }
}

const CustomButton = ({
   onPress,
   title,
   bgVariant = 'primary',
   textVariant = 'default',
   IconLeft,
   IconRight,
   className,
   ...props
}: ButtonProps) => (
   <TouchableOpacity
      onPress={onPress}
        className={`flex flex-row  justify-center items-center w-full p-3 capitalize rounded-full shadow-md shadow-neutral-400 ${getByVariantStyle(bgVariant)} ${className}`}
        {...props}
   >
      {IconLeft && <IconLeft />}
      <Text
         className={` text-lg font-bold ${getTextVariantStyle(textVariant)}`}
      >
         {title}
      </Text>
      {IconRight && <IconRight />}
   </TouchableOpacity>
)

export default CustomButton
