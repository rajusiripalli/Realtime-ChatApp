import { View, Text, Button } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';
import { supabase } from '@/supabase';

export default function HomeScreen() {
  const { signOut } = useAuth();

  const testInsert = async () => {
    const {data, error} = await supabase
      .from('Test')
      .insert([{ test: 'Test Insert name 2' }]);

      console.log(error);
  }

  const testFetch = async () => {
    const {data, error} = await supabase
      .from('Test')
      .select('*');

      console.log(JSON.stringify(data, null, 2));
  }

  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-3xl'>Settings</Text>

      <Button onPress={() => signOut()} title='Sign out' />
      <Button onPress={testInsert} title='Test Insert' />
      <Button onPress={testFetch} title='Test Fetch' />
    </View>
  );
}
