import UserList from '@/components/UserList';
import { useSupabase } from '@/providers/SupabaseProvider';
import { User } from '@/types';
import { useUser } from '@clerk/clerk-expo';
import { useMutation } from '@tanstack/react-query';
import { View } from 'react-native';

export default function NewChat() {
  const supabase = useSupabase();
  const {user} = useUser();
  
  const handleUserPress = (user: User) => {
    console.log('User clicked: ', user.first_name);
  };

  return (
    <View className='bg-white flex-1'>
      <UserList onPress={handleUserPress} />
    </View>
  );
}
