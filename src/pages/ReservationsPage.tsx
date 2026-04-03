import React from 'react';
import ReservationForm from '../components/ReservationForm';

const ReservationsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-neutral-900 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Reservations</h1>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto px-6">
          Book your table in advance and enjoy a seamless coffee experience.
        </p>
      </div>
      <ReservationForm />
    </div>
  );
};

export default ReservationsPage;
