import { Image, ScrollView,Text, View } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignUp = () => {

    const [form,setForm] = useState({
        name: "",
        email: "",
        password: "",
    })

    const onSignUpPress = () => { 
        console.log("Form Data: ", form);
    }


    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Image source={images.signUpCar} alt="sign-up" className="z-0 w-full h-[250px]" />
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
                        Create Your Account
                        </Text>
                </View>

                <View className="p-5">
                    <InputField
                        label={"Name"}
                        placeholder={"Enter your name"}
                        icon={icons.person}
                        value={form.name}
                        onChangeText={(value) =>
                            setForm({
                                ...form,
                                name: value
                            })}   
                    />
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

                <CustomButton title="Sign Up" onPress={onSignUpPress} />
                
                {/* OAuth */}
                <OAuth/>

                <Link href="/sign-in" className="text-lg text-center text-general-200 mt-10">
                    <Text>Already have an account?{" "}</Text>
                   <Text className="text-primary-500">Log In</Text> 
                </Link>
            </View>
        </ScrollView>
    );
};

export default SignUp;
