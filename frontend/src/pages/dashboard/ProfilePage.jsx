import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../context/AuthContext';

function ProfilePage() {
  const { user } = useAuth();
  
  const [profileData, setProfileData] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john@example.com',
    bio: user?.bio || 'Frontend Developer | Learning Enthusiast',
    location: user?.location || 'New York, USA',
    website: user?.website || 'https://johndoe.com',
    twitter: user?.twitter || '@johndoe',
    github: user?.github || 'johndoe',
    avatar: user?.avatar || null
  });

  const [isEditing, setIsEditing] = useState(false);
  const [originalData, setOriginalData] = useState(null);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); // This will clear the auth state and storage
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    setOriginalData(null);
    // Handle profile update logic here
    console.log('Profile updated:', profileData);
  };
  
  const handleEditToggle = () => {
    if (!isEditing) {
      // When entering edit mode, save the original data
      setOriginalData({...profileData});
    } else if (originalData) {
      // When cancelling, restore the original data
      setProfileData({...originalData});
      setOriginalData(null);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Profile Settings</h1>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          {/* Profile Header */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative">
              <div className="relative w-32 h-32 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-md">
                {profileData.avatar ? (
                  <img
                    src={profileData.avatar}
                    alt={profileData.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className={`absolute inset-0 flex items-center justify-center bg-gray-200 ${profileData.avatar ? 'hidden' : 'flex'}`}>
                  <span className="text-4xl font-medium text-gray-500">
                    {profileData.name ? profileData.name.split(' ').map(n => n[0]).join('').toUpperCase() : 'U'}
                  </span>
                </div>
              </div>
              {isEditing && (
                <button className="absolute bottom-0 right-0 bg-primary-500 text-white p-2 rounded-full shadow-lg hover:bg-primary-600">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{profileData.name}</h2>
              <p className="text-gray-600">{profileData.bio}</p>
            </div>
          </div>

          {/* Profile Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                name="name"
                value={profileData.name}
                onChange={handleChange}
                disabled={!isEditing}
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
              <div className="md:col-span-2">
                <Input
                  label="Bio"
                  name="bio"
                  value={profileData.bio}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <Input
                label="Location"
                name="location"
                value={profileData.location}
                onChange={handleChange}
                disabled={!isEditing}
              />
              <Input
                label="Website"
                name="website"
                value={profileData.website}
                onChange={handleChange}
                disabled={!isEditing}
              />
              <Input
                label="Twitter"
                name="twitter"
                value={profileData.twitter}
                onChange={handleChange}
                disabled={!isEditing}
              />
              <Input
                label="GitHub"
                name="github"
                value={profileData.github}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              {isEditing && (
                <>
                  <Button 
                    type="button"
                    variant="secondary"
                    onClick={handleEditToggle}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    variant="primary"
                  >
                    Save Changes
                  </Button>
                </>
              )}
              {!isEditing && (
                <Button 
                  type="button"
                  variant="primary"
                  onClick={handleEditToggle}
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </form>

          {/* Logout Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Button 
              onClick={handleLogout}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-md transition-colors text-sm font-medium"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
