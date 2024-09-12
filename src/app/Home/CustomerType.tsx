import React from 'react';

interface CustomerTypeProps {
  type: 'personal' | 'business';
}

const CustomerType: React.FC<CustomerTypeProps> = ({ type }) => {
  return (
    <h2 className="text-6xl font-bold text-primary-blue-lighter max-md:max-w-full max-md:text-4xl">
      <span className="text-black">Đối với khách hàng</span>
      <br />
      {type === 'personal' ? 'CÁ NHÂN' : 'DANH NGHIỆP'}
    </h2>
  );
};

export default CustomerType;