import '../Styles/component.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Main from './Category/MainRecipes'
import Appetizer from './Category/Appetizer';
import Desserts from './Category/Dessert';
import SpecialRecipes from './Category/Special';
import QuickRecipes from './Category/QuickRecipes';

export default function RecipeTabs() {
  return (
    <div className='recipe-tab'>
          <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
            <Tab eventKey="contact" title="" disabled></Tab>
            <Tab eventKey="home" title="Appetizer"><Appetizer/></Tab>
            <Tab eventKey="main" title="Main"><Main/></Tab>
            <Tab eventKey="dessert" title="Dessert"><Desserts/></Tab>
            <Tab eventKey="special" title="Specials"><SpecialRecipes/></Tab>
            <Tab eventKey="quick" title="Quick Recipes"><QuickRecipes/></Tab>
          </Tabs>
    </div>
    
  );
}
