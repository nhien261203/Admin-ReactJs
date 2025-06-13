// src/App.jsx
import React from "react";
import IphoneSection from "./IphoneSection";
import mockIphones from "./mockIphone";

function PhoneSection() {
  return (
    <div className="container mx-auto py-6">
      <IphoneSection products={mockIphones} />
    </div>
  );
}

export default PhoneSection;
