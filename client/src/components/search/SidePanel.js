import React from 'react';

export const SidePanel = () => {
  const [toggle, setToggle] = useState(false);

  const filterToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <SearchContainer className={toggle ? 'filters-active' : ''}>
      <SearchHeader>
        <SearchTitle>Filters</SearchTitle>
        <SearchClose onClick={filterToggle}>
          <Line1 />
          <Line2 />
        </SearchClose>
        <SearchForm>
          <SearchCategories>
            <SearchCategory>
              <ItemTitle>Make and Model</ItemTitle>
              <SearchFieldSet>
                <SearchNode>
                  <SearchLabel>Make</SearchLabel>
                  <select>
                    <option>Any</option>
                    <option>Audi</option>
                  </select>
                </SearchNode>
                <SearchNode>
                  <SearchLabel>Model</SearchLabel>
                  <select>
                    <option>Any</option>
                    <option>A1</option>
                  </select>
                </SearchNode>
              </SearchFieldSet>
            </SearchCategory>
            <SearchCategory>
              <ItemTitle>Price</ItemTitle>
              <SearchPrice>
                <SearchNode>
                  <SearchLabel>Min Price</SearchLabel>
                  <select>
                    <option>£0</option>
                    <option>£500</option>
                  </select>
                </SearchNode>
                <SearchNode>
                  <SearchLabel>Max Price</SearchLabel>
                  <select>
                    <option>£5,000</option>
                    <option>£10,000</option>
                  </select>
                </SearchNode>
              </SearchPrice>
            </SearchCategory>
          </SearchCategories>
        </SearchForm>
      </SearchHeader>
    </SearchContainer>
  );
};
