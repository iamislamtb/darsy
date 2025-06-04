import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import SvgIcon from './common/SvgIcon';

const RegistrationForm = memo(({ formData, errors, isLoading, handleChange, handleSubmit, setStep }) => {
  if (!formData.role) {
    return (
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-gray-100">
        <div className="text-center">
          <p className="text-gray-700">Please select a role first</p>
          <button
            onClick={() => setStep(1)}
            className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            Back to Role Selection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-gray-100">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
          <SvgIcon name="auth/user-circle" className="w-10 h-10 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          Join as a {formData.role === 'teacher' ? 'Teacher' : 'Student'}
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-primary-600 hover:text-primary-500">
            Sign in
          </Link>
        </p>
      </div>

      <button
        type="button"
        onClick={() => setStep(1)}
        className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
      >
        <SvgIcon name="common/arrow-left" className="h-4 w-4 mr-1" />
        Back to role selection
      </button>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <Input
              id="name"
              name="name"
              type="text"
              label="Full Name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <Input
              id="email"
              name="email"
              type="email"
              label="Email Address"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <Input
              id="password"
              name="password"
              type="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="••••••••"
              required
            />
          </div>
          <div>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
        </div>

        {errors.submit && (
          <div className="text-red-600 text-sm text-center">
            {errors.submit}
          </div>
        )}

        <div>
          <Button
            type="submit"
            className="w-full justify-center py-3"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </div>
      </form>
    </div>
  );
});

export default RegistrationForm;
