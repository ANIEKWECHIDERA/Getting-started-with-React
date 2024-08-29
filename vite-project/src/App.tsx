// import ListGroup from './components/ListGroup';
// import Message from './message';
// function App() {
//   const items = [
//     'Audio Technica Head Phones',
//     'PlayStation 5',
//     'Dell xp360',
//     'LG Curved Monitor',
//     'Ergonomic Chair',
//     'Black and Navy Blue shirts',
//     'New Smart Phone',
//   ];

//   const handleSelectItem = (index: number, item: string) => {
//     console.log(index, item);
//   };
//   return (
//     // JSX: javaScript XML
//     <div>
//       <ListGroup items={items} heading="List" onSelectItem={handleSelectItem} />
//       {/* <Message /> */}
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const handleClick = () => {
    setAlertVisibility(true);
  };
  const handleClose = () => {
    setAlertVisibility(false);
  };
  return (
    <div>
      {alertVisible && (
        <Alert onClose={handleClose}>
          <h1>Hi there</h1>
        </Alert>
      )}
      <Button onClick={handleClick} text="Press Here" />
    </div>
  );
}

export default App;
