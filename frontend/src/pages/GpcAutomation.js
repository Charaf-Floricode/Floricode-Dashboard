// src/pages/GpcAutomation.js
import React from 'react';
import HealthSection from '../components/GPC/HealthSection';
import ImportSection from '../components/GPC/ImportSection';
import AccessSection from '../components/GPC/AccessSection';
import './GPC.css'

export default function GpcAutomation() {
  return (
    <main className="dashboard">
      <HealthSection />
      <ImportSection />
      <AccessSection />
    </main>
  );
}
