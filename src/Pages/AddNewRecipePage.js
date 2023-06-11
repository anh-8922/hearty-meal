import { createClient } from 'contentful-management';
import React, { useState } from 'react';

// get your contentful space id and content delivery access token from your contentful space settings.
const contentfulClient = createClient({
  accessToken: process.env.REACT_APP_CONTENT_MANAGEMENT_TOKEN,
});

const spaceID = process.env.REACT_APP_SPACE_ID;

export default function AddNewRecipePage() {
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');

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
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          id="instructions"
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

