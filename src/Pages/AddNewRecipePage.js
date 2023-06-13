
// import { createClient } from 'contentful-management';
// import { useState } from 'react';
// import MainLayout from '../Layouts/MainLayout';

// const contentfulClient = createClient({
//   accessToken: process.env.REACT_APP_CONTENT_MANAGEMENT_TOKEN,
// });

// const spaceID = process.env.REACT_APP_SPACE_ID;

// export default function AddNewRecipePage() {
//   const [title, setTitle] = useState('');
//   const [ingredients, setIngredients] = useState([]);
//   const [newIngredient, setNewIngredient] = useState('');
//   const [instructions, setInstructions] = useState('');
//   const [category, setCategory] = useState('');
//   const [imageFile, setImageFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const space = await contentfulClient.getSpace(`${spaceID}`);
//       const environment = await space.getEnvironment('master');

//       const asset = await environment.createAssetFromFiles({
//         fields: {
//           file: {
//             'en-US': {
//               contentType: imageFile.type,
//               fileName: imageFile.name,
//               file: imageFile,
//             },
//           },
//         },
//       });

//       await asset.processForAllLocales();

//       try {
//         await asset.publish();
//       } catch (error) {
//         if (error.name === 'VersionMismatch') {
//           const publishedAsset = await environment.getAsset(asset.sys.id);
//           if (!publishedAsset.isPublished()) {
//             await publishedAsset.publish();
//           }
//         } else {
//           throw error;
//         }
//       }

//       const imageReference = {
//         sys: {
//           type: 'Link',
//           linkType: 'Asset',
//           id: asset.sys.id,
//         },
//       };

//       const entry = await environment.createEntry('recipeBook', {
//         fields: {
//           title: {
//             'en-US': title,
//           },
//           ingredients: {
//             'en-US': ingredients,
//           },
//           instructions: {
//             'en-US': instructions,
//           },
//           category: {
//             'en-US': category,
//           },
//           image: {
//             'en-US': imageReference,
//           },
//         },
//       });

//       await entry.publish();

//       console.log(`Entry ${entry.sys.id} published.`);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleAddIngredient = () => {
//     setIngredients([...ingredients, newIngredient]);
//     setNewIngredient('');
//   };

//   return (
//     <MainLayout>
//       <div className='AddNewRecipe'>
//         <form onSubmit={handleSubmit}>
//           <label>Add your recipe title:</label>
//           <input
//             type="text"
//             id="title"
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           <label>Add your Ingredients:</label>
//           <div>
//             <input 
//               type="text"
//               id='ingredient'
//               value={newIngredient}
//               onChange={(e) => setNewIngredient(e.target.value)}
//               placeholder="Enter an ingredient"
//             />
//             <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
//           </div>
//           <ul>
//             {ingredients.map((ingredient, index) => (
//               <li key={index}>{ingredient}</li>
//             ))}
//           </ul>
//           <label>Add your Instructions:</label>
//           <textarea
//             type="text"
//             id="instructions"
//             placeholder="Instructions"
//             value={instructions}
//             onChange={(e) => setInstructions(e.target.value)}
//           />
//           <label>Category: </label>
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="">Select a category</option>
//             <option value="Breakfast">Breakfast</option>
//             <option value="Lunch">Lunch</option>
//             {/* Add more options as needed */}
//           </select>
//           <label>Add an image:</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImageFile(e.target.files[0])}
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </MainLayout>
//   );
// }


import { createClient } from 'contentful-management';
import { useState } from 'react';
import MainLayout from '../Layouts/MainLayout';

const contentfulClient = createClient({
  accessToken: process.env.REACT_APP_CONTENT_MANAGEMENT_TOKEN,
});

const spaceID = process.env.REACT_APP_SPACE_ID;

export default function AddNewRecipePage() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const space = await contentfulClient.getSpace(`${spaceID}`);
      const environment = await space.getEnvironment('master');

      const asset = await environment.createAssetFromFiles({
        fields: {
          file: {
            'en-US': {
              contentType: imageFile.type,
              fileName: imageFile.name,
              file: imageFile,
            },
          },
        },
      });

      await asset.processForAllLocales();

      try {
        await asset.publish();
      } catch (error) {
        if (error.name === 'VersionMismatch') {
          const publishedAsset = await environment.getAsset(asset.sys.id);
          if (!publishedAsset.isPublished()) {
            await publishedAsset.publish();
          }
        } else {
          throw error;
        }
      }

      const imageReference = {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: asset.sys.id,
        },
      };

      const entry = await environment.createEntry('recipeBook', {
        fields: {
          title: {
            'en-US': title,
          },
          ingredients: {
            'en-US': ingredients,
          },
          instructions: {
            'en-US': instructions,
          },
          category: {
            'en-US': category,
          },
          image: {
            'en-US': imageReference,
          },
        },
      });

      await entry.publish();

      console.log(`Entry ${entry.sys.id} published.`);

      setFormSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, newIngredient]);
    setNewIngredient('');
  };

  return (
    <MainLayout>
      <div className='AddNewRecipe'>
        {!formSubmitted ? (
          <form onSubmit={handleSubmit}>
            <label>Add your recipe title:</label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Add your Ingredients:</label>
            <div>
              <input 
                type="text"
                id='ingredient'
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                placeholder="Enter an ingredient"
              />
              <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
            </div>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <label>Add your Instructions:</label>
            <textarea
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
            <label>Add an image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div style={{
                        color:'green', 
                        fontSize:'3rem', 
                        display:'flex', 
                        justifyContent:'center', 
                        marginTop:'48%', 
                        alignContent:'center'}}>Recipe submitted successfully!</div>
        )}
      </div>
    </MainLayout>
  );
}
