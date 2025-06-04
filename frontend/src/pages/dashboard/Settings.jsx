import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

function Settings() {
  // State for toggles
  const [toggles, setToggles] = useState({
    'email-notifications': true,
    'two-factor': false
  });

  // State for selects
  const [selects, setSelects] = useState({
    'language': 'English',
    'difficulty': 'Intermediate',
    'profile-visibility': 'Public'
  });

  // Toggle handler
  const handleToggle = (id) => {
    setToggles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Select handler
  const handleSelectChange = (id, value) => {
    setSelects(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const sections = [
    {
      title: 'Account Settings',
      settings: [
        {
          id: 'email-notifications',
          title: 'Email Notifications',
          description: 'Receive email notifications about your course progress and updates',
          type: 'toggle',
          value: toggles['email-notifications']
        },
        {
          id: 'two-factor',
          title: 'Two-Factor Authentication',
          description: 'Add an extra layer of security to your account',
          type: 'toggle',
          value: toggles['two-factor']
        }
      ]
    },
    {
      title: 'Learning Preferences',
      settings: [
        {
          id: 'language',
          title: 'Preferred Language',
          type: 'select',
          options: ['English', 'Spanish', 'French'],
          value: selects['language']
        },
        {
          id: 'difficulty',
          title: 'Content Difficulty',
          type: 'select',
          options: ['Beginner', 'Intermediate', 'Advanced'],
          value: selects['difficulty']
        }
      ]
    },
    {
      title: 'Privacy',
      settings: [
        {
          id: 'profile-visibility',
          title: 'Profile Visibility',
          description: 'Control who can see your profile and learning activity',
          type: 'select',
          options: ['Public', 'Private', 'Friends Only'],
          value: selects['profile-visibility']
        }
      ]
    }
  ];

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl font-semibold text-white mb-6">Settings</h1>

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <div className="px-4 sm:px-6 py-4 border-b border-gray-700">
              <h2 className="text-lg font-medium text-white">{section.title}</h2>
            </div>
            <div className="p-4 sm:p-6 space-y-6">
              {section.settings.map((setting) => (
                <div key={setting.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-200">
                      {setting.title}
                    </h3>
                    {setting.description && (
                      <p className="text-sm text-gray-400 mt-1">{setting.description}</p>
                    )}
                  </div>
                  
                  {setting.type === 'toggle' && (
                    <button
                      type="button"
                      className={`
                        relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
                        transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-800
                        ${setting.value ? 'bg-primary-500' : 'bg-gray-600'}
                      `}
                      onClick={() => handleToggle(setting.id)}
                    >
                      <span
                        className={`
                          pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 
                          transition duration-200 ease-in-out
                          ${setting.value ? 'translate-x-5' : 'translate-x-0'}
                        `}
                      />
                    </button>
                  )}

                  {setting.type === 'select' && (
                    <select
                      className="block w-full sm:w-48 rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm py-1.5 px-3"
                      value={setting.value}
                      onChange={(e) => handleSelectChange(setting.id, e.target.value)}
                    >
                      {setting.options.map((option) => (
                        <option key={option} value={option} className="bg-gray-700">
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Password Change Section */}
        <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700">
          <div className="px-4 sm:px-6 py-4 border-b border-gray-700">
            <h2 className="text-lg font-medium text-white">Change Password</h2>
          </div>
          <div className="p-4 sm:p-6">
            <form className="space-y-4">
              <Input
                label="Current Password"
                type="password"
                name="currentPassword"
                placeholder="••••••••"
              />
              <Input
                label="New Password"
                type="password"
                name="newPassword"
                placeholder="••••••••"
              />
              <Input
                label="Confirm New Password"
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
              />
              <div className="flex justify-end pt-2">
                <Button type="submit" className="w-full sm:w-auto">
                  Update Password
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-gray-800 rounded-lg shadow-lg border border-red-500/30">
          <div className="px-4 sm:px-6 py-4 border-b border-red-500/30">
            <h2 className="text-lg font-medium text-red-400">Danger Zone</h2>
          </div>
          <div className="p-4 sm:p-6">
            <div className="space-y-4">
              <p className="text-sm text-gray-300">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-red-500 text-red-400 hover:bg-red-500/10 hover:text-red-300 hover:border-red-400 focus:ring-red-500"
                onClick={(e) => {
                  e.preventDefault();
                  // Add delete account logic here
                  console.log('Delete account clicked');
                }}
              >
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
