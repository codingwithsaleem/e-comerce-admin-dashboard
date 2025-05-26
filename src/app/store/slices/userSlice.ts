
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  role: string;
  joinDate: string;
  avatarUrl?: string;
  notifications: {
    email: boolean;
    sms: boolean;
    lowStock: boolean;
    newOrders: boolean;
  };
}

interface UserState {
  profile: UserProfile;
}

const initialState: UserState = {
  profile: {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@admin.com',
    phone: '+1 (555) 123-4567',
    bio: 'Experienced e-commerce administrator with over 5 years of experience managing online retail operations.',
    location: 'New York, NY',
    role: 'Administrator',
    joinDate: '2019-03-15',
    avatarUrl: '',
    notifications: {
      email: true,
      sms: false,
      lowStock: true,
      newOrders: true,
    }
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<Partial<UserProfile>>) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    updateNotifications: (state, action: PayloadAction<Partial<UserProfile['notifications']>>) => {
      state.profile.notifications = { ...state.profile.notifications, ...action.payload };
    },
    updateAvatar: (state, action: PayloadAction<string>) => {
      state.profile.avatarUrl = action.payload;
    },
  },
});

export const { updateProfile, updateNotifications, updateAvatar } = userSlice.actions;
export default userSlice.reducer;
