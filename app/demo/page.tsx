'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';
import { Metadata } from 'next';

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    shulName: '',
    email: '',
    city: '',
    startDate: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', shulName: '', email: '', city: '', startDate: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Ready to Get Your Shul Organized?
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Let's fix the chaos. Fill out the form below.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="p-8 sm:p-12">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    We'll be in touch soon!
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Thank you for your interest. We'll reach out shortly to get your shul organized.
                  </p>
                  <Button 
                    variant="outline"
                    size="md"
                    onClick={() => setStatus('idle')}
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Web3Forms Access Key */}
                  <input type="hidden" name="access_key" value="0fc034ee-a675-4bc3-b8d5-600783989767" />
                  <input type="hidden" name="redirect" value="false" />
                  <input type="hidden" name="subject" value="New Shul Registration from Cholim List" />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="shulName" className="block text-sm font-medium text-gray-700 mb-2">
                      Shul Name *
                    </label>
                    <input
                      type="text"
                      id="shulName"
                      name="shulName"
                      required
                      value={formData.shulName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your Shul or Organization"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="New York"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                      When would you like to start? *
                    </label>
                    <select
                      id="startDate"
                      name="startDate"
                      required
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a timeframe</option>
                      <option value="immediately">Immediately</option>
                      <option value="this-week">This week</option>
                      <option value="next-week">Next week</option>
                      <option value="this-month">This month</option>
                      <option value="just-exploring">Just exploring</option>
                    </select>
                  </div>
                  
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      There was an error submitting the form. Please try again or email us directly.
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Get My Shul Organized'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
