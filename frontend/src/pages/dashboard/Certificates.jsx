import React from 'react';
import Button from '../../components/Button';

function Certificates() {
  // Mock data - replace with API calls later
  const certificates = [
    {
      id: 1,
      course: 'JavaScript Fundamentals',
      issueDate: '2025-03-15',
      instructor: 'John Doe',
      credential: 'CERT-JS-123',
      thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465e2477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      course: 'React Basics',
      issueDate: '2025-02-20',
      instructor: 'Jane Smith',
      credential: 'CERT-REACT-456',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">My Certificates</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div key={cert.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative">
              <img
                src={cert.thumbnail}
                alt={cert.course}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/600x400/4f46e5/ffffff?text=${encodeURIComponent(cert.course)}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-semibold">{cert.course}</h3>
                  <p className="text-sm opacity-90">Instructor: {cert.instructor}</p>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Issue Date:</span>
                  <span className="text-gray-900">{new Date(cert.issueDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Credential ID:</span>
                  <span className="text-gray-900">{cert.credential}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="primary" className="flex-1">
                  Download
                </Button>
                <Button variant="outline" className="flex-1">
                  Share
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {certificates.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No certificates yet</h3>
          <p className="text-gray-600">Complete courses to earn certificates</p>
        </div>
      )}
    </div>
  );
}

export default Certificates;
