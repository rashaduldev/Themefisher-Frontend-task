import React from "react";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="relative z-10 bg-repeat-y bg-center"
      style={{
        backgroundImage: "url('/assets/icons/Mask group.svg')",
        backgroundSize: "cover",
      }}
    >
      {/* Color overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50 pointer-events-none"
        // Adjust opacity (0.0 to 1.0) to control darkness
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default SectionWrapper;
