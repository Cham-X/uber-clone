import { Image, ScrollView,Text, View } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link, useRouter } from "expo-router";
import OAuth from "@/components/OAuth";

const SignIn = () => {

    const router = useRouter()

    const [form,setForm] = useState({
        email: "",
        password: "",
    })

    const onSignInPress = () => { 
        // console.log("Form Data: ", form);
        router.replace("/(root)/(tabs)/home")
    }


    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Image source={images.signUpCar} alt="sign-up" className="z-0 w-full h-[250px]" />
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
                        Welcome 👋
                        </Text>
                </View>

                <View className="p-5">
                    <InputField
                        label={"Email"}
                        placeholder={"Enter your Email"}
                        icon={icons.email}
                        value={form.email}
                        onChangeText={(value) =>
                            setForm({
                                ...form,
                                email: value
                            })}   
                    />
                    <InputField
                        label={"Password"}
                        placeholder={"Enter your Password"}
                        icon={icons.lock}
                        value={form.password}
                        onChangeText={(value) =>
                            setForm({
                                ...form,
                                password: value
                            })}   
                    />
                </View>

                <CustomButton title="Sign Up" onPress={onSignInPress} />
                
                {/* OAuth */}
                <OAuth />

                <Link
                    href="/sign-up"
                    // href="/(root)/(tabs)/profile.tsx"
                    className="text-lg text-center text-general-200 mt-10">
                    <Text>Do not have an account?{" "}</Text>
                   <Text className="text-primary-500">SignUp</Text> 
                </Link>
            </View>
        </ScrollView>
    );
};

export default SignIn;
