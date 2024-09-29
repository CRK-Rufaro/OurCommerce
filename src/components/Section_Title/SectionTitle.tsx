import React from 'react';
import './SectionTitle.scss';

interface SectionTitleInterface {
  title: string;
  subtitle: string;
}

export const SectionTitle: React.FC<SectionTitleInterface> = ({ title, subtitle }) => {
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
};
