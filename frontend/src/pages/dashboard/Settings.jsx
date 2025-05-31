import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

function Settings() {
  const sections = [
    {
      title: 'Account Settings',
      settings: [
        {
          id: 'email-notifications',
          title: 'Email Notifications',
          description: 'Receive email notifications about your course progress and updates',
          type: 'toggle',
          value: true
        },
        {
          id: 'two-factor',
          title: 'Two-Factor Authentication',
          description: 'Add an extra layer of security to your account',
          type: 'toggle',
          value: false
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
          value: 'English'
        },
        {
          id: 'difficulty',
          title: 'Content Difficulty',
          type: 'select',
          options: ['Beginner', 'Intermediate', 'Advanced'],
          value: 'Intermediate'
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
          value: 'Public'
        }
      ]
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Settings</h1>

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">{section.title}</h2>
            </div>
            <div className="p-6 space-y-6">
              {section.settings.map((setting) => (
                <div key={setting.id} className="flex items-center justify-between">
                  <div className="flex-1 pr-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {setting.title}
                    </h3>
                    {setting.description && (
                      <p className="text-sm text-gray-500">{setting.description}</p>
                    )}
                  </div>
                  
                  {setting.type === 'toggle' && (
                    <button
                      className={`
                        relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
                        transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                        ${setting.value ? 'bg-primary-500' : 'bg-gray-200'}
                      `}
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
                      className="block w-48 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      value={setting.value}
                    >
                      {setting.options.map((option) => (
                        <option key={option} value={option}>
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
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Change Password</h2>
          </div>
          <div className="p-6">
            <form className="space-y-4">
              <Input
                label="Current Password"
                type="password"
                name="currentPassword"
              />
              <Input
                label="New Password"
                type="password"
                name="newPassword"
              />
              <Input
                label="Confirm New Password"
                type="password"
                name="confirmPassword"
              />
              <div className="flex justify-end">
                <Button type="submit">
                  Update Password
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-red-600">Danger Zone</h2>
          </div>
          <div className="p-6">
            <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
