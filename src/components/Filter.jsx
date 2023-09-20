export const Filter = ({filter, onSearch}) => {
    return(
        <div>
            <p>Find contact by name</p>
            <input
                type="text"
                value={filter}
                onChange={onSearch}
      />
        </div>
    );
};