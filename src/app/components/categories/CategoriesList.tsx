import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../GlobalRedux/store';

export default function CategoriesList() {
  const newCategories = useSelector((state: RootState) => state.categories.newCategories);
  const isLoading = useSelector((state: RootState) => state.categories.inProgress);

  return (
    <div>
      {/* Display a loading message if data is being fetched */}
      {isLoading && <h5>Loading... Please wait...</h5>}

      {/* Render the categories list */}
      {newCategories && newCategories.length > 0 ? (
        <ul className="list-group">
          {newCategories.map((category) => (
            <li key={category.id} className="list-group-item">
              <h5>{category.category}</h5>
            </li>
          ))}
        </ul>
      ) : (
        // Display a message if there are no categories
        !isLoading && <h5>No categories available.</h5>
      )}
    </div>
  );
}
