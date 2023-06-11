import { createClient } from 'contentful-management';

// get your contentful space id and content delivery access token from your contentful space settings.
const contentfulClient = createClient({
  accessToken: process.env.REACT_APP_SPACE_ID,
});

async function AddNewRecipePage() {
  try {
    // replace YOUR_SPACE_ID with the id of your space
    const space = await contentfulClient.getSpace('akowgyznkoil');

    // replace YOUR_ENVIRONMENT_ID with your environment id (usually 'master')
    const environment = await space.getEnvironment('master');

    // creating the entry
    const entry = await environment.createEntry('recipeBook', { // replace 'post' with the content type id of your post
      fields: {
        title: {
          'en-US': 'Test Title',
        },
        body: {
          'en-US': 'Test Body',
        },
        // add other fields as needed
      },
    });

    // publish the entry
    await entry.publish();

    console.log(`Entry ${entry.sys.id} published.`);
  } catch (error) {
    console.error(error);
  }
}

// Call the function
AddNewRecipePage();

export default AddNewRecipePage