// src/components/Menu.jsx
import React from "react";

const menuSections = [
  {
    title: "Breakfast",
    hours: "8 AM – 11 AM",
    items: ["Coffee & Tea", "Pastries", "Breakfast Sandwiches"],
  },
  {
    title: "Lunch",
    hours: "11 AM – 3 PM",
    items: ["Argentine Empanadas", "Salads", "Sandwiches"],
  },
  {
    title: "Brunch",
    hours: "Open – 3 PM",
    items: ["Brunch Platter", "Mimosas"],
  },
  {
    title: "Drinks",
    hours: "All Day",
    items: ["Empanadas", "Baked Goods & Desserts", "Hot & Cold Drinks", "Cocktails, Beer & Wine"],
  },
];

const specialties = [
  { name: "Argentine Empanadas", description: "Authentic, delicious hand-held pastries." },
  { name: "Alfajorcitos de Maicena", description: "Sweet shortbread treats filled with dulce de leche." },
];

const Menu = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Our Menus</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {menuSections.map((section) => (
          <div key={section.title} className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-2xl font-semibold border-b pb-2">{section.title}</h2>
            <p className="text-sm italic mt-1">{section.hours}</p>
            <ul className="mt-2 list-disc list-inside">
              {section.items.map((item) => (
                <li key={item} className="mt-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Specialties</h2>
        <div className="space-y-4">
          {specialties.map((spec) => (
            <div key={spec.name} className="p-4 rounded-lg bg-gray-50 shadow">
              <h3 className="text-xl font-medium">{spec.name}</h3>
              <p className="mt-1 text-gray-700">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-4">Dining Hours</h2>
        <ul className="space-y-1 text-gray-800">
          <li>Breakfast: 8 AM – 11 AM</li>
          <li>Lunch: 11 AM – 3 PM</li>
          <li>Brunch: Open – 3 PM</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
