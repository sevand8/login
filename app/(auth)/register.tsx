import { Link } from 'expo-router';
import React, { useState } from 'react';
import {ActivityIndicator,KeyboardAvoidingView,Platform,Text,TextInput,TouchableOpacity,View,} from 'react-native';
import { useAuth } from '../../lib/modules/auth/AuthProvider';
import "@/global.css";

export default function RegisterScreen() {
  const { signUpWithEmail, loading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    if (!email.trim() || !password) {
      alert('Completa todos los campos');
      return;
    }

    if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      await signUpWithEmail(email.trim(), password);
      alert('¡Registro exitoso! Revisa tu correo si es necesario.');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-gray-100 justify-center px-6"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View className="bg-white rounded-2xl p-6 shadow-md">
        
        <Text className="text-2xl font-bold text-black mb-2">
          Crear Cuenta
        </Text>

        <Text className="text-black mb-6">
          Regístrate para comenzar
        </Text>

        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#6b7280"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          className="border border-gray-300 rounded-lg px-4 py-3 mb-4 bg-gray-50 text-black"
        />

        <View className="relative mb-6">
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#6b7280"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 text-black"
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3"
          >
            <Text className="text-black font-medium">
              {showPassword ? 'Ocultar' : 'Ver'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleRegister}
          disabled={loading}
          className={`rounded-lg py-4 items-center ${
            loading ? 'bg-gray-300' : 'bg-gray-200'
          }`}
        >
          {loading ? (
            <ActivityIndicator color="#000" />
          ) : (
            <Text className="text-black font-semibold text-base">
              Registrarse
            </Text>
          )}
        </TouchableOpacity>

        <Link
          href="/(auth)/login"
          className="mt-6 text-center text-black font-medium"
        >
          ¿Ya tienes cuenta? Inicia sesión
        </Link>

      </View>
    </KeyboardAvoidingView>
  );
}
