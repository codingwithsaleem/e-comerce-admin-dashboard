'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/app/hooks/use-toasts';
import { Camera, Save, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { updateProfile, updateNotifications, updateAvatar } from '@/app/store/slices/userSlice';
import { ImageUpload } from '@/components/ui/image-upload';

const Profile = () => {
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector(state => state.user.profile);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userProfile);
  const [showImageUpload, setShowImageUpload] = useState(false);

  // Default avatar from Unsplash
  const defaultAvatar = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face";

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNotificationChange = (field: string, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    // Update profile in Redux store
    dispatch(updateProfile(formData));
    dispatch(updateNotifications(formData.notifications));
    
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset form data to current profile state
    setFormData(userProfile);
    setIsEditing(false);
    setShowImageUpload(false);
  };

  const handleAvatarUpload = (value: string | string[]) => {
    const imageUrl = Array.isArray(value) ? value[0] : value;
    dispatch(updateAvatar(imageUrl));
    setFormData(prev => ({ ...prev, avatarUrl: imageUrl }));
    setShowImageUpload(false);
    toast({
      title: "Avatar Updated",
      description: "Your profile picture has been updated.",
    });
  };

  const displayAvatar = formData.avatarUrl || userProfile.avatarUrl || defaultAvatar;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your account settings and preferences</p>
        </div>
        <div className="flex gap-2">
          {isEditing && (
            <Button onClick={handleCancel} variant="outline">
              Cancel
            </Button>
          )}
          <Button
            onClick={() => setIsEditing(!isEditing)}
            variant={isEditing ? "outline" : "default"}
          >
            {isEditing ? "Save" : "Edit Profile"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <div className="relative mx-auto w-24 h-24 mb-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={displayAvatar} alt={formData.name} />
                <AvatarFallback className="text-xl">
                  {formData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute -bottom-2 -right-2 rounded-full w-8 h-8"
                  onClick={() => setShowImageUpload(!showImageUpload)}
                >
                  <Camera className="h-4 w-4" />
                </Button>
              )}
            </div>
            <CardTitle className="dark:text-white">{formData.name}</CardTitle>
            <CardDescription className="flex items-center justify-center gap-2">
              <Badge variant="secondary">{formData.role}</Badge>
            </CardDescription>
            
            {showImageUpload && isEditing && (
              <div className="mt-4">
                <Label className="text-sm font-medium">Upload New Avatar</Label>
                <div className="mt-2">
                  <ImageUpload
                    value={formData.avatarUrl || ''}
                    onChange={handleAvatarUpload}
                    placeholder="Upload avatar"
                  />
                </div>
              </div>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Mail className="h-4 w-4" />
              <span>{formData.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Phone className="h-4 w-4" />
              <span>{formData.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>{formData.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>Joined {new Date(formData.joinDate).toLocaleDateString()}</span>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="dark:text-white">Personal Information</CardTitle>
            <CardDescription>Update your personal details and bio</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                disabled={!isEditing}
                rows={3}
              />
            </div>
            {isEditing && (
              <Button onClick={handleSave} className="w-full">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="dark:text-white">Notification Preferences</CardTitle>
            <CardDescription>Manage how you receive notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Receive notifications via email
                  </p>
                </div>
                <Switch
                  checked={formData.notifications.email}
                  onCheckedChange={(checked) => handleNotificationChange('email', checked)}
                  disabled={!isEditing}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>SMS Notifications</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Receive notifications via SMS
                  </p>
                </div>
                <Switch
                  checked={formData.notifications.sms}
                  onCheckedChange={(checked) => handleNotificationChange('sms', checked)}
                  disabled={!isEditing}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Low Stock Alerts</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Get notified when products are low in stock
                  </p>
                </div>
                <Switch
                  checked={formData.notifications.lowStock}
                  onCheckedChange={(checked) => handleNotificationChange('lowStock', checked)}
                  disabled={!isEditing}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>New Order Alerts</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Get notified when new orders are placed
                  </p>
                </div>
                <Switch
                  checked={formData.notifications.newOrders}
                  onCheckedChange={(checked) => handleNotificationChange('newOrders', checked)}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
