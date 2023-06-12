import { createClient } from 'contentful-management';
import React, { useState } from 'react';
import MainLayout from '../Layouts/MainLayout';

// get your contentful space id and content delivery access token from your contentful space settings.
const contentfulClient = createClient({
  accessToken: process.env.REACT_APP_CONTENT_MANAGEMENT_TOKEN,
});

const spaceID = process.env.REACT_APP_SPACE_ID;

export default function AddNewRecipePage() {
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const space = await contentfulClient.getSpace(`${spaceID}`);
      const environment = await space.getEnvironment('master');

      const entry = await environment.createEntry('recipeBook', {
        fields: {
          title: {
            'en-US': title,
          },
          instructions: {
            'en-US': instructions,
          },
          category: {
            'en-US': category,
          },
          // add other fields as needed
        },
      });

      await entry.publish();

      console.log(`Entry ${entry.sys.id} published.`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <form onSubmit={handleSubmit}>
        <label>Add your recipe title:</label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Add your Ingredients and Instructions:</label>
        <input
          type="text"
          id="instructions"
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <label>Category: </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          {/* Add more options as needed */}
        </select>
        <button type="submit">Submit</button>
      </form>
    </MainLayout>
  );
}

