import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';


export default function TabsLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="chats">
        <Label>Home</Label>
        <Icon sf="message.fill" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Icon sf="gear" drawable="custom_settings_drawable" />
        <Label>Settings</Label>
      </NativeTabs.Trigger>

     <NativeTabs.Trigger name="search">
        <Icon sf="magnifyingglass" drawable="custom_search_drawable" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}