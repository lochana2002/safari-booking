import React from "react";

interface ActivitySectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  link?: string;
}

const ActivitySection: React.FC<ActivitySectionProps> = ({
  title,
  description,
  image,
  reverse = false,
  link,
}) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 ${reverse ? "md:flex-row-reverse" : ""}`}>
      {image && (
        <div className="relative w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ActivitySection;
