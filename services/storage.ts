import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import { Platform } from 'react-native';

export interface storageI{
    key: string,
    id: string, 
    data: any,
    expires: boolean
}

const storage = new Storage({
    size: 1000,
    storageBackend: Platform.OS === 'ios' || Platform.OS === 'android' ? AsyncStorage : window.localStorage, // for web: window.localStorage
    defaultExpires: null,
    enableCache: true,
});

export default storage;