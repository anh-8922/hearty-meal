
import Linkify from 'react-linkify';

// const LineBreak = () => <br />;

const CustomLinkify = ({ children }) => (
  <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
    <a href={decoratedHref} 
       key={key} 
       target="_blank" 
       rel="noopener noreferrer"
       style={{ textDecoration: 'none' }} >
      {decoratedText}
    </a>
  )}>
    {children}
  </Linkify>
);

export default function ItemCard(props) {
  const { id, itemImage, itemIngredients, itemInstructions, itemTitle } = props;

  return (
    <div key={id} className="item-card">
      <h1>{itemTitle}</h1>
      <div className="group-1">
        <p>
          <img src={itemImage} alt={itemTitle} style={{ width: '400px', height: '300px' }} />
        </p>
        <ul>
          {itemIngredients.map((ingredient, index) => (
            <li key={index} style={{ listStyle: 'none' }}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'sans-serif', fontSize: '1rem', padding: '1rem 2rem',   }}>
          <CustomLinkify >{itemInstructions}</CustomLinkify>
        </pre>
      </div>
    </div>
  );
}

