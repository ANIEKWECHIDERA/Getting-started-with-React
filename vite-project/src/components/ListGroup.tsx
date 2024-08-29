import { useState } from 'react';

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (index: number, item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // this is a react hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items in the list</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(index, item);
            }}
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
